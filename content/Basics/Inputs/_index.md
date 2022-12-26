+++
title = "Inputs"
date = 2022-12-25T22:57:00+01:00
weight = 8
chapter = false
pre = "<b>8. </b>"
+++

## Lesson

As users, we are not making a program.\
For the program to behave differently, depending on the user, specific functions exist.\
At first, users only had a terminal.\
Messages were displayed there, and to navigate through it, they entered special words or numbers as *inputs*.\
Reading from a terminal is an easy way to get an input.\
The same as print(), every language has a way to read the input of the user from a terminal.

\
Example:
```python
myInput = input()

print("The input is:")
print(myInput)
```

In python, if the input should be a number, you have to make it explicit:
```python
myInput = int(input())

print("The input is:")
print(myInput)
```

```cpp
// C++
#include <iostream>

int main()
{
    int myInput;
    std::cin >> myInput;
}
```

## Exercises

### Exercise 1
Ask the user a number as an input.\
Print that number multiplied by 2.

### Exercise 2
Ask the user a number as an input.\
Display "Negative" if the number is negative, "Positive" otherwise.


