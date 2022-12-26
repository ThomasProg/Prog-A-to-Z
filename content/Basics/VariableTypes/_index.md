+++
title = "Variables types"
date = 2022-12-11T17:25:53+01:00
weight = 7
chapter = false
pre = "<b>7. </b>"
+++

## Lesson

Try running the following code in python:
```python
a = "Hello "
b = 3
print(a + b)
```
It will show an error.

\
The reason is, something called *types* exists.\
In the memory, types are treated differently and they possess different operations.\
It makes sense that we can't add a string and a number.\

\
In Python, types are mostly implicit.\
However, in other languages, they are explicit.\
That way, the programmer *knows* what type of data a variable contains.

C++:
```cpp
#include <iostream>
#include <string>

int main()
{
    std::string myStringValue = "Hello "; // multiple characters
    int myIntegerValue = -3; // an integer, that can be negative or positive
    bool myBooleanValue = false; // a boolean, being either true or false
    float myFloatingPointValue = 4.3f; // a decimal number, negative or positive 
    char myCharacterValue = 'o'; // a character from the ascii table 
}
```

As you saw, std::string is a bit special.\
It is because strings aren't a native type.\
They do not even exist as "strings" in C: they are treated as a list of characters.\
Lists will be discussed in a future chapter.

\
Types are only written when the variable is first declared.

```cpp
#include <iostream>

int main()
{
    int i;
    i = 5;
    std::cout << i << std::endl;
}
```

Sometimes, we might want to convert a type into another type.\
Some convertions can be implicit, but the preferred way is doing it explicitly.

```cpp
#include <iostream>

int main()
{
    float a = 5.983f;
    int b = (int) a; // explicit conversion to an integer
    std::cout << b << std::endl;
}
```

In that case, the decimal part will be lost and the program will print 5.

\
Printing in C is also complex, because it depends on the type.\
```C
#include <cstdio>

int main()
{
    int number = 3;
    printf("Number : %d", number);
}
```

%d for digits (integers), %s for strings, %c for characters, among others.