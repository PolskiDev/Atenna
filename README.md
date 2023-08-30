# Atenna Programming Language
### Developed by Gabriel Margarido - Version 0.1
A compiled, multiplatform, statically, structured and strong-typed programming language with a Java-like syntax with a bit of Javascript semantics. That ables you to code instantly fast programs and execute them on LLVM (low-level virtual machine).

<img src="assets/atenna-full.png" width="350px"><br>

Atenna source-files extensions are: `*.atenna` or `*.atn` 

**Note: "sudo" is required**  
Compile & Install AtennaC and VSCode extension from sources using: `make`  
Uninstall AtennaC and VSCode extension with: `make uninstall`

### Basic program structure
```
package org.gabrielmargarido.main
# import os

private void function main() {
    System.out.println("Hello world")
}
```

### Creating functions and returning values
```
package org.gabrielmargarido.main
# import os

public int function calculate(x int, y int) {
    return x+y
}

private void function main() {
    let r = calculate(5, 20)
    System.out.println("Result: "+r)
}
```

### Importing modules
```
import os
import db.mysql
```

### Single-line Comments
```
# There is a comment here
```  

### Primitive types

Integer 8-bit: `i8`  
Integer 16-bit: `i16`  
Integer 32-bit: `int`  
Integer 64-bit: `i64`  

Unsigned integer 8-bit: `u8`  
Unsigned integer 16-bit: `u16`  
Unsigned integer 32-bit: `u32`  
Unsigned integer 64-bit: `u64`  

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

for i in (numbers) {
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

**Input & Output:**
*`import os`*  is required for `System.in` method.  
```
package org.gabrielmargarido.main
import os

private void function main() {
    let answer = System.in("What is your name? ")
    System.out.println("Hello, ${answer}")
}
```

**CLI Args:**
*`import os`*  is required for CLI Args. 
```
package org.gabrielmargarido.main
import os

private void function main() {
    let args = os.args

    for i in (args) {
        System.out.println("Argument: ${args[i]}")
    }
}
```