---
title: Bucle while
description: Repetición controlada en Python mediante la estructura while.
slug: control-de-flujo/repetitivas/bucle-while
sidebar:
  label: Bucle while
  order: 1
---

:::note[Verificación previa]
Antes de continuar, asegúrate de comprender las estructuras `if`, el uso de comparaciones y la importancia de la indentación en Python.
:::

No todos los programas resuelven un problema con una sola secuencia de instrucciones. En muchos casos, una misma acción debe repetirse varias veces mientras una condición siga siendo válida. Ahí es donde el bucle `while` se vuelve necesario: permite repetir un bloque de código mientras una condición se mantenga verdadera.

## Objetivo

Comprender cómo utilizar la estructura `while` para repetir instrucciones en Python mientras una condición se cumpla.

## Qué hace `while`

La estructura `while` permite ejecutar un bloque de instrucciones de forma repetida. Antes de cada vuelta, Python evalúa una condición. Si la condición es verdadera, el bloque vuelve a ejecutarse. Si es falsa, el ciclo termina y el programa continúa con la siguiente instrucción.

La forma general de esta estructura es la siguiente:

~~~python
while condicion:
    instruccion_1
    instruccion_2
~~~

En esta escritura conviene reconocer tres elementos:

- `while` es una palabra reservada del lenguaje
- `condicion` es una expresión que Python evalúa antes de cada repetición
- El bloque indentado contiene las instrucciones que se repetirán mientras la condición sea verdadera

:::caution[Atención con la escritura]
En Python, la indentación forma parte de la sintaxis. Si el bloque del `while` no está correctamente indentado, el programa producirá un error o no se comportará como esperas.
:::

## Cómo avanza el ciclo

Un bucle `while` no repite “por una cantidad fija de veces” de manera automática. Lo que hace es volver a ejecutar un bloque mientras la condición siga siendo verdadera. Por eso, dentro del ciclo normalmente debe ocurrir algo que modifique el estado del programa.

La lógica general puede resumirse así:

~~~mermaid
flowchart TD
    A[Inicio] --> B{¿La condición es verdadera?}
    B -->|Sí| C[Ejecutar bloque del while]
    C --> D[Actualizar dato o estado]
    D --> B
    B -->|No| E[Salir del ciclo]
~~~

Este recorrido ayuda a visualizar una idea central: en cada vuelta, el programa regresa a evaluar la condición. Si nada cambia, el ciclo puede continuar indefinidamente.

## Contar paso a paso

Una forma muy común de trabajar con `while` es utilizar una variable de control, a menudo llamada contador. Su función es llevar registro del avance del ciclo.

Observa este ejemplo:

~~~python
contador = 1

while contador <= 3:
    print(contador)
    contador = contador + 1
~~~

Aquí el valor de `contador` cambia en cada repetición. Ese cambio permite que la condición deje de cumplirse en algún momento.

El resultado será:

~~~text
1
2
3
~~~

Para leer mejor este tipo de ciclo, conviene distinguir sus partes principales.

**Tabla 1. Elementos frecuentes en un bucle `while` con contador**

| Elemento | Función | Ejemplo |
| --- | --- | --- |
| Variable de control | Guarda el estado que permite revisar el avance | `contador = 1` |
| Condición | Determina si el ciclo debe continuar | `contador <= 3` |
| Actualización | Modifica el valor para evitar una repetición infinita | `contador = contador + 1` |

Comprender estos elementos ayuda a escribir ciclos más claros y a detectar con mayor facilidad por qué un `while` continúa o termina.

## Cuando el ciclo no termina

Uno de los errores más frecuentes al comenzar a usar `while` es olvidar la actualización de la variable que controla la condición. Cuando eso ocurre, el ciclo puede continuar indefinidamente.

Observa este caso:

~~~python
contador = 1

while contador <= 3:
    print(contador)
~~~

En este ejemplo, `contador` nunca cambia. Como la condición sigue siendo verdadera, el programa continúa repitiendo el bloque.

:::danger[Evita el bucle infinito]
Si la condición del `while` nunca deja de cumplirse, el ciclo no terminará. Por eso, conviene revisar siempre qué variable cambia dentro del bloque y cómo ese cambio afecta la condición.
:::

## Un caso simple

El bucle `while` también puede acompañar procesos que cambian paso a paso.

~~~python
numero = 5

while numero > 0:
    print(f"Cuenta regresiva: {numero}")
    numero = numero - 1

print("Despegue")
~~~

Aquí el ciclo se repite mientras `numero` sea mayor que `0`. En cada vuelta, el valor disminuye en una unidad.

El resultado será:

~~~text
Cuenta regresiva: 5
Cuenta regresiva: 4
Cuenta regresiva: 3
Cuenta regresiva: 2
Cuenta regresiva: 1
Despegue
~~~

Este ejemplo muestra que `while` no solo repite instrucciones: también permite representar procesos que avanzan gradualmente.

## Validar hasta acertar

En muchos programas, el bucle `while` se utiliza para insistir hasta recibir un dato válido.

~~~python
edad = int(input("Ingresa una edad válida: "))

while edad < 0:
    edad = int(input("La edad no puede ser negativa. Intenta nuevamente: "))

print("Edad registrada")
~~~

Aquí el programa solicita una edad y revisa si el valor ingresado es menor que `0`. Si eso ocurre, vuelve a pedir el dato. El ciclo termina solo cuando la condición deja de cumplirse.

Este patrón aparece con frecuencia en procesos de validación y muestra una de las aplicaciones más útiles de `while`: repetir hasta que la situación sea correcta.

:::caution[Conversión de datos]
`input()` devuelve texto. Si necesitas comparar números dentro de un `while`, primero debes convertir el dato con `int()` o `float()`, según corresponda.
:::

## Cuándo conviene usarlo

El bucle `while` suele ser una buena elección cuando la repetición depende de una condición y no necesariamente de una cantidad fija de elementos.

Suele ser apropiado cuando:

- La repetición depende de un valor que cambia
- El programa debe validar una entrada
- La acción debe continuar hasta que ocurra cierta situación
- No se conoce con anticipación cuántas repeticiones serán necesarias

:::tip[Idea clave]
Usa `while` cuando la pregunta central del problema sea esta: “¿mientras esta condición se cumpla, qué debe seguir ocurriendo?”
:::

## Del concepto al código

Escribe un programa en Python que solicite una contraseña y no permita avanzar hasta que el usuario escriba `python123`.

### Requisitos

- Debe pedir la contraseña usando `input()`
- Debe usar un bucle `while`
- Debe seguir solicitando el dato mientras la contraseña sea incorrecta
- Debe mostrar un mensaje final cuando la contraseña sea correcta

### Ejemplo de interacción

~~~text
Ingresa la contraseña: hola
Contraseña incorrecta
Ingresa la contraseña: 1234
Contraseña incorrecta
Ingresa la contraseña: python123
Acceso permitido
~~~

:::tip[Antes de escribir el código]
Identifica primero cuál será la condición del `while`, qué dato debe actualizarse en cada vuelta y en qué momento el ciclo debe terminar.
:::

## Para profundizar

Si deseas ampliar este contenido con fuentes del propio lenguaje, estas lecturas son especialmente útiles:

- [Tutorial oficial de Python: herramientas de control de flujo](https://docs.python.org/3/tutorial/controlflow.html)  
  Presenta los bucles en un contexto formativo y muestra cómo se relacionan con otras estructuras de control.

- [Referencia del lenguaje: sentencia `while`](https://docs.python.org/3/reference/compound_stmts.html#the-while-statement)  
  Describe con mayor precisión técnica cómo se define `while` dentro del lenguaje.

- [Documentación oficial en español: más herramientas para control de flujo](https://docs.python.org/es/dev/tutorial/controlflow.html)  
  Ofrece una explicación accesible del tema en español y resulta útil para reforzar la comprensión general del bucle.