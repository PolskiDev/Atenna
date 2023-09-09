# Atenna Programming Language
### Developed by Gabriel Margarido - Version 0.3.2
A compiled, multiplatform, statically, structured and strongly-typed programming language with a Java-like syntax and a bit of Javascript semantics. That ables you to code instantly fast programs and execute them on LLVM (low-level virtual machine) or inside the web browser.


Atenna.js only supports basic libraries, it means that you can use all Javascript functions or modules inside your code. However, Standard Atenna module libraries aren't supported.  

It's main focus is on web development using Atenna Programming Language.

[See Atenna.js - Run Atenna on the Web](JS.md)  
[See Atenna WASM - Run Atenna on WebAssembly](wasm/README.md)  

<img src="assets/atenna.png" width="150px"><br>

Atenna source-files extensions are: `*.atenna` or `*.atn` 


# Standard Atenna
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

## Install AtennaC and Extension Support on Microsoft VSCode
<img src="assets/vscode.png" width="130px">

**Note: "sudo" is required**  
Compile & Install AtennaC and Microsoft VSCode extension from sources using:  
```
make install-atenna install-vscode-support VSCODE_EXT=.vscode
```   

Uninstall AtennaC and Microsoft VSCode extension with:  
```
make uninstall-atenna uninstall-vscode-support VSCODE_EXT=.vscode
```  

## Install AtennaC and Extension Support on VSCodium (VSCode OSS)
<img src="assets/vscodium.png" width="130px">

**Note: "sudo" is required**   
Compile & Install AtennaC and VSCodium extension from sources using:  
```
make install-atenna install-vscode-support VSCODE_EXT=.vscode-oss
```


Uninstall AtennaC and VSCode extension with:  
```
make uninstall-atenna uninstall-vscode-support VSCODE_EXT=.vscode-oss
```  

## Install AtennaC WebAssembly Support
<img src="assets/wasm.png" width="120px"><br>

```
cd wasm && ./configure && make universal test SUDO=sudo
```  

## Fixing cache errors on compilation target on Microsoft VSCode
<img src="assets/vscode.png" width="100px">

**Note: "sudo" is required**   
Reset AtennaC target and VSCode caches using:  
```
make reset-cache VSCODE_EXT=.vscode
```  

## Fixing cache errors on compilation target on VSCodium
<img src="assets/vscodium.png" width="100px">

**Note: "sudo" is required**   
Reset AtennaC target and VSCodium caches using:  
```
make reset-cache VSCODE_EXT=.vscode-oss
```  


## AtennaC - Atenna Compiler
### Folder Data
V Middle-end cache folder on UNIX: `/opt/atenna-cache`  
AtennaC libraries folder on UNIX: `/usr/local/bin/atenna-libs`


### Compile programs on AtennaC
Help manpage: `sudo atennac --help`  
Compile to binary: `sudo atennac <file>.atn -o <file>`  
Compile to library module: `sudo atennac <file>.atn -lib-module <file>`
    
View AST - Abstract Syntax Tree: `sudo atennac <file>.atn -ast`  

### Basic program structure
```
package main
# import os

private void function main() {
    System.out.println("Hello world")
}
```

### Creating functions and returning values
```
package main
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
All comments inside source-code should be placed alone on a separate line.

```
# There is a comment here
```  

### Creating modules and importing them
**mymodule.atenna**
```
package mymodule

public void function say_hello(person string) {
    System.out.println("Hello ${person}!")
}
```
*Compile with: `sudo atennac mymodule.atenna -lib-module mymodule`*  
It's going to create a folder named `mymodule` with `mymodule.v` library file inside it.
  

**main.atenna**
```
package main
import mymodule

private void function main() {
    mymodule.say_hello("John Backus")
}
```
*Compile with: `sudo atennac main.atenna -o main`*  
It's going to compile to an executable `main` file with `mymodule` module included.  

Run `main` executable program with `./main`


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
package main
import os

private void function main() {
    let answer = System.in("What is your name? ")
    System.out.println("Hello, ${answer}")
}
```

**Password Input**
*`import os`*  is required for `System.in.password` method.  
```
package main
import os

private void function main() {
    let password = System.in.password("What is your password? ")
    System.out.println("Your password is: ${password}")
}
```

**CLI Args:**
*`import os`*  is required for CLI Args. 
```
package main
import os

private void function main() {
    let args = os.args.clone()

    for i in (args) {
        System.out.println("Argument: ${args[i]}")
    }
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

let gabriel = new Person(18, "Gabriel", "Margarido")
```


### Enums - Immutable
```
enum Person {
    def age int
    def height float64
    def name string
    def surname string
}

const gabriel = new Person(18, "Gabriel", "Margarido")
```


## JSON Encode - `json.encode`
**Requires: `import os` and `import json`**
```
enum Person {
    def name string
    def surname string
    def age int
}
const aline = new &Person("Aline", "Kocher", 23)
const x = json.encode(aline)
os.write_file("aline.json", x)!
```

## JSON Decode - `json.decode`
**Requires: `import os` and `import json`**
```
enum Person {
    def name string
    def surname string
    def age int
}
const y = os.read_file("aline.json")!
let aline_from_json = json.decode(Person, y)
```

### Access decoded JSON properties
```
System.out.println("Aline first name: "+aline_from_json.name)
System.out.println("Aline surname: "+aline_from_json.surname)
System.out.println("Aline age: "+aline_from_json.age)

System.out.println("Aline: "+aline_from_json)
```


# String Handling
### String Handling - Split beginning by each uppercase/capital letter [A-Z] - `str.split_capital(string)`
```
package main
# import os

private void function main() {
    let str = "SarahSheevaAlanKay"
    let result = strings.split_capital(str)

    for i in (str) {
        System.out.println(str[i])
    }
    
}  
```

### Get string length - `str.len`
```
package main
# import os

private void function main() {
    let str = "SarahSheevaAlanKay"
    let length = str.len

    System.out.println(length)
}  
```

### Replace one string by another - `str.replace`
```
package main
# import os

private void function main() {
    let str = "Hello world"
    let next = str.replace("Hello", "Bye")

    System.out.println(next)
}  
```

### Split string - `str.split`
```
package main
# import os

private void function main() {
    let str = "Hello world"
    let splitted = str.split(" ")

    System.out.println(splitted)
}  
```

### Extract substring - `str.substr`
```
package main
# import os

private void function main() {
    let str = "Hello world"
    let substring = str.substr(4,-2)

    System.out.println(substring)
}  
```

### String contains another - `str.contains`
```
package main
# import os

private void function main() {
    let str = "Hello world"
    let another = str.contains("world")

    System.out.println(another)
}  
```

### String to lowercase - `str.to_lower`
```
package main
# import os

private void function main() {
    let str = "HELLO WORLD"
    System.out.println(str.to_lower())
}  
```

### String to uppercase - `str.to_upper`
```
package main
# import os

private void function main() {
    let str = "hello world"
    System.out.println(str.to_upper())
}  
```

### Find string between delimiters - `str.find_between`
```
package main
# import os

private void function main() {
    let str = "hello world to [you and all people]"
    let x = str.find_between("[", "]")
    
    System.out.println(x)
}  
```


# File System Library
### Verify if file or directory exists - `os.exists`
```
package main
import os

private void function main() {
    if (os.exists("test.txt")) {
        System.out.println("Yes, it exists")
    }
}  
```

### Verify if file or directory exists in $PATH - `os.exists_in_system_path`
```
package main
import os

private void function main() {
    if (os.exists_in_system_path("test.txt")) {
        System.out.println("Yes, it exists in PATH")
    }
}  
```

### Change file or folder permissions (Octal) - `os.chmod`
```
package main
import os

private void function main() {
    let perm = 0o600
    os.chmod("test.txt", perm)
}  
```

### Change file or folder group - `os.chown(file, owner, group)`
```
package main
import os

private void function main() {
    let owner = "gabrielmargarido"
    let group = "staff"
    os.chown("test.txt", owner, group)
}  
```

### Copy folder or directory - `os.cp(origin, destination)`
```
package main
import os

private void function main() {
    os.cp("test.txt", "copied_test.txt")
}  
```

### Copy folder or directory (Recursively) - `os.cp_all(origin, destination, overwrite)`
```
package main
import os

private void function main() {
    os.cp_all("test.txt", "copied_test.txt", true)
}  
```

### Run Shell Comamnd (get output) - `os.execute(command)`
```
package main
import os

private void function main() {
    # Run command
    os.execute("ls -lha")

    # Get return output from command
    let x = os.execute("ls")
}  
```

### Run Shell Comamnd (get code) - `os.system(command)`
```
package main
import os

private void function main() {
    # Run command
    os.system("ls -lha")

    # Get return code from command
    let x = os.system("ls")
}  
```

### Get extension from file - `os.file_ext(filename)`
```
package main
import os

private void function main() {
    let ext = os.file_ext("file.c")
    System.out.println(ext)
}  
```

### Get name of file from path - `os.file_name(filename)`
```
package main
import os

private void function main() {
    let fname = os.file_name("file.c")
    System.out.println(fname)
}  
```

### Get file size - `os.file_size(filename)`
```
package main
import os

private void function main() {
    let fsize = os.file_size("file.c")
    System.out.println(fsize)
}  
```

### Get full path of executable file - `os.find_abs_path_of_executable(filename)`
```
package main
import os

private void function main() {
    let full = os.find_abs_path_of_executable("file.c")
    System.out.println(full)
}  
```

### Get current directory full path - `os.getwd()`
```
package main
import os

private void function main() {
    let cwd = os.getwd()
    System.out.println(cwd)
}  
```

### Get name of /home/... ($HOME) - `os.home_dir()`
```
package main
import os

private void function main() {
    let home = os.home_dir()
    System.out.println(home)
}  
```

### Is directory empty? - `os.is_dir_empty(path)`
```
package main
import os

private void function main() {
    let dir = os.is_dir_empty("myfolder/images")
    System.out.println(dir)
}  
```

### Is executable - `os.is_executable(path)`
```
package main
import os

private void function main() {
    let exec = os.is_executable("app.exe")
    System.out.println(exec)
}  
```

### Is a file - `os.is_file(path)`
```
package main
import os

private void function main() {
    let isfile = os.is_file("app.exe")
    System.out.println(isfile)
}  
```

### Is a symlink - `os.is_link(path)`
```
package main
import os

private void function main() {
    let islink = os.is_link("htdocs")
    System.out.println(islink)
}  
```

### Create symlink - `os.link(origin, target)`
```
package main
import os

private void function main() {
    os.link("~/Documents", "~/Desktop/MyDoc")
}  
```

### Create folder - `os.mkdir(path)`
```
package main
import os

private void function main() {
    os.mkdir("myfolder")
}  
```

### Move folder - `os.mv(origin, target)`
```
package main
import os

private void function main() {
    os.mv("myfolder", "youfolder")
}  
```

### Remove folder - `os.rmdir(path)`
```
package main
import os

private void function main() {
    os.rmdir("myfolder")
}  
```

### Remove file - `os.rm(path)`
```
package main
import os

private void function main() {
    os.rm("myfile")
}  
```


# Write & Read Files
### Write/Overwrite - `os.write_file!`
```
package main
import os

private void function main() {
    os.write_file("MyFile.txt", "Hello World!\n")!
}  
```

### Read - `os.read_file!`
```
package main
import os

private void function main() {
    let filereader = os.read_file("MyFile.txt")!
    System.out.println(filereader)
}  
```

### Readlines - `os.read_lines!`
```
package main
import os

private void function main() {
    let filereader = os.read_lines("MyFile.txt")!

    for line in (filereader) {
       System.out.println(filereader[line]) 
    }
}  
```

### Append - `Mix`
```
package main
import os

private void function main() {
    # Read all temporary
    let read = os.read_file("MyFile.txt")
    let writable_message = "Plus a message\n"

    # Write all - append
    os.write_file(read+writable_message)
}  
```

# Operating System Library
### Get Uname - `os.uname()`
```
package main
import os

private void function main() {
    let uname = os.uname()
    System.out.println(uname)
}  
```

### Get OS Name - `os.user_os()`
```
package main
import os

private void function main() {
    let UserOS = os.user_os()
    System.out.println(UserOS)
}  
```

### Get all usernames in OS - `os.user_names()`
```
package main
import os

private void function main() {
    let usernames = os.user_names()

    for i in (usernames) {
        System.out.println(usernames[i])
    }
    
}  
```

## MySQL Database Access
### Import MySQL module:  
```
import db.mysql
```  

### Open connection:
```
const mysql_db = new mysql.Connection(username: "root", dbname: "db_users", password: "123")
mysql_db.connect()?
```  

### Close connection:
```
mysql_db.close()
```

### Change selected database:
```
mysql_db.select_db('db_users')?
```


### Do a query:  
```
const query = mysql_db.query("SELECT * FROM users")?
```


### SQL `SELECT` query handling
```
let m = query.maps()
for element in (m) {
    System.out.println(element['property'])
}
```

### Free used RAM memory on query
```
query.free()
```

## Cryptography
### SHA512
**Requires: `import crypto.sha512`**
```
const out_hash = sha512.hexhash("Hello world")
System.out.println(out_hash)
```

### SHA256
**Requires: `import crypto.sha256`**
```
const out_hash = sha256.hexhash("Hello world")
System.out.println(out_hash)
```

### SHA1
**Requires: `import crypto.sha1`**
```
const out_hash = sha1.hexhash("Hello world")
System.out.println(out_hash)
```

### MD5
**Requires: `import crypto.md5`**
```
const out_hash = md5.hexhash("Hello world")
System.out.println(out_hash)
```


## Mathematics - `import math`
### [>> See Advanced Mathematics documentation](MATH.md)

### It converts from radians to degrees.
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.degrees(a)
    
    System.out.println("Result: ${x}")
}  

```

### It converts from degrees to radians.
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.radians(a)
    
    System.out.println("Result: ${x}")
}  

```


### It returns the nearest integer, rounding half away from zero.
*special cases are: round(±0) = ±0 round(±inf) = ±inf round(nan) = nan*

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.round(a)
    
    System.out.println("Result: ${x}")
}  

```

### It returns the rounded float, with sig_digits of precision.
*special cases are: round(±0) = ±0 round(±inf) = ±inf round(nan) = nan*

```
package main
import math

private void function main() {
    const a = 78.90302
    const max_dig = 3
    const x = math.round(a, max_dig)
    
    System.out.println("Result: ${x}")
}  

```

### It returns the rounded float, with sig_digits of precision.
*special cases are: round_to_even(±0) = ±0 round_to_even(±inf) = ±inf round_to_even(nan) = nan*

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.round_to_even(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates sine in radians (float32)
*special cases are: tanh(±0) = ±0 tanh(±inf) = ±1 tanh(nan) = nan*

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.sinf(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates hyperbolic sine.

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.sinh(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates square root of given float number.

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.sqrt(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates square-root of the provided value. (float32)

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.sqrtf(a)
    
    System.out.println("Result: ${x}")
}  

```


### It calculates the integer square-root of the provided value. (i64)

```
package main
import math

private void function main() {
    const a = 40
    const x = math.sqrti(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates tangent of a number

```
package main
import math

private void function main() {
    const a = 40.506
    const x = math.tan(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates tangent (float32)

```
package main
import math

private void function main() {
    const a = 40.506
    const x = math.tanf(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates the hyperbolic tangent of x.

```
package main
import math

private void function main() {
    const a = 40.506
    const x = math.tanh(a)
    
    System.out.println("Result: ${x}")
}  

```



### It calculates the factorial of the provided value.

```
package main
import math

private void function main() {
    const n = 90
    const x = math.factorial(n)
    
    System.out.println("${x}")
}  

```


### It returns 1 for n <= 0 and -1 if the result is too large for a 64 bit integer

```
package main
import math

private void function main() {
    const n = 90
    const x = math.factoriali(n)
    
    System.out.println("${x}")
}  

```

### It returns the greatest integer value less than or equal to x.
*special cases are: floor(±0) = ±0 floor(±inf) = ±inf floor(nan) = nan*

```
package main
import math

private void function main() {
    const n = 90.55606
    const x = math.floor(n)
    
    System.out.println("${x}")
}  

```


### It returns the floating-point remainder of number / denom (rounded towards zero)

```
package main
import math

private void function main() {
    const a = 90.55606
    const b = 24.567
    const x = math.fmod(a, b)
    
    System.out.println("${x}")
}  

```

### It calculates greatest common (positive) divisor (or zero if a and b are both zero).

```
package main
import math

private void function main() {
    const a = 78
    const b = 106
    const x = math.gcd(a, b)
    
    System.out.println("${x}")
}  

```


### It returns high part of the word of y.
```
package main
import math

private void function main() {
    const y = 556.7234
    const x = math.get_high_word(y)
    
    System.out.println("${x}")
}  

```


### It returns the hypotenuse of the triangle give two sides. (Pythagora's theorem)

```
package main
import math

private void function main() {
    const y = 50
    const z = 70
    const x = math.hypot(y, z)
    
    System.out.println("${x}")
}  

```


### It returns the logarithm of y
*Method : 1. Argument Reduction: find k and f such that x = 2^k * (1+f), where sqrt(2)/2 < 1+f < sqrt(2) .

Approximation of log(1+f).
Let s = f/(2+f) ; based on log(1+f) = log(1+s) - log(1-s) = 2s + 2/3 s3 + 2/5 s5 + ....., = 2s + sR We use a special Remez algorithm on [0,0.1716] to generate a polynomial of degree 14 to approximate R The maximum error of this polynomial approximation is bounded by 2**-58.45. In other words, 2 4 6 8 10 12 14 R(z) ~ Lg1s +Lg2s +Lg3s +Lg4s +Lg5s +Lg6s +Lg7s (the values of Lg1 to Lg7 are listed in the program) and | 2 14 | -58.45 | Lg1s +...+Lg7s - R(z) | <= 2 | | Note that 2s = f - sf = f - hfsq + shfsq, where hfsq = ff/2.
In order to guarantee error in log below 1ulp, we compute log by log(1+f) = f - s(f - R) (if f is not too large) log(1+f) = f - (hfsq - s*(hfsq+R)). (better accuracy)

Finally, log(x) = kln2 + log(1+f).
= kln2_hi+(f-(hfsq-(s*(hfsq+R)+kln2_lo))) Here ln2 is split into two floating point number: ln2_hi + ln2_lo, where nln2_hi is always exact for |n| < 2000.
Special cases: log(x) is NaN with signal if x < 0 (including -inf) ; log(+inf) is +inf; log(0) is -inf with signal; log(NaN) is that NaN with no signal.

Accuracy: according to an error analysis, the error is always less than 1 ulp (unit in the last place).*
```
package main
import math

private void function main() {
    const y = 50.67
    const x = math.log(y)
    
    System.out.println("${x}")
}  

```


### It returns the decimal logarithm of x.
*The special cases are the same as for log.*

```
package main
import math

private void function main() {
    const y = 50.5685
    const x = math.log10(y)
    
    System.out.println("${x}")
}  

```

### It returns log(1+y)

```
package main
import math

private void function main() {
    const y = 50.5685
    const x = math.log1p(y)
    
    System.out.println("${x}")
}  

```

### It returns the binary logarithm of x.
*The special cases are the same as for log.*

```
package main
import math

private void function main() {
    const y = 50.5685
    const x = math.log2(y)
    
    System.out.println("${x}")
}  

```

### It calculates the log-factorial of the provided value.

```
package main
import math

private void function main() {
    const y = 50.5685
    const x = math.log_factorial(y)
    
    System.out.println("${x}")
}  

```

### It returns the natural logarithm and sign (-1 or +1) of Gamma(x).
*special ifs are: log_gamma(+inf) = +inf log_gamma(0) = +inf log_gamma(-integer) = +inf log_gamma(-inf) = -inf log_gamma(nan) = nan*

```
package main
import math

private void function main() {
    const y = 50.5685
    const x = math.log_gamma(y)
    
    System.out.println("${x}")
}  

```

### It returns log base z of y

```
package main
import math

private void function main() {
    const z = 10
    const y = 50.5685
    const x = math.log_n(z, y)
    
    System.out.println("${x}")
}  

```