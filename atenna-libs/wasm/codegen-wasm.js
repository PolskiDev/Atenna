const process = require('process')
const args = process.argv.slice(2)
const util = require('util')
const dump = util.inspect
const fs = require('fs')
const lexer = require('../ast-lexer-parser')
const { tokens } = require('../token_table')


function CodeGen(input, output, mode='normal') {
    let codegen = input
    for (var i = 0; i < codegen?.length; i++) {
        if (codegen[i].type == 'initialize_program') {
            let module_name = codegen[i].name
            //fs.writeFileSync(output, module_name+'();\n')
            fs.writeFileSync(output, '')
        }

        else if (codegen[i].type == 'open_block') {
            fs.appendFileSync(output, '{\n')
        }
        else if (codegen[i].type == 'end_block') {
            fs.appendFileSync(output, '}\n')
        }


        else if (codegen[i].type == 'variable_assignment') {
            // RETURN TYPE - FLOATS
            if (codegen[i].data.vartype == tokens.float32_value) { codegen[i].data.vartype = 'f32' }
            if (codegen[i].data.vartype == tokens.float64_value) { codegen[i].data.vartype = 'f64' }

            // RETURN TYPE - INTEGERS
            if (codegen[i].data.vartype == tokens.integer32_value) { codegen[i].data.vartype = 'i32' }
            if (codegen[i].data.vartype == tokens.integer64_value) { codegen[i].data.vartype = 'i64' }
            if (codegen[i].data.vartype == tokens.integer128_value) { codegen[i].data.vartype = 'i64' }
            if (codegen[i].data.vartype == tokens.integer8_value) { codegen[i].data.vartype = 'i8' }
            if (codegen[i].data.vartype == tokens.integer16_value) { codegen[i].data.vartype = 'i16' }

            if (codegen[i].data.vartype == tokens.unsigned_integer32_value) { codegen[i].data.vartype = 'u32' }
            if (codegen[i].data.vartype == tokens.unsigned_integer64_value) { codegen[i].data.vartype = 'u64' }
            if (codegen[i].data.vartype == tokens.unsigned_integer128_value) { codegen[i].data.vartype = 'u64' }
            if (codegen[i].data.vartype == tokens.unsigned_integer8_value) { codegen[i].data.vartype = 'u8' }
            if (codegen[i].data.vartype == tokens.unsigned_integer16_value) { codegen[i].data.vartype = 'u16' }

            if (codegen[i].data.vartype == tokens.integer_size_value) { codegen[i].data.vartype = 'i32' }
            if (codegen[i].data.vartype == tokens.unsigned_integer_size_value) { codegen[i].data.vartype = 'u32' }

            
            // RETURN TYPE - STRING AND BOOL
            if (codegen[i].data.vartype == tokens.string_value) { codegen[i].data.vartype = 'string' }
            if (codegen[i].data.vartype == tokens.rune_value) { codegen[i].data.vartype = 'string' }
            if (codegen[i].data.vartype == tokens.bool_value) { codegen[i].data.vartype = 'boolean' }


            if (codegen[i].data.value == tokens.null_value) {
                //fs.appendFileSync(output,'// mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
            } else {
                fs.appendFileSync(output,'let '+codegen[i].data.varname+': '+codegen[i].data.vartype+' = '+codegen[i].data.value+'\n')
                //if (codegen[i].data.error_name != undefined) {
                    //fs.appendFileSync(output, `if ${codegen[i].data.error_name} != nil { log.Fatal(${codegen[i].data.error_name}) }\n`)
                //}
            }
        }
        else if (codegen[i].type == 'constant_assignment') {
            // RETURN TYPE - FLOATS
            if (codegen[i].data.vartype == tokens.float32_value) { codegen[i].data.vartype = 'f32' }
            if (codegen[i].data.vartype == tokens.float64_value) { codegen[i].data.vartype = 'f64' }

            // RETURN TYPE - INTEGERS
            if (codegen[i].data.vartype == tokens.integer32_value) { codegen[i].data.vartype = 'i32' }
            if (codegen[i].data.vartype == tokens.integer64_value) { codegen[i].data.vartype = 'i64' }
            if (codegen[i].data.vartype == tokens.integer128_value) { codegen[i].data.vartype = 'i64' }
            if (codegen[i].data.vartype == tokens.integer8_value) { codegen[i].data.vartype = 'i8' }
            if (codegen[i].data.vartype == tokens.integer16_value) { codegen[i].data.vartype = 'i16' }

            if (codegen[i].data.vartype == tokens.unsigned_integer32_value) { codegen[i].data.vartype = 'u32' }
            if (codegen[i].data.vartype == tokens.unsigned_integer64_value) { codegen[i].data.vartype = 'u64' }
            if (codegen[i].data.vartype == tokens.unsigned_integer128_value) { codegen[i].data.vartype = 'u64' }
            if (codegen[i].data.vartype == tokens.unsigned_integer8_value) { codegen[i].data.vartype = 'u8' }
            if (codegen[i].data.vartype == tokens.unsigned_integer16_value) { codegen[i].data.vartype = 'u16' }

            if (codegen[i].data.vartype == tokens.integer_size_value) { codegen[i].data.vartype = 'i32' }
            if (codegen[i].data.vartype == tokens.unsigned_integer_size_value) { codegen[i].data.vartype = 'u32' }

            
            // RETURN TYPE - STRING AND BOOL
            if (codegen[i].data.vartype == tokens.string_value) { codegen[i].data.vartype = 'string' }
            if (codegen[i].data.vartype == tokens.rune_value) { codegen[i].data.vartype = 'string' }
            if (codegen[i].data.vartype == tokens.bool_value) { codegen[i].data.vartype = 'boolean' }


            if (codegen[i].data.value == tokens.null_value) {
                //fs.appendFileSync(output,'// mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
            } else {
                fs.appendFileSync(output,'const '+codegen[i].data.varname+': '+codegen[i].data.vartype+' = '+codegen[i].data.value+'\n')
                //if (codegen[i].data.error_name != undefined) {
                    //fs.appendFileSync(output, `if ${codegen[i].data.error_name} != nil { log.Fatal(${codegen[i].data.error_name}) }\n`)
                //}
            }
        }
        else if (codegen[i].type == 'variable_reassignment') {
            fs.appendFileSync(output, codegen[i].data.varname+' = '+codegen[i].data.value+'\n')
        }


        else if (codegen[i].type == 'array_assignment') {
            fs.appendFileSync(output, 'let '+codegen[i].data.varname+': '+codegen[i].data.vartype+' = '+'['+codegen[i].data.value.slice(1,-1)+']\n')
        }
        /*else if (codegen[i].type == 'array_reassignment') {
            fs.appendFileSync(output, codegen[i].data.varname+' = '+codegen[i].data.sizeof+codegen[i].data.vartype+'['+codegen[i].data.value.slice(1,-1)+']\n')
        }*/


        else if (codegen[i].type == 'package_importing') {
            /* Node.js */
            fs.appendFileSync(output, `import * as ${codegen[i].data.cpath} from ${codegen[i].data.path};\n`)
        }
        else if (codegen[i].type == 'package_including') {
            fs.appendFileSync(output, fs.readFileSync(codegen[i].data.path, 'utf8'))
        }


        else if (codegen[i].type == 'function_definition') {
            // VISIBILITY MODIFIER
            if (codegen[i].data.modifier == tokens.public_modifier) { codegen[i].data.modifier = 'export'+' ' }
            if (codegen[i].data.modifier == tokens.private_modifier) { codegen[i].data.modifier = '' }
            
            // RETURN TYPE - VOID
            //if (codegen[i].data.state_type == tokens.void_value) { codegen[i].data.state_type = '' }


            // RETURN TYPE - FLOATS
            if (codegen[i].data.state_type == tokens.float32_value) { codegen[i].data.state_type = 'f32' }
            if (codegen[i].data.state_type == tokens.float64_value) { codegen[i].data.state_type = 'f64' }

            // RETURN TYPE - INTEGERS
            if (codegen[i].data.state_type == tokens.integer32_value) { codegen[i].data.state_type = 'i32' }
            if (codegen[i].data.state_type == tokens.integer64_value) { codegen[i].data.state_type = 'i64' }
            if (codegen[i].data.state_type == tokens.integer128_value) { codegen[i].data.state_type = 'i64' }
            if (codegen[i].data.state_type == tokens.integer8_value) { codegen[i].data.state_type = 'i8' }
            if (codegen[i].data.state_type == tokens.integer16_value) { codegen[i].data.state_type = 'i16' }

            if (codegen[i].data.state_type == tokens.unsigned_integer32_value) { codegen[i].data.state_type = 'u32' }
            if (codegen[i].data.state_type == tokens.unsigned_integer64_value) { codegen[i].data.state_type = 'u64' }
            if (codegen[i].data.state_type == tokens.unsigned_integer128_value) { codegen[i].data.state_type = 'u64' }
            if (codegen[i].data.state_type == tokens.unsigned_integer8_value) { codegen[i].data.state_type = 'u8' }
            if (codegen[i].data.state_type == tokens.unsigned_integer16_value) { codegen[i].data.state_type = 'u16' }

            if (codegen[i].data.state_type == tokens.integer_size_value) { codegen[i].data.state_type = 'i32' }
            if (codegen[i].data.state_type == tokens.unsigned_integer_size_value) { codegen[i].data.state_type = 'u32' }

            
            // RETURN TYPE - STRING AND BOOL
            if (codegen[i].data.state_type == tokens.string_value) { codegen[i].data.state_type = 'string' }
            if (codegen[i].data.state_type == tokens.rune_value) { codegen[i].data.state_type = 'string' }
            if (codegen[i].data.state_type == tokens.bool_value) { codegen[i].data.state_type = 'boolean' }



            // ARGS - FLOATS
            codegen[i].data.args = codegen[i].data.args.replace(/float32/g, 'f32')
            codegen[i].data.args = codegen[i].data.args.replace(/float64/g, 'f64')

            codegen[i].data.args = codegen[i].data.args.replace(/int/g, 'i32')
            codegen[i].data.args = codegen[i].data.args.replace(/i128/g, 'i64')
            codegen[i].data.args = codegen[i].data.args.replace(/u128/g, 'u64')
            codegen[i].data.args = codegen[i].data.args.replace(/usize/g, 'u32')
            codegen[i].data.args = codegen[i].data.args.replace(/isize/g, 'i32')
            codegen[i].data.args = codegen[i].data.args.replace(/rune/g, 'string')
            codegen[i].data.args = codegen[i].data.args.replace(/bool/g, 'boolean')

            fs.appendFileSync(output, codegen[i].data.modifier+'function '+codegen[i].data.funcname+codegen[i].data.args+': '+codegen[i].data.state_type+'\n')
        }
        else if (codegen[i].type == 'function_call') {
            let funcname = codegen[i].data.funcname
            
            funcname = funcname.replaceAll('System.out.println','console.log')
            funcname = funcname.replaceAll('System.out.print','console.log')
            
            

            //codegen[i].data.args = codegen[i].data.args.replace(/let /g,'')
            fs.appendFileSync(output, funcname+codegen[i].data.args+'\n')
        }
        else if (codegen[i].type == 'return_value') {
            fs.appendFileSync(output, codegen[i].data.value+'\n')
        }


        else if (codegen[i].type == 'conditional_if') {
            fs.appendFileSync(output, 'if ('+codegen[i].data.expression+') ')
        }
        else if (codegen[i].type == 'conditional_elsif') {
            fs.appendFileSync(output, 'else if ('+codegen[i].data.expression+') ')
        }
        else if (codegen[i].type == 'conditional_final') {
            fs.appendFileSync(output, 'else')
        }


        else if (codegen[i].type == 'loop_while') {
            fs.appendFileSync(output, 'while ('+codegen[i].data.expression+') ')
        }
        else if (codegen[i].type == 'loop_for') {
            // LOOK HERE
            let iter = codegen[i].data.iterand
            let min = iter.slice(0,iter.indexOf('.'))
            let max = iter.slice(iter.lastIndexOf('.')+1,iter.length)

            fs.appendFileSync(output, `for (let ${codegen[i].data.iterator}=${min}; ${codegen[i].data.iterator}<${max};  ${codegen[i].data.iterator}++) `)
        }
        else if (codegen[i].type == 'loop_times') {
            fs.appendFileSync(output, `for (let ${codegen[i].data.iterator}=0; ${codegen[i].data.iterator}<${codegen[i].data.maximum_value}; ${codegen[i].data.iterator}++) `)
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
