struct App {
}

struct Config[T] {
	val T
}

fn pre_start[T, R](app T, config R) string {
	return start(app, config.val)
}

fn start[T, R](app T, otherthing R) R {
	println(otherthing)
	return otherthing
}

fn test_main() {
	app := App{}
	testval := 'hello'
	config := Config[string]{
		val: testval
	}
	assert pre_start(app, config) == 'hello'
}
