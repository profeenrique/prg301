---
title: Salida con print()
description: Uso de la función print() para mostrar información en pantalla.
slug: fundamentos/interaccion/salida-print
sidebar:
  label: Salida con print()
  order: 1
---

:::note[Verificación previa]
Antes de continuar, comprueba lo siguiente:

- Ya sabes crear variables simples en Python.
- Reconoces tipos de datos básicos.
- Puedes ejecutar archivos `.py` desde tu entorno de trabajo.
:::

## Objetivo

Utilizar la función `print()` para mostrar información en pantalla mediante valores, variables y mensajes simples.

## Concepto clave

La función `print()` permite enviar información a la salida estándar, normalmente la terminal o consola.

## ¿Qué significa mostrar información?

En muchos programas es necesario que la persona usuaria pueda ver resultados, mensajes o datos procesados.

Por ejemplo, un programa puede mostrar:

- Un saludo
- Un número
- El valor de una variable
- El resultado de una operación
- Una combinación de texto y datos

En Python, esto se realiza con la función `print()`.

```python
print("Hola")
```

La función `print()` muestra en pantalla el texto que se encuentra entre comillas. Salida esperada:

```
Hola
```

### Mostrar texto

Cuando quieres mostrar texto, debes escribirlo entre comillas.

```python
print("Bienvenida")
print("Python")
print("Este es un mensaje")
```

Salida esperada:

```
Bienvenida
Python
Este es un mensaje
```

### Mostrar números

La función `print()` también puede mostrar números.

```python
print(10)
print(3.14)
```

En este caso, los números no necesitan comillas. Salida esperada:

```
10
3.14
```
### Mostrar variables

También es posible mostrar el valor almacenado en una variable.

```python
nombre = "Ana"
edad = 18

print(nombre)
print(edad)
```

`print()` no muestra el nombre de la variable, sino el valor que contiene en ese momento. Salida esperada:

```
Ana
18
```
### Mostrar resultados de operaciones

La función `print()` puede mostrar directamente el resultado de una operación.

```python
print(5 + 3)
print(10 * 2)
```

Esto permite observar rápidamente el resultado de una expresión sin necesidad de guardarla antes en una variable. Salida esperada:

```
8
20
```

### Mostrar varios elementos

La función `print()` puede recibir más de un valor separado por comas.

```python
nombre = "Luis"
edad = 17

print("Nombre:", nombre)
print("Edad:", edad)
```

Esto permite combinar texto y variables en una misma salida. Salida esperada:

```
Nombre: Luis
Edad: 17
```

:::caution[Error frecuente]
Un error frecuente es olvidar las comillas al intentar mostrar un texto con `print()`. Si el contenido es texto literal, debe ir entre comillas.

También es frecuente pensar que `print(nombre)` y `print("nombre")` hacen lo mismo, cuando en realidad uno muestra el valor de una variable y el otro muestra un texto.
:::

## Diferencia entre comas y f-strings

Ambas formas son válidas. Sin embargo, las f-strings suelen resultar más claras cuando el mensaje combina varias variables o expresiones.

```python
nombre = "Sofía"

print("Nombre:", nombre)
print(f"Nombre: {nombre}")
```

La primera línea muestra el texto "Nombre:" seguido del valor de la variable `nombre`. La segunda línea utiliza una f-string para lograr lo mismo, pero con una sintaxis que puede resultar más legible. Salida esperada:

```
Nombre: Sofía
Nombre: Sofía
```

Podemos observar que:

- En ambos casos, la salida puede ser equivalente.
- Las f-strings suelen resultar más claras cuando el mensaje combina varias variables o expresiones.

:::tip[Buena práctica]
Cuando necesites construir mensajes con variables, considera usar f-strings para que la salida sea más clara y fácil de leer.
:::

## Saltos de línea

Cada llamada a `print()` produce una salida en una nueva línea.

```python
print("Primera línea")
print("Segunda línea")
print("Tercera línea")
```

Salida esperada:

```
Primera línea
Segunda línea
Tercera línea
```

## Claridad en la salida

La forma en que se presenta la información también importa. Una salida clara facilita comprender qué está mostrando el programa. Observa esta diferencia:

```python
nombre = "Sofía"
print(nombre)

print("Nombre de la estudiante:", nombre)
```

La segunda forma entrega más contexto y resulta más fácil de interpretar. Salida esperada:

```
Sofía
Nombre de la estudiante: Sofía
```

:::tip[Buena práctica]
Cuando el programa muestre datos, procura acompañarlos con un mensaje claro si eso ayuda a entender el resultado.
:::

## Mini práctica

Escribe y prueba las siguientes instrucciones:

1. Muestra un saludo en pantalla.
2. Muestra un número entero.
3. Crea una variable con tu nombre y muéstrala.
4. Muestra el resultado de una suma.
5. Combina texto y una variable en una misma salida.
