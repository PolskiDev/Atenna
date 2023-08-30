const process = require('process')
const args = process.argv.slice(2)
const util = require('util')
const dump = util.inspect
const fs = require('fs')
const lexer = require('./ast-lexer-parser')
const { tokens } = require('./token_table')


function CodeGen(input, output, mode='normal') {
    let codegen = lexer.GenerateAST(input)
    for (var i = 0; i < codegen?.length; i++) {
        if (codegen[i].type == 'initialize_program') {
            fs.writeFileSync(output, '')
        }

        else if (codegen[i].type == 'package_definition') {
            fs.appendFileSync(output, '-- PACOTE: '+codegen[i].name+'\n')
        }
        else if (codegen[i].type == 'open_block') {
            fs.appendFileSync(output, '{\n')
        }
        else if (codegen[i].type == 'end_block') {
            fs.appendFileSync(output, '}\n')
        }


        else if (codegen[i].type == 'variable_assignment') {
            if (codegen[i].data.value == tokens.null_value) {
                fs.appendFileSync(output,'// mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
            } else {
                fs.appendFileSync(output,'mut '+codegen[i].data.varname+' := '+codegen[i].data.value+'\n')
                //if (codegen[i].data.error_name != undefined) {
                    //fs.appendFileSync(output, `if ${codegen[i].data.error_name} != nil { log.Fatal(${codegen[i].data.error_name}) }\n`)
                //}
            }
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
            if (codegen[i].data.modifier == tokens.public_modifier) { codegen[i].data.modifier = 'pub'+' ' }
            if (codegen[i].data.modifier == tokens.private_modifier) { codegen[i].data.modifier = '' }

            if (codegen[i].data.state_type == tokens.void_value) { codegen[i].data.state_type = '' }
            if (codegen[i].data.state_type == tokens.float32_value) { codegen[i].data.state_type = 'f32' }
            if (codegen[i].data.state_type == tokens.float64_value) { codegen[i].data.state_type = 'f64' }

            
            fs.appendFileSync(output, codegen[i].data.modifier+'fn '+codegen[i].data.funcname+codegen[i].data.args+' '+codegen[i].data.state_type+'\n')
        }
        else if (codegen[i].type == 'function_call') {
            //codegen[i].data.args = codegen[i].data.args.replace(/let /g,'')
            fs.appendFileSync(output, codegen[i].data.funcname+codegen[i].data.args+'\n')
        }
        else if (codegen[i].type == 'return_value') {
            fs.appendFileSync(output, codegen[i].data.value+';\n')
        }


        else if (codegen[i].type == 'conditional_if') {
            fs.appendFileSync(output, 'if '+codegen[i].data.expression)
        }
        else if (codegen[i].type == 'conditional_elsif') {
            fs.appendFileSync(output, 'elseif '+codegen[i].data.expression)
        }
        else if (codegen[i].type == 'conditional_final') {
            fs.appendFileSync(output, 'else')
        }


        else if (codegen[i].type == 'loop_while') {
            fs.appendFileSync(output, 'while '+codegen[i].data.expression)
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
