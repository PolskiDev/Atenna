let tokens = {
    package_init: "package",
    public_modifier: "public",
    private_modifier: "private",
    class: "class",
    open_block: "{",
    end_block: "}",
    commentary: "#",
    variable_assignment: "=",
    arrow_pointer: '->',
    array_symbol: "[]",
    package_importing: "import",
    function_definition: "function",
    return_value: "return",
    conditional_if: "if",
    conditional_elsif: "elseif",
    conditional_final: "else",
    loop_while: "while",
    loop_for: "for",
    for_in_keyword: "in",
    times: "times",
    break_loop: "break",
    continue_loop: "continue",
    enum_def: "enum",
    enum_value: "def",
    const_dt: "const",
    let_dt: "let",
    new_kw: "new",

    null_value: "null",
    void_value: "void",
    float32_value: "float32",
    float64_value: "float64"
}


module.exports = { tokens }