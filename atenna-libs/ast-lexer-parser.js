#!/usr/local/bin/node



/*
 * WARNING!
 * AST: This program translates sources to AST.
 * Gabriel Margarido - BSD 2-clause license
 */
const fs = require('fs')
const process = require('process')
const util = require('util')
const dump = util.inspect
const token_table = require('./token_table')



/* Generate AST from text source-file */
let var_collection = []
let typedef_colection = []
let func_collection = [ // Put all custom functions here, first!
    'escreval','escreva','entrada','leia'
]
let import_collection = []
let linecounter = 0     // Used for error handling!


function GenerateAST(input) {
    let regex = /[A-Za-z0-9_$++::\{\}.,@*#?>\-:=]+|"[^"]+"|'[^']+'|\([^)]*\)|\[[^\]]*\]|\/[^)/]*\/|(:)|(=)/g
    let source = fs.readFileSync(input,'utf8')
    let json = []


    source.split(/\r?\n/).forEach(line =>  {
        linecounter = linecounter +1
        let stack = line.match(regex)

        /**
         * @error  stack.lenght
         * @fix    stack?.length
         */
        //console.log("Lines:")
        //console.log(" ->"+stack+" ")

        for (let i = 0; i < stack?.length; i++) {
            //process.stdout.write("Token: ["+stack[i]+"] ~ ")
            if (stack[i] == token_table.tokens.package_init
                && line.includes(token_table.tokens.commentary) == false) {
                if (stack[i+1] == undefined) {
                    console.log("Syntax Error: Package name was not defined - line error: "+linecounter)
                } else {
                    let data = {
                        token: token_table.tokens.package_init,
                        name: stack[i+1],
                        type: 'initialize_program',
                    }
                    json.push(data);
                }

            }
            if (stack[i] == token_table.tokens.package_definition
                && line.includes(token_table.tokens.commentary) == false) {
                if (stack[i+1] == undefined) {
                    console.log("Erro de sintaxe: O nome do pacote nao foi definido - erro na linha:"+linecounter)
                } else {
                    
                    let data = {
                        token: token_table.tokens.package_definition,
                        name: stack[i+1].replace(/principal/g,'main'),
                        type: 'package_definition'
                    }
                    json.push(data);
                }

            }

            // End block
            else if (stack[i] == token_table.tokens.end_block
                && line.includes(token_table.tokens.commentary) == false) {
                let data = {
                    token: token_table.tokens.end_block,
                    type: 'end_block'
                }
                json.push(data);
                
            }
            else if (stack[i] == token_table.tokens.open_block
                && line.includes(token_table.tokens.commentary) == false) {
                let data = {
                    token: token_table.tokens.open_block,
                    type: 'open_block'
                }
                json.push(data);
            }

            // Comentarios
            else if (stack[i] == token_table.tokens.commentary
                && line.includes(token_table.tokens.commentary)) {
                let data = {
                    token: token_table.tokens.commentary,
                    type: 'commentary',
                    commentary: line.trim().slice(2)
                }
                json.push(data);
            }
                

            // Declaração de variaveis e vetores
            else if (stack[i] == token_table.tokens.variable_assignment
                && line.includes(token_table.tokens.commentary) == false) {
                let vartype = stack[i-2]
                let varname = stack[i-1]
                let value = line.slice(line.indexOf('=')+2)

                // Assignment
                if (vartype) {
                    /* vartype = vartype.replace(token_table.tokens.typedef_integer, 'int')
                    vartype = vartype.replace(token_table.tokens.typedef_integer8, 'int8')
                    vartype = vartype.replace(token_table.tokens.typedef_integer16, 'int16')
                    vartype = vartype.replace(token_table.tokens.typedef_integer32, 'int32')
                    vartype = vartype.replace(token_table.tokens.typedef_integer64, 'int64')
    
                    vartype = vartype.replace(token_table.tokens.typedef_float, 'float32')
                    vartype = vartype.replace(token_table.tokens.typedef_float64, 'float64')
    
                    vartype = vartype.replace(token_table.tokens.typedef_string, 'string')
                    vartype = vartype.replace(token_table.tokens.typedef_boolean, 'bool') */
                    
                    if (var_collection.includes(varname)) {
                        console.log("Semantic Error: Variable or Array ("+varname+") was already declared - line error: "+linecounter)
                        break
                    } else {
                        // Searching for errors
                        if (vartype == token_table.tokens.typedef_integer && isNaN(value) == true) {
                            console.log("Semantic Error: Variable ("+varname+") has incompatible datatypes (Integer to Non-numeric) - line of error: "+linecounter)
                            break
                        } else if (vartype == token_table.tokens.typedef_float && isNaN(value) == true) {
                            console.log("Semantic Error: Variable ("+varname+") has incompatible datatypes (Float to Non-numeric) - line of error: "+linecounter)
                            break
                        } else if (vartype == token_table.tokens.typedef_string && typeof value != 'string') {
                            console.log("Semantic Error: Variable ("+varname+") has incompatible datatypes (String to Non-string) - line of error: "+linecounter)
                            break
                        
                            // If everything is Ok, then generate AST.
                        } else {
                            if (varname.includes(token_table.tokens.array_symbol)) {
                                /** Array Declaration */
                                vartype = stack[i-3]
                                varname = stack[i-2]
                                let data = {
                                    token: token_table.tokens.variable_assignment,
                                    type: 'array_assignment',
                                    data: {
                                        vartype: vartype,
                                        varname: varname,
                                        value: value.slice(1,-1)
                                    }
                                }
                                json.push(data);
                                var_collection.push(varname)
                                typedef_colection.push(vartype)
        
        
                            } else {
                                /** Variable Declaration */
                                value = value.replaceAll("System.in", 'os.input') 
                                value = value.replaceAll("System.in.password", 'os.input_password') 



                                let data = {
                                    token: token_table.tokens.variable_assignment,
                                    type: 'variable_assignment',
                                    data: {
                                        vartype: vartype,
                                        varname: varname,
                                        value: value,
                                    }
                                }
                                json.push(data);
                                var_collection.push(varname)
                                typedef_colection.push(vartype)
                            }
                        }
                    }

                    
                    
                // Reassignment
                } else {
                    //if (var_collection.includes(varname)) {
                        if (varname.includes(token_table.tokens.array_symbol)) {
                            let data = {
                                token: token_table.tokens.variable_assignment,
                                type: 'array_reassignment',
                                data: {
                                    varname: varname.slice(0,
                                        varname.indexOf(token_table.tokens.array_symbol.slice(0,1))
                                    ),
                                    value: value
                                }
                            }
                            json.push(data);
                        } else {
                            let data = {
                                token: token_table.tokens.variable_assignment,
                                type: 'variable_reassignment',
                                data: {
                                    varname: varname,
                                    value: value
                                }
                            }
                            json.push(data);
                        }
                    //} else {
                        //console.log("Semantic Error: Trying to access variable or array ("+varname+") before it's declaration - line of error: "+linecounter)
                    //}
                }
            }

            else if (stack[i] == token_table.tokens.package_importing
                && line.includes(token_table.tokens.commentary) == false) {
                let path = stack[i+1]
                let cpath = stack[i+1].slice(1,-1)
                let alias

                // Setting alias
                if (path.includes('/')) {
                    alias = path.slice(path.lastIndexOf('/')+1,-1)
                } else {
                    alias = path.slice(1,-1)
                }

                // Doing the work
                if (import_collection.includes(path)) {
                    console.log("Semantic Error: Package ("+path+") was already imported - line of error: "+linecounter)
                    break
                } else {
                    let data = {
                        token: token_table.tokens.package_importing,
                        type: 'package_importing',
                        data: {
                            path: path,
                            alias: alias,
                            cpath: cpath
                        }
                    }
                    json.push(data);
                    import_collection.push(path)
                }
            }

            else if (stack[i] == token_table.tokens.package_including
                && line.includes(token_table.tokens.commentary) == false) {
                let path = stack[i+1].slice(1,-1)

                // Doing the work
                if (import_collection.includes(path)) {
                    console.log("Semantic Error: Module ("+path+") was already imported - line of error: "+linecounter)
                    break
                } else {
                    // GLOBAL MODULES - UNSED BEGIN
                    /*if (fs.existsSync(token_table.tokens.power_modules+'/'+path+'.go')) {
                        path = token_table.tokens.power_modules+'/'+path+'.go'
                        let data = {
                            token: token_table.tokens.package_importing,
                            type: 'package_including',
                            data: {
                                path: path
                            }
                        }
                        json.push(data);

                    }*/
                    // GLOBAL MODULES - UNSED END


                    if (fs.existsSync(token_table.tokens.local_modules+'/'+path+'/'+token_table.tokens.init_module)) {
                        path = token_table.tokens.local_modules+'/'+path+'/'+token_table.tokens.init_module
                        let data = {
                            token: token_table.tokens.package_including,
                            type: 'package_including',
                            data: {
                                path: path
                            }
                        }
                        json.push(data);
                        
                    } else if (fs.existsSync(path)) {
                        let data = {
                            token: token_table.tokens.package_including,
                            type: 'package_including',
                            data: {
                                path: path
                            }
                        }
                        json.push(data);

                    } else {
                        console.log("Syntax Error: File ("+path+") or ("+token_table.tokens.local_modules+'/'+path+'/'+token_table.tokens.init_module+") does not exist on current directory (...)")
                        break
                    }
                }
            }

            else if (stack[i] == token_table.tokens.function_definition
                && line.includes(token_table.tokens.commentary) == false) {
                
                let modifier = stack[i-2]
                let dtype = stack[i-1]
                let funcname = stack[i+1]
                let args = stack[i+2]
                let opening_block = stack[i+3]

                if (func_collection.includes(funcname)) {
                    console.log("Semantic Error: Function ("+funcname+") was alredy declared!")
                    break
                } else {
                    args = args.replace(/:/g, '')

                    if (opening_block == token_table.tokens.open_block) {
                        let data = {
                            token: token_table.tokens.function_definition,
                            type: 'function_definition',
                            data: {
                                modifier: modifier,
                                funcname: funcname,
                                args: args,
                                state_type: dtype
                            }
                        }
                        json.push(data);
                        func_collection.push(funcname)
                    } else {
                        console.log("Syntax Error: Open block of code on function ("+funcname+") - line of error: "+linecounter)
                        break
                    }

                }

            }

            /** Function Return */
            else if (stack[i] == token_table.tokens.return_value
                && line.includes(token_table.tokens.commentary) == false) {
                //let value = line.trim().slice(line.indexOf(/\s+/), line.length)
                let value = line.trim().replace(token_table.tokens.return_value,'return')

                if (var_collection.includes(value)
                || func_collection.includes(value)
                || Number(value) || String(value)) {
                    // It's a variable, function, number or string
                    let data = {
                        token: token_table.tokens.return_value,
                        type: 'return_value',
                        data: {
                            value: value
                        }
                    }
                    json.push(data);

                } else {
                    console.log("Semantic Error: Trying to access undefined or unknown ("+value+") - line of error: "+linecounter)
                    break
                }

            }


            /* Function call based on parenthesis
            <function> <identifier><params>
            != <identifier><params> */
            else if (stack[i].slice(0,1) == '('
            && stack[i-1].match(/[A-Za-z0-9]/)
            && stack[i-2] == undefined
            && stack[i+1] != token_table.tokens.open_block
                && line.includes(token_table.tokens.commentary) == false) {

                let funcname = stack[i-1]
                //let args = stack[i]   // Old args

                /**
                 * Now multiple parenthesis are supported!
                 */
                let args = line.trim().slice(stack[i-1].length)
                //if (func_collection.includes(funcname)) {

                    funcname = funcname.replaceAll("System.out.println", 'println')
                    funcname = funcname.replaceAll("System.out.print", 'print')

                    let data = {
                        token: '<function_call>',
                        type: 'function_call',
                        data: {
                            funcname: funcname,
                            args: args
                        }
                    }
                    json.push(data);
                /*} else {
                    console.log("Semantic-Error: Trying to access ("+funcname+") before it's declaration at line:"+linecounter)
                    break
                }*/
                
            }


            // Condicionais
            else if (stack[i] == token_table.tokens.conditional_if
            && line.includes(token_table.tokens.commentary) == false) {
                let expression = line.slice(line.indexOf(token_table.tokens.conditional_if)+token_table.tokens.conditional_if.length, line.lastIndexOf(token_table.tokens.open_block)).slice(2,-2)
                let opening_block = stack[i+2]

                if (opening_block == token_table.tokens.open_block) {
                    let data = {
                        token: token_table.tokens.conditional_if,
                        type: 'conditional_if',
                        data: {
                            expression: expression
                        }
                    }
                    json.push(data);
                } else {
                    console.log("Syntax Error: Open block of code on conditional [if] "+expression+" - line error: "+linecounter)
                    break
                }
                
            }

            else if(stack[i] == token_table.tokens.conditional_elsif
            && line.includes(token_table.tokens.commentary) == false) {
                let expression = line.slice(line.indexOf(token_table.tokens.conditional_elsif)+token_table.tokens.conditional_elsif.length, line.lastIndexOf(token_table.tokens.open_block)).slice(2,-2)
                let opening_block = stack[i+2]


                if (opening_block == token_table.tokens.open_block) {
                    let data = {
                        token: token_table.tokens.conditional_if,
                        type: 'conditional_elsif',
                        data: {
                            expression: expression
                        }
                    }
                    json.push(data);
                } else {
                    console.log("Syntax Error: Open block of code on conditional [elseif] "+expression+" - line error: "+linecounter)
                    break
                }
            }
            else if (stack[i] == token_table.tokens.conditional_final
            && line.includes(token_table.tokens.commentary) == false) {
                let data = {
                    token: token_table.tokens.conditional_final,
                    type: 'conditional_final'
                }
                json.push(data);

            }
            else if (stack[i] == token_table.tokens.loop_while
            && line.includes(token_table.tokens.commentary) == false) {
                let expression = line.slice(line.indexOf(token_table.tokens.loop_while)+token_table.tokens.loop_while.length, line.lastIndexOf(token_table.tokens.open_block)).slice(2,-2)
                let opening_block = stack[i+2]

                if (opening_block != token_table.tokens.open_block) {
                    console.log("Syntax Error: Open block of code on while loop "+expression+" - line error: "+linecounter)
                    break
                } else {
                    let data = {
                        token: token_table.tokens.loop_while,
                        type: 'loop_while',
                        data: {
                            expression: expression
                        }
                    }
                    json.push(data);
                    
                }
            }
            else if (stack[i] == token_table.tokens.times
            && line.includes(token_table.tokens.commentary) == false) {
                let iterator = 'i'
                let Max = stack[i-1]
                let opening_block = stack[i+1]

                if (opening_block != token_table.tokens.open_block) {
                    console.log("Syntax Error: Open block of code on times loop ( "+Max+"vezes) - line error: "+linecounter)
                    break
                } else {
                    let data = {
                        token: token_table.tokens.times,
                        type: 'loop_times',
                        data: {
                            iterator: iterator,
                            maximum_value: Max
                        }
                    }
                    json.push(data);
                }
                
            }
            else if (stack[i] == token_table.tokens.loop_for
            && line.includes(token_table.tokens.commentary) == false) {
                let iterator = stack[i+1]
                let iterand = stack[i+3].slice(1,-1)

                if (stack[i+2] != token_table.tokens.for_in_keyword) {
                    console.log("Syntax Error: Expected '"+token_table.tokens.for_in_keyword+"' after '"+token_table.tokens.loop_for+"' and before '"+iterand+"' on line: "+linecounter)
                    break
                } else {
                    let data = {
                        token: token_table.tokens.loop_for,
                        type: 'loop_for',
                        data: {
                            iterator: iterator,
                            iterand: iterand
                        }
                    }
                    json.push(data);
                }
                
            }

            //Interromper ciclos
            else if (stack[i] == token_table.tokens.break_loop
            && line.includes(token_table.tokens.commentary) == false) {
                let data = {
                    token: token_table.tokens.break_loop,
                    type: 'break_loop'
                }
                json.push(data);
            }
            else if (stack[i] == token_table.tokens.continue_loop
            && line.includes(token_table.tokens.commentary) == false) {
                let data = {
                    token: token_table.tokens.continue_loop,
                    type: 'continue_loop'
                }
                json.push(data);
            }






            /*else {
                // Error handling
                if (stack[i] == /[A-Z][a-z][0-9]/) {
                    if (
                        stack[i-1] != /namespace|if|elsif|while/
                    ) {
                        console.log("1 Error unknown expression: "+stack[i])
                    } else {
                        return json
                    }
                }

            }*/




            
        }
    })
    return json
    //console.log(dump(json, {depth: null}))
    
}

module.exports = { GenerateAST, var_collection, func_collection, import_collection }