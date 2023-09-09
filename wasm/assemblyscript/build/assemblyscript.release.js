import * as __import0 from "binaryen";
async function instantiate(module, imports = {}) {
  const __module0 = imports.binaryen;
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
    binaryen: Object.assign(Object.create(__module0), {
      _BinaryenUnreachable(module) {
        // src/glue/binaryen/_BinaryenUnreachable(usize) => usize
        module = module >>> 0;
        return __module0._BinaryenUnreachable(module);
      },
      _BinaryenExpressionGetId(expr) {
        // src/glue/binaryen/_BinaryenExpressionGetId(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenExpressionGetId(expr);
      },
      _BinaryenLocalSetIsTee(expr) {
        // src/glue/binaryen/_BinaryenLocalSetIsTee(usize) => bool
        expr = expr >>> 0;
        return __module0._BinaryenLocalSetIsTee(expr) ? 1 : 0;
      },
      _BinaryenLocalSetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenLocalSetGetIndex(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenLocalSetGetIndex(expr);
      },
      _BinaryenLocalGetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenLocalGetGetIndex(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenLocalGetGetIndex(expr);
      },
      _BinaryenLocalSetGetValue(expr) {
        // src/glue/binaryen/_BinaryenLocalSetGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenLocalSetGetValue(expr);
      },
      _BinaryenGlobalGetGetName(expr) {
        // src/glue/binaryen/_BinaryenGlobalGetGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenGlobalGetGetName(expr);
      },
      __i32_load8_u(ptr) {
        // src/glue/binaryen/__i32_load8_u(usize) => u8
        ptr = ptr >>> 0;
        return __module0.__i32_load8_u(ptr);
      },
      _BinaryenBinaryGetOp(expr) {
        // src/glue/binaryen/_BinaryenBinaryGetOp(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenBinaryGetOp(expr);
      },
      _BinaryenBinaryGetLeft(expr) {
        // src/glue/binaryen/_BinaryenBinaryGetLeft(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBinaryGetLeft(expr);
      },
      _BinaryenConstGetValueI32(expr) {
        // src/glue/binaryen/_BinaryenConstGetValueI32(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenConstGetValueI32(expr);
      },
      _BinaryenBinaryGetRight(expr) {
        // src/glue/binaryen/_BinaryenBinaryGetRight(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBinaryGetRight(expr);
      },
      _BinaryenUnaryGetOp(expr) {
        // src/glue/binaryen/_BinaryenUnaryGetOp(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenUnaryGetOp(expr);
      },
      _BinaryenExpressionGetType(expr) {
        // src/glue/binaryen/_BinaryenExpressionGetType(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenExpressionGetType(expr);
      },
      _BinaryenConstGetValueI64Low(expr) {
        // src/glue/binaryen/_BinaryenConstGetValueI64Low(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenConstGetValueI64Low(expr);
      },
      _BinaryenConstGetValueF32(expr) {
        // src/glue/binaryen/_BinaryenConstGetValueF32(usize) => f32
        expr = expr >>> 0;
        return __module0._BinaryenConstGetValueF32(expr);
      },
      _BinaryenConstGetValueF64(expr) {
        // src/glue/binaryen/_BinaryenConstGetValueF64(usize) => f64
        expr = expr >>> 0;
        return __module0._BinaryenConstGetValueF64(expr);
      },
      _BinaryenLoadIsSigned(expr) {
        // src/glue/binaryen/_BinaryenLoadIsSigned(usize) => bool
        expr = expr >>> 0;
        return __module0._BinaryenLoadIsSigned(expr) ? 1 : 0;
      },
      _BinaryenLoadGetBytes(expr) {
        // src/glue/binaryen/_BinaryenLoadGetBytes(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenLoadGetBytes(expr);
      },
      _BinaryenBlockGetName(expr) {
        // src/glue/binaryen/_BinaryenBlockGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBlockGetName(expr);
      },
      _BinaryenBlockGetNumChildren(expr) {
        // src/glue/binaryen/_BinaryenBlockGetNumChildren(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenBlockGetNumChildren(expr);
      },
      _BinaryenBlockGetChildAt(expr, index) {
        // src/glue/binaryen/_BinaryenBlockGetChildAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenBlockGetChildAt(expr, index);
      },
      _BinaryenIfGetIfTrue(expr) {
        // src/glue/binaryen/_BinaryenIfGetIfTrue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenIfGetIfTrue(expr);
      },
      _BinaryenIfGetIfFalse(expr) {
        // src/glue/binaryen/_BinaryenIfGetIfFalse(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenIfGetIfFalse(expr);
      },
      _BinaryenSelectGetIfTrue(expr) {
        // src/glue/binaryen/_BinaryenSelectGetIfTrue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSelectGetIfTrue(expr);
      },
      _BinaryenSelectGetIfFalse(expr) {
        // src/glue/binaryen/_BinaryenSelectGetIfFalse(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSelectGetIfFalse(expr);
      },
      _BinaryenCallGetTarget(expr) {
        // src/glue/binaryen/_BinaryenCallGetTarget(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenCallGetTarget(expr);
      },
      _BinaryenLiteralInt64(literalOut, x, y) {
        // src/glue/binaryen/_BinaryenLiteralInt64(usize, i32, i32) => void
        literalOut = literalOut >>> 0;
        __module0._BinaryenLiteralInt64(literalOut, x, y);
      },
      _BinaryenConst(module, value) {
        // src/glue/binaryen/_BinaryenConst(usize, usize) => usize
        module = module >>> 0;
        value = value >>> 0;
        return __module0._BinaryenConst(module, value);
      },
      _BinaryenLiteralInt32(literalOut, x) {
        // src/glue/binaryen/_BinaryenLiteralInt32(usize, i32) => void
        literalOut = literalOut >>> 0;
        __module0._BinaryenLiteralInt32(literalOut, x);
      },
      _BinaryenNop(module) {
        // src/glue/binaryen/_BinaryenNop(usize) => usize
        module = module >>> 0;
        return __module0._BinaryenNop(module);
      },
      _malloc(size) {
        // src/glue/binaryen/_malloc(usize) => usize
        size = size >>> 0;
        return __module0._malloc(size);
      },
      __i32_store8(ptr, value) {
        // src/glue/binaryen/__i32_store8(usize, f64) => void
        ptr = ptr >>> 0;
        __module0.__i32_store8(ptr, value);
      },
      __i32_store(ptr, value) {
        // src/glue/binaryen/__i32_store(usize, f64) => void
        ptr = ptr >>> 0;
        __module0.__i32_store(ptr, value);
      },
      _BinaryenBlock(module, name, childExprs, numChildren, type) {
        // src/glue/binaryen/_BinaryenBlock(usize, usize, usize, u32, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        childExprs = childExprs >>> 0;
        numChildren = numChildren >>> 0;
        type = type >>> 0;
        return __module0._BinaryenBlock(module, name, childExprs, numChildren, type);
      },
      _free(ptr) {
        // src/glue/binaryen/_free(usize) => void
        ptr = ptr >>> 0;
        __module0._free(ptr);
      },
      _BinaryenBreak(module, name, conditionExpr, valueExpr) {
        // src/glue/binaryen/_BinaryenBreak(usize, usize, usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        conditionExpr = conditionExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenBreak(module, name, conditionExpr, valueExpr);
      },
      _BinaryenBinary(module, op, leftExpr, rightExpr) {
        // src/glue/binaryen/_BinaryenBinary(usize, i32, usize, usize) => usize
        module = module >>> 0;
        leftExpr = leftExpr >>> 0;
        rightExpr = rightExpr >>> 0;
        return __module0._BinaryenBinary(module, op, leftExpr, rightExpr);
      },
      _BinaryenUnary(module, op, valueExpr) {
        // src/glue/binaryen/_BinaryenUnary(usize, i32, usize) => usize
        module = module >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenUnary(module, op, valueExpr);
      },
      _BinaryenRefIsNull(module, valueExpr) {
        // src/glue/binaryen/_BinaryenRefIsNull(usize, usize) => usize
        module = module >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenRefIsNull(module, valueExpr);
      },
      _ExpressionRunnerCreate(module, flags, maxDepth, maxLoopIterations) {
        // src/glue/binaryen/_ExpressionRunnerCreate(usize, u32, u32, u32) => usize
        module = module >>> 0;
        flags = flags >>> 0;
        maxDepth = maxDepth >>> 0;
        maxLoopIterations = maxLoopIterations >>> 0;
        return __module0._ExpressionRunnerCreate(module, flags, maxDepth, maxLoopIterations);
      },
      _ExpressionRunnerRunAndDispose(runner, expr) {
        // src/glue/binaryen/_ExpressionRunnerRunAndDispose(usize, usize) => usize
        runner = runner >>> 0;
        expr = expr >>> 0;
        return __module0._ExpressionRunnerRunAndDispose(runner, expr);
      },
      _BinaryenModuleGetFeatures(module) {
        // src/glue/binaryen/_BinaryenModuleGetFeatures(usize) => u32
        module = module >>> 0;
        return __module0._BinaryenModuleGetFeatures(module);
      },
      _BinaryenConstGetValueI64High(expr) {
        // src/glue/binaryen/_BinaryenConstGetValueI64High(usize) => i32
        expr = expr >>> 0;
        return __module0._BinaryenConstGetValueI64High(expr);
      },
      _BinaryenIfGetCondition(expr) {
        // src/glue/binaryen/_BinaryenIfGetCondition(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenIfGetCondition(expr);
      },
      _BinaryenUnaryGetValue(expr) {
        // src/glue/binaryen/_BinaryenUnaryGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenUnaryGetValue(expr);
      },
      _BinaryenCallGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenCallGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenCallGetNumOperands(expr);
      },
      _BinaryenCallGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenCallGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenCallGetOperandAt(expr, index);
      },
      _BinaryenLoop(module, name, bodyExpr) {
        // src/glue/binaryen/_BinaryenLoop(usize, usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        bodyExpr = bodyExpr >>> 0;
        return __module0._BinaryenLoop(module, name, bodyExpr);
      },
      _BinaryenDrop(module, valueExpr) {
        // src/glue/binaryen/_BinaryenDrop(usize, usize) => usize
        module = module >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenDrop(module, valueExpr);
      },
      _BinaryenIf(module, conditionExpr, ifTrueExpr, ifFalseExpr) {
        // src/glue/binaryen/_BinaryenIf(usize, usize, usize, usize) => usize
        module = module >>> 0;
        conditionExpr = conditionExpr >>> 0;
        ifTrueExpr = ifTrueExpr >>> 0;
        ifFalseExpr = ifFalseExpr >>> 0;
        return __module0._BinaryenIf(module, conditionExpr, ifTrueExpr, ifFalseExpr);
      },
      _BinaryenReturn(module, valueExpr) {
        // src/glue/binaryen/_BinaryenReturn(usize, usize) => usize
        module = module >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenReturn(module, valueExpr);
      },
      _BinaryenReturnCall(module, targetName, operandExprs, numOperands, returnType) {
        // src/glue/binaryen/_BinaryenReturnCall(usize, usize, usize, u32, usize) => usize
        module = module >>> 0;
        targetName = targetName >>> 0;
        operandExprs = operandExprs >>> 0;
        numOperands = numOperands >>> 0;
        returnType = returnType >>> 0;
        return __module0._BinaryenReturnCall(module, targetName, operandExprs, numOperands, returnType);
      },
      _BinaryenCall(module, targetName, operandExprs, numOperands, returnType) {
        // src/glue/binaryen/_BinaryenCall(usize, usize, usize, u32, usize) => usize
        module = module >>> 0;
        targetName = targetName >>> 0;
        operandExprs = operandExprs >>> 0;
        numOperands = numOperands >>> 0;
        returnType = returnType >>> 0;
        return __module0._BinaryenCall(module, targetName, operandExprs, numOperands, returnType);
      },
      _BinaryenLocalSet(module, index, valueExpr) {
        // src/glue/binaryen/_BinaryenLocalSet(usize, u32, usize) => usize
        module = module >>> 0;
        index = index >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenLocalSet(module, index, valueExpr);
      },
      _BinaryenLocalGet(module, index, type) {
        // src/glue/binaryen/_BinaryenLocalGet(usize, u32, usize) => usize
        module = module >>> 0;
        index = index >>> 0;
        type = type >>> 0;
        return __module0._BinaryenLocalGet(module, index, type);
      },
      _BinaryenLiteralFloat32(literalOut, x) {
        // src/glue/binaryen/_BinaryenLiteralFloat32(usize, f32) => void
        literalOut = literalOut >>> 0;
        __module0._BinaryenLiteralFloat32(literalOut, x);
      },
      _BinaryenLiteralFloat64(literalOut, x) {
        // src/glue/binaryen/_BinaryenLiteralFloat64(usize, f64) => void
        literalOut = literalOut >>> 0;
        __module0._BinaryenLiteralFloat64(literalOut, x);
      },
      _BinaryenLiteralVec128(literalOut, x) {
        // src/glue/binaryen/_BinaryenLiteralVec128(usize, usize) => void
        literalOut = literalOut >>> 0;
        x = x >>> 0;
        __module0._BinaryenLiteralVec128(literalOut, x);
      },
      _BinaryenTypeFromHeapType(heapType, nullable) {
        // src/glue/binaryen/_BinaryenTypeFromHeapType(usize, bool) => usize
        heapType = heapType >>> 0;
        nullable = nullable != 0;
        return __module0._BinaryenTypeFromHeapType(heapType, nullable);
      },
      _BinaryenTypeGetHeapType(type) {
        // src/glue/binaryen/_BinaryenTypeGetHeapType(usize) => usize
        type = type >>> 0;
        return __module0._BinaryenTypeGetHeapType(type);
      },
      _TypeBuilderCreate(size) {
        // src/glue/binaryen/_TypeBuilderCreate(u32) => usize
        size = size >>> 0;
        return __module0._TypeBuilderCreate(size);
      },
      _TypeBuilderGetSize(builder) {
        // src/glue/binaryen/_TypeBuilderGetSize(usize) => u32
        builder = builder >>> 0;
        return __module0._TypeBuilderGetSize(builder);
      },
      _TypeBuilderGrow(builder, count) {
        // src/glue/binaryen/_TypeBuilderGrow(usize, u32) => void
        builder = builder >>> 0;
        count = count >>> 0;
        __module0._TypeBuilderGrow(builder, count);
      },
      _TypeBuilderGetTempHeapType(builder, index) {
        // src/glue/binaryen/_TypeBuilderGetTempHeapType(usize, u32) => usize
        builder = builder >>> 0;
        index = index >>> 0;
        return __module0._TypeBuilderGetTempHeapType(builder, index);
      },
      _TypeBuilderGetTempRefType(builder, heapType, nullable) {
        // src/glue/binaryen/_TypeBuilderGetTempRefType(usize, usize, bool) => usize
        builder = builder >>> 0;
        heapType = heapType >>> 0;
        nullable = nullable != 0;
        return __module0._TypeBuilderGetTempRefType(builder, heapType, nullable);
      },
      _TypeBuilderSetStructType(builder, index, fieldTypes, fieldPackedTypes, fieldMutables, numFields) {
        // src/glue/binaryen/_TypeBuilderSetStructType(usize, u32, usize, usize, usize, i32) => void
        builder = builder >>> 0;
        index = index >>> 0;
        fieldTypes = fieldTypes >>> 0;
        fieldPackedTypes = fieldPackedTypes >>> 0;
        fieldMutables = fieldMutables >>> 0;
        __module0._TypeBuilderSetStructType(builder, index, fieldTypes, fieldPackedTypes, fieldMutables, numFields);
      },
      _TypeBuilderSetSubType(builder, index, superType) {
        // src/glue/binaryen/_TypeBuilderSetSubType(usize, u32, usize) => void
        builder = builder >>> 0;
        index = index >>> 0;
        superType = superType >>> 0;
        __module0._TypeBuilderSetSubType(builder, index, superType);
      },
      _TypeBuilderGetTempTupleType(builder, types, numTypes) {
        // src/glue/binaryen/_TypeBuilderGetTempTupleType(usize, usize, u32) => usize
        builder = builder >>> 0;
        types = types >>> 0;
        numTypes = numTypes >>> 0;
        return __module0._TypeBuilderGetTempTupleType(builder, types, numTypes);
      },
      _TypeBuilderSetSignatureType(builder, index, paramTypes, resultTypes) {
        // src/glue/binaryen/_TypeBuilderSetSignatureType(usize, u32, usize, usize) => void
        builder = builder >>> 0;
        index = index >>> 0;
        paramTypes = paramTypes >>> 0;
        resultTypes = resultTypes >>> 0;
        __module0._TypeBuilderSetSignatureType(builder, index, paramTypes, resultTypes);
      },
      _TypeBuilderBuildAndDispose(builder, heapTypes, errorIndex, errorReason) {
        // src/glue/binaryen/_TypeBuilderBuildAndDispose(usize, usize, usize, usize) => bool
        builder = builder >>> 0;
        heapTypes = heapTypes >>> 0;
        errorIndex = errorIndex >>> 0;
        errorReason = errorReason >>> 0;
        return __module0._TypeBuilderBuildAndDispose(builder, heapTypes, errorIndex, errorReason) ? 1 : 0;
      },
      __i32_load(ptr) {
        // src/glue/binaryen/__i32_load(usize) => i32
        ptr = ptr >>> 0;
        return __module0.__i32_load(ptr);
      },
      _BinaryenModuleSetTypeName(module, heapType, name) {
        // src/glue/binaryen/_BinaryenModuleSetTypeName(usize, usize, usize) => void
        module = module >>> 0;
        heapType = heapType >>> 0;
        name = name >>> 0;
        __module0._BinaryenModuleSetTypeName(module, heapType, name);
      },
      _BinaryenStructTypeGetNumFields(heapType) {
        // src/glue/binaryen/_BinaryenStructTypeGetNumFields(usize) => u32
        heapType = heapType >>> 0;
        return __module0._BinaryenStructTypeGetNumFields(heapType);
      },
      _BinaryenModuleSetFieldName(module, heapType, index, name) {
        // src/glue/binaryen/_BinaryenModuleSetFieldName(usize, usize, u32, usize) => void
        module = module >>> 0;
        heapType = heapType >>> 0;
        index = index >>> 0;
        name = name >>> 0;
        __module0._BinaryenModuleSetFieldName(module, heapType, index, name);
      },
      _BinaryenRefNull(module, type) {
        // src/glue/binaryen/_BinaryenRefNull(usize, usize) => usize
        module = module >>> 0;
        type = type >>> 0;
        return __module0._BinaryenRefNull(module, type);
      },
      _BinaryenI31New(module, value) {
        // src/glue/binaryen/_BinaryenI31New(usize, usize) => usize
        module = module >>> 0;
        value = value >>> 0;
        return __module0._BinaryenI31New(module, value);
      },
      _BinaryenLocalTee(module, index, valueExpr, type) {
        // src/glue/binaryen/_BinaryenLocalTee(usize, u32, usize, usize) => usize
        module = module >>> 0;
        index = index >>> 0;
        valueExpr = valueExpr >>> 0;
        type = type >>> 0;
        return __module0._BinaryenLocalTee(module, index, valueExpr, type);
      },
      _BinaryenModuleAddDebugInfoFileName(module, filename) {
        // src/glue/binaryen/_BinaryenModuleAddDebugInfoFileName(usize, usize) => u32
        module = module >>> 0;
        filename = filename >>> 0;
        return __module0._BinaryenModuleAddDebugInfoFileName(module, filename);
      },
      _BinaryenAddGlobalImport(module, internalName, externalModuleName, externalBaseName, globalType, mutable) {
        // src/glue/binaryen/_BinaryenAddGlobalImport(usize, usize, usize, usize, usize, bool) => void
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalModuleName = externalModuleName >>> 0;
        externalBaseName = externalBaseName >>> 0;
        globalType = globalType >>> 0;
        mutable = mutable != 0;
        __module0._BinaryenAddGlobalImport(module, internalName, externalModuleName, externalBaseName, globalType, mutable);
      },
      _BinaryenGetGlobal(module, name) {
        // src/glue/binaryen/_BinaryenGetGlobal(usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        return __module0._BinaryenGetGlobal(module, name);
      },
      _BinaryenGlobalIsMutable(global) {
        // src/glue/binaryen/_BinaryenGlobalIsMutable(usize) => bool
        global = global >>> 0;
        return __module0._BinaryenGlobalIsMutable(global) ? 1 : 0;
      },
      _BinaryenAddGlobal(module, name, type, mutable, init) {
        // src/glue/binaryen/_BinaryenAddGlobal(usize, usize, usize, bool, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        type = type >>> 0;
        mutable = mutable != 0;
        init = init >>> 0;
        return __module0._BinaryenAddGlobal(module, name, type, mutable, init);
      },
      _BinaryenGlobalSet(module, name, value) {
        // src/glue/binaryen/_BinaryenGlobalSet(usize, usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        value = value >>> 0;
        return __module0._BinaryenGlobalSet(module, name, value);
      },
      _BinaryenGlobalGet(module, name, type) {
        // src/glue/binaryen/_BinaryenGlobalGet(usize, usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        type = type >>> 0;
        return __module0._BinaryenGlobalGet(module, name, type);
      },
      _BinaryenSwitch(module, names, numNames, defaultName, conditionExpr, valueExpr) {
        // src/glue/binaryen/_BinaryenSwitch(usize, usize, u32, usize, usize, usize) => usize
        module = module >>> 0;
        names = names >>> 0;
        numNames = numNames >>> 0;
        defaultName = defaultName >>> 0;
        conditionExpr = conditionExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenSwitch(module, names, numNames, defaultName, conditionExpr, valueExpr);
      },
      _BinaryenTypeCreate(types, numTypes) {
        // src/glue/binaryen/_BinaryenTypeCreate(usize, u32) => usize
        types = types >>> 0;
        numTypes = numTypes >>> 0;
        return __module0._BinaryenTypeCreate(types, numTypes);
      },
      _BinaryenAddFunction(module, name, params, results, varTypes, numVarTypes, body) {
        // src/glue/binaryen/_BinaryenAddFunction(usize, usize, usize, usize, usize, u32, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        params = params >>> 0;
        results = results >>> 0;
        varTypes = varTypes >>> 0;
        numVarTypes = numVarTypes >>> 0;
        body = body >>> 0;
        return __module0._BinaryenAddFunction(module, name, params, results, varTypes, numVarTypes, body);
      },
      _BinaryenFunctionSetDebugLocation(func, expr, fileIndex, lineNumber, columnNumber) {
        // src/glue/binaryen/_BinaryenFunctionSetDebugLocation(usize, usize, u32, u32, u32) => void
        func = func >>> 0;
        expr = expr >>> 0;
        fileIndex = fileIndex >>> 0;
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        __module0._BinaryenFunctionSetDebugLocation(func, expr, fileIndex, lineNumber, columnNumber);
      },
      _BinaryenFunctionSetLocalName(func, index, name) {
        // src/glue/binaryen/_BinaryenFunctionSetLocalName(usize, u32, usize) => void
        func = func >>> 0;
        index = index >>> 0;
        name = name >>> 0;
        __module0._BinaryenFunctionSetLocalName(func, index, name);
      },
      _BinaryenExpressionGetSideEffects(expr, module) {
        // src/glue/binaryen/_BinaryenExpressionGetSideEffects(usize, usize) => u32
        expr = expr >>> 0;
        module = module >>> 0;
        return __module0._BinaryenExpressionGetSideEffects(expr, module);
      },
      _BinaryenAddFunctionImport(module, internalName, externalModuleName, externalBaseName, params, results) {
        // src/glue/binaryen/_BinaryenAddFunctionImport(usize, usize, usize, usize, usize, usize) => void
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalModuleName = externalModuleName >>> 0;
        externalBaseName = externalBaseName >>> 0;
        params = params >>> 0;
        results = results >>> 0;
        __module0._BinaryenAddFunctionImport(module, internalName, externalModuleName, externalBaseName, params, results);
      },
      _BinaryenGetFunction(module, name) {
        // src/glue/binaryen/_BinaryenGetFunction(usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        return __module0._BinaryenGetFunction(module, name);
      },
      _BinaryenLoad(module, bytes, signed, offset, align, type, ptrExpr, memoryName) {
        // src/glue/binaryen/_BinaryenLoad(usize, u32, bool, u32, u32, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        signed = signed != 0;
        offset = offset >>> 0;
        align = align >>> 0;
        type = type >>> 0;
        ptrExpr = ptrExpr >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenLoad(module, bytes, signed, offset, align, type, ptrExpr, memoryName);
      },
      _BinaryenStore(module, bytes, offset, align, ptrExpr, valueExpr, type, memoryName) {
        // src/glue/binaryen/_BinaryenStore(usize, u32, u32, u32, usize, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        offset = offset >>> 0;
        align = align >>> 0;
        ptrExpr = ptrExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        type = type >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenStore(module, bytes, offset, align, ptrExpr, valueExpr, type, memoryName);
      },
      _BinaryenTypeIsNullable(type) {
        // src/glue/binaryen/_BinaryenTypeIsNullable(usize) => bool
        type = type >>> 0;
        return __module0._BinaryenTypeIsNullable(type) ? 1 : 0;
      },
      _BinaryenRefAs(module, op, valueExpr) {
        // src/glue/binaryen/_BinaryenRefAs(usize, i32, usize) => usize
        module = module >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenRefAs(module, op, valueExpr);
      },
      _BinaryenRefEq(module, leftExpr, rightExpr) {
        // src/glue/binaryen/_BinaryenRefEq(usize, usize, usize) => usize
        module = module >>> 0;
        leftExpr = leftExpr >>> 0;
        rightExpr = rightExpr >>> 0;
        return __module0._BinaryenRefEq(module, leftExpr, rightExpr);
      },
      _BinaryenStringEq(module, op, left, right) {
        // src/glue/binaryen/_BinaryenStringEq(usize, i32, usize, usize) => usize
        module = module >>> 0;
        left = left >>> 0;
        right = right >>> 0;
        return __module0._BinaryenStringEq(module, op, left, right);
      },
      _BinaryenSelect(module, conditionExpr, ifTrueExpr, ifFalseExpr, type) {
        // src/glue/binaryen/_BinaryenSelect(usize, usize, usize, usize, usize) => usize
        module = module >>> 0;
        conditionExpr = conditionExpr >>> 0;
        ifTrueExpr = ifTrueExpr >>> 0;
        ifFalseExpr = ifFalseExpr >>> 0;
        type = type >>> 0;
        return __module0._BinaryenSelect(module, conditionExpr, ifTrueExpr, ifFalseExpr, type);
      },
      _BinaryenExpressionCopy(expr, module) {
        // src/glue/binaryen/_BinaryenExpressionCopy(usize, usize) => usize
        expr = expr >>> 0;
        module = module >>> 0;
        return __module0._BinaryenExpressionCopy(expr, module);
      },
      _BinaryenReturnCallIndirect(module, table, targetExpr, operandExprs, numOperands, params, results) {
        // src/glue/binaryen/_BinaryenReturnCallIndirect(usize, usize, usize, usize, u32, usize, usize) => usize
        module = module >>> 0;
        table = table >>> 0;
        targetExpr = targetExpr >>> 0;
        operandExprs = operandExprs >>> 0;
        numOperands = numOperands >>> 0;
        params = params >>> 0;
        results = results >>> 0;
        return __module0._BinaryenReturnCallIndirect(module, table, targetExpr, operandExprs, numOperands, params, results);
      },
      _BinaryenCallIndirect(module, table, targetExpr, operandExprs, numOperands, params, results) {
        // src/glue/binaryen/_BinaryenCallIndirect(usize, usize, usize, usize, u32, usize, usize) => usize
        module = module >>> 0;
        table = table >>> 0;
        targetExpr = targetExpr >>> 0;
        operandExprs = operandExprs >>> 0;
        numOperands = numOperands >>> 0;
        params = params >>> 0;
        results = results >>> 0;
        return __module0._BinaryenCallIndirect(module, table, targetExpr, operandExprs, numOperands, params, results);
      },
      _BinaryenRefFunc(module, funcName, type) {
        // src/glue/binaryen/_BinaryenRefFunc(usize, usize, usize) => usize
        module = module >>> 0;
        funcName = funcName >>> 0;
        type = type >>> 0;
        return __module0._BinaryenRefFunc(module, funcName, type);
      },
      _BinaryenConstGetValueV128(expr, valueOut) {
        // src/glue/binaryen/_BinaryenConstGetValueV128(usize, usize) => void
        expr = expr >>> 0;
        valueOut = valueOut >>> 0;
        __module0._BinaryenConstGetValueV128(expr, valueOut);
      },
      _BinaryenAtomicLoad(module, bytes, offset, type, ptrExpr, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicLoad(usize, u32, u32, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        offset = offset >>> 0;
        type = type >>> 0;
        ptrExpr = ptrExpr >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicLoad(module, bytes, offset, type, ptrExpr, memoryName);
      },
      _BinaryenAtomicStore(module, bytes, offset, ptrExpr, valueExpr, type, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicStore(usize, u32, u32, usize, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        offset = offset >>> 0;
        ptrExpr = ptrExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        type = type >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicStore(module, bytes, offset, ptrExpr, valueExpr, type, memoryName);
      },
      _BinaryenAtomicRMW(module, op, bytes, offset, ptrExpr, valueExpr, type, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicRMW(usize, i32, u32, u32, usize, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        offset = offset >>> 0;
        ptrExpr = ptrExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        type = type >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicRMW(module, op, bytes, offset, ptrExpr, valueExpr, type, memoryName);
      },
      _BinaryenAtomicCmpxchg(module, bytes, offset, ptrExpr, expectedExpr, replacementExpr, type, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchg(usize, u32, u32, usize, usize, usize, usize, usize) => usize
        module = module >>> 0;
        bytes = bytes >>> 0;
        offset = offset >>> 0;
        ptrExpr = ptrExpr >>> 0;
        expectedExpr = expectedExpr >>> 0;
        replacementExpr = replacementExpr >>> 0;
        type = type >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicCmpxchg(module, bytes, offset, ptrExpr, expectedExpr, replacementExpr, type, memoryName);
      },
      _BinaryenAtomicWait(module, ptrExpr, expectedExpr, timeoutExpr, expectedType, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicWait(usize, usize, usize, usize, usize, usize) => usize
        module = module >>> 0;
        ptrExpr = ptrExpr >>> 0;
        expectedExpr = expectedExpr >>> 0;
        timeoutExpr = timeoutExpr >>> 0;
        expectedType = expectedType >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicWait(module, ptrExpr, expectedExpr, timeoutExpr, expectedType, memoryName);
      },
      _BinaryenAtomicNotify(module, ptrExpr, notifyCountExpr, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicNotify(usize, usize, usize, usize) => usize
        module = module >>> 0;
        ptrExpr = ptrExpr >>> 0;
        notifyCountExpr = notifyCountExpr >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicNotify(module, ptrExpr, notifyCountExpr, memoryName);
      },
      _BinaryenAtomicFence(module, memoryName) {
        // src/glue/binaryen/_BinaryenAtomicFence(usize, usize) => usize
        module = module >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenAtomicFence(module, memoryName);
      },
      _BinaryenMemorySize(module, memoryName, memoryIs64) {
        // src/glue/binaryen/_BinaryenMemorySize(usize, usize, bool) => usize
        module = module >>> 0;
        memoryName = memoryName >>> 0;
        memoryIs64 = memoryIs64 != 0;
        return __module0._BinaryenMemorySize(module, memoryName, memoryIs64);
      },
      _BinaryenMemoryGrow(module, delta, memoryName, memoryIs64) {
        // src/glue/binaryen/_BinaryenMemoryGrow(usize, usize, usize, bool) => usize
        module = module >>> 0;
        delta = delta >>> 0;
        memoryName = memoryName >>> 0;
        memoryIs64 = memoryIs64 != 0;
        return __module0._BinaryenMemoryGrow(module, delta, memoryName, memoryIs64);
      },
      _BinaryenMemoryCopy(module, destExpr, sourceExpr, sizeExpr, destMemoryName, sourceMemoryName) {
        // src/glue/binaryen/_BinaryenMemoryCopy(usize, usize, usize, usize, usize, usize) => usize
        module = module >>> 0;
        destExpr = destExpr >>> 0;
        sourceExpr = sourceExpr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        destMemoryName = destMemoryName >>> 0;
        sourceMemoryName = sourceMemoryName >>> 0;
        return __module0._BinaryenMemoryCopy(module, destExpr, sourceExpr, sizeExpr, destMemoryName, sourceMemoryName);
      },
      _BinaryenMemoryFill(module, destExpr, valueExpr, sizeExpr, memoryName) {
        // src/glue/binaryen/_BinaryenMemoryFill(usize, usize, usize, usize, usize) => usize
        module = module >>> 0;
        destExpr = destExpr >>> 0;
        valueExpr = valueExpr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenMemoryFill(module, destExpr, valueExpr, sizeExpr, memoryName);
      },
      _BinaryenI31Get(module, i31Expr, signed) {
        // src/glue/binaryen/_BinaryenI31Get(usize, usize, bool) => usize
        module = module >>> 0;
        i31Expr = i31Expr >>> 0;
        signed = signed != 0;
        return __module0._BinaryenI31Get(module, i31Expr, signed);
      },
      _BinaryenSIMDReplace(module, op, vecEpr, index, valueExpr) {
        // src/glue/binaryen/_BinaryenSIMDReplace(usize, i32, usize, u8, usize) => usize
        module = module >>> 0;
        vecEpr = vecEpr >>> 0;
        valueExpr = valueExpr >>> 0;
        return __module0._BinaryenSIMDReplace(module, op, vecEpr, index, valueExpr);
      },
      _BinaryenSIMDExtract(module, op, vecExpr, index) {
        // src/glue/binaryen/_BinaryenSIMDExtract(usize, i32, usize, u8) => usize
        module = module >>> 0;
        vecExpr = vecExpr >>> 0;
        return __module0._BinaryenSIMDExtract(module, op, vecExpr, index);
      },
      _BinaryenSIMDShuffle(module, leftExpr, rightExpr, mask) {
        // src/glue/binaryen/_BinaryenSIMDShuffle(usize, usize, usize, usize) => usize
        module = module >>> 0;
        leftExpr = leftExpr >>> 0;
        rightExpr = rightExpr >>> 0;
        mask = mask >>> 0;
        return __module0._BinaryenSIMDShuffle(module, leftExpr, rightExpr, mask);
      },
      _BinaryenSIMDLoad(module, op, offset, align, ptrExpr, memoryName) {
        // src/glue/binaryen/_BinaryenSIMDLoad(usize, i32, u32, u32, usize, usize) => usize
        module = module >>> 0;
        offset = offset >>> 0;
        align = align >>> 0;
        ptrExpr = ptrExpr >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenSIMDLoad(module, op, offset, align, ptrExpr, memoryName);
      },
      _BinaryenSIMDLoadStoreLane(module, op, offset, align, index, ptr, vec, memoryName) {
        // src/glue/binaryen/_BinaryenSIMDLoadStoreLane(usize, i32, u32, u32, u8, usize, usize, usize) => usize
        module = module >>> 0;
        offset = offset >>> 0;
        align = align >>> 0;
        ptr = ptr >>> 0;
        vec = vec >>> 0;
        memoryName = memoryName >>> 0;
        return __module0._BinaryenSIMDLoadStoreLane(module, op, offset, align, index, ptr, vec, memoryName);
      },
      _BinaryenSIMDShift(module, op, vecExpr, shiftExpr) {
        // src/glue/binaryen/_BinaryenSIMDShift(usize, i32, usize, usize) => usize
        module = module >>> 0;
        vecExpr = vecExpr >>> 0;
        shiftExpr = shiftExpr >>> 0;
        return __module0._BinaryenSIMDShift(module, op, vecExpr, shiftExpr);
      },
      _BinaryenSIMDTernary(module, op, aExpr, bExpr, cExpr) {
        // src/glue/binaryen/_BinaryenSIMDTernary(usize, i32, usize, usize, usize) => usize
        module = module >>> 0;
        aExpr = aExpr >>> 0;
        bExpr = bExpr >>> 0;
        cExpr = cExpr >>> 0;
        return __module0._BinaryenSIMDTernary(module, op, aExpr, bExpr, cExpr);
      },
      _BinaryenSetTypeSystem(typeSystem) {
        // src/glue/binaryen/_BinaryenSetTypeSystem(u32) => void
        typeSystem = typeSystem >>> 0;
        __module0._BinaryenSetTypeSystem(typeSystem);
      },
      _BinaryenSetLowMemoryUnused(on) {
        // src/glue/binaryen/_BinaryenSetLowMemoryUnused(bool) => void
        on = on != 0;
        __module0._BinaryenSetLowMemoryUnused(on);
      },
      _BinaryenModuleSetFeatures(module, featureFlags) {
        // src/glue/binaryen/_BinaryenModuleSetFeatures(usize, u32) => void
        module = module >>> 0;
        featureFlags = featureFlags >>> 0;
        __module0._BinaryenModuleSetFeatures(module, featureFlags);
      },
      _BinaryenGetExport(module, externalName) {
        // src/glue/binaryen/_BinaryenGetExport(usize, usize) => usize
        module = module >>> 0;
        externalName = externalName >>> 0;
        return __module0._BinaryenGetExport(module, externalName);
      },
      _BinaryenAddFunctionExport(module, internalName, externalName) {
        // src/glue/binaryen/_BinaryenAddFunctionExport(usize, usize, usize) => usize
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalName = externalName >>> 0;
        return __module0._BinaryenAddFunctionExport(module, internalName, externalName);
      },
      _BinaryenAddGlobalExport(module, internalName, externalName) {
        // src/glue/binaryen/_BinaryenAddGlobalExport(usize, usize, usize) => usize
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalName = externalName >>> 0;
        return __module0._BinaryenAddGlobalExport(module, internalName, externalName);
      },
      _BinaryenRemoveFunction(module, name) {
        // src/glue/binaryen/_BinaryenRemoveFunction(usize, usize) => void
        module = module >>> 0;
        name = name >>> 0;
        __module0._BinaryenRemoveFunction(module, name);
      },
      _BinaryenRemoveGlobal(module, name) {
        // src/glue/binaryen/_BinaryenRemoveGlobal(usize, usize) => void
        module = module >>> 0;
        name = name >>> 0;
        __module0._BinaryenRemoveGlobal(module, name);
      },
      _BinaryenSetMemory(module, initial, maximum, exportName, segments, segmentPassive, segmentOffsets, segmentSizes, numSegments, shared, memory64, name) {
        // src/glue/binaryen/_BinaryenSetMemory(usize, u32, u32, usize, usize, usize, usize, usize, u32, bool, bool, usize) => void
        module = module >>> 0;
        initial = initial >>> 0;
        maximum = maximum >>> 0;
        exportName = exportName >>> 0;
        segments = segments >>> 0;
        segmentPassive = segmentPassive >>> 0;
        segmentOffsets = segmentOffsets >>> 0;
        segmentSizes = segmentSizes >>> 0;
        numSegments = numSegments >>> 0;
        shared = shared != 0;
        memory64 = memory64 != 0;
        name = name >>> 0;
        __module0._BinaryenSetMemory(module, initial, maximum, exportName, segments, segmentPassive, segmentOffsets, segmentSizes, numSegments, shared, memory64, name);
      },
      _BinaryenAddMemoryImport(module, internalName, externalModuleName, externalBaseName, shared) {
        // src/glue/binaryen/_BinaryenAddMemoryImport(usize, usize, usize, usize, bool) => void
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalModuleName = externalModuleName >>> 0;
        externalBaseName = externalBaseName >>> 0;
        shared = shared != 0;
        __module0._BinaryenAddMemoryImport(module, internalName, externalModuleName, externalBaseName, shared);
      },
      _BinaryenAddTableImport(module, internalName, externalModuleName, externalBaseName) {
        // src/glue/binaryen/_BinaryenAddTableImport(usize, usize, usize, usize) => void
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalModuleName = externalModuleName >>> 0;
        externalBaseName = externalBaseName >>> 0;
        __module0._BinaryenAddTableImport(module, internalName, externalModuleName, externalBaseName);
      },
      _BinaryenAddTableExport(module, internalName, externalName) {
        // src/glue/binaryen/_BinaryenAddTableExport(usize, usize, usize) => usize
        module = module >>> 0;
        internalName = internalName >>> 0;
        externalName = externalName >>> 0;
        return __module0._BinaryenAddTableExport(module, internalName, externalName);
      },
      _BinaryenSetPassArgument(key, value) {
        // src/glue/binaryen/_BinaryenSetPassArgument(usize, usize) => void
        key = key >>> 0;
        value = value >>> 0;
        __module0._BinaryenSetPassArgument(key, value);
      },
      _BinaryenGetTable(module, name) {
        // src/glue/binaryen/_BinaryenGetTable(usize, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        return __module0._BinaryenGetTable(module, name);
      },
      _BinaryenAddTable(module, name, initial, maximum, type) {
        // src/glue/binaryen/_BinaryenAddTable(usize, usize, u32, u32, usize) => usize
        module = module >>> 0;
        name = name >>> 0;
        initial = initial >>> 0;
        maximum = maximum >>> 0;
        type = type >>> 0;
        return __module0._BinaryenAddTable(module, name, initial, maximum, type);
      },
      _BinaryenTableSetInitial(table, initial) {
        // src/glue/binaryen/_BinaryenTableSetInitial(usize, u32) => void
        table = table >>> 0;
        initial = initial >>> 0;
        __module0._BinaryenTableSetInitial(table, initial);
      },
      _BinaryenTableSetMax(table, max) {
        // src/glue/binaryen/_BinaryenTableSetMax(usize, u32) => void
        table = table >>> 0;
        max = max >>> 0;
        __module0._BinaryenTableSetMax(table, max);
      },
      _BinaryenAddActiveElementSegment(module, table, name, funcNames, numFuncNames, offset) {
        // src/glue/binaryen/_BinaryenAddActiveElementSegment(usize, usize, usize, usize, u32, usize) => usize
        module = module >>> 0;
        table = table >>> 0;
        name = name >>> 0;
        funcNames = funcNames >>> 0;
        numFuncNames = numFuncNames >>> 0;
        offset = offset >>> 0;
        return __module0._BinaryenAddActiveElementSegment(module, table, name, funcNames, numFuncNames, offset);
      },
      _BinaryenSetStart(module, start) {
        // src/glue/binaryen/_BinaryenSetStart(usize, usize) => void
        module = module >>> 0;
        start = start >>> 0;
        __module0._BinaryenSetStart(module, start);
      },
      _BinaryenGetNumFunctions(module) {
        // src/glue/binaryen/_BinaryenGetNumFunctions(usize) => u32
        module = module >>> 0;
        return __module0._BinaryenGetNumFunctions(module);
      },
      _BinaryenGetFunctionByIndex(module, index) {
        // src/glue/binaryen/_BinaryenGetFunctionByIndex(usize, u32) => usize
        module = module >>> 0;
        index = index >>> 0;
        return __module0._BinaryenGetFunctionByIndex(module, index);
      },
      _BinaryenFunctionGetBody(func) {
        // src/glue/binaryen/_BinaryenFunctionGetBody(usize) => usize
        func = func >>> 0;
        return __module0._BinaryenFunctionGetBody(func);
      },
      _BinaryenLoopGetName(expr) {
        // src/glue/binaryen/_BinaryenLoopGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenLoopGetName(expr);
      },
      _BinaryenLoopGetBody(expr) {
        // src/glue/binaryen/_BinaryenLoopGetBody(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenLoopGetBody(expr);
      },
      _BinaryenBreakGetName(expr) {
        // src/glue/binaryen/_BinaryenBreakGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBreakGetName(expr);
      },
      _BinaryenBreakGetCondition(expr) {
        // src/glue/binaryen/_BinaryenBreakGetCondition(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBreakGetCondition(expr);
      },
      _BinaryenBreakGetValue(expr) {
        // src/glue/binaryen/_BinaryenBreakGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBreakGetValue(expr);
      },
      _BinaryenSwitchGetDefaultName(expr) {
        // src/glue/binaryen/_BinaryenSwitchGetDefaultName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSwitchGetDefaultName(expr);
      },
      _BinaryenSwitchGetNumNames(expr) {
        // src/glue/binaryen/_BinaryenSwitchGetNumNames(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenSwitchGetNumNames(expr);
      },
      _BinaryenSwitchGetNameAt(expr, index) {
        // src/glue/binaryen/_BinaryenSwitchGetNameAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenSwitchGetNameAt(expr, index);
      },
      _BinaryenSwitchGetCondition(expr) {
        // src/glue/binaryen/_BinaryenSwitchGetCondition(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSwitchGetCondition(expr);
      },
      _BinaryenSwitchGetValue(expr) {
        // src/glue/binaryen/_BinaryenSwitchGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSwitchGetValue(expr);
      },
      _BinaryenCallIndirectGetTarget(expr) {
        // src/glue/binaryen/_BinaryenCallIndirectGetTarget(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenCallIndirectGetTarget(expr);
      },
      _BinaryenCallIndirectGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenCallIndirectGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenCallIndirectGetNumOperands(expr);
      },
      _BinaryenCallIndirectGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenCallIndirectGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenCallIndirectGetOperandAt(expr, index);
      },
      _BinaryenGlobalSetGetName(expr) {
        // src/glue/binaryen/_BinaryenGlobalSetGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenGlobalSetGetName(expr);
      },
      _BinaryenGlobalSetGetValue(expr) {
        // src/glue/binaryen/_BinaryenGlobalSetGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenGlobalSetGetValue(expr);
      },
      _BinaryenLoadGetPtr(expr) {
        // src/glue/binaryen/_BinaryenLoadGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenLoadGetPtr(expr);
      },
      _BinaryenStoreGetPtr(expr) {
        // src/glue/binaryen/_BinaryenStoreGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStoreGetPtr(expr);
      },
      _BinaryenStoreGetValue(expr) {
        // src/glue/binaryen/_BinaryenStoreGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStoreGetValue(expr);
      },
      _BinaryenSelectGetCondition(expr) {
        // src/glue/binaryen/_BinaryenSelectGetCondition(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSelectGetCondition(expr);
      },
      _BinaryenDropGetValue(expr) {
        // src/glue/binaryen/_BinaryenDropGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenDropGetValue(expr);
      },
      _BinaryenReturnGetValue(expr) {
        // src/glue/binaryen/_BinaryenReturnGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenReturnGetValue(expr);
      },
      _BinaryenMemoryGrowGetDelta(expr) {
        // src/glue/binaryen/_BinaryenMemoryGrowGetDelta(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryGrowGetDelta(expr);
      },
      _BinaryenAtomicRMWGetPtr(expr) {
        // src/glue/binaryen/_BinaryenAtomicRMWGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicRMWGetPtr(expr);
      },
      _BinaryenAtomicRMWGetValue(expr) {
        // src/glue/binaryen/_BinaryenAtomicRMWGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicRMWGetValue(expr);
      },
      _BinaryenAtomicCmpxchgGetPtr(expr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicCmpxchgGetPtr(expr);
      },
      _BinaryenAtomicCmpxchgGetExpected(expr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgGetExpected(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicCmpxchgGetExpected(expr);
      },
      _BinaryenAtomicCmpxchgGetReplacement(expr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgGetReplacement(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicCmpxchgGetReplacement(expr);
      },
      _BinaryenAtomicWaitGetPtr(expr) {
        // src/glue/binaryen/_BinaryenAtomicWaitGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicWaitGetPtr(expr);
      },
      _BinaryenAtomicWaitGetExpected(expr) {
        // src/glue/binaryen/_BinaryenAtomicWaitGetExpected(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicWaitGetExpected(expr);
      },
      _BinaryenAtomicWaitGetTimeout(expr) {
        // src/glue/binaryen/_BinaryenAtomicWaitGetTimeout(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicWaitGetTimeout(expr);
      },
      _BinaryenAtomicNotifyGetPtr(expr) {
        // src/glue/binaryen/_BinaryenAtomicNotifyGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicNotifyGetPtr(expr);
      },
      _BinaryenAtomicNotifyGetNotifyCount(expr) {
        // src/glue/binaryen/_BinaryenAtomicNotifyGetNotifyCount(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenAtomicNotifyGetNotifyCount(expr);
      },
      _BinaryenSIMDExtractGetVec(expr) {
        // src/glue/binaryen/_BinaryenSIMDExtractGetVec(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDExtractGetVec(expr);
      },
      _BinaryenSIMDReplaceGetVec(expr) {
        // src/glue/binaryen/_BinaryenSIMDReplaceGetVec(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDReplaceGetVec(expr);
      },
      _BinaryenSIMDReplaceGetValue(expr) {
        // src/glue/binaryen/_BinaryenSIMDReplaceGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDReplaceGetValue(expr);
      },
      _BinaryenSIMDShuffleGetLeft(expr) {
        // src/glue/binaryen/_BinaryenSIMDShuffleGetLeft(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDShuffleGetLeft(expr);
      },
      _BinaryenSIMDShuffleGetRight(expr) {
        // src/glue/binaryen/_BinaryenSIMDShuffleGetRight(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDShuffleGetRight(expr);
      },
      _BinaryenSIMDTernaryGetA(expr) {
        // src/glue/binaryen/_BinaryenSIMDTernaryGetA(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDTernaryGetA(expr);
      },
      _BinaryenSIMDTernaryGetB(expr) {
        // src/glue/binaryen/_BinaryenSIMDTernaryGetB(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDTernaryGetB(expr);
      },
      _BinaryenSIMDTernaryGetC(expr) {
        // src/glue/binaryen/_BinaryenSIMDTernaryGetC(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDTernaryGetC(expr);
      },
      _BinaryenSIMDShiftGetVec(expr) {
        // src/glue/binaryen/_BinaryenSIMDShiftGetVec(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDShiftGetVec(expr);
      },
      _BinaryenSIMDShiftGetShift(expr) {
        // src/glue/binaryen/_BinaryenSIMDShiftGetShift(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDShiftGetShift(expr);
      },
      _BinaryenSIMDLoadGetPtr(expr) {
        // src/glue/binaryen/_BinaryenSIMDLoadGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDLoadGetPtr(expr);
      },
      _BinaryenSIMDLoadStoreLaneGetPtr(expr) {
        // src/glue/binaryen/_BinaryenSIMDLoadStoreLaneGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDLoadStoreLaneGetPtr(expr);
      },
      _BinaryenSIMDLoadStoreLaneGetVec(expr) {
        // src/glue/binaryen/_BinaryenSIMDLoadStoreLaneGetVec(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenSIMDLoadStoreLaneGetVec(expr);
      },
      _BinaryenMemoryInitGetDest(expr) {
        // src/glue/binaryen/_BinaryenMemoryInitGetDest(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryInitGetDest(expr);
      },
      _BinaryenMemoryInitGetOffset(expr) {
        // src/glue/binaryen/_BinaryenMemoryInitGetOffset(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryInitGetOffset(expr);
      },
      _BinaryenMemoryInitGetSize(expr) {
        // src/glue/binaryen/_BinaryenMemoryInitGetSize(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryInitGetSize(expr);
      },
      _BinaryenMemoryCopyGetDest(expr) {
        // src/glue/binaryen/_BinaryenMemoryCopyGetDest(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryCopyGetDest(expr);
      },
      _BinaryenMemoryCopyGetSource(expr) {
        // src/glue/binaryen/_BinaryenMemoryCopyGetSource(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryCopyGetSource(expr);
      },
      _BinaryenMemoryCopyGetSize(expr) {
        // src/glue/binaryen/_BinaryenMemoryCopyGetSize(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryCopyGetSize(expr);
      },
      _BinaryenMemoryFillGetDest(expr) {
        // src/glue/binaryen/_BinaryenMemoryFillGetDest(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryFillGetDest(expr);
      },
      _BinaryenMemoryFillGetValue(expr) {
        // src/glue/binaryen/_BinaryenMemoryFillGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryFillGetValue(expr);
      },
      _BinaryenMemoryFillGetSize(expr) {
        // src/glue/binaryen/_BinaryenMemoryFillGetSize(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenMemoryFillGetSize(expr);
      },
      _BinaryenRefIsNullGetValue(expr) {
        // src/glue/binaryen/_BinaryenRefIsNullGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefIsNullGetValue(expr);
      },
      _BinaryenRefFuncGetFunc(expr) {
        // src/glue/binaryen/_BinaryenRefFuncGetFunc(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefFuncGetFunc(expr);
      },
      _BinaryenRefEqGetLeft(expr) {
        // src/glue/binaryen/_BinaryenRefEqGetLeft(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefEqGetLeft(expr);
      },
      _BinaryenRefEqGetRight(expr) {
        // src/glue/binaryen/_BinaryenRefEqGetRight(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefEqGetRight(expr);
      },
      _BinaryenTryGetBody(expr) {
        // src/glue/binaryen/_BinaryenTryGetBody(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenTryGetBody(expr);
      },
      _BinaryenTryGetNumCatchBodies(expr) {
        // src/glue/binaryen/_BinaryenTryGetNumCatchBodies(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenTryGetNumCatchBodies(expr);
      },
      _BinaryenTryGetCatchBodyAt(expr, index) {
        // src/glue/binaryen/_BinaryenTryGetCatchBodyAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenTryGetCatchBodyAt(expr, index);
      },
      _BinaryenThrowGetTag(expr) {
        // src/glue/binaryen/_BinaryenThrowGetTag(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenThrowGetTag(expr);
      },
      _BinaryenThrowGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenThrowGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenThrowGetNumOperands(expr);
      },
      _BinaryenThrowGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenThrowGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenThrowGetOperandAt(expr, index);
      },
      _BinaryenTupleMakeGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenTupleMakeGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenTupleMakeGetNumOperands(expr);
      },
      _BinaryenTupleMakeGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenTupleMakeGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenTupleMakeGetOperandAt(expr, index);
      },
      _BinaryenTupleExtractGetTuple(expr) {
        // src/glue/binaryen/_BinaryenTupleExtractGetTuple(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenTupleExtractGetTuple(expr);
      },
      _BinaryenI31NewGetValue(expr) {
        // src/glue/binaryen/_BinaryenI31NewGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenI31NewGetValue(expr);
      },
      _BinaryenI31GetGetI31(expr) {
        // src/glue/binaryen/_BinaryenI31GetGetI31(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenI31GetGetI31(expr);
      },
      _BinaryenCallRefGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenCallRefGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenCallRefGetNumOperands(expr);
      },
      _BinaryenCallRefGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenCallRefGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenCallRefGetOperandAt(expr, index);
      },
      _BinaryenCallRefGetTarget(expr) {
        // src/glue/binaryen/_BinaryenCallRefGetTarget(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenCallRefGetTarget(expr);
      },
      _BinaryenRefTestGetRef(expr) {
        // src/glue/binaryen/_BinaryenRefTestGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefTestGetRef(expr);
      },
      _BinaryenRefCastGetRef(expr) {
        // src/glue/binaryen/_BinaryenRefCastGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefCastGetRef(expr);
      },
      _BinaryenBrOnGetName(expr) {
        // src/glue/binaryen/_BinaryenBrOnGetName(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBrOnGetName(expr);
      },
      _BinaryenBrOnGetRef(expr) {
        // src/glue/binaryen/_BinaryenBrOnGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenBrOnGetRef(expr);
      },
      _BinaryenStructNewGetNumOperands(expr) {
        // src/glue/binaryen/_BinaryenStructNewGetNumOperands(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenStructNewGetNumOperands(expr);
      },
      _BinaryenStructNewGetOperandAt(expr, index) {
        // src/glue/binaryen/_BinaryenStructNewGetOperandAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenStructNewGetOperandAt(expr, index);
      },
      _BinaryenStructGetGetRef(expr) {
        // src/glue/binaryen/_BinaryenStructGetGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStructGetGetRef(expr);
      },
      _BinaryenStructGetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenStructGetGetIndex(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenStructGetGetIndex(expr);
      },
      _BinaryenStructSetGetRef(expr) {
        // src/glue/binaryen/_BinaryenStructSetGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStructSetGetRef(expr);
      },
      _BinaryenStructSetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenStructSetGetIndex(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenStructSetGetIndex(expr);
      },
      _BinaryenStructSetGetValue(expr) {
        // src/glue/binaryen/_BinaryenStructSetGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStructSetGetValue(expr);
      },
      _BinaryenArrayNewGetSize(expr) {
        // src/glue/binaryen/_BinaryenArrayNewGetSize(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayNewGetSize(expr);
      },
      _BinaryenArrayNewGetInit(expr) {
        // src/glue/binaryen/_BinaryenArrayNewGetInit(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayNewGetInit(expr);
      },
      _BinaryenArrayNewFixedGetNumValues(expr) {
        // src/glue/binaryen/_BinaryenArrayNewFixedGetNumValues(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenArrayNewFixedGetNumValues(expr);
      },
      _BinaryenArrayNewFixedGetValueAt(expr, index) {
        // src/glue/binaryen/_BinaryenArrayNewFixedGetValueAt(usize, u32) => usize
        expr = expr >>> 0;
        index = index >>> 0;
        return __module0._BinaryenArrayNewFixedGetValueAt(expr, index);
      },
      _BinaryenArrayGetGetRef(expr) {
        // src/glue/binaryen/_BinaryenArrayGetGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayGetGetRef(expr);
      },
      _BinaryenArrayGetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenArrayGetGetIndex(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayGetGetIndex(expr);
      },
      _BinaryenArraySetGetRef(expr) {
        // src/glue/binaryen/_BinaryenArraySetGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArraySetGetRef(expr);
      },
      _BinaryenArraySetGetIndex(expr) {
        // src/glue/binaryen/_BinaryenArraySetGetIndex(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArraySetGetIndex(expr);
      },
      _BinaryenArraySetGetValue(expr) {
        // src/glue/binaryen/_BinaryenArraySetGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArraySetGetValue(expr);
      },
      _BinaryenArrayLenGetRef(expr) {
        // src/glue/binaryen/_BinaryenArrayLenGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayLenGetRef(expr);
      },
      _BinaryenArrayCopyGetDestRef(expr) {
        // src/glue/binaryen/_BinaryenArrayCopyGetDestRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayCopyGetDestRef(expr);
      },
      _BinaryenArrayCopyGetDestIndex(expr) {
        // src/glue/binaryen/_BinaryenArrayCopyGetDestIndex(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayCopyGetDestIndex(expr);
      },
      _BinaryenArrayCopyGetSrcRef(expr) {
        // src/glue/binaryen/_BinaryenArrayCopyGetSrcRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayCopyGetSrcRef(expr);
      },
      _BinaryenArrayCopyGetSrcIndex(expr) {
        // src/glue/binaryen/_BinaryenArrayCopyGetSrcIndex(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayCopyGetSrcIndex(expr);
      },
      _BinaryenArrayCopyGetLength(expr) {
        // src/glue/binaryen/_BinaryenArrayCopyGetLength(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenArrayCopyGetLength(expr);
      },
      _BinaryenRefAsGetValue(expr) {
        // src/glue/binaryen/_BinaryenRefAsGetValue(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenRefAsGetValue(expr);
      },
      _BinaryenStringNewGetPtr(expr) {
        // src/glue/binaryen/_BinaryenStringNewGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringNewGetPtr(expr);
      },
      _BinaryenStringNewGetLength(expr) {
        // src/glue/binaryen/_BinaryenStringNewGetLength(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringNewGetLength(expr);
      },
      _BinaryenStringNewGetStart(expr) {
        // src/glue/binaryen/_BinaryenStringNewGetStart(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringNewGetStart(expr);
      },
      _BinaryenStringNewGetEnd(expr) {
        // src/glue/binaryen/_BinaryenStringNewGetEnd(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringNewGetEnd(expr);
      },
      _BinaryenStringMeasureGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringMeasureGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringMeasureGetRef(expr);
      },
      _BinaryenStringEncodeGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringEncodeGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringEncodeGetRef(expr);
      },
      _BinaryenStringEncodeGetPtr(expr) {
        // src/glue/binaryen/_BinaryenStringEncodeGetPtr(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringEncodeGetPtr(expr);
      },
      _BinaryenStringEncodeGetStart(expr) {
        // src/glue/binaryen/_BinaryenStringEncodeGetStart(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringEncodeGetStart(expr);
      },
      _BinaryenStringConcatGetLeft(expr) {
        // src/glue/binaryen/_BinaryenStringConcatGetLeft(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringConcatGetLeft(expr);
      },
      _BinaryenStringConcatGetRight(expr) {
        // src/glue/binaryen/_BinaryenStringConcatGetRight(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringConcatGetRight(expr);
      },
      _BinaryenStringEqGetLeft(expr) {
        // src/glue/binaryen/_BinaryenStringEqGetLeft(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringEqGetLeft(expr);
      },
      _BinaryenStringEqGetRight(expr) {
        // src/glue/binaryen/_BinaryenStringEqGetRight(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringEqGetRight(expr);
      },
      _BinaryenStringAsGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringAsGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringAsGetRef(expr);
      },
      _BinaryenStringWTF8AdvanceGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringWTF8AdvanceGetRef(expr);
      },
      _BinaryenStringWTF8AdvanceGetPos(expr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceGetPos(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringWTF8AdvanceGetPos(expr);
      },
      _BinaryenStringWTF8AdvanceGetBytes(expr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceGetBytes(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringWTF8AdvanceGetBytes(expr);
      },
      _BinaryenStringWTF16GetGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringWTF16GetGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringWTF16GetGetRef(expr);
      },
      _BinaryenStringWTF16GetGetPos(expr) {
        // src/glue/binaryen/_BinaryenStringWTF16GetGetPos(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringWTF16GetGetPos(expr);
      },
      _BinaryenStringIterNextGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringIterNextGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringIterNextGetRef(expr);
      },
      _BinaryenStringIterMoveGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringIterMoveGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringIterMoveGetRef(expr);
      },
      _BinaryenStringIterMoveGetNum(expr) {
        // src/glue/binaryen/_BinaryenStringIterMoveGetNum(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringIterMoveGetNum(expr);
      },
      _BinaryenStringSliceWTFGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringSliceWTFGetRef(expr);
      },
      _BinaryenStringSliceWTFGetStart(expr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFGetStart(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringSliceWTFGetStart(expr);
      },
      _BinaryenStringSliceWTFGetEnd(expr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFGetEnd(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringSliceWTFGetEnd(expr);
      },
      _BinaryenStringSliceIterGetRef(expr) {
        // src/glue/binaryen/_BinaryenStringSliceIterGetRef(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringSliceIterGetRef(expr);
      },
      _BinaryenStringSliceIterGetNum(expr) {
        // src/glue/binaryen/_BinaryenStringSliceIterGetNum(usize) => usize
        expr = expr >>> 0;
        return __module0._BinaryenStringSliceIterGetNum(expr);
      },
      _BinaryenGetNumGlobals(module) {
        // src/glue/binaryen/_BinaryenGetNumGlobals(usize) => u32
        module = module >>> 0;
        return __module0._BinaryenGetNumGlobals(module);
      },
      _BinaryenGetGlobalByIndex(module, index) {
        // src/glue/binaryen/_BinaryenGetGlobalByIndex(usize, u32) => usize
        module = module >>> 0;
        index = index >>> 0;
        return __module0._BinaryenGetGlobalByIndex(module, index);
      },
      _BinaryenGlobalGetInitExpr(global) {
        // src/glue/binaryen/_BinaryenGlobalGetInitExpr(usize) => usize
        global = global >>> 0;
        return __module0._BinaryenGlobalGetInitExpr(global);
      },
      _BinaryenFunctionGetNumLocals(func) {
        // src/glue/binaryen/_BinaryenFunctionGetNumLocals(usize) => u32
        func = func >>> 0;
        return __module0._BinaryenFunctionGetNumLocals(func);
      },
      _BinaryenFunctionSetBody(func, bodyExpr) {
        // src/glue/binaryen/_BinaryenFunctionSetBody(usize, usize) => void
        func = func >>> 0;
        bodyExpr = bodyExpr >>> 0;
        __module0._BinaryenFunctionSetBody(func, bodyExpr);
      },
      _BinaryenFunctionGetName(func) {
        // src/glue/binaryen/_BinaryenFunctionGetName(usize) => usize
        func = func >>> 0;
        return __module0._BinaryenFunctionGetName(func);
      },
      _BinaryenFunctionGetParams(func) {
        // src/glue/binaryen/_BinaryenFunctionGetParams(usize) => usize
        func = func >>> 0;
        return __module0._BinaryenFunctionGetParams(func);
      },
      _BinaryenFunctionGetResults(func) {
        // src/glue/binaryen/_BinaryenFunctionGetResults(usize) => usize
        func = func >>> 0;
        return __module0._BinaryenFunctionGetResults(func);
      },
      _BinaryenFunctionGetNumVars(func) {
        // src/glue/binaryen/_BinaryenFunctionGetNumVars(usize) => u32
        func = func >>> 0;
        return __module0._BinaryenFunctionGetNumVars(func);
      },
      _BinaryenFunctionGetVar(func, index) {
        // src/glue/binaryen/_BinaryenFunctionGetVar(usize, u32) => usize
        func = func >>> 0;
        index = index >>> 0;
        return __module0._BinaryenFunctionGetVar(func, index);
      },
      _BinaryenExportGetKind(ref) {
        // src/glue/binaryen/_BinaryenExportGetKind(usize) => u32
        ref = ref >>> 0;
        return __module0._BinaryenExportGetKind(ref);
      },
      _BinaryenExportGetValue(ref) {
        // src/glue/binaryen/_BinaryenExportGetValue(usize) => usize
        ref = ref >>> 0;
        return __module0._BinaryenExportGetValue(ref);
      },
      _BinaryenExportGetName(ref) {
        // src/glue/binaryen/_BinaryenExportGetName(usize) => usize
        ref = ref >>> 0;
        return __module0._BinaryenExportGetName(ref);
      },
      _BinaryenTypeArity(type) {
        // src/glue/binaryen/_BinaryenTypeArity(usize) => u32
        type = type >>> 0;
        return __module0._BinaryenTypeArity(type);
      },
      _BinaryenTypeExpand(type, typesOut) {
        // src/glue/binaryen/_BinaryenTypeExpand(usize, usize) => void
        type = type >>> 0;
        typesOut = typesOut >>> 0;
        __module0._BinaryenTypeExpand(type, typesOut);
      },
      _BinaryenRemoveExport(module, externalName) {
        // src/glue/binaryen/_BinaryenRemoveExport(usize, usize) => void
        module = module >>> 0;
        externalName = externalName >>> 0;
        __module0._BinaryenRemoveExport(module, externalName);
      },
      _BinaryenModuleValidate(module) {
        // src/glue/binaryen/_BinaryenModuleValidate(usize) => i32
        module = module >>> 0;
        return __module0._BinaryenModuleValidate(module);
      },
      _BinaryenSetDebugInfo(on) {
        // src/glue/binaryen/_BinaryenSetDebugInfo(bool) => void
        on = on != 0;
        __module0._BinaryenSetDebugInfo(on);
      },
      _BinaryenSetZeroFilledMemory(on) {
        // src/glue/binaryen/_BinaryenSetZeroFilledMemory(bool) => void
        on = on != 0;
        __module0._BinaryenSetZeroFilledMemory(on);
      },
      _BinaryenSetFastMath(on) {
        // src/glue/binaryen/_BinaryenSetFastMath(bool) => void
        on = on != 0;
        __module0._BinaryenSetFastMath(on);
      },
      _BinaryenSetAlwaysInlineMaxSize(size) {
        // src/glue/binaryen/_BinaryenSetAlwaysInlineMaxSize(u32) => void
        size = size >>> 0;
        __module0._BinaryenSetAlwaysInlineMaxSize(size);
      },
      _BinaryenSetFlexibleInlineMaxSize(size) {
        // src/glue/binaryen/_BinaryenSetFlexibleInlineMaxSize(u32) => void
        size = size >>> 0;
        __module0._BinaryenSetFlexibleInlineMaxSize(size);
      },
      _BinaryenSetOneCallerInlineMaxSize(size) {
        // src/glue/binaryen/_BinaryenSetOneCallerInlineMaxSize(u32) => void
        size = size >>> 0;
        __module0._BinaryenSetOneCallerInlineMaxSize(size);
      },
      _BinaryenSetAllowInliningFunctionsWithLoops(enabled) {
        // src/glue/binaryen/_BinaryenSetAllowInliningFunctionsWithLoops(bool) => void
        enabled = enabled != 0;
        __module0._BinaryenSetAllowInliningFunctionsWithLoops(enabled);
      },
      _BinaryenGetLowMemoryUnused() {
        // src/glue/binaryen/_BinaryenGetLowMemoryUnused() => bool
        return __module0._BinaryenGetLowMemoryUnused() ? 1 : 0;
      },
      _BinaryenFunctionRunPasses(func, module, passes, numPasses) {
        // src/glue/binaryen/_BinaryenFunctionRunPasses(usize, usize, usize, u32) => void
        func = func >>> 0;
        module = module >>> 0;
        passes = passes >>> 0;
        numPasses = numPasses >>> 0;
        __module0._BinaryenFunctionRunPasses(func, module, passes, numPasses);
      },
      _BinaryenModuleRunPasses(module, passes, numPasses) {
        // src/glue/binaryen/_BinaryenModuleRunPasses(usize, usize, u32) => void
        module = module >>> 0;
        passes = passes >>> 0;
        numPasses = numPasses >>> 0;
        __module0._BinaryenModuleRunPasses(module, passes, numPasses);
      },
      _BinaryenCallSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenCallSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenCallSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenCallIndirectSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenCallIndirectSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenCallIndirectSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenLocalSetSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenLocalSetSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenLocalSetSetValue(expr, valueExpr);
      },
      _BinaryenBlockSetChildAt(expr, index, childExpr) {
        // src/glue/binaryen/_BinaryenBlockSetChildAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        childExpr = childExpr >>> 0;
        __module0._BinaryenBlockSetChildAt(expr, index, childExpr);
      },
      _BinaryenIfSetCondition(expr, conditionExpr) {
        // src/glue/binaryen/_BinaryenIfSetCondition(usize, usize) => void
        expr = expr >>> 0;
        conditionExpr = conditionExpr >>> 0;
        __module0._BinaryenIfSetCondition(expr, conditionExpr);
      },
      _BinaryenIfSetIfTrue(expr, ifTrueExpr) {
        // src/glue/binaryen/_BinaryenIfSetIfTrue(usize, usize) => void
        expr = expr >>> 0;
        ifTrueExpr = ifTrueExpr >>> 0;
        __module0._BinaryenIfSetIfTrue(expr, ifTrueExpr);
      },
      _BinaryenIfSetIfFalse(expr, ifFalseExpr) {
        // src/glue/binaryen/_BinaryenIfSetIfFalse(usize, usize) => void
        expr = expr >>> 0;
        ifFalseExpr = ifFalseExpr >>> 0;
        __module0._BinaryenIfSetIfFalse(expr, ifFalseExpr);
      },
      _BinaryenLoopSetBody(expr, bodyExpr) {
        // src/glue/binaryen/_BinaryenLoopSetBody(usize, usize) => void
        expr = expr >>> 0;
        bodyExpr = bodyExpr >>> 0;
        __module0._BinaryenLoopSetBody(expr, bodyExpr);
      },
      _BinaryenBreakSetCondition(expr, conditionExpr) {
        // src/glue/binaryen/_BinaryenBreakSetCondition(usize, usize) => void
        expr = expr >>> 0;
        conditionExpr = conditionExpr >>> 0;
        __module0._BinaryenBreakSetCondition(expr, conditionExpr);
      },
      _BinaryenBreakSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenBreakSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenBreakSetValue(expr, valueExpr);
      },
      _BinaryenSwitchSetCondition(expr, conditionExpr) {
        // src/glue/binaryen/_BinaryenSwitchSetCondition(usize, usize) => void
        expr = expr >>> 0;
        conditionExpr = conditionExpr >>> 0;
        __module0._BinaryenSwitchSetCondition(expr, conditionExpr);
      },
      _BinaryenSwitchSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenSwitchSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenSwitchSetValue(expr, valueExpr);
      },
      _BinaryenCallIndirectSetTarget(expr, targetExpr) {
        // src/glue/binaryen/_BinaryenCallIndirectSetTarget(usize, usize) => void
        expr = expr >>> 0;
        targetExpr = targetExpr >>> 0;
        __module0._BinaryenCallIndirectSetTarget(expr, targetExpr);
      },
      _BinaryenGlobalSetSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenGlobalSetSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenGlobalSetSetValue(expr, valueExpr);
      },
      _BinaryenLoadSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenLoadSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenLoadSetPtr(expr, ptrExpr);
      },
      _BinaryenStoreSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenStoreSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenStoreSetPtr(expr, ptrExpr);
      },
      _BinaryenStoreSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenStoreSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenStoreSetValue(expr, valueExpr);
      },
      _BinaryenUnarySetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenUnarySetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenUnarySetValue(expr, valueExpr);
      },
      _BinaryenBinarySetLeft(expr, leftExpr) {
        // src/glue/binaryen/_BinaryenBinarySetLeft(usize, usize) => void
        expr = expr >>> 0;
        leftExpr = leftExpr >>> 0;
        __module0._BinaryenBinarySetLeft(expr, leftExpr);
      },
      _BinaryenBinarySetRight(expr, rightExpr) {
        // src/glue/binaryen/_BinaryenBinarySetRight(usize, usize) => void
        expr = expr >>> 0;
        rightExpr = rightExpr >>> 0;
        __module0._BinaryenBinarySetRight(expr, rightExpr);
      },
      _BinaryenSelectSetIfTrue(expr, ifTrueExpr) {
        // src/glue/binaryen/_BinaryenSelectSetIfTrue(usize, usize) => void
        expr = expr >>> 0;
        ifTrueExpr = ifTrueExpr >>> 0;
        __module0._BinaryenSelectSetIfTrue(expr, ifTrueExpr);
      },
      _BinaryenSelectSetIfFalse(expr, ifFalseExpr) {
        // src/glue/binaryen/_BinaryenSelectSetIfFalse(usize, usize) => void
        expr = expr >>> 0;
        ifFalseExpr = ifFalseExpr >>> 0;
        __module0._BinaryenSelectSetIfFalse(expr, ifFalseExpr);
      },
      _BinaryenSelectSetCondition(expr, conditionExpr) {
        // src/glue/binaryen/_BinaryenSelectSetCondition(usize, usize) => void
        expr = expr >>> 0;
        conditionExpr = conditionExpr >>> 0;
        __module0._BinaryenSelectSetCondition(expr, conditionExpr);
      },
      _BinaryenDropSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenDropSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenDropSetValue(expr, valueExpr);
      },
      _BinaryenReturnSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenReturnSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenReturnSetValue(expr, valueExpr);
      },
      _BinaryenMemoryGrowSetDelta(expr, delta) {
        // src/glue/binaryen/_BinaryenMemoryGrowSetDelta(usize, usize) => void
        expr = expr >>> 0;
        delta = delta >>> 0;
        __module0._BinaryenMemoryGrowSetDelta(expr, delta);
      },
      _BinaryenAtomicRMWSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenAtomicRMWSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenAtomicRMWSetPtr(expr, ptrExpr);
      },
      _BinaryenAtomicRMWSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenAtomicRMWSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenAtomicRMWSetValue(expr, valueExpr);
      },
      _BinaryenAtomicCmpxchgSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenAtomicCmpxchgSetPtr(expr, ptrExpr);
      },
      _BinaryenAtomicCmpxchgSetExpected(expr, expectedExpr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgSetExpected(usize, usize) => void
        expr = expr >>> 0;
        expectedExpr = expectedExpr >>> 0;
        __module0._BinaryenAtomicCmpxchgSetExpected(expr, expectedExpr);
      },
      _BinaryenAtomicCmpxchgSetReplacement(expr, replacementExpr) {
        // src/glue/binaryen/_BinaryenAtomicCmpxchgSetReplacement(usize, usize) => void
        expr = expr >>> 0;
        replacementExpr = replacementExpr >>> 0;
        __module0._BinaryenAtomicCmpxchgSetReplacement(expr, replacementExpr);
      },
      _BinaryenAtomicWaitSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenAtomicWaitSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenAtomicWaitSetPtr(expr, ptrExpr);
      },
      _BinaryenAtomicWaitSetExpected(expr, expectedExpr) {
        // src/glue/binaryen/_BinaryenAtomicWaitSetExpected(usize, usize) => void
        expr = expr >>> 0;
        expectedExpr = expectedExpr >>> 0;
        __module0._BinaryenAtomicWaitSetExpected(expr, expectedExpr);
      },
      _BinaryenAtomicWaitSetTimeout(expr, timeoutExpr) {
        // src/glue/binaryen/_BinaryenAtomicWaitSetTimeout(usize, usize) => void
        expr = expr >>> 0;
        timeoutExpr = timeoutExpr >>> 0;
        __module0._BinaryenAtomicWaitSetTimeout(expr, timeoutExpr);
      },
      _BinaryenAtomicNotifySetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenAtomicNotifySetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenAtomicNotifySetPtr(expr, ptrExpr);
      },
      _BinaryenAtomicNotifySetNotifyCount(expr, notifyCountExpr) {
        // src/glue/binaryen/_BinaryenAtomicNotifySetNotifyCount(usize, usize) => void
        expr = expr >>> 0;
        notifyCountExpr = notifyCountExpr >>> 0;
        __module0._BinaryenAtomicNotifySetNotifyCount(expr, notifyCountExpr);
      },
      _BinaryenSIMDExtractSetVec(expr, vecExpr) {
        // src/glue/binaryen/_BinaryenSIMDExtractSetVec(usize, usize) => void
        expr = expr >>> 0;
        vecExpr = vecExpr >>> 0;
        __module0._BinaryenSIMDExtractSetVec(expr, vecExpr);
      },
      _BinaryenSIMDReplaceSetVec(expr, vecExpr) {
        // src/glue/binaryen/_BinaryenSIMDReplaceSetVec(usize, usize) => void
        expr = expr >>> 0;
        vecExpr = vecExpr >>> 0;
        __module0._BinaryenSIMDReplaceSetVec(expr, vecExpr);
      },
      _BinaryenSIMDReplaceSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenSIMDReplaceSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenSIMDReplaceSetValue(expr, valueExpr);
      },
      _BinaryenSIMDShuffleSetLeft(expr, leftExpr) {
        // src/glue/binaryen/_BinaryenSIMDShuffleSetLeft(usize, usize) => void
        expr = expr >>> 0;
        leftExpr = leftExpr >>> 0;
        __module0._BinaryenSIMDShuffleSetLeft(expr, leftExpr);
      },
      _BinaryenSIMDShuffleSetRight(expr, rightExpr) {
        // src/glue/binaryen/_BinaryenSIMDShuffleSetRight(usize, usize) => void
        expr = expr >>> 0;
        rightExpr = rightExpr >>> 0;
        __module0._BinaryenSIMDShuffleSetRight(expr, rightExpr);
      },
      _BinaryenSIMDTernarySetA(expr, aExpr) {
        // src/glue/binaryen/_BinaryenSIMDTernarySetA(usize, usize) => void
        expr = expr >>> 0;
        aExpr = aExpr >>> 0;
        __module0._BinaryenSIMDTernarySetA(expr, aExpr);
      },
      _BinaryenSIMDTernarySetB(expr, bExpr) {
        // src/glue/binaryen/_BinaryenSIMDTernarySetB(usize, usize) => void
        expr = expr >>> 0;
        bExpr = bExpr >>> 0;
        __module0._BinaryenSIMDTernarySetB(expr, bExpr);
      },
      _BinaryenSIMDTernarySetC(expr, cExpr) {
        // src/glue/binaryen/_BinaryenSIMDTernarySetC(usize, usize) => void
        expr = expr >>> 0;
        cExpr = cExpr >>> 0;
        __module0._BinaryenSIMDTernarySetC(expr, cExpr);
      },
      _BinaryenSIMDShiftSetVec(expr, vecExpr) {
        // src/glue/binaryen/_BinaryenSIMDShiftSetVec(usize, usize) => void
        expr = expr >>> 0;
        vecExpr = vecExpr >>> 0;
        __module0._BinaryenSIMDShiftSetVec(expr, vecExpr);
      },
      _BinaryenSIMDShiftSetShift(expr, shiftExpr) {
        // src/glue/binaryen/_BinaryenSIMDShiftSetShift(usize, usize) => void
        expr = expr >>> 0;
        shiftExpr = shiftExpr >>> 0;
        __module0._BinaryenSIMDShiftSetShift(expr, shiftExpr);
      },
      _BinaryenSIMDLoadSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenSIMDLoadSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenSIMDLoadSetPtr(expr, ptrExpr);
      },
      _BinaryenSIMDLoadStoreLaneSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenSIMDLoadStoreLaneSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenSIMDLoadStoreLaneSetPtr(expr, ptrExpr);
      },
      _BinaryenSIMDLoadStoreLaneSetVec(expr, vecExpr) {
        // src/glue/binaryen/_BinaryenSIMDLoadStoreLaneSetVec(usize, usize) => void
        expr = expr >>> 0;
        vecExpr = vecExpr >>> 0;
        __module0._BinaryenSIMDLoadStoreLaneSetVec(expr, vecExpr);
      },
      _BinaryenMemoryInitSetDest(expr, destExpr) {
        // src/glue/binaryen/_BinaryenMemoryInitSetDest(usize, usize) => void
        expr = expr >>> 0;
        destExpr = destExpr >>> 0;
        __module0._BinaryenMemoryInitSetDest(expr, destExpr);
      },
      _BinaryenMemoryInitSetOffset(expr, offsetExpr) {
        // src/glue/binaryen/_BinaryenMemoryInitSetOffset(usize, usize) => void
        expr = expr >>> 0;
        offsetExpr = offsetExpr >>> 0;
        __module0._BinaryenMemoryInitSetOffset(expr, offsetExpr);
      },
      _BinaryenMemoryInitSetSize(expr, sizeExpr) {
        // src/glue/binaryen/_BinaryenMemoryInitSetSize(usize, usize) => void
        expr = expr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        __module0._BinaryenMemoryInitSetSize(expr, sizeExpr);
      },
      _BinaryenMemoryCopySetDest(expr, destExpr) {
        // src/glue/binaryen/_BinaryenMemoryCopySetDest(usize, usize) => void
        expr = expr >>> 0;
        destExpr = destExpr >>> 0;
        __module0._BinaryenMemoryCopySetDest(expr, destExpr);
      },
      _BinaryenMemoryCopySetSource(expr, sourceExpr) {
        // src/glue/binaryen/_BinaryenMemoryCopySetSource(usize, usize) => void
        expr = expr >>> 0;
        sourceExpr = sourceExpr >>> 0;
        __module0._BinaryenMemoryCopySetSource(expr, sourceExpr);
      },
      _BinaryenMemoryCopySetSize(expr, sizeExpr) {
        // src/glue/binaryen/_BinaryenMemoryCopySetSize(usize, usize) => void
        expr = expr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        __module0._BinaryenMemoryCopySetSize(expr, sizeExpr);
      },
      _BinaryenMemoryFillSetDest(expr, destExpr) {
        // src/glue/binaryen/_BinaryenMemoryFillSetDest(usize, usize) => void
        expr = expr >>> 0;
        destExpr = destExpr >>> 0;
        __module0._BinaryenMemoryFillSetDest(expr, destExpr);
      },
      _BinaryenMemoryFillSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenMemoryFillSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenMemoryFillSetValue(expr, valueExpr);
      },
      _BinaryenMemoryFillSetSize(expr, sizeExpr) {
        // src/glue/binaryen/_BinaryenMemoryFillSetSize(usize, usize) => void
        expr = expr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        __module0._BinaryenMemoryFillSetSize(expr, sizeExpr);
      },
      _BinaryenRefIsNullSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenRefIsNullSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenRefIsNullSetValue(expr, valueExpr);
      },
      _BinaryenRefEqSetLeft(expr, leftExpr) {
        // src/glue/binaryen/_BinaryenRefEqSetLeft(usize, usize) => void
        expr = expr >>> 0;
        leftExpr = leftExpr >>> 0;
        __module0._BinaryenRefEqSetLeft(expr, leftExpr);
      },
      _BinaryenRefEqSetRight(expr, rightExpr) {
        // src/glue/binaryen/_BinaryenRefEqSetRight(usize, usize) => void
        expr = expr >>> 0;
        rightExpr = rightExpr >>> 0;
        __module0._BinaryenRefEqSetRight(expr, rightExpr);
      },
      _BinaryenTrySetBody(expr, bodyExpr) {
        // src/glue/binaryen/_BinaryenTrySetBody(usize, usize) => void
        expr = expr >>> 0;
        bodyExpr = bodyExpr >>> 0;
        __module0._BinaryenTrySetBody(expr, bodyExpr);
      },
      _BinaryenTrySetCatchBodyAt(expr, index, catchExpr) {
        // src/glue/binaryen/_BinaryenTrySetCatchBodyAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        catchExpr = catchExpr >>> 0;
        __module0._BinaryenTrySetCatchBodyAt(expr, index, catchExpr);
      },
      _BinaryenThrowSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenThrowSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenThrowSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenTupleMakeSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenTupleMakeSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenTupleMakeSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenTupleExtractSetTuple(expr, tupleExpr) {
        // src/glue/binaryen/_BinaryenTupleExtractSetTuple(usize, usize) => void
        expr = expr >>> 0;
        tupleExpr = tupleExpr >>> 0;
        __module0._BinaryenTupleExtractSetTuple(expr, tupleExpr);
      },
      _BinaryenI31NewSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenI31NewSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenI31NewSetValue(expr, valueExpr);
      },
      _BinaryenI31GetSetI31(expr, i31Expr) {
        // src/glue/binaryen/_BinaryenI31GetSetI31(usize, usize) => void
        expr = expr >>> 0;
        i31Expr = i31Expr >>> 0;
        __module0._BinaryenI31GetSetI31(expr, i31Expr);
      },
      _BinaryenCallRefSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenCallRefSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenCallRefSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenCallRefSetTarget(expr, targetExpr) {
        // src/glue/binaryen/_BinaryenCallRefSetTarget(usize, usize) => void
        expr = expr >>> 0;
        targetExpr = targetExpr >>> 0;
        __module0._BinaryenCallRefSetTarget(expr, targetExpr);
      },
      _BinaryenRefTestSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenRefTestSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenRefTestSetRef(expr, refExpr);
      },
      _BinaryenRefCastSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenRefCastSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenRefCastSetRef(expr, refExpr);
      },
      _BinaryenBrOnSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenBrOnSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenBrOnSetRef(expr, refExpr);
      },
      _BinaryenStructNewSetOperandAt(expr, index, operandExpr) {
        // src/glue/binaryen/_BinaryenStructNewSetOperandAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        operandExpr = operandExpr >>> 0;
        __module0._BinaryenStructNewSetOperandAt(expr, index, operandExpr);
      },
      _BinaryenStructGetSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStructGetSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStructGetSetRef(expr, refExpr);
      },
      _BinaryenStructSetSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStructSetSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStructSetSetRef(expr, refExpr);
      },
      _BinaryenStructSetSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenStructSetSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenStructSetSetValue(expr, valueExpr);
      },
      _BinaryenArrayNewSetSize(expr, sizeExpr) {
        // src/glue/binaryen/_BinaryenArrayNewSetSize(usize, usize) => void
        expr = expr >>> 0;
        sizeExpr = sizeExpr >>> 0;
        __module0._BinaryenArrayNewSetSize(expr, sizeExpr);
      },
      _BinaryenArrayNewSetInit(expr, initExpr) {
        // src/glue/binaryen/_BinaryenArrayNewSetInit(usize, usize) => void
        expr = expr >>> 0;
        initExpr = initExpr >>> 0;
        __module0._BinaryenArrayNewSetInit(expr, initExpr);
      },
      _BinaryenArrayNewFixedSetValueAt(expr, index, valueExpr) {
        // src/glue/binaryen/_BinaryenArrayNewFixedSetValueAt(usize, u32, usize) => void
        expr = expr >>> 0;
        index = index >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenArrayNewFixedSetValueAt(expr, index, valueExpr);
      },
      _BinaryenArrayGetSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenArrayGetSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenArrayGetSetRef(expr, refExpr);
      },
      _BinaryenArrayGetSetIndex(expr, indexExpr) {
        // src/glue/binaryen/_BinaryenArrayGetSetIndex(usize, usize) => void
        expr = expr >>> 0;
        indexExpr = indexExpr >>> 0;
        __module0._BinaryenArrayGetSetIndex(expr, indexExpr);
      },
      _BinaryenArraySetSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenArraySetSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenArraySetSetRef(expr, refExpr);
      },
      _BinaryenArraySetSetIndex(expr, indexExpr) {
        // src/glue/binaryen/_BinaryenArraySetSetIndex(usize, usize) => void
        expr = expr >>> 0;
        indexExpr = indexExpr >>> 0;
        __module0._BinaryenArraySetSetIndex(expr, indexExpr);
      },
      _BinaryenArraySetSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenArraySetSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenArraySetSetValue(expr, valueExpr);
      },
      _BinaryenArrayLenSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenArrayLenSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenArrayLenSetRef(expr, refExpr);
      },
      _BinaryenArrayCopySetDestRef(expr, destRefExpr) {
        // src/glue/binaryen/_BinaryenArrayCopySetDestRef(usize, usize) => void
        expr = expr >>> 0;
        destRefExpr = destRefExpr >>> 0;
        __module0._BinaryenArrayCopySetDestRef(expr, destRefExpr);
      },
      _BinaryenArrayCopySetDestIndex(expr, destIndexExpr) {
        // src/glue/binaryen/_BinaryenArrayCopySetDestIndex(usize, usize) => void
        expr = expr >>> 0;
        destIndexExpr = destIndexExpr >>> 0;
        __module0._BinaryenArrayCopySetDestIndex(expr, destIndexExpr);
      },
      _BinaryenArrayCopySetSrcRef(expr, srcRefExpr) {
        // src/glue/binaryen/_BinaryenArrayCopySetSrcRef(usize, usize) => void
        expr = expr >>> 0;
        srcRefExpr = srcRefExpr >>> 0;
        __module0._BinaryenArrayCopySetSrcRef(expr, srcRefExpr);
      },
      _BinaryenArrayCopySetSrcIndex(expr, srcIndexExpr) {
        // src/glue/binaryen/_BinaryenArrayCopySetSrcIndex(usize, usize) => void
        expr = expr >>> 0;
        srcIndexExpr = srcIndexExpr >>> 0;
        __module0._BinaryenArrayCopySetSrcIndex(expr, srcIndexExpr);
      },
      _BinaryenArrayCopySetLength(expr, lengthExpr) {
        // src/glue/binaryen/_BinaryenArrayCopySetLength(usize, usize) => void
        expr = expr >>> 0;
        lengthExpr = lengthExpr >>> 0;
        __module0._BinaryenArrayCopySetLength(expr, lengthExpr);
      },
      _BinaryenRefAsSetValue(expr, valueExpr) {
        // src/glue/binaryen/_BinaryenRefAsSetValue(usize, usize) => void
        expr = expr >>> 0;
        valueExpr = valueExpr >>> 0;
        __module0._BinaryenRefAsSetValue(expr, valueExpr);
      },
      _BinaryenStringNewSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenStringNewSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenStringNewSetPtr(expr, ptrExpr);
      },
      _BinaryenStringNewSetLength(expr, lengthExpr) {
        // src/glue/binaryen/_BinaryenStringNewSetLength(usize, usize) => void
        expr = expr >>> 0;
        lengthExpr = lengthExpr >>> 0;
        __module0._BinaryenStringNewSetLength(expr, lengthExpr);
      },
      _BinaryenStringNewSetStart(expr, startExpr) {
        // src/glue/binaryen/_BinaryenStringNewSetStart(usize, usize) => void
        expr = expr >>> 0;
        startExpr = startExpr >>> 0;
        __module0._BinaryenStringNewSetStart(expr, startExpr);
      },
      _BinaryenStringNewSetEnd(expr, endExpr) {
        // src/glue/binaryen/_BinaryenStringNewSetEnd(usize, usize) => void
        expr = expr >>> 0;
        endExpr = endExpr >>> 0;
        __module0._BinaryenStringNewSetEnd(expr, endExpr);
      },
      _BinaryenStringMeasureSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringMeasureSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringMeasureSetRef(expr, refExpr);
      },
      _BinaryenStringEncodeSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringEncodeSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringEncodeSetRef(expr, refExpr);
      },
      _BinaryenStringEncodeSetPtr(expr, ptrExpr) {
        // src/glue/binaryen/_BinaryenStringEncodeSetPtr(usize, usize) => void
        expr = expr >>> 0;
        ptrExpr = ptrExpr >>> 0;
        __module0._BinaryenStringEncodeSetPtr(expr, ptrExpr);
      },
      _BinaryenStringEncodeSetStart(expr, startExpr) {
        // src/glue/binaryen/_BinaryenStringEncodeSetStart(usize, usize) => void
        expr = expr >>> 0;
        startExpr = startExpr >>> 0;
        __module0._BinaryenStringEncodeSetStart(expr, startExpr);
      },
      _BinaryenStringConcatSetLeft(expr, leftExpr) {
        // src/glue/binaryen/_BinaryenStringConcatSetLeft(usize, usize) => void
        expr = expr >>> 0;
        leftExpr = leftExpr >>> 0;
        __module0._BinaryenStringConcatSetLeft(expr, leftExpr);
      },
      _BinaryenStringConcatSetRight(expr, rightExpr) {
        // src/glue/binaryen/_BinaryenStringConcatSetRight(usize, usize) => void
        expr = expr >>> 0;
        rightExpr = rightExpr >>> 0;
        __module0._BinaryenStringConcatSetRight(expr, rightExpr);
      },
      _BinaryenStringEqSetLeft(expr, leftExpr) {
        // src/glue/binaryen/_BinaryenStringEqSetLeft(usize, usize) => void
        expr = expr >>> 0;
        leftExpr = leftExpr >>> 0;
        __module0._BinaryenStringEqSetLeft(expr, leftExpr);
      },
      _BinaryenStringEqSetRight(expr, rightExpr) {
        // src/glue/binaryen/_BinaryenStringEqSetRight(usize, usize) => void
        expr = expr >>> 0;
        rightExpr = rightExpr >>> 0;
        __module0._BinaryenStringEqSetRight(expr, rightExpr);
      },
      _BinaryenStringAsSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringAsSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringAsSetRef(expr, refExpr);
      },
      _BinaryenStringWTF8AdvanceSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringWTF8AdvanceSetRef(expr, refExpr);
      },
      _BinaryenStringWTF8AdvanceSetPos(expr, posExpr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceSetPos(usize, usize) => void
        expr = expr >>> 0;
        posExpr = posExpr >>> 0;
        __module0._BinaryenStringWTF8AdvanceSetPos(expr, posExpr);
      },
      _BinaryenStringWTF8AdvanceSetBytes(expr, bytesExpr) {
        // src/glue/binaryen/_BinaryenStringWTF8AdvanceSetBytes(usize, usize) => void
        expr = expr >>> 0;
        bytesExpr = bytesExpr >>> 0;
        __module0._BinaryenStringWTF8AdvanceSetBytes(expr, bytesExpr);
      },
      _BinaryenStringWTF16GetSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringWTF16GetSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringWTF16GetSetRef(expr, refExpr);
      },
      _BinaryenStringWTF16GetSetPos(expr, posExpr) {
        // src/glue/binaryen/_BinaryenStringWTF16GetSetPos(usize, usize) => void
        expr = expr >>> 0;
        posExpr = posExpr >>> 0;
        __module0._BinaryenStringWTF16GetSetPos(expr, posExpr);
      },
      _BinaryenStringIterNextSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringIterNextSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringIterNextSetRef(expr, refExpr);
      },
      _BinaryenStringIterMoveSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringIterMoveSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringIterMoveSetRef(expr, refExpr);
      },
      _BinaryenStringIterMoveSetNum(expr, numExpr) {
        // src/glue/binaryen/_BinaryenStringIterMoveSetNum(usize, usize) => void
        expr = expr >>> 0;
        numExpr = numExpr >>> 0;
        __module0._BinaryenStringIterMoveSetNum(expr, numExpr);
      },
      _BinaryenStringSliceWTFSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringSliceWTFSetRef(expr, refExpr);
      },
      _BinaryenStringSliceWTFSetStart(expr, startExpr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFSetStart(usize, usize) => void
        expr = expr >>> 0;
        startExpr = startExpr >>> 0;
        __module0._BinaryenStringSliceWTFSetStart(expr, startExpr);
      },
      _BinaryenStringSliceWTFSetEnd(expr, endExpr) {
        // src/glue/binaryen/_BinaryenStringSliceWTFSetEnd(usize, usize) => void
        expr = expr >>> 0;
        endExpr = endExpr >>> 0;
        __module0._BinaryenStringSliceWTFSetEnd(expr, endExpr);
      },
      _BinaryenStringSliceIterSetRef(expr, refExpr) {
        // src/glue/binaryen/_BinaryenStringSliceIterSetRef(usize, usize) => void
        expr = expr >>> 0;
        refExpr = refExpr >>> 0;
        __module0._BinaryenStringSliceIterSetRef(expr, refExpr);
      },
      _BinaryenStringSliceIterSetNum(expr, numExpr) {
        // src/glue/binaryen/_BinaryenStringSliceIterSetNum(usize, usize) => void
        expr = expr >>> 0;
        numExpr = numExpr >>> 0;
        __module0._BinaryenStringSliceIterSetNum(expr, numExpr);
      },
      _BinaryenExpressionFinalize(expr) {
        // src/glue/binaryen/_BinaryenExpressionFinalize(usize) => void
        expr = expr >>> 0;
        __module0._BinaryenExpressionFinalize(expr);
      },
      _BinaryenStoreGetOffset(expr) {
        // src/glue/binaryen/_BinaryenStoreGetOffset(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenStoreGetOffset(expr);
      },
      _BinaryenStoreGetBytes(expr) {
        // src/glue/binaryen/_BinaryenStoreGetBytes(usize) => u32
        expr = expr >>> 0;
        return __module0._BinaryenStoreGetBytes(expr);
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    newOptions() {
      // src/index-wasm/newOptions() => src/compiler/Options
      return __liftInternref(exports.newOptions() >>> 0);
    },
    setTarget(options, target) {
      // src/index-wasm/setTarget(src/compiler/Options, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setTarget(options, target);
    },
    setRuntime(options, runtime) {
      // src/index-wasm/setRuntime(src/compiler/Options, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setRuntime(options, runtime);
    },
    setNoAssert(options, noAssert) {
      // src/index-wasm/setNoAssert(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      noAssert = noAssert ? 1 : 0;
      exports.setNoAssert(options, noAssert);
    },
    setExportMemory(options, exportMemory) {
      // src/index-wasm/setExportMemory(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      exportMemory = exportMemory ? 1 : 0;
      exports.setExportMemory(options, exportMemory);
    },
    setImportMemory(options, importMemory) {
      // src/index-wasm/setImportMemory(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      importMemory = importMemory ? 1 : 0;
      exports.setImportMemory(options, importMemory);
    },
    setInitialMemory(options, initialMemory) {
      // src/index-wasm/setInitialMemory(src/compiler/Options, u32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setInitialMemory(options, initialMemory);
    },
    setMaximumMemory(options, maximumMemory) {
      // src/index-wasm/setMaximumMemory(src/compiler/Options, u32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setMaximumMemory(options, maximumMemory);
    },
    setSharedMemory(options, sharedMemory) {
      // src/index-wasm/setSharedMemory(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      sharedMemory = sharedMemory ? 1 : 0;
      exports.setSharedMemory(options, sharedMemory);
    },
    setImportTable(options, importTable) {
      // src/index-wasm/setImportTable(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      importTable = importTable ? 1 : 0;
      exports.setImportTable(options, importTable);
    },
    setExportTable(options, exportTable) {
      // src/index-wasm/setExportTable(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      exportTable = exportTable ? 1 : 0;
      exports.setExportTable(options, exportTable);
    },
    setSourceMap(options, sourceMap) {
      // src/index-wasm/setSourceMap(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      sourceMap = sourceMap ? 1 : 0;
      exports.setSourceMap(options, sourceMap);
    },
    setUncheckedBehavior(options, uncheckedBehavior) {
      // src/index-wasm/setUncheckedBehavior(src/compiler/Options, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setUncheckedBehavior(options, uncheckedBehavior);
    },
    setMemoryBase(options, memoryBase) {
      // src/index-wasm/setMemoryBase(src/compiler/Options, u32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setMemoryBase(options, memoryBase);
    },
    setTableBase(options, tableBase) {
      // src/index-wasm/setTableBase(src/compiler/Options, u32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setTableBase(options, tableBase);
    },
    addGlobalAlias(options, alias, name) {
      // src/index-wasm/addGlobalAlias(src/compiler/Options, ~lib/string/String, ~lib/string/String) => void
      options = __retain(__lowerInternref(options) || __notnull());
      alias = __retain(__lowerString(alias) || __notnull());
      name = __lowerString(name) || __notnull();
      try {
        exports.addGlobalAlias(options, alias, name);
      } finally {
        __release(options);
        __release(alias);
      }
    },
    removeGlobalAlias(options, alias) {
      // src/index-wasm/removeGlobalAlias(src/compiler/Options, ~lib/string/String) => void
      options = __retain(__lowerInternref(options) || __notnull());
      alias = __lowerString(alias) || __notnull();
      try {
        exports.removeGlobalAlias(options, alias);
      } finally {
        __release(options);
      }
    },
    setExportStart(options, exportStart) {
      // src/index-wasm/setExportStart(src/compiler/Options, ~lib/string/String | null) => void
      options = __retain(__lowerInternref(options) || __notnull());
      exportStart = __lowerString(exportStart);
      try {
        exports.setExportStart(options, exportStart);
      } finally {
        __release(options);
      }
    },
    setNoUnsafe(options, noUnsafe) {
      // src/index-wasm/setNoUnsafe(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      noUnsafe = noUnsafe ? 1 : 0;
      exports.setNoUnsafe(options, noUnsafe);
    },
    setLowMemoryLimit(options, lowMemoryLimit) {
      // src/index-wasm/setLowMemoryLimit(src/compiler/Options, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setLowMemoryLimit(options, lowMemoryLimit);
    },
    setExportRuntime(options, exportRuntime) {
      // src/index-wasm/setExportRuntime(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      exportRuntime = exportRuntime ? 1 : 0;
      exports.setExportRuntime(options, exportRuntime);
    },
    setStackSize(options, stackSize) {
      // src/index-wasm/setStackSize(src/compiler/Options, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setStackSize(options, stackSize);
    },
    setBundleVersion(options, bundleMajorVersion, bundleMinorVersion, bundlePatchVersion) {
      // src/index-wasm/setBundleVersion(src/compiler/Options, i32, i32, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setBundleVersion(options, bundleMajorVersion, bundleMinorVersion, bundlePatchVersion);
    },
    setFeature(options, feature, on) {
      // src/index-wasm/setFeature(src/compiler/Options, i32, bool) => void
      options = __lowerInternref(options) || __notnull();
      on = on ? 1 : 0;
      exports.setFeature(options, feature, on);
    },
    setOptimizeLevelHints(options, optimizeLevel, shrinkLevel) {
      // src/index-wasm/setOptimizeLevelHints(src/compiler/Options, i32, i32) => void
      options = __lowerInternref(options) || __notnull();
      exports.setOptimizeLevelHints(options, optimizeLevel, shrinkLevel);
    },
    setBasenameHint(options, basename) {
      // src/index-wasm/setBasenameHint(src/compiler/Options, ~lib/string/String) => void
      options = __retain(__lowerInternref(options) || __notnull());
      basename = __lowerString(basename) || __notnull();
      try {
        exports.setBasenameHint(options, basename);
      } finally {
        __release(options);
      }
    },
    setBindingsHint(options, bindings) {
      // src/index-wasm/setBindingsHint(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      bindings = bindings ? 1 : 0;
      exports.setBindingsHint(options, bindings);
    },
    setPedantic(options, pedantic) {
      // src/index-wasm/setPedantic(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      pedantic = pedantic ? 1 : 0;
      exports.setPedantic(options, pedantic);
    },
    setDebugInfo(options, debug) {
      // src/index-wasm/setDebugInfo(src/compiler/Options, bool) => void
      options = __lowerInternref(options) || __notnull();
      debug = debug ? 1 : 0;
      exports.setDebugInfo(options, debug);
    },
    newProgram(options) {
      // src/index-wasm/newProgram(src/compiler/Options) => src/program/Program
      options = __lowerInternref(options) || __notnull();
      return __liftInternref(exports.newProgram(options) >>> 0);
    },
    nextDiagnostic(program) {
      // src/index-wasm/nextDiagnostic(src/program/Program) => src/diagnostics/DiagnosticMessage | null
      program = __lowerInternref(program) || __notnull();
      return __liftInternref(exports.nextDiagnostic(program) >>> 0);
    },
    getSource(program, internalPath) {
      // src/index-wasm/getSource(src/program/Program, ~lib/string/String) => ~lib/string/String | null
      program = __retain(__lowerInternref(program) || __notnull());
      internalPath = __lowerString(internalPath) || __notnull();
      try {
        return __liftString(exports.getSource(program, internalPath) >>> 0);
      } finally {
        __release(program);
      }
    },
    getDiagnosticCode(diagnostic) {
      // src/index-wasm/getDiagnosticCode(src/diagnostics/DiagnosticMessage) => i32
      diagnostic = __lowerInternref(diagnostic) || __notnull();
      return exports.getDiagnosticCode(diagnostic);
    },
    getDiagnosticCategory(diagnostic) {
      // src/index-wasm/getDiagnosticCategory(src/diagnostics/DiagnosticMessage) => i32
      diagnostic = __lowerInternref(diagnostic) || __notnull();
      return exports.getDiagnosticCategory(diagnostic);
    },
    getDiagnosticMessage(diagnostic) {
      // src/index-wasm/getDiagnosticMessage(src/diagnostics/DiagnosticMessage) => ~lib/string/String
      diagnostic = __lowerInternref(diagnostic) || __notnull();
      return __liftString(exports.getDiagnosticMessage(diagnostic) >>> 0);
    },
    getDiagnosticRange(diagnostic) {
      // src/index-wasm/getDiagnosticRange(src/diagnostics/DiagnosticMessage) => src/diagnostics/Range | null
      diagnostic = __lowerInternref(diagnostic) || __notnull();
      return __liftInternref(exports.getDiagnosticRange(diagnostic) >>> 0);
    },
    getDiagnosticRelatedRange(diagnostic) {
      // src/index-wasm/getDiagnosticRelatedRange(src/diagnostics/DiagnosticMessage) => src/diagnostics/Range | null
      diagnostic = __lowerInternref(diagnostic) || __notnull();
      return __liftInternref(exports.getDiagnosticRelatedRange(diagnostic) >>> 0);
    },
    getRangeStart(range) {
      // src/index-wasm/getRangeStart(src/diagnostics/Range) => i32
      range = __lowerInternref(range) || __notnull();
      return exports.getRangeStart(range);
    },
    getRangeEnd(range) {
      // src/index-wasm/getRangeEnd(src/diagnostics/Range) => i32
      range = __lowerInternref(range) || __notnull();
      return exports.getRangeEnd(range);
    },
    getRangeSource(range) {
      // src/index-wasm/getRangeSource(src/diagnostics/Range) => src/ast/Source
      range = __lowerInternref(range) || __notnull();
      return __liftInternref(exports.getRangeSource(range) >>> 0);
    },
    getSourceNormalizedPath(source) {
      // src/index-wasm/getSourceNormalizedPath(src/ast/Source) => ~lib/string/String
      source = __lowerInternref(source) || __notnull();
      return __liftString(exports.getSourceNormalizedPath(source) >>> 0);
    },
    isInfo(message) {
      // src/index-wasm/isInfo(src/diagnostics/DiagnosticMessage) => bool
      message = __lowerInternref(message) || __notnull();
      return exports.isInfo(message) != 0;
    },
    isWarning(message) {
      // src/index-wasm/isWarning(src/diagnostics/DiagnosticMessage) => bool
      message = __lowerInternref(message) || __notnull();
      return exports.isWarning(message) != 0;
    },
    isError(message) {
      // src/index-wasm/isError(src/diagnostics/DiagnosticMessage) => bool
      message = __lowerInternref(message) || __notnull();
      return exports.isError(message) != 0;
    },
    parse(program, text, path, isEntry) {
      // src/index-wasm/parse(src/program/Program, ~lib/string/String | null, ~lib/string/String, bool?) => void
      program = __retain(__lowerInternref(program) || __notnull());
      text = __retain(__lowerString(text));
      path = __lowerString(path) || __notnull();
      isEntry = isEntry ? 1 : 0;
      try {
        exports.__setArgumentsLength(arguments.length);
        exports.parse(program, text, path, isEntry);
      } finally {
        __release(program);
        __release(text);
      }
    },
    nextFile(program) {
      // src/index-wasm/nextFile(src/program/Program) => ~lib/string/String | null
      program = __lowerInternref(program) || __notnull();
      return __liftString(exports.nextFile(program) >>> 0);
    },
    getDependee(program, file) {
      // src/index-wasm/getDependee(src/program/Program, ~lib/string/String) => ~lib/string/String | null
      program = __retain(__lowerInternref(program) || __notnull());
      file = __lowerString(file) || __notnull();
      try {
        return __liftString(exports.getDependee(program, file) >>> 0);
      } finally {
        __release(program);
      }
    },
    initializeProgram(program) {
      // src/index-wasm/initializeProgram(src/program/Program) => void
      program = __lowerInternref(program) || __notnull();
      exports.initializeProgram(program);
    },
    compile(program) {
      // src/index-wasm/compile(src/program/Program) => src/module/Module
      program = __lowerInternref(program) || __notnull();
      return __liftInternref(exports.compile(program) >>> 0);
    },
    buildTSD(program, esm) {
      // src/index-wasm/buildTSD(src/program/Program, bool) => ~lib/string/String
      program = __lowerInternref(program) || __notnull();
      esm = esm ? 1 : 0;
      return __liftString(exports.buildTSD(program, esm) >>> 0);
    },
    buildJS(program, esm) {
      // src/index-wasm/buildJS(src/program/Program, bool) => ~lib/string/String
      program = __lowerInternref(program) || __notnull();
      esm = esm ? 1 : 0;
      return __liftString(exports.buildJS(program, esm) >>> 0);
    },
    getBinaryenModuleRef(module) {
      // src/index-wasm/getBinaryenModuleRef(src/module/Module) => usize
      module = __lowerInternref(module) || __notnull();
      return exports.getBinaryenModuleRef(module) >>> 0;
    },
    validate(module) {
      // src/index-wasm/validate(src/module/Module) => bool
      module = __lowerInternref(module) || __notnull();
      return exports.validate(module) != 0;
    },
    optimize(module, optimizeLevel, shrinkLevel, debugInfo, zeroFilledMemory) {
      // src/index-wasm/optimize(src/module/Module, i32, i32, bool?, bool?) => void
      module = __lowerInternref(module) || __notnull();
      debugInfo = debugInfo ? 1 : 0;
      zeroFilledMemory = zeroFilledMemory ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      exports.optimize(module, optimizeLevel, shrinkLevel, debugInfo, zeroFilledMemory);
    },
    formatDiagnostic(message, useColors, showContext) {
      // src/diagnostics/formatDiagnosticMessage(src/diagnostics/DiagnosticMessage, bool?, bool?) => ~lib/string/String
      message = __lowerInternref(message) || __notnull();
      useColors = useColors ? 1 : 0;
      showContext = showContext ? 1 : 0;
      exports.__setArgumentsLength(arguments.length);
      return __liftString(exports.formatDiagnostic(message, useColors, showContext) >>> 0);
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 2) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  class Internref extends Number {}
  const registry = new FinalizationRegistry(__release);
  function __liftInternref(pointer) {
    if (!pointer) return null;
    const sentinel = new Internref(__retain(pointer));
    registry.register(sentinel, pointer);
    return sentinel;
  }
  function __lowerInternref(value) {
    if (value == null) return 0;
    if (value instanceof Internref) return value.valueOf();
    throw TypeError("internref expected");
  }
  const refcounts = new Map();
  function __retain(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount) refcounts.set(pointer, refcount + 1);
      else refcounts.set(exports.__pin(pointer), 1);
    }
    return pointer;
  }
  function __release(pointer) {
    if (pointer) {
      const refcount = refcounts.get(pointer);
      if (refcount === 1) exports.__unpin(pointer), refcounts.delete(pointer);
      else if (refcount) refcounts.set(pointer, refcount - 1);
      else throw Error(`invalid refcount '${refcount}' for reference '${pointer}'`);
    }
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  exports._initialize();
  return adaptedExports;
}
export const {
  memory,
  __new,
  __pin,
  __unpin,
  __collect,
  __rtti_base,
  newOptions,
  setTarget,
  setRuntime,
  setNoAssert,
  setExportMemory,
  setImportMemory,
  setInitialMemory,
  setMaximumMemory,
  setSharedMemory,
  setImportTable,
  setExportTable,
  setSourceMap,
  setUncheckedBehavior,
  setMemoryBase,
  setTableBase,
  addGlobalAlias,
  removeGlobalAlias,
  setExportStart,
  setNoUnsafe,
  setLowMemoryLimit,
  setExportRuntime,
  DEFAULT_STACK_SIZE,
  setStackSize,
  setBundleVersion,
  FEATURE_SIGN_EXTENSION,
  FEATURE_MUTABLE_GLOBALS,
  FEATURE_NONTRAPPING_F2I,
  FEATURE_BULK_MEMORY,
  FEATURE_SIMD,
  FEATURE_THREADS,
  FEATURE_EXCEPTION_HANDLING,
  FEATURE_TAIL_CALLS,
  FEATURE_REFERENCE_TYPES,
  FEATURE_MULTI_VALUE,
  FEATURE_GC,
  FEATURE_MEMORY64,
  FEATURE_RELAXED_SIMD,
  FEATURE_EXTENDED_CONST,
  FEATURE_STRINGREF,
  FEATURES_ALL,
  FEATURES_DEFAULT,
  setFeature,
  setOptimizeLevelHints,
  setBasenameHint,
  setBindingsHint,
  setPedantic,
  setDebugInfo,
  newProgram,
  nextDiagnostic,
  getSource,
  getDiagnosticCode,
  getDiagnosticCategory,
  getDiagnosticMessage,
  getDiagnosticRange,
  getDiagnosticRelatedRange,
  getRangeStart,
  getRangeEnd,
  getRangeSource,
  getSourceNormalizedPath,
  isInfo,
  isWarning,
  isError,
  parse,
  nextFile,
  getDependee,
  initializeProgram,
  compile,
  buildTSD,
  buildJS,
  getBinaryenModuleRef,
  validate,
  optimize,
  formatDiagnostic,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    binaryen: __maybeDefault(__import0),
  }
))(new URL("assemblyscript.release.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
