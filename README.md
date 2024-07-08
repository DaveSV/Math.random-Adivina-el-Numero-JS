﻿# Math.random-Adivina-el-Numero-JS
Este programa es un sencillo juego de adivinanza de números en JavaScript. El objetivo del juego es que el usuario adivine un número secreto generado aleatoriamente entre 1 y 10. El programa utiliza un bucle while para solicitar repetidamente al usuario que ingrese un número hasta que el número ingresado coincida con el número secreto.

El número secreto se genera utilizando la función Math.random() multiplicada por 10 y redondeada hacia abajo mediante Math.floor(), a la que se le suma 1 para asegurarse de que el rango esté entre 1 y 10. El número de intentos se inicializa en 1 y se incrementa con cada intento fallido. Si el usuario adivina correctamente, se le muestra un mensaje felicitándolo y diciéndole cuántos intentos le tomó adivinar el número. Si el número ingresado es menor o mayor que el número secreto, se le informa al usuario y el bucle continúa. Además, si el usuario no adivina el número correcto en 3 intentos, se le informa que ha perdido y se revela el número secreto.

![image](https://github.com/DaveSV/Math.random-Adivina-el-Numero-JS/assets/29576337/6edf79cc-7938-4ace-bfd3-0de42c8cd749)
