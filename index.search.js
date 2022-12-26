var relearn_search_index=[{content:" Learn how to code! ",description:"",tags:null,title:"Introduction",uri:"/index.html"},{content:` Introduction The beginning Welcome.
This website is for those who want to learn how to code.
First time coding? Don’t worry.
It will teach you everything from A to Z.
Programming is a tool.
The code will respond to every order you have.
Some might use it for fun, and make games.
Some might use it to make convenient apps.
Some might use it to build weapons and kill people.
Some might use it to improve the medical field and save lives.
But more than that, programming is fun.
Just think of it as a puzzle game.
Just go at your own rhythm and enjoy.
Ready to start your journey?
Then, click here.
`,description:"",tags:null,title:"Introduction",uri:"/introduction/index.html"},{content:`A programmer gives instructions for the machine to execute.
However, the machine is, by nature, just a list of bytes and data.
At first, programmers used punched cards to send directly bytes to the machine.
Punchcard Since then, screens and keyboards have been created.
Computers could type their bytes directly on a keyboard.
Typing 0 and 1 is not that fun however.
We quickly decided to replace them by “words” to make it easier.
These words will then be replaced by the machine to their corresponding bytes. This is what assembly is.
org 0x100 mov dx, msg mov ah, 9 int 0x21 mov ah, 0x4c int 0x21 msg db 'Hello, World!', 0x0d, 0x0a, '$' Assembly was better, but still complicated.
More than all: it is specific to the instructions of a specific machine.
Running the same assembly on a different machine would not work.
This is where languages appeared.
The goal of languages is to:
Make code machine independent Make instructions easier to write and understand Debug more easily In short: It makes it easier for the programmer.
You should not see the language in itself as an obstacle, as THE thing to learn to become a programmer.
Languages are a tool.
A good programmer is not someone knowing a language well.
A good programmer is someone good with logic, and that can apply this logic to the code they make.
Different kind of languages exist.
Mainly, they are separated into:
Low level languages, being closer to the assemby: they let you modify memory easily. High level languages, abstracting a lot of things, to make the code safer for the programmer. Also, languages are abstracting the same thing.
Their logic is the same.
Once you understand a language, you can understand others easily.
High level languages, like Python, are often recommended to learn how to code.
The reason is, they are safe.
No random crash happening.
However, they also hide a lot of things, and in my opinion, can make it harder to understand what the code really does.
These tutorials will mix languages.
Mainly:
Python C C++ C# Java If you are here to learn only one language, like Python, don’t worry.
It will only makes it easier for you to understand, and not harder.
`,description:"",tags:null,title:"Languages",uri:"/introduction/languages/index.html"},{content:` Lesson Let’s go back in history.
Industrial revolution was already booming.
Science was used to create steam locomotive, new types of buildings, etc.
Items starting to be mass produced.
All of these things required simple math computations:
additions substractions multiplications and others The problem is, there were a LOT of them, and one error could be fatal.
Computers were made to solve that problem.
People could run operations, and the computer would print, display the result, on a terminal.
Today, terminals are not used much.
We use our mouse to navigate through the desktop, our browser, and our applications instead.
However, terminals are nice to debug things and to learn how to code.
The reason is, in every language, there is a way to display a message easily on a terminal.
In python:
print("Hello world!") Exercises On repl.it, no matter the language, a default code displaying “Hello world!” should be there by default.
Try displaying “I will be the best!” in Python, C, C++, C#, and Java.
`,description:"",tags:null,title:"Print",uri:"/basics/print/index.html"},{content:` Prog-A-to-Z Basics The basics you have to know, no matter the language.
`,description:"",tags:null,title:"Basics",uri:"/basics/index.html"},{content:` Execution order in Python Programmers use languages to write instructions.
However, these instructions are usually ordered.
In python, order is done from up to bottom.
Run the following code:
print("Hello") print("world!") As you can see in the terminal, “Hello” is first printed, and then “world!” is printed.
Exercises 1. Display the following on the terminal:
Coding is fun 2. Display the following on the terminal:
Coding is fun but sleeping is nice too Execution order in other languages In other programming languages, backlines and spaces are actually ignored.
To separate instructions, we use the “;” character.
Instructions are ran from left to right.
However, since backlines are ignored, writing from top to bottom also work, as long as we put the “;” character after each instruction.
It means that in C++, the following programs are valid and equivalent:
#include \u003ciostream\u003e int main() { std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; std::cout \u003c\u003c "world!" \u003c\u003c std::endl; } #include \u003ciostream\u003e int main() { std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; std::cout \u003c\u003c "world!" \u003c\u003c std::endl; } #include \u003ciostream\u003e int main() { std::cout \u003c\u003c "Hello" \u003c\u003c std::endl ; std::cout \u003c\u003c "world!" \u003c\u003c std::endl ; } However, the code we write must be easily understandable by others.
If not, they wouldn’t be able to fix bugs related to your code in a bigger program.
That is why we usually come back to line after each instruction, as a good practice.
This is valid for C, C++, Java, C#, etc.
Exercises Try doing the same exercises as before, but in other languages (C, C++, C#, Java).
`,description:"",tags:null,title:"Execution Order",uri:"/basics/executionorder/index.html"},{content:`Usually, to code, you need a software to convert the language into assembly for the machine to understand.
However, at first, no need to install anything.
You can just go on https://repl.it/ .
Go there.
At the bottom of the front page, you can select the language you want to use.
Select Python.
You should now see the following page:
Repl.it Click on the green button.
On the right, “Hello world!” should get displayed on the right panel.
Try to guess what the following code does:
print("It works!") After that, copy and paste it on the website (replacing the previous code). Press the green button once again.
You should see the result.
Before continuing, we will see how errors work.
Copy and paste the following:
print("It doesn't work) Press the green button.
A red message should appear.
This is an error message.
You WILL get a lot of them, but it is normal.
Even programmers who’ve been coding for 30 years still have them.
The goal of the error message is to tell you the problem, so that you can fix it.
In this case, try to see what the problem is.
A specific page will be dedicated to errors.
You are ready to start programming.
`,description:"",tags:null,title:"Where to code",uri:"/introduction/where-to-code/index.html"},{content:` Lesson In python, try executing the following code:
Displays "I love yogurts" on the terminal print("I love yogurts") It displays an error, because the language doesn’t recognize what you wrote as valid instructions.
Now, try executing this:
# Displays "I love running" on the terminal print("I love running") It works, and the line with the # is ignored.
This is called a comment, and is useful to… comment your code.
It is useful for others to understand your code, but also for yourself if you check back at your code in the future.
In other languages Comments are usually done with #, // or /* */.
Usually, to comment a line, # is used in Python, // in other languages.
To comment multiples lines, in most languages, you can wrap your code between /* and */.
In C++:
#include \u003ciostream\u003e int main() { // Displays "I love running" on the terminal std::cout \u003c\u003c "I love running" \u003c\u003c std::endl; /* This is a comment that takes multiple lines.*/ /* This one * takes multiple * linest too. */ } `,description:"",tags:null,title:"Comments",uri:"/basics/comments/index.html"},{content:` Lesson As you might have noticed in the last chapter, in C++, there are other things other than the print instruction.
In Python, we can just write the code directly.
However, in other languages, there is an “entry point”.
This is where the program starts.
Each program has an entry point.
In C, C++, C# and Java, it is the main() or Main() function.
It means that even if you put code before the main() function, it will not be called first.
Examples In Python:
# entry point here In C or C++:
int main() { // entry point here } In Java:
class Main { public static void main(String args[]) { // entry point here } } In C#:
class YouCanPutAnythingHere { static void Main(string[] args) { // entry point here } } `,description:"",tags:null,title:"Entry Point",uri:"/basics/entrypoint/index.html"},{content:` Exercises Imagine being in the XXth century.
You want to compute 34844 - 343788 / 4 + (284937 + 4389472) * 24.
However, it is quite bothersome to compute that by hand.
You decide to use a computer for that.
You first test the computer by writing the following code:
print(2+5) print(4*2 + 1) print(4*(2 + 1)) As expected, it returns 7, 9, and then 12.
Compute 34844 - 343788 / 4 + (284937 + 4389472) * 24 in Python.
Rules On numbers, the following operations exist between numbers:
to add to substract to multiply / to divide Just like in mathematics :
Mulitplication and division takes priority You can add parentheses to tell which operations should be first These rules work with Python, C, C++, C#, Java, Javascript, PHP… and a lot more.
`,description:"",tags:null,title:"Operations on numbers",uri:"/basics/operations/index.html"},{content:` Exercise You are a mathematician.
You finished computing the formula you want to use.
You say:
“Let’s a=23448, b=8754, c=(a + b) / 4. I want to compute d = 3*c - (c+8) + c*10
If we go the way we did before, it means we should take the formula, replace a, b and c.
For this example, it is a bit long but feasible.
However, imagine doing that with a formula even longer.
You recently heard the concept of “variables”.
You decided to give it a shot writing the following program:
x = 3 y = 4 z = x + 2*y print(z) It displays 11.
The same way, using 3 variables, try displaying the value of d.
Lesson Variables can contain values.
In most languages, you can assign them values with “=”.
The variable to assign is on the left and its new value on the right.
You can then use them in your code, and they will be replaced by their value.
Exercise 2 Look at the following code.
a = 5 a = 8 a = a + 2 print(a) What will be displayed?
Once you think you know, run the code on repl.it and try to understand what happens.
`,description:"",tags:null,title:"Variable",uri:"/basics/variables/index.html"},{content:` Lesson Try running the following code in python:
a = "Hello " b = 3 print(a + b) It will show an error.
The reason is, something called types exist.
In the memory, types are treated differently and they possess different operations.
It makes sense that we can’t add a string and a number.\\
In Python, types are mostly implicit.
However, in other languages, they are explicited.
That way, the programmer knows what type of data a variable contains.
C++:
#include \u003ciostream\u003e #include \u003cstring\u003e int main() { std::string myStringValue = "Hello "; // multiple characters int myIntegerValue = -3; // an integer, that can be negative or positive bool myBooleanValue = false; // a boolean, being either true or false float myFloatingPointValue = 4.3f; // a decimal number, negative or positive char myCharacterValue = 'o'; // a character from the ascii table } As you saw, std::string is a bit special.
It is because strings aren’t a native type.
They do not even exist as “strings” in C: they are treated as a list of characters.
Lists will be discussed in a future chapter.
Types are only written when the variable is first declared.
#include \u003ciostream\u003e int main() { int i; i = 5; std::cout \u003c\u003c i \u003c\u003c std::endl; } Sometimes, we might want to convert a type into another type.
Some convertions can be implicit, but the preferred way is doing it explicitly.
#include \u003ciostream\u003e int main() { float a = 5.983f; int b = (int) a; // explicit conversion to an integer std::cout \u003c\u003c b \u003c\u003c std::endl; } In that case, the decimal part will be lost and the program will print 5.
Printing in C is also complex, because it depends on the type.\\
#include \u003ccstdio\u003e int main() { int number = 3; printf("Number : %d", number); } %d for digits (integers), %s for strings, %c for characters, among others.
`,description:"",tags:null,title:"Variables types",uri:"/basics/variabletypes/index.html"},{content:` Simple Functions Calling a function is equivalent to replace the call by what is inside the function.
def MyFunction(): print("Hello") MyFunction() MyFunction() MyFunction() is equivalent to:
print("Hello") print("Hello") print("Hello") It is the same for any language.
In C:
#include \u003ciostream\u003e void MyFunction() { std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; } int main() { MyFunction(); MyFunction(); MyFunction(); } is equivalent to:
#include \u003ciostream\u003e int main() { std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; std::cout \u003c\u003c "Hello" \u003c\u003c std::endl; } You might also notice that main() is, in itself, a function.
And the reason it is the entry point is that external code is calling that function.
Just replacing one line isn’t much.
However, you might also notice that print() is a function too.
Functions everywhere!!!
And as you can imagine, the code ran once we call “print()” isn’t small… and we wouldn’t want to replace it everytime.
Making a function makes it easy to do whatever we want as many times as we want in an easy way.
Actually, functions are the most important thing in programming.
They are the reason people can code things really fast.
They are also the basis of code architecture, which is something we will talk in a future chapter.
Exercise (1): Using a function, write a code that prints 5 times: “I” “am” “trying” “not” “to” “repeat” “my” “code” “too “many” “times”
Functions with arguments Sometimes, we do not want functions to do exactly the same thing every time we call them.
This is the case for print(); we want to print different things each time we call it.
We might want to use a variable.
With functions, there are special ways to declare variables, and they are called arguments.
#include \u003ciostream\u003e void MyFunction(int myVariable) { std::cout \u003c\u003c myVariable \u003c\u003c std::endl; } int main() { int number = 3; MyFunction(number); } We can put variables in the parenthesis!
And this is exactly what we are already doing with print()!
In this case, it is equivalent the following code:
#include \u003ciostream\u003e void MyFunction(int myVariable) { std::cout \u003c\u003c myVariable \u003c\u003c std::endl; } int main() { int number = 3; int myVariable = number; std::cout \u003c\u003c myVariable \u003c\u003c std::endl; } We can also send multiple parameters:
#include \u003ciostream\u003e void Add(int myVariable1, int myVariable2) { std::cout \u003c\u003c myVariable1 + myVariable2 \u003c\u003c std::endl; } int main() { Add(2,4); } Exercises (2): Exercise 1 In C++:
Write a function named “PrintUwU()” that prints “uwu”.
Try calling it to see if it works.
int main() { PrintUwU(); PrintUwU(); } would print:
uwu uwu Exercise 2 In Python:
Write a function named “PrintInUwULanguage()”.
This function takes a string as a parameter, displays that string, and prints “uwu” next.
PrintInUwULanguage("Hello") PrintInUwULanguage("How are you?") should print:
Hello uwu How are you? uwu Exercise 3 In Python or C++:
Make a function named “AddDigitToRight()”.
This function takes a number and a digit.
It then prints the number with the digit on the right.
AddDigitToRight(16, 7) AddDigitToRight(124, 2) should print:
167 126 Functions with return values In most cases, we do not want the function to just print something.
Sometime, we want it to compute something instead, and to give us the result.
Exactly like a mathematical function.
f(x, y) = x + 2*y
is a mathematical function that takes 2 numbers as arguments, and returns a number.\\
\\ In programming, we can do the same thing.
To do that, we use the “return” keyword.
def Foo(): return 3 a = Foo() print(a) Python abstracts types; but in other languages, the type is defined next to the function.
C++:
\`\`\`cpp // here, int is the return type int Foo(): return 3; int main() { int a = Foo() std::cout \u003c\u003c a \u003c\u003c std::endl; } Also, the function ends the moment “return” is called.\\
int Foo(): int b = 5; return b; // The following code will NEVER execute. b = 3; return b; As you noticed, for the return type, we replaced “void”.
“void” means there is nothing to return.
However, even in a void function, we can use the return function to put an end to that function.
Exercises (3): Make a function named “AddDigitToRight()”.
It takes a number and a digit as arguments.
Instead of printing the result, it now returns it instead.
b = AddDigitToRight(484, 1) b = AddDigitToRight(56, 8) print(b) should print:
568 `,description:"",tags:null,title:"Functions",uri:"/basics/functions/index.html"},{content:` Lesson As users, we are not making a program.
For the program to behave differently, depending on the user, specific functions exist.
At first, users only had a terminal.
Messages were displayed there, and to navigate through it, they entered special words or numbers as inputs.
Reading from a terminal is an easy way to get an input.
The same as print(), every language has a way to read the input of the user from a terminal.
Example:
myInput = input() print("The input is:") print(myInput) In python, if the input should be a number, you have to make it explicit:
myInput = int(input()) print("The input is:") print(myInput) // C++ #include \u003ciostream\u003e int main() { int myInput; std::cin \u003e\u003e myInput; } Exercises Exercise 1 Ask the user a number as an input.
Print that number multiplied by 2.
Exercise 2 Ask the user a number as an input.
Display “Negative” if the number is negative, “Positive” otherwise.
`,description:"",tags:null,title:"Inputs",uri:"/basics/inputs/index.html"},{content:` Lesson A “scope” is what defines the lifetime of a variable.
Let’s take a function as an example.
def Bar(): i = 5 print(i) This program will not work, because the variable i is defined in the function scope, and is not available elsewhere.\\
In Python, scopes are defined as indentations.
Every time a new scope is created, we had a space before each line.
Instructions in the same scope should all be aligned together.
They are also preceded by “:”.
In other languages, indentation and spaces are ignored.
This is similar to the Execution Order chapter.
Scopes are defined with brackets.
The instructions of a given scope are surrounded by { and }.
void Bar() { // scope begins int i = 5; } // scope ends Even if indentation is not forced, it is a good practice to do it for readability.
You will see in the following chapters that scopes can be used for other things than functions.
`,description:"",tags:null,title:"Scopes",uri:"/basics/scopes/index.html"},{content:` If / Else As the name states, in your code, you can put conditions.
An obvious way to use those is when putting passwords.
codeUser = int(input()) if (codeUser == 398471): # if the code is equal to 398471 print("The money is under the red flower in the garden.") else: print("You little thief! Don't try to steal my money!") No matter the language, we usually use the if / else keywords.
// C++ #include \u003ciostream\u003e int main() { int codeUser; std::cin \u003c\u003c codeUser \u003c\u003c endl; // Exactly the same syntax in C, C#, Java... if (codeUser == 398471) // if the code is equal to 398471 { std::cout \u003c\u003c "The money is under the red flower in the garden." \u003c\u003c std::endl; } else: { std::cout \u003c\u003c "You little thief! Don't try to steal my money!" \u003c\u003c std::endl; } } As you can see, if and else directives also force us to make a new scope.
Boolean operators To make conditions easier, boolean operators exist.\\
# Python # These operators are the same for C, C++, C#, Java... everywhere number = 4 if (number == 4): print("The number is equal to 4") if (number != 4): print("The number is not equal to 4") if (number \u003c 4): print("The number is less than 4") if (number \u003e 4): print("The number is higher than 4") // These operators are the same for C, C++, C#, Java... everywhere except Python #include \u003ciostream\u003e int main() { bool condition = True bool otherCondition = False if (condition) { print("condition is True") } if (not(condition)) { print("condition is False") } if (condition and otherCondition) { print("Both condition and otherCondition are True") } if (condition or otherCondition) { print("atleast condition or otherCondition is true (both can be true)") } } # Python only condition = True otherCondition = False if (condition): print("condition is True") if (not(condition)): print("condition is False") if (condition and otherCondition): print("Both condition and otherCondition are True") if (condition or otherCondition): print("atleast condition or otherCondition is true (both can be true)") Exercises Exercise 1 Asks the user a number as an input.
Print “The answer to life, the universe, and everything” only if this input is 42.
If it is not, print “I don’t like you :(”.
Exercise 2 Asks the user three numbers as inputs.
If the first number is higher than the second but less than the third, print “Good choice.”.
Else, print “Not a good choice.”
`,description:"",tags:null,title:"Conditions",uri:"/basics/conditions/index.html"},{content:` Introduction Sometimes, we want to have a lot of variables.
For example, we might want to have a list of the names of those attending to a certain party.
The problem is, if it is a lot, we won’t make a variable for each one of those.
Especially if that number depends on an input; in that case, it is impossible.
This is the problem lists and arrays can solve.
Warning: The first element usually has the index 0, the second one the 1st index, etc.
This is not the case for every language, but in most of them it is.
Fixed size arrays In C or C++, the size of a basic array can’t be changed.
// Same in C or C++ int main() { int myArray[5] = [11,22,55,44,33]; // we make a list of 5 elements myArray[0] = -11; // we replace 11, the element at the index 0, by -11 int aNumber = myArray[3]; // we get the 4th element, 44. } Dynamics arrays Sometimes, we want the size of our list to vary.
We want to add elements, remove elements, etc.
In Python:
myList = [1,2,5,3] myList.append(10) # we add 10 at the end of the list print(myList[4]) # we display 10 In other languages (C++, C#, Java), dynamic arrays exist as special types.
Arrays are a part of containers.
A lot of containers exist, for different reasons.
However, it is a complex topic and will be discussed elsewhere.
In C, dynamic arrays are tightly linked to memory and dynamic allocation.
It is a complex topic, and will be seen in a future chapter.
Exercises Exercise 1 Ask the user 3 numbers as inputs.
Ask the user a number i, between 0 and 2.
Print the ith nummber the user sent as an input.
Exercise 2 Make an array with the elements [2,1,9].
Display the last element.
Exercise 3 Make an array with the elements [2,1,9].
Then, replace the 2nd element with 10.
Then, print the sum of these elements.
`,description:"",tags:null,title:"Lists",uri:"/basics/lists/index.html"},{content:` Introduction “Print all the numbers from 0 to 1000”.
If we only code with what we’ve seen until now, we would have to to write around 1000 lines for that (or 30 if you’re really smart).
However, loops exist to make our life easier.
Different kinds of loops exist.
While While loops are the easiest to understand.
While the condition is true, we run the code that is inside the next scope.
Once it is false, we continue to run the code that is past the scope.
# python i = 0 while (i \u003c 1000): print(i) i = i + 1 // C++ #include \u003ciostream\u003e int main() { int i = 0 // Exactly the same syntax in C, C#, Java... while (i \u003c 1000) { std::cout \u003c\u003c i \u003c\u003c std::endl; i = i + 1; } } This is an easy way to count from 0 to 100.
While loops are actually the most importants, because you can do what other kinds of loops do with these.
Even if you don’t learn other loops, learn this one.
Exercises (1) Exercise 1 Make a program that prints numbers from 100 to 0 (in a reverse order).
Exercise 2 Make a program that asks the user to enter a number, until this number is 5.
Once the user enters 5 as an input, the program prints “GG” and ends.
Exercise 3 Make a program that:
Ask the user to enter a number Displays all numbers from 0 to 100 that is not the number the user entered Only use 1 loop maximum.
For For loops are an easier way to loop through a number to another.
An example, to count from 0 to 100:
// C++ #include \u003ciostream\u003e int main() { // Exactly the same syntax in C, C#, Java... for (int i = 0; i \u003c 100; i=i+1) { std::cout \u003c\u003c i \u003c\u003c std::endl; } } As we can see, we retrieve:
The variable we initialize The condition of the while The modification of that variable In Python, it is a bit more implicit:
# counts numbers from 0 to 100 for i in range(0, 100, 1): print(i) # counts numbers from 0 to 100 for i in range(0, 100): print(i) # counts numbers from 0 to 100 for i in range(100): print(i) Exercises (2) Exercise 1 Make a program that prints numbers from 50 to 100, with a step of 2.
Exercise 1 Ask the user to enter a number n.
Ask the user to enter n numbers.
Print all of these numbers.
For each For each loops are useful to loop through containers, like lists.\\
myList = [1,9,48,12,47,3] # Displays all the elements in the list for myElement in myList: print(myList) The variable is, instead of an index, an element of the array.
// C++ #include \u003ciostream\u003e int main() { int myList[] = [1,9,48,12,47,3]; // Exactly the same syntax in C, C#, Java... for (int myElement : myList) { std::cout \u003c\u003c myElement \u003c\u003c std::endl; } } Exercises (3) Exercise 1 Ask the user to enter numbers, until they enter 0.
After that, display all the numbers he entered as inputs.
Exercise 2 Ask the user to enter numbers, until they enter 0.
After that, display the numbers he entered as inputs only if they are positive.
`,description:"",tags:null,title:"Loops",uri:"/basics/loops/index.html"},{content:" Classes ",description:"",tags:null,title:"Classes",uri:"/basics/classes/index.html"},{content:` References in Object Oriented Programming languages In Python, C#, Java, and other languages, references are implicit.
class MyClass: a = 4 b = 2 myInstance = MyClass() myReference = myInstance class MyClass { public int a; public int b; }; class Foo { static void main(string[] args) { MyClass myInstance = new MyClass(); myReference = myInstance; } }; In C++, you have to put the \u0026 character just after the type.\\
class MyClass { public: int a; int b; }; int main() { MyClass myInstance = MyClass(); MyClass\u0026 myReference = myInstance; } `,description:"",tags:null,title:"References",uri:"/basics/references/index.html"},{content:"",description:"",tags:null,title:"Categories",uri:"/categories/index.html"},{content:"",description:"",tags:null,title:"Tags",uri:"/tags/index.html"}]