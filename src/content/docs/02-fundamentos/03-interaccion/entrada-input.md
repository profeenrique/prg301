---
title: Entrada con input()
description: Uso de la función input() para capturar datos desde el teclado.
slug: fundamentos/interaccion/entrada-input
sidebar:
  label: Entrada con input()
  order: 2
---

:::note[Verificación previa]
Antes de continuar, comprueba lo siguiente:

- Ya sabes utilizar `print()` para mostrar información en pantalla.
- Puedes crear variables simples en Python.
- Ya conoces la conversión básica de tipos.
:::

## Objetivo

Utilizar la función `input()` para capturar información desde el teclado y almacenarla en variables simples.

## Concepto clave

La función `input()` permite recibir datos escritos por la persona usuaria durante la ejecución del programa.

## ¿Qué significa capturar información?

Hasta este punto, los programas que hemos escrito muestran información en pantalla, pero no reciben datos desde el exterior. En muchos casos, un programa necesita pedir información, por ejemplo:

- Un nombre
- Una edad
- Una nota
- Una cantidad
- Una respuesta breve

Para realizar esto, Python utiliza la función `input()`.

```python
nombre = input("Escribe tu nombre: ")
print(nombre)
```

Salida esperada:

```
Escribe tu nombre: Ana
Ana
```

Podemos observar que:

- `input()` muestra un mensaje en pantalla y espera a que la persona usuaria escriba algo.
- El valor ingresado se guarda en la variable `nombre`.
- La persona usuaria escribe un valor y presiona Enter para que el programa continúe.
- Ese valor queda almacenado en una variable llamada `nombre`.
- Luego podemos usar esa variable para mostrar el dato ingresado o realizar otras operaciones.

## Estructura general de `input()`

La forma más común de usar `input()` es esta:

```python
variable = input("Mensaje: ")
```

Aquí ocurre lo siguiente:

- El mensaje entre comillas se muestra en pantalla
- La persona usuaria escribe una respuesta
- Esa respuesta se guarda en la variable

### Capturar texto

`input()` es especialmente útil para recibir texto, como nombres, ciudades, respuestas a preguntas, etc.

```python
ciudad = input("Escribe tu ciudad: ")
print(f"Ciudad ingresada: {ciudad}")
```

Salida esperada:

```
Escribe tu ciudad: Valparaíso
Ciudad ingresada: Valparaíso
```

### Lo que devuelve `input()`

La función `input()` siempre devuelve **texto**.

Esto es importante, porque aunque la persona usuaria escriba números, Python los recibe inicialmente como cadenas de texto.

```python
edad = input("Escribe tu edad: ")
print(type(edad))
```

Salida esperada:

```
Escribe tu edad: 18
<class 'str'>
```

:::note[Idea clave]
Aunque la persona usuaria escriba `18`, `input()` lo recibe primero como texto.
:::

## Usar conversión de tipos con `input()`

Si el valor ingresado debe usarse como número, es necesario convertirlo. Por ejemplo, para convertir a entero se usa `int()`, y para convertir a decimal se usa `float()`.

```python
edad = int(input("Escribe tu edad: "))

print(edad)
print(type(edad))
```

Salida esperada:

```
Escribe tu edad: 18
18
<class 'int'>
```

En este caso:

- `input()` recibe el dato como texto y lo muestra en pantalla
- `int()` transforma ese texto en un número entero  
- El valor convertido se guarda en la variable `edad`

### Conversión a decimal

También es posible convertir el dato ingresado a decimal usando `float()`.

```python
estatura = float(input("Escribe tu estatura: "))
print(estatura)
print(type(estatura))
```

Salida esperada:

```
Escribe tu estatura: 1.72
1.72
<class 'float'>
```

### Combinar `input()` y `print()`

Una forma común de trabajar es pedir un dato y luego mostrarlo como parte de un mensaje más completo.

```python
nombre = input("Escribe tu nombre: ")
print(f"Hola, {nombre}")
```

Salida esperada:

```
Escribe tu nombre: Camila
Hola, Camila
```

Esto permite construir programas que interactúan de manera más directa con quien los usa.

### Capturar varios datos

Es posible pedir varios datos en un mismo programa, guardándolos en variables distintas. 

```python
nombre = input("Escribe tu nombre: ")
edad = input("Escribe tu edad: ")

print(f"Nombre: {nombre}")
print(f"Edad: {edad}")
```

Salida esperada:

```
Escribe tu nombre: Diego
Escribe tu edad: 17
Nombre: Diego
Edad: 17
```

:::tip[Buena práctica]
Cuando uses `input()` para capturar números, verifica si necesitas convertir el valor con `int()` o `float()`.
:::

### ¿Qué ocurre si no convierto el tipo?

Si un dato numérico ingresado con `input()` no se convierte, Python lo tratará como texto, lo que puede llevar a resultados inesperados.

```python
numero = input("Escribe un número: ")
print(numero + numero)
```

Si la persona escribe `5`, la salida será:

```
Escribe un número: 5
55
```

Aunque parece un número, Python lo interpreta como texto y concatena ambos valores. Si se desea un resultado numérico, es necesario convertir el dato a un tipo numérico antes de usarlo.

```python
numero = int(input("Escribe un número: "))
print(numero + numero)
```

Si la persona escribe `5`, la salida será:

```
Escribe un número: 5
10
```

:::caution[Error frecuente]
Un error frecuente es pensar que `input()` devuelve números cuando la persona usuaria escribe cifras. En Python, `input()` devuelve texto, por lo que muchas veces es necesario convertir el valor antes de usarlo.

También es frecuente intentar convertir a número un texto que no corresponde a un valor válido.
:::

## Mini práctica

Escribe y prueba las siguientes instrucciones:

1. Pide el nombre de una persona y muéstralo en pantalla.
2. Pide la edad de una persona y muéstrala.
3. Pide un número entero, conviértelo con `int()` y muéstralo.
4. Pide un número decimal, conviértelo con `float()` y muéstralo.
5. Pide dos números enteros, conviértelos y muestra su suma.
