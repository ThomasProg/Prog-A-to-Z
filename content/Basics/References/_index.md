+++
title = "References"
date = 2022-12-25T22:57:00+01:00
weight = 14
chapter = false
pre = "<b>14. </b>"
hidden = true
+++

## References in Object Oriented Programming languages

In Python, C#, Java, and other languages, references are implicit.

```python
class MyClass:
    a = 4
    b = 2

myInstance = MyClass()
myReference = myInstance
```

```csharp
class MyClass
{
    public int a;
    public int b;
};

class Foo
{
    static void main(string[] args)
    {
        MyClass myInstance = new MyClass();
        myReference = myInstance;
    }
};
```

In C++, you have to put the & character just after the type.\

```cpp
class MyClass
{
public:
    int a;
    int b;
};

int main()
{
    MyClass myInstance = MyClass();
    MyClass& myReference = myInstance;
}