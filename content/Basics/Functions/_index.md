+++
title = "Functions"
date = 2022-12-25T22:57:00+01:00
weight = 8
chapter = false
pre = "<b>8. </b>"
+++

## Simple Functions

Calling a function is equivalent to replace the call by what is inside the function.

```python
def MyFunction():
    print("Hello")

MyFunction()
MyFunction()
MyFunction()
```

is equivalent to:

```python 
print("Hello")
print("Hello")
print("Hello")
```

It is the same for any language.

\
In C:
```cpp
#include <iostream>

void MyFunction()
{
    std::cout << "Hello" << std::endl;
}


int main()
{
    MyFunction();
    MyFunction();
    MyFunction();
}
```

is equivalent to:
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello" << std::endl;
    std::cout << "Hello" << std::endl;
    std::cout << "Hello" << std::endl;
}
```

You might also notice that main() is, in itself, a function.\
And the reason it is the entry point is that external code is calling that function.

\
Just replacing one line isn't much.\
However, you might also notice that print() is a function too.\
Functions everywhere!!!\
And as you can imagine, the code ran once we call "print()" isn't small... and we wouldn't want to replace it everytime.\
Making a function makes it easy to do whatever we want as many times as we want in an easy way.

\
Actually, functions are **the** most important thing in programming.\
They are the reason people can code things really fast.\
They are also the basis of code architecture, which is something we will talk in a future chapter.

## Exercise (1):

Using a function, write a code that prints 5 times:
"I"
"am"
"trying"
"not"
"to"
"repeat"
"my"
"code"
"too
"many"
"times"

## Functions with arguments

Sometimes, we do not want functions to do exactly the same thing every time we call them.\
This is the case for print(); we want to print different things each time we call it.\
We might want to use a variable.\
With functions, there are special ways to declare variables, and they are called arguments.

```cpp
#include <iostream>

void MyFunction(int myVariable)
{
    std::cout << myVariable << std::endl;
}

int main()
{
    int number = 3;
    MyFunction(number);
}
```

We can put variables in the parenthesis!\
And this is exactly what we are already doing with print()!

\
In this case, it is equivalent the following code:
```cpp
#include <iostream>

void MyFunction(int myVariable)
{
    std::cout << myVariable << std::endl;
}

int main()
{
    int number = 3;
    int myVariable = number;
    std::cout << myVariable << std::endl;
}
```

We can also send multiple parameters:

```cpp
#include <iostream>

void Add(int myVariable1, int myVariable2)
{
    std::cout << myVariable1 + myVariable2 << std::endl;
}

int main()
{
    Add(2,4);
}
```

## Exercises (2):

### Exercise 1

In C++:\
Write a function named "PrintUwU()" that prints "uwu".\
Try calling it to see if it works.
```cpp
int main()
{
    PrintUwU();
    PrintUwU();
}
```
would print:
```
uwu
uwu
```

### Exercise 2

In Python:\
Write a function named "PrintInUwULanguage()".\
This function takes a string as a parameter, displays that string, and prints "uwu" next.

```
PrintInUwULanguage("Hello")
PrintInUwULanguage("How are you?")
```
should print:
```
Hello
uwu
How are you?
uwu
```


### Exercise 3

In Python or C++:\
Make a function named "AddDigitToRight()".\
This function takes a number and a digit.\
It then prints the number with the digit on the right.

```
AddDigitToRight(16, 7)
AddDigitToRight(124, 2)
```
should print:
```
167
126
```

## Functions with return values

In most cases, we do not want the function to just print something.\
Sometime, we want it to compute something instead, and to give us the result.\
Exactly like a mathematical function.\
f(x, y) = x + 2*y\
is a mathematical function that takes 2 numbers as arguments, and returns a number.\

\ 
In programming, we can do the same thing.\
To do that, we use the "*return*" keyword.

```python
def Foo():
    return 3

a = Foo()
print(a)
```

Python abstracts types; but in other languages, the type is defined next to the function.\
C++:
```cpp

```cpp
// here, int is the return type
int Foo():
    return 3;

int main()
{
    int a = Foo()
    std::cout << a << std::endl;
}
```

Also, the function ends the moment "return" is called.\

```cpp
int Foo():
    int b = 5;
    return b;
    // The following code will NEVER execute.
    b = 3;
    return b;
```

As you noticed, for the return type, we replaced "void".\
"void" means there is nothing to return.\
However, even in a void function, we can use the return function to put an end to that function.

## Exercises (3):

Make a function named "AddDigitToRight()".\
It takes a number and a digit as arguments.\
Instead of printing the result, it now returns it instead.

```python
b = AddDigitToRight(484, 1)
b = AddDigitToRight(56, 8)
print(b)
```
should print:
```
568
```

