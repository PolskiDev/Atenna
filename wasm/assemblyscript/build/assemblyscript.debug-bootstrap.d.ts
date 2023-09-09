/** Exported memory */
export declare const memory: WebAssembly.Memory;
// Exported runtime interface
export declare function __new(size: number, id: number): number;
export declare function __pin(ptr: number): number;
export declare function __unpin(ptr: number): void;
export declare function __collect(): void;
export declare const __rtti_base: number;
/**
 * src/index-wasm/newOptions
 * @returns `src/compiler/Options`
 */
export declare function newOptions(): __Internref28;
/**
 * src/index-wasm/setTarget
 * @param options `src/compiler/Options`
 * @param target `i32`
 */
export declare function setTarget(options: __Internref28, target: number): void;
/**
 * src/index-wasm/setRuntime
 * @param options `src/compiler/Options`
 * @param runtime `i32`
 */
export declare function setRuntime(options: __Internref28, runtime: number): void;
/**
 * src/index-wasm/setNoAssert
 * @param options `src/compiler/Options`
 * @param noAssert `bool`
 */
export declare function setNoAssert(options: __Internref28, noAssert: boolean): void;
/**
 * src/index-wasm/setExportMemory
 * @param options `src/compiler/Options`
 * @param exportMemory `bool`
 */
export declare function setExportMemory(options: __Internref28, exportMemory: boolean): void;
/**
 * src/index-wasm/setImportMemory
 * @param options `src/compiler/Options`
 * @param importMemory `bool`
 */
export declare function setImportMemory(options: __Internref28, importMemory: boolean): void;
/**
 * src/index-wasm/setInitialMemory
 * @param options `src/compiler/Options`
 * @param initialMemory `u32`
 */
export declare function setInitialMemory(options: __Internref28, initialMemory: number): void;
/**
 * src/index-wasm/setMaximumMemory
 * @param options `src/compiler/Options`
 * @param maximumMemory `u32`
 */
export declare function setMaximumMemory(options: __Internref28, maximumMemory: number): void;
/**
 * src/index-wasm/setSharedMemory
 * @param options `src/compiler/Options`
 * @param sharedMemory `bool`
 */
export declare function setSharedMemory(options: __Internref28, sharedMemory: boolean): void;
/**
 * src/index-wasm/setImportTable
 * @param options `src/compiler/Options`
 * @param importTable `bool`
 */
export declare function setImportTable(options: __Internref28, importTable: boolean): void;
/**
 * src/index-wasm/setExportTable
 * @param options `src/compiler/Options`
 * @param exportTable `bool`
 */
export declare function setExportTable(options: __Internref28, exportTable: boolean): void;
/**
 * src/index-wasm/setSourceMap
 * @param options `src/compiler/Options`
 * @param sourceMap `bool`
 */
export declare function setSourceMap(options: __Internref28, sourceMap: boolean): void;
/**
 * src/index-wasm/setUncheckedBehavior
 * @param options `src/compiler/Options`
 * @param uncheckedBehavior `i32`
 */
export declare function setUncheckedBehavior(options: __Internref28, uncheckedBehavior: number): void;
/**
 * src/index-wasm/setMemoryBase
 * @param options `src/compiler/Options`
 * @param memoryBase `u32`
 */
export declare function setMemoryBase(options: __Internref28, memoryBase: number): void;
/**
 * src/index-wasm/setTableBase
 * @param options `src/compiler/Options`
 * @param tableBase `u32`
 */
export declare function setTableBase(options: __Internref28, tableBase: number): void;
/**
 * src/index-wasm/addGlobalAlias
 * @param options `src/compiler/Options`
 * @param alias `~lib/string/String`
 * @param name `~lib/string/String`
 */
export declare function addGlobalAlias(options: __Internref28, alias: string, name: string): void;
/**
 * src/index-wasm/removeGlobalAlias
 * @param options `src/compiler/Options`
 * @param alias `~lib/string/String`
 */
export declare function removeGlobalAlias(options: __Internref28, alias: string): void;
/**
 * src/index-wasm/setExportStart
 * @param options `src/compiler/Options`
 * @param exportStart `~lib/string/String | null`
 */
export declare function setExportStart(options: __Internref28, exportStart: string | null): void;
/**
 * src/index-wasm/setNoUnsafe
 * @param options `src/compiler/Options`
 * @param noUnsafe `bool`
 */
export declare function setNoUnsafe(options: __Internref28, noUnsafe: boolean): void;
/**
 * src/index-wasm/setLowMemoryLimit
 * @param options `src/compiler/Options`
 * @param lowMemoryLimit `i32`
 */
export declare function setLowMemoryLimit(options: __Internref28, lowMemoryLimit: number): void;
/**
 * src/index-wasm/setExportRuntime
 * @param options `src/compiler/Options`
 * @param exportRuntime `bool`
 */
export declare function setExportRuntime(options: __Internref28, exportRuntime: boolean): void;
/** src/index-wasm/DEFAULT_STACK_SIZE */
export declare const DEFAULT_STACK_SIZE: {
  /** @type `i32` */
  get value(): number
};
/**
 * src/index-wasm/setStackSize
 * @param options `src/compiler/Options`
 * @param stackSize `i32`
 */
export declare function setStackSize(options: __Internref28, stackSize: number): void;
/**
 * src/index-wasm/setBundleVersion
 * @param options `src/compiler/Options`
 * @param bundleMajorVersion `i32`
 * @param bundleMinorVersion `i32`
 * @param bundlePatchVersion `i32`
 */
export declare function setBundleVersion(options: __Internref28, bundleMajorVersion: number, bundleMinorVersion: number, bundlePatchVersion: number): void;
/** src/index-wasm/FEATURE_SIGN_EXTENSION */
export declare const FEATURE_SIGN_EXTENSION: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_MUTABLE_GLOBALS */
export declare const FEATURE_MUTABLE_GLOBALS: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_NONTRAPPING_F2I */
export declare const FEATURE_NONTRAPPING_F2I: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_BULK_MEMORY */
export declare const FEATURE_BULK_MEMORY: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_SIMD */
export declare const FEATURE_SIMD: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_THREADS */
export declare const FEATURE_THREADS: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_EXCEPTION_HANDLING */
export declare const FEATURE_EXCEPTION_HANDLING: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_TAIL_CALLS */
export declare const FEATURE_TAIL_CALLS: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_REFERENCE_TYPES */
export declare const FEATURE_REFERENCE_TYPES: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_MULTI_VALUE */
export declare const FEATURE_MULTI_VALUE: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_GC */
export declare const FEATURE_GC: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_MEMORY64 */
export declare const FEATURE_MEMORY64: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_RELAXED_SIMD */
export declare const FEATURE_RELAXED_SIMD: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_EXTENDED_CONST */
export declare const FEATURE_EXTENDED_CONST: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURE_STRINGREF */
export declare const FEATURE_STRINGREF: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURES_ALL */
export declare const FEATURES_ALL: {
  /** @type `i32` */
  get value(): number
};
/** src/index-wasm/FEATURES_DEFAULT */
export declare const FEATURES_DEFAULT: {
  /** @type `i32` */
  get value(): number
};
/**
 * src/index-wasm/setFeature
 * @param options `src/compiler/Options`
 * @param feature `i32`
 * @param on `bool`
 */
export declare function setFeature(options: __Internref28, feature: number, on: boolean): void;
/**
 * src/index-wasm/setOptimizeLevelHints
 * @param options `src/compiler/Options`
 * @param optimizeLevel `i32`
 * @param shrinkLevel `i32`
 */
export declare function setOptimizeLevelHints(options: __Internref28, optimizeLevel: number, shrinkLevel: number): void;
/**
 * src/index-wasm/setBasenameHint
 * @param options `src/compiler/Options`
 * @param basename `~lib/string/String`
 */
export declare function setBasenameHint(options: __Internref28, basename: string): void;
/**
 * src/index-wasm/setBindingsHint
 * @param options `src/compiler/Options`
 * @param bindings `bool`
 */
export declare function setBindingsHint(options: __Internref28, bindings: boolean): void;
/**
 * src/index-wasm/setPedantic
 * @param options `src/compiler/Options`
 * @param pedantic `bool`
 */
export declare function setPedantic(options: __Internref28, pedantic: boolean): void;
/**
 * src/index-wasm/setDebugInfo
 * @param options `src/compiler/Options`
 * @param debug `bool`
 */
export declare function setDebugInfo(options: __Internref28, debug: boolean): void;
/**
 * src/index-wasm/newProgram
 * @param options `src/compiler/Options`
 * @returns `src/program/Program`
 */
export declare function newProgram(options: __Internref28): __Internref17;
/**
 * src/index-wasm/nextDiagnostic
 * @param program `src/program/Program`
 * @returns `src/diagnostics/DiagnosticMessage | null`
 */
export declare function nextDiagnostic(program: __Internref17): __Internref19 | null;
/**
 * src/index-wasm/getSource
 * @param program `src/program/Program`
 * @param internalPath `~lib/string/String`
 * @returns `~lib/string/String | null`
 */
export declare function getSource(program: __Internref17, internalPath: string): string | null;
/**
 * src/index-wasm/getDiagnosticCode
 * @param diagnostic `src/diagnostics/DiagnosticMessage`
 * @returns `i32`
 */
export declare function getDiagnosticCode(diagnostic: __Internref19): number;
/**
 * src/index-wasm/getDiagnosticCategory
 * @param diagnostic `src/diagnostics/DiagnosticMessage`
 * @returns `i32`
 */
export declare function getDiagnosticCategory(diagnostic: __Internref19): number;
/**
 * src/index-wasm/getDiagnosticMessage
 * @param diagnostic `src/diagnostics/DiagnosticMessage`
 * @returns `~lib/string/String`
 */
export declare function getDiagnosticMessage(diagnostic: __Internref19): string;
/**
 * src/index-wasm/getDiagnosticRange
 * @param diagnostic `src/diagnostics/DiagnosticMessage`
 * @returns `src/diagnostics/Range | null`
 */
export declare function getDiagnosticRange(diagnostic: __Internref19): __Internref20 | null;
/**
 * src/index-wasm/getDiagnosticRelatedRange
 * @param diagnostic `src/diagnostics/DiagnosticMessage`
 * @returns `src/diagnostics/Range | null`
 */
export declare function getDiagnosticRelatedRange(diagnostic: __Internref19): __Internref20 | null;
/**
 * src/index-wasm/getRangeStart
 * @param range `src/diagnostics/Range`
 * @returns `i32`
 */
export declare function getRangeStart(range: __Internref20): number;
/**
 * src/index-wasm/getRangeEnd
 * @param range `src/diagnostics/Range`
 * @returns `i32`
 */
export declare function getRangeEnd(range: __Internref20): number;
/**
 * src/index-wasm/getRangeSource
 * @param range `src/diagnostics/Range`
 * @returns `src/ast/Source`
 */
export declare function getRangeSource(range: __Internref20): __Internref21;
/**
 * src/index-wasm/getSourceNormalizedPath
 * @param source `src/ast/Source`
 * @returns `~lib/string/String`
 */
export declare function getSourceNormalizedPath(source: __Internref21): string;
/**
 * src/index-wasm/isInfo
 * @param message `src/diagnostics/DiagnosticMessage`
 * @returns `bool`
 */
export declare function isInfo(message: __Internref19): boolean;
/**
 * src/index-wasm/isWarning
 * @param message `src/diagnostics/DiagnosticMessage`
 * @returns `bool`
 */
export declare function isWarning(message: __Internref19): boolean;
/**
 * src/index-wasm/isError
 * @param message `src/diagnostics/DiagnosticMessage`
 * @returns `bool`
 */
export declare function isError(message: __Internref19): boolean;
/**
 * src/index-wasm/parse
 * @param program `src/program/Program`
 * @param text `~lib/string/String | null`
 * @param path `~lib/string/String`
 * @param isEntry `bool`
 */
export declare function parse(program: __Internref17, text: string | null, path: string, isEntry?: boolean): void;
/**
 * src/index-wasm/nextFile
 * @param program `src/program/Program`
 * @returns `~lib/string/String | null`
 */
export declare function nextFile(program: __Internref17): string | null;
/**
 * src/index-wasm/getDependee
 * @param program `src/program/Program`
 * @param file `~lib/string/String`
 * @returns `~lib/string/String | null`
 */
export declare function getDependee(program: __Internref17, file: string): string | null;
/**
 * src/index-wasm/initializeProgram
 * @param program `src/program/Program`
 */
export declare function initializeProgram(program: __Internref17): void;
/**
 * src/index-wasm/compile
 * @param program `src/program/Program`
 * @returns `src/module/Module`
 */
export declare function compile(program: __Internref17): __Internref30;
/**
 * src/index-wasm/buildTSD
 * @param program `src/program/Program`
 * @param esm `bool`
 * @returns `~lib/string/String`
 */
export declare function buildTSD(program: __Internref17, esm: boolean): string;
/**
 * src/index-wasm/buildJS
 * @param program `src/program/Program`
 * @param esm `bool`
 * @returns `~lib/string/String`
 */
export declare function buildJS(program: __Internref17, esm: boolean): string;
/**
 * src/index-wasm/getBinaryenModuleRef
 * @param module `src/module/Module`
 * @returns `usize`
 */
export declare function getBinaryenModuleRef(module: __Internref30): number;
/**
 * src/index-wasm/validate
 * @param module `src/module/Module`
 * @returns `bool`
 */
export declare function validate(module: __Internref30): boolean;
/**
 * src/index-wasm/optimize
 * @param module `src/module/Module`
 * @param optimizeLevel `i32`
 * @param shrinkLevel `i32`
 * @param debugInfo `bool`
 * @param zeroFilledMemory `bool`
 */
export declare function optimize(module: __Internref30, optimizeLevel: number, shrinkLevel: number, debugInfo?: boolean, zeroFilledMemory?: boolean): void;
/**
 * src/diagnostics/formatDiagnosticMessage
 * @param message `src/diagnostics/DiagnosticMessage`
 * @param useColors `bool`
 * @param showContext `bool`
 * @returns `~lib/string/String`
 */
export declare function formatDiagnostic(message: __Internref19, useColors?: boolean, showContext?: boolean): string;
/** src/compiler/Options */
declare class __Internref28 extends Number {
  private __nominal28: symbol;
  private __nominal0: symbol;
}
/** src/program/Program */
declare class __Internref17 extends Number {
  private __nominal17: symbol;
  private __nominal18: symbol;
  private __nominal0: symbol;
}
/** src/diagnostics/DiagnosticMessage */
declare class __Internref19 extends Number {
  private __nominal19: symbol;
  private __nominal0: symbol;
}
/** src/diagnostics/Range */
declare class __Internref20 extends Number {
  private __nominal20: symbol;
  private __nominal0: symbol;
}
/** src/ast/Source */
declare class __Internref21 extends Number {
  private __nominal21: symbol;
  private __nominal22: symbol;
  private __nominal0: symbol;
}
/** src/module/Module */
declare class __Internref30 extends Number {
  private __nominal30: symbol;
  private __nominal0: symbol;
}
