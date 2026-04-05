---
title: Condicional if
description: Evaluación de condiciones en Python mediante la estructura if.
slug: control-de-flujo/selectivas/condicional-if
sidebar:
  label: Condicional if
  order: 1
---

:::note[Verificación previa]
Antes de continuar, asegúrate de manejar variables, `input()`, conversión básica de tipos con `int()` o `float()` y el uso de `print()` para mostrar resultados.
:::

Programar no consiste únicamente en ejecutar instrucciones una tras otra. En muchos problemas, el programa necesita **evaluar una situación** y decidir si debe realizar una acción. Esa capacidad de decidir vuelve al código más útil, más flexible y más cercano a problemas reales.

## Objetivo

Comprender cómo utilizar la estructura `if` para incorporar decisiones simples en programas de Python, a partir de condiciones que pueden evaluarse como verdaderas o falsas.

## Qué hace `if`

La estructura `if` permite indicar que un bloque de instrucciones debe ejecutarse **solo cuando se cumple una condición**. Esta idea es una de las bases del control de flujo, porque introduce una pregunta dentro del programa: **¿debe ocurrir esta acción o no?**

Cuando Python encuentra un `if`, primero evalúa la condición asociada. Si el resultado es verdadero, ejecuta el bloque indentado que depende de ella. Si el resultado es falso, omite ese bloque y continúa con la siguiente parte del programa.

En términos prácticos, `if` permite construir programas que verifican, validan, comparan y reaccionan.

Por ejemplo, un programa puede:

- Mostrar un mensaje solo si la asistencia es perfecta
- Permitir el acceso únicamente si la edad cumple un mínimo
- Indicar aprobación solo cuando la nota alcanza el valor requerido

La forma general de esta estructura es la siguiente:

~~~python
if condicion:
    instruccion_1
    instruccion_2
~~~

En esta escritura conviene reconocer tres elementos:

- `if` es una palabra reservada del lenguaje
- `condicion` es una expresión que Python puede evaluar
- El bloque indentado contiene las instrucciones que se ejecutarán solo si la condición resulta verdadera

:::caution[Atención con la escritura]
En Python, la indentación no es un detalle visual ni una recomendación de estilo. Forma parte de la sintaxis del lenguaje y define qué instrucciones pertenecen al bloque del `if`.
:::

## Una decisión en el flujo

Hasta ahora, probablemente has construido programas donde todas las instrucciones se ejecutan en el orden en que fueron escritas. Ese comportamiento corresponde a un **flujo secuencial**. Sin embargo, muchos problemas no pueden resolverse únicamente siguiendo pasos fijos.

En esos casos, el programa necesita detenerse un momento, evaluar una condición y actuar según el resultado.

~~~mermaid
flowchart TD
    A[Programa en ejecución] --> B{¿Se cumple la condición?}
    B -->|Sí| C[Ejecutar bloque del if]
    B -->|No| D[Omitir bloque]
    C --> E[Continuar programa]
    D --> E
~~~

Este diagrama resume la idea central de `if`: **incorporar una decisión dentro del flujo del programa** sin interrumpir su continuidad.

## Cómo decide Python

Una condición es una expresión cuyo resultado puede interpretarse como verdadero o falso. En muchos casos, esa evaluación se construye mediante comparaciones.

Observa este ejemplo:

~~~python
edad = 18

if edad >= 18:
    print("Puede votar.")
~~~

Aquí, Python evalúa la expresión `edad >= 18`. Esa comparación produce un valor booleano: `True` o `False`.

- Si el resultado es `True`, se ejecuta la instrucción indentada
- Si el resultado es `False`, esa instrucción se omite

Esta idea es fundamental: `if` no decide por intuición, sino a partir del resultado de una expresión. Por eso, aprender a formular condiciones con claridad es tan importante como conocer la estructura misma.

## Valor de verdad

Aunque en muchos casos una condición se formula mediante una comparación que produce `True` o `False`, Python también puede evaluar otros valores según su **valor de verdad**. Esto significa que ciertos datos se interpretan como verdaderos y otros como falsos cuando se utilizan dentro de una condición.

| Expresión | Interpretación | Comentario |
| --- | --- | --- |
| `True` | Verdadera | Valor booleano explícito |
| `8 > 3` | Verdadera | La comparación produce `True` |
| `1` | Verdadera | Todo número distinto de `0` se interpreta como verdadero |
| `"Python"` | Verdadera | Una cadena con contenido se interpreta como verdadera |
| `False` | Falsa | Valor booleano explícito |
| `0` | Falsa | El valor `0` se interpreta como falso |
| `""` | Falsa | Una cadena vacía se interpreta como falsa |
| `[]` | Falsa | Una lista vacía se interpreta como falsa |

Comprender esta idea ayuda a leer mejor las condiciones y a entender que Python no se limita a evaluar únicamente expresiones escritas de forma explícita como `True` o `False`.

:::tip[Idea clave]
Entender el valor de verdad de una expresión permite construir condiciones con mayor precisión y leer el código con más seguridad.
:::

## El bloque importa

Una de las características más distintivas de Python es que la indentación define los bloques de código. En otros lenguajes, este papel suele cumplirlo un conjunto de llaves. En Python, en cambio, la sangría cumple esa función.

Observa el siguiente caso:

~~~python
temperatura = 31

if temperatura > 30:
    print("Hace calor.")
    print("Recuerda hidratarte.")

print("Fin del programa.")
~~~

Aquí ocurre algo importante:

- Las dos instrucciones indentadas pertenecen al bloque del `if`
- La última línea queda fuera de la condición
- Por eso, `print("Fin del programa.")` se ejecuta siempre

La indentación no solo organiza visualmente el programa. También comunica con precisión qué instrucciones dependen de una decisión y cuáles continúan fuera de ella.

## Un primer ejemplo

Supongamos que se desea informar si una estudiante tiene asistencia perfecta.

~~~python
asistencia = 100

if asistencia == 100:
    print("Cumples con asistencia perfecta.")
~~~

En este caso, el programa compara el valor almacenado en `asistencia` con `100`. Si ambos valores son iguales, la condición resulta verdadera y se muestra el mensaje.

~~~text
Cumples con asistencia perfecta.
~~~

Este ejemplo muestra una idea esencial: `if` permite incorporar una decisión puntual dentro del programa sin volver compleja la estructura general.

## Cuando hay datos del usuario

En muchos programas, la condición no se evalúa sobre un valor escrito directamente en el código, sino sobre información proporcionada por el usuario.

~~~python
edad = int(input("Ingresa tu edad: "))

if edad >= 12:
    print("Puedes ingresar a la actividad.")
~~~

Aquí el proceso ocurre en varios pasos:

1. El programa solicita una edad mediante `input()`
2. El dato ingresado se convierte a entero con `int()`
3. Luego se evalúa la condición
4. Si la edad es mayor o igual a `12`, se ejecuta la acción definida

Este patrón es muy común en programación: primero se recibe información, después se interpreta y finalmente se toma una decisión.

:::caution[Conversión de datos]
`input()` devuelve texto. Si necesitas comparar cantidades numéricas, primero debes convertir el dato con `int()` o `float()`, según corresponda.
:::

## Para ponerlo en práctica

Escribe un programa en Python que solicite la nota final de una estudiante e informe si está aprobada, considerando que la aprobación se obtiene con nota mayor o igual a `4.0`.

### Requisitos

- Debe pedir la nota usando `input()`
- Debe convertir el dato a `float`
- Debe usar una estructura `if`
- Debe mostrar el mensaje solo cuando la condición se cumpla

### Ejemplo de interacción

~~~text
Ingresa la nota final: 4.5
La estudiante está aprobada.
~~~

:::tip[Antes de escribir el código]
Identifica con claridad cuál es la entrada, qué condición se evaluará y qué acción ocurrirá si esa condición resulta verdadera.
:::

## Para profundizar

Si deseas ampliar este contenido con fuentes del propio lenguaje, estas lecturas son especialmente útiles:

- [Tutorial oficial de Python: herramientas de control de flujo](https://docs.python.org/3/tutorial/controlflow.html)  
  Presenta la estructura `if` de manera progresiva, con ejemplos y explicaciones orientadas al aprendizaje.

- [Referencia del lenguaje: sentencia `if`](https://docs.python.org/3/reference/compound_stmts.html#the-if-statement)  
  Describe con mayor precisión técnica cómo se define esta estructura dentro del lenguaje.

- [Tipos integrados: truth value testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)  
  Explica por qué ciertos valores y expresiones se interpretan como verdaderos o falsos en una condición.