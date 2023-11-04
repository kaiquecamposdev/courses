#include <stdio.h>
#include <stdlib.h>

// EXERCÍCIO 1
// int main() {
//   int lin, col, cont = 0, mat[4][4];

//   for (lin = 0; lin <= 3; lin++) {
//     for(col = 0; col <= 3; col++) {
//       mat[lin][col] = cont++;
//     }
//   }
  
//   for(lin = 0; lin <= 3; lin++) {
//     for(col = 0; col <= 3; col++) {
//       if(lin != col) {
//           printf("%d", mat[lin][col]);
//         printf("\t");
//       } else {
//         printf("x");
//         printf("\t");
//       }
//     }
//     printf("\n");
//   }
//   printf("\n\n");
//   system("PAUSE");
//   return 0;
// }

// #include <stdio.h>

// int main() {
//    int x, vet[8], num, achei = 0;

//    for(x = 0; x < 8; x++) {
//     printf("\n[%d] Digite um número: ", x);
//     scanf("%d", &vet[x]);
//    }

//    printf("\n\n");
//    printf("Digite um valor a ser pesquisado: ");
//    scanf("%d", &num);

//    for(x = 0; x < 8; x++) {
//     if(vet[x] == num) {
//       printf("\n O número %d esta na posição %d: ", num, x);
//       achei = 1;
//     }
//    }
//     if(achei == 0) {
//       printf("\n Este número não existe");
//     }
//     printf("\n\n");
//     system("PAUSE");
//     return 0;
// }

// typedef struct {
//   char nome[100];
//   char sexo;
//   float peso;
//   float altura;
// } Pessoa;

// #define QUANTIDADE_DE_PESSOAS 5

// int main() {
//   int i;
//   char nomeloc[100];
//   float imc;

//   Pessoa pessoas[QUANTIDADE_DE_PESSOAS];

//   printf("Campos: nome, altura, peso, sexo\n");

//   for(i = 0; (i < QUANTIDADE_DE_PESSOAS); i++) {
//     printf("\nInforme os dados da pessoas(%i): ", i + 1);
//     scanf("%s %f %f %c", pessoas[i].nome, &pessoas[i].altura, &pessoas[i].peso, &pessoas[i].sexo);
//   }
//   printf("\nInforme o NOME da pessoa: ");
//   scanf("%s", &nomeloc);
//   printf("\nSexo\tNome\tIMC");

//   for(i = 0; (i < QUANTIDADE_DE_PESSOAS); i++) {
//     if(strcmp(pessoas[i].nome, nomeloc) != 0) {
//       float imc = pessoas[i].peso / (pessoas[i].altura * pessoas[i].altura);
//       printf("\n%c\t%s\t%1.2f\n", pessoas[i].sexo, pessoas[i].nome, imc);
//       break;
//     }
//   }
//   system("PAUSE");
//   return 0;
// }

// char * caracteres(char *s1, char *s2) {

//   int i, j, w, n = 0, encontrado;
//   char *s3;

//   for (i = 0; s1[i] != '\0'; i++) {
//     for (j = 0; s2[j] != '\0'; j++) {
//       if (s1[i] == s2[j]) {
//         n++;
//         break;
//       }
//     }
//   }

//   s3 = malloc((n + 1) * sizeof(char));
//   n = 0;

//   for (i = 0; s1[i] != '\0'; i++) {
//     for (j = 0; s2[j] != '\0'; j++) {
//       if (s1[i] == s2[j]) {
//         encontrado = 0;

//         for (w = 0; w < n; w++) {
//           if (s3[w] == s1[i]) {
//             encontrado = 1;
//             break;
//           }
//         }
//         if (encontrado == 0) {
//           s3[n] = s1[i];
//           n++;
//           break;
//         }
//       }
//     }
//   }  
//    s3[n] = '\0';
//    return s3;
// }

// void incr_vetor (int *v , int tam) {
//  int i;
//  for (i = 0; i < tam; i++)
//  v[i]++;
// }
 
// void main() {
//  int a[ ] = {1, 3, 5};
//  incr_vetor(a, 3);
//  printf("%d %d %d\n", a[0], a[1], a[2]); 
// }

// int *acha_caractere (char *str, char c, int *pn) {
//   int i = 0, n = 0, *indices = 0;
//   for (i = 0; str[i] != '\0'; i++) {
//     if (str[i]== c) {
//       n++;
//     }
//   }
//   indices = (int*) malloc(n* sizeof(int));
//   for (i = 0, n = 0; str[i] != '\0'; i++) {
//     if (str[i] == c) { 
//       indices[n] = i;
//       n++;
//     }
//   }
//   *pn = n;
//   return indices;
// }

// EXERCÍCIO 7
// int main() {
//   int *indices = 0, n = 0, i;
//   char *frase = "Universidade Paulista";
//   indices = acha_caractere(frase, 'a', &n);
  
//   for (i = 0; i < n; i++) { 
//     printf("%d ", indices[i]);
//   }
//   return 0;
// }

// int f1(int n) {
//    if (n == 0) {
//     return (1);
//    }else {
//     return(n * f1(n - 1));
//    }
// }
 
// void main() {
//  int a, b;

//  printf("Digite um valor inteiro:");
//  scanf("%d", &a);

//  b = f1(a);

//  printf("%d \n", b);
// }

// #include <stdio.h>
 
// void f2(int n)
// {
//  if (n == 0)
//      printf("zero ");
//  else
//  {
//      printf("%d ", n);
//      f2(n-1);
//  }
// }
 
// void main(){
//  int a;
//  printf("Digite um valor inteiro:");
//  scanf("%d", &a);
//  f2(a);
// }

// #include <stdio.h>
 
// int func (int n)
// {
//    if (n == 0)
//  return(0);
// return(n + func(n-1));
// }
 
// void main(){
//  int a, b;
//  printf("Digite um valor inteiro:");
//  scanf("%d", &a);
//  b= func(a);
//  printf ("%d \n", b);
// }

// int func (int n)
// {
//  if (n == 0)
//      return(0);
//  return(3*n + func(n-1));
// }
 
// void main(){
//  int a, b;
//  printf("Digite um valor inteiro:");
//  scanf("%d", &a);
//  b= func(a);
//  printf ("%d \n", b);
// }

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
 
char * caracteres(char *s1, char *s2) {
  int i, j, w, n = 0, encontrado;
  char *s3;
  for (i = 0; s1[i] != '\0'; i++) {
     for (j = 0; s2[j] != '\0'; j++) {
        if (s1[i] == s2[j]) {
            n++;
            break;
        }
     }
  }
  s3 = malloc((n + 1) * sizeof(char));
  n = 0;
  for (i = 0; s1[i] != '\0'; i++) {
      for (j = 0; s2[j] != '\0'; j++) {
          if (s1[i] == s2[j]) {
    encontrado = 0;
    for (w = 0; w < n; w++) {
         if (s3[w] == s1[i]) {
    encontrado = 1;
    break;
         }  
     }
   if (encontrado == 0) {
      s3[n] = s1[i];
      n++;
      break;
   }
   }  
     }
  }  
   s3[n] = '\0';
   return s3;
}