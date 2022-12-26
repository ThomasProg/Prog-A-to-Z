+++
title = "Scopes"
date = 2022-12-25T22:57:00+01:00
weight = 9
chapter = false
pre = "<b>9. </b>"
+++

## Lesson

A "scope" is what defines the lifetime of a variable.\
Let's take a function as an example.

```python
def Bar():
    i = 5

print(i)
```

This program will not work, because the variable i is defined in the function *scope*, and is not available elsewhere.\

\
In Python, scopes are defined as indentations.\
Every time a new scope is created, we had a space before each line.\
Instructions in the same scope should all be aligned together.\
They are also preceded by ":".

\
In other languages, indentation and spaces are ignored.\
This is similar to the Execution Order chapter.\
Scopes are defined with brackets.\
The instructions of a given scope are surrounded by { and }.

```cpp
void Bar()
{ // scope begins
    int i = 5; 
} // scope ends
```

Even if indentation is not forced, it is a good practice to do it for readability.

\
You will see in the following chapters that scopes can be used for other things than functions.