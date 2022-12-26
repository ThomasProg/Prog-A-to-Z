+++
title = "Comments"
date = 2022-12-11T17:25:53+01:00
weight = 3
chapter = false
pre = "<b>3. </b>"
+++

## Lesson

In python, try executing the following code:

```python
Displays "I love yogurts" on the terminal
print("I love yogurts")
```

It displays an error, because the language doesn't recognize what you wrote as valid instructions.

Now, try executing this:
```python
# Displays "I love running" on the terminal
print("I love running")
```

It works, and the line with the # is ignored.\
This is called a comment, and is useful to... comment your code.\
It is useful for others to understand your code, but also for yourself if you check back at your code in the future.

## In other languages

Comments are usually done with #, // or /\* \*/.\
Usually, to comment a line, # is used in Python, // in other languages.\
To comment multiples lines, in most languages, you can wrap your code between /\* and \*/.

\
In C++:
```cpp
#include <iostream>

int main() 
{
    // Displays "I love running" on the terminal
    std::cout << "I love running" << std::endl;

    /* This is 
        a comment 
        that takes
        multiple lines.*/

    /* This one 
     * takes multiple
     * linest too.
     */
}

```