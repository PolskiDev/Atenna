#!/usr/local/bin/node
const process = require('process')
const args = process.argv.slice(2)
const fs = require('fs')
const ast_lexer_parser = require('./atenna-libs/ast-lexer-parser')
const codegen = require('./atenna-libs/codegen')
const { execSync } = require('child_process')


// V MIDDLE-END BINARIES FOLDER
const HOME_ATENNA_CACHE = '/opt/atenna-cache/'

// V MIDDLE-END CACHE FOLDER OF ALL SUPPORTED OS
const DARWIN_ARM64_CACHE = 'v-darwin-aarch64-cache'
const DARWIN_x64_CACHE = 'v-darwin-x64-cache'
const LINUX_x86_CACHE = 'v-linux-x86-cache'
const LINUX_x64_CACHE = 'v-linux-x64-cache'
const UNKNOWN_CPU_ARCH_CACHE = 'v-unknown-cpu-arch-cache'

function CopyFile(init, dest) {
    fs.cpSync(init, dest, { recursive: true })
}

// CLI ARGS LOGIC
if (args[1] == '-ast') {
    // SHOW ABSTRACT SYNTAX TREE
    console.log(ast_lexer_parser.GenerateAST(args[0]))
} else if (args[1] == '-lib-module') {
    fs.mkdirSync(args[2], { recursive: true })
    codegen.CodeGen(args[0], args[2]+'/'+args[2]+'.v', 'normal')

} else if (args[1] == '-o') {
    // GENERATE .atenna FOLDER
    //fs.mkdirSync(HOME_ATENNA_CACHE.slice(0,-1), {recursive: true})

    // GENERATE OBJECT CODE [.v]
    codegen.CodeGen(args[0], args[2]+'.v', 'normal')

    // COMPILE OBJECT CODE [.v] - > [.exe]

    /* Darwin Apple Silicon */
    if (process.arch == 'arm64' && process.platform == 'darwin') {
        if (!fs.existsSync(HOME_ATENNA_CACHE+DARWIN_ARM64_CACHE)) {
            CopyFile(__dirname+'/atenna-libs/v-master', HOME_ATENNA_CACHE+DARWIN_ARM64_CACHE)
            execSync('make -C '+HOME_ATENNA_CACHE+DARWIN_ARM64_CACHE+' && '+HOME_ATENNA_CACHE+DARWIN_ARM64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        } else {
            execSync(HOME_ATENNA_CACHE+DARWIN_ARM64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        }
    
    /* Darwin Intel-64 */
    } else if (process.arch == 'x64' && process.platform == 'darwin') {
        if (!fs.existsSync(HOME_ATENNA_CACHE+DARWIN_x64_CACHE)) {
            CopyFile(__dirname+'/atenna-libs/v-master', HOME_ATENNA_CACHE+DARWIN_x64_CACHE)
            execSync('make -C '+HOME_ATENNA_CACHE+DARWIN_x64_CACHE+' && '+HOME_ATENNA_CACHE+DARWIN_x64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        } else {
            execSync(HOME_ATENNA_CACHE+DARWIN_x64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        }
    
    /* Windows 32-bit and 64-bit */
    } else if (process.platform == 'win32') {
        execSync('v '+args[2]+'.v')
    }

    /* Linux Intel-32 */
    else if (process.arch == 'x32' && process.platform == 'linux') {
        if (!fs.existsSync(HOME_ATENNA_CACHE+LINUX_x86_CACHE)) {
            CopyFile(__dirname+'/atenna-libs/v-master', HOME_ATENNA_CACHE+LINUX_x86_CACHE)
            execSync('make -C '+HOME_ATENNA_CACHE+LINUX_x86_CACHE+' && '+HOME_ATENNA_CACHE+LINUX_x86_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        } else {
            execSync(HOME_ATENNA_CACHE+LINUX_x86_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        }
    }
    /* Linux Intel-64 */
    else if (process.arch == 'x64' && process.platform == 'linux') {
        if (!fs.existsSync(HOME_ATENNA_CACHE+LINUX_x64_CACHE)) {
            CopyFile(__dirname+'/atenna-libs/v-master', HOME_ATENNA_CACHE+LINUX_x64_CACHE)
            execSync('make -C '+HOME_ATENNA_CACHE+LINUX_x64_CACHE+' && '+HOME_ATENNA_CACHE+LINUX_x64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        } else {
            execSync(HOME_ATENNA_CACHE+LINUX_x64_CACHE+'/v '+args[2]+'.v', { overwrite: true|false })
        }
    }

    /* Unknown OS and/or CPU Architecture */
    else {
        if (!fs.existsSync(HOME_ATENNA_CACHE+UNKNOWN_CPU_ARCH_CACHE)) {
            CopyFile(__dirname+'/atenna-libs/v-master', HOME_ATENNA_CACHE+UNKNOWN_CPU_ARCH_CACHE)
            execSync('make -C '+HOME_ATENNA_CACHE+UNKNOWN_CPU_ARCH_CACHE+' && '+HOME_ATENNA_CACHE+UNKNOWN_CPU_ARCH_CACHE+'/v '+args[2]+'.v'), { overwrite: true|false }
        } else {
            execSync(HOME_ATENNA_CACHE+UNKNOWN_CPU_ARCH_CACHE+'/v '+args[2]+'.v'), { overwrite: true|false }
        }
    }

    // REMOVE OBJECT CODE
    fs.rmSync(args[2]+'.v')

} else {
    console.log("\n                 Atenna Compiler")
    console.log("------------------------------------------------------")
    console.log("Syntax:       sudo atennac  <options>")
    console.log("------------------------------------------------------\n\n")

    /*console.log("Plataformas suportadas:")
    console.log("linux               GNU/Linux")
    console.log("windows             Microsoft Windows")
    console.log("darwin              Apple MacOS X")
    console.log("openbsd             OpenBSD")
    console.log("netbsd              NetBSD")
    console.log("dragonfly           DragonflyBSD")
    console.log("solaris             SunOS/Solaris")
    console.log("android             Android")
    console.log("javascript          JS")
    console.log("aix                 AIX")
    console.log("illumos             Illumos")
    console.log("plan9               Plan9\n\n")


    console.log("Arquiteturas de processador suportadas:")
    console.log("386                 x86 (32-bit)")
    console.log("amd64               x86 (64-bit)")
    console.log("arm                 ARM (32-bit)")
    console.log("arm64               ARM (64-bit)\n")


    console.log("ppc                 PowerPC (32-bit)")
    console.log("ppc64               PowerPC (64-bit)")
    console.log("ppc64l3             PowerPC LE (64-bit)\n")


    console.log("sparc               SPARC (32-bit)")
    console.log("sparc64             SPARC (64-bit)\n")


    console.log("riscv               RISC-V (32-bit)")
    console.log("riscv64             RISC-V (64-bit)\n")

    console.log("s390                S390")
    console.log("s390x               S390x\n")

    console.log("sparc               SPARC (32-bit)\n")

    console.log("arm64be             ARM BE(64-bit)\n")

    console.log("loong64             LOONG (64-bit)\n")

    console.log("mips                MIPS (32-bit)")
    console.log("mips64              MIPS (64-bit)")
    console.log("mips64le            MIPS LE (64-bit)")
    console.log("mips64p32           MIPS P32 (64-bit)")
    console.log("mips64p32le         MIPS P32LE (64-bit)")
    console.log("mipsle              MIPS LE\n\n")

    console.log("wasm                WebAssembly\n\n")*/
    

    //console.log("--------------------------------------------------------------------------------\n\n")
    console.log("Options:")
    console.log("<file>.atenna   -o    <file>                   Output is a binary\n")
    console.log("<file>.atenna   -lib-module    <file>          Output is a library module\n")
    console.log("<file>.atenna   -ast                           Show generated AST\n")
    console.log("--------------------------------------------------------------------------------\n\n")
}

