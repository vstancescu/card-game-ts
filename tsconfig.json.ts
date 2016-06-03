// THE FORMAT OF THE "tsconfig.json" file which should be located in the root of any typescript project

interface TSConfig {
	
	/**
	 * EITHER "files" or "exclude" must be specified.
	 */

	// If no 'files' property is present in a tsconfig.json, the compiler defaults to including all
	// files the containing directory and subdirectories. When a 'files' property is specified, only
	// those files are included.
	files?: string[], 

	// The 'exclude' property cannot be used in conjunction with the 'files' property. If both are
	// specified then the 'files' property takes precedence.
	exclude?: string[],

	// Enable Compile-on-Save for this project.
	compileOnSave?: boolean,

	// Instructs the TypeScript compiler how to compile .ts files
	compilerOptionsDefinition?: {
		
		// The character set of the input files.
		charset?: string,

		// Generates corresponding d.ts files.
		declaration?: boolean,

		// Show diagnostic information.
		diagnostics?: boolean,

		// Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.
		emitBOM?: boolean,

		// Emit a single file with source maps instead of having a separate file.
		inlineSourceMap?: boolean,

		// Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.
		inlineSources?: boolean,

		// Specify JSX code generation: 'preserve' or 'react'.
		jsx?: string,

		// Specifies the object invoked for createElement and __spread when targeting 'react' JSX emit.
		reactNamespace?: string,

		// Print names of files part of the compilation.
		listFiles?: boolean,

		// The locale to use to show error messages, e.g. en-us.
		locale?: string,

		// Specifies the location where debugger should locate map files instead of generated locations.
		// @format: uri
		mapRoot?: string,

		// Specify module code generation: 'none', 'CommonJS', 'Amd', 'System', 'UMD', or 'es2015'.
		// @enum ("commonjs", "amd", "umd", "system", "es6", "es2015", "none")
		module?: string,

		// Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).
		// @enum("CRLF", "LF")
		newLine?: string,

		// Do not emit output.
		noEmit?: boolean,

		// Do not generate custom helper functions like __extends in compiled output.
		noEmitHelpers?: boolean,

		// Do not emit outputs if any type checking errors were reported.
		noEmitOnError?: boolean,

		// Warn on expressions and declarations with an implied 'any' type.
		noImplicitAny?: boolean,

		// Do not include the default library file (lib.d.ts).
		noLib?: boolean,

		// Do not add triple-slash references or module import targets to the list of compiled files.
		noResolve?: boolean,

		//
		skipDefaultLibCheck?: boolean,

		// Concatenate and emit output to single file.
		// @format: uri
		outFile?: string,

		// Redirect output structure to the directory.
		// @format: uri
		outDir?: string,

		// Do not erase const enum declarations in generated code.
		preserveConstEnums?: boolean,

		// Stylize errors and messages using color and context. (experimental)
		pretty?: boolean,

		// Do not emit comments to output.
		removeComments?: boolean,

		// Specifies the root directory of input files. Use to control the output directory structure with --outDir.
		// @format: uri
		rootDir?: string,

		// Unconditionally emit imports for unresolved files.
		isolatedModules?: boolean,

		// Generates corresponding '.map' file.
		sourceMap?: boolean,

		// Specifies the location where debugger should locate TypeScript files instead of source locations.
		// @format: uri
		sourceRoot?: string,

		// Suppress excess property checks for object literals.
		suppressExcessPropertyErrors?: boolean,

		// Suppress noImplicitAny errors for indexing objects lacking index signatures.
		suppressImplicitAnyIndexErrors?: boolean,

		// Do not emit declarations for code that has an '@internal' annotation.
		stripInternal?: boolean,

		// Specify ECMAScript target version. Permitted values are 'es3', 'es5', or 'es2015'.
		// @default: es3
		target?: string,

		// Watch input files.
		watch?: boolean,

		// Enables experimental support for ES7 decorators.
		experimentalDecorators?: boolean,

		// Emit design-type metadata for decorated declarations in source.
		emitDecoratorMetadata?: boolean,

		// Specifies module resolution strategy: 'node' (Node) or 'classic' (TypeScript pre 1.6) .
		// @default: "classic"
		moduleResolution?: string,

		// Do not report errors on unused labels.
		allowUnusedLabels?: boolean,

		// Report error when not all code paths in function return a value.
		noImplicitReturns?: boolean,

		// Report errors for fallthrough cases in switch statement.
		noFallthroughCasesInSwitch?: boolean,

		// Do not report errors on unreachable code.
		allowUnreachableCode?: boolean,

		// Disallow inconsistently-cased references to the same file.
		forceConsistentCasingInFileNames?: boolean,

		// Allow default imports from modules with no default export. This does not affect code emit, just typechecking.
		allowSyntheticDefaultImports?: boolean,

		// Allow javascript files to be compiled.
		allowJs?: boolean,

		// Do not emit "use strict" directives in module output.
		noImplicitUseStrict?: boolean,

	}

}