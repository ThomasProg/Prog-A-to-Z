+++
title = "Entry Point"
date = 2022-12-11T17:25:53+01:00
weight = 4
chapter = false
pre = "<b>4. </b>"
+++

## Lesson

As you might have noticed in the last chapter, in C++, there are other things other than the print instruction.\
In Python, we can just write the code directly.\
However, in other languages, there is an "entry point".\
This is where the program starts.\
Each program has an entry point.

\
In C, C++, C# and Java, it is the main() or Main() function.\
It means that even if you put code before the main() function, it will not be called first.

## Examples

In Python:
```python
# entry point here
```

In C or C++:
```cpp
int main() 
{
    // entry point here
}
```

In Java:
```java
class Main 
{  
    public static void main(String args[]) 
    { 
        // entry point here
    } 
}
```

In C#:
```csharp
class YouCanPutAnythingHere 
{
    static void Main(string[] args) 
    {
        // entry point here
    }
}
```