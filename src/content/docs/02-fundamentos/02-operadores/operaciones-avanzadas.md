---
title: Operaciones avanzadas
description: Combinación de operadores aritméticos, uso de paréntesis y evaluación de expresiones numéricas en Python.
slug: fundamentos/operadores/operaciones-avanzadas
sidebar:
  label: Operaciones avanzadas
  order: 2
---

:::note[Verificación previa]
Antes de continuar, comprueba lo siguiente:

- Ya conoces los operadores aritméticos básicos en Python.
- Sabes realizar sumas, restas, multiplicaciones y divisiones simples.
- Puedes interpretar resultados numéricos en variables y expresiones.
:::

## Objetivo

Aplicar combinaciones de operadores aritméticos en Python para construir expresiones numéricas más complejas y comprender cómo se evalúan.

## Concepto clave

Una expresión aritmética puede combinar varios operadores en una misma instrucción. En esos casos, Python sigue un orden de evaluación para determinar el resultado.

## ¿Qué son las operaciones avanzadas?

Cuando un cálculo incluye más de una operación, el resultado no depende solo de los valores, sino también del orden en que Python resuelve la expresión. Por ejemplo, no es lo mismo escribir:

```
2 + 3 * 4
```

Que escribir:

```
(2 + 3) * 4
```

Aunque contienen los mismos números y operadores, el resultado cambia.

```python
print(2 + 3 * 4)
print((2 + 3) * 4)
```

Salida esperada:

```
14
20
```

Podemos observar que:

- En la primera expresión, Python resuelve primero la multiplicación.
- En la segunda, los paréntesis cambian el orden y obligan a resolver primero la suma.

### Orden de evaluación

Cuando no hay paréntesis, Python sigue un orden general de prioridad entre operadores.

| Prioridad | Operación | Operadores |
|---|---|---|
| 1 | Paréntesis | `()` |
| 2 | Potencia | `**` |
| 3 | Multiplicación, división, división entera y módulo | `*`, `/`, `//`, `%` |
| 4 | Suma y resta | `+`, `-` |

:::note[Idea clave]
Si una expresión tiene varios operadores, Python no resuelve todo simplemente de izquierda a derecha. Primero respeta la prioridad de cada operación.
:::

### Uso de paréntesis

Los paréntesis permiten indicar con claridad qué parte de una expresión debe resolverse primero.

```python
print((8 + 2) * 3)
print(8 + (2 * 3))
```

Los paréntesis no solo cambian el resultado cuando es necesario. También ayudan a que una expresión sea más fácil de leer. Salida esperada:

```
30
14
```

### Expresiones combinadas con variables

También es posible combinar variables y operadores en una sola expresión.

```python
precio = 1500
cantidad = 3
descuento = 500

total = precio * cantidad - descuento
print(total)
```

Salida esperada:

```
4000
```

Lo que ocurre es lo siguiente:

- Primero se calcula `precio * cantidad`.
- Después se resta `descuento`.
- El resultado final se guarda en `total`.

Queda claro que el resultado es correcto, pero la expresión puede resultar difícil de leer. Para mejorar la claridad, podemos usar paréntesis o dividir el cálculo en pasos intermedios. 

### Claridad en los cálculos

Una expresión puede ser válida, pero aun así resultar difícil de leer si está escrita de forma poco clara.

```python
resultado = 10 + 5 * 2 - 4 / 2
```

Python puede resolverla, pero una versión con paréntesis o con pasos intermedios puede ser más comprensible.

Opción con paréntesis:

```python
resultado = (10 + (5 * 2)) - (4 / 2)
print(resultado)
```

Opción con variables intermedias:

```python
parte1 = 5 * 2
parte2 = 4 / 2
resultado = 10 + parte1 - parte2
print(resultado)
```

:::tip[Buena práctica]
Si una expresión se vuelve difícil de leer, usa paréntesis o divide el cálculo en varias variables intermedias.
:::

### Potencia y combinación de operadores

La potencia también puede formar parte de expresiones más complejas.

```python
print(2 + 3 ** 2)
print((2 + 3) ** 2)
```

Aquí se observa nuevamente que el orden de evaluación modifica el resultado. Salida esperada:

```
11
25
```

:::caution[Error frecuente]
Un error frecuente es asumir que las operaciones se resuelven siempre de izquierda a derecha. En Python, el orden depende de la prioridad de los operadores y del uso de paréntesis. También es frecuente escribir expresiones demasiado largas sin agrupar ni separar partes del cálculo.
:::

## Mini práctica

Escribe y prueba las siguientes expresiones:

1. `2 + 3 * 5`
2. `(2 + 3) * 5`
3. `10 - 4 / 2`
4. `(10 - 4) / 2`
5. `2 ** 3 + 1`
6. `(2 + 3) ** 2`

Luego responde:

- ¿En qué casos cambió el resultado?
- ¿Qué efecto tuvieron los paréntesis?
- ¿Qué expresión te pareció más fácil de leer?
