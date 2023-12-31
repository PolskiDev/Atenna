function testConcrete<T, U = i32>(a: T): U {
  return a;
}

function testDerived<T, U = T>(a: T): U {
  return a;
}

testConcrete<i32>(1);
testDerived<i32>(2);

class TestConcrete<T, U = i32> {
  test<V = i32>(a: T, b: U): V {
    return a + b;
  }
}

class TestDerived<T, U = T> {
  test<V = U>(a: T, b: U): V {
    return a + b;
  }
}

var tConcrete = new TestConcrete<i32>();
tConcrete.test<i32>(1, 2);
var tDerived = new TestDerived<f64>();
tDerived.test<f64>(1, 2);

class TestMethodDerived<T> {
  test<U = T[]>(): void {
    assert(idof<U>() == idof<T[]>());
  }
}
class TestMethodDerived2<T> {
  foo(v: TestMethodDerived<string>): void {
    v.test();
  }
}

var tMethodDerived = new TestMethodDerived<string>();
tMethodDerived.test();
var tMethodDerived2 = new TestMethodDerived2<f64>();
tMethodDerived2.foo(tMethodDerived);
