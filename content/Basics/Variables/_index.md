+++
title = "Variable"
date = 2022-12-25T22:57:00+01:00
weight = 6
chapter = false
pre = "<b>6. </b>"
+++

## Exercise

You are a mathematician.\
You finished computing the formula you want to use.\
You say:\
"Let's a=23448, b=8754, c=(a + b) / 4. I want to compute d = 3*c - (c+8) + c\*10

\
If we go the way we did before, it means we should take the formula, replace a, b and c.\
For this example, it is a bit long but feasible.\
However, imagine doing that with a formula even longer.

\
You recently heard the concept of "variables".\
You decided to give it a shot writing the following program:

```python
x = 3
y = 4
z = x + 2*y
print(z)
```

It displays 11.\
The same way, using 3 variables, try displaying the value of d.

## Lesson 

Variables can contain values.\
In most languages, you can assign them values with "=".\
The variable to assign is on the left and its new value on the right.\
You can then use them in your code, and they will be replaced by their value.

## Exercise 2

Look at the following code.

```python
a = 5
a = 8
a = a + 2
print(a)
```

What will be displayed?\
Once you think you know, run the code on repl.it and try to understand what happens.