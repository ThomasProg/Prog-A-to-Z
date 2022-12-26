+++
title = "Lists"
date = 2022-12-25T22:57:00+01:00
weight = 11
chapter = false
pre = "<b>11. </b>"
+++

## Introduction

Sometimes, we want to have a *lot* of variables.\
For example, we might want to have a list of the names of those attending to a certain party.\
The problem is, if it is a lot, we won't make a variable for each one of those.\
Especially if that number depends on an input; in that case, it is impossible.

\
This is the problem lists and arrays can solve.\
Warning: The first element usually has the index 0, the second one the 1st index, etc.\
This is not the case for every language, but in most of them it is.

## Fixed size arrays

In C or C++, the size of a basic array can't be changed.

```cpp
// Same in C or C++
int main()
{
    int myArray[5] = [11,22,55,44,33]; // we make a list of 5 elements
    myArray[0] = -11; // we replace 11, the element at the index 0, by -11 
    int aNumber = myArray[3]; // we get the 4th element, 44.
}
```

## Dynamics arrays

Sometimes, we want the size of our list to vary.\
We want to add elements, remove elements, etc.

In Python:
```py
myList = [1,2,5,3]
myList.append(10) # we add 10 at the end of the list
print(myList[4]) # we display 10
```

In other languages (C++, C#, Java), dynamic arrays exist as special types.\
Arrays are a part of containers.\
A lot of containers exist, for different reasons.\
However, it is a complex topic and will be discussed elsewhere.

\
In C, dynamic arrays are tightly linked to memory and dynamic allocation.\
It is a complex topic, and will be seen in a future chapter.

## Exercises

### Exercise 1
Ask the user 3 numbers as inputs.\
Ask the user a number i, between 0 and 2.\
Print the *i*th nummber the user sent as an input.

### Exercise 2
Make an array with the elements [2,1,9].\
Display the last element.

### Exercise 3
Make an array with the elements [2,1,9].\
Then, replace the 2nd element with 10.\
Then, print the sum of these elements.