## Advanced Mathematics - `import math`
### A and B are equal (A == B)
```
package main
import math


private void function main() {
    const a = 45
    const b = 43 + 2

    const x = math.alike(a, b)
    System.out.println("A and B are equal? ${x}")
}  

```

### Calculates the difference between two angles with values in radians (Rad)
```
package main
import math


private void function main() {
    const a_rad = 1.563
    const b_rad = 2.7085

    const x = math.angle_diff(a, b)
    System.out.println("Result: ${x}")
}  

```


### Calculates an approximation of sin(a) made using lolremez
```
package main
import math

private void function main() {
    const a = 1.563
    const a_sin = math.sin(a)

    const x = math.aprox_cos(a_sin)
    System.out.println("Result: ${x}")
}  

```

### Calculates an approximation of cos(a) made using lolremez
```
package main
import math

private void function main() {
    const a = 1.563
    const a_cos = math.cos(a)

    const x = math.aprox_cos(a_cos)
    System.out.println("Result: ${x}")
}  

```


### Calculates the arcsine, in radians, of x.
*Special cases are: asin(±0) = ±0 asin(x) = nan if x < -1 or x > 1*
```
package main
import math

private void function main() {
    const a_rad = 1.563

    const x = math.asin(a_rad)
    System.out.println("Result: ${x}")
}  

```

### Calculates the area hyperbolic sine of x
```
package main
import math

private void function main() {
    const a = 4
    const x = math.asinh(a)
    System.out.println("Result: ${x}")
}  

```

### Calculates the arctangent, in radians, of x.
```
package main
import math

private void function main() {
    const a_rad = 4
    const x = math.atan(a_rad)
    System.out.println("Result: ${x}")
}  

```

### Calculates the arc tangent of y/x, using the signs of the two to determine the quadrant of the return value.

*Special cases are (in order): atan2(y, nan) = nan atan2(nan, x) = nan atan2(+0, x>=0) = +0 atan2(-0, x>=0) = -0 atan2(+0, x<=-0) = +pi atan2(-0, x<=-0) = -pi atan2(y>0, 0) = +pi/2.0 atan2(y<0, 0) = -pi/2.0 atan2(+inf, +inf) = +pi/4 atan2(-inf, +inf) = -pi/4 atan2(+inf, -inf) = 3pi/4 atan2(-inf, -inf) = -3pi/4 atan2(y, +inf) = 0 atan2(y>0, -inf) = +pi atan2(y<0, -inf) = -pi atan2(+inf, x) = +pi/2.0 atan2(-inf, x) = -pi/2.0*  
```
package main
import math

private void function main() {
    const a_rad = 4
    const x = math.atan2(a_rad)
    System.out.println("Result: ${x}")
}  

```

### Calculates the area hyperbolic tangent of x
```
package main
import math

private void function main() {
    const a = 4
    const x = math.atanh(a)
    System.out.println("Result: ${x}")
}  

```

### Calculates the cube root of a.
*special cases are: cbrt(±0) = ±0 cbrt(±inf) = ±inf cbrt(nan) = nan*  
```
package main
import math

private void function main() {
    const a_rad = 4
    const x = math.cbrt(a_rad)
    System.out.println("Result: ${x}")
}  

```

### Calculates the least integer value greater than or equal to x.
*special cases are: ceil(±0) = ±0 ceil(±inf) = ±inf ceil(nan) = nan*  
```
package main
import math

private void function main() {
    const a = 4.568898
    const x = math.ceil(a)
    System.out.println("Result: ${x}")
}  

```

### Calculates x constrained between a and b
```
package main
import math

private void function main() {
    const z = 2
    const a = 4.568898
    const b = 78.90302

    const x = math.clamp(z, a, b)
    System.out.println("Result: ${x}")
}  

```


### It checks if a and b are within 1e-14 of each other
```
package main
import math

private void function main() {
    const a = 4.568898
    const b = 78.90302

    const x = math.close(a, b)
    System.out.println("Result: ${x}")
}  

```


### It calculates a value with the magnitude of x and the sign of y
```
package main
import math

private void function main() {
    const a = 4.568898
    const b = 78.90302

    const x = math.copysign(a, b)
    System.out.println("Result: ${x}")
}  

```

### It calculates the cosine of the angle in radians
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.cos(a)

    System.out.println("Result: ${x}")
}  

```

### It calculates cosine in radians (float32)
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.cosf(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates the hyperbolic cosine of x in radians
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.cosh(a)
    
    System.out.println("Result: ${x}")
}  

```

### It calculates cotangent of a number
```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.cost(a)
    
    System.out.println("Result: ${x}")
}  

```

### It counts the number of digits in the number passed.
```
package main
import math

private void function main() {
    const a = 101204908704587321
    const x = math.count_digits(a)
    
    System.out.println("Result: ${x}")
}  

```

### It generates the error function of x.
*special cases are: erf(+inf) = 1 erf(-inf) = -1 erf(nan) = nan*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.erf(a)
    
    System.out.println("${x}")
}  

```

### It generates the complementary error function of x.
*special cases are: erfc(+inf) = 0 erfc(-inf) = 2 erfc(nan) = nan*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.erfc(a)
    
    System.out.println("${x}")
}  

```

### It returns e**x, the base-e exponential of x.
*special cases are: exp(+inf) = +inf exp(nan) = nan Very large values overflow to 0 or +inf.
Very small values underflow to 1.*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.exp(a)
    
    System.out.println("${x}")
}  

```

### It returns 2**x, the base-2 exponential of x.
*special cases are: exp(+inf) = +inf exp(nan) = nan Very large values overflow to 0 or +inf.
Very small values underflow to 1.*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.exp2(a)
    
    System.out.println("${x}")
}  

```

### It calculates e**x - 1
*special cases are: expm1(+inf) = +inf expm1(-inf) = -1 expm1(nan) = nan*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.expm1(a)
    
    System.out.println("${x}")
}  

```

### It returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position.
*f32_bits(f32_from_bits(x)) == x.*  

```
package main
import math

private void function main() {
    const a = 78.90302
    const x = math.f32_bits(a)
    
    System.out.println("${x}")
}  

```

### It returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position.
*f32_from_bits(f32_bits(x)) == x.*  

```
package main
import math

private void function main() {
    const a = 78
    const x = math.f32_from_bits(a)
    
    System.out.println("${x}")
}  

```

### It returns the IEEE 754 binary representation of f, with the sign bit of f and the result in the same bit position, and f64_bits(f64_from_bits(x)) == x.

```
package main
import math

private void function main() {
    const a = 78.6787
    const x = math.f64_bits(a)
    
    System.out.println("${x}")
}  

```


### It returns the floating-point number corresponding to the IEEE 754 binary representation b, with the sign bit of b and the result in the same bit position.
*f64_from_bits(f64_bits(x)) == x.*

```
package main
import math

private void function main() {
    const a = 78
    const x = math.f64_from_bits(a)
    
    System.out.println("${x}")
}  

```

### It returns the gamma function of x.

```
package main
import math

private void function main() {
    const a = 78.6789
    const x = math.gamma(a)
    
    System.out.println("${x}")
}  

```

### It returns the binary exponent of x as an integer.
*special cases are: ilog_b(±inf) = max_i32 ilog_b(0) = min_i32 ilog_b(nan) = max_i32*

```
package main
import math

private void function main() {
    const a = 78
    const x = math.ilog_b(a)
    
    System.out.println("${x}")
}  

```