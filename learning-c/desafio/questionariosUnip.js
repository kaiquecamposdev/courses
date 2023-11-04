import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

// # LIÇÃO 1

// var n1 = 15
// var n2 = 3
// var n3;

// n2 += n1
// n3 = n2
// n2 = 2

// console.log(n1 + ' ' + n2)
// n1 = n2++
// console.log(n1 + ' ' + n2)

// # LIÇÃO 2

// var a = 15
// var b = 3
// var c, d

// b += a
// c = b
// b = 2
// d = c / b

// console.log(a + ' ' + b + ' ' + c + ' ' + d)

// # LIÇÃO 3

// var a = 15
// var b = 3
// var c, d

// c = a / b
// d = a % b

// console.log(a + ' ' + b + ' ' + c + ' ' + d);

// # LIÇÃO 4

// var a = 8
// var b

// b =++ a

// console.log(a + ' ' + b)

// b = a++

// console.log(a + ' ' + b)

// # LIÇÃO 5

// var a = 15
// var b = 2

// b *= a

// console.log(a + ' ' + b)
// b = a--
// console.log(a + ' ' + b);

// # LIÇÃO 6

// var a = 7
// var b, c, d, e, f
// a--
// b = a + 5
// c = (b - 5) * 3
// c++
// d = (c / 5) + a
// e = d % a
// f = Math.pow(e, 2)

// console.log(a + ' ' + f)

// # LIÇÃO 7

// var x = 3
// var y, z, w, t, k
// y = Math.pow(x, 2) + ((14 + 4) / 2) * 9 - 10
// y++
// z = "Lógica"
// w = z + "Programação"
// x--
// t = (x <= y) && (!(y != x)) == (y >= x)
// k = !t || (x > y)

// console.log(x + ' ' + t + '' + k)

// # LIÇÃO 8

// var ano

// rl.question('Digite o ano: ', (input) => {
// ano = input

// if(ano % 100 == 0) {
//    if (ano % 400 == 0){
//       console.log("O Ano " + ano + " é bissexto ");
//    } else{
//       console.log(" O Ano " + ano + " não é bissexto");
//    }
// } else {
//    if (ano % 4 == 0){
//       console.log("O Ano " + ano + " é bissexto ");
//    } else{
//       console.log(" O Ano " + ano + " não é bissexto");
//    }
// }

// rl.close();
// });

// # LIÇÃO 9

// var ch

// rl.question('Estado civil: ', (input) => {
//    ch = input

//    switch(ch) {
//       case 'C':
//          console.log("Casado \n");
//          break;
//       case 'S':
//          console.log("Solteiro \n");
//          break;
//       case 'D':
//          console.log("Divórcio \n");
//          break;
//       case 'V':
//          console.log("Viúvo \n");
//          break;
//       default:
//          console.log("Inválido \n");
//          break;
//    }

//    rl.close()
// })

// # LIÇÃO 10

// var x = 5
// var y = 7
// var z = 3

// if((y - 1) > 2){
//    y = y + 2
//    console.log(y)
// }else{
//    y = y - 2
//    console.log(y)
// }
// z = z + x + y
// console.log(z)

// # LIÇÃO 11

// var totalFaltas
// var n1, n2, media

// rl.question('Digite a 1a nota: ', (input) => {
//    n1 = parseFloat(input)
//    rl.question('Digite a 2a nota: ', (input) => {
//       n2 = parseFloat(input)
//       rl.question('Digite o total de faltas: ', (input) => {
//          totalFaltas = parseFloat(input)

//          media = parseFloat((n1 + n2) / 2);

//          if(media >= 5){
//             console.log("Aprovado por nota");

//             if(totalFaltas <= 10) {
//                   console.log("e esta aprovado. ")
//             } else{
//                console.log(", mas reprovou por falta. s") ;
//             }
//          }else{
//                console.log("Nota abaixo da media.");
//          }
//          rl.close()
//       })
//    })
// })

// # LIÇÃO 12

// var idade

// rl.question('Digite a idade: ', (input) => {
//    idade = input

//    if(idade < 10){
//       console.log("Crinça");
//    }else if(idade >= 10 && idade <= 14){
//       console.log("Infantil");
//    }else if(idade >= 15 && idade <= 17){
//       console.log("Juvenil");
//    }else if(idade >= 18){
//       console.log("Adulto");
//    }else{
//       console.log("Classificação inválida");
//    }
//    rl.close()
// })

// # LIÇÃO 13

// var i = 1
// var num
// var result = 0

// function getInput() {
//   rl.question('Digite 10 números: ', (input) => {

//     console.log(`Número ${i}: `)
//     num = input
//     result += parseFloat(num)
//     i++

//     if(i <= 10) {
//       getInput()
//     } else {
//       console.log(`Resultado: ${result}`)
//       rl.close()
//     }
//   })
// }
// getInput()

// # LIÇÃO 14

// function getInput() {
//   rl.question("Digite um número diferente de zero: ", (input) => {
//     const num = parseInt(input);
//     console.log(`Número digitado: ${num}\n`);

//     if (num !== 0) {
//       getInput();
//     } else {
//       rl.close();
//       console.log(`Número digitado: ${num}\nPrograma Finalizado!`);
//     }
//   });
// }

// getInput();

// # LIÇÃO 15

// function getInput() {
//   rl.question('Digite um número entre 1 e 4: ', (input) => {
//     const num = parseFloat(input)

//     if (num < 1 || num > 4) {
//       console.log('Número inválido!')
//       console.log('Digite novamente... ')
//       getInput()
//     } else {
//       console.log(`O número digitado é: ${num}`)
//       rl.close()
//     }
//   })
// }
// getInput()

// # LIÇÃO 16

//   rl.question('Digite o valor do limite inferior: ', (input) => {
//     const inferior = parseFloat(input)

//     rl.question('Digite o valor do limite superior: ', (input) => {
//       const superior = parseFloat(input)
//       let x

//       for (x = inferior; x <= superior; x++) {
//         console.log(x)
//       }
//       rl.close()
//     })
//   })

// # LIÇÃO 17

// rl.question('Inicio: ', (input) => {
//   const vi = parseFloat(input)

//   rl.question('Fim: ', (input) => {
//     const vf = parseFloat(input)
//     let x

//     for (x = vi; x <= vf; x += 2) {
//       console.log(x)
//     }
//     rl.close()
//   })
// })

// LIÇÃO 18

// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }

// for (i = 0; i < 10; i++) {
//   console.log(i)
// }

// LIÇÃO 19

// let i
// let result
// let ant = 0
// let prox = 1

// for (i = 0; i < 10; i++) {
//   result = ant + prox
//   ant = prox
//   prox = result

//   console.log(`Iteração ${i}: ${result}`)
// }

// LIÇÃO 20

// let x

// for (x = 1; x <= 19; x++) {
//   console.log('*')
// }
// for (x = 0; x <= 14; x = x + 2) {
//   console.log(x)
// }
// for (x = 1; x <= 19; x++) {
//   console.log('*')
// }

// LIÇÃO 21

// function calcular(x, y, z) {
//   return Math.pow(x, 2) + (y + z)
// }
// console.log(`Resultado: ${calcular(2, 3, 4)}`)

// LIÇÃO 22

// const nome = []
// const contadores = {
//   a: 0,
//   e: 0,
//   i: 0,
//   o: 0,
//   u: 0,
// }

// rl.question('Digite uma frase: ', (input) => {
//   nome.push(input)
//   for (const letra of 'Universidade Paulista') {
//     if (letra === 'a' || letra === 'A') {
//       contadores.a++
//     } else if (letra === 'e' || letra === 'E') {
//       contadores.e++
//     } else if (letra === 'i' || letra === 'I') {
//       contadores.i++
//     } else if (letra === 'o' || letra === 'O') {
//       contadores.o++
//     } else if (letra === 'u' || letra === 'U') {
//       contadores.u++
//     }
//   }
//   console.log('a: ', contadores.a)
//   console.log('e: ', contadores.e)
//   console.log('i: ', contadores.i)
//   console.log('o: ', contadores.o)
//   console.log('u: ', contadores.u)
//   rl.close()
// })

// LIÇÃO 23

// // eslint-disable-next-line prefer-const
// let cont = 0
// // eslint-disable-next-line prefer-const
// const mat = []

// for (let lin = 0; col <= 3; col++) {
//   mat[lin] = []
//   for (let col = 0; col <= 3; col++) {
//     // eslint-disable-next-line prefer-const
//     mat[lin][col] = cont++
//   }
// }

// console.log('Matriz')
// for (let lin = 0; lin <= 3; lin++) {
//   for (let col = 0; col <= 3; col++) {
//     process.stdout.write(`${mat[lin][col]}\t`)
//   }
// }

// console.log('Diagonal principal')
// for (let lin = 0; lin <= 3; lin++) {
//   console.log(mat[lin][lin])
// }

// const mat = []
// let cont = 0

// for (let lin = 0; lin <= 3; lin++) {
//   mat[lin] = []
//   for (let col = 0; col <= 3; col++) {
//     mat[lin][col] = cont++
//   }
// }

// console.log('Matriz')
// for (let lin = 0; lin <= 3; lin++) {
//   for (let col = 0; col <= 3; col++) {
//     process.stdout.write(`${mat[lin][col]}\t`)
//   }
//   console.log('\n')
// }
// console.log('\nDiagonal principal\n')
// for (let lin = 0; lin <= 3; lin++) {
//   console.log(mat[lin][lin])
// }
// console.log('\n')

// LIÇÃO 24

// const vet = []
// let x
// let y = 0

// for (x = 0; x <= 9; x++) {
//   vet[x] = y + 2
//   y = y + 2
// }

// for (x = 0; x <= 9; x++) {
//   console.log(vet[x])
// }

// LIÇÃO 25

// function verificarVogal(v) {
//   if (
//     v === 'a' ||
//     v === 'A' ||
//     v === 'e' ||
//     v === 'E' ||
//     v === 'i' ||
//     v === 'I' ||
//     v === 'o' ||
//     v === 'O' ||
//     v === 'u' ||
//     v === 'U'
//   ) {
//     return true
//   }
// }

// let x

// rl.question('Digite uma letra: ', (input) => {
//   x = input

//   if (verificarVogal(x)) {
//     console.log(`A letra ${x} é uma vogal`)
//   } else {
//     console.log(`A letra ${x} é uma consoante`)
//   }
//   rl.close()
// })

// LIÇÃO 26

const PRODUCT_QUANTITY = 5
const products = []

function inputProductData(index) {
  if (index < PRODUCT_QUANTITY) {
    rl.question(`Enter product data (${index + 1}): `, (data) => {
      const [code, name, price] = data.split(' ')

      if (!isNaN(code) && !isNaN(price)) {
        products.push({
          code: parseInt(code),
          name,
          price: parseFloat(price),
        })

        inputProductData(index + 1)
      } else {
        console.log('Invalid input. Please enter valid product data.')
        inputProductData(index)
      }
    })
  } else {
    displayProducts()
  }
}

function displayProducts() {
  console.log('Fields: product-code name price')

  products.forEach((product, index) => {
    console.log(
      `${index + 1}\t${product.code}\t${
        product.name
      }\tR$ ${product.price.toFixed(2)}`,
    )
  })

  rl.question('Enter product code: ', (enteredCode) => {
    const product = products.find((p) => p.code === parseInt(enteredCode))

    if (product) {
      console.log(`Price: R$ ${product.price.toFixed(2)}`)
    } else {
      console.log('Product not found.')
    }

    rl.close()
  })
}

inputProductData(0)
