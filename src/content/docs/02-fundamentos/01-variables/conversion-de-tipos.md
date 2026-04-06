---
title: Conversión de tipos
description: Transformación de valores entre tipos de datos básicos en Python.
slug: fundamentos/variables/conversion-de-tipos
sidebar:
  label: Conversión de tipos
  order: 4
---

:::note[Verificación previa]
Antes de continuar, asegúrate de reconocer qué es una variable, conocer los tipos de datos básicos en Python y saber usar `print()` y `type()` en ejemplos simples.
:::

Un programa no siempre recibe la información en el formato que necesita. A veces un dato llega como texto, pero debe utilizarse como número. En otras ocasiones, un valor numérico necesita transformarse en texto para mostrarse dentro de un mensaje. Resolver esa diferencia es parte del trabajo habitual al programar, y por eso la conversión de tipos es una herramienta tan importante en Python.

## Objetivo

Comprender qué es la conversión de tipos en Python y cómo permite transformar un valor para que pueda utilizarse de acuerdo con las necesidades del programa.

## Cuando el tipo no coincide

Que un valor exista no siempre significa que ya esté listo para usarse. Un mismo contenido puede verse parecido en pantalla y, sin embargo, no representar lo mismo para Python. Por ejemplo, no es equivalente trabajar con `18` como número entero que con `"18"` como texto.

A simple vista ambos valores parecen expresar la misma cantidad, pero el primero es un número y el segundo es una cadena de texto. Esa diferencia cambia por completo lo que el programa puede hacer con ellos.

Un entero puede sumarse, compararse o participar en un cálculo. Un texto, en cambio, se interpreta como una secuencia de caracteres. Por eso, cuando el tipo del valor no coincide con la operación que el programa necesita realizar, se vuelve necesaria una conversión.

:::note[Idea clave]
Convertir un valor no significa solo cambiar cómo se ve, sino cambiar la forma en que Python lo interpreta y lo utiliza dentro del programa.
:::

## Convertir para poder operar

La conversión de tipos consiste en transformar un valor de un tipo de dato en otro. Esa transformación se vuelve necesaria cuando el contenido ya existe, pero el programa necesita tratarlo de otra manera.

Esto ocurre con bastante frecuencia. Por ejemplo:

- Un número puede venir representado como texto
- Un valor numérico puede necesitar mostrarse dentro de un mensaje
- Una entrada del usuario puede requerir transformación antes de usarse en un cálculo
- Un dato puede necesitar pasar por una comprobación lógica

En todos esos casos, la conversión permite que el programa trabaje con el tipo adecuado en lugar de quedarse con el formato en que el dato fue recibido.

## Funciones de conversión más frecuentes

Python ofrece funciones integradas para realizar conversiones simples entre tipos de datos.

| Función | Conversión habitual | Ejemplo |
| --- | --- | --- |
| `int()` | Convierte un valor a entero | `int("25")` |
| `float()` | Convierte un valor a decimal | `float("3.5")` |
| `str()` | Convierte un valor a texto | `str(20)` |
| `bool()` | Convierte un valor a lógico | `bool("Python")` |

No conviene leer esta tabla como una lista para memorizar sin contexto. Lo importante es entender que cada función cambia la manera en que Python interpreta el valor recibido.

## Un mismo contenido, dos lecturas distintas

Una forma clara de comprender esta idea es observar un valor antes y después de la conversión.

~~~python
edad = "18"
edad_numero = int(edad)

print(edad)
print(type(edad))

print(edad_numero)
print(type(edad_numero))
~~~

Aunque el contenido visible parece el mismo, Python no está trabajando con el mismo tipo de dato.

~~~text
18
<class 'str'>
18
<class 'int'>
~~~

La primera variable contiene texto. La segunda contiene un entero. El contenido puede parecer similar, pero el tipo no lo es, y esa diferencia afecta las operaciones posibles.

~~~mermaid
flowchart LR
    A["'18'  -> str"] --> B["int()"]
    B --> C["18  -> int"]
~~~

La conversión, entonces, no cambia solo la apariencia del valor. Cambia su interpretación dentro del programa.

## De texto a entero

La función `int()` permite transformar un valor en un número entero, siempre que el contenido sea válido para esa conversión.

~~~python
numero = int("25")
print(numero)
print(type(numero))
~~~

En este caso, Python deja de interpretar `"25"` como texto y pasa a tratarlo como un entero.

~~~text
25
<class 'int'>
~~~

Esta conversión es útil cuando un valor numérico está escrito como texto, pero debe utilizarse en operaciones aritméticas, comparaciones o conteos.

También conviene notar algo importante: `int()` no “adivina” valores. Solo funciona cuando el contenido puede interpretarse como entero.

## De texto a decimal

La función `float()` permite transformar un valor en un número decimal.

~~~python
precio = float("19.99")
print(precio)
print(type(precio))
~~~

Aquí Python interpreta el contenido como un valor decimal.

~~~text
19.99
<class 'float'>
~~~

Esta conversión resulta necesaria cuando el dato incluye parte decimal y se necesita operar con él numéricamente.

También ayuda a reforzar una distinción importante: no todos los números se representan del mismo modo dentro del lenguaje. Un entero y un decimal pueden parecer cercanos, pero pertenecen a tipos distintos.

## De número a texto

La función `str()` permite transformar un valor en texto.

~~~python
numero = 42
texto = str(numero)

print(texto)
print(type(texto))
~~~

Después de la conversión, Python ya no trata `42` como entero, sino como una cadena de texto.

~~~text
42
<class 'str'>
~~~

Esta conversión es muy útil cuando se necesita incluir un número dentro de un mensaje, unirlo con otras cadenas o tratarlo como contenido textual.

Por ejemplo, no es raro que un programa deba presentar algo como:

- `"Tu edad es 16"`
- `"El promedio final es 5.8"`
- `"Se registraron 20 intentos"`

En todos esos casos, convertir a texto ayuda a integrar distintos valores en una misma salida.

## Cuando un valor se interpreta como verdadero o falso

La función `bool()` transforma un valor en un resultado lógico.

~~~python
print(bool(0))
print(bool(1))
print(bool(""))
print(bool("Python"))
~~~

En este caso, Python no convierte a número ni a texto, sino que evalúa si el valor debe interpretarse como verdadero o falso.

~~~text
False
True
False
True
~~~

Aquí se observa lo siguiente:

- `0` se interpreta como `False`
- `1` se interpreta como `True`
- Una cadena vacía se interpreta como `False`
- Un texto con contenido se interpreta como `True`

Este comportamiento será muy importante más adelante, cuando trabajes con condiciones y estructuras de control. No todos los valores necesitan ser `True` o `False` escritos explícitamente para participar en una evaluación lógica.

## `input()` y la necesidad de convertir

La conversión de tipos se vuelve especialmente importante al trabajar con `input()`. Esto ocurre porque los datos ingresados por teclado se reciben como texto, incluso cuando parecen números.

~~~python
edad = input("Ingresa tu edad: ")
print(type(edad))
~~~

Aquí Python informa que el valor ingresado pertenece al tipo `str`.

~~~text
<class 'str'>
~~~

Eso significa que, aunque una persona escriba `18`, el programa no recibe un entero, sino el texto `"18"`.

Si ese dato debe utilizarse como número, será necesario convertirlo.

~~~python
edad = int(input("Ingresa tu edad: "))
print(type(edad))
~~~

En este caso, la conversión ocurre inmediatamente después de la entrada. Esta práctica es muy común cuando el programa necesita trabajar con cantidades numéricas proporcionadas por la persona usuaria.

## Cuando la conversión falla

No todos los valores pueden convertirse automáticamente.

~~~python
numero = int("hola")
~~~

Este intento produce un error, porque `"hola"` no representa un número entero válido.

~~~text
ValueError: invalid literal for int() with base 10: 'hola'
~~~

:::caution[Error frecuente]
Un error frecuente es intentar convertir a número un texto que no representa un valor numérico válido.
:::

Por ejemplo:

- `"25"` sí puede convertirse a entero
- `"3.5"` no puede convertirse directamente con `int()` como texto decimal
- `"veinticinco"` no puede convertirse a entero
- `"hola"` tampoco puede convertirse a número

Aquí conviene aprender una idea importante: convertir no significa “forzar” cualquier dato, sino reinterpretar valores que ya tienen una forma compatible con el tipo esperado.

## Distinto tipo distinto uso

A veces dos valores se muestran igual en pantalla, pero internamente no pertenecen al mismo tipo.

~~~python
numero = 10
print(numero)

texto = str(numero)
print(texto)
~~~

En ambos casos aparece `10`, pero Python no está interpretando esos valores de la misma manera.

- `numero` es un entero
- `texto` es una cadena de texto

Esta diferencia es importante porque un valor puede verse igual al imprimirse y, sin embargo, comportarse de forma distinta en el programa. Por eso, mirar la salida no siempre basta para entender el tipo de dato con el que se está trabajando.

:::tip[Buena práctica]
Cuando tengas dudas sobre el tipo de un valor, utiliza `type()` para comprobarlo.
:::

## Convertir también es decidir

La conversión de tipos no es una operación aislada. En realidad, forma parte de una decisión más amplia: elegir cómo debe tratarse la información dentro del programa.

Cada vez que conviertes un valor, estás definiendo algo importante:

- Si debe tratarse como número o como texto
- Si puede participar en un cálculo
- Si servirá para construir una salida
- Si podrá evaluarse en una condición

Por eso, comprender la conversión de tipos no solo ayuda a evitar errores. También ayuda a pensar con mayor precisión qué papel cumple cada dato dentro del algoritmo.

## Del concepto al código

Escribe y prueba un programa que haga lo siguiente:

1. Convierta el texto `"12"` a entero
2. Convierta el texto `"3.5"` a decimal
3. Convierta el número `20` a texto
4. Compruebe el tipo de cada resultado con `type()`
5. Intente convertir `"hola"` a entero y observe qué ocurre

Puedes tomar como punto de partida un ejemplo como este:

~~~python
entero = int("12")
decimal = float("3.5")
texto = str(20)

print(entero, type(entero))
print(decimal, type(decimal))
print(texto, type(texto))
~~~

Al realizar esta actividad, conviene prestar atención a estas ideas:

- Un mismo contenido puede cambiar de tipo
- Convertir modifica la forma en que Python interpreta el valor
- No todas las conversiones son válidas en cualquier caso

## Para profundizar

Si deseas ampliar este contenido con fuentes del propio lenguaje, estas lecturas son especialmente útiles:

- [Tutorial oficial de Python: una introducción informal](https://docs.python.org/3/tutorial/introduction.html)  
  Presenta números, cadenas y operaciones básicas en un contexto progresivo y formativo.

- [Biblioteca estándar: funciones integradas](https://docs.python.org/3/library/functions.html)  
  Describe funciones como `int()`, `float()`, `str()`, `bool()` y `type()`.

- [Tipos integrados de Python](https://docs.python.org/3/library/stdtypes.html)  
  Explica con mayor precisión técnica cómo se comportan los tipos básicos del lenguaje.