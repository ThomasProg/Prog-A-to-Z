+++
title = "Execution Order"
date = 2022-12-11T17:25:53+01:00
weight = 2
chapter = false
pre = "<b>2. </b>"
+++

## Execution order in Python

Programmers use languages to write instructions.\
However, these instructions are usually ordered.

\
In python, order is done from up to bottom.\
Run the following code:

```python
print("Hello")
print("world!")
```

As you can see in the terminal, "Hello" is first printed, and then "world!" is printed.

## Exercises

## 1. 

Display the following on the terminal: 
```
Coding
is 
fun
```

## 2. 

Display the following on the terminal: 
```
Coding is fun
but sleeping is nice too
```

## Execution order in other languages

In other programming languages, backlines and spaces are actually ignored.\
To separate instructions, we use the ";" character.\
Instructions are running from left to right.\
However, since backlines are ignored, writing from top to bottom also work, as long as we put the ";" character after each instruction.

\
It means that in C++, the following programs are valid and equivalent:
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello" << std::endl;
    std::cout << "world!" << std::endl;
}
```

```cpp
#include <iostream>

int main() {
    std::cout << "Hello" << std::endl; std::cout << "world!" << std::endl;
}
```

```cpp
#include <iostream>

int main()
{
            std::cout << "Hello" << std::endl
    ;
std::cout << "world!" << 
    std::endl
    ;
}
```

**However**, the code we write must be easily understandable by others.\
If not, they wouldn't be able to fix bugs related to your code in a bigger program.

\
That is why we usually come back to line after each instruction, as a good practice.\
This is valid for C, C++, Java, C#, etc.

## Exercises

Try doing the same exercises as before, but in other languages (C, C++, C#, Java).
