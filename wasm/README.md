# Atenna WASM - AtennaC for WebAssembly
### Developed by Gabriel Margarido - Version 0.3.2
<img src="../assets/wasm.png" width="150px">

Compile Atenna sources to run on the web with and HTTP Server with Atenna WASM using Atenna.js as a complement as well, or on Node.js using pure Atenna WASM. It's a strongly and static typed programming language, that generates a WebAssemly Bytecode binary format to run WASM Virtual Machine, it can be also used for excessive CPU bounding tasks.

[Return to Homepage](../README.md)  
  

Run WebAssembly HTTP Server: `npm start` or `npx serve .`  
Compile mannually all sources to WebAssembly: `npm run asbuild`   

## Package organization
**All Atenna WASM files for the Web: `web/*`**  
- HTML file: `web/index.html`  
- Atenna.js file: `web/wasm.atn`  

**All Atenna WASM files for Node.js: `.`**
- Atenna.js for Node file: `main.atn`

**All WebAssembly files for building: `src/*`**
- Atenna WASM file: `index.atn`

### Compile programs on AtennaC WASM
Help manpage: `sudo atennac --help`  
Compile to binary: `sudo atennac <file>.atn -wasm <file>`  
Compile to library module: `sudo atennac <project_name> -new-wasm`
    
View AST - Abstract Syntax Tree: `sudo atennac <file>.atn -ast-wasm`  

### Compile targets with Makefile
Compile for Node.js, Web and WebAssembly: `make all`  
Compile for Node.js and WebAssebmly: `make nodejs`  
Compile for Web and WebAssembly: `make web`  


### Basic program structure
```
package wasm

public void function main() {
    System.out.println("Hello world")
}
```

### Creating functions and returning values
```
package wasm

public int function calculate(x: int, y: int) {
    return x+y
}

public void function main() {
    string r = calculate(5, 20).toString()
    System.out.println("Result: "+r)
}
```

### Single-line Comments
All comments inside source-code should be placed alone on a separate line.
```
# There is a comment here
```


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
int x = 3
float32 y = 3.45
string z = "Hello world"
bool a = true

x = 4
y = 4.56
z = "Bye world"
a = false
```

**Strongly-typed declaration error**
```
x = 45.64       # This is gonna cause an error
z = 42          # This is gonna cause an error
a = 56          # This is gonna cause an error
```

## Typecasting
**From `string` to `int`**
```
string x = "103"
int y = x as i32
```

**From `int` to `string`**
```
int x = 103
int y = x.toString()
```

**From `string` to `float`**
```
string x = "103.58"
int y = x as f32
```

**From `float` to `string`**
```
float32 x = 103.58
string y = x.toString()
```


## Function Declaration
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
int max = 2


# Conditionals
if (max > 5) {

} else {

}
```

```
# Variable declaration
int min = 7
int max = 45


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

**Making a for using while**
```
int c = 0

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