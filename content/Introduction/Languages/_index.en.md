+++
title = "Languages"
date = 2022-12-11T17:25:53+01:00
weight = 1
chapter = false
pre = "<b>1. </b>"
+++

A programmer gives instructions for the machine to execute.\
However, the machine is, by nature, just a list of bytes and data.\
At first, programmers used punched cards to send directly bytes to the machine.

\
{{< align >}}
{{% box %}}
![Schema](punchCards.jpg "Punchcard")
{{% /box %}}
{{< /align >}}

\
Since then, screens and keyboards have been created.\
Computers could type their bytes directly on a keyboard.\
Typing 0 and 1 is not that fun however.\
We quickly decided to replace them by "words" to make it easier.\
These words will then be replaced by the machine to their corresponding bytes.
This is what assembly is.


```asm
org  0x100        

mov  dx, msg      
mov  ah, 9       
int  0x21        

mov  ah, 0x4c    
int  0x21        

msg  db 'Hello, World!', 0x0d, 0x0a, '$' 
```

\
Assembly was better, but still complicated.\
More than all: it is specific to the instructions of a specific machine.\
Running the same assembly on a different machine would not work.

\
This is where languages appeared.\
The goal of languages is to:
- Make code machine independent
- Make instructions easier to write and understand
- Debug more easily

\
In short: It makes it easier for the programmer.\
You should not see the language in itself as an obstacle, as THE thing to learn to become a programmer.\
Languages are a tool.\
A good programmer is not someone knowing a language well.\
A good programmer is someone good with logic, and that can apply this logic to the code they make.

\
Different kind of languages exist.\
Mainly, they are separated into:
- Low level languages, being closer to the assemby: they let you modify memory easily.
- High level languages, abstracting a lot of things, to make the code safer for the programmer.

Also, languages are abstracting the same thing.\
Their logic is the same.\
Once you understand a language, you can understand others easily.

\
High level languages, like Python, are often recommended to learn how to code.\
The reason is, they are safe.\
No random crash happening.\
However, they also hide a lot of things, and in my opinion, can make it harder to understand what the code really does.

\
These tutorials will **mix** languages.\
Mainly: 
- Python 
- C
- C++ 
- C#
- Java

\
If you are here to learn only one language, like Python, don't worry.\
It will only makes it easier for you to understand, and not harder.










