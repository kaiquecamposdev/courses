# Stream 

## Readable Streams & Writable Streams

São dois dos tipos de Streams, sendo Readable que irá ler as informações, em quanto o Writable irá mandar informações. Exemplos de Apps que utilizam as Streams: Netflix & Spotify.

O processo de carregar um vídeo e não colocar a sobrecarga do upload no cliente.

Exemplo:

- **request : Readable Stream**
- **response : Writable Stream**

## Code & Explanation

```js
process.stdin
  .pipe(process.stdout)
```

Nesse exemplo de código podemos observar os dois tipos de Stream. `process.stdin` sendo a **Readable Stream** responsável por ler, e o `process.stdout` sendo uma **Writable Stream** que armazena o que está sendo escrito no terminal.

O `process` é uma variável global do node que armazena algumas Stream como essas citadas. Toda Stream possui o método `pipe` esse método tem como finalidade encaminhar algo para uma saída, que nesse caso é a saída do terminal.

### Readable Stream

```js
import { Readable } from 'node:stream'

// 100s -> Inserção no banco de dados
class OneToHundredStream extends Readable {
  index = 1

// 10mb/s -> 10.000
  _read() {
    const i = this.index++

// Readable Streams / Writable Streams
    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

new OneToHundredStream()
  .pipe(process.stdout)
```

Toda **Readable Stream** deverá possuir o método `_read`, esse é o método que irá ler os dados e armazená-los ou fornece-los caso o Readable for requisitado. O método `push()` é quem permite fornecer os dados depois de realizar o deveria ser feito.

### Writable Stream

```js
import { Writable } from 'node:stream'

class MultiplyByTenStream extends Writable {
  _write(chunk, enconding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback();
  }
}

new OneToHundredStream()
  .pipe(new MultiplyByTenStream())
```

No Writable está responsável por retornar algo depois de uma operação feita com os dados, para isso todo Writable deverá possuir um método chamado `_write` que possui 3 parâmetros: 

-  chunk : Um pedaço que foi lido da Readable Stream.
-  enconding : Qual tipo de codificação da informação.
-  callback : É uma função que será executada após a Writable Stream realizar o que precisava ser feito com a informação obtida.

### Transform Stream

```js
class ReverseNumberStream extends Transform {
  _transform(chunk, enconding, callback) {
    const transformed = (Number(chunk.toString())) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

new OneToHundredStream()
  .pipe(new ReverseNumberStream())
  .pipe(new MultiplyByTenStream())
```

Transform sempre receberá o método **_transform**, o transform é basicamente 2 em 1 ele irá realizar as mesmas ações da natureza do **Readable Streams e Writable Streams**.

#### Conexão entre dois servidores (Fetch API)

O node nos permite abrir uma porta de conexão com outro server e deixar uma espécie de "túnel" interligando ambos, permitindo o envio de informações constante sem com que a conexão seja desfeita.

```js
import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

fetch('http://locahost:8081', {
  method: 'POST',
  body: new OneToHundredStream(),
})
```

Enviamos para nosso servidor uma Stream Readable que irá printar no console uma iteração 1 > 100, com isso no console do outro servidor aparacerá essa iteração.
O essa ligação só é permitida na v18.12.1 do node. Ela é chamada de Fetch API. 

#### Buffers

Haverá casos em que precisaremos ler todos os dados antes de processar esses dados.

```js
const server = http.createServer(async (req, res) => {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const fullStreamContent = Buffer.concat(buffers).toString()

  console.log(fullStreamContent)

  return res.end(fullStreamContent)

  // return req
  //   .pipe(new InverseNumberStream())
  //   .pipe(res)
}) 
```

No outro servidor apenas pegamos a resposta:

```js
class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 5) {
        this.push(null)
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}

fetch('http://localhost:3334', {
  method: 'POST',
  body: new OneToHundredStream(),
}).then((response) => {
  return response.text()
}).then((data) => {
  console.log(data)
})
```

#### Buffers (explicação)

**Buffer** é uma entidade que armazena elementos temporariamente em um espaço na sua memória, a transferencia desses dados após armazenar é feita em formato de **binário**, para que esses dados de uma forma mais perfomática.

Exemplo:

```js
const buf = Buffer.from("Hello")

console.log(buf); // 68 65 6c 6c 6f
console.log(buf.toJSON()) // { type: "Buffer", data: [ 104, 101, 108, 108, 111 ] }
```

Armazenamos a string Hello no buffer, e depois foi retornado os dados em formato hexadecimal(base 16), caso passarmos para JSON ele irá nos retornar em decimal(base 10). O que é para a máquina uma forma mais fácil e rápida de comprender aqueles dados.

#### Middlewares

Middlewares funcionam como um interceptador, ele é facilmente identificado no código quando existe uma função que recebe como parametro o request e response.

Toda vez que for requisitado nosso servidor, o middleware irá interceptar essa requisição para que ela possa ser tratada ou transformada, como nesse caso:

```js
// Arquivo src/server.js

await json(req, res)

// Arquivo src/middlewares/json.js

export async function json(req, res) {
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
    console.log(users)
  } catch {
    req.body = null
  }

  res.setHeader('Content-type', 'application/json')
}
```

**Para importar o middleware foi necessário adicionar o .js, por conta que quando o node está no `type: "module"`, é necessário adicionar a extensão nas importações de arquivos**.