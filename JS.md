# Atenna Programming Language - Atenna.js
### Developed by Gabriel Margarido - Version 0.3.2

<img src="assets/68747470733a2f2f7261772e6769746875622e636f6d2f6a73636f6e662f6c6f676f2e6a732f6d61737465722f6a732e65752e706e67.png" width="150px"><br>

Atenna source-files extensions are: `*.atenna` or `*.atn`   
[Return to Homepage](README.md)  

## Install Git Bash (Windows)
<img src="assets/Bash_Logo_Colored.svg.png" width="130px">

Download for Windows: [Git Bash](https://git-scm.com/download/win)  
_It emulates a UNIX-like environment_

## XPG Remote Package Manager
**Install modules using Git Protocol:**
```
xpg install-module https://github.com/<username>/<module>.git
```

**Uninstall local modules:**
```
xpg uninstall-module <module>
```

**XPG Manpage/Help:**
```
xpg --help
```

### Include inside HTML 5 files
```
<script src="foo.js"></script>
```

### Include inside [HTML 6](http://html6.gabrielmargarido.org) files
```
@import type="javascript" url="foo.js"
```

### Compile programs on Atenna.js
Help manpage: `sudo atennac --help`  
Compile to Javascript file: `sudo atennac <file>.atn -web-js <file>`  
View JS AST - JAvascript Abstract Syntax Tree: `sudo atennac <file>.atn -ast-web-js`  


### Basic program structure
Your web application main file should be `main.atenna` or `main.atn` to work correctly.  

Compile it using:  `sudo atennac main.atn -web-js main`  
Then, import at the end of `body` with: `<script src="main.js"></script>`  

```
package main

private void function main() {
    System.out.println("Hello world")
}
```

### Creating functions and returning values
```
package main

public int function calculate(x: int, y: int) {
    return x+y
}

private void function main() {
    let r = calculate(5, 20)
    System.out.println("Result: "+r)
}
```

### Single-line Comments
```
# There is a comment here
```  

### Creating modules and importing them
**mymodule.atenna**
```
package say_hello

public void function say_hello(person: string) {
    System.out.println("Hello "+person+"!")
}
```
*Compile with: `sudo atennac mymodule.atenna -web-js mymodule`*  
It's going to create a file named `mymodule.js`.
  

**main.atenna**
```
package main

private void function main() {
    say_hello("John Backus")
}
```
*Compile with: `sudo atennac main.atenna -web-js main`*  
It's going to compile to a Javascript file `main.js`

Run `main` executable program with `node main.js` or import it inside a webpage


### Primitive types

Signed Integer 8-bit: `i8`  
Signed Integer 16-bit: `i16`  
Signed Integer 32-bit: `int`  
Signed Integer 64-bit: `i64`  

Unsigned integer 8-bit: `u8`  
Unsigned integer 16-bit: `u16`  
Unsigned integer 32-bit: `u32`  
Unsigned integer 64-bit: `u64` 

Unsigned integer CPU Architecture: `usize`  
Signed integer CPU Architecture: `isize`   

Unicode string: `rune`  
ASCII string: `string` 

Float 32-bit: `float32` or `f32`  
Float 64-bit: `float64` or `f64`  

Boolean: `bool`  
Void (don't return anything): `void` 


### Variables Initialization and Reassignment (type inference)
```
let x = 3
let x = 3.45
let x = "Hello world"
let x = true

x = 4
x = 4.56
x = "Bye world"
x = false
```

### Constants Initialization (type inference)
```
const x = 3
const x = 3.45
const x = "Hello world"
const x = true
```


### Arrays Initialization (type inference) - They cannot be reassigned
```
let x[] = (0, 2, 3, 8, 16, 32, 64, 128, 256, 512)
let x[] = (0.45, 2.36, 3.12, 8.07, 16.89, 32.04, 64.067, 128.456, 256.45, 512.028)

let x[] = ("Juliana Kay", "Will Nored", "Evelyn Spielberg")
let x[] = (true, false, true)
```

### Private functions
```
private void function my_func() {
        # TODO CODE HERE

}

private int function my_func() {
        # TODO CODE HERE
    
    return ...
}
private float32 function my_func() {
        # TODO CODE HERE - 32-bit FLOAT

    return ...
}
private float64 function my_func() {
        # TODO CODE HERE - 64-bit FLOAT

    return ...
}

private string function my_func() {
        # TODO CODE HERE - STRING

    return ...
}

private bool function my_func() {
        # TODO CODE HERE - BOOL

    return ...
}

```

### Public functions
```
public void function my_func() {
        # TODO CODE HERE

}

public int function my_func() {
        # TODO CODE HERE
    
    return ...
}
public float32 function my_func() {
        # TODO CODE HERE - 32-bit FLOAT

    return ...
}
public float64 function my_func() {
        # TODO CODE HERE - 64-bit FLOAT

    return ...
}

public string function my_func() {
        # TODO CODE HERE - STRING

    return ...
}

public bool function my_func() {
        # TODO CODE HERE - BOOL

    return ...
}

```


### If-Else-Elseif

```
# Variable declaration
let max = 2


# Conditionals
if (max > 5) {

} else {

}
```

```
# Variable declaration
let min = 7
let max = 45


# Conditionals
if (min < 3) {

} elseif (max > 5) {

} else {

}
```

### For/While

**From 0 to 5**
```
for i in (0..5) {
    System.out.println(i)
}
```

**Iterate over an array**
```
let numbers[] = (15, 20, 25, 30, 35, 40)

for i in (0..numbers.length) {
    System.out.println(i)
}
```

**Making a for using while**
```
let c = 0

while (c < 10) {
    System.out.println(c)
    c = c+1
}
```

**Infinity loop**
```
while (true) {
    # INFINITY LOOP
}
```


## Enums/Classes - `enum`
### Enums - Mutable
```
enum Person {
    def age int
    def height float64
    def name string
    def surname string
}

let gabriel = new Person(age: 18, height: 1.72 , name: "Gabriel", surname: "Margarido")
```


### Enums - Immutable
```
enum Person {
    def age int
    def height float64
    def name string
    def surname string
}

const gabriel = new Person(age: 18, height: 1.72 , name: "Gabriel", surname: "Margarido")
```

## Working with DOM - `window.document.*`
```
const element = window.document.getElementById("txt_box")
```

```
const element = window.document.getElementById("txt_box").value
```

```
const element = window.document.getElementsByClassName("lead")
const element = window.document.getElementsByClassName("lead")[2]
```

```
element.innerHTML = "Hello world"
element.innerText = "It goes on..."
element = "Changing something..."
```

## Event Functions - `@function`
```
private void function clicked() {
    System.out.println("You clicked me!")
}

@function clicked = window.document.getElementById("clk").onclick
```

### Syntax Structure
### Available events for event functions: `EVENT`
- When left clicked on element: `onclick`  
- When right clicked on element: `oncontextmenu`  
- Whne double clicked on element: `ondblclick`  
- When mouse pressed over an element: `ondblclick`  
- When pointer is moved onto an element: `onmouseenter`  
- When pointer is moved out an element: `onmouseleave`  
- When pointer is moving over an element: `onmousemove`  
- When mouse pointer moves out of an element: `onmouseout`  
- When mouse pointer is moved over an element: `onmouseover`  
- When mouse button is released over an element: `onmouseup`  

```
private void function FUNCTION_NAME() {

                ...

}

@function FUNCTION_NAME = window.document.getElementById(ELEMENT_ID).EVENT
```