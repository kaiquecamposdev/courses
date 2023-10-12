#include <stdio.h>
#include <stdlib.h>

int main() {
  float resultado;
  char tipoMoeda;
  char tipoMoedaParaConverter;

  printf("Conversor de moedas   v1.0 \n\n");
  printf("Autor: Dev. Kaique de Campos M. \n\n");

  printf("Escolha o seu tipo de moeda:\n\n");
  printf("BRL - Real\n");
  printf("E - Euro\n");
  printf("USD - Dólar\n\n");

  printf("Digite o tipo da moeda para qual será convertida: ");
  scanf("%c", &tipoMoeda);

  printf("Escolha a moeda que deseja converter:\n\n");
  printf("BRL - Real\n");
  printf("E - Euro\n");
  printf("USD - Dólar\n\n");

  printf("Digite o tipo da moeda para qual será convertida: ");
  scanf("%c", &tipoMoedaParaConverter);

  switch (tipoMoedaParaConverter) {
    case "BRL":
      if (tipoMoeda == "BRL") {
        return;
      } else if (tipoMoeda == "E") {
        resultado *=  0.188;
      } else if (tipoMoeda == "USD") {
        resultado /= 4.92;
      }
      break;
    case "E":
      if (tipoMoeda == "BRL") {
        resultado /= 0.188;
      } else if (tipoMoeda == "E") {
        resultado;
      } else if (tipoMoeda == "USD") {
        resultado /= 5.25;
      }
      break;
    case "USD":
      if (tipoMoeda == "BRL") {
        resultado *= 4.92;
      } else if (tipoMoeda == "E") {
        resultado *= 0.188 / 5.25;
      } else if (tipoMoeda == "USD") {
        resultado;
      }
      break;
    default:
      printf("Moeda inválida.\n");
      return 1;
  }
  
  printf("Conversão = %f\n\n", resultado);
  system("PAUSE");
  return 0;
}
