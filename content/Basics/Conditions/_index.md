+++
title = "Conditions"
date = 2022-12-25T22:57:00+01:00
weight = 10
chapter = false
pre = "<b>10. </b>"
+++

## If / Else

As the name states, in your code, you can put conditions.\
An obvious way to use those is when putting passwords.

```py
codeUser = int(input())
if (codeUser == 398471): # if the code is equal to 398471
    print("The money is under the red flower in the garden.")
else:
    print("You little thief! Don't try to steal my money!")
```

No matter the language, we usually use the if / else keywords.

```cpp
// C++
#include <iostream>

int main()
{
    int codeUser;
    std::cin << codeUser << endl;

    // Exactly the same syntax in C, C#, Java... 
    if (codeUser == 398471) // if the code is equal to 398471
    {
        std::cout << "The money is under the red flower in the garden." << std::endl;
    }
    else:
    {
        std::cout << "You little thief! Don't try to steal my money!" << std::endl;
    }
}
```

As you can see, if and else directives also force us to make a new scope.

## Boolean operators

To make conditions easier, boolean operators exist.\

```python
# Python
# These operators are the same for C, C++, C#, Java... everywhere

number = 4

if (number == 4):
    print("The number is equal to 4")

if (number != 4):
    print("The number is not equal to 4")

if (number < 4):
    print("The number is less than 4")

if (number > 4):
    print("The number is higher than 4")
```

```cpp
// These operators are the same for C, C++, C#, Java... everywhere except Python
#include <iostream>

int main()
{
    bool condition = True
    bool otherCondition = False

    if (condition)
    {
        print("condition is True")
    }
    if (not(condition))
    {
        print("condition is False")
    }
    if (condition and otherCondition)
    {
        print("Both condition and otherCondition are True")
    }
    if (condition or otherCondition)
    {
        print("atleast condition or otherCondition is true (both can be true)")
    }   
}
```

```python
# Python only

condition = True
otherCondition = False

if (condition):
    print("condition is True")

if (not(condition)):
    print("condition is False")

if (condition and otherCondition):
    print("Both condition and otherCondition are True")

if (condition or otherCondition):
    print("atleast condition or otherCondition is true (both can be true)")
```


## Exercises

### Exercise 1
Asks the user a number as an input.\
Print "The answer to life, the universe, and everything" only if this input is 42.\
If it is not, print "I don't like you :(".

### Exercise 2
Asks the user three numbers as inputs.\
If the first number is higher than the second but less than the third, print "Good choice.".\
Else, print "Not a good choice."

