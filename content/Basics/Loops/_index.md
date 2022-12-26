+++
title = "Loops"
date = 2022-12-25T22:57:00+01:00
weight = 12
chapter = false
pre = "<b>12. </b>"
+++

## Introduction

"Print all the numbers from 0 to 1000".\
If we only code with what we've seen until now, we would have to to write around 1000 lines for that (or 30 if you're really smart).\
However, loops exist to make our life easier.\
Different kinds of loops exist.

## While

While loops are the easiest to understand.\
While the condition is true, we run the code that is inside the next scope.\
Once it is false, we continue to run the code that is past the scope.

```python
# python
i = 0
while (i < 1000):
    print(i)
    i = i + 1
```

```cpp
// C++
#include <iostream>

int main()
{
    int i = 0
    // Exactly the same syntax in C, C#, Java... 
    while (i < 1000)
    {
        std::cout << i << std::endl;
        i = i + 1;
    }
}
```

This is an easy way to count from 0 to 100.

\
While loops are actually the most importants, because you can do what other kinds of loops do with these.\
Even if you don't learn other loops, learn this one.

## Exercises (1)

### Exercise 1
Make a program that prints numbers from 100 to 0 (in a reverse order).

### Exercise 2
Make a program that asks the user to enter a number, until this number is 5.\
Once the user enters 5 as an input, the program prints "GG" and ends. 

### Exercise 3
Make a program that:
- Ask the user to enter a number
- Displays all numbers from 0 to 100 that is not the number the user entered

\
Only use 1 loop maximum.

## For

For loops are an easier way to loop through a number to another.\
An example, to count from 0 to 100:

```cpp
// C++
#include <iostream>

int main()
{
    // Exactly the same syntax in C, C#, Java... 
    for (int i = 0; i < 100; i=i+1)
    {
        std::cout << i << std::endl;
    }
}
```

As we can see, we retrieve:
- The variable we initialize
- The condition of the while
- The modification of that variable

In Python, it is a bit more implicit:

```python
# counts numbers from 0 to 100
for i in range(0, 100, 1):
    print(i)
```

```python
# counts numbers from 0 to 100
for i in range(0, 100):
    print(i)
```

```python
# counts numbers from 0 to 100
for i in range(100):
    print(i)
```

## Exercises (2)

### Exercise 1
Make a program that prints numbers from 50 to 100, with a step of 2.


### Exercise 1
Ask the user to enter a number n.\
Ask the user to enter n numbers.\
Print all of these numbers.

## For each

For each loops are useful to loop through containers, like lists.\

```python
myList = [1,9,48,12,47,3]

# Displays all the elements in the list
for myElement in myList:
    print(myList)
```

The variable is, instead of an index, an element of the array.

```cpp
// C++
#include <iostream>

int main()
{
    int myList[] = [1,9,48,12,47,3];

    // Exactly the same syntax in C, C#, Java... 
    for (int myElement : myList)
    {
        std::cout << myElement << std::endl;
    }
}
```

## Exercises (3)

### Exercise 1
Ask the user to enter numbers, until they enter 0.\
After that, display all the numbers he entered as inputs.

### Exercise 2
Ask the user to enter numbers, until they enter 0.\
After that, display the numbers he entered as inputs only if they are positive. 