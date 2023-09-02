const process = require('process')
const args = process.argv.slice(2)
const util = require('util')
const dump = util.inspect
const fs = require('fs')
const lexer = require('./ast-lexer-parser')
const { tokens } = require('./token_table')


function CodeGen(input, output, mode='normal') {
    let codegen = input
    for (var i = 0; i < codegen?.length; i++) {
        if (codegen[i].type == 'initialize_program') {
            let module_name = codegen[i].name
            fs.writeFileSync(output, 'module '+module_name+'\n')
        }

        else if (codegen[i].type == 'enum_def') {
            fs.appendFileSync(output, 'struct '+codegen[i].name+' ')
        }
        
        else if (codegen[i].type == 'enum_value') {
            codegen[i].typed = codegen[i].typed.replaceAll('float32', 'f32')
            codegen[i].typed = codegen[i].typed.replaceAll('float64', 'f64')

            codegen[i].typed = codegen[i].typed.replaceAll('float32[]', '[]f32')
            codegen[i].typed = codegen[i].typed.replaceAll('float64[]', '[]f64')

            codegen[i].typed = codegen[i].typed.replaceAll('int[]', '[]int')
            codegen[i].typed = codegen[i].typed.replaceAll('i8[]', '[]i8')
            codegen[i].typed = codegen[i].typed.replaceAll('i16[]', '[]i16')
            codegen[i].typed = codegen[i].typed.replaceAll('i64[]', '[]i64')
            codegen[i].typed = codegen[i].typed.replaceAll('i128[]', '[]i128')

            codegen[i].typed = codegen[i].typed.replaceAll('u32[]', '[]u32')
            codegen[i].typed = codegen[i].typed.replaceAll('u8[]', '[]u8')
            codegen[i].typed = codegen[i].typed.replaceAll('u16[]', '[]u16')
            codegen[i].typed = codegen[i].typed.replaceAll('u64[]', '[]u64')
            codegen[i].typed = codegen[i].typed.replaceAll('u128[]', '[]u128')

            codegen[i].typed = codegen[i].typed.replaceAll('usize[]', '[]usize')
            codegen[i].typed = codegen[i].typed.replaceAll('isize[]', '[]isize')

            codegen[i].typed = codegen[i].typed.replaceAll('string[]', '[]string')
            codegen[i].typed = codegen[i].typed.replaceAll('bool[]', '[]bool')


            fs.appendFileSync(output, codegen[i].name+' '+codegen[i].typed+'\n')
        }

        else if (codegen[i].type == 'open_block') {
            fs.appendFileSync(output, '{\n')
        }
        else if (codegen[i].type == 'end_block') {
            fs.appendFileSync(output, '}\n')
        }


        else if (codegen[i].type == 'variable_assignment') { 
            let value = codegen[i].data.value
            value = value.replaceAll("System.in", 'os.input') 
            value = value.replaceAll("System.in.password", 'os.input_password')

            if (codegen[i].data.value == tokens.null_value) {
                //fs.appendFileSync(output,'// mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
            } else {
                fs.appendFileSync(output,'mut '+codegen[i].data.varname+' := '+value+'\n')
                //if (codegen[i].data.error_name != undefined) {
                    //fs.appendFileSync(output, `if ${codegen[i].data.error_name} != nil { log.Fatal(${codegen[i].data.error_name}) }\n`)
                //}
            }
        }
        else if (codegen[i].type == 'constant_assignment') {
            let value = codegen[i].data.value
            value = value.replaceAll("System.in", 'os.input') 
            value = value.replaceAll("System.in.password", 'os.input_password')

            if (codegen[i].data.value == tokens.null_value) {
                //fs.appendFileSync(output,'// mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
            } else {
                fs.appendFileSync(output,codegen[i].data.varname+' := '+value+'\n')
                //if (codegen[i].data.error_name != undefined) {
                    //fs.appendFileSync(output, `if ${codegen[i].data.error_name} != nil { log.Fatal(${codegen[i].data.error_name}) }\n`)
                //}
            }
        }
        else if (codegen[i].type == 'object_assignment') {
            fs.appendFileSync(output,codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
        }
        else if (codegen[i].type == 'mutable_object_assignment') {
            fs.appendFileSync(output,'mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
        }
        else if (codegen[i].type == 'variable_reassignment') {
            fs.appendFileSync(output, codegen[i].data.varname+' = '+codegen[i].data.value+'\n')
        }


        else if (codegen[i].type == 'array_assignment') {
            fs.appendFileSync(output, 'mut '+codegen[i].data.varname+' := '+'['+codegen[i].data.value.slice(1,-1)+']\n')
        }
        else if (codegen[i].type == 'array_reassignment') {
            fs.appendFileSync(output, 'mut '+codegen[i].data.varname+' = '+codegen[i].data.sizeof+codegen[i].data.vartype+'['+codegen[i].data.value.slice(1,-1)+']\n')
        }


        else if (codegen[i].type == 'package_importing') {
            fs.appendFileSync(output, `import ${codegen[i].data.path}\n`)
        }
        else if (codegen[i].type == 'package_including') {
            fs.appendFileSync(output, fs.readFileSync(codegen[i].data.path, 'utf8'))
        }


        else if (codegen[i].type == 'function_definition') {
            // VISIBILITY MODIFIER
            if (codegen[i].data.modifier == tokens.public_modifier) { codegen[i].data.modifier = 'pub'+' ' }
            if (codegen[i].data.modifier == tokens.private_modifier) { codegen[i].data.modifier = '' }

            codegen[i].data.args = codegen[i].data.args.replaceAll(":", ' ')

            // RETURN TYPE
            if (codegen[i].data.state_type == tokens.void_value) { codegen[i].data.state_type = '' }
            if (codegen[i].data.state_type == tokens.float32_value) { codegen[i].data.state_type = 'f32' }
            if (codegen[i].data.state_type == tokens.float64_value) { codegen[i].data.state_type = 'f64' }

            // ARGS DATATYPES
            codegen[i].data.args = codegen[i].data.args.replaceAll(tokens.float32_value, 'f32')
            codegen[i].data.args = codegen[i].data.args.replaceAll(tokens.float64_value, 'f64')
            

            fs.appendFileSync(output, codegen[i].data.modifier+'fn '+codegen[i].data.funcname+codegen[i].data.args+' '+codegen[i].data.state_type+'\n')
        }
        else if (codegen[i].type == 'function_call') {
            let funcname = codegen[i].data.funcname
            funcname = funcname.replaceAll('System.out.println','println')
            funcname = funcname.replaceAll('System.out.print','print')
            
            //codegen[i].data.args = codegen[i].data.args.replace(/let /g,'')
            fs.appendFileSync(output, funcname+codegen[i].data.args+'\n')
        }
        else if (codegen[i].type == 'return_value') {
            fs.appendFileSync(output, codegen[i].data.value+'\n')
        }


        else if (codegen[i].type == 'conditional_if') {
            fs.appendFileSync(output, 'if '+codegen[i].data.expression)
        }
        else if (codegen[i].type == 'conditional_elsif') {
            fs.appendFileSync(output, 'else if '+codegen[i].data.expression)
        }
        else if (codegen[i].type == 'conditional_final') {
            fs.appendFileSync(output, 'else')
        }


        else if (codegen[i].type == 'loop_while') {
            fs.appendFileSync(output, 'for '+codegen[i].data.expression)
        }
        else if (codegen[i].type == 'loop_for') {
            fs.appendFileSync(output, `for mut ${codegen[i].data.iterator} in ${codegen[i].data.iterand} `)
        }
        else if (codegen[i].type == 'loop_times') {
            fs.appendFileSync(output, `for mut ${codegen[i].data.iterator} in 0..${codegen[i].data.maximum_value} `)
        }


        else if (codegen[i].type == 'break_loop') {
            fs.appendFileSync(output, 'break'+'\n')
        }
        else if (codegen[i].type == 'continue_loop') {
            fs.appendFileSync(output, 'continue'+'\n')
        }

        //console.log("DEBUGGING: "+dump(codegen[i]))
    }
    if (mode == 'debugging') {
        console.log(codegen)
    }
    
    
}

module.exports = { CodeGen }
