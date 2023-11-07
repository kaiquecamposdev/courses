#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
  double resultado;
  char tipoMoeda[4];
  char tipoMoedaParaConverter[4];

  printf("Conversor de moedas   v1.0 \n\n");
  printf("Autor: Dev. Kaique de Campos M. \n\n");

  printf("Escolha o seu tipo de moeda:\n\n");
  printf("BRL - Real\n");
  printf("E - Euro\n");
  printf("USD - Dólar\n\n");

  printf("Digite o tipo da moeda para qual será convertida: ");
  scanf("%s", &tipoMoeda);

  printf("Escolha a moeda que deseja converter:\n\n");
  printf("BRL - Real\n");
  printf("E - Euro\n");
  printf("USD - Dólar\n\n");

  printf("Digite o tipo da moeda para qual será convertida: ");
  scanf("%s", &tipoMoedaParaConverter);

 if (strcmp(tipoMoedaParaConverter, "BRL") == 0) {

    if (strcmp(tipoMoeda, "BRL") == 0) {
      resultado = 1;
    } else if (strcmp(tipoMoeda, "E") == 0) {
      resultado = 0.188;
    } else if (strcmp(tipoMoeda, "USD") == 0) {
      resultado = 4.92;
    }

  } else if (strcmp(tipoMoedaParaConverter, "E") == 0) {

    if (strcmp(tipoMoeda, "BRL") == 0) {
      resultado = 1 / 0.188;
    } else if (strcmp(tipoMoeda, "E") == 0) {
      resultado = 1;
    } else if (strcmp(tipoMoeda, "USD") == 0) {
      resultado = 1 / 5.25;
    }

  } else if (strcmp(tipoMoedaParaConverter, "USD") == 0) {

    if (strcmp(tipoMoeda, "BRL") == 0) {
      resultado = 1 / 4.92;
    } else if (strcmp(tipoMoeda, "E") == 0) {
      resultado = 0.188 / 5.25;
    } else if (strcmp(tipoMoeda, "USD") == 0) {
      resultado = 1;
    }

  } else {
    printf("Moeda inválida.\n");
    return 1;
  }
  
  printf("Conversão = %f\n\n", resultado);
  printf("Pressione Enter para continuar...");
  fflush(stdout);
  char c = getchar();
}
