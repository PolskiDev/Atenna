declare module "types:assemblyscript/src/common" {
    /**
     * @fileoverview Common constants used by various parts of the compiler.
     * @license Apache-2.0
     */
    /** Indicates traits of a {@link Node} or {@link Element}. */
    export const enum CommonFlags {
        /** No flags set. */
        None = 0,
        /** Has an `import` modifier. */
        Import = 1,
        /** Has an `export` modifier. */
        Export = 2,
        /** Has a `declare` modifier. */
        Declare = 4,
        /** Has a `const` modifier. */
        Const = 8,
        /** Has a `let` modifier. */
        Let = 16,
        /** Has a `static` modifier. */
        Static = 32,
        /** Has a `readonly` modifier. */
        Readonly = 64,
        /** Has an `abstract` modifier. */
        Abstract = 128,
        /** Has a `public` modifier. */
        Public = 256,
        /** Has a `private` modifier. */
        Private = 512,
        /** Has a `protected` modifier. */
        Protected = 1024,
        /** Has a `get` modifier. */
        Get = 2048,
        /** Has a `set` modifier. */
        Set = 4096,
        /** Has a `override` modifier.  */
        Override = 8192,
        /** Has a definite assignment assertion `!` as in `x!: i32;`. */
        DefinitelyAssigned = 16384,
        /** Is ambient, that is either declared or nested in a declared element. */
        Ambient = 32768,
        /** Is generic. */
        Generic = 65536,
        /** Is part of a generic context. */
        GenericContext = 131072,
        /** Is an instance member. */
        Instance = 262144,
        /** Is a constructor. */
        Constructor = 524288,
        /** Is a module export. */
        ModuleExport = 1048576,
        /** Is a module import. */
        ModuleImport = 2097152,
        /** Is resolved. */
        Resolved = 4194304,
        /** Is compiled. */
        Compiled = 8388608,
        /** Did error. */
        Errored = 16777216,
        /** Has a constant value and is therefore inlined. */
        Inlined = 33554432,
        /** Is scoped. */
        Scoped = 67108864,
        /** Is a stub. */
        Stub = 134217728,
        /** Is an overridden method. */
        Overridden = 268435456,
        /** Is (part of) a closure. */
        Closure = 536870912,
        /** Is quoted. */
        Quoted = 1073741824,
        /** Is internally nullable. */
        InternallyNullable = -2147483648
    }
    /** Path delimiter inserted between file system levels. */
    export const PATH_DELIMITER = "/";
    /** Substitution used to indicate the parent directory. */
    export const PARENT_SUBST = "..";
    /** Function name prefix used for getters. */
    export const GETTER_PREFIX = "get:";
    /** Function name prefix used for setters. */
    export const SETTER_PREFIX = "set:";
    /** Delimiter used between class names and instance members. */
    export const INSTANCE_DELIMITER = "#";
    /** Delimiter used between class and namespace names and static members. */
    export const STATIC_DELIMITER = ".";
    /** Delimiter used between a function and its inner elements. */
    export const INNER_DELIMITER = "~";
    /** Substitution used to indicate a library directory. */
    export const LIBRARY_SUBST = "~lib";
    /** Library directory prefix. */
    export const LIBRARY_PREFIX: string;
    /** Path index suffix. */
    export const INDEX_SUFFIX: string;
    /** Stub function delimiter. */
    export const STUB_DELIMITER = "@";
    /** Common names. */
    export namespace CommonNames {
        const Empty = "";
        const i8 = "i8";
        const i16 = "i16";
        const i32 = "i32";
        const i64 = "i64";
        const isize = "isize";
        const u8 = "u8";
        const u16 = "u16";
        const u32 = "u32";
        const u64 = "u64";
        const usize = "usize";
        const bool = "bool";
        const f32 = "f32";
        const f64 = "f64";
        const v128 = "v128";
        const ref_func = "ref_func";
        const ref_extern = "ref_extern";
        const ref_any = "ref_any";
        const ref_eq = "ref_eq";
        const ref_struct = "ref_struct";
        const ref_array = "ref_array";
        const ref_i31 = "ref_i31";
        const ref_string = "ref_string";
        const ref_stringview_wtf8 = "ref_stringview_wtf8";
        const ref_stringview_wtf16 = "ref_stringview_wtf16";
        const ref_stringview_iter = "ref_stringview_iter";
        const i8x16 = "i8x16";
        const u8x16 = "u8x16";
        const i16x8 = "i16x8";
        const u16x8 = "u16x8";
        const i32x4 = "i32x4";
        const u32x4 = "u32x4";
        const i64x2 = "i64x2";
        const u64x2 = "u64x2";
        const f32x4 = "f32x4";
        const f64x2 = "f64x2";
        const void_ = "void";
        const number = "number";
        const boolean = "boolean";
        const string = "string";
        const native = "native";
        const indexof = "indexof";
        const valueof = "valueof";
        const returnof = "returnof";
        const nonnull = "nonnull";
        const null_ = "null";
        const true_ = "true";
        const false_ = "false";
        const this_ = "this";
        const super_ = "super";
        const constructor = "constructor";
        const ASC_TARGET = "ASC_TARGET";
        const ASC_RUNTIME = "ASC_RUNTIME";
        const ASC_NO_ASSERT = "ASC_NO_ASSERT";
        const ASC_MEMORY_BASE = "ASC_MEMORY_BASE";
        const ASC_TABLE_BASE = "ASC_TABLE_BASE";
        const ASC_OPTIMIZE_LEVEL = "ASC_OPTIMIZE_LEVEL";
        const ASC_SHRINK_LEVEL = "ASC_SHRINK_LEVEL";
        const ASC_LOW_MEMORY_LIMIT = "ASC_LOW_MEMORY_LIMIT";
        const ASC_EXPORT_RUNTIME = "ASC_EXPORT_RUNTIME";
        const ASC_FEATURE_SIGN_EXTENSION = "ASC_FEATURE_SIGN_EXTENSION";
        const ASC_FEATURE_MUTABLE_GLOBALS = "ASC_FEATURE_MUTABLE_GLOBALS";
        const ASC_FEATURE_NONTRAPPING_F2I = "ASC_FEATURE_NONTRAPPING_F2I";
        const ASC_FEATURE_BULK_MEMORY = "ASC_FEATURE_BULK_MEMORY";
        const ASC_FEATURE_SIMD = "ASC_FEATURE_SIMD";
        const ASC_FEATURE_THREADS = "ASC_FEATURE_THREADS";
        const ASC_FEATURE_EXCEPTION_HANDLING = "ASC_FEATURE_EXCEPTION_HANDLING";
        const ASC_FEATURE_TAIL_CALLS = "ASC_FEATURE_TAIL_CALLS";
        const ASC_FEATURE_REFERENCE_TYPES = "ASC_FEATURE_REFERENCE_TYPES";
        const ASC_FEATURE_MULTI_VALUE = "ASC_FEATURE_MULTI_VALUE";
        const ASC_FEATURE_GC = "ASC_FEATURE_GC";
        const ASC_FEATURE_MEMORY64 = "ASC_FEATURE_MEMORY64";
        const ASC_FEATURE_RELAXED_SIMD = "ASC_FEATURE_RELAXED_SIMD";
        const ASC_FEATURE_EXTENDED_CONST = "ASC_FEATURE_EXTENDED_CONST";
        const ASC_FEATURE_STRINGREF = "ASC_FEATURE_STRINGREF";
        const ASC_VERSION_MAJOR = "ASC_VERSION_MAJOR";
        const ASC_VERSION_MINOR = "ASC_VERSION_MINOR";
        const ASC_VERSION_PATCH = "ASC_VERSION_PATCH";
        const I8 = "I8";
        const I16 = "I16";
        const I32 = "I32";
        const I64 = "I64";
        const Isize = "Isize";
        const U8 = "U8";
        const U16 = "U16";
        const U32 = "U32";
        const U64 = "U64";
        const Usize = "Usize";
        const Bool = "Bool";
        const F32 = "F32";
        const F64 = "F64";
        const V128 = "V128";
        const RefFunc = "RefFunc";
        const RefExtern = "RefExtern";
        const RefAny = "RefAny";
        const RefEq = "RefEq";
        const RefStruct = "RefStruct";
        const RefArray = "RefArray";
        const RefI31 = "RefI31";
        const RefString = "RefString";
        const String = "String";
        const RegExp = "RegExp";
        const Object = "Object";
        const Array = "Array";
        const StaticArray = "StaticArray";
        const Set = "Set";
        const Map = "Map";
        const Function = "Function";
        const ArrayBufferView = "ArrayBufferView";
        const ArrayBuffer = "ArrayBuffer";
        const Math = "Math";
        const Mathf = "Mathf";
        const NativeMath = "NativeMath";
        const NativeMathf = "NativeMathf";
        const Int8Array = "Int8Array";
        const Int16Array = "Int16Array";
        const Int32Array = "Int32Array";
        const Int64Array = "Int64Array";
        const Uint8Array = "Uint8Array";
        const Uint8ClampedArray = "Uint8ClampedArray";
        const Uint16Array = "Uint16Array";
        const Uint32Array = "Uint32Array";
        const Uint64Array = "Uint64Array";
        const Float32Array = "Float32Array";
        const Float64Array = "Float64Array";
        const TemplateStringsArray = "TemplateStringsArray";
        const Error = "Error";
        const abort = "abort";
        const trace = "trace";
        const seed = "seed";
        const pow = "pow";
        const ipow32 = "ipow32";
        const ipow64 = "ipow64";
        const mod = "mod";
        const alloc = "__alloc";
        const realloc = "__realloc";
        const free = "__free";
        const new_ = "__new";
        const renew = "__renew";
        const link = "__link";
        const collect = "__collect";
        const visit = "__visit";
        const newBuffer = "__newBuffer";
        const newArray = "__newArray";
        const BLOCK = "~lib/rt/common/BLOCK";
        const OBJECT = "~lib/rt/common/OBJECT";
        const DefaultMemory = "0";
        const DefaultTable = "0";
    }
    export { Feature, featureToString } from "types:assemblyscript/std/assembly/shared/feature";
    export { Target } from "types:assemblyscript/std/assembly/shared/target";
    export { Runtime } from "types:assemblyscript/std/assembly/shared/runtime";
    export { Typeinfo, TypeinfoFlags } from "types:assemblyscript/std/assembly/shared/typeinfo";
}
declare module "types:assemblyscript/src/diagnosticMessages.generated" {
    /** Enum of available diagnostic codes. */
    export enum DiagnosticCode {
        Not_implemented_0 = 100,
        Operation_is_unsafe = 101,
        User_defined_0 = 102,
        Feature_0_is_not_enabled = 103,
        Low_memory_limit_exceeded_by_static_data_0_1 = 104,
        Module_requires_at_least_0_pages_of_initial_memory = 105,
        Module_requires_at_least_0_pages_of_maximum_memory = 106,
        Shared_memory_requires_maximum_memory_to_be_defined = 107,
        Shared_memory_requires_feature_threads_to_be_enabled = 108,
        Transform_0_1 = 109,
        Start_function_name_0_is_invalid_or_conflicts_with_another_export = 110,
        Element_0_not_found = 111,
        Exchange_of_0_values_is_not_supported_by_all_embeddings = 112,
        Conversion_from_type_0_to_1_requires_an_explicit_cast = 200,
        Conversion_from_type_0_to_1_will_require_an_explicit_cast_when_switching_between_32_64_bit = 201,
        Type_0_cannot_be_changed_to_type_1 = 202,
        Operation_0_cannot_be_applied_to_type_1 = 203,
        Type_0_cannot_be_nullable = 204,
        Mutable_value_cannot_be_inlined = 206,
        Unmanaged_classes_cannot_extend_managed_classes_and_vice_versa = 207,
        Unmanaged_classes_cannot_implement_interfaces = 208,
        Invalid_regular_expression_flags = 209,
        Expression_is_never_null = 210,
        Class_0_is_final_and_cannot_be_extended = 211,
        Decorator_0_is_not_valid_here = 212,
        Duplicate_decorator = 213,
        Type_0_is_illegal_in_this_context = 214,
        Optional_parameter_must_have_an_initializer = 215,
        Class_0_cannot_declare_a_constructor_when_instantiated_from_an_object_literal = 216,
        Function_0_cannot_be_inlined_into_itself = 217,
        Cannot_access_method_0_without_calling_it_as_it_requires_this_to_be_set = 218,
        Optional_properties_are_not_supported = 219,
        Expression_must_be_a_compile_time_constant = 220,
        Type_0_is_not_a_function_index_or_function_reference = 221,
        _0_must_be_a_value_between_1_and_2_inclusive = 222,
        _0_must_be_a_power_of_two = 223,
        _0_is_not_a_valid_operator = 224,
        Expression_cannot_be_represented_by_a_type = 225,
        Expression_resolves_to_unusual_type_0 = 226,
        Array_literal_expected = 227,
        Function_0_is_virtual_and_will_not_be_inlined = 228,
        Property_0_only_has_a_setter_and_is_missing_a_getter = 229,
        _0_keyword_cannot_be_used_here = 230,
        A_class_with_a_constructor_explicitly_returning_something_else_than_this_must_be_final = 231,
        Property_0_is_always_assigned_before_being_used = 233,
        Expression_does_not_compile_to_a_value_at_runtime = 234,
        Only_variables_functions_and_enums_become_WebAssembly_module_exports = 235,
        Literal_0_does_not_fit_into_i64_or_u64_types = 236,
        Index_signature_accessors_in_type_0_differ_in_types = 237,
        Initializer_definitive_assignment_or_nullable_type_expected = 238,
        Definitive_assignment_has_no_effect_on_local_variables = 239,
        Importing_the_table_disables_some_indirect_call_optimizations = 901,
        Exporting_the_table_disables_some_indirect_call_optimizations = 902,
        Expression_compiles_to_a_dynamic_check_at_runtime = 903,
        Indexed_access_may_involve_bounds_checking = 904,
        Explicitly_returning_constructor_drops_this_allocation = 905,
        Unnecessary_definite_assignment = 906,
        _NaN_does_not_compare_equal_to_any_other_value_including_itself_Use_isNaN_x_instead = 907,
        Comparison_with_0_0_is_sign_insensitive_Use_Object_is_x_0_0_if_the_sign_matters = 908,
        Unterminated_string_literal = 1002,
        Identifier_expected = 1003,
        _0_expected = 1005,
        A_file_cannot_have_a_reference_to_itself = 1006,
        Trailing_comma_not_allowed = 1009,
        Unexpected_token = 1012,
        A_rest_parameter_must_be_last_in_a_parameter_list = 1014,
        Parameter_cannot_have_question_mark_and_initializer = 1015,
        A_required_parameter_cannot_follow_an_optional_parameter = 1016,
        _0_modifier_cannot_appear_on_class_elements_of_this_kind = 1031,
        Statements_are_not_allowed_in_ambient_contexts = 1036,
        Initializers_are_not_allowed_in_ambient_contexts = 1039,
        _0_modifier_cannot_be_used_here = 1042,
        A_rest_parameter_cannot_be_optional = 1047,
        A_rest_parameter_cannot_have_an_initializer = 1048,
        A_set_accessor_must_have_exactly_one_parameter = 1049,
        A_set_accessor_parameter_cannot_have_an_initializer = 1052,
        A_get_accessor_cannot_have_parameters = 1054,
        Enum_member_must_have_initializer = 1061,
        Type_parameters_cannot_appear_on_a_constructor_declaration = 1092,
        Type_annotation_cannot_appear_on_a_constructor_declaration = 1093,
        An_accessor_cannot_have_type_parameters = 1094,
        A_set_accessor_cannot_have_a_return_type_annotation = 1095,
        Type_parameter_list_cannot_be_empty = 1098,
        Type_argument_list_cannot_be_empty = 1099,
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement = 1104,
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement = 1105,
        A_return_statement_can_only_be_used_within_a_function_body = 1108,
        Expression_expected = 1109,
        Type_expected = 1110,
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement = 1113,
        Duplicate_label_0 = 1114,
        An_export_assignment_cannot_have_modifiers = 1120,
        Octal_literals_are_not_allowed_in_strict_mode = 1121,
        Digit_expected = 1124,
        Hexadecimal_digit_expected = 1125,
        Unexpected_end_of_text = 1126,
        Invalid_character = 1127,
        _case_or_default_expected = 1130,
        _super_must_be_followed_by_an_argument_list_or_member_access = 1034,
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context = 1038,
        Type_argument_expected = 1140,
        String_literal_expected = 1141,
        Line_break_not_permitted_here = 1142,
        Declaration_expected = 1146,
        _const_declarations_must_be_initialized = 1155,
        Unterminated_regular_expression_literal = 1161,
        Declarations_with_initializers_cannot_also_have_definite_assignment_assertions = 1263,
        Interface_declaration_cannot_have_implements_clause = 1176,
        Binary_digit_expected = 1177,
        Octal_digit_expected = 1178,
        An_implementation_cannot_be_declared_in_ambient_contexts = 1183,
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer = 1190,
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive = 1198,
        Unterminated_Unicode_escape_sequence = 1199,
        Decorators_are_not_valid_here = 1206,
        _abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration = 1242,
        Method_0_cannot_have_an_implementation_because_it_is_marked_abstract = 1245,
        A_definite_assignment_assertion_is_not_permitted_in_this_context = 1255,
        A_class_may_only_extend_another_class = 1311,
        A_parameter_property_cannot_be_declared_using_a_rest_parameter = 1317,
        A_default_export_can_only_be_used_in_a_module = 1319,
        An_expression_of_type_0_cannot_be_tested_for_truthiness = 1345,
        An_identifier_or_keyword_cannot_immediately_follow_a_numeric_literal = 1351,
        Duplicate_identifier_0 = 2300,
        Cannot_find_name_0 = 2304,
        Module_0_has_no_exported_member_1 = 2305,
        An_interface_can_only_extend_an_interface = 2312,
        Generic_type_0_requires_1_type_argument_s = 2314,
        Type_0_is_not_generic = 2315,
        Type_0_is_not_assignable_to_type_1 = 2322,
        Property_0_is_private_in_type_1_but_not_in_type_2 = 2325,
        Index_signature_is_missing_in_type_0 = 2329,
        _this_cannot_be_referenced_in_current_location = 2332,
        _this_cannot_be_referenced_in_constructor_arguments = 2333,
        _super_can_only_be_referenced_in_a_derived_class = 2335,
        _super_cannot_be_referenced_in_constructor_arguments = 2336,
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors = 2337,
        Property_0_does_not_exist_on_type_1 = 2339,
        Property_0_is_private_and_only_accessible_within_class_1 = 2341,
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures = 2349,
        This_expression_is_not_constructable = 2351,
        A_function_whose_declared_type_is_not_void_must_return_a_value = 2355,
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access = 2357,
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access = 2364,
        Operator_0_cannot_be_applied_to_types_1_and_2 = 2365,
        A_super_call_must_be_the_first_statement_in_the_constructor = 2376,
        Constructors_for_derived_classes_must_contain_a_super_call = 2377,
        Getter_and_setter_accessors_do_not_agree_in_visibility = 2379,
        _get_and_set_accessor_must_have_the_same_type = 2380,
        Overload_signatures_must_all_be_public_private_or_protected = 2385,
        Constructor_implementation_is_missing = 2390,
        Function_implementation_is_missing_or_not_immediately_following_the_declaration = 2391,
        Multiple_constructor_implementations_are_not_allowed = 2392,
        Duplicate_function_implementation = 2393,
        This_overload_signature_is_not_compatible_with_its_implementation_signature = 2394,
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local = 2395,
        Property_0_in_type_1_is_not_assignable_to_the_same_property_in_base_type_2 = 2416,
        A_class_can_only_implement_an_interface = 2422,
        A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged = 2434,
        Types_have_separate_declarations_of_a_private_property_0 = 2442,
        Property_0_is_protected_in_type_1_but_public_in_type_2 = 2444,
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses = 2445,
        Variable_0_used_before_its_declaration = 2448,
        Cannot_redeclare_block_scoped_variable_0 = 2451,
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly = 2453,
        Variable_0_is_used_before_being_assigned = 2454,
        Type_alias_0_circularly_references_itself = 2456,
        Type_0_has_no_property_1 = 2460,
        The_0_operator_cannot_be_applied_to_type_1 = 2469,
        In_const_enum_declarations_member_initializer_must_be_constant_expression = 2474,
        Export_declaration_conflicts_with_exported_declaration_of_0 = 2484,
        _0_is_referenced_directly_or_indirectly_in_its_own_base_expression = 2506,
        Cannot_create_an_instance_of_an_abstract_class = 2511,
        Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_2 = 2515,
        Object_is_possibly_null = 2531,
        Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property = 2540,
        The_target_of_an_assignment_must_be_a_variable_or_a_property_access = 2541,
        Index_signature_in_type_0_only_permits_reading = 2542,
        Expected_0_arguments_but_got_1 = 2554,
        Expected_at_least_0_arguments_but_got_1 = 2555,
        Expected_0_type_arguments_but_got_1 = 2558,
        Property_0_has_no_initializer_and_is_not_assigned_in_the_constructor_before_this_is_used_or_returned = 2564,
        Property_0_is_used_before_being_assigned = 2565,
        _0_is_defined_as_an_accessor_in_class_1_but_is_overridden_here_in_2_as_an_instance_property = 2610,
        _0_is_defined_as_a_property_in_class_1_but_is_overridden_here_in_2_as_an_accessor = 2611,
        A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums = 2651,
        Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration = 2673,
        Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration = 2674,
        Cannot_extend_a_class_0_Class_constructor_is_marked_as_private = 2675,
        The_this_types_of_each_signature_are_incompatible = 2685,
        Namespace_0_has_no_exported_member_1 = 2694,
        Required_type_parameters_may_not_follow_optional_type_parameters = 2706,
        Duplicate_property_0 = 2718,
        Property_0_is_missing_in_type_1_but_required_in_type_2 = 2741,
        Type_0_has_no_call_signatures = 2757,
        This_member_cannot_have_an_override_modifier_because_it_is_not_declared_in_the_base_class_0 = 4117,
        File_0_not_found = 6054,
        Numeric_separators_are_not_allowed_here = 6188,
        Multiple_consecutive_numeric_separators_are_not_permitted = 6189,
        This_expression_is_not_callable_because_it_is_a_get_accessor_Did_you_mean_to_use_it_without = 6234,
        _super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class = 17009,
        _super_must_be_called_before_accessing_a_property_of_super_in_the_constructor_of_a_derived_class = 17011
    }
    /** Translates a diagnostic code to its respective string. */
    export function diagnosticCodeToString(code: DiagnosticCode): string;
}
declare module "types:assemblyscript/src/util/binary" {
    /**
     * @fileoverview Various binary reading and writing utility.
     * @license Apache-2.0
     */
    /** Reads an 8-bit integer from the specified buffer. */
    export function readI8(buffer: Uint8Array, offset: number): number;
    /** Writes an 8-bit integer to the specified buffer. */
    export function writeI8(value: number, buffer: Uint8Array, offset: number): void;
    /** Reads a 16-bit integer from the specified buffer. */
    export function readI16(buffer: Uint8Array, offset: number): number;
    /** Writes a 16-bit integer to the specified buffer. */
    export function writeI16(value: number, buffer: Uint8Array, offset: number): void;
    /** Reads a 32-bit integer from the specified buffer. */
    export function readI32(buffer: Uint8Array, offset: number): number;
    /** Writes a 32-bit integer to the specified buffer. */
    export function writeI32(value: number, buffer: Uint8Array, offset: number): void;
    /** Writes a 32-bit integer as a 64-bit integer to the specified buffer. */
    export function writeI32AsI64(value: number, buffer: Uint8Array, offset: number, unsigned?: boolean): void;
    /** Reads a 64-bit integer from the specified buffer. */
    export function readI64(buffer: Uint8Array, offset: number): i64;
    /** Writes a 64-bit integer to the specified buffer. */
    export function writeI64(value: i64, buffer: Uint8Array, offset: number): void;
    /** Writes a 64-bit integer as a 32-bit integer to the specified buffer. */
    export function writeI64AsI32(value: i64, buffer: Uint8Array, offset: number, unsigned?: boolean): void;
    /** Reads a 32-bit float from the specified buffer. */
    export function readF32(buffer: Uint8Array, offset: number): number;
    /** Writes a 32-bit float to the specified buffer. */
    export function writeF32(value: number, buffer: Uint8Array, offset: number): void;
    /** Reads a 64-bit float from the specified buffer. */
    export function readF64(buffer: Uint8Array, offset: number): number;
    /** Writes a 64-bit float to the specified buffer. */
    export function writeF64(value: number, buffer: Uint8Array, offset: number): void;
    /** Reads a 128-bit vector from the specified buffer. */
    export function readV128(buffer: Uint8Array, offset: number): Uint8Array;
    /** Writes a 128-bit vector to the specified buffer. */
    export function writeV128(value: Uint8Array, buffer: Uint8Array, offset: number): void;
}
declare module "types:assemblyscript/src/util/collections" {
    /**
     * @fileoverview Various collections utility.
     * @license Apache-2.0
     */
    /** Clone map. Typically used to track contextual type arguments. */
    export function cloneMap<K, V>(map: Map<K, V> | null): Map<K, V>;
    /** Merge two maps in into new one. */
    export function mergeMaps<K, V>(map1: Map<K, V>, map2: Map<K, V>): Map<K, V>;
    /** BitSet represent growable sequence of N bits. It's faster alternative of Set<i32> when elements
     * are not too much sparsed. Also it's more memory and cache efficient than Array<bool>.
     * The best way to use it for short bit sequences (less than 32*(2**16)).
     */
    export class BitSet {
        words: Uint32Array;
        constructor();
        get size(): number;
        add(index: number): this;
        delete(index: number): void;
        has(index: number): boolean;
        clear(): void;
        toArray(): number[];
        toString(): string;
    }
}
declare module "types:assemblyscript/src/util/math" {
    /**
     * @fileoverview Various math utility.
     * @license Apache-2.0
     */
    /** Tests if `x` is a power of two. */
    export function isPowerOf2(x: number): boolean;
    export function accuratePow64(x: number, y: number): number;
}
declare module "types:assemblyscript/src/util/text" {
    /**
     * @fileoverview Various character and text utility.
     * @license Apache-2.0
     */
    /** An enum of named character codes. */
    export const enum CharCode {
        Null = 0,
        LineFeed = 10,
        CarriageReturn = 13,
        LineSeparator = 8232,
        ParagraphSeparator = 8233,
        NextLine = 133,
        Space = 32,
        NonBreakingSpace = 160,
        EnQuad = 8192,
        EmQuad = 8193,
        EnSpace = 8194,
        EmSpace = 8195,
        ThreePerEmSpace = 8196,
        FourPerEmSpace = 8197,
        SixPerEmSpace = 8198,
        FigureSpace = 8199,
        PunctuationSpace = 8200,
        ThinSpace = 8201,
        HairSpace = 8202,
        ZeroWidthSpace = 8203,
        NarrowNoBreakSpace = 8239,
        IdeographicSpace = 12288,
        MathematicalSpace = 8287,
        Ogham = 5760,
        _ = 95,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        Ampersand = 38,
        Asterisk = 42,
        At = 64,
        Backslash = 92,
        Backtick = 96,
        Bar = 124,
        Caret = 94,
        CloseBrace = 125,
        CloseBracket = 93,
        CloseParen = 41,
        Colon = 58,
        Comma = 44,
        Dollar = 36,
        Dot = 46,
        DoubleQuote = 34,
        Equals = 61,
        Exclamation = 33,
        GreaterThan = 62,
        Hash = 35,
        LessThan = 60,
        Minus = 45,
        OpenBrace = 123,
        OpenBracket = 91,
        OpenParen = 40,
        Percent = 37,
        Plus = 43,
        Question = 63,
        Semicolon = 59,
        SingleQuote = 39,
        Slash = 47,
        Tilde = 126,
        Backspace = 8,
        FormFeed = 12,
        ByteOrderMark = 65279,
        Tab = 9,
        VerticalTab = 11
    }
    /** Tests if the specified character code is some sort of line break. */
    export function isLineBreak(c: number): boolean;
    /** Tests if the specified character code is some sort of white space. */
    export function isWhiteSpace(c: number): boolean;
    /** First high (lead) surrogate. */
    export const SURROGATE_HIGH = 55296;
    /** First low (trail) surrogate. */
    export const SURROGATE_LOW = 56320;
    /** Tests if a code unit or code point is a surrogate. */
    export function isSurrogate(c: number): boolean;
    /** Tests if a surrogate is a high (lead) surrogate. */
    export function isSurrogateHigh(c: number): boolean;
    /** Tests if a surrogate is a low (trail) surrogate. */
    export function isSurrogateLow(c: number): boolean;
    /** Tests if a code unit or code point is a high (lead) surrogate. */
    export function isHighSurrogate(c: number): boolean;
    /** Tests if a code unit or code point is a low (trail) surrogate. */
    export function isLowSurrogate(c: number): boolean;
    /** Converts a surrogate pair to its respective code point. */
    export function combineSurrogates(hi: number, lo: number): number;
    /** Gets the number of UTF-16 code units of the specified code point. */
    export function numCodeUnits(cp: number): number;
    export function isAlpha(c: number): boolean;
    /** Tests if the specified character code is a valid decimal digit. */
    export function isDecimal(c: number): boolean;
    /** Tests if the specified character code is a valid octal digit. */
    export function isOctal(c: number): boolean;
    /** Tests if the specified character code is a valid hexadecimal symbol [a-f]. */
    export function isHexBase(c: number): boolean;
    /** Tests if the specified character code is a valid hexadecimal digit. */
    export function isHexOrDecimal(c: number): boolean;
    /** Tests if the specified character code is trivially alphanumeric. */
    export function isAlphaOrDecimal(c: number): boolean;
    /** Tests if the specified code point is a valid start of an identifier. */
    export function isIdentifierStart(cp: number): boolean;
    /** Tests if the specified code point is a valid part of an identifier. */
    export function isIdentifierPart(cp: number): boolean;
    /** Tests if the specified string is a valid identifer. */
    export function isIdentifier(str: string): boolean;
    export function indent(sb: string[], level: number): void;
    /** Escapes a string using the specified kind of quote. */
    export function escapeString(str: string, quote: CharCode): string;
}
declare module "types:assemblyscript/src/util/path" {
    /**
     * @fileoverview Various file path utility.
     * @license Apache-2.0
     */
    /**
     * Normalizes the specified path, removing interior placeholders.
     * Expects a posix-compatible relative path (not Windows compatible).
     */
    export function normalizePath(path: string): string;
    /** Resolves the specified path relative to the specified origin. */
    export function resolvePath(normalizedPath: string, origin: string): string;
    /** Obtains the directory portion of a normalized path. */
    export function dirname(normalizedPath: string): string;
}
declare module "types:assemblyscript/src/util/terminal" {
    /**
     * @fileoverview Terminal utility.
     * @license Apache-2.0
     */
    /** Gray terminal color code. */
    export const COLOR_GRAY = "\u001B[90m";
    /** Red terminal color code. */
    export const COLOR_RED = "\u001B[91m";
    /** Green terminal color code. */
    export const COLOR_GREEN = "\u001B[92m";
    /** Yellow terminal color code. */
    export const COLOR_YELLOW = "\u001B[93m";
    /** Blue terminal color code. */
    export const COLOR_BLUE = "\u001B[94m";
    /** Magenta terminal color code. */
    export const COLOR_MAGENTA = "\u001B[95m";
    /** Cyan terminal color code. */
    export const COLOR_CYAN = "\u001B[96m";
    /** White terminal color code. */
    export const COLOR_WHITE = "\u001B[97m";
    /** Terminal color reset code. */
    export const COLOR_RESET = "\u001B[0m";
    /** Checks whether terminal colors are enabled or not. */
    export function isColorsEnabled(): boolean;
    /** Sets whether terminal colors are enabled or not. */
    export function setColorsEnabled(isEnabled: boolean): boolean;
    /** Wraps the specified text in the specified terminal color code. */
    export function colorize(text: string, color: string): string;
}
declare module "types:assemblyscript/src/util/vector" {
    /**
     * @fileoverview Various vector utility.
     * @license Apache-2.0
     */
    /** v128 zero constant. */
    export const v128_zero: Uint8Array;
    /** v128 all ones constant. */
    export const v128_ones: Uint8Array;
}
declare module "types:assemblyscript/src/util" {
    /**
     * @fileoverview Various utility.
     * @license Apache-2.0
     */
    export * from "types:assemblyscript/src/util/binary";
    export * from "types:assemblyscript/src/util/collections";
    export * from "types:assemblyscript/src/util/math";
    export * from "types:assemblyscript/src/util/path";
    export * from "types:assemblyscript/src/util/terminal";
    export * from "types:assemblyscript/src/util/text";
    export * from "types:assemblyscript/src/util/vector";
}
declare module "types:assemblyscript/src/diagnostics" {
    /**
     * @fileoverview Shared diagnostic handling.
     * @license Apache-2.0
     */
    import { Source } from "types:assemblyscript/src/ast";
    import { DiagnosticCode } from "types:assemblyscript/src/diagnosticMessages.generated";
    export { DiagnosticCode, diagnosticCodeToString } from "types:assemblyscript/src/diagnosticMessages.generated";
    /** Indicates the category of a {@link DiagnosticMessage}. */
    export const enum DiagnosticCategory {
        /** Overly pedantic message. */
        Pedantic = 0,
        /** Informatory message. */
        Info = 1,
        /** Warning message. */
        Warning = 2,
        /** Error message. */
        Error = 3
    }
    export class Range {
        start: number;
        end: number;
        source: Source;
        constructor(start: number, end: number);
        static join(a: Range, b: Range): Range;
        equals(other: Range): boolean;
        get atStart(): Range;
        get atEnd(): Range;
        toString(): string;
    }
    /** Returns the string representation of the specified diagnostic category. */
    export function diagnosticCategoryToString(category: DiagnosticCategory): string;
    /** Returns the ANSI escape sequence for the specified category. */
    export function diagnosticCategoryToColor(category: DiagnosticCategory): string;
    /** Represents a diagnostic message. */
    export class DiagnosticMessage {
        /** Message code. */
        code: number;
        /** Message category. */
        category: DiagnosticCategory;
        /** Message text. */
        message: string;
        /** Respective source range, if any. */
        range: Range | null;
        /** Related range, if any. */
        relatedRange: Range | null;
        /** Constructs a new diagnostic message. */
        private constructor();
        /** Creates a new diagnostic message of the specified category. */
        static create(code: DiagnosticCode, category: DiagnosticCategory, arg0?: string | null, arg1?: string | null, arg2?: string | null): DiagnosticMessage;
        /** Tests if this message equals the specified. */
        equals(other: DiagnosticMessage): boolean;
        /** Adds a source range to this message. */
        withRange(range: Range): this;
        /** Adds a related source range to this message. */
        withRelatedRange(range: Range): this;
        /** Converts this message to a string. */
        toString(): string;
    }
    /** Formats a diagnostic message, optionally with terminal colors and source context. */
    export function formatDiagnosticMessage(message: DiagnosticMessage, useColors?: boolean, showContext?: boolean): string;
    /** Base class of all diagnostic emitters. */
    export abstract class DiagnosticEmitter {
        /** Diagnostic messages emitted so far. */
        diagnostics: DiagnosticMessage[];
        /** Diagnostic messages already seen, by range. */
        private seen;
        /** Initializes this diagnostic emitter. */
        protected constructor(diagnostics?: DiagnosticMessage[] | null);
        /** Emits a diagnostic message of the specified category. */
        emitDiagnostic(code: DiagnosticCode, category: DiagnosticCategory, range: Range | null, relatedRange: Range | null, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an overly pedantic diagnostic message. */
        pedantic(code: DiagnosticCode, range: Range | null, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an overly pedantic diagnostic message with a related range. */
        pedanticRelated(code: DiagnosticCode, range: Range, relatedRange: Range, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an informatory diagnostic message. */
        info(code: DiagnosticCode, range: Range | null, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an informatory diagnostic message with a related range. */
        infoRelated(code: DiagnosticCode, range: Range, relatedRange: Range, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits a warning diagnostic message. */
        warning(code: DiagnosticCode, range: Range | null, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits a warning diagnostic message with a related range. */
        warningRelated(code: DiagnosticCode, range: Range, relatedRange: Range, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an error diagnostic message. */
        error(code: DiagnosticCode, range: Range | null, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
        /** Emits an error diagnostic message with a related range. */
        errorRelated(code: DiagnosticCode, range: Range, relatedRange: Range, arg0?: string | null, arg1?: string | null, arg2?: string | null): void;
    }
}
declare module "types:assemblyscript/src/tokenizer" {
    /**
     * @fileoverview A TypeScript tokenizer modified for AssemblyScript.
     *
     * The `Tokenizer` scans over a source file and returns one syntactic token
     * at a time that the parser will combine to an abstract syntax tree.
     *
     * It skips over trivia like comments and whitespace and provides a general
     * mark/reset mechanism for the parser to utilize on ambiguous tokens, with
     * one token of lookahead otherwise.
     *
     * @license Apache-2.0
     */
    import { Range, DiagnosticMessage, DiagnosticEmitter } from "types:assemblyscript/src/diagnostics";
    import { Source, CommentKind } from "types:assemblyscript/src/ast";
    /** Named token types. */
    export const enum Token {
        Abstract = 0,
        As = 1,
        Async = 2,
        Await = 3,
        Break = 4,
        Case = 5,
        Catch = 6,
        Class = 7,
        Const = 8,
        Continue = 9,
        Constructor = 10,
        Debugger = 11,
        Declare = 12,
        Default = 13,
        Delete = 14,
        Do = 15,
        Else = 16,
        Enum = 17,
        Export = 18,
        Extends = 19,
        False = 20,
        Finally = 21,
        For = 22,
        From = 23,
        Function = 24,
        Get = 25,
        If = 26,
        Implements = 27,
        Import = 28,
        In = 29,
        InstanceOf = 30,
        Interface = 31,
        Is = 32,
        KeyOf = 33,
        Let = 34,
        Module = 35,
        Namespace = 36,
        New = 37,
        Null = 38,
        Of = 39,
        Override = 40,
        Package = 41,
        Private = 42,
        Protected = 43,
        Public = 44,
        Readonly = 45,
        Return = 46,
        Set = 47,
        Static = 48,
        Super = 49,
        Switch = 50,
        This = 51,
        Throw = 52,
        True = 53,
        Try = 54,
        Type = 55,
        TypeOf = 56,
        Var = 57,
        Void = 58,
        While = 59,
        With = 60,
        Yield = 61,
        OpenBrace = 62,
        CloseBrace = 63,
        OpenParen = 64,
        CloseParen = 65,
        OpenBracket = 66,
        CloseBracket = 67,
        Dot = 68,
        Dot_Dot_Dot = 69,
        Semicolon = 70,
        Comma = 71,
        LessThan = 72,
        GreaterThan = 73,
        LessThan_Equals = 74,
        GreaterThan_Equals = 75,
        Equals_Equals = 76,
        Exclamation_Equals = 77,
        Equals_Equals_Equals = 78,
        Exclamation_Equals_Equals = 79,
        Equals_GreaterThan = 80,
        Plus = 81,
        Minus = 82,
        Asterisk_Asterisk = 83,
        Asterisk = 84,
        Slash = 85,
        Percent = 86,
        Plus_Plus = 87,
        Minus_Minus = 88,
        LessThan_LessThan = 89,
        GreaterThan_GreaterThan = 90,
        GreaterThan_GreaterThan_GreaterThan = 91,
        Ampersand = 92,
        Bar = 93,
        Caret = 94,
        Exclamation = 95,
        Tilde = 96,
        Ampersand_Ampersand = 97,
        Bar_Bar = 98,
        Question = 99,
        Colon = 100,
        Equals = 101,
        Plus_Equals = 102,
        Minus_Equals = 103,
        Asterisk_Equals = 104,
        Asterisk_Asterisk_Equals = 105,
        Slash_Equals = 106,
        Percent_Equals = 107,
        LessThan_LessThan_Equals = 108,
        GreaterThan_GreaterThan_Equals = 109,
        GreaterThan_GreaterThan_GreaterThan_Equals = 110,
        Ampersand_Equals = 111,
        Bar_Equals = 112,
        Caret_Equals = 113,
        At = 114,
        Identifier = 115,
        StringLiteral = 116,
        IntegerLiteral = 117,
        FloatLiteral = 118,
        TemplateLiteral = 119,
        Invalid = 120,
        EndOfFile = 121
    }
    export const enum IdentifierHandling {
        Default = 0,
        Prefer = 1,
        Always = 2
    }
    export function tokenFromKeyword(text: string): Token;
    export function tokenIsAlsoIdentifier(token: Token): boolean;
    export function isIllegalVariableIdentifier(name: string): boolean;
    export function operatorTokenToString(token: Token): string;
    /** Handler for intercepting comments while tokenizing. */
    export type CommentHandler = (kind: CommentKind, text: string, range: Range) => void;
    enum OnNewLine {
        No = 0,
        Yes = 1,
        Unknown = 2
    }
    /** Tokenizes a source to individual {@link Token}s. */
    export class Tokenizer extends DiagnosticEmitter {
        source: Source;
        end: number;
        pos: number;
        token: Token;
        tokenPos: number;
        nextToken: Token;
        nextTokenPos: number;
        nextTokenOnNewLine: OnNewLine;
        onComment: CommentHandler | null;
        /** Constructs a new tokenizer. */
        constructor(source: Source, diagnostics?: DiagnosticMessage[] | null);
        next(identifierHandling?: IdentifierHandling): Token;
        private unsafeNext;
        peek(identifierHandling?: IdentifierHandling, maxCompoundLength?: number): Token;
        peekOnNewLine(): boolean;
        skipIdentifier(identifierHandling?: IdentifierHandling): boolean;
        skip(token: Token, identifierHandling?: IdentifierHandling): boolean;
        mark(): State;
        discard(state: State): void;
        reset(state: State): void;
        clearNextToken(): void;
        range(start?: number, end?: number): Range;
        readIdentifier(): string;
        readingTemplateString: boolean;
        readStringStart: number;
        readStringEnd: number;
        readString(quote?: number, isTaggedTemplate?: boolean): string;
        readEscapeSequence(isTaggedTemplate?: boolean): string;
        readRegexpPattern(): string;
        readRegexpFlags(): string;
        testInteger(): boolean;
        readInteger(): i64;
        readHexInteger(): i64;
        readDecimalInteger(): i64;
        readOctalInteger(): i64;
        readBinaryInteger(): i64;
        readFloat(): number;
        readDecimalFloat(): number;
        /** Reads past one section of a decimal float literal. Returns the number of separators encountered. */
        private readDecimalFloatPartial;
        readHexFloat(): number;
        readHexadecimalEscape(remain?: number, startIfTaggedTemplate?: number): string;
        checkForIdentifierStartAfterNumericLiteral(): void;
        readUnicodeEscape(startIfTaggedTemplate?: number): string;
        private readExtendedUnicodeEscape;
    }
    /** Tokenizer state as returned by {@link Tokenizer#mark} and consumed by {@link Tokenizer#reset}. */
    export class State {
        /** Current position. */
        pos: number;
        /** Current token. */
        token: Token;
        /** Current token's position. */
        tokenPos: number;
        constructor(
        /** Current position. */
        pos: number, 
        /** Current token. */
        token: Token, 
        /** Current token's position. */
        tokenPos: number);
    }
    export {};
}
declare module "types:assemblyscript/src/types" {
    /**
     * @fileoverview Mappings from AssemblyScript types to WebAssembly types.
     * @license Apache-2.0
     */
    import { Class, Program } from "types:assemblyscript/src/program";
    import { TypeRef } from "types:assemblyscript/src/module";
    /** Indicates the kind of a type. */
    export const enum TypeKind {
        /** A 1-bit unsigned integer. */
        Bool = 0,
        /** An 8-bit signed integer. */
        I8 = 1,
        /** A 16-bit signed integer. */
        I16 = 2,
        /** A 32-bit signed integer. */
        I32 = 3,
        /** A 64-bit signed integer. */
        I64 = 4,
        /** A 32-bit/64-bit signed integer, depending on the target. */
        Isize = 5,
        /** An 8-bit unsigned integer. */
        U8 = 6,
        /** A 16-bit unsigned integer. */
        U16 = 7,
        /** A 32-bit unsigned integer. Also the base of function types. */
        U32 = 8,
        /** A 64-bit unsigned integer. */
        U64 = 9,
        /** A 32-bit/64-bit unsigned integer, depending on the target. Also the base of class types. */
        Usize = 10,
        /** A 32-bit float. */
        F32 = 11,
        /** A 64-bit double. */
        F64 = 12,
        /** A 128-bit vector. */
        V128 = 13,
        /** External reference. */
        Extern = 14,
        /** Function reference. */
        Func = 15,
        /** Any reference. */
        Any = 16,
        /** Equatable reference. */
        Eq = 17,
        /** Struct reference. */
        Struct = 18,
        /** Array reference. */
        Array = 19,
        /** 31-bit integer reference. */
        I31 = 20,
        /** String reference. */
        String = 21,
        /** WTF8 string view. */
        StringviewWTF8 = 22,
        /** WTF16 string view. */
        StringviewWTF16 = 23,
        /** String iterator. */
        StringviewIter = 24,
        /** No return type. */
        Void = 25
    }
    /** Indicates capabilities of a type. */
    export const enum TypeFlags {
        None = 0,
        /** Is a signed type that can represent negative values. */
        Signed = 1,
        /** Is an unsigned type that cannot represent negative values. */
        Unsigned = 2,
        /** Is an integer type. */
        Integer = 4,
        /** Is a floating point type. */
        Float = 8,
        /** Is a varying (in size) type. */
        Varying = 16,
        /** Is smaller than 32-bits. */
        Short = 32,
        /** Is larger than 32-bits. */
        Long = 64,
        /** Is a value type. */
        Value = 128,
        /** Is a reference type (either a class or a function type). */
        Reference = 256,
        /** Is a nullable type. */
        Nullable = 512,
        /** Is a vector type. */
        Vector = 1024,
        /** Is an external type. */
        External = 2048,
        /** Is a class. */
        Class = 4096,
        /** Is a function. */
        Function = 8192
    }
    /** Represents a resolved type. */
    export class Type {
        /** Type kind. */
        kind: TypeKind;
        /** Type flags. */
        flags: TypeFlags;
        /** Size in bits. */
        size: number;
        /** Underlying class reference, if a class type. */
        classReference: Class | null;
        /** Underlying signature reference, if a function type. */
        signatureReference: Signature | null;
        /** Respective non-nullable type, if nullable. */
        private _nonNullableType;
        /** Respective nullable type, if non-nullable. */
        private _nullableType;
        /** Cached Binaryen type reference. */
        ref: TypeRef;
        /** Constructs a new resolved type. */
        constructor(kind: TypeKind, flags: TypeFlags, size: number);
        /** Returns the closest int type representing this type. */
        get intType(): Type;
        /** Substitutes this type with the auto type if this type is void. */
        get exceptVoid(): Type;
        /** Size in bytes. */
        get byteSize(): number;
        /** Gets this type's logarithmic alignment in memory. */
        get alignLog2(): number;
        /** Tests if this type represents a basic value. */
        get isValue(): boolean;
        /** Tests if this type represents an integer value. */
        get isIntegerValue(): boolean;
        /** Tests if this type represents a small (< 32 bits) integer value. */
        get isShortIntegerValue(): boolean;
        /** Tests if this type represents a long (> 32 bits) integer value. */
        get isLongIntegerValue(): boolean;
        /** Tests if this type represents a signed integer value. */
        get isSignedIntegerValue(): boolean;
        /** Tests if this type represents an unsigned integer value. */
        get isUnsignedIntegerValue(): boolean;
        /** Tests if this type represents a varying (in size) integer value. */
        get isVaryingIntegerValue(): boolean;
        /** Tests if this type represents an integer, including references.  */
        get isIntegerInclReference(): boolean;
        /** Tests if this type represents a floating point value. */
        get isFloatValue(): boolean;
        /** Tests if this type represents a numeric (integer or floating point) value. */
        get isNumericValue(): boolean;
        /** Tests if this type represents a boolean value. */
        get isBooleanValue(): boolean;
        /** Tests if this type represents a vector value. */
        get isVectorValue(): boolean;
        /** Tests if this type represents an internal or external reference. */
        get isReference(): boolean;
        /** Tests if this type represents a nullable internal or external reference. */
        get isNullableReference(): boolean;
        /** Tests if this type represents an internal object. */
        get isInternalReference(): boolean;
        /** Tests if this type represents an external object. */
        get isExternalReference(): boolean;
        /** Tests if this type represents a nullable external object. */
        get isNullableExternalReference(): boolean;
        /** Gets the underlying class of this type, if any. */
        getClass(): Class | null;
        /** Tests if this type represents a class. */
        get isClass(): boolean;
        /** Gets the underlying class or wrapper class of this type, if any. */
        getClassOrWrapper(program: Program): Class | null;
        /** Gets the underlying function signature of this type, if any. */
        getSignature(): Signature | null;
        /** Tests if this type represents a function. */
        get isFunction(): boolean;
        /** Tests if this is a managed type that needs GC hooks. */
        get isManaged(): boolean;
        /** Tests if this is a class type explicitly annotated as unmanaged. */
        get isUnmanaged(): boolean;
        get isMemory(): boolean;
        /** Gets the corresponding non-nullable type. */
        get nonNullableType(): Type;
        /** Gets the corresponding nullable type, if applicable. */
        get nullableType(): Type | null;
        /** Computes the sign-extending shift in the target type. */
        computeSmallIntegerShift(targetType: Type): number;
        /** Computes the truncating mask in the target type. */
        computeSmallIntegerMask(targetType: Type): number;
        /** Tests if this type has (all of) the specified flags. */
        is(flags: TypeFlags): boolean;
        /** Tests if this type has any of the specified flags. */
        isAny(flags: TypeFlags): boolean;
        /** Composes the respective nullable type of this type. */
        asNullable(): Type;
        /** Use unsigned type for according size if possible. */
        toUnsigned(): Type;
        /** Tests if this type equals the specified. */
        equals(other: Type): boolean;
        /** Tests if a value of this type is assignable to the target type incl. implicit conversion. */
        isAssignableTo(target: Type, signednessIsRelevant?: boolean): boolean;
        /** Tests if a value of this type is assignable to the target type excl. implicit conversion. */
        isStrictlyAssignableTo(target: Type, signednessIsRelevant?: boolean): boolean;
        /** Tests if this type has a subtype assignable to the target type. */
        hasSubtypeAssignableTo(target: Type): boolean;
        /** Tests if a value of this type can be changed to the target type using `changetype`. */
        isChangeableTo(target: Type): boolean;
        /** Tests if this type can extend or implement the given type. */
        canExtendOrImplement(base: Type): boolean;
        /** Computes the common type of a binary-like expression, if any. */
        static commonType(
        /** LHS type. */
        left: Type, 
        /** RHS type. */
        right: Type, 
        /** Contextual type, if any. */
        contextualType?: Type, 
        /** Whether signedness is relevant. */
        signednessIsRelevant?: boolean): Type | null;
        /** Converts this type's kind to a string. */
        kindToString(): string;
        /** Converts this type to a string. */
        toString(validWat?: boolean): string;
        /** Converts this type to its respective type reference. */
        toRef(): TypeRef;
        /** An 8-bit signed integer. */
        static readonly i8: Type;
        /** A 16-bit signed integer. */
        static readonly i16: Type;
        /** A 32-bit signed integer. */
        static readonly i32: Type;
        /** A 64-bit signed integer. */
        static readonly i64: Type;
        /** A 32-bit signed size. WASM32 only. */
        static readonly isize32: Type;
        /** A 64-bit signed size. WASM64 only. */
        static readonly isize64: Type;
        /** An 8-bit unsigned integer. */
        static readonly u8: Type;
        /** A 16-bit unsigned integer. */
        static readonly u16: Type;
        /** A 32-bit unsigned integer. */
        static readonly u32: Type;
        /** A 64-bit unsigned integer. */
        static readonly u64: Type;
        /** A 32-bit unsigned size. WASM32 only. */
        static readonly usize32: Type;
        /** A 64-bit unsigned size. WASM64 only. */
        static readonly usize64: Type;
        /** A 1-bit unsigned integer. */
        static readonly bool: Type;
        /** A 32-bit float. */
        static readonly f32: Type;
        /** A 64-bit float. */
        static readonly f64: Type;
        /** A 128-bit vector. */
        static readonly v128: Type;
        /** Non-nullable function reference (`ref func`). */
        static readonly func: Type;
        /** Non-nullable external reference (`ref extern`). */
        static readonly extern: Type;
        /** Non-nullable any reference (`ref any`). */
        static readonly any: Type;
        /** Non-nullable equatable reference (`ref eq`). */
        static readonly eq: Type;
        /** Non-nullable struct reference (`ref struct`). */
        static readonly struct: Type;
        /** Non-nullable array reference (`ref array`). */
        static readonly array: Type;
        /** Non-nullable 31-bit integer reference (`ref i31`). */
        static readonly i31: Type;
        /** Non-nullable string reference (`ref string`). */
        static readonly string: Type;
        /** Non-nullable WTF8 string view reference (`ref stringview_wtf8`). */
        static readonly stringview_wtf8: Type;
        /** Non-nullable WTF16 string view reference (`ref stringview_wtf16`). */
        static readonly stringview_wtf16: Type;
        /** Non-nullable string iterator reference (`ref stringview_iter`). */
        static readonly stringview_iter: Type;
        /** No return type. */
        static readonly void: Type;
        /** Alias of i32 indicating type inference of locals and globals with just an initializer. */
        static readonly auto: Type;
    }
    /** Converts an array of types to an array of type references. */
    export function typesToRefs(types: Type[]): TypeRef[];
    /** Converts an array of types to its combined string representation. */
    export function typesToString(types: Type[]): string;
    /** Represents a fully resolved function signature. */
    export class Signature {
        /** The program that created this signature. */
        readonly program: Program;
        /** Parameter types, if any, excluding `this`. */
        readonly parameterTypes: Type[];
        /** Return type. */
        readonly returnType: Type;
        /** This type, if an instance signature. */
        readonly thisType: Type | null;
        /** Number of required parameters excluding `this`. Other parameters are considered optional. */
        readonly requiredParameters: number;
        /** Whether the last parameter is a rest parameter. */
        readonly hasRest: boolean;
        /** Unique id representing this signature. */
        readonly id: number;
        /** Respective function type. */
        readonly type: Type;
        /** Construct a new signature. */
        static create(
        /** The program that created this signature. */
        program: Program, 
        /** Parameter types, if any, excluding `this`. */
        parameterTypes?: Type[], 
        /** Return type. */
        returnType?: Type, 
        /** This type, if an instance signature. */
        thisType?: Type | null, 
        /** Number of required parameters excluding `this`. Other parameters are considered optional. */
        requiredParameters?: number, 
        /** Whether the last parameter is a rest parameter. */
        hasRest?: boolean): Signature;
        /** Constructs a new signature. */
        private constructor();
        get paramRefs(): TypeRef;
        get resultRefs(): TypeRef;
        /** Tests if this signature equals the specified. */
        equals(other: Signature): boolean;
        /** Tests if a value of this function type is assignable to a target of the specified function type. */
        isAssignableTo(target: Signature, checkCompatibleOverride?: boolean): boolean;
        /** Tests if this signature has at least one managed operand. */
        get hasManagedOperands(): boolean;
        /** Gets the indices of all managed operands. */
        getManagedOperandIndices(): number[];
        /** Tests if this signature has at least one v128 operand. */
        get hasVectorValueOperands(): boolean;
        /** Gets the indices of all v128 operands. */
        getVectorValueOperandIndices(): number[];
        /** Converts this signature to a string. */
        toString(validWat?: boolean): string;
        /** Creates a clone of this signature that is safe to modify. */
        clone(requiredParameters?: number, hasRest?: boolean): Signature;
    }
}
declare module "types:assemblyscript/src/flow" {
    /**
     * @fileoverview A concurrent code flow analyzer.
     *
     * Flows keep track of compilation state and can be queried for various
     * conditions, like whether the current branch always terminates, whether
     * a local is known to be non-null or whether an expression has possibly
     * overflown its value range.
     *
     * To accomplish this, compilation of each function begins with a clean
     * flow populated with initial local states etc. While compilation
     * progresses, statements and expressions update flow state while control
     * constructs fork, potentially add scoped locals and later merge these
     * forked branches as necessary.
     *
     * @license Apache-2.0
     */
    import { Type } from "types:assemblyscript/src/types";
    import { Program, Local, Function, Element, Property } from "types:assemblyscript/src/program";
    import { ExpressionRef } from "types:assemblyscript/src/module";
    import { Node } from "types:assemblyscript/src/ast";
    /** Control flow flags indicating specific conditions. */
    export const enum FlowFlags {
        /** No specific conditions. */
        None = 0,
        /** This flow always returns. */
        Returns = 1,
        /** This flow always returns a wrapped value. */
        ReturnsWrapped = 2,
        /** This flow always returns a non-null value. */
        ReturnsNonNull = 4,
        /** This flow always throws. */
        Throws = 8,
        /** This flow always breaks. */
        Breaks = 16,
        /** This flow always continues. */
        Continues = 32,
        /** This flow always accesses `this`. Constructors only. */
        AccessesThis = 64,
        /** This flow always calls `super`. Constructors only. */
        CallsSuper = 128,
        /** This flow always terminates (returns, throws or continues). */
        Terminates = 256,
        /** This flow conditionally returns in a child flow. */
        ConditionallyReturns = 512,
        /** This flow conditionally throws in a child flow. */
        ConditionallyThrows = 1024,
        /** This flow conditionally breaks in a child flow. */
        ConditionallyBreaks = 2048,
        /** This flow conditionally continues in a child flow. */
        ConditionallyContinues = 4096,
        /** This flow conditionally accesses `this` in a child flow. Constructors only. */
        ConditionallyAccessesThis = 8192,
        /** This flow may return a non-this value. Constructors only. */
        MayReturnNonThis = 16384,
        /** This is a flow with explicitly disabled bounds checking. */
        UncheckedContext = 32768,
        /** This is a flow compiling a constructor parameter. */
        CtorParamContext = 65536,
        /** Any categorical flag. */
        AnyCategorical = 511,
        /** Any conditional flag. */
        AnyConditional = 15872
    }
    /** Flags indicating the current state of a local. */
    export const enum LocalFlags {
        /** No specific conditions. */
        None = 0,
        /** Local is constant. */
        Constant = 1,
        /** Local is properly wrapped. Relevant for small integers. */
        Wrapped = 2,
        /** Local is non-null. */
        NonNull = 4,
        /** Local is initialized. */
        Initialized = 8
    }
    /** Flags indicating the current state of a field. */
    export const enum FieldFlags {
        None = 0,
        Initialized = 1
    }
    /** Condition kinds. */
    export const enum ConditionKind {
        /** Outcome of the condition is unknown */
        Unknown = 0,
        /** Condition is always true. */
        True = 1,
        /** Condition is always false. */
        False = 2
    }
    /** A control flow evaluator. */
    export class Flow {
        /** Target function this flow generates code into. */
        targetFunction: Function;
        /** Inline function this flow generates code from, if any. */
        inlineFunction: Function | null;
        /** Creates the default top-level flow of the specified function. */
        static createDefault(targetFunction: Function): Flow;
        /** Creates an inline flow, compiling `inlineFunction` into `targetFunction`. */
        static createInline(targetFunction: Function, inlineFunction: Function): Flow;
        private constructor();
        /** Parent flow. */
        parent: Flow | null;
        /** Outer flow. Only relevant for first-class functions. */
        outer: Flow | null;
        /** Flow flags indicating specific conditions. */
        flags: FlowFlags;
        /** The label we break to when encountering a continue statement. */
        continueLabel: string | null;
        /** The label we break to when encountering a break statement. */
        breakLabel: string | null;
        /** Scoped local variables. */
        scopedLocals: Map<string, Local> | null;
        /** Local flags. */
        localFlags: LocalFlags[];
        /** Field flags on `this`. Constructors only. */
        thisFieldFlags: Map<Property, FieldFlags> | null;
        /** The label we break to when encountering a return statement, when inlining. */
        inlineReturnLabel: string | null;
        /** Alternative flows if a compound expression is true-ish. */
        trueFlows: Map<ExpressionRef, Flow> | null;
        /** Alternative flows if a compound expression is false-ish. */
        falseFlows: Map<ExpressionRef, Flow> | null;
        /** Tests if this is an inline flow. */
        get isInline(): boolean;
        /** Gets the source function being compiled. Differs from target when inlining. */
        get sourceFunction(): Function;
        /** Gets the program this flow belongs to. */
        get program(): Program;
        /** Gets the current return type. */
        get returnType(): Type;
        /** Gets the current contextual type arguments. */
        get contextualTypeArguments(): Map<string, Type> | null;
        /** Tests if this flow has the specified flag or flags. */
        is(flag: FlowFlags): boolean;
        /** Tests if this flow has one of the specified flags. */
        isAny(flag: FlowFlags): boolean;
        /** Sets the specified flag or flags. */
        set(flag: FlowFlags): void;
        /** Unsets the specified flag or flags. */
        unset(flag: FlowFlags): void;
        deriveConditionalFlags(): FlowFlags;
        /** Forks this flow to a child flow. */
        fork(
        /** Whether a new break context is established, e.g. by a block. */
        newBreakContext?: boolean, 
        /** Whether a new continue context is established, e.g. by a loop. */
        newContinueContext?: boolean): Flow;
        /** Forks this flow to a child flow where `condExpr` is true-ish. */
        forkThen(
        /** Condition that turned out to be true. */
        condExpr: ExpressionRef, 
        /** Whether a new break context is established, e.g. by a block. */
        newBreakContext?: boolean, 
        /** Whether a new continue context is established, e.g. by a loop. */
        newContinueContext?: boolean): Flow;
        /** Remembers the alternative flow if `condExpr` turns out `true`. */
        noteThen(condExpr: ExpressionRef, trueFlow: Flow): void;
        /** Forks this flow to a child flow where `condExpr` is false-ish. */
        forkElse(
        /** Condition that turned out to be false. */
        condExpr: ExpressionRef): Flow;
        /** Remembers the alternative flow if `condExpr` turns out `false`. */
        noteElse(condExpr: ExpressionRef, falseFlow: Flow): void;
        /** Gets a free temporary local of the specified type. */
        getTempLocal(type: Type): Local;
        /** Gets the scoped local of the specified name. */
        getScopedLocal(name: string): Local | null;
        /** Adds a new scoped local of the specified name. */
        addScopedLocal(name: string, type: Type): Local;
        /** Adds a new scoped dummy local of the specified name. */
        addScopedDummyLocal(name: string, type: Type, declarationNode: Node): Local;
        /** Adds a new scoped alias for the specified local. For example `super` aliased to the `this` local. */
        addScopedAlias(name: string, type: Type, index: number, reportNode?: Node | null): Local;
        /** Frees a single scoped local by its name. */
        freeScopedDummyLocal(name: string): void;
        /** Looks up the local of the specified name in the current scope. */
        lookupLocal(name: string): Local | null;
        /** Looks up the element with the specified name relative to the scope of this flow. */
        lookup(name: string): Element | null;
        /** Tests if the local at the specified index has the specified flag or flags. */
        isLocalFlag(index: number, flag: LocalFlags, defaultIfInlined?: boolean): boolean;
        /** Tests if the local at the specified index has any of the specified flags. */
        isAnyLocalFlag(index: number, flag: LocalFlags, defaultIfInlined?: boolean): boolean;
        /** Sets the specified flag or flags on the local at the specified index. */
        setLocalFlag(index: number, flag: LocalFlags): void;
        /** Unsets the specified flag or flags on the local at the specified index. */
        unsetLocalFlag(index: number, flag: LocalFlags): void;
        /** Initializes `this` field flags. */
        initThisFieldFlags(): void;
        /** Tests if the specified `this` field has the specified flag or flags. */
        isThisFieldFlag(field: Property, flag: FieldFlags): boolean;
        /** Sets the specified flag or flags on the given `this` field. */
        setThisFieldFlag(field: Property, flag: FieldFlags): void;
        /** Pushes a new control flow label, for example when entering a loop that one can `break` from. */
        pushControlFlowLabel(): number;
        /** Pops the most recent control flow label and validates that it matches. */
        popControlFlowLabel(expectedLabel: number): void;
        /** Inherits flags of another flow into this one, i.e. a finished inner block. */
        inherit(other: Flow): void;
        /** Merges only the side effects of a branch, i.e. when not taken. */
        mergeSideEffects(other: Flow): void;
        /** Merges a branch joining again with this flow, i.e. then without else. */
        mergeBranch(other: Flow): void;
        /** Inherits two alternate branches to become this flow, i.e. then with else. */
        inheritAlternatives(left: Flow, right: Flow): void;
        /** Tests if recompilation is needed due to incompatible local flags between loops, and resets if necessary. */
        resetIfNeedsRecompile(
        /** Resulting flow of the current compilation attempt. */
        other: Flow, 
        /** Number of locals before the compilation attempt. */
        numLocalsBefore: number): boolean;
        /** Checks if an expression of the specified type is known to be non-null, even if the type might be nullable. */
        isNonnull(expr: ExpressionRef, type: Type): boolean;
        /** Updates local states to reflect that this branch is only taken when `expr` is true-ish. */
        private inheritNonnullIfTrue;
        /** Updates local states to reflect that this branch is only taken when `expr` is false-ish. */
        private inheritNonnullIfFalse;
        /**
         * Tests if an expression can possibly overflow in the context of this flow. Assumes that the
         * expression might already have overflown and returns `false` only if the operation neglects
         * any possible combination of garbage bits being present.
         */
        canOverflow(expr: ExpressionRef, type: Type): boolean;
        toString(): string;
    }
}
declare module "types:assemblyscript/src/resolver" {
    /**
     * @fileoverview Resolve infrastructure to obtain types and elements.
     *
     * Similar to the compiler making instructions of expressions, the resolver
     * obtains metadata of expressions. As such, for each `compileX` method in
     * the compiler there is one `lookupX` method in the resolver returning the
     * respective IR element, respectively one `resolveX` method returning the
     * respective type of an expression. It is also able to make new elements,
     * like instances of classes given its concrete type arguments.
     *
     * @license Apache-2.0
     */
    import { DiagnosticEmitter } from "types:assemblyscript/src/diagnostics";
    import { Program, Element, Class, ClassPrototype, Function, FunctionPrototype, Property, PropertyPrototype } from "types:assemblyscript/src/program";
    import { Flow } from "types:assemblyscript/src/flow";
    import { TypeNode, TypeName, TypeParameterNode, Node, IdentifierExpression, CallExpression, Expression, IntegerLiteralExpression } from "types:assemblyscript/src/ast";
    import { Type } from "types:assemblyscript/src/types";
    /** Indicates whether errors are reported or not. */
    export const enum ReportMode {
        /** Report errors. */
        Report = 0,
        /** Swallow errors. */
        Swallow = 1
    }
    /** Provides tools to resolve types and expressions. */
    export class Resolver extends DiagnosticEmitter {
        /** The program this resolver belongs to. */
        program: Program;
        /** Target expression of the previously resolved property or element access. */
        currentThisExpression: Expression | null;
        /** Element expression of the previously resolved element access. */
        currentElementExpression: Expression | null;
        /** Whether a new override has been discovered. */
        discoveredOverride: boolean;
        /** Constructs the resolver for the specified program. */
        constructor(
        /** The program to construct a resolver for. */
        program: Program);
        /** Resolves a {@link TypeNode} to a concrete {@link Type}. */
        resolveType(
        /** The type to resolve. */
        node: TypeNode, 
        /** Contextual element. */
        ctxElement: Element, 
        /** Contextual types, i.e. `T`. */
        ctxTypes?: Map<string, Type> | null, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Type | null;
        /** Resolves a {@link NamedTypeNode} to a concrete {@link Type}. */
        private resolveNamedType;
        /** Resolves a {@link FunctionTypeNode} to a concrete {@link Type}. */
        private resolveFunctionType;
        private resolveBuiltinNativeType;
        private resolveBuiltinIndexofType;
        private resolveBuiltinValueofType;
        private resolveBuiltinReturnTypeType;
        private resolveBuiltinNotNullableType;
        /** Resolves a type name to the program element it refers to. */
        resolveTypeName(
        /** The type name to resolve. */
        node: TypeName, 
        /** Contextual element. */
        ctxElement: Element, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Element | null;
        /** Resolves an array of type arguments to concrete types. */
        resolveTypeArguments(
        /** Type parameter nodes present. */
        typeParameters: TypeParameterNode[], 
        /** Type argument nodes provided. */
        typeArgumentNodes: TypeNode[] | null, 
        /** Contextual element. */
        ctxElement: Element, 
        /** Contextual types, i.e. `T`. Updated in place with the new set of contextual types. */
        ctxTypes?: Map<string, Type>, 
        /** Alternative report node in case of empty type arguments. */
        alternativeReportNode?: Node | null, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Type[] | null;
        /** Resolves respectively infers the concrete instance of a function by call context. */
        maybeInferCall(node: CallExpression, prototype: FunctionPrototype, ctxFlow: Flow, reportMode?: ReportMode): Function | null;
        /** Updates contextual types with a possibly encapsulated inferred type. */
        private propagateInferredGenericTypes;
        /** Gets the concrete type of an element. */
        getTypeOfElement(element: Element): Type | null;
        /** Gets the element of a concrete type. */
        getElementOfType(type: Type): Element | null;
        /** Looks up the program element the specified expression refers to. */
        lookupExpression(
        /** The expression to look up. */
        node: Expression, 
        /** Contextual flow. */
        ctxFlow: Flow, 
        /** Contextual type. */
        ctxType?: Type, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Element | null;
        /** resolving expressions */
        private resolvingExpressions;
        /** Resolves an expression to its static type. */
        resolveExpression(
        /** The expression to resolve. */
        node: Expression, 
        /** Contextual flow. */
        ctxFlow: Flow, 
        /** Contextual type. */
        ctxType?: Type, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Type | null;
        /** Resolves an expression to its static type. (may cause stack overflow) */
        private doResolveExpression;
        /** Looks up the program element the specified identifier expression refers to. */
        lookupIdentifierExpression(
        /** The expression to look up. */
        node: IdentifierExpression, 
        /** Flow to search for scoped locals. */
        ctxFlow: Flow, 
        /** Element to search. */
        ctxElement?: Element, // differs for enums and namespaces
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Element | null;
        /** Resolves an identifier to its static type. */
        private resolveIdentifierExpression;
        /** Resolves a lazily compiled global, i.e. a static class field or annotated `@lazy`. */
        private ensureResolvedLazyGlobal;
        /** Looks up the program element the specified property access expression refers to. */
        private lookupPropertyAccessExpression;
        /** Resolves a property access expression to its static type. */
        private resolvePropertyAccessExpression;
        /** Looks up the program element the specified element access expression refers to. */
        private lookupElementAccessExpression;
        /** Resolves an element access expression to its static type. */
        private resolveElementAccessExpression;
        /** Determines the final type of an integer literal given the specified contextual type. */
        determineIntegerLiteralType(
        /** Integer literal value. */
        expr: IntegerLiteralExpression, 
        /** Has unary minus before literal. */
        negate: boolean, 
        /** Contextual type. */
        ctxType: Type): Type;
        /** Looks up the program element the specified assertion expression refers to. */
        private lookupAssertionExpression;
        /** Resolves an assertion expression to its static type. */
        private resolveAssertionExpression;
        /** Looks up the program element the specified unary prefix expression refers to. */
        private lookupUnaryPrefixExpression;
        /** Resolves an unary prefix expression to its static type. */
        private resolveUnaryPrefixExpression;
        /** Looks up the program element the specified unary postfix expression refers to. */
        private lookupUnaryPostfixExpression;
        /** Resolves an unary postfix expression to its static type. */
        private resolveUnaryPostfixExpression;
        /** Looks up the program element the specified binary expression refers to. */
        private lookupBinaryExpression;
        /** Resolves a binary expression to its static type. */
        private resolveBinaryExpression;
        /** Looks up the program element the specified this expression refers to. */
        private lookupThisExpression;
        /** Resolves a this expression to its static type. */
        private resolveThisExpression;
        /** Looks up the program element the specified super expression refers to. */
        private lookupSuperExpression;
        /** Resolves a super expression to its static type. */
        private resolveSuperExpression;
        /** Looks up the program element the specified literal expression refers to. */
        private lookupLiteralExpression;
        /** Resolves a literal expression to its static type. */
        private resolveLiteralExpression;
        /** Looks up the program element the specified call expression refers to. */
        private lookupCallExpression;
        /** Resolves a call expression to its static type. */
        private resolveCallExpression;
        /** Looks up the program element the specified comma expression refers to. */
        private lookupCommaExpression;
        /** Resolves a comma expression to its static type. */
        private resolveCommaExpression;
        /** Looks up the program element the specified instanceof expression refers to. */
        private lookupInstanceOfExpression;
        /** Resolves an instanceof expression to its static type. */
        private resolveInstanceOfExpression;
        /** Looks up the program element the specified ternary expression refers to. */
        private lookupTernaryExpression;
        /** Resolves a ternary expression to its static type. */
        private resolveTernaryExpression;
        /** Looks up the program element the specified new expression refers to. */
        private lookupNewExpression;
        /** Resolves a new expression to its static type. */
        private resolveNewExpression;
        /** Looks up the program element the specified function expression refers to. */
        private lookupFunctionExpression;
        /** Resolves a function expression to its static type. */
        private resolveFunctionExpression;
        /** Resolves a function prototype using the specified concrete type arguments. */
        resolveFunction(
        /** The prototype of the function. */
        prototype: FunctionPrototype, 
        /** Type arguments provided. */
        typeArguments: Type[] | null, 
        /** Contextual types, i.e. `T`. */
        ctxTypes?: Map<string, Type>, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Function | null;
        /** Resolves a function prototypeby first resolving the specified type arguments. */
        resolveFunctionInclTypeArguments(
        /** The prototype of the function. */
        prototype: FunctionPrototype, 
        /** Type arguments provided to be resolved. */
        typeArgumentNodes: TypeNode[] | null, 
        /** Contextual element. */
        ctxElement: Element, 
        /** Contextual types, i.e. `T`. */
        ctxTypes: Map<string, Type>, 
        /** The node to use when reporting intermediate errors. */
        reportNode: Node, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Function | null;
        /** Resolves reachable overrides of the given instance method. */
        resolveOverrides(instance: Function): Function[] | null;
        /** Currently resolving classes. */
        private resolveClassPending;
        /** Resolves a class prototype using the specified concrete type arguments. */
        resolveClass(
        /** The prototype of the class. */
        prototype: ClassPrototype, 
        /** Type arguments provided. */
        typeArguments: Type[] | null, 
        /** Contextual types, i.e. `T`. */
        ctxTypes?: Map<string, Type>, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Class | null;
        /** Checks whether an override's visibility is valid. */
        private checkOverrideVisibility;
        /** Finishes resolving the specified class. */
        private finishResolveClass;
        /** Resolves a class prototype by first resolving the specified type arguments. */
        resolveClassInclTypeArguments(
        /** The prototype of the class. */
        prototype: ClassPrototype, 
        /** Type arguments provided to be resolved. */
        typeArgumentNodes: TypeNode[] | null, 
        /** Contextual element. */
        ctxElement: Element, 
        /** Contextual types, i.e. `T`. */
        ctxTypes: Map<string, Type>, 
        /** The node to use when reporting intermediate errors. */
        reportNode: Node, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Class | null;
        /** Resolves a property prototype. */
        resolveProperty(
        /** The prototype of the property. */
        prototype: PropertyPrototype, 
        /** How to proceed with eventual diagnostics. */
        reportMode?: ReportMode): Property | null;
        private ensureOneTypeArgument;
    }
}
declare module "types:assemblyscript/src/parser" {
    /**
     * @fileoverview A TypeScript parser for the AssemblyScript subset.
     *
     * Takes the tokens produced by the `Tokenizer` and builds an abstract
     * syntax tree composed of `Node`s wrapped in a `Source` out of it.
     *
     * @license Apache-2.0
     */
    import { CommonFlags } from "types:assemblyscript/src/common";
    import { Tokenizer, CommentHandler } from "types:assemblyscript/src/tokenizer";
    import { DiagnosticEmitter, DiagnosticMessage } from "types:assemblyscript/src/diagnostics";
    import { Node, Source, TypeNode, TypeName, FunctionTypeNode, Expression, ClassExpression, FunctionExpression, Statement, BlockStatement, BreakStatement, ClassDeclaration, ContinueStatement, DecoratorNode, DoStatement, EnumDeclaration, EnumValueDeclaration, ExportImportStatement, ExportMember, ExportStatement, ExpressionStatement, ForOfStatement, FunctionDeclaration, IfStatement, ImportDeclaration, ImportStatement, IndexSignatureNode, NamespaceDeclaration, ParameterNode, ReturnStatement, SwitchCase, SwitchStatement, ThrowStatement, TryStatement, TypeDeclaration, TypeParameterNode, VariableStatement, VariableDeclaration, VoidStatement, WhileStatement, ModuleDeclaration } from "types:assemblyscript/src/ast";
    class Dependee {
        source: Source;
        reportNode: Node;
        constructor(source: Source, reportNode: Node);
    }
    /** Parser interface. */
    export class Parser extends DiagnosticEmitter {
        /** Source file names to be requested next. */
        backlog: string[];
        /** Source file names already seen, that is processed or backlogged. */
        seenlog: Set<string>;
        /** Source file names already completely processed. */
        donelog: Set<string>;
        /** Optional handler to intercept comments while tokenizing. */
        onComment: CommentHandler | null;
        /** Current file being parsed. */
        currentSource: Source | null;
        /** Map of dependees being depended upon by a source, by path. */
        dependees: Map<string, Dependee>;
        /** An array of parsed sources. */
        sources: Source[];
        /** Current overridden module name. */
        currentModuleName: string | null;
        /** Constructs a new parser. */
        constructor(diagnostics?: DiagnosticMessage[] | null, sources?: Source[]);
        /** Parses a file and adds its definitions to the program. */
        parseFile(
        /** Source text of the file, or `null` to indicate not found. */
        text: string | null, 
        /** Normalized path of the file. */
        path: string, 
        /** Whether this is an entry file. */
        isEntry: boolean): void;
        /** Parses a top-level statement. */
        parseTopLevelStatement(tn: Tokenizer, namespace?: NamespaceDeclaration | null): Statement | null;
        /** Obtains the next file to parse. */
        nextFile(): string | null;
        /** Obtains the path of the dependee of the given imported file. */
        getDependee(dependent: string): string | null;
        /** Finishes parsing. */
        finish(): void;
        /** Parses a type name. */
        parseTypeName(tn: Tokenizer): TypeName | null;
        /** Parses a type. */
        parseType(tn: Tokenizer, acceptParenthesized?: boolean, suppressErrors?: boolean): TypeNode | null;
        private tryParseSignatureIsSignature;
        /** Parses a function type, as used in type declarations. */
        tryParseFunctionType(tn: Tokenizer): FunctionTypeNode | null;
        parseDecorator(tn: Tokenizer): DecoratorNode | null;
        parseVariable(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number, isFor?: boolean): VariableStatement | null;
        parseVariableDeclaration(tn: Tokenizer, parentFlags: CommonFlags, parentDecorators: DecoratorNode[] | null, isFor?: boolean): VariableDeclaration | null;
        parseEnum(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number): EnumDeclaration | null;
        parseEnumValue(tn: Tokenizer, parentFlags: CommonFlags): EnumValueDeclaration | null;
        parseReturn(tn: Tokenizer): ReturnStatement | null;
        parseTypeParameters(tn: Tokenizer): TypeParameterNode[] | null;
        parseTypeParameter(tn: Tokenizer): TypeParameterNode | null;
        private parseParametersThis;
        parseParameters(tn: Tokenizer, isConstructor?: boolean): ParameterNode[] | null;
        parseParameter(tn: Tokenizer, isConstructor?: boolean): ParameterNode | null;
        parseFunction(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number): FunctionDeclaration | null;
        parseFunctionExpression(tn: Tokenizer): FunctionExpression | null;
        private parseFunctionExpressionCommon;
        parseClassOrInterface(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number): ClassDeclaration | null;
        parseClassExpression(tn: Tokenizer): ClassExpression | null;
        parseClassMember(tn: Tokenizer, parent: ClassDeclaration): Node | null;
        parseIndexSignature(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null): IndexSignatureNode | null;
        parseNamespace(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number): NamespaceDeclaration | null;
        parseExport(tn: Tokenizer, startPos: number, isDeclare: boolean): ExportStatement | null;
        parseExportMember(tn: Tokenizer): ExportMember | null;
        parseExportDefaultAlias(tn: Tokenizer, startPos: number, defaultStart: number, defaultEnd: number): ExportStatement;
        parseImport(tn: Tokenizer): ImportStatement | null;
        parseImportDeclaration(tn: Tokenizer): ImportDeclaration | null;
        parseExportImport(tn: Tokenizer, startPos: number): ExportImportStatement | null;
        parseStatement(tn: Tokenizer, topLevel?: boolean): Statement | null;
        parseBlockStatement(tn: Tokenizer, topLevel: boolean): BlockStatement | null;
        parseBreak(tn: Tokenizer): BreakStatement | null;
        parseContinue(tn: Tokenizer): ContinueStatement | null;
        parseDoStatement(tn: Tokenizer): DoStatement | null;
        parseExpressionStatement(tn: Tokenizer): ExpressionStatement | null;
        parseForStatement(tn: Tokenizer): Statement | null;
        parseForOfStatement(tn: Tokenizer, startPos: number, variable: Statement): ForOfStatement | null;
        parseIfStatement(tn: Tokenizer): IfStatement | null;
        parseSwitchStatement(tn: Tokenizer): SwitchStatement | null;
        parseSwitchCase(tn: Tokenizer): SwitchCase | null;
        parseThrowStatement(tn: Tokenizer): ThrowStatement | null;
        parseTryStatement(tn: Tokenizer): TryStatement | null;
        parseTypeDeclaration(tn: Tokenizer, flags: CommonFlags, decorators: DecoratorNode[] | null, startPos: number): TypeDeclaration | null;
        parseModuleDeclaration(tn: Tokenizer, flags: CommonFlags): ModuleDeclaration | null;
        parseVoidStatement(tn: Tokenizer): VoidStatement | null;
        parseWhileStatement(tn: Tokenizer): WhileStatement | null;
        parseExpressionStart(tn: Tokenizer): Expression | null;
        tryParseTypeArgumentsBeforeArguments(tn: Tokenizer): TypeNode[] | null;
        parseArguments(tn: Tokenizer): Expression[] | null;
        parseExpression(tn: Tokenizer, precedence?: Precedence): Expression | null;
        private parseTemplateLiteral;
        private joinPropertyCall;
        private maybeParseCallExpression;
        private checkASI;
        /** Skips over a statement on errors in an attempt to reduce unnecessary diagnostic noise. */
        skipStatement(tn: Tokenizer): void;
        /** Skips over a block on errors in an attempt to reduce unnecessary diagnostic noise. */
        skipBlock(tn: Tokenizer): void;
    }
    /** Operator precedence from least to largest. */
    export const enum Precedence {
        None = 0,
        Comma = 1,
        Spread = 2,
        Yield = 3,
        Assignment = 4,
        Conditional = 5,
        LogicalOr = 6,
        LogicalAnd = 7,
        BitwiseOr = 8,
        BitwiseXor = 9,
        BitwiseAnd = 10,
        Equality = 11,
        Relational = 12,
        Shift = 13,
        Additive = 14,
        Multiplicative = 15,
        Exponentiated = 16,
        UnaryPrefix = 17,
        UnaryPostfix = 18,
        Call = 19,
        MemberAccess = 20,
        Grouping = 21
    }
    export {};
}
declare module "types:assemblyscript/src/program" {
    /**
     * @fileoverview AssemblyScript's intermediate representation.
     *
     * The compiler uses Binaryen IR, which is fairly low level, as its
     * primary intermediate representation, with the following structures
     * holding any higher level information that cannot be represented by
     * Binaryen IR alone, for example higher level types.
     *
     * Similar to the AST being composed of `Node`s in `Source`s, the IR is
     * composed of `Element`s in a `Program`. Each class or function is
     * represented by a "prototype" holding all the relevant information,
     * including each's concrete instances. If a class or function is not
     * generic, there is exactly one instance, otherwise there is one for
     * each concrete set of type arguments.
     *
     * @license Apache-2.0
     */
    import { CommonFlags, Feature } from "types:assemblyscript/src/common";
    import { Options } from "types:assemblyscript/src/compiler";
    import { Range, DiagnosticMessage, DiagnosticEmitter } from "types:assemblyscript/src/diagnostics";
    import { Type, Signature } from "types:assemblyscript/src/types";
    import { Token } from "types:assemblyscript/src/tokenizer";
    import { Node, Source, DecoratorNode, DecoratorKind, TypeParameterNode, TypeNode, NamedTypeNode, FunctionTypeNode, ArrowKind, Expression, IdentifierExpression, Statement, ClassDeclaration, DeclarationStatement, EnumDeclaration, EnumValueDeclaration, FieldDeclaration, FunctionDeclaration, InterfaceDeclaration, NamespaceDeclaration, TypeDeclaration, VariableDeclaration, VariableLikeDeclarationStatement } from "types:assemblyscript/src/ast";
    import { Module, ExpressionRef, FunctionRef, MemorySegment } from "types:assemblyscript/src/module";
    import { Resolver } from "types:assemblyscript/src/resolver";
    import { Flow } from "types:assemblyscript/src/flow";
    import { Parser } from "types:assemblyscript/src/parser";
    /** Represents the kind of an operator overload. */
    export enum OperatorKind {
        Invalid = 0,
        IndexedGet = 1,
        IndexedSet = 2,
        UncheckedIndexedGet = 3,
        UncheckedIndexedSet = 4,
        Add = 5,
        Sub = 6,
        Mul = 7,
        Div = 8,
        Rem = 9,
        Pow = 10,
        BitwiseAnd = 11,
        BitwiseOr = 12,
        BitwiseXor = 13,
        BitwiseShl = 14,
        BitwiseShr = 15,
        BitwiseShrU = 16,
        Eq = 17,
        Ne = 18,
        Gt = 19,
        Ge = 20,
        Lt = 21,
        Le = 22,
        Plus = 23,
        Minus = 24,
        Not = 25,
        BitwiseNot = 26,
        PrefixInc = 27,
        PrefixDec = 28,
        PostfixInc = 29,
        PostfixDec = 30
    }
    export namespace OperatorKind {
        /** Returns the operator kind represented by the specified decorator and string argument. */
        function fromDecorator(decoratorKind: DecoratorKind, arg: string): OperatorKind;
        /** Converts a binary operator token to the respective operator kind. */
        function fromBinaryToken(token: Token): OperatorKind;
        /** Converts a unary prefix operator token to the respective operator kind. */
        function fromUnaryPrefixToken(token: Token): OperatorKind;
        /** Converts a unary postfix operator token to the respective operator kind. */
        function fromUnaryPostfixToken(token: Token): OperatorKind;
    }
    /** Represents an AssemblyScript program. */
    export class Program extends DiagnosticEmitter {
        /** Compiler options. */
        options: Options;
        /** Constructs a new program, optionally inheriting parser diagnostics. */
        constructor(
        /** Compiler options. */
        options: Options, 
        /** Shared array of diagnostic messages (emitted so far). */
        diagnostics?: DiagnosticMessage[] | null);
        /** Module instance. */
        module: Module;
        /** Parser instance. */
        parser: Parser;
        /** Resolver instance. */
        resolver: Resolver;
        /** Array of sources. */
        sources: Source[];
        /** Diagnostic offset used where successively obtaining the next diagnostic. */
        diagnosticsOffset: number;
        /** Special native code file. */
        nativeFile: File;
        /** Next class id. */
        nextClassId: number;
        /** Next signature id. */
        nextSignatureId: number;
        /** An indicator if the program has been initialized. */
        initialized: boolean;
        /** Files by unique internal name. */
        filesByName: Map<string, File>;
        /** Elements by unique internal name in element space. */
        elementsByName: Map<string, Element>;
        /** Elements by declaration. */
        elementsByDeclaration: Map<DeclarationStatement, DeclaredElement>;
        /** Element instances by unique internal name. */
        instancesByName: Map<string, Element>;
        /** Classes wrapping basic types like `i32`. */
        wrapperClasses: Map<Type, Class>;
        /** Managed classes contained in the program, by id. */
        managedClasses: Map<number, Class>;
        /** A set of unique function signatures contained in the program, by id. */
        uniqueSignatures: Map<string, Signature>;
        /** Module imports. */
        moduleImports: Map<string, Map<string, Element>>;
        /** Gets the standard `ArrayBufferView` instance. */
        get arrayBufferViewInstance(): Class;
        private _arrayBufferViewInstance;
        /** Gets the standard `ArrayBuffer` instance. */
        get arrayBufferInstance(): Class;
        private _arrayBufferInstance;
        /** Gets the standard `Array` prototype. */
        get arrayPrototype(): ClassPrototype;
        private _arrayPrototype;
        /** Gets the standard `StaticArray` prototype. */
        get staticArrayPrototype(): ClassPrototype;
        private _staticArrayPrototype;
        /** Gets the standard `Set` prototype. */
        get setPrototype(): ClassPrototype;
        private _setPrototype;
        /** Gets the standard `Map` prototype. */
        get mapPrototype(): ClassPrototype;
        private _mapPrototype;
        /** Gets the standard `Function` prototype. */
        get functionPrototype(): ClassPrototype;
        private _functionPrototype;
        /** Gets the standard `Int8Array` prototype. */
        get int8ArrayPrototype(): ClassPrototype;
        private _int8ArrayPrototype;
        /** Gets the standard `Int16Array` prototype. */
        get int16ArrayPrototype(): ClassPrototype;
        private _int16ArrayPrototype;
        /** Gets the standard `Int32Array` prototype. */
        get int32ArrayPrototype(): ClassPrototype;
        private _int32ArrayPrototype;
        /** Gets the standard `Int64Array` prototype. */
        get int64ArrayPrototype(): ClassPrototype;
        private _int64ArrayPrototype;
        /** Gets the standard `Uint8Array` prototype. */
        get uint8ArrayPrototype(): ClassPrototype;
        private _uint8ArrayPrototype;
        /** Gets the standard `Uint8ClampedArray` prototype. */
        get uint8ClampedArrayPrototype(): ClassPrototype;
        private _uint8ClampedArrayPrototype;
        /** Gets the standard `Uint16Array` prototype. */
        get uint16ArrayPrototype(): ClassPrototype;
        private _uint16ArrayPrototype;
        /** Gets the standard `Uint32Array` prototype. */
        get uint32ArrayPrototype(): ClassPrototype;
        private _uint32ArrayPrototype;
        /** Gets the standard `Uint64Array` prototype. */
        get uint64ArrayPrototype(): ClassPrototype;
        private _uint64ArrayPrototype;
        /** Gets the standard `Float32Array` prototype. */
        get float32ArrayPrototype(): ClassPrototype;
        private _float32ArrayPrototype;
        /** Gets the standard `Float64Array` prototype. */
        get float64ArrayPrototype(): ClassPrototype;
        private _float64ArrayPrototype;
        /** Gets the standard `String` instance. */
        get stringInstance(): Class;
        private _stringInstance;
        /** Gets the standard `RegExp` instance. */
        get regexpInstance(): Class;
        private _regexpInstance;
        /** Gets the standard `Object` prototype. */
        get objectPrototype(): ClassPrototype;
        private _objectPrototype;
        /** Gets the standard `Object` instance. */
        get objectInstance(): Class;
        private _objectInstance;
        /** Gets the standard `TemplateStringsArray` instance. */
        get templateStringsArrayInstance(): Class;
        private _templateStringsArrayInstance;
        /** Gets the standard `abort` instance, if not explicitly disabled. */
        get abortInstance(): Function | null;
        /** Gets the runtime `__alloc(size: usize): usize` instance. */
        get allocInstance(): Function;
        private _allocInstance;
        /** Gets the runtime `__realloc(ptr: usize, newSize: usize): usize` instance. */
        get reallocInstance(): Function;
        private _reallocInstance;
        /** Gets the runtime `__free(ptr: usize): void` instance. */
        get freeInstance(): Function;
        private _freeInstance;
        /** Gets the runtime `__new(size: usize, id: u32): usize` instance. */
        get newInstance(): Function;
        private _newInstance;
        /** Gets the runtime `__renew(ptr: usize, size: usize): usize` instance. */
        get renewInstance(): Function;
        private _renewInstance;
        /** Gets the runtime `__link(parentPtr: usize, childPtr: usize, expectMultiple: bool): void` instance. */
        get linkInstance(): Function;
        private _linkInstance;
        /** Gets the runtime `__collect(): void` instance. */
        get collectInstance(): Function;
        private _collectInstance;
        /** Gets the runtime `__visit(ptr: usize, cookie: u32): void` instance. */
        get visitInstance(): Function;
        private _visitInstance;
        /** Gets the runtime `__newBuffer(size: usize, id: u32, data: usize = 0): usize` instance. */
        get newBufferInstance(): Function;
        private _newBufferInstance;
        /** Gets the runtime `__newArray(length: i32, alignLog2: usize, id: u32, data: usize = 0): usize` instance. */
        get newArrayInstance(): Function;
        private _newArrayInstance;
        /** Gets the runtime's internal `BLOCK` instance. */
        get BLOCKInstance(): Class;
        private _BLOCKInstance;
        /** Gets the runtime's internal `OBJECT` instance. */
        get OBJECTInstance(): Class;
        private _OBJECTInstance;
        /** Obtains the source matching the specified internal path. */
        getSource(internalPath: string): string | null;
        /** Gets the overhead of a memory manager block. */
        get blockOverhead(): number;
        /** Gets the overhead of a managed object, excl. block overhead, incl. alignment. */
        get objectOverhead(): number;
        /** Gets the total overhead of a managed object, incl. block overhead. */
        get totalOverhead(): number;
        searchFunctionByRef(ref: FunctionRef): Function | null;
        /** Computes the next properly aligned offset of a memory manager block, given the current bump offset. */
        computeBlockStart(currentOffset: number): number;
        /** Computes the next properly aligned offset of a memory manager block, given the current bump offset. */
        computeBlockStart64(currentOffset: i64): i64;
        /** Computes the size of a memory manager block, excl. block overhead. */
        computeBlockSize(payloadSize: number, isManaged: boolean): number;
        /** Creates a native variable declaration. */
        makeNativeVariableDeclaration(
        /** The simple name of the variable */
        name: string, 
        /** Flags indicating specific traits, e.g. `CONST`. */
        flags?: CommonFlags): VariableDeclaration;
        /** Creates a native type declaration. */
        makeNativeTypeDeclaration(
        /** The simple name of the type. */
        name: string, 
        /** Flags indicating specific traits, e.g. `GENERIC`. */
        flags?: CommonFlags): TypeDeclaration;
        private nativeDummySignature;
        /** Creates a native function declaration. */
        makeNativeFunctionDeclaration(
        /** The simple name of the function. */
        name: string, 
        /** Flags indicating specific traits, e.g. `DECLARE`. */
        flags?: CommonFlags): FunctionDeclaration;
        /** Creates a native namespace declaration. */
        makeNativeNamespaceDeclaration(
        /** The simple name of the namespace. */
        name: string, 
        /** Flags indicating specific traits, e.g. `EXPORT`. */
        flags?: CommonFlags): NamespaceDeclaration;
        /** Creates a native function. */
        makeNativeFunction(
        /** The simple name of the function. */
        name: string, 
        /** Concrete function signature. */
        signature: Signature, 
        /** Parent element, usually a file, class or namespace. */
        parent?: Element, 
        /** Flags indicating specific traits, e.g. `GENERIC`. */
        flags?: CommonFlags, 
        /** Decorator flags representing built-in decorators. */
        decoratorFlags?: DecoratorFlags): Function;
        /** Gets the (possibly merged) program element linked to the specified declaration. */
        getElementByDeclaration(declaration: DeclarationStatement): DeclaredElement | null;
        /** Initializes the program and its elements prior to compilation. */
        initialize(): void;
        /** Processes overridden members by this class in a base class. */
        private processOverrides;
        /** Processes a single overridden member by this class in a base class. */
        private doProcessOverride;
        /** Looks up the element of the specified name in the global scope. */
        lookup(name: string): Element | null;
        /** Requires that a global library element of the specified kind is present and returns it. */
        private require;
        /** Requires that a global variable is present and returns it. */
        requireGlobal(name: string): Global;
        /** Requires that a non-generic global class is present and returns it. */
        requireClass(name: string): Class;
        /** Requires that a global function is present and returns it. */
        requireFunction(name: string, typeArguments?: Type[] | null): Function;
        /** Marks all exports of the specified file as module exports. */
        private markModuleExports;
        /** Marks an element and its children as a module export. */
        private markModuleExport;
        /** Marks an element as a module import. */
        markModuleImport(moduleName: string, name: string, element: Element): void;
        /** Registers a native type with the program. */
        private registerNativeType;
        /** Registers the wrapper class of a non-class type. */
        private registerWrapperClass;
        /** Registers a constant integer value within the global scope. */
        registerConstantInteger(name: string, type: Type, value: i64): void;
        /** Registers a constant float value within the global scope. */
        private registerConstantFloat;
        /** Ensures that the given global element exists. Attempts to merge duplicates. */
        ensureGlobal(name: string, element: DeclaredElement): DeclaredElement;
        /** Tries to locate a foreign file given its normalized path. */
        private lookupForeignFile;
        /** Tries to locate a foreign element by traversing exports and queued exports. */
        private lookupForeign;
        /** Validates that only supported decorators are present. */
        private checkDecorators;
        /** Checks whether a particular feature is enabled. */
        checkFeatureEnabled(feature: Feature, reportNode: Node): boolean;
        /** Checks whether a particular type is supported. */
        checkTypeSupported(type: Type, reportNode: Node): boolean;
        /** Initializes a class declaration. */
        private initializeClass;
        /** Initializes a field of a class or interface. */
        private initializeField;
        /** Initializes a method of a class or interface. */
        private initializeMethod;
        /** Checks that operator overloads are generally valid, if present. */
        private checkOperatorOverloads;
        /** Ensures that the property introduced by the specified getter or setter exists.*/
        private ensureProperty;
        /** Initializes a property of a class. */
        private initializeProperty;
        /** Initializes an enum. */
        private initializeEnum;
        /** Initializes an enum value. */
        private initializeEnumValue;
        /** Initializes an `export` statement. */
        private initializeExports;
        /** Initializes a single `export` member. Does not handle `export *`. */
        private initializeExport;
        private initializeExportDefault;
        /** Initializes an `import` statement. */
        private initializeImports;
        /** Initializes a single `import` declaration. Does not handle `import *`. */
        private initializeImport;
        /** Initializes a function. Does not handle methods. */
        private initializeFunction;
        /** Initializes an interface. */
        private initializeInterface;
        /** Initializes a field of an interface, as a property. */
        private initializeFieldAsProperty;
        /** Initializes a namespace. */
        private initializeNamespace;
        /** Initializes a `type` definition. */
        private initializeTypeDefinition;
        /** Initializes a variable statement. */
        private initializeVariables;
    }
    /** Indicates the specific kind of an {@link Element}. */
    export const enum ElementKind {
        /** A {@link Global}. */
        Global = 0,
        /** A {@link Local}. */
        Local = 1,
        /** An {@link Enum}. */
        Enum = 2,
        /** An {@link EnumValue}. */
        EnumValue = 3,
        /** A {@link FunctionPrototype}. */
        FunctionPrototype = 4,
        /** A {@link Function}. */
        Function = 5,
        /** A {@link ClassPrototype}. */
        ClassPrototype = 6,
        /** A {@link Class}. */
        Class = 7,
        /** An {@link InterfacePrototype}. */
        InterfacePrototype = 8,
        /** An {@link Interface}. */
        Interface = 9,
        /** A {@link PropertyPrototype}.  */
        PropertyPrototype = 10,
        /** A {@link Property}. */
        Property = 11,
        /** A {@link Namespace}. */
        Namespace = 12,
        /** A {@link File}. */
        File = 13,
        /** A {@link TypeDefinition}.  */
        TypeDefinition = 14,
        /** An {@link IndexSignature}. */
        IndexSignature = 15
    }
    /** Indicates built-in decorators that are present. */
    export enum DecoratorFlags {
        /** No flags set. */
        None = 0,
        /** Is a program global. */
        Global = 1,
        /** Is a binary operator overload. */
        OperatorBinary = 2,
        /** Is a unary prefix operator overload. */
        OperatorPrefix = 4,
        /** Is a unary postfix operator overload. */
        OperatorPostfix = 8,
        /** Is an unmanaged class. */
        Unmanaged = 16,
        /** Is a final class. */
        Final = 32,
        /** Is always inlined. */
        Inline = 64,
        /** Is using a different external name. */
        External = 128,
        /** Has external JavaScript code. */
        ExternalJs = 256,
        /** Is a builtin. */
        Builtin = 512,
        /** Is compiled lazily. */
        Lazy = 1024,
        /** Is considered unsafe code. */
        Unsafe = 2048
    }
    export namespace DecoratorFlags {
        /** Translates a decorator kind to the respective decorator flag. */
        function fromKind(kind: DecoratorKind): DecoratorFlags;
    }
    /** Base class of all program elements. */
    export abstract class Element {
        /** Specific element kind. */
        kind: ElementKind;
        /** Simple name. */
        name: string;
        /** Internal name referring to this element. */
        internalName: string;
        /** Containing {@link Program}. */
        program: Program;
        /** Parent element. */
        parent: Element;
        /** Common flags indicating specific traits. */
        flags: CommonFlags;
        /** Decorator flags indicating annotated traits. */
        decoratorFlags: DecoratorFlags;
        /** Member elements. */
        members: Map<string, DeclaredElement> | null;
        /** Shadowing type in type space, if any. */
        shadowType: TypeDefinition | null;
        /** Constructs a new program element. */
        protected constructor(
        /** Specific element kind. */
        kind: ElementKind, 
        /** Simple name. */
        name: string, 
        /** Internal name referring to this element. */
        internalName: string, 
        /** Containing {@link Program}. */
        program: Program, 
        /** Parent element. */
        parent: Element | null);
        /** Gets the enclosing file. */
        get file(): File;
        /** Tests if this element has a specific flag or flags. */
        is(flag: CommonFlags): boolean;
        /** Tests if this element has any of the specified flags. */
        isAny(flags: CommonFlags): boolean;
        /** Sets a specific flag or flags. */
        set(flag: CommonFlags): void;
        /** Unsets the specific flag or flags. */
        unset(flag: CommonFlags): void;
        /** Tests if this element has a specific decorator flag or flags. */
        hasDecorator(flag: DecoratorFlags): boolean;
        /** Tests if this element has any of the specified decorator flags. */
        hasAnyDecorator(flags: DecoratorFlags): boolean;
        /** Get the member with the specified name, if any. */
        getMember(name: string): DeclaredElement | null;
        /** Looks up the element with the specified name relative to this element. */
        lookup(name: string, isType?: boolean): Element | null;
        /** Adds an element as a member of this one. Reports and returns `false` if a duplicate. */
        add(name: string, element: DeclaredElement, localIdentifierIfImport?: IdentifierExpression | null): boolean;
        /** Checks if this element is public, explicitly or implicitly. */
        get isPublic(): boolean;
        /** Checks if this element is implicitly public, i.e. not explicitly declared to be. */
        get isImplicitlyPublic(): boolean;
        /** Checks if the visibility of this element equals the specified. */
        visibilityEquals(other: Element): boolean;
        /** Tests if this element is bound to a class. */
        get isBound(): boolean;
        /** Gets the class or interface this element is bound to, if any. */
        getBoundClassOrInterface(): Class | null;
        /** Returns a string representation of this element. */
        toString(): string;
    }
    /** Tests if the specified element kind indicates a declared element. */
    export function isDeclaredElement(kind: ElementKind): boolean;
    /** Base class of elements with an associated declaration statement. */
    export abstract class DeclaredElement extends Element {
        /** Declaration reference. */
        declaration: DeclarationStatement;
        /** Constructs a new declared program element. */
        protected constructor(
        /** Specific element kind. */
        kind: ElementKind, 
        /** Simple name. */
        name: string, 
        /** Internal name referring to this element. */
        internalName: string, 
        /** Containing {@link Program}. */
        program: Program, 
        /** Parent element. */
        parent: Element | null, 
        /** Declaration reference. */
        declaration: DeclarationStatement);
        /** Tests if this element is a library element. */
        get isDeclaredInLibrary(): boolean;
        /** Gets the associated identifier node. */
        get identifierNode(): IdentifierExpression;
        /** Gets the signature node, if applicable, along the identifier node. */
        get identifierAndSignatureRange(): Range;
        /** Gets the assiciated decorator nodes. */
        get decoratorNodes(): DecoratorNode[] | null;
    }
    /** Checks if the specified element kind indicates a typed element. */
    export function isTypedElement(kind: ElementKind): boolean;
    /** Base class of elements that can be resolved to a concrete type. */
    export abstract class TypedElement extends DeclaredElement {
        /** Resolved type. Set once `is(RESOLVED)`, otherwise void. */
        type: Type;
        constructor(
        /** Specific element kind. */
        kind: ElementKind, 
        /** Simple name. */
        name: string, 
        /** Internal name referring to this element. */
        internalName: string, 
        /** Containing {@link Program}. */
        program: Program, 
        /** Parent element. */
        parent: Element | null, 
        /** Declaration reference. */
        declaration: DeclarationStatement);
        /** Sets the resolved type of this element. */
        setType(type: Type): void;
    }
    /** A file representing the implicit top-level namespace of a source. */
    export class File extends Element {
        /** Source of this file. */
        source: Source;
        /** File exports. */
        exports: Map<string, DeclaredElement> | null;
        /** File re-exports. */
        exportsStar: File[] | null;
        /** Top-level start function of this file. */
        startFunction: Function;
        /** Array of `import * as X` alias namespaces of this file. */
        aliasNamespaces: Array<Namespace>;
        /** Constructs a new file. */
        constructor(
        /** Program this file belongs to. */
        program: Program, 
        /** Source of this file. */
        source: Source);
        add(name: string, element: DeclaredElement, localIdentifierIfImport?: IdentifierExpression | null): boolean;
        getMember(name: string): DeclaredElement | null;
        lookup(name: string, isType?: boolean): Element | null;
        /** Ensures that an element is an export of this file. */
        ensureExport(name: string, element: DeclaredElement): void;
        /** Ensures that another file is a re-export of this file. */
        ensureExportStar(file: File): void;
        /** Looks up the export of the specified name. */
        lookupExport(name: string): DeclaredElement | null;
        /** Creates an imported namespace from this file. */
        asAliasNamespace(name: string, parent: Element, localIdentifier: IdentifierExpression): Namespace;
        /** Recursively copies the exports of this file to the specified namespace. */
        private copyExportsToNamespace;
    }
    /** A type definition. */
    export class TypeDefinition extends TypedElement {
        /** Constructs a new type definition. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file or namespace. */
        parent: Element, 
        /** Declaration reference. */
        declaration: TypeDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags);
        /** Gets the associated type parameter nodes. */
        get typeParameterNodes(): TypeParameterNode[] | null;
        /** Gets the associated type node. */
        get typeNode(): TypeNode;
    }
    /** A namespace that differs from a file in being user-declared with a name. */
    export class Namespace extends DeclaredElement {
        /** Constructs a new namespace. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file or another namespace. */
        parent: Element, 
        /** Declaration reference. */
        declaration: NamespaceDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags);
        lookup(name: string, isType?: boolean): Element | null;
    }
    /** An enum. */
    export class Enum extends TypedElement {
        /** Constructs a new enum. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file or namespace. */
        parent: Element, 
        /** Declaration reference. */
        declaration: EnumDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags);
        lookup(name: string, isType?: boolean): Element | null;
    }
    /** Indicates the kind of an inlined constant value. */
    export const enum ConstantValueKind {
        /** No constant value. */
        None = 0,
        /** Constant integer value. */
        Integer = 1,
        /** Constant float value. */
        Float = 2
    }
    /** Base class of all variable-like program elements. */
    export abstract class VariableLikeElement extends TypedElement {
        /** Constant value kind. */
        constantValueKind: ConstantValueKind;
        /** Constant integer value, if applicable. */
        constantIntegerValue: i64;
        /** Constant float value, if applicable. */
        constantFloatValue: number;
        /** Constructs a new variable-like element. */
        protected constructor(
        /** Specific element kind. */
        kind: ElementKind, 
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file, namespace or class. */
        parent: Element, 
        /** Declaration reference. Creates a native declaration if omitted. */
        declaration?: VariableLikeDeclarationStatement);
        /** Gets the associated type node.s */
        get typeNode(): TypeNode | null;
        /** Gets the associated initializer node. */
        get initializerNode(): Expression | null;
        /** Applies a constant integer value to this element. */
        setConstantIntegerValue(value: i64, type: Type): void;
        /** Applies a constant float value to this element. */
        setConstantFloatValue(value: number, type: Type): void;
    }
    /** An enum value. */
    export class EnumValue extends VariableLikeElement {
        /** Constructs a new enum value. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent enum. */
        parent: Enum, 
        /** Declaration reference. */
        declaration: EnumValueDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags);
        /** Whether this enum value is immutable. */
        isImmutable: boolean;
        /** Gets the associated value node. */
        get valueNode(): Expression | null;
    }
    /** A global variable. */
    export class Global extends VariableLikeElement {
        /** Constructs a new global variable. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file, namespace or static class. */
        parent: Element, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags: DecoratorFlags, 
        /** Declaration reference. Creates a native declaration if omitted. */
        declaration?: VariableLikeDeclarationStatement);
    }
    /** A function parameter. */
    export class Parameter {
        /** Parameter name. */
        name: string;
        /** Parameter type. */
        type: Type;
        /** Parameter initializer, if present. */
        initializer: Expression | null;
        /** Constructs a new function parameter. */
        constructor(
        /** Parameter name. */
        name: string, 
        /** Parameter type. */
        type: Type, 
        /** Parameter initializer, if present. */
        initializer?: Expression | null);
    }
    /** A local variable. */
    export class Local extends VariableLikeElement {
        /** Zero-based index within the enclosing function. `-1` indicates a dummy local. */
        index: number;
        /** Original name of the (temporary) local. */
        private originalName;
        /** Constructs a new local variable. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Zero-based index within the enclosing function. `-1` indicates a dummy local. */
        index: number, 
        /** Resolved type. */
        type: Type, 
        /** Parent function. */
        parent: Function, 
        /** Declaration reference. */
        declaration?: VariableLikeDeclarationStatement);
    }
    /** A yet unresolved function prototype. */
    export class FunctionPrototype extends DeclaredElement {
        /** Operator kind, if an overload. */
        operatorKind: OperatorKind;
        /** Already resolved instances. */
        instances: Map<string, Function> | null;
        /** Methods overriding this one, if any. These are unbound. */
        unboundOverrides: Set<FunctionPrototype> | null;
        /** Clones of this prototype that are bound to specific classes. */
        private boundPrototypes;
        /** Constructs a new function prototype. */
        constructor(
        /** Simple name */
        name: string, 
        /** Parent element, usually a file, namespace or class (if a method). */
        parent: Element, 
        /** Declaration reference. */
        declaration: FunctionDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags);
        /** Gets the associated type parameter nodes. */
        get typeParameterNodes(): TypeParameterNode[] | null;
        /** Gets the associated function type node. */
        get functionTypeNode(): FunctionTypeNode;
        /** Gets the associated body node. */
        get bodyNode(): Statement | null;
        /** Gets the arrow function kind. */
        get arrowKind(): ArrowKind;
        /** Creates a clone of this prototype that is bound to a concrete class instead. */
        toBound(classInstance: Class): FunctionPrototype;
        /** Gets the resolved instance for the specified instance key, if already resolved. */
        getResolvedInstance(instanceKey: string): Function | null;
        /** Sets the resolved instance for the specified instance key. */
        setResolvedInstance(instanceKey: string, instance: Function): void;
    }
    /** A resolved function. */
    export class Function extends TypedElement {
        /** Function prototype. */
        prototype: FunctionPrototype;
        /** Function signature. */
        signature: Signature;
        /** Array of locals by index. */
        localsByIndex: Local[];
        /** Concrete type arguments. */
        typeArguments: Type[] | null;
        /** Contextual type arguments. */
        contextualTypeArguments: Map<string, Type> | null;
        /** Default control flow. */
        flow: Flow;
        /** Ordered debug locations by Binaryen expression reference. */
        debugLocations: Map<ExpressionRef, Range>;
        /** Function reference, if compiled. */
        ref: FunctionRef;
        /** Varargs stub for calling with omitted arguments. */
        varargsStub: Function | null;
        /** Stub for calling overrides. */
        overrideStub: Function | null;
        /** Runtime memory segment, if created. */
        memorySegment: MemorySegment | null;
        /** Original function, if a stub. Otherwise `this`. */
        original: Function;
        /** Counting id of inline operations involving this function. */
        nextInlineId: number;
        /** Counting id of anonymous inner functions. */
        nextAnonymousId: number;
        /** Constructs a new concrete function. */
        constructor(
        /** Name incl. type parameters, i.e. `foo<i32>`. */
        nameInclTypeParameters: string, 
        /** Respective function prototype. */
        prototype: FunctionPrototype, 
        /** Concrete type arguments. */
        typeArguments: Type[] | null, 
        /** Concrete signature. */
        signature: Signature, // pre-resolved
        /** Contextual type arguments inherited from its parent class, if any. */
        contextualTypeArguments?: Map<string, Type> | null);
        /** Gets the types of additional locals that are not parameters. */
        getNonParameterLocalTypes(): Type[];
        /** Gets the name of the parameter at the specified index. */
        getParameterName(index: number): string;
        /** Creates a stub for use with this function, i.e. for varargs or override calls. */
        newStub(postfix: string, requiredParameters?: number): Function;
        /** Adds a local of the specified type, with an optional name. */
        addLocal(type: Type, name?: string | null, declaration?: VariableDeclaration | null): Local;
        lookup(name: string, isType?: boolean): Element | null;
        nextBreakId: number;
        breakStack: number[] | null;
        /** Finalizes the function once compiled, releasing no longer needed resources. */
        finalize(module: Module, ref: FunctionRef): void;
        addDebugInfo(module: Module, ref: FunctionRef): void;
    }
    /** A property comprised of a getter and a setter function. */
    export class PropertyPrototype extends DeclaredElement {
        /** Field declaration, if a field. */
        fieldDeclaration: FieldDeclaration | null;
        /** Getter prototype. */
        getterPrototype: FunctionPrototype | null;
        /** Setter prototype. */
        setterPrototype: FunctionPrototype | null;
        /** Property instance, if resolved. */
        instance: Property | null;
        /** Clones of this prototype that are bound to specific classes. */
        private boundPrototypes;
        /** Creates a property prototype representing a field. */
        static forField(
        /** Simple name. */
        name: string, 
        /** Parent element. Always a class prototype. */
        parent: ClassPrototype, 
        /** Declaration of the field. */
        fieldDeclaration: FieldDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags: DecoratorFlags): PropertyPrototype;
        /** Constructs a new property prototype. */
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element. Either a class prototype or instance. */
        parent: Element, 
        /** Declaration of the getter or setter introducing the property. */
        firstDeclaration: FunctionDeclaration);
        /** Tests if this property prototype represents a field. */
        get isField(): boolean;
        /** Gets the associated type node. */
        get typeNode(): TypeNode | null;
        /** Gets the associated initializer node. */
        get initializerNode(): Expression | null;
        /** Gets the associated parameter index. Set if declared as a constructor parameter, otherwise `-1`. */
        get parameterIndex(): number;
        /** Gets the respective `this` type. */
        get thisType(): Type;
        /** Creates a clone of this property prototype that is bound to a concrete class. */
        toBound(classInstance: Class): PropertyPrototype;
    }
    /** A resolved property. */
    export class Property extends VariableLikeElement {
        /** Prototype reference. */
        prototype: PropertyPrototype;
        /** Getter instance. */
        getterInstance: Function | null;
        /** Setter instance. */
        setterInstance: Function | null;
        /** Field memory offset, if a (layed out) instance field. */
        memoryOffset: number;
        /** Constructs a new property prototype. */
        constructor(
        /** Respective property prototype. */
        prototype: PropertyPrototype, 
        /** Parent element, usually a static class prototype or class instance. */
        parent: Element);
        /** Tests if this property represents a field. */
        get isField(): boolean;
    }
    /** A resolved index signature. */
    export class IndexSignature extends TypedElement {
        /** Constructs a new index prototype. */
        constructor(
        /** Parent class. */
        parent: Class);
        /** Obtains the getter instance. */
        getGetterInstance(isUnchecked: boolean): Function | null;
        /** Obtains the setter instance. */
        getSetterInstance(isUnchecked: boolean): Function | null;
    }
    /** A yet unresolved class prototype. */
    export class ClassPrototype extends DeclaredElement {
        /** Instance member prototypes. */
        instanceMembers: Map<string, DeclaredElement> | null;
        /** Base class prototype, if applicable. */
        basePrototype: ClassPrototype | null;
        /** Interface prototypes, if applicable. */
        interfacePrototypes: InterfacePrototype[] | null;
        /** Constructor prototype. */
        constructorPrototype: FunctionPrototype | null;
        /** Operator overload prototypes. */
        operatorOverloadPrototypes: Map<OperatorKind, FunctionPrototype>;
        /** Already resolved instances. */
        instances: Map<string, Class> | null;
        /** Classes extending this class. */
        extenders: Set<ClassPrototype>;
        /** Whether this class implicitly extends `Object`. */
        implicitlyExtendsObject: boolean;
        constructor(
        /** Simple name. */
        name: string, 
        /** Parent element, usually a file or namespace. */
        parent: Element, 
        /** Declaration reference. */
        declaration: ClassDeclaration, 
        /** Pre-checked flags indicating built-in decorators. */
        decoratorFlags?: DecoratorFlags, _isInterface?: boolean);
        /** Gets the associated type parameter nodes. */
        get typeParameterNodes(): TypeParameterNode[] | null;
        /** Gets the associated extends node. */
        get extendsNode(): NamedTypeNode | null;
        /** Gets the associated implements nodes. */
        get implementsNodes(): NamedTypeNode[] | null;
        /** Tests if this prototype is of a builtin array type (Array/TypedArray). */
        get isBuiltinArray(): boolean;
        /** Tests if this prototype extends the specified. */
        extends(basePtototype: ClassPrototype | null): boolean;
        /** Adds an element as an instance member of this one. Returns the previous element if a duplicate. */
        addInstance(name: string, element: DeclaredElement): boolean;
        /** Gets the resolved instance for the specified instance key, if already resolved. */
        getResolvedInstance(instanceKey: string): Class | null;
        /** Sets the resolved instance for the specified instance key. */
        setResolvedInstance(instanceKey: string, instance: Class): void;
    }
    /** A resolved class. */
    export class Class extends TypedElement {
        /** Class prototype. */
        prototype: ClassPrototype;
        /** Resolved type arguments. */
        typeArguments: Type[] | null;
        /** Base class, if any. */
        base: Class | null;
        /** Directly implemented interfaces, if any. */
        interfaces: Set<Interface> | null;
        /** Contextual type arguments for fields and methods. */
        contextualTypeArguments: Map<string, Type> | null;
        /** Current member memory offset. */
        nextMemoryOffset: number;
        /** Constructor instance. */
        constructorInstance: Function | null;
        /** Operator overloads. */
        operatorOverloads: Map<OperatorKind, Function> | null;
        /** Index signature, if present. */
        indexSignature: IndexSignature | null;
        /** Unique class id. */
        private _id;
        /** Runtime type information flags. */
        rttiFlags: number;
        /** Wrapped type, if a wrapper for a basic type. */
        wrappedType: Type | null;
        /** Classes directly or indirectly extending this class, if any. */
        extenders: Set<Class> | null;
        /** Classes directly or indirectly implementing this interface, if any. */
        implementers: Set<Class> | null;
        /** Whether the field initialization check has already been performed. */
        didCheckFieldInitialization: boolean;
        /** Runtime visitor function reference. */
        visitRef: FunctionRef;
        /** Gets the unique runtime id of this class. */
        get id(): number;
        /** Tests if this class is of a builtin array type (Array/TypedArray). */
        get isBuiltinArray(): boolean;
        /** Tests if this class is array-like. */
        get isArrayLike(): boolean;
        /** Tests if this is an interface. */
        get isInterface(): boolean;
        /** Constructs a new class. */
        constructor(
        /** Name incl. type parameters, i.e. `Foo<i32>`. */
        nameInclTypeParameters: string, 
        /** The respective class prototype. */
        prototype: ClassPrototype, 
        /** Concrete type arguments, if any. */
        typeArguments?: Type[] | null, _isInterface?: boolean);
        /** Computes the least upper bound of two class types. */
        static leastUpperBound(a: Class, b: Class): Class | null;
        /** Sets the base class. */
        setBase(base: Class): void;
        /** Propagates an extender to this class and its base classes. */
        private propagateExtenderUp;
        /** Propagates an interface and its base interfaces to this class and its extenders. */
        private propagateInterfaceDown;
        /** Adds an interface. */
        addInterface(iface: Interface): void;
        /** Tests if a value of this class type is assignable to a target of the specified class type. */
        isAssignableTo(target: Class): boolean;
        /** Tests if any subclass of this class is assignable to a target of the specified class type. */
        hasSubclassAssignableTo(target: Class): boolean;
        /** Looks up the operator overload of the specified kind. */
        lookupOverload(kind: OperatorKind, unchecked?: boolean): Function | null;
        /** Gets the method of the specified name, resolved with the given type arguments. */
        getMethod(name: string, typeArguments?: Type[] | null): Function | null;
        /** Calculates the memory offset of the specified field. */
        offsetof(fieldName: string): number;
        /** Creates a buffer suitable to hold a runtime instance of this class. */
        createBuffer(overhead?: number): Uint8Array;
        /** Writes a field value to a buffer and returns the number of bytes written. */
        writeField<T>(name: string, value: T, buffer: Uint8Array, baseOffset?: number): number;
        /** Tests if this class extends the specified prototype. */
        extendsPrototype(prototype: ClassPrototype): boolean;
        /** Gets the concrete type arguments to the specified extendend prototype. */
        getTypeArgumentsTo(extendedPrototype: ClassPrototype): Type[] | null;
        /** Gets the value type of an array. Must be an array. */
        getArrayValueType(): Type;
        /** Tests if this class is pointerfree. Useful to know for the GC. */
        get isPointerfree(): boolean;
        /** Tests if this class or interface extends the given class or interface. */
        extends(other: Class): boolean;
        /** Tests if this class has a direct or indirect extender matching the given class. */
        hasExtender(other: Class): boolean;
        /** Tests if this class has a direct or indirect extender that implements the given interface. */
        hasExtenderImplementing(other: Interface): boolean;
        /** Tests if this class directly or indirectly implements the given interface. */
        implements(other: Interface): boolean;
        /** Tests if this interface has a direct or indirect implementer matching the given class. */
        hasImplementer(other: Class): boolean;
        /** Tests if this interface has an implementer implementing the given interface. */
        hasImplementerImplementing(other: Interface): boolean;
    }
    /** A yet unresolved interface. */
    export class InterfacePrototype extends ClassPrototype {
        /** Constructs a new interface prototype. */
        constructor(name: string, parent: Element, declaration: InterfaceDeclaration, decoratorFlags: DecoratorFlags);
    }
    /** A resolved interface. */
    export class Interface extends Class {
        /** Constructs a new interface. */
        constructor(
        /** Name incl. type parameters, i.e. `Foo<i32>`. */
        nameInclTypeParameters: string, 
        /** The respective class prototype. */
        prototype: InterfacePrototype, 
        /** Concrete type arguments, if any. */
        typeArguments?: Type[] | null);
    }
    /** Mangles the internal name of an element with the specified name that is a child of the given parent. */
    export function mangleInternalName(name: string, parent: Element, isInstance: boolean, asGlobal?: boolean): string;
    /** Gets the cached default parameter name for the specified index. */
    export function getDefaultParameterName(index: number): string;
}
declare module "types:assemblyscript/src/passes/pass" {
    /**
     * @fileoverview Infrastructure for custom Binaryen passes.
     * @license Apache-2.0
     */
    import { Module, ExpressionRef, FunctionRef, GlobalRef, Index, StringRef } from "types:assemblyscript/src/module";
    /** Base class of custom Binaryen visitors. */
    export abstract class Visitor {
        /** Expression stack. */
        private stack;
        /** Gets the current expression being walked. */
        get currentExpression(): ExpressionRef;
        _currentExpression: ExpressionRef;
        /** Gets the parent expression of the current expression being walked. Returns zero if already the top-most expression. */
        get parentExpressionOrNull(): ExpressionRef;
        visitBlock(expr: ExpressionRef): void;
        visitIf(expr: ExpressionRef): void;
        visitLoop(expr: ExpressionRef): void;
        visitBreak(expr: ExpressionRef): void;
        visitSwitch(expr: ExpressionRef): void;
        visitCallPre(expr: ExpressionRef): void;
        visitCall(expr: ExpressionRef): void;
        visitCallIndirectPre(expr: ExpressionRef): void;
        visitCallIndirect(expr: ExpressionRef): void;
        visitLocalGet(expr: ExpressionRef): void;
        visitLocalSet(expr: ExpressionRef): void;
        visitGlobalGet(expr: ExpressionRef): void;
        visitGlobalSet(expr: ExpressionRef): void;
        visitLoad(expr: ExpressionRef): void;
        visitStore(expr: ExpressionRef): void;
        visitConst(expr: ExpressionRef): void;
        visitUnary(expr: ExpressionRef): void;
        visitBinary(expr: ExpressionRef): void;
        visitSelect(expr: ExpressionRef): void;
        visitDrop(expr: ExpressionRef): void;
        visitReturn(expr: ExpressionRef): void;
        visitMemorySize(expr: ExpressionRef): void;
        visitMemoryGrow(expr: ExpressionRef): void;
        visitNop(expr: ExpressionRef): void;
        visitUnreachable(expr: ExpressionRef): void;
        visitAtomicRMW(expr: ExpressionRef): void;
        visitAtomicCmpxchg(expr: ExpressionRef): void;
        visitAtomicWait(expr: ExpressionRef): void;
        visitAtomicNotify(expr: ExpressionRef): void;
        visitAtomicFence(expr: ExpressionRef): void;
        visitSIMDExtract(expr: ExpressionRef): void;
        visitSIMDReplace(expr: ExpressionRef): void;
        visitSIMDShuffle(expr: ExpressionRef): void;
        visitSIMDTernary(expr: ExpressionRef): void;
        visitSIMDShift(expr: ExpressionRef): void;
        visitSIMDLoad(expr: ExpressionRef): void;
        visitSIMDLoadStoreLane(expr: ExpressionRef): void;
        visitMemoryInit(expr: ExpressionRef): void;
        visitDataDrop(expr: ExpressionRef): void;
        visitMemoryCopy(expr: ExpressionRef): void;
        visitMemoryFill(expr: ExpressionRef): void;
        visitPop(expr: ExpressionRef): void;
        visitRefNull(expr: ExpressionRef): void;
        visitRefIsNull(expr: ExpressionRef): void;
        visitRefFunc(expr: ExpressionRef): void;
        visitRefEq(expr: ExpressionRef): void;
        visitTry(expr: ExpressionRef): void;
        visitThrow(expr: ExpressionRef): void;
        visitRethrow(expr: ExpressionRef): void;
        visitTupleMake(expr: ExpressionRef): void;
        visitTupleExtract(expr: ExpressionRef): void;
        visitI31New(expr: ExpressionRef): void;
        visitI31Get(expr: ExpressionRef): void;
        visitCallRef(expr: ExpressionRef): void;
        visitRefTest(expr: ExpressionRef): void;
        visitRefCast(expr: ExpressionRef): void;
        visitBrOn(expr: ExpressionRef): void;
        visitStructNew(expr: ExpressionRef): void;
        visitStructGet(expr: ExpressionRef): void;
        visitStructSet(expr: ExpressionRef): void;
        visitArrayNew(expr: ExpressionRef): void;
        visitArrayNewFixed(expr: ExpressionRef): void;
        visitArrayGet(expr: ExpressionRef): void;
        visitArraySet(expr: ExpressionRef): void;
        visitArrayLen(expr: ExpressionRef): void;
        visitArrayCopy(expr: ExpressionRef): void;
        visitRefAs(expr: ExpressionRef): void;
        visitStringNew(expr: ExpressionRef): void;
        visitStringConst(expr: ExpressionRef): void;
        visitStringMeasure(expr: ExpressionRef): void;
        visitStringEncode(expr: ExpressionRef): void;
        visitStringConcat(expr: ExpressionRef): void;
        visitStringEq(expr: ExpressionRef): void;
        visitStringAs(expr: ExpressionRef): void;
        visitStringWTF8Advance(expr: ExpressionRef): void;
        visitStringWTF16Get(expr: ExpressionRef): void;
        visitStringIterNext(expr: ExpressionRef): void;
        visitStringIterMove(expr: ExpressionRef): void;
        visitStringSliceWTF(expr: ExpressionRef): void;
        visitStringSliceIter(expr: ExpressionRef): void;
        visitName(name: StringRef): void;
        visitLabel(name: StringRef): void;
        visitIndex(index: Index): void;
        visitTag(name: StringRef): void;
        /** Visits any expression, delegating to the respective visitor methods. */
        visit(expr: ExpressionRef): void;
    }
    /** Base class of custom Binaryen passes. */
    export abstract class Pass extends Visitor {
        readonly module: Module;
        /** Gets the current function being walked. */
        get currentFunction(): FunctionRef;
        private _currentFunction;
        /** Gets the current global being walked. */
        get currentGlobal(): GlobalRef;
        private _currentGlobal;
        /** Constructs a new Binaryen pass. */
        constructor(module: Module);
        /** Walks the entire module. */
        walkModule(): void;
        /** Walks all functions. */
        walkFunctions(): void;
        /** Walks a specific function. */
        walkFunction(func: FunctionRef): void;
        /** Walks all global variables. */
        walkGlobals(): void;
        /** Walks a specific global variable. */
        walkGlobal(global: GlobalRef): void;
        /** Replaces the current expression with the specified replacement. */
        replaceCurrent(replacement: ExpressionRef): void;
    }
    /** Replaces an expression within a parent expression. Returns the replaced expression on success, otherwise `0`. */
    export function replaceChild(
    /** Parent expression containing `search`. */
    parent: ExpressionRef, 
    /** Expression to replace. */
    search: ExpressionRef, 
    /** Expression to replace `search` with. */
    replacement: ExpressionRef): ExpressionRef;
}
declare module "types:assemblyscript/src/passes/rtrace" {
    /**
     * @fileoverview A lightweight store instrumentation pass.
     *
     * Can be used to find rogue stores to protected memory addresses like object
     * headers or similar, without going overboard with instrumentation. Also
     * passes a flag whether a store originates within the runtime or other code.
     *
     * @license Apache-2.0
     */
    import { Pass } from "types:assemblyscript/src/passes/pass";
    import { Compiler } from "types:assemblyscript/src/compiler";
    import { ExpressionRef, TypeRef } from "types:assemblyscript/src/module";
    /** Instruments stores to also call an import. */
    export class RtraceMemory extends Pass {
        /** Whether we've seen any stores. */
        seenStores: boolean;
        /** Target pointer type. */
        ptrType: TypeRef;
        constructor(compiler: Compiler);
        checkRT(): boolean;
        /** @override */
        visitStore(store: ExpressionRef): void;
        /** @override */
        walkModule(): void;
    }
}
declare module "types:assemblyscript/src/passes/shadowstack" {
    /**
     * @fileoverview Shadow stack instrumentation for a precise GC.
     *
     * Instruments function arguments and local assignments marked with a 'tostack'
     * call to also do stores to a shadow stack of managed values only.
     *
     * Consider a simple call to a function looking like the following, taking
     * managed arguments, plus assigning managed values to locals:
     *
     *   function foo(a: Obj, b: Obj): Obj {
     *     let c = __tostack(a) // slot 2
     *     __collect()
     *     return b
     *   }
     *
     *   foo(__tostack(a), __tostack(b)) // slot 0, 1
     *
     * At the call to `__collect()` the 32-bit stack frame of the function is:
     *
     *   Offset | Value stored
     *   -------|----------------------------
     *      0   | First managed argument 'a'
     *      4   | Second managed argument 'b'
     *   -------|----------------------------
     *      8   | First managed local 'c'
     *
     * We are splitting the frame in two halves as annotated since both halves are
     * only known separately for indirect calls, with the first half becoming an
     * extension of the calling function's stack frame by means of treating the
     * arguments as if these were locals beyond the caller's `numLocals`. Function
     * arguments stay a bit longer on the stack than usually, but we also don't have
     * to modify the stack pointer pre-call at all this way. The caller's amended
     * stack frame when assuming one managed local may look like this:
     *
     *   Offset | Value stored
     *   -------|----------------------------
     *      0   | First managed local '?'
     *      4   | Extended with first managed argument 'a'
     *      8   | Extended with second managed argument 'b'
     *
     * with the callee's stack frame becoming just:
     *
     *   Offset | Value stored
     *   -------|----------------------------
     *      0   | First managed local 'c'
     *
     * Instrumentation added below looks about like the following, with the stack
     * growing downwards and 't' and 'r' being new temporary locals:
     *
     *   // callee frameSize = 1 * sizeof<usize>()
     *   function foo(a: usize, b: usize): usize {
     *     memory.fill(__stack_pointer -= frameSize, 0, frameSize)
     *     store<usize>(__stack_pointer, c = a, 0 * sizeof<usize>())
     *     __collect()
     *     let r = b
     *     __stack_pointer += frameSize
     *     return r
     *   }
     *
     *   // caller frameSize = (numLocalSlots + 2 [by extension]) * sizeof<usize>()
     *   (
     *     r = foo(
     *       ( t = a,
     *         store<usize>(__stack_pointer, t, (numLocalSlots + 0) * sizeof<usize>()),
     *         t ),
     *       ( t = b,
     *         store<usize>(__stack_pointer, t, (numLocalSlots + 1) * sizeof<usize>()),
     *         t )
     *     ),
     *     r
     *   )
     *
     * Also note that we have to `memory.fill` the second half because the first
     * assignment to a local may happen at a later point within the function. The
     * invariant we need to maintain for a precise GC is that it only sees zeroes
     * or valid pointers, but never an invalid pointer left on the stack earlier.
     * Since most frames are small, we unroll a sequence of `store`s up to a frame
     * size of 16 bytes, and `memory.fill`, if available, beyond.
     *
     * @license Apache-2.0
     */
    import { Pass } from "types:assemblyscript/src/passes/pass";
    import { ExpressionRef, FunctionRef, Index, BinaryOp, TypeRef, ExportRef } from "types:assemblyscript/src/module";
    import { Compiler, Options } from "types:assemblyscript/src/compiler";
    type LocalIndex = Index;
    type SlotIndex = Index;
    type SlotMap = Map<LocalIndex, SlotIndex>;
    type TempMap = Map<TypeRef, LocalIndex>;
    /** Instruments a module with a shadow stack for precise GC. */
    export class ShadowStackPass extends Pass {
        /** Stack frame slots, per function. */
        slotMaps: Map<FunctionRef, SlotMap>;
        /** Temporary locals, per function. */
        tempMaps: Map<FunctionRef, TempMap>;
        /** Exports (with managed operands) map. */
        exportMap: Map<string, number[]>;
        /** Compiler reference. */
        compiler: Compiler;
        constructor(compiler: Compiler);
        /** Compiler options. */
        get options(): Options;
        /** Target pointer type. */
        get ptrType(): TypeRef;
        /** Target pointer size. */
        get ptrSize(): number;
        /** Target pointer addition operation. */
        get ptrBinaryAdd(): BinaryOp;
        /** Target pointer subtraction operation. */
        get ptrBinarySub(): BinaryOp;
        /** Gets a constant with the specified value of the target pointer type. */
        ptrConst(value: number): ExpressionRef;
        /** Notes the presence of a slot for the specified (imaginary) local, returning the slot index. */
        noteSlot(func: FunctionRef, localIndex: Index): number;
        /** Notes the presence of an exported function taking managed operands. */
        noteExport(name: string, managedOperandIndices: number[]): void;
        /** Gets a shared temporary local of the given type in the specified functions. */
        getSharedTemp(func: FunctionRef, type: TypeRef): Index;
        /** Makes an expression modifying the stack pointer by the given offset. */
        makeStackOffset(offset: number): ExpressionRef;
        /** Makes a sequence of expressions zeroing the stack frame. */
        makeStackFill(frameSize: number, stmts: ExpressionRef[]): void;
        private hasStackCheckFunction;
        /** Makes a check that the current stack pointer is valid. */
        makeStackCheck(): ExpressionRef;
        private updateCallOperands;
        /** Slot offset accounting for nested calls. */
        private callSlotOffset;
        /** Slot offset stack in nested calls. */
        private callSlotStack;
        /** @override */
        visitCallPre(call: ExpressionRef): void;
        /** @override */
        visitCall(call: ExpressionRef): void;
        /** @override */
        visitCallIndirectPre(callIndirect: ExpressionRef): void;
        /** @override */
        visitCallIndirect(callIndirect: ExpressionRef): void;
        /** @override */
        visitLocalSet(localSet: ExpressionRef): void;
        /** Updates a function with additional locals etc. */
        updateFunction(funcRef: FunctionRef): void;
        /** Updates a function export taking managed arguments. */
        updateExport(exportRef: ExportRef, managedOperandIndices: number[]): void;
        /** @override */
        walkModule(): void;
    }
    export {};
}
declare module "types:assemblyscript/src/bindings/util" {
    import { Element, Function, Enum, Class, Interface, File, Global, Program } from "types:assemblyscript/src/program";
    /** Walker base class. */
    export abstract class ExportsWalker {
        /** Program reference. */
        program: Program;
        /** Whether to include private members */
        includePrivate: boolean;
        /** Already seen elements. */
        seen: Map<Element, string>;
        /** Constructs a new Element walker. */
        constructor(program: Program, includePrivate?: boolean);
        /** Walks all elements and calls the respective handlers. */
        walk(): void;
        /** Visits all exported elements of a file. */
        visitFile(file: File): void;
        /** Visits an element.*/
        visitElement(name: string, element: Element): void;
        private visitFunctionInstances;
        private visitClassInstances;
        private visitInterfaceInstances;
        abstract visitGlobal(name: string, element: Global): void;
        abstract visitEnum(name: string, element: Enum): void;
        abstract visitFunction(name: string, element: Function): void;
        abstract visitClass(name: string, element: Class): void;
        abstract visitInterface(name: string, element: Interface): void;
        abstract visitNamespace(name: string, element: Element): void;
        abstract visitAlias(name: string, element: Element, originalName: string): void;
    }
    /** Tests if a namespace-like element has at least one compiled member. */
    export function hasCompiledMember(element: Element): boolean;
}
declare module "types:assemblyscript/src/bindings/js" {
    import { Element, Program, Function, Global, Class, Interface, Enum } from "types:assemblyscript/src/program";
    import { Type } from "types:assemblyscript/src/types";
    import { ExportsWalker } from "types:assemblyscript/src/bindings/util";
    /** A JavaScript bindings builder. */
    export class JSBuilder extends ExportsWalker {
        /** Builds JavaScript bindings for the specified program. */
        static build(program: Program, esm?: boolean): string;
        private esm;
        private sb;
        private indentLevel;
        private needsLiftBuffer;
        private needsLowerBuffer;
        private needsLiftString;
        private needsLowerString;
        private needsLiftArray;
        private needsLowerArray;
        private needsLiftTypedArray;
        private needsLowerTypedArray;
        private needsLiftStaticArray;
        private needsLowerStaticArray;
        private needsLiftInternref;
        private needsLowerInternref;
        private needsRetain;
        private needsRelease;
        private needsNotNull;
        private needsSetU8;
        private needsSetU16;
        private needsSetU32;
        private needsSetU64;
        private needsSetF32;
        private needsSetF64;
        private needsGetI8;
        private needsGetU8;
        private needsGetI16;
        private needsGetU16;
        private needsGetI32;
        private needsGetU32;
        private needsGetI64;
        private needsGetU64;
        private needsGetF32;
        private needsGetF64;
        private deferredLifts;
        private deferredLowers;
        private deferredCode;
        private exports;
        private importMappings;
        /** Constructs a new JavaScript bindings builder. */
        constructor(program: Program, esm: boolean, includePrivate?: boolean);
        visitGlobal(name: string, element: Global): void;
        visitEnum(name: string, element: Enum): void;
        makeGlobalImport(moduleName: string, name: string, element: Global): void;
        makeFunctionImport(moduleName: string, name: string, element: Function, code?: string | null): void;
        visitFunction(name: string, element: Function): void;
        visitClass(name: string, element: Class): void;
        visitInterface(name: string, element: Interface): void;
        visitNamespace(name: string, element: Element): void;
        visitAlias(name: string, element: Element, originalName: string): void;
        getExternalCode(element: Function): string | null;
        build(): string;
        ensureModuleId(moduleName: string): number;
        /** Lifts a WebAssembly value to a JavaScript value, as an expression. */
        makeLiftFromValue(valueExpr: string, type: Type, sb?: string[]): void;
        /** Lowers a JavaScript value to a WebAssembly value, as an expression. */
        makeLowerToValue(valueExpr: string, type: Type, sb?: string[]): void;
        ensureLiftFromMemoryFn(valueType: Type): string;
        /** Lifts a WebAssembly memory address to a JavaScript value, as a function. */
        makeLiftFromMemoryFunc(valueType: Type, sb?: string[]): void;
        /** Lifts a WebAssembly memory address to a JavaScript value, as a call. */
        makeLiftFromMemoryCall(valueType: Type, sb?: string[], pointerExpr?: string): void;
        ensureLowerToMemoryFn(valueType: Type): string;
        /** Lowers a JavaScript value to a WebAssembly memory address, as a function. */
        makeLowerToMemoryFunc(valueType: Type, sb?: string[]): void;
        /** Lowers a JavaScript value to a WebAssembly memory address, as a call. */
        makeLowerToMemoryCall(valueType: Type, sb?: string[], pointerExpr?: string, valueExpr?: string): void;
        makeLiftRecord(clazz: Class): string;
        makeLowerRecord(clazz: Class): string;
    }
    export function liftRequiresExportRuntime(type: Type): boolean;
    export function lowerRequiresExportRuntime(type: Type): boolean;
}
declare module "types:assemblyscript/src/compiler" {
    /**
     * @fileoverview The AssemblyScript compiler.
     * @license Apache-2.0
     */
    import { Range, DiagnosticEmitter } from "types:assemblyscript/src/diagnostics";
    import { Module, MemorySegment, ExpressionRef, TypeRef, GlobalRef } from "types:assemblyscript/src/module";
    import { Feature, Target, Runtime } from "types:assemblyscript/src/common";
    import { Program, Class, Element, DeclaredElement, Enum, Function, Global, VariableLikeElement, File } from "types:assemblyscript/src/program";
    import { Flow, ConditionKind } from "types:assemblyscript/src/flow";
    import { Resolver } from "types:assemblyscript/src/resolver";
    import { Node, FunctionTypeNode, Statement, Expression } from "types:assemblyscript/src/ast";
    import { Type, Signature } from "types:assemblyscript/src/types";
    import { ShadowStackPass } from "types:assemblyscript/src/passes/shadowstack";
    /** Features enabled by default. */
    export const defaultFeatures: number;
    /** Compiler options. */
    export class Options {
        constructor();
        /** WebAssembly target. Defaults to {@link Target.Wasm32}. */
        target: Target;
        /** Runtime type. Defaults to Incremental GC. */
        runtime: Runtime;
        /** If true, indicates that debug information will be emitted by Binaryen. */
        debugInfo: boolean;
        /** If true, replaces assertions with nops. */
        noAssert: boolean;
        /** It true, exports the memory to the embedder. */
        exportMemory: boolean;
        /** If true, imports the memory provided by the embedder. */
        importMemory: boolean;
        /** Initial memory size, in pages. */
        initialMemory: number;
        /** Maximum memory size, in pages. */
        maximumMemory: number;
        /** If true, memory is declared as shared. */
        sharedMemory: boolean;
        /** If true, imported memory is zero filled. */
        zeroFilledMemory: boolean;
        /** If true, imports the function table provided by the embedder. */
        importTable: boolean;
        /** If true, exports the function table. */
        exportTable: boolean;
        /** If true, generates information necessary for source maps. */
        sourceMap: boolean;
        /** Unchecked behavior. Defaults to only using unchecked operations inside unchecked(). */
        uncheckedBehavior: UncheckedBehavior;
        /** If given, exports the start function instead of calling it implicitly. */
        exportStart: string | null;
        /** Static memory start offset. */
        memoryBase: number;
        /** Static table start offset. */
        tableBase: number;
        /** Global aliases, mapping alias names as the key to internal names to be aliased as the value. */
        globalAliases: Map<string, string> | null;
        /** Features to activate by default. */
        features: Feature;
        /** If true, disallows unsafe features in user code. */
        noUnsafe: boolean;
        /** If true, enables pedantic diagnostics. */
        pedantic: boolean;
        /** Indicates a very low (<64k) memory limit. */
        lowMemoryLimit: number;
        /** If true, exports the runtime helpers. */
        exportRuntime: boolean;
        /** Stack size in bytes, if using a stack. */
        stackSize: number;
        /** Semantic major bundle version from root package.json */
        bundleMajorVersion: number;
        /** Semantic minor bundle version from root package.json */
        bundleMinorVersion: number;
        /** Semantic patch bundle version from root package.json */
        bundlePatchVersion: number;
        /** Hinted optimize level. Not applied by the compiler itself. */
        optimizeLevelHint: number;
        /** Hinted shrink level. Not applied by the compiler itself. */
        shrinkLevelHint: number;
        /** Hinted basename. */
        basenameHint: string;
        /** Hinted bindings generation. */
        bindingsHint: boolean;
        /** Tests if the target is WASM64 or, otherwise, WASM32. */
        get isWasm64(): boolean;
        /** Gets the unsigned size type matching the target. */
        get usizeType(): Type;
        /** Gets the signed size type matching the target. */
        get isizeType(): Type;
        /** Gets the size type reference matching the target. */
        get sizeTypeRef(): TypeRef;
        /** Gets if any optimizations will be performed. */
        get willOptimize(): boolean;
        /** Sets whether a feature is enabled. */
        setFeature(feature: Feature, on?: boolean): void;
        /** Tests if a specific feature is activated. */
        hasFeature(feature: Feature): boolean;
    }
    /** Behaviors regarding unchecked operations. */
    export const enum UncheckedBehavior {
        /** Only use unchecked operations inside unchecked(). */
        Default = 0,
        /** Never use unchecked operations. */
        Never = 1,
        /** Always use unchecked operations if possible. */
        Always = 2
    }
    /** Various constraints in expression compilation. */
    export const enum Constraints {
        None = 0,
        /** Must implicitly convert to the target type. */
        ConvImplicit = 1,
        /** Must explicitly convert to the target type. */
        ConvExplicit = 2,
        /** Must wrap small integer values to match the target type. */
        MustWrap = 4,
        /** Indicates that the value will be dropped immediately. */
        WillDrop = 8,
        /** Indicates that static data is preferred. */
        PreferStatic = 16,
        /** Indicates that the value will become `this` of a property access or instance call. */
        IsThis = 32
    }
    /** Runtime features to be activated by the compiler. */
    export const enum RuntimeFeatures {
        None = 0,
        /** Requires data setup. */
        Data = 1,
        /** Requires a stack. */
        Stack = 2,
        /** Requires heap setup. */
        Heap = 4,
        /** Requires runtime type information setup. */
        Rtti = 8,
        /** Requires the built-in globals visitor. */
        visitGlobals = 16,
        /** Requires the built-in members visitor. */
        visitMembers = 32,
        /** Requires the setArgumentsLength export. */
        setArgumentsLength = 64
    }
    /** Imported default names of compiler-generated elements. */
    export namespace ImportNames {
        /** Name of the default namespace */
        const DefaultNamespace = "env";
        /** Name of the memory instance, if imported. */
        const Memory = "memory";
        /** Name of the table instance, if imported. */
        const Table = "table";
    }
    /** Exported names of compiler-generated elements. */
    export namespace ExportNames {
        /** Name of the memory instance, if exported. */
        const Memory = "memory";
        /** Name of the table instance, if exported. */
        const Table = "table";
        /** Name of the argumentsLength varargs helper global. */
        const argumentsLength = "__argumentsLength";
        /** Name of the alternative argumentsLength setter function. */
        const setArgumentsLength = "__setArgumentsLength";
    }
    /** Functions to export if `--exportRuntime` is set. */
    export const runtimeFunctions: string[];
    /** Globals to export if `--exportRuntime` is set. */
    export const runtimeGlobals: string[];
    /** Compiler interface. */
    export class Compiler extends DiagnosticEmitter {
        /** Program reference. */
        program: Program;
        /** Module instance being compiled. */
        get module(): Module;
        /** Provided options. */
        get options(): Options;
        /** Resolver reference. */
        get resolver(): Resolver;
        /** Current control flow. */
        currentFlow: Flow;
        /** Current parent element if not a function, i.e. an enum or namespace. */
        currentParent: Element | null;
        /** Current type in compilation. */
        currentType: Type;
        /** Start function statements. */
        currentBody: ExpressionRef[];
        /** Counting memory offset. */
        memoryOffset: i64;
        /** Memory segments being compiled. */
        memorySegments: MemorySegment[];
        /** Map of already compiled static string segments. */
        stringSegments: Map<string, MemorySegment>;
        /** Function table being compiled. First elem is blank. */
        functionTable: Function[];
        /** Arguments length helper global. */
        builtinArgumentsLength: GlobalRef;
        /** Requires runtime features. */
        runtimeFeatures: RuntimeFeatures;
        /** Current inline functions stack. */
        inlineStack: Function[];
        /** Lazily compiled functions. */
        lazyFunctions: Set<Function>;
        /** Pending instanceof helpers and their names. */
        pendingInstanceOf: Map<DeclaredElement, string>;
        /** Stubs to defer calls to overridden methods. */
        overrideStubs: Set<Function>;
        /** Elements currently undergoing compilation. */
        pendingElements: Set<Element>;
        /** Elements, that are module exports, already processed */
        doneModuleExports: Set<Element>;
        /** Shadow stack reference. */
        shadowStack: ShadowStackPass;
        /** Whether the module has custom function exports. */
        hasCustomFunctionExports: boolean;
        /** Whether the module would use the exported runtime to lift/lower. */
        desiresExportRuntime: boolean;
        /** Compiles a {@link Program} to a {@link Module} using the specified options. */
        static compile(program: Program): Module;
        /** Constructs a new compiler for a {@link Program} using the specified options. */
        constructor(program: Program);
        /** Performs compilation of the underlying {@link Program} to a {@link Module}. */
        compile(): Module;
        private initDefaultMemory;
        private initDefaultTable;
        /** Compiles the respective module exports for the specified entry file. */
        private compileModuleExports;
        /** Compiles the respective module export(s) for the specified element. */
        private compileModuleExport;
        /** Compiles the file matching the specified path. */
        compileFileByPath(normalizedPathWithoutExtension: string, reportNode: Node): void;
        /** Compiles the specified file. */
        compileFile(file: File): void;
        /** Tries to compile a global variable lazily. */
        compileGlobalLazy(global: Global, reportNode: Node): boolean;
        /** Compiles a global variable. */
        compileGlobal(global: Global): boolean;
        /** Compiles an enum. */
        compileEnum(element: Enum): boolean;
        /** Compiles a priorly resolved function. */
        compileFunction(
        /** Function to compile. */
        instance: Function, 
        /** Force compilation of stdlib alternative if a builtin. */
        forceStdAlternative?: boolean): boolean;
        /** Compiles the body of a function within the specified flow. */
        private compileFunctionBody;
        /** Makes a built-in getter of a property that is a field. */
        private makeBuiltinFieldGetter;
        /** Makes a built-in setter of a property that is a field. */
        private makeBuiltinFieldSetter;
        /** Adds a static memory segment with the specified data. */
        addAlignedMemorySegment(buffer: Uint8Array, alignment?: number): MemorySegment;
        /** Adds a static memory segment representing a runtime object. */
        addRuntimeMemorySegment(buffer: Uint8Array): MemorySegment;
        /** Ensures that a string exists in static memory and returns a pointer expression. Deduplicates. */
        ensureStaticString(stringValue: string): ExpressionRef;
        /** Ensures that a string exists in static memory and returns a pointer to it. Deduplicates. */
        ensureStaticStringPtr(stringValue: string): i64;
        /** Writes a series of static values of the specified type to a buffer. */
        writeStaticBuffer(buf: Uint8Array, pos: number, elementType: Type, values: ExpressionRef[]): number;
        /** Adds a buffer to static memory and returns the created segment. */
        addStaticBuffer(elementType: Type, values: ExpressionRef[], id?: number): MemorySegment;
        /** Adds an array header to static memory and returns the created segment. */
        private addStaticArrayHeader;
        /** Ensures that a runtime counterpart of the specified function exists and returns its address. */
        ensureRuntimeFunction(instance: Function): i64;
        /** Compiles a top level statement (incl. function declarations etc.) to the specified body. */
        compileTopLevelStatement(statement: Statement, body: ExpressionRef[]): void;
        /** Compiles a statement. */
        compileStatement(
        /** Statement to compile. */
        statement: Statement): ExpressionRef;
        /** Compiles a series of statements. */
        compileStatements(
        /** Statements to compile. */
        statements: Statement[], 
        /** Statements to append to. Also returned, created if omitted. */
        stmts?: ExpressionRef[] | null): ExpressionRef[];
        private compileBlockStatement;
        private compileBreakStatement;
        private compileContinueStatement;
        private compileDoStatement;
        private doCompileDoStatement;
        private compileEmptyStatement;
        private compileExpressionStatement;
        private compileForStatement;
        private doCompileForStatement;
        private compileForOfStatement;
        private compileIfStatement;
        private compileReturnStatement;
        private compileSwitchStatement;
        private compileThrowStatement;
        private compileTryStatement;
        /** Compiles a variable statement. Returns `0` if an initializer is not necessary. */
        private compileVariableStatement;
        private compileVoidStatement;
        private compileWhileStatement;
        private doCompileWhileStatement;
        /** Compiles the value of an inlined constant element. */
        compileInlineConstant(element: VariableLikeElement, contextualType: Type, constraints: Constraints): ExpressionRef;
        compileExpression(expression: Expression, contextualType: Type, constraints?: Constraints): ExpressionRef;
        /** Converts an expression's result from one type to another. */
        convertExpression(expr: ExpressionRef, 
        /** Original type. */
        fromType: Type, 
        /** New type. */
        toType: Type, 
        /** Whether the conversion is explicit. */
        explicit: boolean, 
        /** Report node. */
        reportNode: Node): ExpressionRef;
        private compileAssertionExpression;
        private f32ModInstance;
        private f64ModInstance;
        private f32PowInstance;
        private f64PowInstance;
        private i32PowInstance;
        private i64PowInstance;
        private compileBinaryExpression;
        makeLt(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeGt(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeLe(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeGe(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeEq(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        makeNe(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        makeAdd(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeSub(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeMul(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makePow(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        makeDiv(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeRem(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        makeShl(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeShr(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeShru(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeAnd(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeOr(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        makeXor(leftExpr: ExpressionRef, rightExpr: ExpressionRef, type: Type): ExpressionRef;
        private compileUnaryOverload;
        private compileBinaryOverload;
        private compileAssignment;
        /** Makes an assignment expression or block, assigning a value to a target. */
        makeAssignment(
        /** Target element, e.g. a Local. */
        target: Element, 
        /** Value expression that has been compiled in a previous step already. */
        valueExpr: ExpressionRef, 
        /** Value expression type. */
        valueType: Type, 
        /** Expression reference. Has already been compiled to `valueExpr`. */
        valueExpression: Expression, 
        /** `this` expression reference if a field or property set. */
        thisExpression: Expression | null, 
        /** Index expression reference if an indexed set. */
        indexExpression: Expression | null, 
        /** Whether to tee the value. */
        tee: boolean): ExpressionRef;
        /** Makes an assignment to a local, keeping track of wrap and null states. */
        private makeLocalAssignment;
        /** Makes an assignment to a global. */
        private makeGlobalAssignment;
        /** Compiles a call expression according to the specified context. */
        private compileCallExpression;
        /** Compiles the given arguments like a call expression according to the specified context. */
        private compileCallExpressionLike;
        private _reusableCallExpression;
        private compileCallExpressionBuiltin;
        /**
         * Checks that a call with the given number as arguments can be performed according to the
         * specified signature.
         */
        checkCallSignature(signature: Signature, numArguments: number, hasThis: boolean, reportNode: Node): boolean;
        /** Checks that an unsafe expression is allowed. */
        private checkUnsafe;
        /** Compiles a direct call to a concrete function. */
        compileCallDirect(instance: Function, argumentExpressions: Expression[], reportNode: Node, thisArg?: ExpressionRef, constraints?: Constraints): ExpressionRef;
        makeCallInline(instance: Function, operands: ExpressionRef[] | null, thisArg?: ExpressionRef, immediatelyDropped?: boolean): ExpressionRef;
        /** Makes sure that the arguments length helper global is present. */
        ensureArgumentsLength(): string;
        /** Ensures compilation of the varargs stub for the specified function. */
        ensureVarargsStub(original: Function): Function;
        /** Ensures compilation of the override stub for the specified function. */
        ensureOverrideStub(original: Function): Function;
        /** Finalizes the override stub of the specified function. */
        private finalizeOverrideStub;
        /** Marks managed call operands for the shadow stack. */
        private operandsTostack;
        /** Creates a direct call to the specified function. */
        makeCallDirect(instance: Function, operands: ExpressionRef[] | null, reportNode: Node, immediatelyDropped?: boolean): ExpressionRef;
        /** Compiles an indirect call to a first-class function. */
        compileCallIndirect(signature: Signature, functionArg: ExpressionRef, argumentExpressions: Expression[], reportNode: Node, thisArg?: ExpressionRef, immediatelyDropped?: boolean): ExpressionRef;
        /** Creates an indirect call to a first-class function. */
        makeCallIndirect(signature: Signature, functionArg: ExpressionRef, reportNode: Node, operands?: ExpressionRef[] | null, immediatelyDropped?: boolean): ExpressionRef;
        private compileCommaExpression;
        private compileElementAccessExpression;
        private compileFunctionExpression;
        /** Makes sure the enclosing source file of the specified expression has been compiled. */
        private maybeCompileEnclosingSource;
        private compileIdentifierExpression;
        private compileIdentifierExpressionBuiltin;
        private compileInstanceOfExpression;
        private makeInstanceofType;
        /** Prepares the instanceof helper for the given class or interface instance. */
        private prepareInstanceOf;
        /** Finalizes the instanceof helper of the given class or interface instance. */
        private finalizeInstanceOf;
        private makeInstanceofClass;
        /** Prepares the instanceof helper for the given class or interface prototype. */
        private prepareAnyInstanceOf;
        /** Finalizes the instanceof helper of the given class prototype. */
        private finalizeAnyInstanceOf;
        private compileLiteralExpression;
        private compileStringLiteral;
        private compileTemplateLiteral;
        private compileArrayLiteral;
        /** Makes a new array instance from a static buffer segment. */
        private makeNewArray;
        /** Compiles a special `fixed` array literal. */
        private compileStaticArrayLiteral;
        private compileObjectLiteral;
        private compileNewExpression;
        /** Gets the compiled constructor of the specified class or generates one if none is present. */
        ensureConstructor(
        /** Class wanting a constructor. */
        classInstance: Class, 
        /** Report node. */
        reportNode: Node): Function;
        /** Checks that all class fields have been initialized. */
        checkFieldInitialization(classInstance: Class, relatedNode?: Node | null): void;
        /** Checks that all class fields have been initialized in the specified flow. */
        checkFieldInitializationInFlow(classInstance: Class, flow: Flow, relatedNode?: Node | null): void;
        compileInstantiate(
        /** Constructor to call. */
        ctorInstance: Function, 
        /** Constructor arguments. */
        argumentExpressions: Expression[], 
        /** Contextual flags. */
        constraints: Constraints, 
        /** Node to report on. */
        reportNode: Node): ExpressionRef;
        private compilePropertyAccessExpression;
        private compileTernaryExpression;
        private compileUnaryPostfixExpression;
        private compileUnaryPrefixExpression;
        private compileTypeof;
        /** Makes sure that a 32-bit integer value is wrapped to a valid value of the specified type. */
        ensureSmallIntegerWrap(expr: ExpressionRef, type: Type): ExpressionRef;
        /** Adds the debug location of the specified expression at the specified range to the source map. */
        addDebugLocation(expr: ExpressionRef, range: Range): void;
        /** Checks whether a particular function signature is supported. */
        checkSignatureSupported(signature: Signature, reportNode: FunctionTypeNode): boolean;
        /** Evaluates a boolean condition, determining whether it is TRUE, FALSE or UNKNOWN. */
        evaluateCondition(expr: ExpressionRef): ConditionKind;
        /** Makes a constant zero of the specified type. */
        makeZero(type: Type): ExpressionRef;
        /** Makes a constant one of the specified type. */
        makeOne(type: Type): ExpressionRef;
        /** Makes a constant negative one of the specified type. */
        makeNegOne(type: Type): ExpressionRef;
        /** Creates a comparison whether an expression is 'true' in a broader sense. */
        makeIsTrueish(expr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        /** Makes a string conversion of the given expression. */
        makeToString(expr: ExpressionRef, type: Type, reportNode: Node): ExpressionRef;
        /** Makes an allocation suitable to hold the data of an instance of the given class. */
        makeAllocation(classInstance: Class): ExpressionRef;
        /** Makes a conditional allocation where `this` might not have been initialized yet. */
        makeConditionalAllocation(classInstance: Class, thisIndex: number): ExpressionRef;
        /** Makes the initializers for a class's fields within the constructor. */
        makeFieldInitializationInConstructor(
        /** Class being initialized. */
        classInstance: Class, 
        /** Statements to append to also being returned. Created if omitted. */
        stmts?: ExpressionRef[]): ExpressionRef[];
        /** Makes a call to `abort`, if present, otherwise creates a trap. */
        makeAbort(
        /** Message argument of type string, if any. */
        message: Expression | null, 
        /** Code location to report when aborting. */
        codeLocation: Node): ExpressionRef;
        /** Makes a call to `abort`, if present, otherwise creates a trap. */
        makeStaticAbort(
        /** Message argument of type string. May be zero. */
        messageExpr: ExpressionRef, 
        /** Code location to report when aborting. */
        codeLocation: Node): ExpressionRef;
        /** Makes a runtime non-null check, e.g. on `<Type>possiblyNull` or `possiblyNull!`. */
        makeRuntimeNonNullCheck(
        /** Expression being checked. */
        expr: ExpressionRef, 
        /** Type of the expression. */
        type: Type, 
        /** Report node. */
        reportNode: Node): ExpressionRef;
        /** Makes a runtime downcast check, e.g. on `<Child>parent`. */
        makeRuntimeDowncastCheck(
        /** Expression being downcast. */
        expr: ExpressionRef, 
        /** Type of the expression. */
        type: Type, 
        /** Type casting to. */
        toType: Type, 
        /** Report node. */
        reportNode: Node): ExpressionRef;
    }
}
declare module "types:assemblyscript/src/builtins" {
    /**
     * @fileoverview Built-in elements providing core WebAssembly functionality.
     *
     * Each builtin is linked to its definition in std/assembly/builtins.ts.
     * When its prototype is called, the compiler recognizes the `@builtin`
     * decorator, looks up the respective handler in the global builtins map
     * and executes it, with the handler directly emitting WebAssembly code
     * according to context.
     *
     * Builtins can be categorized into core builtins that typically are generic
     * and emit code directly and aliases calling core builtins with overridden
     * contexts. The latter is used by inline assembler aliases of WebAssembly
     * instructions, like `i64.load8_u` deferring to `<i64>load<u8>`.
     *
     * The `contextIsExact` modifier is used to force a specific instruction
     * family. A `i32.store8` deferring to `<i32>store<i8>` for example is
     * ambiguous in that the input can still be an i32 or an i64, leading to
     * either an `i32.store8` or an `i64.store8`, so `i32` is forced there.
     * This behavior is indicated by `from i32/i64` in the comments below.
     *
     * @license Apache-2.0
     */
    import { Compiler } from "types:assemblyscript/src/compiler";
    import { Expression, CallExpression, IdentifierExpression } from "types:assemblyscript/src/ast";
    import { Type } from "types:assemblyscript/src/types";
    import { ExpressionRef } from "types:assemblyscript/src/module";
    import { FunctionPrototype, VariableLikeElement } from "types:assemblyscript/src/program";
    /** Internal names of various compiler built-ins. */
    export namespace BuiltinNames {
        const start = "~start";
        const started = "~started";
        const argumentsLength = "~argumentsLength";
        const setArgumentsLength = "~setArgumentsLength";
        const abort = "~lib/builtins/abort";
        const trace = "~lib/builtins/trace";
        const seed = "~lib/builtins/seed";
        const isBoolean = "~lib/builtins/isBoolean";
        const isInteger = "~lib/builtins/isInteger";
        const isSigned = "~lib/builtins/isSigned";
        const isFloat = "~lib/builtins/isFloat";
        const isVector = "~lib/builtins/isVector";
        const isReference = "~lib/builtins/isReference";
        const isString = "~lib/builtins/isString";
        const isArray = "~lib/builtins/isArray";
        const isArrayLike = "~lib/builtins/isArrayLike";
        const isFunction = "~lib/builtins/isFunction";
        const isNullable = "~lib/builtins/isNullable";
        const isDefined = "~lib/builtins/isDefined";
        const isConstant = "~lib/builtins/isConstant";
        const isManaged = "~lib/builtins/isManaged";
        const isVoid = "~lib/builtins/isVoid";
        const add = "~lib/builtins/add";
        const sub = "~lib/builtins/sub";
        const mul = "~lib/builtins/mul";
        const div = "~lib/builtins/div";
        const clz = "~lib/builtins/clz";
        const ctz = "~lib/builtins/ctz";
        const popcnt = "~lib/builtins/popcnt";
        const rotl = "~lib/builtins/rotl";
        const rotr = "~lib/builtins/rotr";
        const abs = "~lib/builtins/abs";
        const max = "~lib/builtins/max";
        const min = "~lib/builtins/min";
        const ceil = "~lib/builtins/ceil";
        const floor = "~lib/builtins/floor";
        const copysign = "~lib/builtins/copysign";
        const nearest = "~lib/builtins/nearest";
        const reinterpret = "~lib/builtins/reinterpret";
        const sqrt = "~lib/builtins/sqrt";
        const trunc = "~lib/builtins/trunc";
        const eq = "~lib/builtins/eq";
        const ne = "~lib/builtins/ne";
        const rem = "~lib/builtins/rem";
        const load = "~lib/builtins/load";
        const store = "~lib/builtins/store";
        const atomic_load = "~lib/builtins/atomic.load";
        const atomic_store = "~lib/builtins/atomic.store";
        const atomic_add = "~lib/builtins/atomic.add";
        const atomic_sub = "~lib/builtins/atomic.sub";
        const atomic_and = "~lib/builtins/atomic.and";
        const atomic_or = "~lib/builtins/atomic.or";
        const atomic_xor = "~lib/builtins/atomic.xor";
        const atomic_xchg = "~lib/builtins/atomic.xchg";
        const atomic_cmpxchg = "~lib/builtins/atomic.cmpxchg";
        const atomic_wait = "~lib/builtins/atomic.wait";
        const atomic_notify = "~lib/builtins/atomic.notify";
        const atomic_fence = "~lib/builtins/atomic.fence";
        const sizeof = "~lib/builtins/sizeof";
        const alignof = "~lib/builtins/alignof";
        const offsetof = "~lib/builtins/offsetof";
        const nameof = "~lib/builtins/nameof";
        const lengthof = "~lib/builtins/lengthof";
        const select = "~lib/builtins/select";
        const unreachable = "~lib/builtins/unreachable";
        const changetype = "~lib/builtins/changetype";
        const assert = "~lib/builtins/assert";
        const call_indirect = "~lib/builtins/call_indirect";
        const unchecked = "~lib/builtins/unchecked";
        const instantiate = "~lib/builtins/instantiate";
        const idof = "~lib/builtins/idof";
        const i8 = "~lib/builtins/i8";
        const i16 = "~lib/builtins/i16";
        const i32 = "~lib/builtins/i32";
        const i64 = "~lib/builtins/i64";
        const isize = "~lib/builtins/isize";
        const u8 = "~lib/builtins/u8";
        const u16 = "~lib/builtins/u16";
        const u32 = "~lib/builtins/u32";
        const u64 = "~lib/builtins/u64";
        const usize = "~lib/builtins/usize";
        const bool = "~lib/builtins/bool";
        const f32 = "~lib/builtins/f32";
        const f64 = "~lib/builtins/f64";
        const v128 = "~lib/builtins/v128";
        const i32_clz = "~lib/builtins/i32.clz";
        const i64_clz = "~lib/builtins/i64.clz";
        const i32_ctz = "~lib/builtins/i32.ctz";
        const i64_ctz = "~lib/builtins/i64.ctz";
        const i32_popcnt = "~lib/builtins/i32.popcnt";
        const i64_popcnt = "~lib/builtins/i64.popcnt";
        const i32_rotl = "~lib/builtins/i32.rotl";
        const i64_rotl = "~lib/builtins/i64.rotl";
        const i32_rotr = "~lib/builtins/i32.rotr";
        const i64_rotr = "~lib/builtins/i64.rotr";
        const f32_abs = "~lib/builtins/f32.abs";
        const f64_abs = "~lib/builtins/f64.abs";
        const f32_max = "~lib/builtins/f32.max";
        const f64_max = "~lib/builtins/f64.max";
        const f32_min = "~lib/builtins/f32.min";
        const f64_min = "~lib/builtins/f64.min";
        const f32_ceil = "~lib/builtins/f32.ceil";
        const f64_ceil = "~lib/builtins/f64.ceil";
        const f32_floor = "~lib/builtins/f32.floor";
        const f64_floor = "~lib/builtins/f64.floor";
        const f32_copysign = "~lib/builtins/f32.copysign";
        const f64_copysign = "~lib/builtins/f64.copysign";
        const f32_nearest = "~lib/builtins/f32.nearest";
        const f64_nearest = "~lib/builtins/f64.nearest";
        const i32_reinterpret_f32 = "~lib/builtins/i32.reinterpret_f32";
        const i64_reinterpret_f64 = "~lib/builtins/i64.reinterpret_f64";
        const f32_reinterpret_i32 = "~lib/builtins/f32.reinterpret_i32";
        const f64_reinterpret_i64 = "~lib/builtins/f64.reinterpret_i64";
        const f32_sqrt = "~lib/builtins/f32.sqrt";
        const f64_sqrt = "~lib/builtins/f64.sqrt";
        const f32_trunc = "~lib/builtins/f32.trunc";
        const f64_trunc = "~lib/builtins/f64.trunc";
        const i32_add = "~lib/builtins/i32.add";
        const i64_add = "~lib/builtins/i64.add";
        const f32_add = "~lib/builtins/f32.add";
        const f64_add = "~lib/builtins/f64.add";
        const i32_sub = "~lib/builtins/i32.sub";
        const i64_sub = "~lib/builtins/i64.sub";
        const f32_sub = "~lib/builtins/f32.sub";
        const f64_sub = "~lib/builtins/f64.sub";
        const i32_mul = "~lib/builtins/i32.mul";
        const i64_mul = "~lib/builtins/i64.mul";
        const f32_mul = "~lib/builtins/f32.mul";
        const f64_mul = "~lib/builtins/f64.mul";
        const i32_div_s = "~lib/builtins/i32.div_s";
        const i32_div_u = "~lib/builtins/i32.div_u";
        const i64_div_s = "~lib/builtins/i64.div_s";
        const i64_div_u = "~lib/builtins/i64.div_u";
        const f32_div = "~lib/builtins/f32.div";
        const f64_div = "~lib/builtins/f64.div";
        const i32_eq = "~lib/builtins/i32.eq";
        const i64_eq = "~lib/builtins/i64.eq";
        const f32_eq = "~lib/builtins/f32.eq";
        const f64_eq = "~lib/builtins/f64.eq";
        const i32_ne = "~lib/builtins/i32.ne";
        const i64_ne = "~lib/builtins/i64.ne";
        const f32_ne = "~lib/builtins/f32.ne";
        const f64_ne = "~lib/builtins/f64.ne";
        const i32_rem_s = "~lib/builtins/i32.rem_s";
        const i32_rem_u = "~lib/builtins/i32.rem_u";
        const i64_rem_s = "~lib/builtins/i64.rem_s";
        const i64_rem_u = "~lib/builtins/i64.rem_u";
        const i32_load8_s = "~lib/builtins/i32.load8_s";
        const i32_load8_u = "~lib/builtins/i32.load8_u";
        const i32_load16_s = "~lib/builtins/i32.load16_s";
        const i32_load16_u = "~lib/builtins/i32.load16_u";
        const i32_load = "~lib/builtins/i32.load";
        const i64_load8_s = "~lib/builtins/i64.load8_s";
        const i64_load8_u = "~lib/builtins/i64.load8_u";
        const i64_load16_s = "~lib/builtins/i64.load16_s";
        const i64_load16_u = "~lib/builtins/i64.load16_u";
        const i64_load32_s = "~lib/builtins/i64.load32_s";
        const i64_load32_u = "~lib/builtins/i64.load32_u";
        const i64_load = "~lib/builtins/i64.load";
        const f32_load = "~lib/builtins/f32.load";
        const f64_load = "~lib/builtins/f64.load";
        const i32_store8 = "~lib/builtins/i32.store8";
        const i32_store16 = "~lib/builtins/i32.store16";
        const i32_store = "~lib/builtins/i32.store";
        const i64_store8 = "~lib/builtins/i64.store8";
        const i64_store16 = "~lib/builtins/i64.store16";
        const i64_store32 = "~lib/builtins/i64.store32";
        const i64_store = "~lib/builtins/i64.store";
        const f32_store = "~lib/builtins/f32.store";
        const f64_store = "~lib/builtins/f64.store";
        const i32_atomic_load8_u = "~lib/builtins/i32.atomic.load8_u";
        const i32_atomic_load16_u = "~lib/builtins/i32.atomic.load16_u";
        const i32_atomic_load = "~lib/builtins/i32.atomic.load";
        const i64_atomic_load8_u = "~lib/builtins/i64.atomic.load8_u";
        const i64_atomic_load16_u = "~lib/builtins/i64.atomic.load16_u";
        const i64_atomic_load32_u = "~lib/builtins/i64.atomic.load32_u";
        const i64_atomic_load = "~lib/builtins/i64.atomic.load";
        const i32_atomic_store8 = "~lib/builtins/i32.atomic.store8";
        const i32_atomic_store16 = "~lib/builtins/i32.atomic.store16";
        const i32_atomic_store = "~lib/builtins/i32.atomic.store";
        const i64_atomic_store8 = "~lib/builtins/i64.atomic.store8";
        const i64_atomic_store16 = "~lib/builtins/i64.atomic.store16";
        const i64_atomic_store32 = "~lib/builtins/i64.atomic.store32";
        const i64_atomic_store = "~lib/builtins/i64.atomic.store";
        const i32_atomic_rmw8_add_u = "~lib/builtins/i32.atomic.rmw8.add_u";
        const i32_atomic_rmw16_add_u = "~lib/builtins/i32.atomic.rmw16.add_u";
        const i32_atomic_rmw_add = "~lib/builtins/i32.atomic.rmw.add";
        const i64_atomic_rmw8_add_u = "~lib/builtins/i64.atomic.rmw8.add_u";
        const i64_atomic_rmw16_add_u = "~lib/builtins/i64.atomic.rmw16.add_u";
        const i64_atomic_rmw32_add_u = "~lib/builtins/i64.atomic.rmw32.add_u";
        const i64_atomic_rmw_add = "~lib/builtins/i64.atomic.rmw.add";
        const i32_atomic_rmw8_sub_u = "~lib/builtins/i32.atomic.rmw8.sub_u";
        const i32_atomic_rmw16_sub_u = "~lib/builtins/i32.atomic.rmw16.sub_u";
        const i32_atomic_rmw_sub = "~lib/builtins/i32.atomic.rmw.sub";
        const i64_atomic_rmw8_sub_u = "~lib/builtins/i64.atomic.rmw8.sub_u";
        const i64_atomic_rmw16_sub_u = "~lib/builtins/i64.atomic.rmw16.sub_u";
        const i64_atomic_rmw32_sub_u = "~lib/builtins/i64.atomic.rmw32.sub_u";
        const i64_atomic_rmw_sub = "~lib/builtins/i64.atomic.rmw.sub";
        const i32_atomic_rmw8_and_u = "~lib/builtins/i32.atomic.rmw8.and_u";
        const i32_atomic_rmw16_and_u = "~lib/builtins/i32.atomic.rmw16.and_u";
        const i32_atomic_rmw_and = "~lib/builtins/i32.atomic.rmw.and";
        const i64_atomic_rmw8_and_u = "~lib/builtins/i64.atomic.rmw8.and_u";
        const i64_atomic_rmw16_and_u = "~lib/builtins/i64.atomic.rmw16.and_u";
        const i64_atomic_rmw32_and_u = "~lib/builtins/i64.atomic.rmw32.and_u";
        const i64_atomic_rmw_and = "~lib/builtins/i64.atomic.rmw.and";
        const i32_atomic_rmw8_or_u = "~lib/builtins/i32.atomic.rmw8.or_u";
        const i32_atomic_rmw16_or_u = "~lib/builtins/i32.atomic.rmw16.or_u";
        const i32_atomic_rmw_or = "~lib/builtins/i32.atomic.rmw.or";
        const i64_atomic_rmw8_or_u = "~lib/builtins/i64.atomic.rmw8.or_u";
        const i64_atomic_rmw16_or_u = "~lib/builtins/i64.atomic.rmw16.or_u";
        const i64_atomic_rmw32_or_u = "~lib/builtins/i64.atomic.rmw32.or_u";
        const i64_atomic_rmw_or = "~lib/builtins/i64.atomic.rmw.or";
        const i32_atomic_rmw8_xor_u = "~lib/builtins/i32.atomic.rmw8.xor_u";
        const i32_atomic_rmw16_xor_u = "~lib/builtins/i32.atomic.rmw16.xor_u";
        const i32_atomic_rmw_xor = "~lib/builtins/i32.atomic.rmw.xor";
        const i64_atomic_rmw8_xor_u = "~lib/builtins/i64.atomic.rmw8.xor_u";
        const i64_atomic_rmw16_xor_u = "~lib/builtins/i64.atomic.rmw16.xor_u";
        const i64_atomic_rmw32_xor_u = "~lib/builtins/i64.atomic.rmw32.xor_u";
        const i64_atomic_rmw_xor = "~lib/builtins/i64.atomic.rmw.xor";
        const i32_atomic_rmw8_xchg_u = "~lib/builtins/i32.atomic.rmw8.xchg_u";
        const i32_atomic_rmw16_xchg_u = "~lib/builtins/i32.atomic.rmw16.xchg_u";
        const i32_atomic_rmw_xchg = "~lib/builtins/i32.atomic.rmw.xchg";
        const i64_atomic_rmw8_xchg_u = "~lib/builtins/i64.atomic.rmw8.xchg_u";
        const i64_atomic_rmw16_xchg_u = "~lib/builtins/i64.atomic.rmw16.xchg_u";
        const i64_atomic_rmw32_xchg_u = "~lib/builtins/i64.atomic.rmw32.xchg_u";
        const i64_atomic_rmw_xchg = "~lib/builtins/i64.atomic.rmw.xchg";
        const i32_atomic_rmw8_cmpxchg_u = "~lib/builtins/i32.atomic.rmw8.cmpxchg_u";
        const i32_atomic_rmw16_cmpxchg_u = "~lib/builtins/i32.atomic.rmw16.cmpxchg_u";
        const i32_atomic_rmw_cmpxchg = "~lib/builtins/i32.atomic.rmw.cmpxchg";
        const i64_atomic_rmw8_cmpxchg_u = "~lib/builtins/i64.atomic.rmw8.cmpxchg_u";
        const i64_atomic_rmw16_cmpxchg_u = "~lib/builtins/i64.atomic.rmw16.cmpxchg_u";
        const i64_atomic_rmw32_cmpxchg_u = "~lib/builtins/i64.atomic.rmw32.cmpxchg_u";
        const i64_atomic_rmw_cmpxchg = "~lib/builtins/i64.atomic.rmw.cmpxchg";
        const memory_atomic_wait32 = "~lib/memory/memory.atomic.wait32";
        const memory_atomic_wait64 = "~lib/memory/memory.atomic.wait64";
        const v128_splat = "~lib/builtins/v128.splat";
        const v128_extract_lane = "~lib/builtins/v128.extract_lane";
        const v128_replace_lane = "~lib/builtins/v128.replace_lane";
        const v128_shuffle = "~lib/builtins/v128.shuffle";
        const v128_swizzle = "~lib/builtins/v128.swizzle";
        const v128_load_splat = "~lib/builtins/v128.load_splat";
        const v128_load_ext = "~lib/builtins/v128.load_ext";
        const v128_load_zero = "~lib/builtins/v128.load_zero";
        const v128_load_lane = "~lib/builtins/v128.load_lane";
        const v128_store_lane = "~lib/builtins/v128.store_lane";
        const v128_load = "~lib/builtins/v128.load";
        const v128_load8x8_s = "~lib/builtins/v128.load8x8_s";
        const v128_load8x8_u = "~lib/builtins/v128.load8x8_u";
        const v128_load16x4_s = "~lib/builtins/v128.load16x4_s";
        const v128_load16x4_u = "~lib/builtins/v128.load16x4_u";
        const v128_load32x2_s = "~lib/builtins/v128.load32x2_s";
        const v128_load32x2_u = "~lib/builtins/v128.load32x2_u";
        const v128_load8_splat = "~lib/builtins/v128.load8_splat";
        const v128_load16_splat = "~lib/builtins/v128.load16_splat";
        const v128_load32_splat = "~lib/builtins/v128.load32_splat";
        const v128_load64_splat = "~lib/builtins/v128.load64_splat";
        const v128_load32_zero = "~lib/builtins/v128.load32_zero";
        const v128_load64_zero = "~lib/builtins/v128.load64_zero";
        const v128_load8_lane = "~lib/builtins/v128.load8_lane";
        const v128_load16_lane = "~lib/builtins/v128.load16_lane";
        const v128_load32_lane = "~lib/builtins/v128.load32_lane";
        const v128_load64_lane = "~lib/builtins/v128.load64_lane";
        const v128_store8_lane = "~lib/builtins/v128.store8_lane";
        const v128_store16_lane = "~lib/builtins/v128.store16_lane";
        const v128_store32_lane = "~lib/builtins/v128.store32_lane";
        const v128_store64_lane = "~lib/builtins/v128.store64_lane";
        const v128_store = "~lib/builtins/v128.store";
        const v128_add = "~lib/builtins/v128.add";
        const v128_sub = "~lib/builtins/v128.sub";
        const v128_mul = "~lib/builtins/v128.mul";
        const v128_div = "~lib/builtins/v128.div";
        const v128_neg = "~lib/builtins/v128.neg";
        const v128_add_sat = "~lib/builtins/v128.add_sat";
        const v128_sub_sat = "~lib/builtins/v128.sub_sat";
        const v128_shl = "~lib/builtins/v128.shl";
        const v128_shr = "~lib/builtins/v128.shr";
        const v128_and = "~lib/builtins/v128.and";
        const v128_or = "~lib/builtins/v128.or";
        const v128_xor = "~lib/builtins/v128.xor";
        const v128_andnot = "~lib/builtins/v128.andnot";
        const v128_not = "~lib/builtins/v128.not";
        const v128_bitselect = "~lib/builtins/v128.bitselect";
        const v128_any_true = "~lib/builtins/v128.any_true";
        const v128_all_true = "~lib/builtins/v128.all_true";
        const v128_bitmask = "~lib/builtins/v128.bitmask";
        const v128_popcnt = "~lib/builtins/v128.popcnt";
        const v128_min = "~lib/builtins/v128.min";
        const v128_max = "~lib/builtins/v128.max";
        const v128_pmin = "~lib/builtins/v128.pmin";
        const v128_pmax = "~lib/builtins/v128.pmax";
        const v128_dot = "~lib/builtins/v128.dot";
        const v128_avgr = "~lib/builtins/v128.avgr";
        const v128_abs = "~lib/builtins/v128.abs";
        const v128_sqrt = "~lib/builtins/v128.sqrt";
        const v128_ceil = "~lib/builtins/v128.ceil";
        const v128_floor = "~lib/builtins/v128.floor";
        const v128_trunc = "~lib/builtins/v128.trunc";
        const v128_nearest = "~lib/builtins/v128.nearest";
        const v128_eq = "~lib/builtins/v128.eq";
        const v128_ne = "~lib/builtins/v128.ne";
        const v128_lt = "~lib/builtins/v128.lt";
        const v128_le = "~lib/builtins/v128.le";
        const v128_gt = "~lib/builtins/v128.gt";
        const v128_ge = "~lib/builtins/v128.ge";
        const v128_convert = "~lib/builtins/v128.convert";
        const v128_convert_low = "~lib/builtins/v128.convert_low";
        const v128_trunc_sat = "~lib/builtins/v128.trunc_sat";
        const v128_trunc_sat_zero = "~lib/builtins/v128.trunc_sat_zero";
        const v128_narrow = "~lib/builtins/v128.narrow";
        const v128_extend_low = "~lib/builtins/v128.extend_low";
        const v128_extend_high = "~lib/builtins/v128.extend_high";
        const v128_extadd_pairwise = "~lib/builtins/v128.extadd_pairwise";
        const v128_demote_zero = "~lib/builtins/v128.demote_zero";
        const v128_promote_low = "~lib/builtins/v128.promote_low";
        const v128_q15mulr_sat = "~lib/builtins/v128.q15mulr_sat";
        const v128_extmul_low = "~lib/builtins/v128.extmul_low";
        const v128_extmul_high = "~lib/builtins/v128.extmul_high";
        const v128_relaxed_swizzle = "~lib/builtins/v128.relaxed_swizzle";
        const v128_relaxed_trunc = "~lib/builtins/v128.relaxed_trunc";
        const v128_relaxed_trunc_zero = "~lib/builtins/v128.relaxed_trunc_zero";
        const v128_relaxed_madd = "~lib/builtins/v128.relaxed_madd";
        const v128_relaxed_nmadd = "~lib/builtins/v128.relaxed_nmadd";
        const v128_relaxed_laneselect = "~lib/builtins/v128.relaxed_laneselect";
        const v128_relaxed_min = "~lib/builtins/v128.relaxed_min";
        const v128_relaxed_max = "~lib/builtins/v128.relaxed_max";
        const v128_relaxed_q15mulr = "~lib/builtins/v128.relaxed_q15mulr";
        const v128_relaxed_dot = "~lib/builtins/v128.relaxed_dot";
        const v128_relaxed_dot_add = "~lib/builtins/v128.relaxed_dot_add";
        const i8x16 = "~lib/builtins/i8x16";
        const i16x8 = "~lib/builtins/i16x8";
        const i32x4 = "~lib/builtins/i32x4";
        const i64x2 = "~lib/builtins/i64x2";
        const f32x4 = "~lib/builtins/f32x4";
        const f64x2 = "~lib/builtins/f64x2";
        const i8x16_splat = "~lib/builtins/i8x16.splat";
        const i8x16_extract_lane_s = "~lib/builtins/i8x16.extract_lane_s";
        const i8x16_extract_lane_u = "~lib/builtins/i8x16.extract_lane_u";
        const i8x16_replace_lane = "~lib/builtins/i8x16.replace_lane";
        const i8x16_add = "~lib/builtins/i8x16.add";
        const i8x16_sub = "~lib/builtins/i8x16.sub";
        const i8x16_mul = "~lib/builtins/i8x16.mul";
        const i8x16_min_s = "~lib/builtins/i8x16.min_s";
        const i8x16_min_u = "~lib/builtins/i8x16.min_u";
        const i8x16_max_s = "~lib/builtins/i8x16.max_s";
        const i8x16_max_u = "~lib/builtins/i8x16.max_u";
        const i8x16_avgr_u = "~lib/builtins/i8x16.avgr_u";
        const i8x16_abs = "~lib/builtins/i8x16.abs";
        const i8x16_neg = "~lib/builtins/i8x16.neg";
        const i8x16_add_sat_s = "~lib/builtins/i8x16.add_sat_s";
        const i8x16_add_sat_u = "~lib/builtins/i8x16.add_sat_u";
        const i8x16_sub_sat_s = "~lib/builtins/i8x16.sub_sat_s";
        const i8x16_sub_sat_u = "~lib/builtins/i8x16.sub_sat_u";
        const i8x16_shl = "~lib/builtins/i8x16.shl";
        const i8x16_shr_s = "~lib/builtins/i8x16.shr_s";
        const i8x16_shr_u = "~lib/builtins/i8x16.shr_u";
        const i8x16_all_true = "~lib/builtins/i8x16.all_true";
        const i8x16_bitmask = "~lib/builtins/i8x16.bitmask";
        const i8x16_popcnt = "~lib/builtins/i8x16.popcnt";
        const i8x16_eq = "~lib/builtins/i8x16.eq";
        const i8x16_ne = "~lib/builtins/i8x16.ne";
        const i8x16_lt_s = "~lib/builtins/i8x16.lt_s";
        const i8x16_lt_u = "~lib/builtins/i8x16.lt_u";
        const i8x16_le_s = "~lib/builtins/i8x16.le_s";
        const i8x16_le_u = "~lib/builtins/i8x16.le_u";
        const i8x16_gt_s = "~lib/builtins/i8x16.gt_s";
        const i8x16_gt_u = "~lib/builtins/i8x16.gt_u";
        const i8x16_ge_s = "~lib/builtins/i8x16.ge_s";
        const i8x16_ge_u = "~lib/builtins/i8x16.ge_u";
        const i8x16_narrow_i16x8_s = "~lib/builtins/i8x16.narrow_i16x8_s";
        const i8x16_narrow_i16x8_u = "~lib/builtins/i8x16.narrow_i16x8_u";
        const i8x16_shuffle = "~lib/builtins/i8x16.shuffle";
        const i8x16_swizzle = "~lib/builtins/i8x16.swizzle";
        const i16x8_splat = "~lib/builtins/i16x8.splat";
        const i16x8_extract_lane_s = "~lib/builtins/i16x8.extract_lane_s";
        const i16x8_extract_lane_u = "~lib/builtins/i16x8.extract_lane_u";
        const i16x8_replace_lane = "~lib/builtins/i16x8.replace_lane";
        const i16x8_add = "~lib/builtins/i16x8.add";
        const i16x8_sub = "~lib/builtins/i16x8.sub";
        const i16x8_mul = "~lib/builtins/i16x8.mul";
        const i16x8_min_s = "~lib/builtins/i16x8.min_s";
        const i16x8_min_u = "~lib/builtins/i16x8.min_u";
        const i16x8_max_s = "~lib/builtins/i16x8.max_s";
        const i16x8_max_u = "~lib/builtins/i16x8.max_u";
        const i16x8_avgr_u = "~lib/builtins/i16x8.avgr_u";
        const i16x8_abs = "~lib/builtins/i16x8.abs";
        const i16x8_neg = "~lib/builtins/i16x8.neg";
        const i16x8_add_sat_s = "~lib/builtins/i16x8.add_sat_s";
        const i16x8_add_sat_u = "~lib/builtins/i16x8.add_sat_u";
        const i16x8_sub_sat_s = "~lib/builtins/i16x8.sub_sat_s";
        const i16x8_sub_sat_u = "~lib/builtins/i16x8.sub_sat_u";
        const i16x8_shl = "~lib/builtins/i16x8.shl";
        const i16x8_shr_s = "~lib/builtins/i16x8.shr_s";
        const i16x8_shr_u = "~lib/builtins/i16x8.shr_u";
        const i16x8_all_true = "~lib/builtins/i16x8.all_true";
        const i16x8_bitmask = "~lib/builtins/i16x8.bitmask";
        const i16x8_eq = "~lib/builtins/i16x8.eq";
        const i16x8_ne = "~lib/builtins/i16x8.ne";
        const i16x8_lt_s = "~lib/builtins/i16x8.lt_s";
        const i16x8_lt_u = "~lib/builtins/i16x8.lt_u";
        const i16x8_le_s = "~lib/builtins/i16x8.le_s";
        const i16x8_le_u = "~lib/builtins/i16x8.le_u";
        const i16x8_gt_s = "~lib/builtins/i16x8.gt_s";
        const i16x8_gt_u = "~lib/builtins/i16x8.gt_u";
        const i16x8_ge_s = "~lib/builtins/i16x8.ge_s";
        const i16x8_ge_u = "~lib/builtins/i16x8.ge_u";
        const i16x8_narrow_i32x4_s = "~lib/builtins/i16x8.narrow_i32x4_s";
        const i16x8_narrow_i32x4_u = "~lib/builtins/i16x8.narrow_i32x4_u";
        const i16x8_extend_low_i8x16_s = "~lib/builtins/i16x8.extend_low_i8x16_s";
        const i16x8_extend_low_i8x16_u = "~lib/builtins/i16x8.extend_low_i8x16_u";
        const i16x8_extend_high_i8x16_s = "~lib/builtins/i16x8.extend_high_i8x16_s";
        const i16x8_extend_high_i8x16_u = "~lib/builtins/i16x8.extend_high_i8x16_u";
        const i16x8_extadd_pairwise_i8x16_s = "~lib/builtins/i16x8.extadd_pairwise_i8x16_s";
        const i16x8_extadd_pairwise_i8x16_u = "~lib/builtins/i16x8.extadd_pairwise_i8x16_u";
        const i16x8_q15mulr_sat_s = "~lib/builtins/i16x8.q15mulr_sat_s";
        const i16x8_extmul_low_i8x16_s = "~lib/builtins/i16x8.extmul_low_i8x16_s";
        const i16x8_extmul_low_i8x16_u = "~lib/builtins/i16x8.extmul_low_i8x16_u";
        const i16x8_extmul_high_i8x16_s = "~lib/builtins/i16x8.extmul_high_i8x16_s";
        const i16x8_extmul_high_i8x16_u = "~lib/builtins/i16x8.extmul_high_i8x16_u";
        const i16x8_shuffle = "~lib/builtins/i16x8.shuffle";
        const i32x4_splat = "~lib/builtins/i32x4.splat";
        const i32x4_extract_lane = "~lib/builtins/i32x4.extract_lane";
        const i32x4_replace_lane = "~lib/builtins/i32x4.replace_lane";
        const i32x4_add = "~lib/builtins/i32x4.add";
        const i32x4_sub = "~lib/builtins/i32x4.sub";
        const i32x4_mul = "~lib/builtins/i32x4.mul";
        const i32x4_min_s = "~lib/builtins/i32x4.min_s";
        const i32x4_min_u = "~lib/builtins/i32x4.min_u";
        const i32x4_max_s = "~lib/builtins/i32x4.max_s";
        const i32x4_max_u = "~lib/builtins/i32x4.max_u";
        const i32x4_dot_i16x8_s = "~lib/builtins/i32x4.dot_i16x8_s";
        const i32x4_abs = "~lib/builtins/i32x4.abs";
        const i32x4_neg = "~lib/builtins/i32x4.neg";
        const i32x4_shl = "~lib/builtins/i32x4.shl";
        const i32x4_shr_s = "~lib/builtins/i32x4.shr_s";
        const i32x4_shr_u = "~lib/builtins/i32x4.shr_u";
        const i32x4_all_true = "~lib/builtins/i32x4.all_true";
        const i32x4_bitmask = "~lib/builtins/i32x4.bitmask";
        const i32x4_eq = "~lib/builtins/i32x4.eq";
        const i32x4_ne = "~lib/builtins/i32x4.ne";
        const i32x4_lt_s = "~lib/builtins/i32x4.lt_s";
        const i32x4_lt_u = "~lib/builtins/i32x4.lt_u";
        const i32x4_le_s = "~lib/builtins/i32x4.le_s";
        const i32x4_le_u = "~lib/builtins/i32x4.le_u";
        const i32x4_gt_s = "~lib/builtins/i32x4.gt_s";
        const i32x4_gt_u = "~lib/builtins/i32x4.gt_u";
        const i32x4_ge_s = "~lib/builtins/i32x4.ge_s";
        const i32x4_ge_u = "~lib/builtins/i32x4.ge_u";
        const i32x4_trunc_sat_f32x4_s = "~lib/builtins/i32x4.trunc_sat_f32x4_s";
        const i32x4_trunc_sat_f32x4_u = "~lib/builtins/i32x4.trunc_sat_f32x4_u";
        const i32x4_trunc_sat_f64x2_s_zero = "~lib/builtins/i32x4.trunc_sat_f64x2_s_zero";
        const i32x4_trunc_sat_f64x2_u_zero = "~lib/builtins/i32x4.trunc_sat_f64x2_u_zero";
        const i32x4_extend_low_i16x8_s = "~lib/builtins/i32x4.extend_low_i16x8_s";
        const i32x4_extend_low_i16x8_u = "~lib/builtins/i32x4.extend_low_i16x8_u";
        const i32x4_extend_high_i16x8_s = "~lib/builtins/i32x4.extend_high_i16x8_s";
        const i32x4_extend_high_i16x8_u = "~lib/builtins/i32x4.extend_high_i16x8_u";
        const i32x4_extadd_pairwise_i16x8_s = "~lib/builtins/i32x4.extadd_pairwise_i16x8_s";
        const i32x4_extadd_pairwise_i16x8_u = "~lib/builtins/i32x4.extadd_pairwise_i16x8_u";
        const i32x4_extmul_low_i16x8_s = "~lib/builtins/i32x4.extmul_low_i16x8_s";
        const i32x4_extmul_low_i16x8_u = "~lib/builtins/i32x4.extmul_low_i16x8_u";
        const i32x4_extmul_high_i16x8_s = "~lib/builtins/i32x4.extmul_high_i16x8_s";
        const i32x4_extmul_high_i16x8_u = "~lib/builtins/i32x4.extmul_high_i16x8_u";
        const i32x4_shuffle = "~lib/builtins/i32x4.shuffle";
        const i64x2_splat = "~lib/builtins/i64x2.splat";
        const i64x2_extract_lane = "~lib/builtins/i64x2.extract_lane";
        const i64x2_replace_lane = "~lib/builtins/i64x2.replace_lane";
        const i64x2_add = "~lib/builtins/i64x2.add";
        const i64x2_sub = "~lib/builtins/i64x2.sub";
        const i64x2_mul = "~lib/builtins/i64x2.mul";
        const i64x2_abs = "~lib/builtins/i64x2.abs";
        const i64x2_neg = "~lib/builtins/i64x2.neg";
        const i64x2_shl = "~lib/builtins/i64x2.shl";
        const i64x2_shr_s = "~lib/builtins/i64x2.shr_s";
        const i64x2_shr_u = "~lib/builtins/i64x2.shr_u";
        const i64x2_all_true = "~lib/builtins/i64x2.all_true";
        const i64x2_bitmask = "~lib/builtins/i64x2.bitmask";
        const i64x2_eq = "~lib/builtins/i64x2.eq";
        const i64x2_ne = "~lib/builtins/i64x2.ne";
        const i64x2_lt_s = "~lib/builtins/i64x2.lt_s";
        const i64x2_lt_u = "~lib/builtins/i64x2.lt_u";
        const i64x2_le_s = "~lib/builtins/i64x2.le_s";
        const i64x2_le_u = "~lib/builtins/i64x2.le_u";
        const i64x2_gt_s = "~lib/builtins/i64x2.gt_s";
        const i64x2_gt_u = "~lib/builtins/i64x2.gt_u";
        const i64x2_ge_s = "~lib/builtins/i64x2.ge_s";
        const i64x2_ge_u = "~lib/builtins/i64x2.ge_u";
        const i64x2_extend_low_i32x4_s = "~lib/builtins/i64x2.extend_low_i32x4_s";
        const i64x2_extend_low_i32x4_u = "~lib/builtins/i64x2.extend_low_i32x4_u";
        const i64x2_extend_high_i32x4_s = "~lib/builtins/i64x2.extend_high_i32x4_s";
        const i64x2_extend_high_i32x4_u = "~lib/builtins/i64x2.extend_high_i32x4_u";
        const i64x2_extmul_low_i32x4_s = "~lib/builtins/i64x2.extmul_low_i32x4_s";
        const i64x2_extmul_low_i32x4_u = "~lib/builtins/i64x2.extmul_low_i32x4_u";
        const i64x2_extmul_high_i32x4_s = "~lib/builtins/i64x2.extmul_high_i32x4_s";
        const i64x2_extmul_high_i32x4_u = "~lib/builtins/i64x2.extmul_high_i32x4_u";
        const i64x2_shuffle = "~lib/builtins/i64x2.shuffle";
        const f32x4_splat = "~lib/builtins/f32x4.splat";
        const f32x4_extract_lane = "~lib/builtins/f32x4.extract_lane";
        const f32x4_replace_lane = "~lib/builtins/f32x4.replace_lane";
        const f32x4_add = "~lib/builtins/f32x4.add";
        const f32x4_sub = "~lib/builtins/f32x4.sub";
        const f32x4_mul = "~lib/builtins/f32x4.mul";
        const f32x4_div = "~lib/builtins/f32x4.div";
        const f32x4_neg = "~lib/builtins/f32x4.neg";
        const f32x4_min = "~lib/builtins/f32x4.min";
        const f32x4_max = "~lib/builtins/f32x4.max";
        const f32x4_pmin = "~lib/builtins/f32x4.pmin";
        const f32x4_pmax = "~lib/builtins/f32x4.pmax";
        const f32x4_abs = "~lib/builtins/f32x4.abs";
        const f32x4_sqrt = "~lib/builtins/f32x4.sqrt";
        const f32x4_ceil = "~lib/builtins/f32x4.ceil";
        const f32x4_floor = "~lib/builtins/f32x4.floor";
        const f32x4_trunc = "~lib/builtins/f32x4.trunc";
        const f32x4_nearest = "~lib/builtins/f32x4.nearest";
        const f32x4_eq = "~lib/builtins/f32x4.eq";
        const f32x4_ne = "~lib/builtins/f32x4.ne";
        const f32x4_lt = "~lib/builtins/f32x4.lt";
        const f32x4_le = "~lib/builtins/f32x4.le";
        const f32x4_gt = "~lib/builtins/f32x4.gt";
        const f32x4_ge = "~lib/builtins/f32x4.ge";
        const f32x4_convert_i32x4_s = "~lib/builtins/f32x4.convert_i32x4_s";
        const f32x4_convert_i32x4_u = "~lib/builtins/f32x4.convert_i32x4_u";
        const f32x4_demote_f64x2_zero = "~lib/builtins/f32x4.demote_f64x2_zero";
        const f32x4_shuffle = "~lib/builtins/f32x4.shuffle";
        const f64x2_splat = "~lib/builtins/f64x2.splat";
        const f64x2_extract_lane = "~lib/builtins/f64x2.extract_lane";
        const f64x2_replace_lane = "~lib/builtins/f64x2.replace_lane";
        const f64x2_add = "~lib/builtins/f64x2.add";
        const f64x2_sub = "~lib/builtins/f64x2.sub";
        const f64x2_mul = "~lib/builtins/f64x2.mul";
        const f64x2_div = "~lib/builtins/f64x2.div";
        const f64x2_neg = "~lib/builtins/f64x2.neg";
        const f64x2_min = "~lib/builtins/f64x2.min";
        const f64x2_max = "~lib/builtins/f64x2.max";
        const f64x2_pmin = "~lib/builtins/f64x2.pmin";
        const f64x2_pmax = "~lib/builtins/f64x2.pmax";
        const f64x2_abs = "~lib/builtins/f64x2.abs";
        const f64x2_sqrt = "~lib/builtins/f64x2.sqrt";
        const f64x2_ceil = "~lib/builtins/f64x2.ceil";
        const f64x2_floor = "~lib/builtins/f64x2.floor";
        const f64x2_trunc = "~lib/builtins/f64x2.trunc";
        const f64x2_nearest = "~lib/builtins/f64x2.nearest";
        const f64x2_eq = "~lib/builtins/f64x2.eq";
        const f64x2_ne = "~lib/builtins/f64x2.ne";
        const f64x2_lt = "~lib/builtins/f64x2.lt";
        const f64x2_le = "~lib/builtins/f64x2.le";
        const f64x2_gt = "~lib/builtins/f64x2.gt";
        const f64x2_ge = "~lib/builtins/f64x2.ge";
        const f64x2_convert_low_i32x4_s = "~lib/builtins/f64x2.convert_low_i32x4_s";
        const f64x2_convert_low_i32x4_u = "~lib/builtins/f64x2.convert_low_i32x4_u";
        const f64x2_promote_low_f32x4 = "~lib/builtins/f64x2.promote_low_f32x4";
        const f64x2_shuffle = "~lib/builtins/f64x2.shuffle";
        const i8x16_relaxed_swizzle = "~lib/builtins/i8x16.relaxed_swizzle";
        const i32x4_relaxed_trunc_f32x4_s = "~lib/builtins/i32x4.relaxed_trunc_f32x4_s";
        const i32x4_relaxed_trunc_f32x4_u = "~lib/builtins/i32x4.relaxed_trunc_f32x4_u";
        const i32x4_relaxed_trunc_f64x2_s_zero = "~lib/builtins/i32x4.relaxed_trunc_f64x2_s_zero";
        const i32x4_relaxed_trunc_f64x2_u_zero = "~lib/builtins/i32x4.relaxed_trunc_f64x2_u_zero";
        const f32x4_relaxed_madd = "~lib/builtins/f32x4.relaxed_madd";
        const f32x4_relaxed_nmadd = "~lib/builtins/f32x4.relaxed_nmadd";
        const f64x2_relaxed_madd = "~lib/builtins/f64x2.relaxed_madd";
        const f64x2_relaxed_nmadd = "~lib/builtins/f64x2.relaxed_nmadd";
        const i8x16_relaxed_laneselect = "~lib/builtins/i8x16.relaxed_laneselect";
        const i16x8_relaxed_laneselect = "~lib/builtins/i16x8.relaxed_laneselect";
        const i32x4_relaxed_laneselect = "~lib/builtins/i32x4.relaxed_laneselect";
        const i64x2_relaxed_laneselect = "~lib/builtins/i64x2.relaxed_laneselect";
        const f32x4_relaxed_min = "~lib/builtins/f32x4.relaxed_min";
        const f32x4_relaxed_max = "~lib/builtins/f32x4.relaxed_max";
        const f64x2_relaxed_min = "~lib/builtins/f64x2.relaxed_min";
        const f64x2_relaxed_max = "~lib/builtins/f64x2.relaxed_max";
        const i16x8_relaxed_q15mulr_s = "~lib/builtins/i16x8.relaxed_q15mulr_s";
        const i16x8_relaxed_dot_i8x16_i7x16_s = "~lib/builtins/i16x8.relaxed_dot_i8x16_i7x16_s";
        const i32x4_relaxed_dot_i8x16_i7x16_add_s = "~lib/builtins/i32x4.relaxed_dot_i8x16_i7x16_add_s";
        const i31_new = "~lib/builtins/i31.new";
        const i31_get = "~lib/builtins/i31.get";
        const data_end = "~lib/memory/__data_end";
        const stack_pointer = "~lib/memory/__stack_pointer";
        const heap_base = "~lib/memory/__heap_base";
        const rtti_base = "~lib/rt/__rtti_base";
        const visit_globals = "~lib/rt/__visit_globals";
        const visit_members = "~lib/rt/__visit_members";
        const tostack = "~lib/rt/__tostack";
        const NaN = "~lib/number/NaN";
        const Infinity = "~lib/number/Infinity";
        const isNaN = "~lib/number/isNaN";
        const isFinite = "~lib/number/isFinite";
        const ERROR = "~lib/diagnostics/ERROR";
        const WARNING = "~lib/diagnostics/WARNING";
        const INFO = "~lib/diagnostics/INFO";
        const Function = "~lib/function/Function";
        const Function_call = "~lib/function/Function#call";
        const memory_size = "~lib/memory/memory.size";
        const memory_grow = "~lib/memory/memory.grow";
        const memory_copy = "~lib/memory/memory.copy";
        const memory_fill = "~lib/memory/memory.fill";
        const memory_data = "~lib/memory/memory.data";
        const Int8Array = "~lib/typedarray/Int8Array";
        const Uint8Array = "~lib/typedarray/Uint8Array";
        const Uint8ClampedArray = "~lib/typedarray/Uint8ClampedArray";
        const Int16Array = "~lib/typedarray/Int16Array";
        const Uint16Array = "~lib/typedarray/Uint16Array";
        const Int32Array = "~lib/typedarray/Int32Array";
        const Uint32Array = "~lib/typedarray/Uint32Array";
        const Int64Array = "~lib/typedarray/Int64Array";
        const Uint64Array = "~lib/typedarray/Uint64Array";
        const Float32Array = "~lib/typedarray/Float32Array";
        const Float64Array = "~lib/typedarray/Float64Array";
        const String_raw = "~lib/string/String.raw";
        const String_eq = "~lib/string/String.__eq";
        const String_ne = "~lib/string/String.__ne";
        const String_not = "~lib/string/String.__not";
        const Object = "~lib/object/Object";
    }
    /** Builtin variable compilation context. */
    export class BuiltinVariableContext {
        /** Compiler reference. */
        compiler: Compiler;
        /** Variable being accessed. */
        element: VariableLikeElement;
        /** Contextual type. */
        contextualType: Type;
        /** Respective report expression. */
        reportNode: IdentifierExpression;
        constructor(
        /** Compiler reference. */
        compiler: Compiler, 
        /** Variable being accessed. */
        element: VariableLikeElement, 
        /** Contextual type. */
        contextualType?: Type, 
        /** Respective report expression. */
        reportNode?: IdentifierExpression);
    }
    /** Builtin function compilation context. */
    export class BuiltinFunctionContext {
        /** Compiler reference. */
        compiler: Compiler;
        /** Prototype being called. */
        prototype: FunctionPrototype;
        /** Provided type arguments. */
        typeArguments: Type[] | null;
        /** Provided operands. */
        operands: Expression[];
        /** Provided this operand, if any. */
        thisOperand: Expression | null;
        /** Contextual type. */
        contextualType: Type;
        /** Respective call expression. */
        reportNode: CallExpression;
        /** Whether originating from inline assembly. */
        contextIsExact: boolean;
        constructor(
        /** Compiler reference. */
        compiler: Compiler, 
        /** Prototype being called. */
        prototype: FunctionPrototype, 
        /** Provided type arguments. */
        typeArguments: Type[] | null, 
        /** Provided operands. */
        operands: Expression[], 
        /** Provided this operand, if any. */
        thisOperand: Expression | null, 
        /** Contextual type. */
        contextualType: Type, 
        /** Respective call expression. */
        reportNode: CallExpression, 
        /** Whether originating from inline assembly. */
        contextIsExact: boolean);
    }
    /** Builtin functions map. */
    export const builtinFunctions: Map<string, (ctx: BuiltinFunctionContext) => ExpressionRef>;
    /** Builtin variables map. */
    export const builtinVariables_onCompile: Map<string, (ctx: BuiltinVariableContext) => void>;
    export const builtinVariables_onAccess: Map<string, (ctx: BuiltinVariableContext) => ExpressionRef>;
    /** Compiles the `visit_globals` function. */
    export function compileVisitGlobals(compiler: Compiler): void;
    /** Compiles the `__visit_members` function. */
    export function compileVisitMembers(compiler: Compiler): void;
    /** Compiles runtime type information for use by stdlib. */
    export function compileRTTI(compiler: Compiler): void;
}
declare module "types:assemblyscript/src/module" {
    /**
     * @fileoverview A thin wrapper around Binaryen's C-API.
     *
     * The AssemblyScript compiler utilizes Binaryen's C-API directly. Even
     * though it currently imports binaryen.js, none of the JS APIs it
     * provides are used.
     *
     * @license Apache-2.0
     */
    import { Target } from "types:assemblyscript/src/common";
    import { Type } from "types:assemblyscript/src/types";
    import * as binaryen from "types:assemblyscript/src/glue/binaryen";
    /** A Binaryen-compatible index. */
    export type Index = binaryen.Index;
    /** Reference to a Binaryen-compatible string. */
    export type StringRef = binaryen.StringRef;
    /** Reference to a Binaryen module. */
    export type ModuleRef = binaryen.ModuleRef;
    /** Reference to a Binaryen function. */
    export type FunctionRef = binaryen.FunctionRef;
    /** Reference to a Binaryen expression. */
    export type ExpressionRef = binaryen.ExpressionRef;
    /** Reference to a Binaryen global. */
    export type GlobalRef = binaryen.GlobalRef;
    /** Reference to a Binaryen tag. */
    export type TagRef = binaryen.TagRef;
    /** Reference to a Binaryen import. */
    export type ImportRef = binaryen.ImportRef;
    /** Reference to a Binaryen export. */
    export type ExportRef = binaryen.ExportRef;
    /** Reference to a Binaryen relooper. */
    export type RelooperRef = binaryen.RelooperRef;
    /** Reference to a Binaryen relooper block. */
    export type RelooperBlockRef = binaryen.RelooperBlockRef;
    /** Reference to a Binaryen type. */
    export type TypeRef = binaryen.TypeRef;
    export namespace TypeRef {
        const None: TypeRef;
        const Unreachable: TypeRef;
        const I32: TypeRef;
        const I64: TypeRef;
        const F32: TypeRef;
        const F64: TypeRef;
        const V128: TypeRef;
        const Funcref: number;
        const Externref: number;
        const Anyref: number;
        const Eqref: number;
        const Structref: number;
        const Arrayref: number;
        const I31ref: number;
        const Stringref: number;
        const StringviewWTF8: number;
        const StringviewWTF16: number;
        const StringviewIter: number;
        const Noneref: number;
        const Nofuncref: number;
        const Noexternref: number;
    }
    /** Reference to a Binaryen heap type. */
    export type HeapTypeRef = binaryen.HeapTypeRef;
    export namespace HeapTypeRef {
        const Extern: HeapTypeRef;
        const Func: HeapTypeRef;
        const Any: HeapTypeRef;
        const Eq: HeapTypeRef;
        const I31: HeapTypeRef;
        const Struct: HeapTypeRef;
        const Array: HeapTypeRef;
        const String: HeapTypeRef;
        const StringviewWTF8: HeapTypeRef;
        const StringviewWTF16: HeapTypeRef;
        const StringviewIter: HeapTypeRef;
        const None: HeapTypeRef;
        const Noextern: HeapTypeRef;
        const Nofunc: HeapTypeRef;
        function isBottom(ht: HeapTypeRef): boolean;
        function getBottom(ht: HeapTypeRef): HeapTypeRef;
        function isSubtype(ht: HeapTypeRef, superHt: HeapTypeRef): boolean;
        function leastUpperBound(a: HeapTypeRef, b: HeapTypeRef): HeapTypeRef;
    }
    /** Packed array element respectively struct field types. */
    export type PackedType = binaryen.PackedType;
    export namespace PackedType {
        const NotPacked: PackedType;
        const I8: PackedType;
        const I16: PackedType;
    }
    /** Type builder error reasons. */
    export type TypeBuilderErrorReason = binaryen.TypeBuilderErrorReason;
    export namespace TypeBuilderErrorReason {
        /** Indicates a cycle in the supertype relation. */
        const SelfSupertype: TypeBuilderErrorReason;
        /** Indicates that the declared supertype of a type is invalid. */
        const InvalidSupertype: TypeBuilderErrorReason;
        /** Indicates that the declared supertype is an invalid forward reference. */
        const ForwardSupertypeReference: TypeBuilderErrorReason;
        /** Indicates that a child of a type is an invalid forward reference. */
        const ForwardChildReference: TypeBuilderErrorReason;
        /** Converts a type builder error reason to a string. */
        function toString(reason: TypeBuilderErrorReason): string;
    }
    /** Type system constants. */
    export type TypeSystem = binaryen.TypeSystem;
    export namespace TypeSystem {
        const Isorecursive: TypeSystem;
        const Nominal: TypeSystem;
    }
    /** Binaryen feature constants. */
    export const enum FeatureFlags {
        MVP = 0,
        Atomics = 1,
        MutableGlobals = 2,
        TruncSat = 4,
        SIMD = 8,
        BulkMemory = 16,
        SignExt = 32,
        ExceptionHandling = 64,
        TailCall = 128,
        ReferenceTypes = 256,
        MultiValue = 512,
        GC = 1024,
        Memory64 = 2048,
        RelaxedSIMD = 8192,
        ExtendedConst = 16384,
        Stringref = 32768,
        MultiMemory = 65536,
        All = 126975
    }
    /** Binaryen expression id constants. */
    export const enum ExpressionId {
        Invalid = 0,
        Block = 1,
        If = 2,
        Loop = 3,
        Break = 4,
        Switch = 5,
        Call = 6,
        CallIndirect = 7,
        LocalGet = 8,
        LocalSet = 9,
        GlobalGet = 10,
        GlobalSet = 11,
        Load = 12,
        Store = 13,
        Const = 14,
        Unary = 15,
        Binary = 16,
        Select = 17,
        Drop = 18,
        Return = 19,
        MemorySize = 20,
        MemoryGrow = 21,
        Nop = 22,
        Unreachable = 23,
        AtomicRMW = 24,
        AtomicCmpxchg = 25,
        AtomicWait = 26,
        AtomicNotify = 27,
        AtomicFence = 28,
        SIMDExtract = 29,
        SIMDReplace = 30,
        SIMDShuffle = 31,
        SIMDTernary = 32,
        SIMDShift = 33,
        SIMDLoad = 34,
        SIMDLoadStoreLane = 35,
        MemoryInit = 36,
        DataDrop = 37,
        MemoryCopy = 38,
        MemoryFill = 39,
        Pop = 40,
        RefNull = 41,
        RefIsNull = 42,
        RefFunc = 43,
        RefEq = 44,
        TableGet = 45,
        TableSet = 46,
        TableSize = 47,
        TableGrow = 48,
        Try = 49,
        Throw = 50,
        Rethrow = 51,
        TupleMake = 52,
        TupleExtract = 53,
        I31New = 54,
        I31Get = 55,
        CallRef = 56,
        RefTest = 57,
        RefCast = 58,
        BrOn = 59,
        StructNew = 60,
        StructGet = 61,
        StructSet = 62,
        ArrayNew = 63,
        ArrayNewSeg = 64,
        ArrayNewFixed = 65,
        ArrayGet = 66,
        ArraySet = 67,
        ArrayLen = 68,
        ArrayCopy = 69,
        ArrayFill = 70,
        ArrayInit = 71,
        RefAs = 72,
        StringNew = 73,
        StringConst = 74,
        StringMeasure = 75,
        StringEncode = 76,
        StringConcat = 77,
        StringEq = 78,
        StringAs = 79,
        StringWTF8Advance = 80,
        StringWTF16Get = 81,
        StringIterNext = 82,
        StringIterMove = 83,
        StringSliceWTF = 84,
        StringSliceIter = 85
    }
    /** Binaryen external kind constants. */
    export const enum ExternalKind {
        Function = 0,
        Table = 1,
        Memory = 2,
        Global = 3,
        Tag = 4
    }
    /** Binaryen unary operation constants. */
    export const enum UnaryOp {
        /** i32.clz */
        ClzI32 = 0,
        /** i64.clz */
        ClzI64 = 1,
        /** i32.ctz */
        CtzI32 = 2,
        /** i64.ctz */
        CtzI64 = 3,
        /** i32.popcnt */
        PopcntI32 = 4,
        /** i64.popcnt */
        PopcntI64 = 5,
        /** f32.neg */
        NegF32 = 6,
        /** f64.neg */
        NegF64 = 7,
        /** f32.abs */
        AbsF32 = 8,
        /** f64.abs */
        AbsF64 = 9,
        /** f32.ceil */
        CeilF32 = 10,
        /** f64.ceil */
        CeilF64 = 11,
        /** f32.floor */
        FloorF32 = 12,
        /** f64.floor */
        FloorF64 = 13,
        /** f32.trunc */
        TruncF32 = 14,
        /** f64.trunc */
        TruncF64 = 15,
        /** f32.nearest */
        NearestF32 = 16,
        /** f64.nearest */
        NearestF64 = 17,
        /** f32.sqrt */
        SqrtF32 = 18,
        /** f64.sqrt */
        SqrtF64 = 19,
        /** i32.eqz */
        EqzI32 = 20,
        /** i64.eqz */
        EqzI64 = 21,
        /** i64.extend_i32_s */
        ExtendI32ToI64 = 22,
        /** i64.extend_i32_u */
        ExtendU32ToU64 = 23,
        /** i32.wrap_i64 */
        WrapI64ToI32 = 24,
        /** i32.trunc_f32_s */
        TruncF32ToI32 = 25,
        /** i64.trunc_f32_s */
        TruncF32ToI64 = 26,
        /** i32.trunc_f32_u */
        TruncF32ToU32 = 27,
        /** i64.trunc_f32_u */
        TruncF32ToU64 = 28,
        /** i32.trunc_f64_s */
        TruncF64ToI32 = 29,
        /** i64.trunc_f64_s */
        TruncF64ToI64 = 30,
        /** i32.trunc_f64_u */
        TruncF64ToU32 = 31,
        /** i64.trunc_f64_u */
        TruncF64ToU64 = 32,
        /** i32.reinterpret_f32 */
        ReinterpretF32ToI32 = 33,
        /** i64.reinterpret_f64 */
        ReinterpretF64ToI64 = 34,
        /** f32.convert_i32_s */
        ConvertI32ToF32 = 35,
        /** f64.convert_i32_s */
        ConvertI32ToF64 = 36,
        /** f32.convert_i32_u */
        ConvertU32ToF32 = 37,
        /** f64.convert_i32_u */
        ConvertU32ToF64 = 38,
        /** f32.convert_i64_s */
        ConvertI64ToF32 = 39,
        /** f64.convert_i64_s */
        ConvertI64ToF64 = 40,
        /** f32.convert_i64_u */
        ConvertU64ToF32 = 41,
        /** f64.convert_i64_u */
        ConvertU64ToF64 = 42,
        /** f64.promote.f32 */
        PromoteF32ToF64 = 43,
        /** f32.demote_f64 */
        DemoteF64ToF32 = 44,
        /** f32.reinterpret_i32 */
        ReinterpretI32ToF32 = 45,
        /** f64.reinterpret_i64 */
        ReinterpretI64ToF64 = 46,
        /** i32.extend8_s */
        Extend8I32 = 47,
        /** i32.extend16_s */
        Extend16I32 = 48,
        /** i64.extend8_s */
        Extend8I64 = 49,
        /** i64.extend16_s */
        Extend16I64 = 50,
        /** i64.extend32_s (i64 in, i64 out) */
        Extend32I64 = 51,
        /** i32.trunc_sat_f32_s */
        TruncSatF32ToI32 = 52,
        /** i32.trunc_sat_f32_u */
        TruncSatF32ToU32 = 53,
        /** i32.trunc_sat_f64_s */
        TruncSatF64ToI32 = 54,
        /** i32.trunc_sat_f64_u */
        TruncSatF64ToU32 = 55,
        /** i64.trunc_sat_f32_s */
        TruncSatF32ToI64 = 56,
        /** i64.trunc_sat_f32_u */
        TruncSatF32ToU64 = 57,
        /** i64.trunc_sat_f64_s */
        TruncSatF64ToI64 = 58,
        /** i64.trunc_sat_f64_u */
        TruncSatF64ToU64 = 59,
        /** i8x16.splat */
        SplatI8x16 = 60,
        /** i16x8.splat */
        SplatI16x8 = 61,
        /** i32x4.splat */
        SplatI32x4 = 62,
        /** i64x2.splat */
        SplatI64x2 = 63,
        /** f32x4.splat */
        SplatF32x4 = 64,
        /** f64x2.splat */
        SplatF64x2 = 65,
        /** v128.not */
        NotV128 = 66,
        /** v128.any_true */
        AnyTrueV128 = 67,
        /** i8x16.abs */
        AbsI8x16 = 68,
        /** i8x16.neg */
        NegI8x16 = 69,
        /** i8x16.all_true */
        AllTrueI8x16 = 70,
        /** i8x16.bitmask */
        BitmaskI8x16 = 71,
        /** i8x16.popcnt */
        PopcntI8x16 = 72,
        /** i16x8.abs */
        AbsI16x8 = 73,
        /** i16x8.neg */
        NegI16x8 = 74,
        /** i16x8.all_true */
        AllTrueI16x8 = 75,
        /** i16x8.bitmask */
        BitmaskI16x8 = 76,
        /** i32x4.abs */
        AbsI32x4 = 77,
        /** i32x4.neg */
        NegI32x4 = 78,
        /** i32x4.all_true */
        AllTrueI32x4 = 79,
        /** i32x4.bitmask */
        BitmaskI32x4 = 80,
        /** i64x2.abs */
        AbsI64x2 = 81,
        /** i64x2.neg */
        NegI64x2 = 82,
        /** i64x2.all_true */
        AllTrueI64x2 = 83,
        /** i64x2.bitmask */
        BitmaskI64x2 = 84,
        /** f32x4.abs */
        AbsF32x4 = 85,
        /** f32x4.neg */
        NegF32x4 = 86,
        /** f32x4.sqrt */
        SqrtF32x4 = 87,
        /** f32x4.ceil */
        CeilF32x4 = 88,
        /** f32x4.floor */
        FloorF32x4 = 89,
        /** f32x4.trunc */
        TruncF32x4 = 90,
        /** f32x4.nearest */
        NearestF32x4 = 91,
        /** f64x2.abs */
        AbsF64x2 = 92,
        /** f64x2.neg */
        NegF64x2 = 93,
        /** f64x2.sqrt */
        SqrtF64x2 = 94,
        /** f64x2.ceil */
        CeilF64x2 = 95,
        /** f64x2.floor */
        FloorF64x2 = 96,
        /** f64x2.trunc */
        TruncF64x2 = 97,
        /** f64x2.nearest */
        NearestF64x2 = 98,
        /** i16x8.extadd_pairwise_i8x16_s */
        ExtaddPairwiseI8x16ToI16x8 = 99,
        /** i16x8.extadd_pairwise.i8x16_u */
        ExtaddPairwiseU8x16ToU16x8 = 100,
        /** i32x4.extadd_pairwise.i16x8_s */
        ExtaddPairwiseI16x8ToI32x4 = 101,
        /** i32x4.extadd_pairwise.i64x8_u */
        ExtaddPairwiseU16x8ToU32x4 = 102,
        /** i32x4.trunc_sat_f32x4_s */
        TruncSatF32x4ToI32x4 = 103,
        /** i32x4.trunc_sat_f32x4_u */
        TruncSatF32x4ToU32x4 = 104,
        /** f32x4.convert_i32x4_s */
        ConvertI32x4ToF32x4 = 105,
        /** f32x4.convert_i32x4_u */
        ConvertU32x4ToF32x4 = 106,
        /** i16x8.extend_low_i8x16_s */
        ExtendLowI8x16ToI16x8 = 107,
        /** i16x8.extend_high_i8x16_s */
        ExtendHighI8x16ToI16x8 = 108,
        /** i16x8.extend_low_i8x16_u */
        ExtendLowU8x16ToU16x8 = 109,
        /** i16x8.extend_high_i8x16_u */
        ExtendHighU8x16ToU16x8 = 110,
        /** i32x4.extend_low_i16x8_s */
        ExtendLowI16x8ToI32x4 = 111,
        /** i32x4.extend_high_i16x8_s */
        ExtendHighI16x8ToI32x4 = 112,
        /** i32x4.extend_low_i16x8_u */
        ExtendLowU16x8ToU32x4 = 113,
        /** i32x4.extend_high_i16x8_u */
        ExtendHighU16x8ToU32x4 = 114,
        /** i64x2.extend_low_i32x4_s */
        ExtendLowI32x4ToI64x2 = 115,
        /** i64x2.extend_high_i32x4_s */
        ExtendHighI32x4ToI64x2 = 116,
        /** i64x2.extend_low_i32x4_u */
        ExtendLowU32x4ToU64x2 = 117,
        /** i64x2.extend_high_i32x4_u */
        ExtendHighU32x4ToU64x2 = 118,
        /** f32x4.convert_i32x4_s */
        ConvertLowI32x4ToF64x2 = 119,
        /** f32x4.convert_i32x4_u */
        ConvertLowU32x4ToF64x2 = 120,
        /** i32x4.trunc_sat_f64x2_s_zero */
        TruncSatF64x2ToI32x4Zero = 121,
        /** i32x4.trunc_sat_f64x2_u_zero */
        TruncSatF64x2ToU32x4Zero = 122,
        /** f32x4.demote_f64x2_zero */
        DemoteZeroF64x2ToF32x4 = 123,
        /** f64x2.promote_low_f32x4 */
        PromoteLowF32x4ToF64x2 = 124,
        /** i32x4.relaxed_trunc_f32x4_s */
        RelaxedTruncF32x4ToI32x4 = 125,
        /** i32x4.relaxed_trunc_f32x4_u */
        RelaxedTruncF32x4ToU32x4 = 126,
        /** i32x4.relaxed_trunc_f64x2_s_zero */
        RelaxedTruncF64x2ToI32x4Zero = 127,
        /** i32x4.relaxed_trunc_f64x2_u_zero */
        RelaxedTruncF64x2ToU32x4Zero = 128,
        _last = 128,
        /** i32.clz or i64.clz, depending on target word size */
        ClzSize = 129,
        /** i32.ctz or i64.ctz, depending on target word size */
        CtzSize = 130,
        /** i32.popcnt or i64.popcnt, depending on target word size */
        PopcntSize = 131,
        /** i32.eqz or i64.eqz, depending on target word size */
        EqzSize = 132
    }
    /** Binaryen binary operation constants. */
    export const enum BinaryOp {
        /** i32.add */
        AddI32 = 0,
        /** i32.sub */
        SubI32 = 1,
        /** i32.mul */
        MulI32 = 2,
        /** i32.div_s */
        DivI32 = 3,
        /** i32.div_u */
        DivU32 = 4,
        /** i32.rem_s */
        RemI32 = 5,
        /** i32.rem_u */
        RemU32 = 6,
        /** i32.and */
        AndI32 = 7,
        /** i32.or */
        OrI32 = 8,
        /** i32.xor */
        XorI32 = 9,
        /** i32.shl */
        ShlI32 = 10,
        /** i32.shr_s */
        ShrI32 = 11,
        /** i32.shr_u */
        ShrU32 = 12,
        /** i32.rotl */
        RotlI32 = 13,
        /** i32.rotr */
        RotrI32 = 14,
        /** i32.eq */
        EqI32 = 15,
        /** i32.ne */
        NeI32 = 16,
        /** i32.lt_s */
        LtI32 = 17,
        /** i32.lt_u */
        LtU32 = 18,
        /** i32.le_s */
        LeI32 = 19,
        /** i32.le_u */
        LeU32 = 20,
        /** i32.gt_s */
        GtI32 = 21,
        /** i32.gt_u */
        GtU32 = 22,
        /** i32.ge_s */
        GeI32 = 23,
        /** i32.ge_u */
        GeU32 = 24,
        /** i64.add */
        AddI64 = 25,
        /** i64.sub */
        SubI64 = 26,
        /** i64.mul */
        MulI64 = 27,
        /** i64.div_s */
        DivI64 = 28,
        /** i64.div_u */
        DivU64 = 29,
        /** i64.rem_s */
        RemI64 = 30,
        /** i64.rem_u */
        RemU64 = 31,
        /** i64.and */
        AndI64 = 32,
        /** i64.or */
        OrI64 = 33,
        /** i64.xor */
        XorI64 = 34,
        /** i64.shl */
        ShlI64 = 35,
        /** i64.shr_s */
        ShrI64 = 36,
        /** i64.shr_u */
        ShrU64 = 37,
        /** i64.rotl */
        RotlI64 = 38,
        /** i64.rotr */
        RotrI64 = 39,
        /** i64.eq */
        EqI64 = 40,
        /** i64.ne */
        NeI64 = 41,
        /** i64.lt_s */
        LtI64 = 42,
        /** i64.lt_u */
        LtU64 = 43,
        /** i64.le_s */
        LeI64 = 44,
        /** i64.le_u */
        LeU64 = 45,
        /** i64.gt_s */
        GtI64 = 46,
        /** i64.gt_u */
        GtU64 = 47,
        /** i64.ge_s */
        GeI64 = 48,
        /** i64.ge_u */
        GeU64 = 49,
        /** f32.add */
        AddF32 = 50,
        /** f32.sub */
        SubF32 = 51,
        /** f32.mul */
        MulF32 = 52,
        /** f32.div */
        DivF32 = 53,
        /** f32.copysign */
        CopysignF32 = 54,
        /** f32.min */
        MinF32 = 55,
        /** f32.max */
        MaxF32 = 56,
        /** f32.eq */
        EqF32 = 57,
        /** f32.ne */
        NeF32 = 58,
        /** f32.lt */
        LtF32 = 59,
        /** f32.le */
        LeF32 = 60,
        /** f32.gt */
        GtF32 = 61,
        /** f32.ge */
        GeF32 = 62,
        /** f64.add */
        AddF64 = 63,
        /** f64.sub */
        SubF64 = 64,
        /** f64.mul */
        MulF64 = 65,
        /** f64.div */
        DivF64 = 66,
        /** f64.copysign */
        CopysignF64 = 67,
        /** f64.min */
        MinF64 = 68,
        /** f64.max */
        MaxF64 = 69,
        /** f64.eq */
        EqF64 = 70,
        /** f64.ne */
        NeF64 = 71,
        /** f64.lt */
        LtF64 = 72,
        /** f64.le */
        LeF64 = 73,
        /** f64.gt */
        GtF64 = 74,
        /** f64.ge */
        GeF64 = 75,
        /** i8x16.eq */
        EqI8x16 = 76,
        /** i8x16.he */
        NeI8x16 = 77,
        /** i8x16.lt_s */
        LtI8x16 = 78,
        /** i8x16.lt_u */
        LtU8x16 = 79,
        /** i8x16.gt_s */
        GtI8x16 = 80,
        /** i8x16.gt_u */
        GtU8x16 = 81,
        /** i8x16.le_s */
        LeI8x16 = 82,
        /** i8x16.le_u */
        LeU8x16 = 83,
        /** i8x16.ge_s */
        GeI8x16 = 84,
        /** i8x16.ge_u */
        GeU8x16 = 85,
        /** i16x8.eq */
        EqI16x8 = 86,
        /** i16x8.ne */
        NeI16x8 = 87,
        /** i16x8.lt_s */
        LtI16x8 = 88,
        /** i16x8.lt_u */
        LtU16x8 = 89,
        /** i16x8.gt_s */
        GtI16x8 = 90,
        /** i16x8.gt_u */
        GtU16x8 = 91,
        /** i16x8.le_s */
        LeI16x8 = 92,
        /** i16x8.le_u */
        LeU16x8 = 93,
        /** i16x8.ge_s */
        GeI16x8 = 94,
        /** i16x8.ge_u */
        GeU16x8 = 95,
        /** i32x4.eq */
        EqI32x4 = 96,
        /** i32x4.ne */
        NeI32x4 = 97,
        /** i32x4.lt_s */
        LtI32x4 = 98,
        /** i32x4.lt_u */
        LtU32x4 = 99,
        /** i32x4.gt_s */
        GtI32x4 = 100,
        /** i32x4.gt_u */
        GtU32x4 = 101,
        /** i32x4.le_s */
        LeI32x4 = 102,
        /** i32x4.le_u */
        LeU32x4 = 103,
        /** i32x4.ge_s */
        GeI32x4 = 104,
        /** i32x4.ge_u */
        GeU32x4 = 105,
        /** i64x2.eq */
        EqI64x2 = 106,
        /** i64x2.ne */
        NeI64x2 = 107,
        /** i64x2.lt_s */
        LtI64x2 = 108,
        /** i64x2.gt_s */
        GtI64x2 = 109,
        /** i64x2.le_s */
        LeI64x2 = 110,
        /** i64x2.ge_s */
        GeI64x2 = 111,
        /** f32x4.eq */
        EqF32x4 = 112,
        /** f32x4.ne */
        NeF32x4 = 113,
        /** f32x4.lt */
        LtF32x4 = 114,
        /** f32x4.gt */
        GtF32x4 = 115,
        /** f32x4.le */
        LeF32x4 = 116,
        /** f32x4.ge */
        GeF32x4 = 117,
        /** f64x2.eq */
        EqF64x2 = 118,
        /** f64x2.ne */
        NeF64x2 = 119,
        /** f64x2.lt */
        LtF64x2 = 120,
        /** f64x2.gt */
        GtF64x2 = 121,
        /** f64x2.le */
        LeF64x2 = 122,
        /** f64x2.ge */
        GeF64x2 = 123,
        /** v128.and */
        AndV128 = 124,
        /** v128.or */
        OrV128 = 125,
        /** v128.xor */
        XorV128 = 126,
        /** v128.andnot */
        AndnotV128 = 127,
        /** i8x16.add */
        AddI8x16 = 128,
        /** i8x16.add_sat_s */
        AddSatI8x16 = 129,
        /** i8x16.add_sat_u */
        AddSatU8x16 = 130,
        /** i8x16.sub */
        SubI8x16 = 131,
        /** i8x16.sub_sat_s */
        SubSatI8x16 = 132,
        /** i8x16.sub_sat_u */
        SubSatU8x16 = 133,
        /** i8x16.min_s */
        MinI8x16 = 134,
        /** i8x16.min_u */
        MinU8x16 = 135,
        /** i8x16.max_s */
        MaxI8x16 = 136,
        /** i8x16.max_u */
        MaxU8x16 = 137,
        /** i8x16.avgr_u */
        AvgrU8x16 = 138,
        /** i16x8.add */
        AddI16x8 = 139,
        /** i16x8.add_sat_s */
        AddSatI16x8 = 140,
        /** i16x8.add_sat_u */
        AddSatU16x8 = 141,
        /** i16x8.sub */
        SubI16x8 = 142,
        /** i16x8.sub_sat_s */
        SubSatI16x8 = 143,
        /** i16x8.sub_sat_u */
        SubSatU16x8 = 144,
        /** i16x8.mul */
        MulI16x8 = 145,
        /** i16x8.min_s */
        MinI16x8 = 146,
        /** i16x8.min_u */
        MinU16x8 = 147,
        /** i16x8.max_s */
        MaxI16x8 = 148,
        /** i16x8.max_u */
        MaxU16x8 = 149,
        /** i16x8.avgr_u */
        AvgrU16x8 = 150,
        /** i16x8.q15mulr_sat_s */
        Q15mulrSatI16x8 = 151,
        /** i16x8.extmul_low_i8x16_s */
        ExtmulLowI16x8 = 152,
        /** i16x8.extmul_high_i8x16_s */
        ExtmulHighI16x8 = 153,
        /** i16x8.extmul_low_i8x16_u */
        ExtmulLowU16x8 = 154,
        /** i16x8.extmul_high_i8x16_u */
        ExtmulHighU16x8 = 155,
        /** i32x4.add */
        AddI32x4 = 156,
        /** i32x4.sub */
        SubI32x4 = 157,
        /** i32x4.mul */
        MulI32x4 = 158,
        /** i32x4.min_s */
        MinI32x4 = 159,
        /** i32x4.min_u */
        MinU32x4 = 160,
        /** i32x4.max_s */
        MaxI32x4 = 161,
        /** i32x4.max_u */
        MaxU32x4 = 162,
        /** i32x4.dot_i16x8_s */
        DotI16x8 = 163,
        /** i32x4.extmul_low_i16x8_s */
        ExtmulLowI32x4 = 164,
        /** i32x4.extmul_high_i16x8_s */
        ExtmulHighI32x4 = 165,
        /** i32x4.extmul_low_i16x8_u */
        ExtmulLowU32x4 = 166,
        /** i32x4.extmul_high_i16x8_u */
        ExtmulHighU32x4 = 167,
        /** i64x2.add */
        AddI64x2 = 168,
        /** i64x2.sub */
        SubI64x2 = 169,
        /** i64x2.mul */
        MulI64x2 = 170,
        /** i64x2.extmul_low_i32x4_s */
        ExtmulLowI64x2 = 171,
        /** i64x2.extmul_high_i32x4_s */
        ExtmulHighI64x2 = 172,
        /** i64x2.extmul_low_i32x4_u */
        ExtmulLowU64x2 = 173,
        /** i64x2.extmul_high_i32x4_u */
        ExtmulHighU64x2 = 174,
        /** f32x4.add */
        AddF32x4 = 175,
        /** f32x4.sub */
        SubF32x4 = 176,
        /** f32x4.mul */
        MulF32x4 = 177,
        /** f32x4.div */
        DivF32x4 = 178,
        /** f32x4.min */
        MinF32x4 = 179,
        /** f32x4.max */
        MaxF32x4 = 180,
        /** f32x4.pmin */
        PminF32x4 = 181,
        /** f32x4.pmax */
        PmaxF32x4 = 182,
        /** f64x2.add */
        AddF64x2 = 183,
        /** f64x2.sub */
        SubF64x2 = 184,
        /** f64x2.mul */
        MulF64x2 = 185,
        /** f64x2.div */
        DivF64x2 = 186,
        /** f64x2.min */
        MinF64x2 = 187,
        /** f64x2.max */
        MaxF64x2 = 188,
        /** f64x2.pmin */
        PminF64x2 = 189,
        /** f64x2.pmax */
        PmaxF64x2 = 190,
        /** i8x16.narrow_i16x8_s */
        NarrowI16x8ToI8x16 = 191,
        /** i8x16.narrow_i16x8_u */
        NarrowU16x8ToU8x16 = 192,
        /** i16x8.narrow_i32x4_s */
        NarrowI32x4ToI16x8 = 193,
        /** i16x8.narrow_i32x4_u */
        NarrowU32x4ToU16x8 = 194,
        /** i8x16.swizzle */
        SwizzleI8x16 = 195,
        /** i8x16.relaxed_swizzle */
        RelaxedSwizzleI8x16 = 196,
        /** f32x4.relaxed_min */
        RelaxedMinF32x4 = 197,
        /** f32x4.relaxed_max */
        RelaxedMaxF32x4 = 198,
        /** f64x2.relaxed_min */
        RelaxedMinF64x2 = 199,
        /** f64x2.relaxed_max */
        RelaxedMaxF64x2 = 200,
        /** i16x8.relaxed_q15mulr_s */
        RelaxedQ15MulrI16x8 = 201,
        /** i16x8.relaxed_dot_i8x16_i7x16_s */
        RelaxedDotI8x16I7x16ToI16x8 = 202,
        _last = 202,
        /** i32.add or i64.add, depending on target word size */
        AddSize = 203,
        /** i32.sub or i64.sub, depending on target word size */
        SubSize = 204,
        /** i32.mul or i64.mul, depending on target word size */
        MulSize = 205,
        /** i32.div_s or i64.div_s, depending on target word size */
        DivISize = 206,
        /** i32.div_u or i64.div_u, depending on target word size */
        DivUSize = 207,
        /** i32.rem_s or i64.rem_s, depending on target word size */
        RemISize = 208,
        /** i32.rem_u or i64.rem_u, depending on target word size */
        RemUSize = 209,
        /** i32.and or i64.and, depending on target word size */
        AndSize = 210,
        /** i32.or or i64.or, depending on target word size */
        OrSize = 211,
        /** i32.xor or i64.xor, depending on target word size */
        XorSize = 212,
        /** i32.shl or i64.shl, depending on target word size */
        ShlSize = 213,
        /** i32.shr_s or i64.shr_s, depending on target word size */
        ShrISize = 214,
        /** i32.shr_u or i64.shr_u, depending on target word size */
        ShrUSize = 215,
        /** i32.rotl or i64.rotl, depending on target word size */
        RotlSize = 216,
        /** i32.rotr or i64.rotr, depending on target word size */
        RotrSize = 217,
        /** i32.eq or i64.eq, depending on target word size */
        EqSize = 218,
        /** i32.ne or i64.ne, depending on target word size */
        NeSize = 219,
        /** i32.lt_s or i64.lt_s, depending on target word size */
        LtISize = 220,
        /** i32.lt_u or i64.lt_u, depending on target word size */
        LtUSize = 221,
        /** i32.le_s or i64.le_s, depending on target word size */
        LeISize = 222,
        /** i32.le_u or i64.le_u, depending on target word size */
        LeUSize = 223,
        /** i32.gt_s or i64.gt_s, depending on target word size */
        GtISize = 224,
        /** i32.gt_u or i64.gt_u, depending on target word size */
        GtUSize = 225,
        /** i32.ge_s or i64.ge_s, depending on target word size */
        GeISize = 226,
        /** i32.ge_u or i64.ge_u, depending on target word size */
        GeUSize = 227
    }
    /** Binaryen atomic read-modify-write operation constants. */
    export const enum AtomicRMWOp {
        /** i32.atomic.rmw.add, i32.atomic.rmw8.add_u, i32.atomic.rmw16.add_u, i64.atomic.rmw.add, i64.atomic.rmw8.add_u, i64.atomic.rmw16.add_u, i64.atomic.rmw32.add_u */
        Add = 0,
        /** i32.atomic.rmw.sub, i32.atomic.rmw8.sub_u, i32.atomic.rmw16.sub_u, i64.atomic.rmw.sub, i64.atomic.rmw8.sub_u, i64.atomic.rmw16.sub_u, i64.atomic.rmw32.sub_u */
        Sub = 1,
        /** i32.atomic.rmw.and, i32.atomic.rmw8.and_u, i32.atomic.rmw16.and_u, i64.atomic.rmw.and, i64.atomic.rmw8.and_u, i64.atomic.rmw16.and_u, i64.atomic.rmw32.and_u */
        And = 2,
        /** i32.atomic.rmw.or, i32.atomic.rmw8.or_u, i32.atomic.rmw16.or_u, i64.atomic.rmw.or, i64.atomic.rmw8.or_u, i64.atomic.rmw16.or_u, i64.atomic.rmw32.or_u */
        Or = 3,
        /** i32.atomic.rmw.xor, i32.atomic.rmw8.xor_u, i32.atomic.rmw16.xor_u, i64.atomic.rmw.xor, i64.atomic.rmw8.xor_u, i64.atomic.rmw16.xor_u, i64.atomic.rmw32.xor_u */
        Xor = 4,
        /** i32.atomic.rmw.xchg, i32.atomic.rmw8.xchg_u, i32.atomic.rmw16.xchg_u, i64.atomic.rmw.xchg, i64.atomic.rmw8.xchg_u, i64.atomic.rmw16.xchg_u, i64.atomic.rmw32.xchg_u */
        Xchg = 5
    }
    /** Binaryen SIMD extract operation constants. */
    export const enum SIMDExtractOp {
        /** i8x16.extract_lane_s */
        ExtractLaneI8x16 = 0,
        /** i8x16.extract_lane_u */
        ExtractLaneU8x16 = 1,
        /** i16x8.extract_lane_s */
        ExtractLaneI16x8 = 2,
        /** i16x8.extract_lane_u */
        ExtractLaneU16x8 = 3,
        /** i32x4.extract_lane_s */
        ExtractLaneI32x4 = 4,
        /** i32x4.extract_lane_u */
        ExtractLaneI64x2 = 5,
        /** i64x2.extract_lane_s */
        ExtractLaneF32x4 = 6,
        /** i64x2.extract_lane_u */
        ExtractLaneF64x2 = 7
    }
    /** Binaryen SIMD replace operation constants. */
    export const enum SIMDReplaceOp {
        /** i8x16.replace_lane */
        ReplaceLaneI8x16 = 0,
        /** i16x8.replace_lane */
        ReplaceLaneI16x8 = 1,
        /** i32x4.replace_lane */
        ReplaceLaneI32x4 = 2,
        /** i64x2.replace_lane */
        ReplaceLaneI64x2 = 3,
        /** f32x4.replace_lane */
        ReplaceLaneF32x4 = 4,
        /** f64x2.replace_lane */
        ReplaceLaneF64x2 = 5
    }
    /** Binaryen SIMD shift operation constants. */
    export const enum SIMDShiftOp {
        /** i8x16.shl */
        ShlI8x16 = 0,
        /** i8x16.shr_s */
        ShrI8x16 = 1,
        /** i8x16.shr_u */
        ShrU8x16 = 2,
        /** i16x8.shl */
        ShlI16x8 = 3,
        /** i16x8.shr_s */
        ShrI16x8 = 4,
        /** i16x8.shr_u */
        ShrU16x8 = 5,
        /** i16x8.shl */
        ShlI32x4 = 6,
        /** i32x4.shr_s */
        ShrI32x4 = 7,
        /** i32x4.shr_u */
        ShrU32x4 = 8,
        /** i64x2.shl */
        ShlI64x2 = 9,
        /** i64x2.shr_u */
        ShrI64x2 = 10,
        /** i64x2.shr_u */
        ShrU64x2 = 11
    }
    /** Binaryen SIMD load operation constants. */
    export const enum SIMDLoadOp {
        /** v128.load8_splat */
        Load8Splat = 0,
        /** v128.load16_splat */
        Load16Splat = 1,
        /** v128.load32_splat */
        Load32Splat = 2,
        /** v128.load64_splat */
        Load64Splat = 3,
        /** v128.load8x8_s */
        Load8x8S = 4,
        /** v128.load8x8_u */
        Load8x8U = 5,
        /** v128.load16x4_s */
        Load16x4S = 6,
        /** v128.load16x4_u */
        Load16x4U = 7,
        /** v128.load32x2_s */
        Load32x2S = 8,
        /** v128.load32x2_u */
        Load32x2U = 9,
        /** v128.load32_zero */
        Load32Zero = 10,
        /** v128.load64_zero */
        Load64Zero = 11
    }
    /** Binaryen SIMD load/store lane operation constants. */
    export const enum SIMDLoadStoreLaneOp {
        /** v128.load8_lane */
        Load8Lane = 0,
        /** v128.load16_lane */
        Load16Lane = 1,
        /** v128.load32_lane */
        Load32Lane = 2,
        /** v128.load64_lane */
        Load64Lane = 3,
        /** v128.store8_lane */
        Store8Lane = 4,
        /** v128.store16_lane */
        Store16Lane = 5,
        /** v128.store32_lane */
        Store32Lane = 6,
        /** v128.store64_lane */
        Store64Lane = 7
    }
    /** Binaryen SIMD ternary operation constants. */
    export const enum SIMDTernaryOp {
        /** v128.bitselect */
        Bitselect = 0,
        /** f32x4.relaxed_madd */
        RelaxedMaddF32x4 = 1,
        /** f32x4.relaxed_nmadd */
        RelaxedNmaddF32x4 = 2,
        /** f64x2.relaxed_madd */
        RelaxedMaddF64x2 = 3,
        /** f64x2.relaxed_nmadd */
        RelaxedNmaddF64x2 = 4,
        /** i8x16.relaxed_laneselect */
        RelaxedLaneselectI8x16 = 5,
        /** i16x8.relaxed_laneselect */
        RelaxedLaneselectI16x8 = 6,
        /** i32x4.relaxed_laneselect */
        RelaxedLaneselectI32x4 = 7,
        /** i64x2.relaxed_laneselect */
        RelaxedLaneselectI64x2 = 8,
        /** i32x4.relaxed_dot_i8x16_i7x16_add_s */
        RelaxedDotI8x16I7x16AddToI32x4 = 9
    }
    /** Binaryen RefAs operation constants. */
    export const enum RefAsOp {
        /** ref.as_non_null */
        NonNull = 0,
        /** extern.internalize */
        ExternInternalize = 1,
        /** extern.externalize */
        ExternExternalize = 2
    }
    /** Binaryen BrOn operation constants. */
    export const enum BrOnOp {
        /** br_on_null */
        Null = 0,
        /** br_on_non_null */
        NonNull = 1,
        /** br_on_cast */
        Cast = 2,
        /** br_on_cast_fail */
        CastFail = 3
    }
    /** Binaryen StringNew operation constants. */
    export const enum StringNewOp {
        /** string.new_wtf8 utf8 */
        UTF8 = 0,
        /** string.new_wtf8 wtf8 */
        WTF8 = 1,
        /** string.new_wtf8 replace */
        Replace = 2,
        /** string.new_wtf16 */
        WTF16 = 3,
        /** string.new_wtf8_array utf8 */
        UTF8Array = 4,
        /** string.new_wtf8_array wtf8 */
        WTF8Array = 5,
        /** string.new_wtf8_array replace */
        ReplaceArray = 6,
        /** string.new_wtf16_array */
        WTF16Array = 7,
        /** string.from_code_point */
        FromCodePoint = 8
    }
    /** Binaryen StringMeasure operation constants. */
    export const enum StringMeasureOp {
        /** string.measure_wtf8 utf8 */
        UTF8 = 0,
        /** string.measure_wtf8 wtf8 */
        WTF8 = 1,
        /** string.measure_wtf16 */
        WTF16 = 2,
        /** string.is_usv_sequence */
        IsUSV = 3,
        /** stringview_wtf16.length */
        WTF16View = 4
    }
    /** Binaryen StringEncode operation constants. */
    export const enum StringEncodeOp {
        /** string.encode_wtf8 utf8 */
        UTF8 = 0,
        /** string.encode_wtf8 wtf8 */
        WTF8 = 1,
        /** string.encode_wtf16 */
        WTF16 = 2,
        /** string.encode_wtf8_array utf8 */
        UTF8Array = 3,
        /** string.encode_wtf8_array wtf8 */
        WTF8Array = 4,
        /** string.encode_wtf16_array */
        WTF16Array = 5
    }
    /** Binaryen StringEq operation constants. */
    export const enum StringEqOp {
        /** string.eq */
        Equal = 0,
        /** string.compare */
        Compare = 1
    }
    /** Binaryen StringAs operation constants. */
    export const enum StringAsOp {
        /** string.as_wtf8 */
        WTF8 = 0,
        /** string.as_wtf16 */
        WTF16 = 1,
        /** string.as_iter */
        Iter = 2
    }
    /** Binaryen StringIterMove operation constants. */
    export const enum StringIterMoveOp {
        /** stringview_iter.advance */
        Advance = 0,
        /** stringview_iter.rewind */
        Rewind = 1
    }
    /** Binaryen StringSlice operation constants. */
    export const enum StringSliceWTFOp {
        /** stringview_wtf8.slice */
        WTF8 = 0,
        /** stringview_wtf16.slice */
        WTF16 = 1
    }
    /** Binaryen expression runner flags. */
    export const enum ExpressionRunnerFlags {
        Default = 0,
        PreserveSideeffects = 1,
        TraverseCalls = 2
    }
    export class MemorySegment {
        /** Segment data. */
        buffer: Uint8Array;
        /** Segment offset. */
        offset: i64;
        constructor(
        /** Segment data. */
        buffer: Uint8Array, 
        /** Segment offset. */
        offset: i64);
    }
    export class Module {
        /** Binaryen module reference. */
        ref: ModuleRef;
        /** Whether a shadow stack is used. */
        useShadowStack: boolean;
        /** Architecture-dependent size type. */
        sizeType: TypeRef;
        constructor(
        /** Binaryen module reference. */
        ref: ModuleRef, 
        /** Whether a shadow stack is used. */
        useShadowStack: boolean, 
        /** Architecture-dependent size type. */
        sizeType: TypeRef);
        private lit;
        static create(useShadowStack: boolean, sizeType: TypeRef): Module;
        static createFrom(buffer: Uint8Array, useShadowStack: boolean, sizeType: TypeRef): Module;
        i32(value: number): ExpressionRef;
        i64(valueLow: number, valueHigh?: number): ExpressionRef;
        usize<T>(value: T): ExpressionRef;
        f32(value: number): ExpressionRef;
        f64(value: number): ExpressionRef;
        v128(bytes: Uint8Array): ExpressionRef;
        ref_null(type: TypeRef): ExpressionRef;
        ref_eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
        string_eq(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
        string_compare(left: ExpressionRef, right: ExpressionRef): ExpressionRef;
        unary(op: UnaryOp, value: ExpressionRef): ExpressionRef;
        binary(op: BinaryOp, left: ExpressionRef, right: ExpressionRef): ExpressionRef;
        memory_size(name?: string, is64?: boolean): ExpressionRef;
        memory_grow(delta: ExpressionRef, name?: string, is64?: boolean): ExpressionRef;
        table_size(name: string): ExpressionRef;
        table_grow(name: string, delta: ExpressionRef, value?: ExpressionRef): ExpressionRef;
        local_get(index: number, type: TypeRef): ExpressionRef;
        tostack(value: ExpressionRef): ExpressionRef;
        local_tee(index: number, value: ExpressionRef, isManaged: boolean, type?: TypeRef): ExpressionRef;
        global_get(name: string, type: TypeRef): ExpressionRef;
        table_get(name: string, index: ExpressionRef, type: TypeRef): ExpressionRef;
        load(bytes: Index, signed: boolean, ptr: ExpressionRef, type: TypeRef, offset?: Index, align?: Index, // naturally aligned by default
        name?: string): ExpressionRef;
        store(bytes: Index, ptr: ExpressionRef, value: ExpressionRef, type: TypeRef, offset?: Index, align?: Index, // naturally aligned by default
        name?: string): ExpressionRef;
        atomic_load(bytes: Index, ptr: ExpressionRef, type: TypeRef, offset?: Index, name?: string): ExpressionRef;
        atomic_store(bytes: Index, ptr: ExpressionRef, value: ExpressionRef, type: TypeRef, offset?: Index, name?: string): ExpressionRef;
        atomic_rmw(op: AtomicRMWOp, bytes: Index, offset: Index, ptr: ExpressionRef, value: ExpressionRef, type: TypeRef, name?: string): ExpressionRef;
        atomic_cmpxchg(bytes: Index, offset: Index, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, type: TypeRef, name?: string): ExpressionRef;
        atomic_wait(ptr: ExpressionRef, expected: ExpressionRef, timeout: ExpressionRef, expectedType: TypeRef, name?: string): ExpressionRef;
        atomic_notify(ptr: ExpressionRef, notifyCount: ExpressionRef, name?: string): ExpressionRef;
        atomic_fence(name?: string | null): ExpressionRef;
        local_set(index: Index, value: ExpressionRef, isManaged: boolean): ExpressionRef;
        global_set(name: string, value: ExpressionRef): ExpressionRef;
        table_set(name: string, index: ExpressionRef, value: ExpressionRef): ExpressionRef;
        block(label: string | null, children: ExpressionRef[], type?: TypeRef): ExpressionRef;
        /** Attempts to trivially flatten a series of expressions instead of emitting a block. */
        flatten(stmts: ExpressionRef[], type?: TypeRef): ExpressionRef;
        br(label: string | null, condition?: ExpressionRef, value?: ExpressionRef): ExpressionRef;
        drop(expression: ExpressionRef): ExpressionRef;
        /** Drops an expression if it evaluates to a value. */
        maybeDrop(expression: ExpressionRef): ExpressionRef;
        maybeDropCondition(condition: ExpressionRef, result: ExpressionRef): ExpressionRef;
        loop(label: string | null, body: ExpressionRef): ExpressionRef;
        if(condition: ExpressionRef, ifTrue: ExpressionRef, ifFalse?: ExpressionRef): ExpressionRef;
        nop(): ExpressionRef;
        return(expression?: ExpressionRef): ExpressionRef;
        select(ifTrue: ExpressionRef, ifFalse: ExpressionRef, condition: ExpressionRef, type: TypeRef): ExpressionRef;
        switch(names: string[], defaultName: string | null, condition: ExpressionRef, value?: ExpressionRef): ExpressionRef;
        call(target: string, operands: ExpressionRef[] | null, returnType: TypeRef, isReturn?: boolean): ExpressionRef;
        return_call(target: string, operands: ExpressionRef[] | null, returnType: TypeRef): ExpressionRef;
        call_indirect(tableName: string | null, index: ExpressionRef, operands: ExpressionRef[] | null, params: TypeRef, results: TypeRef, isReturn?: boolean): ExpressionRef;
        return_call_indirect(tableName: string | null, index: ExpressionRef, operands: ExpressionRef[] | null, params: TypeRef, results: TypeRef): ExpressionRef;
        unreachable(): ExpressionRef;
        memory_copy(dest: ExpressionRef, source: ExpressionRef, size: ExpressionRef, destName?: string, sourceName?: string): ExpressionRef;
        memory_fill(dest: ExpressionRef, value: ExpressionRef, size: ExpressionRef, name?: string): ExpressionRef;
        try(name: string | null, body: ExpressionRef, catchTags: string[], catchBodies: ExpressionRef[], delegateTarget?: string | null): ExpressionRef;
        throw(tagName: string, operands: ExpressionRef[]): ExpressionRef;
        rethrow(target: string): ExpressionRef;
        pop(type: TypeRef): ExpressionRef;
        tuple_make(operands: ExpressionRef[]): ExpressionRef;
        tuple_extract(tuple: ExpressionRef, index: Index): ExpressionRef;
        simd_extract(op: SIMDExtractOp, vec: ExpressionRef, idx: number): ExpressionRef;
        simd_replace(op: SIMDReplaceOp, vec: ExpressionRef, idx: number, value: ExpressionRef): ExpressionRef;
        simd_shuffle(vec1: ExpressionRef, vec2: ExpressionRef, mask: Uint8Array): ExpressionRef;
        simd_ternary(op: SIMDTernaryOp, a: ExpressionRef, b: ExpressionRef, c: ExpressionRef): ExpressionRef;
        simd_shift(op: SIMDShiftOp, vec: ExpressionRef, shift: ExpressionRef): ExpressionRef;
        simd_load(op: SIMDLoadOp, ptr: ExpressionRef, offset: number, align: number, name?: string): ExpressionRef;
        simd_loadstorelane(op: SIMDLoadStoreLaneOp, ptr: ExpressionRef, offset: number, align: number, index: number, vec: ExpressionRef, name?: string): ExpressionRef;
        ref_is_null(expr: ExpressionRef): ExpressionRef;
        ref_as(op: RefAsOp, expr: ExpressionRef): ExpressionRef;
        ref_as_nonnull(expr: ExpressionRef): ExpressionRef;
        ref_func(name: string, type: TypeRef): ExpressionRef;
        i31_new(value: ExpressionRef): ExpressionRef;
        i31_get(expr: ExpressionRef, signed: boolean): ExpressionRef;
        addGlobal(name: string, type: TypeRef, mutable: boolean, initializer: ExpressionRef): GlobalRef;
        getGlobal(name: string): GlobalRef;
        removeGlobal(name: string): boolean;
        addTag(name: string, params: TypeRef, results: TypeRef): TagRef;
        getTag(name: string): TagRef;
        removeTag(name: string): void;
        addFunction(name: string, params: TypeRef, results: TypeRef, varTypes: TypeRef[] | null, body: ExpressionRef): FunctionRef;
        setLocalName(funcRef: FunctionRef, index: number, name: string): void;
        getFunction(name: string): FunctionRef;
        removeFunction(name: string): void;
        hasFunction(name: string): boolean;
        private hasTemporaryFunction;
        addTemporaryFunction(result: TypeRef, paramTypes: TypeRef[] | null, body: ExpressionRef): FunctionRef;
        removeTemporaryFunction(): void;
        setStart(func: FunctionRef): void;
        addFunctionExport(internalName: string, externalName: string): ExportRef;
        addTableExport(internalName: string, externalName: string): ExportRef;
        addMemoryExport(internalName: string, externalName: string): ExportRef;
        addGlobalExport(internalName: string, externalName: string): ExportRef;
        addTagExport(internalName: string, externalName: string): ExportRef;
        removeExport(externalName: string): void;
        hasExport(externalName: string): boolean;
        addFunctionImport(internalName: string, externalModuleName: string, externalBaseName: string, params: TypeRef, results: TypeRef): void;
        addTableImport(internalName: string, externalModuleName: string, externalBaseName: string): void;
        addMemoryImport(internalName: string, externalModuleName: string, externalBaseName: string, shared?: boolean): void;
        addGlobalImport(internalName: string, externalModuleName: string, externalBaseName: string, globalType: TypeRef, mutable?: boolean): void;
        addTagImport(internalName: string, externalModuleName: string, externalBaseName: string, params: TypeRef, results: TypeRef): void;
        /** Unlimited memory constant. */
        static readonly UNLIMITED_MEMORY: Index;
        setMemory(initial: Index, maximum: Index, segments: MemorySegment[], target: Target, exportName?: string | null, name?: string, shared?: boolean): void;
        /** Unlimited table constant. */
        static readonly UNLIMITED_TABLE: Index;
        addFunctionTable(name: string, initial: Index, maximum: Index, funcs: string[], offset: ExpressionRef): void;
        addCustomSection(name: string, contents: Uint8Array): void;
        getOptimizeLevel(): number;
        setOptimizeLevel(level: number): void;
        getShrinkLevel(): number;
        setShrinkLevel(level: number): void;
        getDebugInfo(): boolean;
        setDebugInfo(on: boolean): void;
        getLowMemoryUnused(): boolean;
        setLowMemoryUnused(on: boolean): void;
        getZeroFilledMemory(): boolean;
        setZeroFilledMemory(on: boolean): void;
        getFastMath(): boolean;
        setFastMath(on: boolean): void;
        getPassArgument(key: string): string | null;
        setPassArgument(key: string, value: string | null): void;
        clearPassArguments(): void;
        getAlwaysInlineMaxSize(): Index;
        setAlwaysInlineMaxSize(size: Index): void;
        getFlexibleInlineMaxSize(): Index;
        setFlexibleInlineMaxSize(size: Index): void;
        getOneCallerInlineMaxSize(): Index;
        setOneCallerInlineMaxSize(size: Index): void;
        getAllowInliningFunctionsWithLoops(): boolean;
        setAllowInliningFunctionsWithLoops(enabled: boolean): void;
        getFeatures(): FeatureFlags;
        setFeatures(featureFlags: FeatureFlags): void;
        runPasses(passes: string[], func?: FunctionRef): void;
        optimize(optimizeLevel: number, shrinkLevel: number, debugInfo?: boolean, zeroFilledMemory?: boolean): void;
        validate(): boolean;
        interpret(): void;
        toBinary(sourceMapUrl?: string | null): BinaryModule;
        toText(watFormat?: boolean): string;
        private cachedStringsToPointers;
        private cachedPointersToStrings;
        allocStringCached(str: string | null): number;
        readStringCached(ptr: number): string | null;
        dispose(): void;
        createRelooper(): number;
        /** Makes a copy of a trivial expression (doesn't contain subexpressions). Returns `0` if non-trivial. */
        tryCopyTrivialExpression(expr: ExpressionRef): ExpressionRef;
        /** Makes a copy of any expression including all subexpressions. */
        copyExpression(expr: ExpressionRef): ExpressionRef;
        runExpression(expr: ExpressionRef, flags: ExpressionRunnerFlags, maxDepth?: number, maxLoopIterations?: number): ExpressionRef;
        isConstExpression(expr: ExpressionRef): boolean;
        addDebugInfoFile(name: string): Index;
        getDebugInfoFile(index: Index): string | null;
        setDebugLocation(func: FunctionRef, expr: ExpressionRef, fileIndex: Index, lineNumber: Index, columnNumber: Index): void;
    }
    export function createType(types: TypeRef[] | null): TypeRef;
    export function expandType(type: TypeRef): TypeRef[];
    export function isNullableType(type: TypeRef): boolean;
    export function getExpressionId(expr: ExpressionRef): ExpressionId;
    export function getExpressionType(expr: ExpressionRef): TypeRef;
    export function getConstValueI32(expr: ExpressionRef): number;
    export function getConstValueI64Low(expr: ExpressionRef): number;
    export function getConstValueI64High(expr: ExpressionRef): number;
    export function getConstValueF32(expr: ExpressionRef): number;
    export function getConstValueF64(expr: ExpressionRef): number;
    export function getConstValueV128(expr: ExpressionRef): Uint8Array;
    export function isConstZero(expr: ExpressionRef): boolean;
    export function isConstNonZero(expr: ExpressionRef): boolean;
    export function isConstNegZero(expr: ExpressionRef): boolean;
    export function isConstNaN(expr: ExpressionRef): boolean;
    export function isConstExpressionNaN(module: Module, expr: ExpressionRef): boolean;
    export function getLocalGetIndex(expr: ExpressionRef): Index;
    export function getLocalSetIndex(expr: ExpressionRef): Index;
    export function getLocalSetValue(expr: ExpressionRef): ExpressionRef;
    export function isLocalTee(expr: ExpressionRef): boolean;
    export function getGlobalGetName(expr: ExpressionRef): string | null;
    export function getBinaryOp(expr: ExpressionRef): BinaryOp;
    export function getBinaryLeft(expr: ExpressionRef): ExpressionRef;
    export function getBinaryRight(expr: ExpressionRef): ExpressionRef;
    export function getUnaryOp(expr: ExpressionRef): UnaryOp;
    export function getUnaryValue(expr: ExpressionRef): ExpressionRef;
    export function getLoadBytes(expr: ExpressionRef): number;
    export function getLoadOffset(expr: ExpressionRef): number;
    export function getLoadPtr(expr: ExpressionRef): ExpressionRef;
    export function isLoadSigned(expr: ExpressionRef): boolean;
    export function getStoreBytes(expr: ExpressionRef): number;
    export function getStoreOffset(expr: ExpressionRef): number;
    export function getStorePtr(expr: ExpressionRef): ExpressionRef;
    export function getStoreValue(expr: ExpressionRef): ExpressionRef;
    export function getBlockName(expr: ExpressionRef): string | null;
    export function getBlockChildCount(expr: ExpressionRef): Index;
    export function getBlockChildAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function getIfCondition(expr: ExpressionRef): ExpressionRef;
    export function getIfTrue(expr: ExpressionRef): ExpressionRef;
    export function getIfFalse(expr: ExpressionRef): ExpressionRef;
    export function getLoopName(expr: ExpressionRef): string | null;
    export function getLoopBody(expr: ExpressionRef): ExpressionRef;
    export function getBreakName(expr: ExpressionRef): string | null;
    export function getBreakCondition(expr: ExpressionRef): ExpressionRef;
    export function getSelectThen(expr: ExpressionRef): ExpressionRef;
    export function getSelectElse(expr: ExpressionRef): ExpressionRef;
    export function getSelectCondition(expr: ExpressionRef): ExpressionRef;
    export function getDropValue(expr: ExpressionRef): ExpressionRef;
    export function getReturnValue(expr: ExpressionRef): ExpressionRef;
    export function getCallTarget(expr: ExpressionRef): string | null;
    export function getCallOperandCount(expr: ExpressionRef): number;
    export function getCallOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function getMemoryGrowDelta(expr: ExpressionRef): ExpressionRef;
    export function getFunctionBody(func: FunctionRef): ExpressionRef;
    export function getFunctionName(func: FunctionRef): string | null;
    export function getFunctionParams(func: FunctionRef): TypeRef;
    export function getFunctionResults(func: FunctionRef): TypeRef;
    export function getFunctionVars(func: FunctionRef): TypeRef[];
    export function getGlobalName(global: GlobalRef): string | null;
    export function getGlobalType(global: GlobalRef): TypeRef;
    export function isGlobalMutable(global: GlobalRef): boolean;
    export function getGlobalInit(global: GlobalRef): ExpressionRef;
    export function getTagName(tag: TagRef): string | null;
    export function getTagParams(tag: TagRef): TypeRef;
    export function getTagResults(tag: TagRef): TypeRef;
    export class Relooper {
        /** Module this relooper belongs to. */
        module: Module;
        /** Binaryen relooper reference. */
        ref: number;
        constructor(
        /** Module this relooper belongs to. */
        module: Module, 
        /** Binaryen relooper reference. */
        ref: number);
        static create(module: Module): number;
        addBlock(code: ExpressionRef): number;
        addBranch(from: number, to: number, condition?: ExpressionRef, code?: ExpressionRef): void;
        addBlockWithSwitch(code: ExpressionRef, condition: ExpressionRef): number;
        addBranchForSwitch(from: number, to: number, indexes: number[], code?: ExpressionRef): void;
        renderAndDispose(entry: number, labelHelper: Index): ExpressionRef;
    }
    /** Builds a switch using a sequence of `br_if`s. */
    export class SwitchBuilder {
        private module;
        private condition;
        private values;
        private indexes;
        private cases;
        private defaultIndex;
        /** Creates a new builder using the specified i32 condition. */
        constructor(module: Module, condition: ExpressionRef);
        /** Links a case to the specified branch. */
        addCase(value: number, code: ExpressionRef[]): void;
        /** Links the default branch. */
        addDefault(code: ExpressionRef[]): void;
        /** Renders the switch to a block. */
        render(localIndex: number, labelPostfix?: string): ExpressionRef;
    }
    export const enum SideEffects {
        None = 0,
        Branches = 1,
        Calls = 2,
        ReadsLocal = 4,
        WritesLocal = 8,
        ReadsGlobal = 16,
        WritesGlobal = 32,
        ReadsMemory = 64,
        WritesMemory = 128,
        ReadsTable = 256,
        WritesTable = 512,
        ImplicitTrap = 1024,
        IsAtomic = 2048,
        Throws = 4096,
        DanglingPop = 8192,
        TrapsNeverHappen = 16384,
        Any = 32767
    }
    export function getSideEffects(expr: ExpressionRef, module: ModuleRef): SideEffects;
    export function mustPreserveSideEffects(expr: ExpressionRef, module: ModuleRef): boolean;
    export function allocPtrArray(ptrs: number[] | null): number;
    export function readString(ptr: number): string | null;
    /** Result structure of {@link Module#toBinary}. */
    export class BinaryModule {
        /** WebAssembly binary. */
        output: Uint8Array;
        /** Source map, if generated. */
        sourceMap: string | null;
        constructor(
        /** WebAssembly binary. */
        output: Uint8Array, 
        /** Source map, if generated. */
        sourceMap: string | null);
    }
    /** Ensures that the given potentially complex type has a corresponding GC type. */
    export function ensureType(type: Type): TypeRef;
}
declare module "types:assemblyscript/src/ast" {
    /**
     * @fileoverview Abstract syntax tree representing a source file once parsed.
     *
     * Each node in the AST is represented by an instance of a subclass of `Node`,
     * with its `Node#kind` represented by one of the `NodeKind` constants, which
     * dependent code typically switches over. The intended way to create a node
     * is to use the respective `Node.createX` method instead of its constructor.
     *
     * Note that the AST does not contain any type information except type names.
     *
     * @license Apache-2.0
     */
    import { CommonFlags } from "types:assemblyscript/src/common";
    import { Range } from "types:assemblyscript/src/diagnostics";
    import { Token } from "types:assemblyscript/src/tokenizer";
    import { ExpressionRef } from "types:assemblyscript/src/module";
    import { Type } from "types:assemblyscript/src/types";
    /** Indicates the kind of a node. */
    export const enum NodeKind {
        Source = 0,
        NamedType = 1,
        FunctionType = 2,
        TypeName = 3,
        TypeParameter = 4,
        Parameter = 5,
        Identifier = 6,
        Assertion = 7,
        Binary = 8,
        Call = 9,
        Class = 10,
        Comma = 11,
        ElementAccess = 12,
        False = 13,
        Function = 14,
        InstanceOf = 15,
        Literal = 16,
        New = 17,
        Null = 18,
        Omitted = 19,
        Parenthesized = 20,
        PropertyAccess = 21,
        Ternary = 22,
        Super = 23,
        This = 24,
        True = 25,
        Constructor = 26,
        UnaryPostfix = 27,
        UnaryPrefix = 28,
        Compiled = 29,
        Block = 30,
        Break = 31,
        Continue = 32,
        Do = 33,
        Empty = 34,
        Export = 35,
        ExportDefault = 36,
        ExportImport = 37,
        Expression = 38,
        For = 39,
        ForOf = 40,
        If = 41,
        Import = 42,
        Return = 43,
        Switch = 44,
        Throw = 45,
        Try = 46,
        Variable = 47,
        Void = 48,
        While = 49,
        Module = 50,
        ClassDeclaration = 51,
        EnumDeclaration = 52,
        EnumValueDeclaration = 53,
        FieldDeclaration = 54,
        FunctionDeclaration = 55,
        ImportDeclaration = 56,
        InterfaceDeclaration = 57,
        MethodDeclaration = 58,
        NamespaceDeclaration = 59,
        TypeDeclaration = 60,
        VariableDeclaration = 61,
        Decorator = 62,
        ExportMember = 63,
        SwitchCase = 64,
        IndexSignature = 65,
        Comment = 66
    }
    /** Base class of all nodes. */
    export abstract class Node {
        /** Kind of this node. */
        kind: NodeKind;
        /** Source range. */
        range: Range;
        constructor(
        /** Kind of this node. */
        kind: NodeKind, 
        /** Source range. */
        range: Range);
        static createSimpleTypeName(name: string, range: Range): TypeName;
        static createNamedType(name: TypeName, typeArguments: TypeNode[] | null, isNullable: boolean, range: Range): NamedTypeNode;
        static createFunctionType(parameters: ParameterNode[], returnType: TypeNode, explicitThisType: NamedTypeNode | null, isNullable: boolean, range: Range): FunctionTypeNode;
        static createOmittedType(range: Range): NamedTypeNode;
        static createTypeParameter(name: IdentifierExpression, extendsType: NamedTypeNode | null, defaultType: NamedTypeNode | null, range: Range): TypeParameterNode;
        static createParameter(parameterKind: ParameterKind, name: IdentifierExpression, type: TypeNode, initializer: Expression | null, range: Range): ParameterNode;
        static createDecorator(name: Expression, args: Expression[] | null, range: Range): DecoratorNode;
        static createComment(commentKind: CommentKind, text: string, range: Range): CommentNode;
        static createIdentifierExpression(text: string, range: Range, isQuoted?: boolean): IdentifierExpression;
        static createEmptyIdentifierExpression(range: Range): IdentifierExpression;
        static createArrayLiteralExpression(elementExpressions: Expression[], range: Range): ArrayLiteralExpression;
        static createAssertionExpression(assertionKind: AssertionKind, expression: Expression, toType: TypeNode | null, range: Range): AssertionExpression;
        static createBinaryExpression(operator: Token, left: Expression, right: Expression, range: Range): BinaryExpression;
        static createCallExpression(expression: Expression, typeArguments: TypeNode[] | null, args: Expression[], range: Range): CallExpression;
        static createClassExpression(declaration: ClassDeclaration): ClassExpression;
        static createCommaExpression(expressions: Expression[], range: Range): CommaExpression;
        static createConstructorExpression(range: Range): ConstructorExpression;
        static createElementAccessExpression(expression: Expression, elementExpression: Expression, range: Range): ElementAccessExpression;
        static createFalseExpression(range: Range): FalseExpression;
        static createFloatLiteralExpression(value: number, range: Range): FloatLiteralExpression;
        static createFunctionExpression(declaration: FunctionDeclaration): FunctionExpression;
        static createInstanceOfExpression(expression: Expression, isType: TypeNode, range: Range): InstanceOfExpression;
        static createIntegerLiteralExpression(value: i64, range: Range): IntegerLiteralExpression;
        static createNewExpression(typeName: TypeName, typeArguments: TypeNode[] | null, args: Expression[], range: Range): NewExpression;
        static createNullExpression(range: Range): NullExpression;
        static createObjectLiteralExpression(names: IdentifierExpression[], values: Expression[], range: Range): ObjectLiteralExpression;
        static createOmittedExpression(range: Range): OmittedExpression;
        static createParenthesizedExpression(expression: Expression, range: Range): ParenthesizedExpression;
        static createPropertyAccessExpression(expression: Expression, property: IdentifierExpression, range: Range): PropertyAccessExpression;
        static createRegexpLiteralExpression(pattern: string, patternFlags: string, range: Range): RegexpLiteralExpression;
        static createTernaryExpression(condition: Expression, ifThen: Expression, ifElse: Expression, range: Range): TernaryExpression;
        static createStringLiteralExpression(value: string, range: Range): StringLiteralExpression;
        static createSuperExpression(range: Range): SuperExpression;
        static createTemplateLiteralExpression(tag: Expression | null, parts: string[], rawParts: string[], expressions: Expression[], range: Range): TemplateLiteralExpression;
        static createThisExpression(range: Range): ThisExpression;
        static createTrueExpression(range: Range): TrueExpression;
        static createUnaryPostfixExpression(operator: Token, operand: Expression, range: Range): UnaryPostfixExpression;
        static createUnaryPrefixExpression(operator: Token, operand: Expression, range: Range): UnaryPrefixExpression;
        static createCompiledExpression(expr: ExpressionRef, type: Type, range: Range): Expression;
        static createBlockStatement(statements: Statement[], range: Range): BlockStatement;
        static createBreakStatement(label: IdentifierExpression | null, range: Range): BreakStatement;
        static createClassDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, typeParameters: TypeParameterNode[] | null, extendsType: NamedTypeNode | null, implementsTypes: NamedTypeNode[] | null, members: DeclarationStatement[], range: Range): ClassDeclaration;
        static createContinueStatement(label: IdentifierExpression | null, range: Range): ContinueStatement;
        static createDoStatement(body: Statement, condition: Expression, range: Range): DoStatement;
        static createEmptyStatement(range: Range): EmptyStatement;
        static createEnumDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, values: EnumValueDeclaration[], range: Range): EnumDeclaration;
        static createEnumValueDeclaration(name: IdentifierExpression, flags: CommonFlags, initializer: Expression | null, range: Range): EnumValueDeclaration;
        static createExportStatement(members: ExportMember[] | null, path: StringLiteralExpression | null, isDeclare: boolean, range: Range): ExportStatement;
        static createExportDefaultStatement(declaration: DeclarationStatement, range: Range): ExportDefaultStatement;
        static createExportImportStatement(name: IdentifierExpression, externalName: IdentifierExpression, range: Range): ExportImportStatement;
        static createExportMember(localName: IdentifierExpression, exportedName: IdentifierExpression | null, range: Range): ExportMember;
        static createExpressionStatement(expression: Expression): ExpressionStatement;
        static createIfStatement(condition: Expression, ifTrue: Statement, ifFalse: Statement | null, range: Range): IfStatement;
        static createImportStatement(declarations: ImportDeclaration[] | null, path: StringLiteralExpression, range: Range): ImportStatement;
        static createWildcardImportStatement(namespaceName: IdentifierExpression, path: StringLiteralExpression, range: Range): ImportStatement;
        static createImportDeclaration(foreignName: IdentifierExpression, name: IdentifierExpression | null, range: Range): ImportDeclaration;
        static createInterfaceDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, typeParameters: TypeParameterNode[] | null, extendsType: NamedTypeNode | null, implementsTypes: NamedTypeNode[] | null, members: DeclarationStatement[], range: Range): InterfaceDeclaration;
        static createFieldDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, type: TypeNode | null, initializer: Expression | null, range: Range): FieldDeclaration;
        static createForStatement(initializer: Statement | null, condition: Expression | null, incrementor: Expression | null, body: Statement, range: Range): ForStatement;
        static createForOfStatement(variable: Statement, iterable: Expression, body: Statement, range: Range): ForOfStatement;
        static createFunctionDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, typeParameters: TypeParameterNode[] | null, signature: FunctionTypeNode, body: Statement | null, arrowKind: ArrowKind, range: Range): FunctionDeclaration;
        static createIndexSignature(keyType: NamedTypeNode, valueType: TypeNode, flags: CommonFlags, range: Range): IndexSignatureNode;
        static createMethodDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, typeParameters: TypeParameterNode[] | null, signature: FunctionTypeNode, body: Statement | null, range: Range): MethodDeclaration;
        static createNamespaceDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, members: Statement[], range: Range): NamespaceDeclaration;
        static createReturnStatement(value: Expression | null, range: Range): ReturnStatement;
        static createSwitchStatement(condition: Expression, cases: SwitchCase[], range: Range): SwitchStatement;
        static createSwitchCase(label: Expression | null, statements: Statement[], range: Range): SwitchCase;
        static createThrowStatement(value: Expression, range: Range): ThrowStatement;
        static createTryStatement(bodyStatements: Statement[], catchVariable: IdentifierExpression | null, catchStatements: Statement[] | null, finallyStatements: Statement[] | null, range: Range): TryStatement;
        static createTypeDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, typeParameters: TypeParameterNode[] | null, type: TypeNode, range: Range): TypeDeclaration;
        static createModuleDeclaration(name: string, flags: CommonFlags, range: Range): ModuleDeclaration;
        static createVariableStatement(decorators: DecoratorNode[] | null, declarations: VariableDeclaration[], range: Range): VariableStatement;
        static createVariableDeclaration(name: IdentifierExpression, decorators: DecoratorNode[] | null, flags: CommonFlags, type: TypeNode | null, initializer: Expression | null, range: Range): VariableDeclaration;
        static createVoidStatement(expression: Expression, range: Range): VoidStatement;
        static createWhileStatement(condition: Expression, statement: Statement, range: Range): WhileStatement;
        /** Tests if this node is a literal of the specified kind. */
        isLiteralKind(literalKind: LiteralKind): boolean;
        /** Tests if this node is a literal of a numeric kind (float or integer). */
        get isNumericLiteral(): boolean;
        /** Tests whether this node is guaranteed to compile to a constant value. */
        get compilesToConst(): boolean;
        private isAccessOn;
        /** Checks if this node accesses a method or property on `this`. */
        get isAccessOnThis(): boolean;
        /** Checks if this node accesses a method or property on `super`. */
        get isAccessOnSuper(): boolean;
        get isEmpty(): boolean;
    }
    export abstract class TypeNode extends Node {
        /** Whether nullable or not. */
        isNullable: boolean;
        constructor(
        /** Kind of the type node. */
        kind: NodeKind, 
        /** Whether nullable or not. */
        isNullable: boolean, 
        /** Source range. */
        range: Range);
        /** Whether this type node is currently in the process of being resolved. */
        currentlyResolving: boolean;
        /** Tests if this type has a generic component matching one of the given type parameters. */
        hasGenericComponent(typeParameterNodes: TypeParameterNode[]): boolean;
    }
    /** Represents a type name. */
    export class TypeName extends Node {
        /** Identifier of this part. */
        identifier: IdentifierExpression;
        /** Next part of the type name or `null` if this is the last part. */
        next: TypeName | null;
        constructor(
        /** Identifier of this part. */
        identifier: IdentifierExpression, 
        /** Next part of the type name or `null` if this is the last part. */
        next: TypeName | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a named type. */
    export class NamedTypeNode extends TypeNode {
        /** Type name. */
        name: TypeName;
        /** Type argument references. */
        typeArguments: TypeNode[] | null;
        constructor(
        /** Type name. */
        name: TypeName, 
        /** Type argument references. */
        typeArguments: TypeNode[] | null, 
        /** Whether nullable or not. */
        isNullable: boolean, 
        /** Source range. */
        range: Range);
        /** Checks if this type node has type arguments. */
        get hasTypeArguments(): boolean;
        /** Tests if this type is "null". */
        get isNull(): boolean;
    }
    /** Represents a function type. */
    export class FunctionTypeNode extends TypeNode {
        /** Function parameters. */
        parameters: ParameterNode[];
        /** Return type. */
        returnType: TypeNode;
        /** Explicitly provided this type, if any. */
        explicitThisType: NamedTypeNode | null;
        constructor(
        /** Function parameters. */
        parameters: ParameterNode[], 
        /** Return type. */
        returnType: TypeNode, 
        /** Explicitly provided this type, if any. */
        explicitThisType: NamedTypeNode | null, // can't be a function
        /** Whether nullable or not. */
        isNullable: boolean, 
        /** Source range. */
        range: Range);
    }
    /** Represents a type parameter. */
    export class TypeParameterNode extends Node {
        /** Identifier reference. */
        name: IdentifierExpression;
        /** Extended type reference, if any. */
        extendsType: NamedTypeNode | null;
        /** Default type if omitted, if any. */
        defaultType: NamedTypeNode | null;
        constructor(
        /** Identifier reference. */
        name: IdentifierExpression, 
        /** Extended type reference, if any. */
        extendsType: NamedTypeNode | null, // can't be a function
        /** Default type if omitted, if any. */
        defaultType: NamedTypeNode | null, // can't be a function
        /** Source range. */
        range: Range);
    }
    /** Represents the kind of a parameter. */
    export const enum ParameterKind {
        /** No specific flags. */
        Default = 0,
        /** Is an optional parameter. */
        Optional = 1,
        /** Is a rest parameter. */
        Rest = 2
    }
    /** Represents a function parameter. */
    export class ParameterNode extends Node {
        /** Parameter kind. */
        parameterKind: ParameterKind;
        /** Parameter name. */
        name: IdentifierExpression;
        /** Parameter type. */
        type: TypeNode;
        /** Initializer expression, if any. */
        initializer: Expression | null;
        constructor(
        /** Parameter kind. */
        parameterKind: ParameterKind, 
        /** Parameter name. */
        name: IdentifierExpression, 
        /** Parameter type. */
        type: TypeNode, 
        /** Initializer expression, if any. */
        initializer: Expression | null, 
        /** Source range. */
        range: Range);
        /** Implicit field declaration, if applicable. */
        implicitFieldDeclaration: FieldDeclaration | null;
        /** Common flags indicating specific traits. */
        flags: CommonFlags;
        /** Tests if this node has the specified flag or flags. */
        is(flag: CommonFlags): boolean;
        /** Tests if this node has one of the specified flags. */
        isAny(flag: CommonFlags): boolean;
        /** Sets a specific flag or flags. */
        set(flag: CommonFlags): void;
    }
    /** Built-in decorator kinds. */
    export enum DecoratorKind {
        Custom = 0,
        Global = 1,
        Operator = 2,
        OperatorBinary = 3,
        OperatorPrefix = 4,
        OperatorPostfix = 5,
        Unmanaged = 6,
        Final = 7,
        Inline = 8,
        External = 9,
        ExternalJs = 10,
        Builtin = 11,
        Lazy = 12,
        Unsafe = 13
    }
    export namespace DecoratorKind {
        /** Returns the kind of the specified decorator name node. Defaults to {@link DecoratorKind.CUSTOM}. */
        function fromNode(nameNode: Expression): DecoratorKind;
    }
    /** Represents a decorator. */
    export class DecoratorNode extends Node {
        /** Built-in decorator kind, or custom. */
        decoratorKind: DecoratorKind;
        /** Name expression. */
        name: Expression;
        /** Argument expressions. */
        args: Expression[] | null;
        constructor(
        /** Built-in decorator kind, or custom. */
        decoratorKind: DecoratorKind, 
        /** Name expression. */
        name: Expression, 
        /** Argument expressions. */
        args: Expression[] | null, 
        /** Source range. */
        range: Range);
    }
    /** Comment kinds. */
    export const enum CommentKind {
        /** Line comment. */
        Line = 0,
        /** Triple-slash line comment. */
        Triple = 1,
        /** Block comment. */
        Block = 2
    }
    /** Represents a comment. */
    export class CommentNode extends Node {
        /** Comment kind. */
        commentKind: CommentKind;
        /** Comment text. */
        text: string;
        constructor(
        /** Comment kind. */
        commentKind: CommentKind, 
        /** Comment text. */
        text: string, 
        /** Source range. */
        range: Range);
    }
    /** Base class of all expression nodes. */
    export abstract class Expression extends Node {
    }
    /** Represents an identifier expression. */
    export class IdentifierExpression extends Expression {
        /** Textual name. */
        text: string;
        /** Whether quoted or not. */
        isQuoted: boolean;
        constructor(
        /** Textual name. */
        text: string, 
        /** Whether quoted or not. */
        isQuoted: boolean, 
        /** Source range. */
        range: Range);
    }
    /** Indicates the kind of a literal. */
    export const enum LiteralKind {
        Float = 0,
        Integer = 1,
        String = 2,
        Template = 3,
        RegExp = 4,
        Array = 5,
        Object = 6
    }
    /** Base class of all literal expressions. */
    export abstract class LiteralExpression extends Expression {
        /** Specific literal kind. */
        literalKind: LiteralKind;
        constructor(
        /** Specific literal kind. */
        literalKind: LiteralKind, 
        /** Source range. */
        range: Range);
    }
    /** Represents an `[]` literal expression. */
    export class ArrayLiteralExpression extends LiteralExpression {
        /** Nested element expressions. */
        elementExpressions: Expression[];
        constructor(
        /** Nested element expressions. */
        elementExpressions: Expression[], 
        /** Source range. */
        range: Range);
    }
    /** Indicates the kind of an assertion. */
    export const enum AssertionKind {
        /** A prefix assertion, i.e. `<T>expr`. */
        Prefix = 0,
        /** An as assertion, i.e. `expr as T`. */
        As = 1,
        /** A non-null assertion, i.e. `!expr`. */
        NonNull = 2,
        /** A const assertion, i.e. `expr as const`. */
        Const = 3
    }
    /** Represents an assertion expression. */
    export class AssertionExpression extends Expression {
        /** Specific kind of this assertion. */
        assertionKind: AssertionKind;
        /** Expression being asserted. */
        expression: Expression;
        /** Target type, if applicable. */
        toType: TypeNode | null;
        constructor(
        /** Specific kind of this assertion. */
        assertionKind: AssertionKind, 
        /** Expression being asserted. */
        expression: Expression, 
        /** Target type, if applicable. */
        toType: TypeNode | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a binary expression. */
    export class BinaryExpression extends Expression {
        /** Operator token. */
        operator: Token;
        /** Left-hand side expression */
        left: Expression;
        /** Right-hand side expression. */
        right: Expression;
        constructor(
        /** Operator token. */
        operator: Token, 
        /** Left-hand side expression */
        left: Expression, 
        /** Right-hand side expression. */
        right: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a call expression. */
    export class CallExpression extends Expression {
        /** Called expression. Usually an identifier or property access expression. */
        expression: Expression;
        /** Provided type arguments. */
        typeArguments: TypeNode[] | null;
        /** Provided arguments. */
        args: Expression[];
        constructor(
        /** Called expression. Usually an identifier or property access expression. */
        expression: Expression, 
        /** Provided type arguments. */
        typeArguments: TypeNode[] | null, 
        /** Provided arguments. */
        args: Expression[], 
        /** Source range. */
        range: Range);
        /** Gets the type arguments range for reporting. */
        get typeArgumentsRange(): Range;
        /** Gets the arguments range for reporting. */
        get argumentsRange(): Range;
    }
    /** Represents a class expression using the 'class' keyword. */
    export class ClassExpression extends Expression {
        /** Inline class declaration. */
        declaration: ClassDeclaration;
        constructor(
        /** Inline class declaration. */
        declaration: ClassDeclaration);
    }
    /** Represents a comma expression composed of multiple expressions. */
    export class CommaExpression extends Expression {
        /** Sequential expressions. */
        expressions: Expression[];
        constructor(
        /** Sequential expressions. */
        expressions: Expression[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a `constructor` expression. */
    export class ConstructorExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents an element access expression, e.g., array access. */
    export class ElementAccessExpression extends Expression {
        /** Expression being accessed. */
        expression: Expression;
        /** Element of the expression being accessed. */
        elementExpression: Expression;
        constructor(
        /** Expression being accessed. */
        expression: Expression, 
        /** Element of the expression being accessed. */
        elementExpression: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a float literal expression. */
    export class FloatLiteralExpression extends LiteralExpression {
        /** Float value. */
        value: number;
        constructor(
        /** Float value. */
        value: number, 
        /** Source range. */
        range: Range);
    }
    /** Represents a function expression using the 'function' keyword. */
    export class FunctionExpression extends Expression {
        /** Inline function declaration. */
        declaration: FunctionDeclaration;
        constructor(
        /** Inline function declaration. */
        declaration: FunctionDeclaration);
    }
    /** Represents an `instanceof` expression. */
    export class InstanceOfExpression extends Expression {
        /** Expression being asserted. */
        expression: Expression;
        /** Type to test for. */
        isType: TypeNode;
        constructor(
        /** Expression being asserted. */
        expression: Expression, 
        /** Type to test for. */
        isType: TypeNode, 
        /** Source range. */
        range: Range);
    }
    /** Represents an integer literal expression. */
    export class IntegerLiteralExpression extends LiteralExpression {
        /** Integer value. */
        value: i64;
        constructor(
        /** Integer value. */
        value: i64, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `new` expression. Like a call but with its own kind. */
    export class NewExpression extends Expression {
        /** Type being constructed. */
        typeName: TypeName;
        /** Provided type arguments. */
        typeArguments: TypeNode[] | null;
        /** Provided arguments. */
        args: Expression[];
        constructor(
        /** Type being constructed. */
        typeName: TypeName, 
        /** Provided type arguments. */
        typeArguments: TypeNode[] | null, 
        /** Provided arguments. */
        args: Expression[], 
        /** Source range. */
        range: Range);
        /** Gets the type arguments range for reporting. */
        get typeArgumentsRange(): Range;
        /** Gets the arguments range for reporting. */
        get argumentsRange(): Range;
    }
    /** Represents a `null` expression. */
    export class NullExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents an object literal expression. */
    export class ObjectLiteralExpression extends LiteralExpression {
        /** Field names. */
        names: IdentifierExpression[];
        /** Field values. */
        values: Expression[];
        constructor(
        /** Field names. */
        names: IdentifierExpression[], 
        /** Field values. */
        values: Expression[], 
        /** Source range. */
        range: Range);
    }
    /** Represents an omitted expression, e.g. within an array literal. */
    export class OmittedExpression extends Expression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents a parenthesized expression. */
    export class ParenthesizedExpression extends Expression {
        /** Expression in parenthesis. */
        expression: Expression;
        constructor(
        /** Expression in parenthesis. */
        expression: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a property access expression. */
    export class PropertyAccessExpression extends Expression {
        /** Expression being accessed. */
        expression: Expression;
        /** Property of the expression being accessed. */
        property: IdentifierExpression;
        constructor(
        /** Expression being accessed. */
        expression: Expression, 
        /** Property of the expression being accessed. */
        property: IdentifierExpression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a regular expression literal expression. */
    export class RegexpLiteralExpression extends LiteralExpression {
        /** Regular expression pattern. */
        pattern: string;
        /** Regular expression flags. */
        patternFlags: string;
        constructor(
        /** Regular expression pattern. */
        pattern: string, 
        /** Regular expression flags. */
        patternFlags: string, 
        /** Source range. */
        range: Range);
    }
    /** Represents a ternary expression, i.e., short if notation. */
    export class TernaryExpression extends Expression {
        /** Condition expression. */
        condition: Expression;
        /** Expression executed when condition is `true`. */
        ifThen: Expression;
        /** Expression executed when condition is `false`. */
        ifElse: Expression;
        constructor(
        /** Condition expression. */
        condition: Expression, 
        /** Expression executed when condition is `true`. */
        ifThen: Expression, 
        /** Expression executed when condition is `false`. */
        ifElse: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a string literal expression. */
    export class StringLiteralExpression extends LiteralExpression {
        /** String value without quotes. */
        value: string;
        constructor(
        /** String value without quotes. */
        value: string, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `super` expression. */
    export class SuperExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents a template literal expression. */
    export class TemplateLiteralExpression extends LiteralExpression {
        /** Tag expression, if any. */
        tag: Expression | null;
        /** String parts. */
        parts: string[];
        /** Raw string parts. */
        rawParts: string[];
        /** Expression parts. */
        expressions: Expression[];
        constructor(
        /** Tag expression, if any. */
        tag: Expression | null, 
        /** String parts. */
        parts: string[], 
        /** Raw string parts. */
        rawParts: string[], 
        /** Expression parts. */
        expressions: Expression[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a `this` expression. */
    export class ThisExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents a `true` expression. */
    export class TrueExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents a `false` expression. */
    export class FalseExpression extends IdentifierExpression {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Base class of all unary expressions. */
    export abstract class UnaryExpression extends Expression {
        /** Operator token. */
        operator: Token;
        /** Operand expression. */
        operand: Expression;
        constructor(
        /** Unary expression kind. */
        kind: NodeKind, 
        /** Operator token. */
        operator: Token, 
        /** Operand expression. */
        operand: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a unary postfix expression, e.g. a postfix increment. */
    export class UnaryPostfixExpression extends UnaryExpression {
        constructor(
        /** Operator token. */
        operator: Token, 
        /** Operand expression. */
        operand: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a unary prefix expression, e.g. a negation. */
    export class UnaryPrefixExpression extends UnaryExpression {
        constructor(
        /** Operator token. */
        operator: Token, 
        /** Operand expression. */
        operand: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a special pre-compiled expression. If the expression has side-effects, special care has to be taken. */
    export class CompiledExpression extends Expression {
        /** Compiled expression. */
        expr: ExpressionRef;
        /** Type of the compiled expression. */
        type: Type;
        constructor(
        /** Compiled expression. */
        expr: ExpressionRef, 
        /** Type of the compiled expression. */
        type: Type, 
        /** Source range. */
        range: Range);
    }
    /** Base class of all statement nodes. */
    export abstract class Statement extends Node {
    }
    /** Indicates the specific kind of a source. */
    export const enum SourceKind {
        /** User-provided file. */
        User = 0,
        /** User-provided entry file. */
        UserEntry = 1,
        /** Library-provided file. */
        Library = 2,
        /** Library-provided entry file. */
        LibraryEntry = 3
    }
    /** A top-level source node. */
    export class Source extends Node {
        /** Source kind. */
        sourceKind: SourceKind;
        /** Normalized path with file extension. */
        normalizedPath: string;
        /** Full source text. */
        text: string;
        /** Gets the special native source. */
        static get native(): Source;
        private static _native;
        constructor(
        /** Source kind. */
        sourceKind: SourceKind, 
        /** Normalized path with file extension. */
        normalizedPath: string, 
        /** Full source text. */
        text: string);
        /** Path used internally. */
        internalPath: string;
        /** Simple path (last part without extension). */
        simplePath: string;
        /** Contained statements. */
        statements: Statement[];
        /** Source map index. */
        debugInfoIndex: number;
        /** Re-exported sources. */
        exportPaths: string[] | null;
        /** Checks if this source represents native code. */
        get isNative(): boolean;
        /** Checks if this source is part of the (standard) library. */
        get isLibrary(): boolean;
        /** Cached line starts. */
        private lineCache;
        /** Remembered column number. */
        private lineColumn;
        /** Determines the line number at the specified position. Starts at `1`. */
        lineAt(pos: number): number;
        /** Gets the column number at the last position queried with `lineAt`. Starts at `1`. */
        columnAt(): number;
    }
    /** Base class of all declaration statements. */
    export abstract class DeclarationStatement extends Statement {
        /** Simple name being declared. */
        name: IdentifierExpression;
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null;
        /** Common flags indicating specific traits. */
        flags: CommonFlags;
        constructor(
        /** Declaration node kind. */
        kind: NodeKind, 
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Source range. */
        range: Range);
        /** Overridden module name from preceeding `module` statement. */
        overriddenModuleName: string | null;
        /** Tests if this node has the specified flag or flags. */
        is(flag: CommonFlags): boolean;
        /** Tests if this node has one of the specified flags. */
        isAny(flag: CommonFlags): boolean;
        /** Sets a specific flag or flags. */
        set(flag: CommonFlags): void;
    }
    /** Represents an index signature. */
    export class IndexSignatureNode extends Node {
        /** Key type. */
        keyType: NamedTypeNode;
        /** Value type. */
        valueType: TypeNode;
        /** Common flags indicating specific traits. */
        flags: CommonFlags;
        constructor(
        /** Key type. */
        keyType: NamedTypeNode, 
        /** Value type. */
        valueType: TypeNode, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Source range. */
        range: Range);
    }
    /** Base class of all variable-like declaration statements. */
    export abstract class VariableLikeDeclarationStatement extends DeclarationStatement {
        /** Annotated type node, if any. */
        type: TypeNode | null;
        /** Initializer expression, if any. */
        initializer: Expression | null;
        constructor(
        /** Variable-like declaration node kind. */
        kind: NodeKind, 
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Annotated type node, if any. */
        type: TypeNode | null, 
        /** Initializer expression, if any. */
        initializer: Expression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a block statement. */
    export class BlockStatement extends Statement {
        /** Contained statements. */
        statements: Statement[];
        constructor(
        /** Contained statements. */
        statements: Statement[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a `break` statement. */
    export class BreakStatement extends Statement {
        /** Target label, if any. */
        label: IdentifierExpression | null;
        constructor(
        /** Target label, if any. */
        label: IdentifierExpression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `class` declaration. */
    export class ClassDeclaration extends DeclarationStatement {
        /** Accepted type parameters. */
        typeParameters: TypeParameterNode[] | null;
        /** Base class type being extended, if any. */
        extendsType: NamedTypeNode | null;
        /** Interface types being implemented, if any. */
        implementsTypes: NamedTypeNode[] | null;
        /** Class member declarations. */
        members: DeclarationStatement[];
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Accepted type parameters. */
        typeParameters: TypeParameterNode[] | null, 
        /** Base class type being extended, if any. */
        extendsType: NamedTypeNode | null, // can't be a function
        /** Interface types being implemented, if any. */
        implementsTypes: NamedTypeNode[] | null, // can't be functions
        /** Class member declarations. */
        members: DeclarationStatement[], 
        /** Source range. */
        range: Range);
        /** Index signature, if present. */
        indexSignature: IndexSignatureNode | null;
        get isGeneric(): boolean;
    }
    /** Represents a `continue` statement. */
    export class ContinueStatement extends Statement {
        /** Target label, if applicable. */
        label: IdentifierExpression | null;
        constructor(
        /** Target label, if applicable. */
        label: IdentifierExpression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `do` statement. */
    export class DoStatement extends Statement {
        /** Body statement being looped over. */
        body: Statement;
        /** Condition when to repeat. */
        condition: Expression;
        constructor(
        /** Body statement being looped over. */
        body: Statement, 
        /** Condition when to repeat. */
        condition: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents an empty statement, i.e., a semicolon terminating nothing. */
    export class EmptyStatement extends Statement {
        constructor(
        /** Source range. */
        range: Range);
    }
    /** Represents an `enum` declaration. */
    export class EnumDeclaration extends DeclarationStatement {
        /** Enum value declarations. */
        values: EnumValueDeclaration[];
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Enum value declarations. */
        values: EnumValueDeclaration[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a value of an `enum` declaration. */
    export class EnumValueDeclaration extends VariableLikeDeclarationStatement {
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Initializer expression, if any. */
        initializer: Expression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents an `export import` statement of an interface. */
    export class ExportImportStatement extends Statement {
        /** Identifier being imported. */
        name: IdentifierExpression;
        /** Identifier being exported. */
        externalName: IdentifierExpression;
        constructor(
        /** Identifier being imported. */
        name: IdentifierExpression, 
        /** Identifier being exported. */
        externalName: IdentifierExpression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a member of an `export` statement. */
    export class ExportMember extends Node {
        /** Local identifier. */
        localName: IdentifierExpression;
        /** Exported identifier. */
        exportedName: IdentifierExpression;
        constructor(
        /** Local identifier. */
        localName: IdentifierExpression, 
        /** Exported identifier. */
        exportedName: IdentifierExpression, 
        /** Source range. */
        range: Range);
    }
    /** Represents an `export` statement. */
    export class ExportStatement extends Statement {
        /** Array of members if a set of named exports, or `null` if a file export. */
        members: ExportMember[] | null;
        /** Path being exported from, if applicable. */
        path: StringLiteralExpression | null;
        /** Whether this is a declared export. */
        isDeclare: boolean;
        constructor(
        /** Array of members if a set of named exports, or `null` if a file export. */
        members: ExportMember[] | null, 
        /** Path being exported from, if applicable. */
        path: StringLiteralExpression | null, 
        /** Whether this is a declared export. */
        isDeclare: boolean, 
        /** Source range. */
        range: Range);
        /** Internal path being referenced, if `path` is set. */
        internalPath: string | null;
    }
    /** Represents an `export default` statement. */
    export class ExportDefaultStatement extends Statement {
        /** Declaration being exported as default. */
        declaration: DeclarationStatement;
        constructor(
        /** Declaration being exported as default. */
        declaration: DeclarationStatement, 
        /** Source range. */
        range: Range);
    }
    /** Represents an expression that is used as a statement. */
    export class ExpressionStatement extends Statement {
        /** Expression being used as a statement.*/
        expression: Expression;
        constructor(
        /** Expression being used as a statement.*/
        expression: Expression);
    }
    /** Represents a field declaration within a `class`. */
    export class FieldDeclaration extends VariableLikeDeclarationStatement {
        /** Parameter index if declared as a constructor parameter, otherwise `-1`. */
        parameterIndex: number;
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Annotated type node, if any. */
        type: TypeNode | null, 
        /** Initializer expression, if any. */
        initializer: Expression | null, 
        /** Parameter index if declared as a constructor parameter, otherwise `-1`. */
        parameterIndex: number, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `for` statement. */
    export class ForStatement extends Statement {
        /** Initializer statement, if present. Either a `VariableStatement` or `ExpressionStatement`. */
        initializer: Statement | null;
        /** Condition expression, if present. */
        condition: Expression | null;
        /** Incrementor expression, if present. */
        incrementor: Expression | null;
        /** Body statement being looped over. */
        body: Statement;
        constructor(
        /** Initializer statement, if present. Either a `VariableStatement` or `ExpressionStatement`. */
        initializer: Statement | null, 
        /** Condition expression, if present. */
        condition: Expression | null, 
        /** Incrementor expression, if present. */
        incrementor: Expression | null, 
        /** Body statement being looped over. */
        body: Statement, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `for..of` statement. */
    export class ForOfStatement extends Statement {
        /** Variable statement. Either a `VariableStatement` or `ExpressionStatement` of `IdentifierExpression`. */
        variable: Statement;
        /** Iterable expression being iterated. */
        iterable: Expression;
        /** Body statement being looped over. */
        body: Statement;
        constructor(
        /** Variable statement. Either a `VariableStatement` or `ExpressionStatement` of `IdentifierExpression`. */
        variable: Statement, 
        /** Iterable expression being iterated. */
        iterable: Expression, 
        /** Body statement being looped over. */
        body: Statement, 
        /** Source range. */
        range: Range);
    }
    /** Indicates the kind of an array function. */
    export const enum ArrowKind {
        /** Not an arrow function. */
        None = 0,
        /** Parenthesized parameter list. */
        Parenthesized = 1,
        /** Single parameter without parenthesis. */
        Single = 2
    }
    /** Represents a `function` declaration. */
    export class FunctionDeclaration extends DeclarationStatement {
        /** Type parameters, if any. */
        typeParameters: TypeParameterNode[] | null;
        /** Function signature. */
        signature: FunctionTypeNode;
        /** Body statement. Usually a block. */
        body: Statement | null;
        /** Arrow function kind, if applicable. */
        arrowKind: ArrowKind;
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Type parameters, if any. */
        typeParameters: TypeParameterNode[] | null, 
        /** Function signature. */
        signature: FunctionTypeNode, 
        /** Body statement. Usually a block. */
        body: Statement | null, 
        /** Arrow function kind, if applicable. */
        arrowKind: ArrowKind, 
        /** Source range. */
        range: Range);
        /** Gets if this function is generic. */
        get isGeneric(): boolean;
        /** Clones this function declaration. */
        clone(): FunctionDeclaration;
    }
    /** Represents an `if` statement. */
    export class IfStatement extends Statement {
        /** Condition. */
        condition: Expression;
        /** Statement executed when condition is `true`. */
        ifTrue: Statement;
        /** Statement executed when condition is `false`. */
        ifFalse: Statement | null;
        constructor(
        /** Condition. */
        condition: Expression, 
        /** Statement executed when condition is `true`. */
        ifTrue: Statement, 
        /** Statement executed when condition is `false`. */
        ifFalse: Statement | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents an `import` declaration part of an {@link ImportStatement}. */
    export class ImportDeclaration extends DeclarationStatement {
        /** Identifier being imported. */
        foreignName: IdentifierExpression;
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Identifier being imported. */
        foreignName: IdentifierExpression, 
        /** Source range. */
        range: Range);
    }
    /** Represents an `import` statement. */
    export class ImportStatement extends Statement {
        /** Array of member declarations or `null` if an asterisk import. */
        declarations: ImportDeclaration[] | null;
        /** Name of the local namespace, if an asterisk import. */
        namespaceName: IdentifierExpression | null;
        /** Path being imported from. */
        path: StringLiteralExpression;
        constructor(
        /** Array of member declarations or `null` if an asterisk import. */
        declarations: ImportDeclaration[] | null, 
        /** Name of the local namespace, if an asterisk import. */
        namespaceName: IdentifierExpression | null, 
        /** Path being imported from. */
        path: StringLiteralExpression, 
        /** Source range. */
        range: Range);
        /** Internal path being referenced. */
        internalPath: string;
    }
    /** Represents an `interfarce` declaration. */
    export class InterfaceDeclaration extends ClassDeclaration {
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Accepted type parameters. */
        typeParameters: TypeParameterNode[] | null, 
        /** Base class type being extended, if any. */
        extendsType: NamedTypeNode | null, // can't be a function
        /** Interface types being implemented, if any. */
        implementsTypes: NamedTypeNode[] | null, // can't be functions
        /** Class member declarations. */
        members: DeclarationStatement[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a method declaration within a `class`. */
    export class MethodDeclaration extends FunctionDeclaration {
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Type parameters, if any. */
        typeParameters: TypeParameterNode[] | null, 
        /** Function signature. */
        signature: FunctionTypeNode, 
        /** Body statement. Usually a block. */
        body: Statement | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `namespace` declaration. */
    export class NamespaceDeclaration extends DeclarationStatement {
        /** Array of namespace members. */
        members: Statement[];
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Array of namespace members. */
        members: Statement[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a `return` statement. */
    export class ReturnStatement extends Statement {
        /** Value expression being returned, if present. */
        value: Expression | null;
        constructor(
        /** Value expression being returned, if present. */
        value: Expression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a single `case` within a `switch` statement. */
    export class SwitchCase extends Node {
        /** Label expression. `null` indicates the default case. */
        label: Expression | null;
        /** Contained statements. */
        statements: Statement[];
        constructor(
        /** Label expression. `null` indicates the default case. */
        label: Expression | null, 
        /** Contained statements. */
        statements: Statement[], 
        /** Source range. */
        range: Range);
        get isDefault(): boolean;
    }
    /** Represents a `switch` statement. */
    export class SwitchStatement extends Statement {
        /** Condition expression. */
        condition: Expression;
        /** Contained cases. */
        cases: SwitchCase[];
        constructor(
        /** Condition expression. */
        condition: Expression, 
        /** Contained cases. */
        cases: SwitchCase[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a `throw` statement. */
    export class ThrowStatement extends Statement {
        /** Value expression being thrown. */
        value: Expression;
        constructor(
        /** Value expression being thrown. */
        value: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `try` statement. */
    export class TryStatement extends Statement {
        /** Contained statements. */
        bodyStatements: Statement[];
        /** Exception variable name, if a `catch` clause is present. */
        catchVariable: IdentifierExpression | null;
        /** Statements being executed on catch, if a `catch` clause is present. */
        catchStatements: Statement[] | null;
        /** Statements being executed afterwards, if a `finally` clause is present. */
        finallyStatements: Statement[] | null;
        constructor(
        /** Contained statements. */
        bodyStatements: Statement[], 
        /** Exception variable name, if a `catch` clause is present. */
        catchVariable: IdentifierExpression | null, 
        /** Statements being executed on catch, if a `catch` clause is present. */
        catchStatements: Statement[] | null, 
        /** Statements being executed afterwards, if a `finally` clause is present. */
        finallyStatements: Statement[] | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `module` statement. */
    export class ModuleDeclaration extends Statement {
        /** Module name. */
        moduleName: string;
        /** Common flags indicating specific traits. */
        flags: CommonFlags;
        constructor(
        /** Module name. */
        moduleName: string, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `type` declaration. */
    export class TypeDeclaration extends DeclarationStatement {
        /** Type parameters, if any. */
        typeParameters: TypeParameterNode[] | null;
        /** Type being aliased. */
        type: TypeNode;
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Type parameters, if any. */
        typeParameters: TypeParameterNode[] | null, 
        /** Type being aliased. */
        type: TypeNode, 
        /** Source range. */
        range: Range);
    }
    /** Represents a variable declaration part of a {@link VariableStatement}. */
    export class VariableDeclaration extends VariableLikeDeclarationStatement {
        constructor(
        /** Simple name being declared. */
        name: IdentifierExpression, 
        /** Array of decorators, if any. */
        decorators: DecoratorNode[] | null, 
        /** Common flags indicating specific traits. */
        flags: CommonFlags, 
        /** Annotated type node, if any. */
        type: TypeNode | null, 
        /** Initializer expression, if any. */
        initializer: Expression | null, 
        /** Source range. */
        range: Range);
    }
    /** Represents a variable statement wrapping {@link VariableDeclaration}s. */
    export class VariableStatement extends Statement {
        /** Array of decorators. */
        decorators: DecoratorNode[] | null;
        /** Array of member declarations. */
        declarations: VariableDeclaration[];
        constructor(
        /** Array of decorators. */
        decorators: DecoratorNode[] | null, 
        /** Array of member declarations. */
        declarations: VariableDeclaration[], 
        /** Source range. */
        range: Range);
    }
    /** Represents a void statement dropping an expression's value. */
    export class VoidStatement extends Statement {
        /** Expression being dropped. */
        expression: Expression;
        constructor(
        /** Expression being dropped. */
        expression: Expression, 
        /** Source range. */
        range: Range);
    }
    /** Represents a `while` statement. */
    export class WhileStatement extends Statement {
        /** Condition expression. */
        condition: Expression;
        /** Body statement being looped over. */
        body: Statement;
        constructor(
        /** Condition expression. */
        condition: Expression, 
        /** Body statement being looped over. */
        body: Statement, 
        /** Source range. */
        range: Range);
    }
    /** Finds the first decorator matching the specified kind. */
    export function findDecorator(kind: DecoratorKind, decorators: DecoratorNode[] | null): DecoratorNode | null;
    /** Mangles an external to an internal path. */
    export function mangleInternalPath(path: string): string;
    /** Tests if the specified type node represents an omitted type. */
    export function isTypeOmitted(type: TypeNode): boolean;
}
declare module "types:assemblyscript/src/bindings/tsd" {
    import { Global, Program, Function, Class, Interface, Enum, Element } from "types:assemblyscript/src/program";
    import { Type } from "types:assemblyscript/src/types";
    import { ExportsWalker } from "types:assemblyscript/src/bindings/util";
    /** A TypeScript definitions builder. */
    export class TSDBuilder extends ExportsWalker {
        /** Builds TypeScript definitions for the specified program. */
        static build(program: Program, esm?: boolean): string;
        private esm;
        private sb;
        private indentLevel;
        private seenObjectTypes;
        private deferredTypings;
        /** Constructs a new TypeScript definitions builder. */
        constructor(program: Program, esm: boolean, includePrivate?: boolean);
        visitGlobal(name: string, element: Global): void;
        visitEnum(name: string, element: Enum): void;
        visitFunction(name: string, element: Function): void;
        visitClass(name: string, element: Class): void;
        visitInterface(name: string, element: Interface): void;
        visitNamespace(name: string, element: Element): void;
        visitAlias(name: string, element: Element, originalName: string): void;
        build(): string;
        isPlainObject(clazz: Class): boolean;
        toTypeScriptType(type: Type, mode: Mode): string;
        makeRecordType(clazz: Class, mode: Mode): string;
        fieldAcceptsUndefined(type: Type): boolean;
        makeInternrefType(clazz: Class): string;
    }
    enum Mode {
        IMPORT = 0,
        EXPORT = 1
    }
    export {};
}
declare module "types:assemblyscript/src/bindings" {
    /**
     * @fileoverview Builders for various definitions describing a module.
     *
     * - JSBuilder: Creates a JavaScript glue code file (.js)
     * - TSDBuilder: Creates a TypeScript definition file (.d.ts)
     *
     * @license Apache-2.0
     */
    export { JSBuilder } from "types:assemblyscript/src/bindings/js";
    export { TSDBuilder } from "types:assemblyscript/src/bindings/tsd";
}
declare module "types:assemblyscript/src/index-wasm" {
    /**
     * @fileoverview The C-like and re-exported public compiler interface.
     *
     * The intended way to consume the compiler sources is to import this
     * file, which again exports all relevant functions, classes and constants
     * as a flat namespace.
     *
     * Note though that the compiler sources are written in "portable
     * AssemblyScript" that can be compiled to both JavaScript with tsc and
     * to WebAssembly with asc, and as such require additional glue code
     * depending on the target.
     *
     * When compiling to JavaScript `glue/js/index.js` must be included.
     * When compiling to WebAssembly `glue/wasm/index.ts` must be included.
     */
    import { Target, Runtime, Feature } from "types:assemblyscript/src/common";
    import { Options, UncheckedBehavior } from "types:assemblyscript/src/compiler";
    import { Range, DiagnosticMessage, DiagnosticCategory, formatDiagnosticMessage } from "types:assemblyscript/src/diagnostics";
    import { Module } from "types:assemblyscript/src/module";
    import { Program } from "types:assemblyscript/src/program";
    import { Source } from "types:assemblyscript/src/ast";
    /** Creates a new set of compiler options. */
    export function newOptions(): Options;
    /** Sets the `target` option. */
    export function setTarget(options: Options, target: Target): void;
    export function setRuntime(options: Options, runtime: Runtime): void;
    /** Sets the `noAssert` option. */
    export function setNoAssert(options: Options, noAssert: boolean): void;
    /** Sets the `exportMemory` option. */
    export function setExportMemory(options: Options, exportMemory: boolean): void;
    /** Sets the `importMemory` option. */
    export function setImportMemory(options: Options, importMemory: boolean): void;
    /** Sets the `initialMemory` option. */
    export function setInitialMemory(options: Options, initialMemory: number): void;
    /** Sets the `maximumMemory` option. */
    export function setMaximumMemory(options: Options, maximumMemory: number): void;
    /** Sets the `sharedMemory` option. */
    export function setSharedMemory(options: Options, sharedMemory: boolean): void;
    /** Sets the `importTable` option. */
    export function setImportTable(options: Options, importTable: boolean): void;
    /** Sets the `exportTable` option. */
    export function setExportTable(options: Options, exportTable: boolean): void;
    /** Sets the `sourceMap` option. */
    export function setSourceMap(options: Options, sourceMap: boolean): void;
    /** Sets the `uncheckedBehavior` option. */
    export function setUncheckedBehavior(options: Options, uncheckedBehavior: UncheckedBehavior): void;
    /** Sets the `memoryBase` option. */
    export function setMemoryBase(options: Options, memoryBase: number): void;
    /** Sets the `tableBase` option. */
    export function setTableBase(options: Options, tableBase: number): void;
    /** Adds a 'globalAliases' value. */
    export function addGlobalAlias(options: Options, alias: string, name: string): void;
    /** Removes a 'globalAliases' value. */
    export function removeGlobalAlias(options: Options, alias: string): void;
    /** Sets the `exportStart` option. */
    export function setExportStart(options: Options, exportStart: string | null): void;
    /** Sets the `noUnsafe` option. */
    export function setNoUnsafe(options: Options, noUnsafe: boolean): void;
    /** Sets the `lowMemoryLimit` option. */
    export function setLowMemoryLimit(options: Options, lowMemoryLimit: number): void;
    /** Sets the `exportRuntime` option. */
    export function setExportRuntime(options: Options, exportRuntime: boolean): void;
    /** Default stack size. */
    export const DEFAULT_STACK_SIZE = 32768;
    /** Sets the `stackSize` option. */
    export function setStackSize(options: Options, stackSize: number): void;
    /** Sets the bundle semantic version. */
    export function setBundleVersion(options: Options, bundleMajorVersion: number, bundleMinorVersion: number, bundlePatchVersion: number): void;
    /** Sign extension operations. */
    export const FEATURE_SIGN_EXTENSION: Feature;
    /** Mutable global imports and exports. */
    export const FEATURE_MUTABLE_GLOBALS: Feature;
    /** Non-trapping float to int conversion operations. */
    export const FEATURE_NONTRAPPING_F2I: Feature;
    /** Bulk memory operations. */
    export const FEATURE_BULK_MEMORY: Feature;
    /** SIMD types and operations. */
    export const FEATURE_SIMD: Feature;
    /** Threading and atomic operations. */
    export const FEATURE_THREADS: Feature;
    /** Exception handling operations. */
    export const FEATURE_EXCEPTION_HANDLING: Feature;
    /** Tail call operations. */
    export const FEATURE_TAIL_CALLS: Feature;
    /** Reference types. */
    export const FEATURE_REFERENCE_TYPES: Feature;
    /** Multi value types. */
    export const FEATURE_MULTI_VALUE: Feature;
    /** Garbage collection. */
    export const FEATURE_GC: Feature;
    /** Memory64. */
    export const FEATURE_MEMORY64: Feature;
    /** Relaxed SIMD. */
    export const FEATURE_RELAXED_SIMD: Feature;
    /** Extended const expressions. */
    export const FEATURE_EXTENDED_CONST: Feature;
    /** String references. */
    export const FEATURE_STRINGREF: Feature;
    /** All features. */
    export const FEATURES_ALL: Feature;
    /** Default features. */
    export const FEATURES_DEFAULT: number;
    /** Sets whether a specific feature is enabled. */
    export function setFeature(options: Options, feature: Feature, on: boolean): void;
    /** Gives the compiler a hint at the optimize levels that will be used later on. */
    export function setOptimizeLevelHints(options: Options, optimizeLevel: number, shrinkLevel: number): void;
    /** Gives the compiler a hint of the emitted module's basename. */
    export function setBasenameHint(options: Options, basename: string): void;
    /** Gives the compiler a hint that bindings will be generated. */
    export function setBindingsHint(options: Options, bindings: boolean): void;
    /** Sets the `pedantic` option. */
    export function setPedantic(options: Options, pedantic: boolean): void;
    export function setDebugInfo(options: Options, debug: boolean): void;
    /** Creates a new Program. */
    export function newProgram(options: Options): Program;
    /** Obtains the next diagnostic message. Returns `null` once complete. */
    export function nextDiagnostic(program: Program): DiagnosticMessage | null;
    /** Obtains the source of the given file. */
    export function getSource(program: Program, internalPath: string): string | null;
    /** Formats a diagnostic message to a string. */
    export { formatDiagnosticMessage as formatDiagnostic };
    /** Gets the code of a diagnostic message. */
    export function getDiagnosticCode(diagnostic: DiagnosticMessage): number;
    /** Gets the category of a diagnostic message. */
    export function getDiagnosticCategory(diagnostic: DiagnosticMessage): DiagnosticCategory;
    /** Gets the textual message of a diagnostic message. */
    export function getDiagnosticMessage(diagnostic: DiagnosticMessage): string;
    /** Gets the primary range, if any, of a diagnostic message. */
    export function getDiagnosticRange(diagnostic: DiagnosticMessage): Range | null;
    /** Gets the related range, if any, of a diagnostic message. */
    export function getDiagnosticRelatedRange(diagnostic: DiagnosticMessage): Range | null;
    /** Gets a range's start offset. */
    export function getRangeStart(range: Range): number;
    /** Gets a range's end offsset. */
    export function getRangeEnd(range: Range): number;
    /** Gets a range's relevant source. */
    export function getRangeSource(range: Range): Source;
    /** Gets a source's normalized path. */
    export function getSourceNormalizedPath(source: Source): string;
    /** Tests whether a diagnostic is informatory. */
    export function isInfo(message: DiagnosticMessage): boolean;
    /** Tests whether a diagnostic is a warning. */
    export function isWarning(message: DiagnosticMessage): boolean;
    /** Tests whether a diagnostic is an error. */
    export function isError(message: DiagnosticMessage): boolean;
    /** Parses a source file. If `parser` has been omitted a new one is created. */
    export function parse(
    /** Program reference. */
    program: Program, 
    /** Source text of the file, or `null` to indicate not found. */
    text: string | null, 
    /** Normalized path of the file. */
    path: string, 
    /** Whether this is an entry file. */
    isEntry?: boolean): void;
    /** Obtains the next required file's path. Returns `null` once complete. */
    export function nextFile(program: Program): string | null;
    /** Obtains the path of the dependee of a given imported file. */
    export function getDependee(program: Program, file: string): string | null;
    /** Initializes the program pre-emptively for transform hooks. */
    export function initializeProgram(program: Program): void;
    /** Compiles the parsed sources to a module. */
    export function compile(program: Program): Module;
    /** Builds TypeScript definitions for the specified program. */
    export function buildTSD(program: Program, esm: boolean): string;
    /** Builds JavaScript glue code for the specified program. */
    export function buildJS(program: Program, esm: boolean): string;
    /** Gets the Binaryen module reference of a module. */
    export function getBinaryenModuleRef(module: Module): number;
    /** Validates a module. */
    export function validate(module: Module): boolean;
    /** Optimizes a module. */
    export function optimize(module: Module, optimizeLevel: number, shrinkLevel: number, debugInfo?: boolean, zeroFilledMemory?: boolean): void;
}
declare module "types:assemblyscript/src/extra/ast" {
    /**
     * @fileoverview Abstract Syntax Tree extras.
     *
     * Provides serialization of the AssemblyScript AST back to it source form.
     *
     * @license Apache-2.0
     */
    import { Node, Source, TypeNode, NamedTypeNode, FunctionTypeNode, TypeName, TypeParameterNode, IdentifierExpression, LiteralExpression, FloatLiteralExpression, IntegerLiteralExpression, StringLiteralExpression, TemplateLiteralExpression, RegexpLiteralExpression, ArrayLiteralExpression, AssertionExpression, BinaryExpression, CallExpression, CommaExpression, ElementAccessExpression, FunctionExpression, NewExpression, ParenthesizedExpression, PropertyAccessExpression, TernaryExpression, UnaryPostfixExpression, UnaryExpression, UnaryPrefixExpression, ClassExpression, ObjectLiteralExpression, BlockStatement, BreakStatement, ContinueStatement, DoStatement, EmptyStatement, ExportImportStatement, ExportStatement, ExportDefaultStatement, ExpressionStatement, ForStatement, ForOfStatement, IfStatement, ImportStatement, InstanceOfExpression, ReturnStatement, SwitchStatement, ThrowStatement, TryStatement, VariableStatement, WhileStatement, ModuleDeclaration, DeclarationStatement, ClassDeclaration, EnumDeclaration, EnumValueDeclaration, FieldDeclaration, FunctionDeclaration, ImportDeclaration, InterfaceDeclaration, MethodDeclaration, NamespaceDeclaration, TypeDeclaration, VariableDeclaration, DecoratorNode, ParameterNode, ExportMember, SwitchCase, IndexSignatureNode } from "types:assemblyscript/src/ast";
    /** An AST builder. */
    export class ASTBuilder {
        /** Rebuilds the textual source from the specified AST, as far as possible. */
        static build(node: Node): string;
        private sb;
        private indentLevel;
        visitNode(node: Node): void;
        visitSource(source: Source): void;
        visitTypeNode(node: TypeNode): void;
        visitTypeName(node: TypeName): void;
        visitNamedTypeNode(node: NamedTypeNode): void;
        visitFunctionTypeNode(node: FunctionTypeNode): void;
        visitTypeParameter(node: TypeParameterNode): void;
        visitIdentifierExpression(node: IdentifierExpression): void;
        visitArrayLiteralExpression(node: ArrayLiteralExpression): void;
        visitObjectLiteralExpression(node: ObjectLiteralExpression): void;
        visitAssertionExpression(node: AssertionExpression): void;
        visitBinaryExpression(node: BinaryExpression): void;
        visitCallExpression(node: CallExpression): void;
        private visitArguments;
        visitClassExpression(node: ClassExpression): void;
        visitCommaExpression(node: CommaExpression): void;
        visitElementAccessExpression(node: ElementAccessExpression): void;
        visitFunctionExpression(node: FunctionExpression): void;
        visitLiteralExpression(node: LiteralExpression): void;
        visitFloatLiteralExpression(node: FloatLiteralExpression): void;
        visitInstanceOfExpression(node: InstanceOfExpression): void;
        visitIntegerLiteralExpression(node: IntegerLiteralExpression): void;
        visitStringLiteral(str: string): void;
        visitStringLiteralExpression(node: StringLiteralExpression): void;
        visitTemplateLiteralExpression(node: TemplateLiteralExpression): void;
        visitRegexpLiteralExpression(node: RegexpLiteralExpression): void;
        visitNewExpression(node: NewExpression): void;
        visitParenthesizedExpression(node: ParenthesizedExpression): void;
        visitPropertyAccessExpression(node: PropertyAccessExpression): void;
        visitTernaryExpression(node: TernaryExpression): void;
        visitUnaryExpression(node: UnaryExpression): void;
        visitUnaryPostfixExpression(node: UnaryPostfixExpression): void;
        visitUnaryPrefixExpression(node: UnaryPrefixExpression): void;
        visitNodeAndTerminate(node: Node): void;
        visitBlockStatement(node: BlockStatement): void;
        visitBreakStatement(node: BreakStatement): void;
        visitContinueStatement(node: ContinueStatement): void;
        visitClassDeclaration(node: ClassDeclaration, isDefault?: boolean): void;
        visitDoStatement(node: DoStatement): void;
        visitEmptyStatement(node: EmptyStatement): void;
        visitEnumDeclaration(node: EnumDeclaration, isDefault?: boolean): void;
        visitEnumValueDeclaration(node: EnumValueDeclaration): void;
        visitExportImportStatement(node: ExportImportStatement): void;
        visitExportMember(node: ExportMember): void;
        visitExportStatement(node: ExportStatement): void;
        visitExportDefaultStatement(node: ExportDefaultStatement): void;
        visitExpressionStatement(node: ExpressionStatement): void;
        visitFieldDeclaration(node: FieldDeclaration): void;
        visitForStatement(node: ForStatement): void;
        visitForOfStatement(node: ForOfStatement): void;
        visitFunctionDeclaration(node: FunctionDeclaration, isDefault?: boolean): void;
        visitFunctionCommon(node: FunctionDeclaration): void;
        visitIfStatement(node: IfStatement): void;
        visitImportDeclaration(node: ImportDeclaration): void;
        visitImportStatement(node: ImportStatement): void;
        visitIndexSignature(node: IndexSignatureNode): void;
        visitInterfaceDeclaration(node: InterfaceDeclaration, isDefault?: boolean): void;
        visitMethodDeclaration(node: MethodDeclaration): void;
        visitNamespaceDeclaration(node: NamespaceDeclaration, isDefault?: boolean): void;
        visitReturnStatement(node: ReturnStatement): void;
        visitSwitchCase(node: SwitchCase): void;
        visitSwitchStatement(node: SwitchStatement): void;
        visitThrowStatement(node: ThrowStatement): void;
        visitTryStatement(node: TryStatement): void;
        visitTypeDeclaration(node: TypeDeclaration): void;
        visitModuleDeclaration(node: ModuleDeclaration): void;
        visitVariableDeclaration(node: VariableDeclaration): void;
        visitVariableStatement(node: VariableStatement): void;
        visitWhileStatement(node: WhileStatement): void;
        serializeDecorator(node: DecoratorNode): void;
        serializeParameter(node: ParameterNode): void;
        serializeExternalModifiers(node: DeclarationStatement): void;
        serializeAccessModifiers(node: DeclarationStatement): void;
        finish(): string;
    }
}
declare module "types:assemblyscript/src/index-js" {
    import "types:assemblyscript/src/glue/js/index";
    export * from "types:assemblyscript/src/index-wasm";
    export * from "types:assemblyscript/src/ast";
    export * from "types:assemblyscript/src/common";
    export * from "types:assemblyscript/src/compiler";
    export * from "types:assemblyscript/src/bindings";
    export * from "types:assemblyscript/src/diagnostics";
    export * from "types:assemblyscript/src/flow";
    export * from "types:assemblyscript/src/module";
    export * from "types:assemblyscript/src/parser";
    export * from "types:assemblyscript/src/program";
    export * from "types:assemblyscript/src/resolver";
    export * from "types:assemblyscript/src/tokenizer";
    export * from "types:assemblyscript/src/types";
    export * from "types:assemblyscript/src/extra/ast";
    import * as util from "types:assemblyscript/src/util";
    export { util };
}
declare module "types:assemblyscript/src/index" {
    /**
     * @license
     * Copyright 2020 Daniel Wirtz / The AssemblyScript Authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * SPDX-License-Identifier: Apache-2.0
     */
    export * from "types:assemblyscript/src/index-js";
    import * as assemblyscript from "types:assemblyscript/src/index-js";
    export default assemblyscript;
}
declare module "types:assemblyscript/src/passes/ministack" {
    /**
     * @fileoverview A potential minimalistic shadow stack. Currently not used.
     *
     * Instruments a module's exports to track when the execution stack is fully
     * unwound, and injects a call to `__autocollect` to be invoked when it is.
     * Accounts for the currently in-flight managed return value from Wasm to the
     * host by pushing it to a mini stack, essentially a stack of only one value,
     * while `__autocollect` is executing.
     *
     * @license Apache-2.0
     */
    import { Pass } from "types:assemblyscript/src/passes/pass";
    import { ExportRef, Module } from "types:assemblyscript/src/module";
    import { Program } from "types:assemblyscript/src/program";
    /** Instruments a module with a minimalistic shadow stack for precise GC. */
    export class MiniStack extends Pass {
        /** Compiler reference. */
        program: Program;
        /** Exported functions returning managed values. */
        managedReturns: Set<string>;
        constructor(module: Module, program: Program);
        /** Notes the presence of an exported function with a managed return value. */
        noteManagedReturn(exportName: string): void;
        /** Instruments a function export to also maintain stack depth. */
        instrumentFunctionExport(ref: ExportRef): void;
        /** Runs the pass. Returns `true` if the mini stack has been added. */
        run(): boolean;
    }
}
declare module "types:assemblyscript/std/assembly/shared/feature" {
    /** Indicates specific features to activate. */
    export const enum Feature {
        /** No additional features. */
        None = 0,
        /** Sign extension operations. */
        SignExtension = 1,
        /** Mutable global imports and exports. */
        MutableGlobals = 2,
        /** Non-trapping float to integer operations. */
        NontrappingF2I = 4,
        /** Bulk memory operations. */
        BulkMemory = 8,
        /** SIMD types and operations. */
        Simd = 16,
        /** Threading and atomic operations. */
        Threads = 32,
        /** Exception handling operations. */
        ExceptionHandling = 64,
        /** Tail call operations. */
        TailCalls = 128,
        /** Reference types. */
        ReferenceTypes = 256,
        /** Multi value types. */
        MultiValue = 512,
        /** Garbage collection. */
        GC = 1024,
        /** Memory64. */
        Memory64 = 2048,
        /** Relaxed SIMD. */
        RelaxedSimd = 4096,
        /** Extended const expressions. */
        ExtendedConst = 8192,
        /** Reference typed strings. */
        Stringref = 16384,
        /** All features. */
        All = 32767
    }
    /** Gets the name of the specified feature one would specify on the command line. */
    export function featureToString(feature: Feature): string;
}
declare module "types:assemblyscript/std/assembly/shared/runtime" {
    /** Runtime types. */
    export enum Runtime {
        /** Simple bump allocator without GC. */
        Stub = 0,
        /** Stop the world semi-automatic GC. */
        Minimal = 1,
        /** incremental GC. */
        Incremental = 2
    }
}
declare module "types:assemblyscript/std/assembly/shared/target" {
    /** Compilation target. */
    export enum Target {
        /** Portable. */
        Js = 0,
        /** WebAssembly with 32-bit pointers. */
        Wasm32 = 1,
        /** WebAssembly with 64-bit pointers. Experimental and not supported by any runtime yet. */
        Wasm64 = 2
    }
}
declare module "types:assemblyscript/std/assembly/shared/typeinfo" {
    /** Runtime type information data structure. */
    export class Typeinfo {
        /** Flags describing the shape of this class type. */
        flags: TypeinfoFlags;
    }
    /** Runtime type information flags. */
    export const enum TypeinfoFlags {
        /** No specific flags. */
        NONE = 0,
        /** Type is an `ArrayBufferView`. */
        ARRAYBUFFERVIEW = 1,
        /** Type is an `Array`. */
        ARRAY = 2,
        /** Type is a `StaticArray`. */
        STATICARRAY = 4,
        /** Type is a `Set`. */
        SET = 8,
        /** Type is a `Map`. */
        MAP = 16,
        /** Type has no outgoing pointers. */
        POINTERFREE = 32,
        /** Value alignment of 1 byte. */
        VALUE_ALIGN_0 = 64,
        /** Value alignment of 2 bytes. */
        VALUE_ALIGN_1 = 128,
        /** Value alignment of 4 bytes. */
        VALUE_ALIGN_2 = 256,
        /** Value alignment of 8 bytes. */
        VALUE_ALIGN_3 = 512,
        /** Value alignment of 16 bytes. */
        VALUE_ALIGN_4 = 1024,
        /** Value is a signed type. */
        VALUE_SIGNED = 2048,
        /** Value is a float type. */
        VALUE_FLOAT = 4096,
        /** Value type is nullable. */
        VALUE_NULLABLE = 8192,
        /** Value type is managed. */
        VALUE_MANAGED = 16384,
        /** Key alignment of 1 byte. */
        KEY_ALIGN_0 = 32768,
        /** Key alignment of 2 bytes. */
        KEY_ALIGN_1 = 65536,
        /** Key alignment of 4 bytes. */
        KEY_ALIGN_2 = 131072,
        /** Key alignment of 8 bytes. */
        KEY_ALIGN_3 = 262144,
        /** Key alignment of 16 bytes. */
        KEY_ALIGN_4 = 524288,
        /** Key is a signed type. */
        KEY_SIGNED = 1048576,
        /** Key is a float type. */
        KEY_FLOAT = 2097152,
        /** Key type is nullable. */
        KEY_NULLABLE = 4194304,
        /** Key type is managed. */
        KEY_MANAGED = 8388608
    }
}
declare module "types:assemblyscript/src/glue/binaryen" {
    /**
     * @fileoverview Portable definitions for Binaryen's C-API.
     *
     * tsc uses the .js file next to it, while asc makes it a Wasm import.
     *
     * See: https://github.com/WebAssembly/binaryen/blob/main/src/binaryen-c.h
     *
     * @license Apache-2.0
     */
    module "binaryen";
    type Ref = number;
    export type Index = number;
    export type ExpressionId = number;
    export type FeatureFlags = number;
    export type Op = number;
    export type ExternalKind = number;
    export type SideEffects = number;
    export type ExpressionRunnerFlags = number;
    export type StringRef = Ref;
    export type Pointer<T> = Ref;
    export type ArrayRef<T> = Ref;
    export type TypeRef = Ref;
    export type HeapTypeRef = Ref;
    export type PackedType = number;
    export type ModuleRef = Ref;
    export type LiteralRef = Ref;
    export type ExpressionRef = Ref;
    export type FunctionRef = Ref;
    export type ImportRef = Ref;
    export type ExportRef = Ref;
    export type GlobalRef = Ref;
    export type TagRef = Ref;
    export type TableRef = Ref;
    export type ElementSegmentRef = Ref;
    export type RelooperRef = Ref;
    export type RelooperBlockRef = Ref;
    export type ExpressionRunnerRef = Ref;
    export type BinaryenModuleAllocateAndWriteResultRef = Ref;
    export type TypeBuilderRef = Ref;
    export type TypeBuilderErrorReason = number;
    export type TypeSystem = number;
    export function _BinaryenTypeCreate(types: ArrayRef<TypeRef>, numTypes: number): TypeRef;
    export function _BinaryenTypeArity(type: TypeRef): number;
    export function _BinaryenTypeExpand(type: TypeRef, typesOut: ArrayRef<TypeRef>): void;
    export function _BinaryenTypeGetHeapType(type: TypeRef): HeapTypeRef;
    export function _BinaryenTypeFromHeapType(heapType: HeapTypeRef, nullable: boolean): TypeRef;
    export function _BinaryenTypeIsNullable(type: TypeRef): boolean;
    export function _BinaryenTypeFuncref(): TypeRef;
    export function _BinaryenTypeExternref(): TypeRef;
    export function _BinaryenTypeAnyref(): TypeRef;
    export function _BinaryenTypeEqref(): TypeRef;
    export function _BinaryenTypeStructref(): TypeRef;
    export function _BinaryenTypeArrayref(): TypeRef;
    export function _BinaryenTypeI31ref(): TypeRef;
    export function _BinaryenTypeStringref(): TypeRef;
    export function _BinaryenTypeStringviewWTF8(): TypeRef;
    export function _BinaryenTypeStringviewWTF16(): TypeRef;
    export function _BinaryenTypeStringviewIter(): TypeRef;
    export function _BinaryenTypeNullref(): TypeRef;
    export function _BinaryenTypeNullExternref(): TypeRef;
    export function _BinaryenTypeNullFuncref(): TypeRef;
    export function _BinaryenHeapTypeFunc(): HeapTypeRef;
    export function _BinaryenHeapTypeExt(): HeapTypeRef;
    export function _BinaryenHeapTypeAny(): HeapTypeRef;
    export function _BinaryenHeapTypeEq(): HeapTypeRef;
    export function _BinaryenHeapTypeI31(): HeapTypeRef;
    export function _BinaryenHeapTypeStruct(): HeapTypeRef;
    export function _BinaryenHeapTypeArray(): HeapTypeRef;
    export function _BinaryenHeapTypeString(): HeapTypeRef;
    export function _BinaryenHeapTypeStringviewWTF8(): HeapTypeRef;
    export function _BinaryenHeapTypeStringviewWTF16(): HeapTypeRef;
    export function _BinaryenHeapTypeStringviewIter(): HeapTypeRef;
    export function _BinaryenHeapTypeNone(): HeapTypeRef;
    export function _BinaryenHeapTypeNoext(): HeapTypeRef;
    export function _BinaryenHeapTypeNofunc(): HeapTypeRef;
    export function _BinaryenHeapTypeIsBasic(heapType: HeapTypeRef): boolean;
    export function _BinaryenHeapTypeIsSignature(heapType: HeapTypeRef): boolean;
    export function _BinaryenHeapTypeIsStruct(heapType: HeapTypeRef): boolean;
    export function _BinaryenHeapTypeIsArray(heapType: HeapTypeRef): boolean;
    export function _BinaryenHeapTypeIsBottom(heapType: HeapTypeRef): boolean;
    export function _BinaryenHeapTypeGetBottom(heapType: HeapTypeRef): HeapTypeRef;
    export function _BinaryenHeapTypeIsSubType(left: HeapTypeRef, right: HeapTypeRef): boolean;
    export function _BinaryenStructTypeGetNumFields(heapType: HeapTypeRef): Index;
    export function _BinaryenStructTypeGetFieldType(heapType: HeapTypeRef, index: Index): TypeRef;
    export function _BinaryenStructTypeGetFieldPackedType(heapType: HeapTypeRef, index: Index): PackedType;
    export function _BinaryenStructTypeIsFieldMutable(heapType: HeapTypeRef, index: Index): boolean;
    export function _BinaryenArrayTypeGetElementType(heapType: HeapTypeRef): TypeRef;
    export function _BinaryenArrayTypeGetElementPackedType(heapType: HeapTypeRef): PackedType;
    export function _BinaryenArrayTypeIsElementMutable(heapType: HeapTypeRef): boolean;
    export function _BinaryenSignatureTypeGetParams(heapType: HeapTypeRef): TypeRef;
    export function _BinaryenSignatureTypeGetResults(heapType: HeapTypeRef): TypeRef;
    export function _BinaryenModuleCreate(): ModuleRef;
    export function _BinaryenModuleDispose(module: ModuleRef): void;
    export function _BinaryenSizeofLiteral(): number;
    export function _BinaryenLiteralInt32(literalOut: LiteralRef, x: number): void;
    export function _BinaryenLiteralInt64(literalOut: LiteralRef, x: number, y: number): void;
    export function _BinaryenLiteralFloat32(literalOut: LiteralRef, x: number): void;
    export function _BinaryenLiteralFloat64(literalOut: LiteralRef, x: number): void;
    export function _BinaryenLiteralVec128(literalOut: LiteralRef, x: ArrayRef<number>): void;
    export function _BinaryenLiteralFloat32Bits(literalOut: LiteralRef, x: number): void;
    export function _BinaryenLiteralFloat64Bits(literalOut: LiteralRef, x: number, y: number): void;
    export function _BinaryenExpressionGetId(expr: ExpressionRef): ExpressionId;
    export function _BinaryenExpressionGetType(expr: ExpressionRef): TypeRef;
    export function _BinaryenExpressionSetType(expr: ExpressionRef, type: TypeRef): void;
    export function _BinaryenExpressionPrint(expr: ExpressionRef): void;
    export function _BinaryenExpressionCopy(expr: ExpressionRef, module: ModuleRef): ExpressionRef;
    export function _BinaryenExpressionFinalize(expr: ExpressionRef): void;
    export function _BinaryenBlock(module: ModuleRef, name: StringRef, childExprs: ArrayRef<ExpressionRef>, numChildren: Index, type: TypeRef): ExpressionRef;
    export function _BinaryenBlockGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenBlockSetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenBlockGetNumChildren(expr: ExpressionRef): Index;
    export function _BinaryenBlockGetChildAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenBlockSetChildAt(expr: ExpressionRef, index: Index, childExpr: ExpressionRef): void;
    export function _BinaryenBlockAppendChild(expr: ExpressionRef, childExpr: ExpressionRef): Index;
    export function _BinaryenBlockInsertChildAt(expr: ExpressionRef, index: Index, childExpr: ExpressionRef): void;
    export function _BinaryenBlockRemoveChildAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenIf(module: ModuleRef, conditionExpr: ExpressionRef, ifTrueExpr: ExpressionRef, ifFalseExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenIfGetCondition(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenIfSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void;
    export function _BinaryenIfGetIfTrue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenIfSetIfTrue(expr: ExpressionRef, ifTrueExpr: ExpressionRef): void;
    export function _BinaryenIfGetIfFalse(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenIfSetIfFalse(expr: ExpressionRef, ifFalseExpr: ExpressionRef): void;
    export function _BinaryenLoop(module: ModuleRef, name: StringRef, bodyExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenLoopGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenLoopSetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenLoopGetBody(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenLoopSetBody(expr: ExpressionRef, bodyExpr: ExpressionRef): void;
    export function _BinaryenBreak(module: ModuleRef, name: StringRef, conditionExpr: ExpressionRef, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenBreakGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenBreakSetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenBreakGetCondition(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenBreakSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void;
    export function _BinaryenBreakGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenBreakSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenSwitch(module: ModuleRef, names: ArrayRef<StringRef>, numNames: Index, defaultName: StringRef, conditionExpr: ExpressionRef, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenSwitchGetNumNames(expr: ExpressionRef): Index;
    export function _BinaryenSwitchGetNameAt(expr: ExpressionRef, index: Index): StringRef;
    export function _BinaryenSwitchSetNameAt(expr: ExpressionRef, index: Index, name: StringRef): void;
    export function _BinaryenSwitchAppendName(expr: ExpressionRef, name: StringRef): Index;
    export function _BinaryenSwitchInsertNameAt(expr: ExpressionRef, index: Index, name: StringRef): void;
    export function _BinaryenSwitchRemoveNameAt(expr: ExpressionRef, index: Index): StringRef;
    export function _BinaryenSwitchGetDefaultName(expr: ExpressionRef): StringRef;
    export function _BinaryenSwitchSetDefaultName(expr: ExpressionRef, defaultName: StringRef): void;
    export function _BinaryenSwitchGetCondition(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSwitchSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void;
    export function _BinaryenSwitchGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSwitchSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenCall(module: ModuleRef, targetName: StringRef, operandExprs: ArrayRef<ExpressionRef>, numOperands: Index, returnType: TypeRef): ExpressionRef;
    export function _BinaryenCallGetTarget(expr: ExpressionRef): StringRef;
    export function _BinaryenCallSetTarget(expr: ExpressionRef, targetName: StringRef): void;
    export function _BinaryenCallGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenCallGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenCallInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallIsReturn(expr: ExpressionRef): boolean;
    export function _BinaryenCallSetReturn(expr: ExpressionRef, isReturn: boolean): void;
    // ^ with return = true
    export function _BinaryenReturnCall(module: ModuleRef, targetName: StringRef, operandExprs: ArrayRef<ExpressionRef>, numOperands: Index, returnType: TypeRef): ExpressionRef;
    export function _BinaryenCallIndirect(module: ModuleRef, table: StringRef, targetExpr: ExpressionRef, operandExprs: ArrayRef<ExpressionRef>, numOperands: Index, params: TypeRef, results: TypeRef): ExpressionRef;
    export function _BinaryenCallIndirectGetTable(expr: ExpressionRef): StringRef;
    export function _BinaryenCallIndirectSetTable(expr: ExpressionRef, table: StringRef): void;
    export function _BinaryenCallIndirectGetTarget(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenCallIndirectSetTarget(expr: ExpressionRef, targetExpr: ExpressionRef): void;
    export function _BinaryenCallIndirectGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenCallIndirectGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallIndirectSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallIndirectAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenCallIndirectInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallIndirectRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallIndirectIsReturn(expr: ExpressionRef): boolean;
    export function _BinaryenCallIndirectSetReturn(expr: ExpressionRef, isReturn: boolean): void;
    // ^ with return = true
    export function _BinaryenReturnCallIndirect(module: ModuleRef, table: StringRef, targetExpr: ExpressionRef, operandExprs: ArrayRef<ExpressionRef>, numOperands: Index, params: TypeRef, results: TypeRef): ExpressionRef;
    export function _BinaryenLocalGet(module: ModuleRef, index: Index, type: TypeRef): ExpressionRef;
    export function _BinaryenLocalGetGetIndex(expr: ExpressionRef): Index;
    export function _BinaryenLocalGetSetIndex(expr: ExpressionRef, index: Index): void;
    export function _BinaryenLocalSet(module: ModuleRef, index: Index, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenLocalSetIsTee(expr: ExpressionRef): boolean;
    export function _BinaryenLocalSetGetIndex(expr: ExpressionRef): Index;
    export function _BinaryenLocalSetSetIndex(expr: ExpressionRef, index: Index): void;
    export function _BinaryenLocalSetGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenLocalSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    // ^ with type != none
    export function _BinaryenLocalTee(module: ModuleRef, index: Index, valueExpr: ExpressionRef, type: TypeRef): ExpressionRef;
    export function _BinaryenGlobalGet(module: ModuleRef, name: StringRef, type: TypeRef): ExpressionRef;
    export function _BinaryenGlobalGetGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenGlobalGetSetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenGlobalSet(module: ModuleRef, name: StringRef, value: ExpressionRef): ExpressionRef;
    export function _BinaryenGlobalSetGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenGlobalSetSetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenGlobalSetGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenGlobalSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenMemorySize(module: ModuleRef, memoryName: StringRef, memoryIs64: boolean): ExpressionRef;
    export function _BinaryenMemoryGrow(module: ModuleRef, delta: ExpressionRef, memoryName: StringRef, memoryIs64: boolean): ExpressionRef;
    export function _BinaryenMemoryGrowGetDelta(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryGrowSetDelta(expr: ExpressionRef, delta: ExpressionRef): void;
    export function _BinaryenLoad(module: ModuleRef, bytes: number, signed: boolean, offset: number, align: number, type: TypeRef, ptrExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenLoadIsAtomic(expr: ExpressionRef): boolean;
    export function _BinaryenLoadSetAtomic(expr: ExpressionRef, isAtomic: boolean): void;
    export function _BinaryenLoadIsSigned(expr: ExpressionRef): boolean;
    export function _BinaryenLoadSetSigned(expr: ExpressionRef, isSigned: boolean): void;
    export function _BinaryenLoadGetOffset(expr: ExpressionRef): number;
    export function _BinaryenLoadSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenLoadGetBytes(expr: ExpressionRef): number;
    export function _BinaryenLoadSetBytes(expr: ExpressionRef, bytes: number): void;
    export function _BinaryenLoadGetAlign(expr: ExpressionRef): number;
    export function _BinaryenLoadSetAlign(expr: ExpressionRef, align: number): void;
    export function _BinaryenLoadGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenLoadSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    // ^ with atomic = true
    export function _BinaryenAtomicLoad(module: ModuleRef, bytes: Index, offset: Index, type: TypeRef, ptrExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenStore(module: ModuleRef, bytes: number, offset: number, align: number, ptrExpr: ExpressionRef, valueExpr: ExpressionRef, type: TypeRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenStoreIsAtomic(expr: ExpressionRef): boolean;
    export function _BinaryenStoreSetAtomic(expr: ExpressionRef, isAtomic: boolean): void;
    export function _BinaryenStoreGetBytes(expr: ExpressionRef): number;
    export function _BinaryenStoreSetBytes(expr: ExpressionRef, bytes: number): void;
    export function _BinaryenStoreGetOffset(expr: ExpressionRef): number;
    export function _BinaryenStoreSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenStoreGetAlign(expr: ExpressionRef): number;
    export function _BinaryenStoreSetAlign(expr: ExpressionRef, align: number): void;
    export function _BinaryenStoreGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStoreSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenStoreGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStoreSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenStoreGetValueType(expr: ExpressionRef): TypeRef;
    export function _BinaryenStoreSetValueType(expr: ExpressionRef, valueType: TypeRef): void;
    // ^ with atomic = true
    export function _BinaryenAtomicStore(module: ModuleRef, bytes: Index, offset: Index, ptrExpr: ExpressionRef, valueExpr: ExpressionRef, type: TypeRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenConst(module: ModuleRef, value: LiteralRef): ExpressionRef;
    export function _BinaryenConstGetValueI32(expr: ExpressionRef): number;
    export function _BinaryenConstSetValueI32(expr: ExpressionRef, value: number): void;
    export function _BinaryenConstGetValueI64Low(expr: ExpressionRef): number;
    export function _BinaryenConstSetValueI64Low(expr: ExpressionRef, value: number): void;
    export function _BinaryenConstGetValueI64High(expr: ExpressionRef): number;
    export function _BinaryenConstSetValueI64High(expr: ExpressionRef, value: number): void;
    export function _BinaryenConstGetValueF32(expr: ExpressionRef): number;
    export function _BinaryenConstSetValueF32(expr: ExpressionRef, value: number): void;
    export function _BinaryenConstGetValueF64(expr: ExpressionRef): number;
    export function _BinaryenConstSetValueF64(expr: ExpressionRef, value: number): void;
    export function _BinaryenConstGetValueV128(expr: ExpressionRef, valueOut: ArrayRef<number>): void;
    export function _BinaryenConstSetValueV128(expr: ExpressionRef, value: ArrayRef<number>): void;
    export function _BinaryenUnary(module: ModuleRef, op: Op, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenUnaryGetOp(expr: ExpressionRef): Op;
    export function _BinaryenUnarySetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenUnaryGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenUnarySetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenBinary(module: ModuleRef, op: Op, leftExpr: ExpressionRef, rightExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenBinaryGetOp(expr: ExpressionRef): Op;
    export function _BinaryenBinarySetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenBinaryGetLeft(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenBinarySetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void;
    export function _BinaryenBinaryGetRight(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenBinarySetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void;
    export function _BinaryenSelect(module: ModuleRef, conditionExpr: ExpressionRef, ifTrueExpr: ExpressionRef, ifFalseExpr: ExpressionRef, type: TypeRef): ExpressionRef;
    export function _BinaryenSelectGetIfTrue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSelectSetIfTrue(expr: ExpressionRef, ifTrueExpr: ExpressionRef): void;
    export function _BinaryenSelectGetIfFalse(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSelectSetIfFalse(expr: ExpressionRef, ifFalseExpr: ExpressionRef): void;
    export function _BinaryenSelectGetCondition(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSelectSetCondition(expr: ExpressionRef, conditionExpr: ExpressionRef): void;
    export function _BinaryenDrop(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenDropGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenDropSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenReturn(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenReturnGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenReturnSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenNop(module: ModuleRef): ExpressionRef;
    export function _BinaryenUnreachable(module: ModuleRef): ExpressionRef;
    export function _BinaryenAtomicRMW(module: ModuleRef, op: Op, bytes: number, offset: number, ptrExpr: ExpressionRef, valueExpr: ExpressionRef, type: TypeRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenAtomicRMWGetOp(expr: ExpressionRef): Op;
    export function _BinaryenAtomicRMWSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenAtomicRMWGetBytes(expr: ExpressionRef): number;
    export function _BinaryenAtomicRMWSetBytes(expr: ExpressionRef, bytes: number): void;
    export function _BinaryenAtomicRMWGetOffset(expr: ExpressionRef): number;
    export function _BinaryenAtomicRMWSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenAtomicRMWGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicRMWSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenAtomicRMWGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicRMWSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenAtomicCmpxchg(module: ModuleRef, bytes: number, offset: number, ptrExpr: ExpressionRef, expectedExpr: ExpressionRef, replacementExpr: ExpressionRef, type: TypeRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenAtomicCmpxchgGetBytes(expr: ExpressionRef): number;
    export function _BinaryenAtomicCmpxchgSetBytes(expr: ExpressionRef, bytes: number): void;
    export function _BinaryenAtomicCmpxchgGetOffset(expr: ExpressionRef): number;
    export function _BinaryenAtomicCmpxchgSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenAtomicCmpxchgGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicCmpxchgSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenAtomicCmpxchgGetExpected(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicCmpxchgSetExpected(expr: ExpressionRef, expectedExpr: ExpressionRef): void;
    export function _BinaryenAtomicCmpxchgGetReplacement(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicCmpxchgSetReplacement(expr: ExpressionRef, replacementExpr: ExpressionRef): void;
    export function _BinaryenAtomicWait(module: ModuleRef, ptrExpr: ExpressionRef, expectedExpr: ExpressionRef, timeoutExpr: ExpressionRef, expectedType: TypeRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenAtomicWaitGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicWaitSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenAtomicWaitGetExpected(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicWaitSetExpected(expr: ExpressionRef, expectedExpr: ExpressionRef): void;
    export function _BinaryenAtomicWaitGetTimeout(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicWaitSetTimeout(expr: ExpressionRef, timeoutExpr: ExpressionRef): void;
    export function _BinaryenAtomicWaitGetExpectedType(expr: ExpressionRef): TypeRef;
    export function _BinaryenAtomicWaitSetExpectedType(expr: ExpressionRef, expectedType: TypeRef): void;
    export function _BinaryenAtomicNotify(module: ModuleRef, ptrExpr: ExpressionRef, notifyCountExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenAtomicNotifyGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicNotifySetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenAtomicNotifyGetNotifyCount(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenAtomicNotifySetNotifyCount(expr: ExpressionRef, notifyCountExpr: ExpressionRef): void;
    export function _BinaryenAtomicFence(module: ModuleRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenAtomicFenceGetOrder(expr: ExpressionRef): number; // unused
    export function _BinaryenAtomicFenceSetOrder(expr: ExpressionRef, order: number): void; // unused
    export function _BinaryenSIMDExtract(module: ModuleRef, op: Op, vecExpr: ExpressionRef, index: number): ExpressionRef;
    export function _BinaryenSIMDExtractGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDExtractSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDExtractGetVec(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDExtractSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void;
    export function _BinaryenSIMDExtractGetIndex(expr: ExpressionRef): number;
    export function _BinaryenSIMDExtractSetIndex(expr: ExpressionRef, index: number): void;
    export function _BinaryenSIMDReplace(module: ModuleRef, op: Op, vecEpr: ExpressionRef, index: number, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDReplaceGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDReplaceSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDReplaceGetVec(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDReplaceSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void;
    export function _BinaryenSIMDReplaceGetIndex(expr: ExpressionRef): number;
    export function _BinaryenSIMDReplaceSetIndex(expr: ExpressionRef, index: number): void;
    export function _BinaryenSIMDReplaceGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDReplaceSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenSIMDShuffle(module: ModuleRef, leftExpr: ExpressionRef, rightExpr: ExpressionRef, mask: ArrayRef<number>): ExpressionRef;
    export function _BinaryenSIMDShuffleGetLeft(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDShuffleSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void;
    export function _BinaryenSIMDShuffleGetRight(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDShuffleSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void;
    export function _BinaryenSIMDShuffleGetMask(expr: ExpressionRef, maskOut: ArrayRef<number>): void;
    export function _BinaryenSIMDShuffleSetMask(expr: ExpressionRef, mask: ArrayRef<number>): void;
    export function _BinaryenSIMDTernary(module: ModuleRef, op: Op, aExpr: ExpressionRef, bExpr: ExpressionRef, cExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDTernaryGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDTernarySetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDTernaryGetA(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDTernarySetA(expr: ExpressionRef, aExpr: ExpressionRef): void;
    export function _BinaryenSIMDTernaryGetB(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDTernarySetB(expr: ExpressionRef, bExpr: ExpressionRef): void;
    export function _BinaryenSIMDTernaryGetC(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDTernarySetC(expr: ExpressionRef, cExpr: ExpressionRef): void;
    export function _BinaryenSIMDShift(module: ModuleRef, op: Op, vecExpr: ExpressionRef, shiftExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDShiftGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDShiftSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDShiftGetVec(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDShiftSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void;
    export function _BinaryenSIMDShiftGetShift(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDShiftSetShift(expr: ExpressionRef, shiftExpr: ExpressionRef): void;
    export function _BinaryenSIMDLoad(module: ModuleRef, op: Op, offset: number, align: number, ptrExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenSIMDLoadGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDLoadSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDLoadGetOffset(expr: ExpressionRef): number;
    export function _BinaryenSIMDLoadSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenSIMDLoadGetAlign(expr: ExpressionRef): number;
    export function _BinaryenSIMDLoadSetAlign(expr: ExpressionRef, align: number): void;
    export function _BinaryenSIMDLoadGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDLoadSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenSIMDLoadStoreLane(module: ModuleRef, op: Op, offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenSIMDLoadStoreLaneGetOp(expr: ExpressionRef): Op;
    export function _BinaryenSIMDLoadStoreLaneSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenSIMDLoadStoreLaneGetOffset(expr: ExpressionRef): number;
    export function _BinaryenSIMDLoadStoreLaneSetOffset(expr: ExpressionRef, offset: number): void;
    export function _BinaryenSIMDLoadStoreLaneGetAlign(expr: ExpressionRef): number;
    export function _BinaryenSIMDLoadStoreLaneSetAlign(expr: ExpressionRef, align: number): void;
    export function _BinaryenSIMDLoadStoreLaneGetIndex(expr: ExpressionRef): number;
    export function _BinaryenSIMDLoadStoreLaneSetIndex(expr: ExpressionRef, index: number): void;
    export function _BinaryenSIMDLoadStoreLaneGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDLoadStoreLaneSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenSIMDLoadStoreLaneGetVec(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenSIMDLoadStoreLaneSetVec(expr: ExpressionRef, vecExpr: ExpressionRef): void;
    export function _BinaryenSIMDLoadStoreLaneIsStore(expr: ExpressionRef): boolean;
    export function _BinaryenMemoryInit(module: ModuleRef, segmentName: StringRef, destExpr: ExpressionRef, offsetExpr: ExpressionRef, sizeExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenMemoryInitGetSegment(expr: ExpressionRef): StringRef;
    export function _BinaryenMemoryInitSetSegment(expr: ExpressionRef, segmentName: StringRef): void;
    export function _BinaryenMemoryInitGetDest(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryInitSetDest(expr: ExpressionRef, destExpr: ExpressionRef): void;
    export function _BinaryenMemoryInitGetOffset(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryInitSetOffset(expr: ExpressionRef, offsetExpr: ExpressionRef): void;
    export function _BinaryenMemoryInitGetSize(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryInitSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void;
    export function _BinaryenDataDrop(module: ModuleRef, segmentName: StringRef): ExpressionRef;
    export function _BinaryenDataDropGetSegment(expr: ExpressionRef): StringRef;
    export function _BinaryenDataDropSetSegment(expr: ExpressionRef, segmentName: StringRef): void;
    export function _BinaryenMemoryCopy(module: ModuleRef, destExpr: ExpressionRef, sourceExpr: ExpressionRef, sizeExpr: ExpressionRef, destMemoryName: StringRef, sourceMemoryName: StringRef): ExpressionRef;
    export function _BinaryenMemoryCopyGetDest(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryCopySetDest(expr: ExpressionRef, destExpr: ExpressionRef): void;
    export function _BinaryenMemoryCopyGetSource(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryCopySetSource(expr: ExpressionRef, sourceExpr: ExpressionRef): void;
    export function _BinaryenMemoryCopyGetSize(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryCopySetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void;
    export function _BinaryenMemoryFill(module: ModuleRef, destExpr: ExpressionRef, valueExpr: ExpressionRef, sizeExpr: ExpressionRef, memoryName: StringRef): ExpressionRef;
    export function _BinaryenMemoryFillGetDest(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryFillSetDest(expr: ExpressionRef, destExpr: ExpressionRef): void;
    export function _BinaryenMemoryFillGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryFillSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenMemoryFillGetSize(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenMemoryFillSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void;
    export function _BinaryenRefNull(module: ModuleRef, type: TypeRef): ExpressionRef;
    export function _BinaryenRefIsNull(module: ModuleRef, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefIsNullGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefIsNullSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenRefAs(module: ModuleRef, op: Op, valueExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefAsGetOp(expr: ExpressionRef): Op;
    export function _BinaryenRefAsSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenRefAsGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefAsSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenRefFunc(module: ModuleRef, funcName: StringRef, type: TypeRef): ExpressionRef;
    export function _BinaryenRefFuncGetFunc(expr: ExpressionRef): StringRef;
    export function _BinaryenRefFuncSetFunc(expr: ExpressionRef, funcName: StringRef): void;
    export function _BinaryenRefEq(module: ModuleRef, leftExpr: ExpressionRef, rightExpr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefEqGetLeft(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefEqSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void;
    export function _BinaryenRefEqGetRight(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefEqSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void;
    export function _BinaryenTableGet(module: ModuleRef, name: StringRef, index: ExpressionRef, type: TypeRef): ExpressionRef;
    export function _BinaryenTableGetGetTable(expr: ExpressionRef): StringRef;
    export function _BinaryenTableGetSetTable(expr: ExpressionRef, table: StringRef): void;
    export function _BinaryenTableGetGetIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTableGetSetIndex(expr: ExpressionRef, index: ExpressionRef): void;
    export function _BinaryenTableSet(module: ModuleRef, name: StringRef, index: ExpressionRef, value: ExpressionRef): ExpressionRef;
    export function _BinaryenTableSetGetTable(expr: ExpressionRef): StringRef;
    export function _BinaryenTableSetSetTable(expr: ExpressionRef, table: StringRef): void;
    export function _BinaryenTableSetGetIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTableSetSetIndex(expr: ExpressionRef, index: ExpressionRef): void;
    export function _BinaryenTableSetGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTableSetSetValue(expr: ExpressionRef, value: ExpressionRef): void;
    export function _BinaryenTableSize(module: ModuleRef, name: StringRef): ExpressionRef;
    export function _BinaryenTableSizeGetTable(expr: ExpressionRef): StringRef;
    export function _BinaryenTableSizeSetTable(expr: ExpressionRef, table: StringRef): void;
    export function _BinaryenTableGrow(module: ModuleRef, name: StringRef, value: ExpressionRef, delta: ExpressionRef): ExpressionRef;
    export function _BinaryenTableGrowGetTable(expr: ExpressionRef): StringRef;
    export function _BinaryenTableGrowSetTable(expr: ExpressionRef, table: StringRef): void;
    export function _BinaryenTableGrowGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTableGrowSetValue(expr: ExpressionRef, value: ExpressionRef): void;
    export function _BinaryenTableGrowGetDelta(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTableGrowSetDelta(expr: ExpressionRef, delta: ExpressionRef): void;
    export function _BinaryenTry(module: ModuleRef, name: StringRef, bodyExpr: ExpressionRef, catchTags: ArrayRef<StringRef>, numCatchTags: Index, catchBodies: ArrayRef<ExpressionRef>, numCatchBodies: Index, delegateTarget: StringRef): ExpressionRef;
    export function _BinaryenTryGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenTrySetName(expr: ExpressionRef, name: StringRef): void;
    export function _BinaryenTryGetBody(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTrySetBody(expr: ExpressionRef, bodyExpr: ExpressionRef): void;
    export function _BinaryenTryGetNumCatchTags(expr: ExpressionRef): Index;
    export function _BinaryenTryGetNumCatchBodies(expr: ExpressionRef): Index;
    export function _BinaryenTryGetCatchTagAt(expr: ExpressionRef, index: Index): StringRef;
    export function _BinaryenTrySetCatchTagAt(expr: ExpressionRef, index: Index, catchTag: StringRef): void;
    export function _BinaryenTryAppendCatchTag(expr: ExpressionRef, catchTag: StringRef): Index;
    export function _BinaryenTryInsertCatchTagAt(expr: ExpressionRef, index: Index, catchTag: StringRef): void;
    export function _BinaryenTryRemoveCatchTagAt(expr: ExpressionRef, index: Index): StringRef;
    export function _BinaryenTryGetCatchBodyAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenTrySetCatchBodyAt(expr: ExpressionRef, index: Index, catchExpr: ExpressionRef): void;
    export function _BinaryenTryAppendCatchBody(expr: ExpressionRef, catchExpr: ExpressionRef): Index;
    export function _BinaryenTryInsertCatchBodyAt(expr: ExpressionRef, index: Index, catchExpr: ExpressionRef): void;
    export function _BinaryenTryRemoveCatchBodyAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenTryHasCatchAll(expr: ExpressionRef): boolean;
    export function _BinaryenTryGetDelegateTarget(expr: ExpressionRef): StringRef;
    export function _BinaryenTrySetDelegateTarget(expr: ExpressionRef, delegateTarget: StringRef): void;
    export function _BinaryenTryIsDelegate(expr: ExpressionRef): boolean;
    export function _BinaryenThrow(module: ModuleRef, tagName: StringRef, operands: ArrayRef<ExpressionRef>, numOperands: Index): ExpressionRef;
    export function _BinaryenThrowGetTag(expr: ExpressionRef): StringRef;
    export function _BinaryenThrowSetTag(expr: ExpressionRef, tagName: StringRef): void;
    export function _BinaryenThrowGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenThrowGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenThrowSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenThrowAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenThrowInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenThrowRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenRethrow(module: ModuleRef, target: StringRef): ExpressionRef;
    export function _BinaryenRethrowGetTarget(expr: ExpressionRef): StringRef;
    export function _BinaryenRethrowSetDepth(expr: ExpressionRef, target: StringRef): void;
    export function _BinaryenTupleMake(module: ModuleRef, operandExprs: ArrayRef<ExpressionRef>, numOperands: Index): ExpressionRef;
    export function _BinaryenTupleMakeGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenTupleMakeGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenTupleMakeSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenTupleMakeAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenTupleMakeInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenTupleMakeRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenTupleExtract(module: ModuleRef, tupleExpr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenTupleExtractGetTuple(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenTupleExtractSetTuple(expr: ExpressionRef, tupleExpr: ExpressionRef): void;
    export function _BinaryenTupleExtractGetIndex(expr: ExpressionRef): Index;
    export function _BinaryenTupleExtractSetIndex(expr: ExpressionRef, index: Index): void;
    export function _BinaryenPop(module: ModuleRef, type: TypeRef): ExpressionRef;
    export function _BinaryenI31New(module: ModuleRef, value: ExpressionRef): ExpressionRef;
    export function _BinaryenI31NewGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenI31NewSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenI31Get(module: ModuleRef, i31Expr: ExpressionRef, signed: boolean): ExpressionRef;
    export function _BinaryenI31GetGetI31(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenI31GetSetI31(expr: ExpressionRef, i31Expr: ExpressionRef): void;
    export function _BinaryenI31GetIsSigned(expr: ExpressionRef): boolean;
    export function _BinaryenI31GetSetSigned(expr: ExpressionRef, signed: boolean): void;
    export function _BinaryenCallRef(module: ModuleRef, target: ExpressionRef, operands: ArrayRef<ExpressionRef>, numOperands: Index, type: TypeRef, isReturn: boolean): ExpressionRef;
    export function _BinaryenCallRefGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenCallRefGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallRefSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallRefAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenCallRefInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenCallRefRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenCallRefGetTarget(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenCallRefSetTarget(expr: ExpressionRef, targetExpr: ExpressionRef): void;
    export function _BinaryenCallRefIsReturn(expr: ExpressionRef): boolean;
    export function _BinaryenCallRefSetReturn(expr: ExpressionRef, isReturn: boolean): void;
    export function _BinaryenRefTest(module: ModuleRef, refExpr: ExpressionRef, castType: HeapTypeRef): ExpressionRef;
    export function _BinaryenRefTestGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefTestSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenRefTestGetCastType(expr: ExpressionRef): HeapTypeRef;
    export function _BinaryenRefTestSetCastType(expr: ExpressionRef, castType: HeapTypeRef): void;
    export function _BinaryenRefCast(module: ModuleRef, refExpr: ExpressionRef, intendedType: HeapTypeRef): ExpressionRef;
    export function _BinaryenRefCastGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenRefCastSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenBrOn(module: ModuleRef, op: Op, name: StringRef, ref: ExpressionRef, castType: HeapTypeRef): ExpressionRef;
    export function _BinaryenBrOnGetOp(expr: ExpressionRef): Op;
    export function _BinaryenBrOnSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenBrOnGetName(expr: ExpressionRef): StringRef;
    export function _BinaryenBrOnSetName(expr: ExpressionRef, nameStr: StringRef): void;
    export function _BinaryenBrOnGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenBrOnSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenBrOnGetCastType(expr: ExpressionRef): HeapTypeRef;
    export function _BinaryenBrOnSetCastType(expr: ExpressionRef, castType: HeapTypeRef): void;
    export function _BinaryenStructNew(module: ModuleRef, operands: ArrayRef<ExpressionRef>, numOperands: Index, type: HeapTypeRef): ExpressionRef;
    export function _BinaryenStructNewGetNumOperands(expr: ExpressionRef): Index;
    export function _BinaryenStructNewGetOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenStructNewSetOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenStructNewAppendOperand(expr: ExpressionRef, operandExpr: ExpressionRef): Index;
    export function _BinaryenStructNewInsertOperandAt(expr: ExpressionRef, index: Index, operandExpr: ExpressionRef): void;
    export function _BinaryenStructNewRemoveOperandAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenStructGet(module: ModuleRef, index: Index, ref: ExpressionRef, type: TypeRef, signed: boolean): ExpressionRef;
    export function _BinaryenStructGetGetIndex(expr: ExpressionRef): Index;
    export function _BinaryenStructGetSetIndex(expr: ExpressionRef, index: Index): void;
    export function _BinaryenStructGetGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStructGetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStructGetIsSigned(expr: ExpressionRef): boolean;
    export function _BinaryenStructGetSetSigned(expr: ExpressionRef, signed: boolean): void;
    export function _BinaryenStructSet(module: ModuleRef, index: Index, ref: ExpressionRef, value: ExpressionRef): ExpressionRef;
    export function _BinaryenStructSetGetIndex(expr: ExpressionRef): Index;
    export function _BinaryenStructSetSetIndex(expr: ExpressionRef, index: Index): void;
    export function _BinaryenStructSetGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStructSetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStructSetGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStructSetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenArrayNew(module: ModuleRef, type: HeapTypeRef, size: ExpressionRef, init: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayNewGetInit(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayNewSetInit(expr: ExpressionRef, initExpr: ExpressionRef): void;
    export function _BinaryenArrayNewGetSize(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayNewSetSize(expr: ExpressionRef, sizeExpr: ExpressionRef): void;
    // TODO: BinaryenArrayNewSeg
    export function _BinaryenArrayNewFixed(module: ModuleRef, type: HeapTypeRef, values: ArrayRef<ExpressionRef>, numValues: Index): ExpressionRef;
    export function _BinaryenArrayNewFixedGetNumValues(expr: ExpressionRef): Index;
    export function _BinaryenArrayNewFixedGetValueAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenArrayNewFixedSetValueAt(expr: ExpressionRef, index: Index, valueExpr: ExpressionRef): void;
    export function _BinaryenArrayNewFixedAppendValue(expr: ExpressionRef, valueExpr: ExpressionRef): Index;
    export function _BinaryenArrayNewFixedInsertValueAt(expr: ExpressionRef, index: Index, valueExpr: ExpressionRef): void;
    export function _BinaryenArrayNewFixedRemoveValueAt(expr: ExpressionRef, index: Index): ExpressionRef;
    export function _BinaryenArrayGet(module: ModuleRef, ref: ExpressionRef, index: ExpressionRef, type: TypeRef, signed: boolean): ExpressionRef;
    export function _BinaryenArrayGetGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayGetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenArrayGetGetIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayGetSetIndex(expr: ExpressionRef, indexExpr: ExpressionRef): void;
    export function _BinaryenArrayGetIsSigned(expr: ExpressionRef): boolean;
    export function _BinaryenArrayGetSetSigned(expr: ExpressionRef, signed: boolean): void;
    export function _BinaryenArraySet(module: ModuleRef, ref: ExpressionRef, index: ExpressionRef, value: ExpressionRef): ExpressionRef;
    export function _BinaryenArraySetGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArraySetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenArraySetGetIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArraySetSetIndex(expr: ExpressionRef, indexExpr: ExpressionRef): void;
    export function _BinaryenArraySetGetValue(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArraySetSetValue(expr: ExpressionRef, valueExpr: ExpressionRef): void;
    export function _BinaryenArrayLen(module: ModuleRef, ref: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayLenGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayLenSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenArrayCopy(module: ModuleRef, destRef: ExpressionRef, destIndex: ExpressionRef, srcRef: ExpressionRef, srcIndex: ExpressionRef, length: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopyGetDestRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopySetDestRef(expr: ExpressionRef, destRefExpr: ExpressionRef): void;
    export function _BinaryenArrayCopyGetDestIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopySetDestIndex(expr: ExpressionRef, destIndexExpr: ExpressionRef): void;
    export function _BinaryenArrayCopyGetSrcRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopySetSrcRef(expr: ExpressionRef, srcRefExpr: ExpressionRef): void;
    export function _BinaryenArrayCopyGetSrcIndex(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopySetSrcIndex(expr: ExpressionRef, srcIndexExpr: ExpressionRef): void;
    export function _BinaryenArrayCopyGetLength(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenArrayCopySetLength(expr: ExpressionRef, lengthExpr: ExpressionRef): void;
    // TODO: BinaryenArrayFill
    // TODO: BinaryenArrayInit
    export function _BinaryenStringNew(module: ModuleRef, op: Op, ptr: ExpressionRef, length: ExpressionRef, start: ExpressionRef, end: ExpressionRef, isTry: boolean): ExpressionRef;
    export function _BinaryenStringNewGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringNewSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringNewGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringNewSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenStringNewGetLength(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringNewSetLength(expr: ExpressionRef, lengthExpr: ExpressionRef): void;
    export function _BinaryenStringNewGetStart(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringNewSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void;
    export function _BinaryenStringNewGetEnd(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringNewSetEnd(expr: ExpressionRef, endExpr: ExpressionRef): void;
    export function _BinaryenStringNewIsTry(expr: ExpressionRef): boolean;
    export function _BinaryenStringNewSetTry(expr: ExpressionRef, isTry: boolean): void;
    export function _BinaryenStringConst(module: ExpressionRef, name: StringRef): ExpressionRef;
    export function _BinaryenStringConstGetString(expr: ExpressionRef): StringRef;
    export function _BinaryenStringConstSetString(expr: ExpressionRef, string: StringRef): void;
    export function _BinaryenStringMeasure(module: ExpressionRef, op: Op, ref: ExpressionRef): ExpressionRef;
    export function _BinaryenStringMeasureGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringMeasureSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringMeasureGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringMeasureSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringEncode(module: ExpressionRef, op: Op, ref: ExpressionRef, ptr: ExpressionRef, start: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEncodeGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringEncodeSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringEncodeGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEncodeSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringEncodeGetPtr(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEncodeSetPtr(expr: ExpressionRef, ptrExpr: ExpressionRef): void;
    export function _BinaryenStringEncodeGetStart(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEncodeSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void;
    export function _BinaryenStringConcat(module: ExpressionRef, left: ExpressionRef, right: ExpressionRef): ExpressionRef;
    export function _BinaryenStringConcatGetLeft(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringConcatSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void;
    export function _BinaryenStringConcatGetRight(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringConcatSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void;
    export function _BinaryenStringEq(module: ExpressionRef, op: Op, left: ExpressionRef, right: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEqGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringEqSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringEqGetLeft(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEqSetLeft(expr: ExpressionRef, leftExpr: ExpressionRef): void;
    export function _BinaryenStringEqGetRight(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringEqSetRight(expr: ExpressionRef, rightExpr: ExpressionRef): void;
    export function _BinaryenStringAs(module: ExpressionRef, op: Op, ref: ExpressionRef): ExpressionRef;
    export function _BinaryenStringAsGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringAsSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringAsGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringAsSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringWTF8Advance(module: ExpressionRef, ref: ExpressionRef, pos: ExpressionRef, bytes: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF8AdvanceGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF8AdvanceSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringWTF8AdvanceGetPos(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF8AdvanceSetPos(expr: ExpressionRef, posExpr: ExpressionRef): void;
    export function _BinaryenStringWTF8AdvanceGetBytes(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF8AdvanceSetBytes(expr: ExpressionRef, bytesExpr: ExpressionRef): void;
    export function _BinaryenStringWTF16Get(module: ExpressionRef, ref: ExpressionRef, pos: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF16GetGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF16GetSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringWTF16GetGetPos(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringWTF16GetSetPos(expr: ExpressionRef, posExpr: ExpressionRef): void;
    export function _BinaryenStringIterNext(module: ExpressionRef, ref: ExpressionRef): ExpressionRef;
    export function _BinaryenStringIterNextGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringIterNextSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringIterMove(module: ExpressionRef, op: Op, ref: ExpressionRef, num: ExpressionRef): ExpressionRef;
    export function _BinaryenStringIterMoveGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringIterMoveSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringIterMoveGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringIterMoveSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringIterMoveGetNum(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringIterMoveSetNum(expr: ExpressionRef, numExpr: ExpressionRef): void;
    export function _BinaryenStringSliceWTF(module: ExpressionRef, op: Op, ref: ExpressionRef, start: ExpressionRef, end: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceWTFGetOp(expr: ExpressionRef): Op;
    export function _BinaryenStringSliceWTFSetOp(expr: ExpressionRef, op: Op): void;
    export function _BinaryenStringSliceWTFGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceWTFSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringSliceWTFGetStart(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceWTFSetStart(expr: ExpressionRef, startExpr: ExpressionRef): void;
    export function _BinaryenStringSliceWTFGetEnd(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceWTFSetEnd(expr: ExpressionRef, endExpr: ExpressionRef): void;
    export function _BinaryenStringSliceIter(module: ExpressionRef, ref: ExpressionRef, num: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceIterGetRef(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceIterSetRef(expr: ExpressionRef, refExpr: ExpressionRef): void;
    export function _BinaryenStringSliceIterGetNum(expr: ExpressionRef): ExpressionRef;
    export function _BinaryenStringSliceIterSetNum(expr: ExpressionRef, numExpr: ExpressionRef): void;
    export function _BinaryenAddFunction(module: ModuleRef, name: StringRef, params: TypeRef, results: TypeRef, varTypes: ArrayRef<TypeRef>, numVarTypes: Index, body: ExpressionRef): FunctionRef;
    export function _BinaryenGetFunction(module: ModuleRef, name: StringRef): FunctionRef;
    export function _BinaryenRemoveFunction(module: ModuleRef, name: StringRef): void;
    export function _BinaryenGetNumFunctions(module: ModuleRef): Index;
    export function _BinaryenGetFunctionByIndex(module: ModuleRef, index: Index): FunctionRef;
    export function _BinaryenFunctionGetName(func: FunctionRef): StringRef;
    export function _BinaryenFunctionGetParams(func: FunctionRef): TypeRef;
    export function _BinaryenFunctionGetResults(func: FunctionRef): TypeRef;
    export function _BinaryenFunctionGetNumVars(func: FunctionRef): Index;
    export function _BinaryenFunctionGetVar(func: FunctionRef, index: Index): TypeRef;
    export function _BinaryenFunctionGetNumLocals(func: FunctionRef): Index;
    export function _BinaryenFunctionHasLocalName(func: FunctionRef, index: Index): boolean;
    export function _BinaryenFunctionGetLocalName(func: FunctionRef, index: Index): StringRef;
    export function _BinaryenFunctionSetLocalName(func: FunctionRef, index: Index, name: StringRef): void;
    export function _BinaryenFunctionGetBody(func: FunctionRef): ExpressionRef;
    export function _BinaryenFunctionSetBody(func: FunctionRef, bodyExpr: ExpressionRef): void;
    export function _BinaryenFunctionOptimize(func: FunctionRef, module: ModuleRef): void;
    export function _BinaryenFunctionRunPasses(func: FunctionRef, module: ModuleRef, passes: ArrayRef<StringRef>, numPasses: Index): void;
    export function _BinaryenFunctionSetDebugLocation(func: FunctionRef, expr: ExpressionRef, fileIndex: Index, lineNumber: Index, columnNumber: Index): void;
    export function _BinaryenAddFunctionImport(module: ModuleRef, internalName: StringRef, externalModuleName: StringRef, externalBaseName: StringRef, params: TypeRef, results: TypeRef): void;
    export function _BinaryenAddTableImport(module: ModuleRef, internalName: StringRef, externalModuleName: StringRef, externalBaseName: StringRef): void;
    export function _BinaryenAddMemoryImport(module: ModuleRef, internalName: StringRef, externalModuleName: StringRef, externalBaseName: StringRef, shared: boolean): void;
    export function _BinaryenAddGlobalImport(module: ModuleRef, internalName: StringRef, externalModuleName: StringRef, externalBaseName: StringRef, globalType: TypeRef, mutable: boolean): void;
    export function _BinaryenAddTagImport(module: ModuleRef, internalName: StringRef, externalModuleName: StringRef, externalBaseName: StringRef, params: TypeRef, results: TypeRef): void;
    export function _BinaryenAddFunctionExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef;
    export function _BinaryenAddTableExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef;
    export function _BinaryenAddMemoryExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef;
    export function _BinaryenAddGlobalExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef;
    export function _BinaryenAddTagExport(module: ModuleRef, internalName: StringRef, externalName: StringRef): ExportRef;
    export function _BinaryenGetExport(module: ModuleRef, externalName: StringRef): ExportRef;
    export function _BinaryenRemoveExport(module: ModuleRef, externalName: StringRef): void;
    export function _BinaryenGetNumExports(module: ModuleRef): Index;
    export function _BinaryenGetExportByIndex(module: ModuleRef, index: Index): ExportRef;
    export function _BinaryenExportGetKind(ref: ExportRef): ExternalKind;
    export function _BinaryenExportGetName(ref: ExportRef): StringRef;
    export function _BinaryenExportGetValue(ref: ExportRef): StringRef;
    export function _BinaryenAddGlobal(module: ModuleRef, name: StringRef, type: TypeRef, mutable: boolean, init: ExpressionRef): GlobalRef;
    export function _BinaryenGetGlobal(module: ModuleRef, name: StringRef): GlobalRef;
    export function _BinaryenRemoveGlobal(module: ModuleRef, name: StringRef): void;
    export function _BinaryenGetNumGlobals(module: ModuleRef): Index;
    export function _BinaryenGetGlobalByIndex(module: ModuleRef, index: Index): GlobalRef;
    export function _BinaryenGlobalGetName(global: GlobalRef): StringRef;
    export function _BinaryenGlobalGetType(global: GlobalRef): TypeRef;
    export function _BinaryenGlobalIsMutable(global: GlobalRef): boolean;
    export function _BinaryenGlobalGetInitExpr(global: GlobalRef): ExpressionRef;
    export function _BinaryenAddTag(module: ModuleRef, name: StringRef, params: TypeRef, results: TypeRef): TagRef;
    export function _BinaryenGetTag(module: ModuleRef, name: StringRef): TagRef;
    export function _BinaryenRemoveTag(module: ModuleRef, name: StringRef): void;
    export function _BinaryenTagGetName(tag: TagRef): StringRef;
    export function _BinaryenTagGetParams(tag: TagRef): TypeRef;
    export function _BinaryenTagGetResults(tag: TagRef): TypeRef;
    export function _BinaryenAddTable(module: ModuleRef, name: StringRef, initial: Index, maximum: Index, type: TypeRef): TableRef;
    export function _BinaryenRemoveTable(module: ModuleRef, table: StringRef): void;
    export function _BinaryenGetNumTables(module: ModuleRef): Index;
    export function _BinaryenGetTable(module: ModuleRef, name: StringRef): TableRef;
    export function _BinaryenGetTableByIndex(module: ModuleRef, index: Index): TableRef;
    export function _BinaryenTableGetName(table: TableRef): StringRef;
    export function _BinaryenTableSetName(table: TableRef, name: StringRef): void;
    export function _BinaryenTableGetInitial(table: TableRef): Index;
    export function _BinaryenTableSetInitial(table: TableRef, initial: Index): void;
    export function _BinaryenTableHasMax(table: TableRef): boolean;
    export function _BinaryenTableGetMax(table: TableRef): Index;
    export function _BinaryenTableSetMax(table: TableRef, max: Index): void;
    export function _BinaryenAddActiveElementSegment(module: ModuleRef, table: StringRef, name: StringRef, funcNames: ArrayRef<StringRef>, numFuncNames: Index, offset: ExpressionRef): ElementSegmentRef;
    export function _BinaryenAddPassiveElementSegment(module: ModuleRef, name: StringRef, funcNames: ArrayRef<StringRef>, numFuncNames: Index): ElementSegmentRef;
    export function _BinaryenRemoveElementSegment(module: ModuleRef, name: StringRef): void;
    export function _BinaryenGetNumElementSegments(module: ModuleRef, name: StringRef): Index;
    export function _BinaryenGetElementSegment(module: ModuleRef, name: StringRef): ElementSegmentRef;
    export function _BinaryenGetElementSegmentByIndex(module: ModuleRef, index: Index): ElementSegmentRef;
    export function _BinaryenSetMemory(module: ModuleRef, initial: Index, maximum: Index, exportName: StringRef, segments: ArrayRef<ArrayRef<number>>, segmentPassive: ArrayRef<boolean>, segmentOffsets: ArrayRef<number>, segmentSizes: ArrayRef<number>, numSegments: Index, shared: boolean, memory64: boolean, name: StringRef): void;
    export function _BinaryenGetNumMemorySegments(module: ModuleRef): Index;
    export function _BinaryenGetMemorySegmentByteOffset(module: ModuleRef, index: Index): number;
    export function _BinaryenGetMemorySegmentByteLength(module: ModuleRef, id: Index): number;
    export function _BinaryenCopyMemorySegmentData(module: ModuleRef, id: Index, buffer: ArrayRef<number>): void;
    export function _BinaryenSetStart(module: ModuleRef, start: FunctionRef): void;
    export function _BinaryenModuleParse(text: StringRef): ModuleRef;
    export function _BinaryenModulePrint(module: ModuleRef): void;
    export function _BinaryenModulePrintAsmjs(module: ModuleRef): void;
    export function _BinaryenModuleValidate(module: ModuleRef): number;
    export function _BinaryenModuleOptimize(module: ModuleRef): void;
    export function _BinaryenModuleRunPasses(module: ModuleRef, passes: ArrayRef<StringRef>, numPasses: Index): void;
    export function _BinaryenModuleAutoDrop(module: ModuleRef): void;
    export function _BinaryenSizeofAllocateAndWriteResult(): number;
    export function _BinaryenModuleAllocateAndWrite(resultOut: number, module: ModuleRef, sourceMapUrl: StringRef): void;
    export function _BinaryenModuleAllocateAndWriteText(module: ModuleRef): StringRef;
    export function _BinaryenModuleAllocateAndWriteStackIR(module: ModuleRef, optimize: boolean): StringRef;
    export function _BinaryenModuleRead(input: ArrayRef<number>, inputSize: number): ModuleRef;
    export function _BinaryenModuleInterpret(module: ModuleRef): void;
    export function _BinaryenModuleAddDebugInfoFileName(module: ModuleRef, filename: StringRef): Index;
    export function _BinaryenModuleGetDebugInfoFileName(module: ModuleRef, index: Index): StringRef;
    export function _BinaryenModuleGetFeatures(module: ModuleRef): FeatureFlags;
    export function _BinaryenModuleSetFeatures(module: ModuleRef, featureFlags: FeatureFlags): void;
    export function _BinaryenAddCustomSection(module: ModuleRef, name: StringRef, contents: ArrayRef<number>, contentsSize: Index): void;
    export function _BinaryenExpressionGetSideEffects(expr: ExpressionRef, module: ModuleRef): SideEffects;
    export function _RelooperCreate(module: ModuleRef): number;
    export function _RelooperAddBlock(relooper: number, code: ExpressionRef): number;
    export function _RelooperAddBranch(from: number, to: number, condition: ExpressionRef, code: ExpressionRef): void;
    export function _RelooperAddBlockWithSwitch(relooper: number, code: ExpressionRef, condition: ExpressionRef): number;
    export function _RelooperAddBranchForSwitch(from: number, to: number, indexes: ArrayRef<Index>, numIndexes: Index, code: ExpressionRef): void;
    export function _RelooperRenderAndDispose(relooper: number, entry: number, labelHelper: Index): ExpressionRef;
    export function _ExpressionRunnerCreate(module: ModuleRef, flags: ExpressionRunnerFlags, maxDepth: Index, maxLoopIterations: Index): ExpressionRunnerRef;
    export function _ExpressionRunnerSetLocalValue(runner: ExpressionRunnerRef, index: Index, value: ExpressionRef): boolean;
    export function _ExpressionRunnerSetGlobalValue(runner: ExpressionRunnerRef, name: StringRef, value: ExpressionRef): boolean;
    export function _ExpressionRunnerRunAndDispose(runner: ExpressionRunnerRef, expr: ExpressionRef): ExpressionRef;
    export function _TypeBuilderCreate(size: Index): TypeBuilderRef;
    export function _TypeBuilderGrow(builder: TypeBuilderRef, count: Index): void;
    export function _TypeBuilderGetSize(builder: TypeBuilderRef): Index;
    export function _TypeBuilderSetBasicHeapType(builder: TypeBuilderRef, index: Index, basicHeapType: HeapTypeRef): void;
    export function _TypeBuilderSetSignatureType(builder: TypeBuilderRef, index: Index, paramTypes: TypeRef, resultTypes: TypeRef): void;
    export function _TypeBuilderSetStructType(builder: TypeBuilderRef, index: Index, fieldTypes: ArrayRef<TypeRef>, fieldPackedTypes: ArrayRef<PackedType>, fieldMutables: ArrayRef<boolean>, numFields: number): void;
    export function _TypeBuilderSetArrayType(builder: TypeBuilderRef, index: Index, elementType: TypeRef, elementPackedTyype: PackedType, elementMutable: boolean): void;
    export function _TypeBuilderIsBasic(builder: TypeBuilderRef, index: Index): boolean;
    export function _TypeBuilderGetBasic(builder: TypeBuilderRef, index: Index): HeapTypeRef;
    export function _TypeBuilderGetTempHeapType(builder: TypeBuilderRef, index: Index): HeapTypeRef;
    export function _TypeBuilderGetTempTupleType(builder: TypeBuilderRef, types: ArrayRef<TypeRef>, numTypes: Index): TypeRef;
    export function _TypeBuilderGetTempRefType(builder: TypeBuilderRef, heapType: HeapTypeRef, nullable: boolean): TypeRef;
    export function _TypeBuilderSetSubType(builder: TypeBuilderRef, index: Index, superType: HeapTypeRef): void;
    export function _TypeBuilderCreateRecGroup(builder: TypeBuilderRef, index: Index, length: Index): void;
    export function _TypeBuilderBuildAndDispose(builder: TypeBuilderRef, heapTypes: ArrayRef<HeapTypeRef>, errorIndex: Pointer<Index>, errorReason: Pointer<TypeBuilderErrorReason>): boolean;
    export function _BinaryenModuleSetTypeName(module: ModuleRef, heapType: HeapTypeRef, name: StringRef): void;
    export function _BinaryenModuleSetFieldName(module: ModuleRef, heapType: HeapTypeRef, index: Index, name: StringRef): void;
    export function _BinaryenGetOptimizeLevel(): number;
    export function _BinaryenSetOptimizeLevel(level: number): void;
    export function _BinaryenGetShrinkLevel(): number;
    export function _BinaryenSetShrinkLevel(level: number): void;
    export function _BinaryenGetDebugInfo(): boolean;
    export function _BinaryenSetDebugInfo(on: boolean): void;
    export function _BinaryenGetLowMemoryUnused(): boolean;
    export function _BinaryenSetLowMemoryUnused(on: boolean): void;
    export function _BinaryenGetZeroFilledMemory(): boolean;
    export function _BinaryenSetZeroFilledMemory(on: boolean): void;
    export function _BinaryenGetFastMath(): boolean;
    export function _BinaryenSetFastMath(on: boolean): void;
    export function _BinaryenGetPassArgument(key: StringRef): StringRef;
    export function _BinaryenSetPassArgument(key: StringRef, value: StringRef): void;
    export function _BinaryenClearPassArguments(): void;
    export function _BinaryenGetAlwaysInlineMaxSize(): Index;
    export function _BinaryenSetAlwaysInlineMaxSize(size: Index): void;
    export function _BinaryenGetFlexibleInlineMaxSize(): Index;
    export function _BinaryenSetFlexibleInlineMaxSize(size: Index): void;
    export function _BinaryenGetOneCallerInlineMaxSize(): Index;
    export function _BinaryenSetOneCallerInlineMaxSize(size: Index): void;
    export function _BinaryenGetAllowInliningFunctionsWithLoops(): boolean;
    export function _BinaryenSetAllowInliningFunctionsWithLoops(enabled: boolean): void;
    export function _BinaryenGetTypeSystem(): TypeSystem;
    export function _BinaryenSetTypeSystem(typeSystem: TypeSystem): void;
    // Helpers
    export function _malloc(size: number): number;
    export function _free(ptr: number): void;
    export function __i32_store8(ptr: number, value: number): void;
    export function __i32_store16(ptr: number, value: number): void;
    export function __i32_store(ptr: number, value: number): void;
    export function __f32_store(ptr: number, value: number): void;
    export function __f64_store(ptr: number, value: number): void;
    export function __i32_load8_s(ptr: number): number;
    export function __i32_load8_u(ptr: number): number;
    export function __i32_load16_s(ptr: number): number;
    export function __i32_load16_u(ptr: number): number;
    export function __i32_load(ptr: number): number;
    export function __f32_load(ptr: number): number;
    export function __f64_load(ptr: number): number;
}
/**
 * @fileoverview Collections glue code for TypeScript.
 * @license Apache-2.0
 */
declare function Map_keys<K, V>(map: Map<K, V>): K[];
declare function Map_values<K, V>(map: Map<K, V>): V[];
declare function Set_values<V>(set: Set<V>): V[];
/**
 * @fileoverview Floating point glue code for TypeScript.
 * @license Apache-2.0
 */
declare function f32_as_i32(value: number): number;
declare function i32_as_f32(value: number): number;
declare function f64_as_i64(value: number): i64;
declare function i64_as_f64(value: i64): number;
/**
 * @fileoverview 64-bit integer glue code for TypeScript.
 * @license Apache-2.0
 */
declare type i64 = {
    __Long__: true;
}; // opaque
declare const i64_zero: i64;
declare const i64_one: i64;
declare const i64_neg_one: i64;
declare const i64_minimum: i64;
declare const i64_maximum: i64;
declare function i64_is(value: unknown): value is i64;
declare function i64_new(lo: number, hi?: number): i64;
declare function i64_low(value: i64): number;
declare function i64_high(value: i64): number;
declare function i64_not(value: i64): i64;
declare function i64_neg(value: i64): i64;
declare function i64_clz(value: i64): number;
declare function i64_ctz(value: i64): number;
declare function i64_add(left: i64, right: i64): i64;
declare function i64_sub(left: i64, right: i64): i64;
declare function i64_mul(left: i64, right: i64): i64;
declare function i64_pow(left: i64, right: i64): i64;
declare function i64_div(left: i64, right: i64): i64;
declare function i64_div_u(left: i64, right: i64): i64;
declare function i64_rem(left: i64, right: i64): i64;
declare function i64_rem_u(left: i64, right: i64): i64;
declare function i64_and(left: i64, right: i64): i64;
declare function i64_or(left: i64, right: i64): i64;
declare function i64_xor(left: i64, right: i64): i64;
declare function i64_shl(left: i64, right: i64): i64;
declare function i64_shr(left: i64, right: i64): i64;
declare function i64_shr_u(left: i64, right: i64): i64;
declare function i64_eq(left: i64, right: i64): boolean;
declare function i64_ne(left: i64, right: i64): boolean;
declare function i64_ge(left: i64, right: i64): boolean;
declare function i64_ge_u(left: i64, right: i64): boolean;
declare function i64_gt(left: i64, right: i64): boolean;
declare function i64_gt_u(left: i64, right: i64): boolean;
declare function i64_le(left: i64, right: i64): boolean;
declare function i64_le_u(left: i64, right: i64): boolean;
declare function i64_lt(left: i64, right: i64): boolean;
declare function i64_lt_u(left: i64, right: i64): boolean;
declare function i64_align(value: i64, alignment: number): i64;
declare function i64_signbit(value: i64): boolean;
declare function i64_is_i8(value: i64): boolean;
declare function i64_is_i16(value: i64): boolean;
declare function i64_is_i32(value: i64): boolean;
declare function i64_is_u8(value: i64): boolean;
declare function i64_is_u16(value: i64): boolean;
declare function i64_is_u32(value: i64): boolean;
declare function i64_is_bool(value: i64): boolean;
declare function i64_is_f32(value: i64): boolean;
declare function i64_is_f64(value: i64): boolean;
declare function i64_to_f32(value: i64): number;
declare function i64_to_f64(value: i64): number;
declare function i64_to_string(value: i64, unsigned?: boolean): string;
declare function i64_clone(value: i64): i64;
