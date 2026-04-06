---
title: Sintaxis básica
description: Elementos básicos de la sintaxis de Python para escribir instrucciones correctas.
slug: introduccion/primeros-pasos/sintaxis-basica
sidebar:
  label: Sintaxis básica
  order: 2
---

:::note[Verificación previa]
Antes de continuar, asegúrate de que Python y Visual Studio Code ya están instalados en tu equipo, y que puedes ejecutar un archivo `.py` simple con la instrucción `print()`.
:::

Cuando una persona comienza a programar, suele pensar primero en la idea que quiere resolver: mostrar un mensaje, hacer un cálculo o pedir un dato. Sin embargo, para que esa idea llegue a ejecutarse, también debe escribirse de una forma que el lenguaje pueda interpretar. Ahí aparece la sintaxis.

## Objetivo

Comprender qué es la sintaxis en Python e identificar las reglas básicas que permiten escribir instrucciones simples de forma correcta y legible.

## Qué significa sintaxis

La sintaxis es el conjunto de reglas que indica cómo debe escribirse un programa para que el intérprete pueda leerlo y ejecutarlo correctamente.

Esto significa que en programación no basta con “tener una buena idea”. También es necesario expresarla con una forma válida. Si la instrucción está mal escrita, Python no puede interpretarla como esperas.

En esta etapa, la sintaxis se manifiesta en aspectos muy concretos, como estos:

- El uso correcto de paréntesis
- El uso de comillas para escribir texto
- La forma correcta de llamar funciones
- La escritura precisa de nombres y palabras reservadas
- La organización básica de las instrucciones

:::note[Idea clave]
La sintaxis no se refiere a lo que quieres hacer, sino a cómo debes escribirlo para que Python pueda entenderlo.
:::

## Una instrucción simple, varias reglas

Observa esta línea:

~~~python
print("Hola")
~~~

Aunque parece muy breve, aquí ya se están respetando varias reglas sintácticas al mismo tiempo:

- `print` está escrito correctamente
- Los paréntesis están completos
- El texto está entre comillas
- La instrucción tiene una forma que Python puede reconocer

Esto muestra algo importante: incluso una línea muy simple depende de una escritura precisa.

## El nombre debe ser exacto

Python distingue entre nombres correctos e incorrectos. Una letra de más, una letra menos o un cambio en el orden puede hacer que la instrucción deje de ser válida.

~~~python
print("Hola")
~~~

no es lo mismo que:

~~~python
prnt("Hola")
~~~

En el segundo caso, Python ya no reconoce la función porque el nombre fue escrito de forma incorrecta.

Este detalle ayuda a comprender una idea importante de la programación: el intérprete no “adivina” lo que querías escribir. Trabaja con lo que realmente aparece en el código.

## Los paréntesis son parte de la estructura

En Python, muchas funciones se usan con paréntesis. Si falta uno de ellos, la línea queda incompleta y el intérprete no puede procesarla correctamente.

Correcto:

~~~python
print("Hola")
~~~

Incorrecto:

~~~python
print("Hola"
~~~

Aquí no se trata de un detalle visual. El paréntesis de cierre forma parte de la estructura de la instrucción. Si no está, la llamada a la función queda abierta.

## El texto necesita comillas

Cuando quieres escribir texto literal, debes encerrarlo entre comillas simples o dobles. Eso le indica a Python que no está frente a un nombre o una variable, sino frente a una cadena de texto.

Correcto:

~~~python
print("Hola")
print('Hola')
~~~

Incorrecto:

~~~python
print(Hola)
~~~

En el ejemplo incorrecto, Python intentará interpretar `Hola` como si fuera un nombre definido dentro del programa. Como en este caso no lo es, aparecerá un error.

Este punto es especialmente importante al comenzar, porque una gran parte de los primeros errores surge justamente al olvidar comillas.

## Escribir una línea clara

En programas simples, cada línea suele contener una instrucción clara y directa. Eso facilita la lectura y también reduce errores.

~~~python
print("Hola")
print("Bienvenida")
~~~

Aquí cada línea expresa una acción concreta. Esta forma de escribir no solo ayuda a Python a interpretar mejor el programa, sino también a que quien lee el código pueda entenderlo más fácilmente.

A medida que avances, descubrirás que programar bien no consiste solo en que el código funcione, sino también en que esté escrito con claridad.

## Qué elementos aparecen en una instrucción

En una línea como `print("Hola")` pueden identificarse varios componentes básicos.

| Elemento | Función |
|---|---|
| `print` | Nombre de la función que muestra información en pantalla |
| `()` | Delimitan los argumentos de la función |
| `""` o `''` | Indican que el contenido es texto |
| `.py` | Extensión que identifica un archivo de Python |

Mirar una instrucción de este modo ayuda a descomponerla y comprender que no es una “frase completa” sin estructura, sino una combinación de partes que cumplen funciones distintas.

## Forma correcta y resultado correcto

Una idea importante en esta etapa es que una instrucción puede fallar aunque la intención sea correcta. Por ejemplo, una persona puede querer mostrar el texto `Hola`, pero si escribe mal la instrucción, Python no podrá ejecutarla.

Eso significa que en programación hay dos preguntas que conviene tener presentes:

- ¿La idea que quiero expresar es correcta?
- ¿La forma en que la escribí también lo es?

La sintaxis responde precisamente a la segunda pregunta.

## Cuando la sintaxis falla

Cuando una instrucción no respeta la forma que Python espera, aparece un error. En esta etapa no hace falta estudiar todos sus tipos, pero sí conviene acostumbrarse a una idea central: muchos errores iniciales no se producen por un problema lógico complejo, sino por una línea mal escrita.

Por ejemplo, puede fallar una instrucción porque:

- Falta una comilla
- Falta un paréntesis
- El nombre de la función está mal escrito
- El texto no fue delimitado correctamente

Aprender sintaxis básica, por tanto, no consiste en memorizar reglas aisladas, sino en desarrollar el hábito de observar con atención cómo está escrita cada línea.

:::caution[Error frecuente]
Un error frecuente es olvidar las comillas o los paréntesis al escribir una instrucción con `print()`. También es habitual escribir mal el nombre de la función. Cuando eso ocurre, Python no puede interpretar correctamente la línea y genera un error.
:::

## Sintaxis y legibilidad

Aunque aquí estamos revisando reglas mínimas, conviene notar algo más: la sintaxis no solo permite que Python entienda el programa. También influye en la lectura humana del código.

Una instrucción bien escrita no solo es válida para el intérprete. También es más fácil de revisar, corregir y explicar. Esta idea será cada vez más importante a medida que los programas crezcan.

## Del concepto al código

Escribe y prueba las siguientes instrucciones:

1. Muestra el texto `Hola`
2. Muestra tu nombre
3. Muestra una frase breve de tu elección

Puedes usar un archivo como este:

~~~python
print("Hola")
print("Camila")
print("Estoy aprendiendo Python")
~~~

Luego revisa qué ocurre si haces alguno de estos cambios:

- Quitas una comilla
- Quitas un paréntesis
- Escribes mal `print`

La intención aquí no es “romper el programa” por accidente, sino observar cómo Python responde cuando una instrucción deja de respetar la sintaxis esperada.

## Para seguir observando

Mientras hagas esas pruebas, intenta responder mentalmente estas preguntas:

- ¿Qué parte de la línea indica que se trata de una función?
- ¿Qué parte le dice a Python que el contenido es texto?
- ¿Qué cambia cuando falta un símbolo?
- ¿Python interpreta la intención o solo la forma escrita?

Estas preguntas ayudan a desarrollar una lectura más atenta del código, que será muy útil en los contenidos siguientes.