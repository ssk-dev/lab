export interface ITsLintRule {
  rule: string;
  link: string;
  description: string;
  example: string;
}

export const link: string = 'https://palantir.github.io/tslint/rules/';

export const TsLintRules: ITsLintRule[] = [
  {
    rule: 'adjacent-overload-signatures',
    link: link + 'adjacent-overload-signatures',
    description: 'Enforces function overloads to be consecutive.',
    example: '"adjacent-overload-signatures": [true, {"OPTION_IGNORE_ACCESSORS": true}]'
  },
  {
    rule: 'align',
    link: link + 'align',
    description: 'Enforces vertical alignment.',
    example: '"align": [true, "parameters", "statements"]'
  },
  {
    rule: 'array-type',
    link: link + 'array-type',
    description: 'Requires using either \'T[]\' or \'Array\' for arrays.',
    example: '"array-type": [true, "generic"]'
  },
  {
    rule: 'arrow-parens',
    link: link + 'arrow-parens',
    description: 'Requires parentheses around the parameters of arrow function definitions.',
    example: '"arrow-parens": [true, "ban-single-arg-parens"]'
  },
  {
    rule: 'arrow-return-shorthand',
    link: link + 'arrow-return-shorthand',
    description: 'Suggests to convert () => { return x; } to () => x.',
    example: '"arrow-return-shorthand": true'
  },
  {
    rule: 'await-promise',
    link: link + 'await-promise',
    description: 'Warns for an awaited value that is not a Promise.',
    example: '"await-promise": true'
  },
  {
    rule: 'ban',
    link: link + 'ban',
    description: 'Bans the use of specific functions or global methods.',
    example: '"ban": [\n' +
      ' true,\n' +
      '  "eval",\n' +
      '  {"name": "$", "message": "please don\'t"},\n' +
      '  ["describe", "only"],\n' +
      '  {"name": ["it", "only"], "message": "don\'t focus tests"},\n' +
      '  {\n' +
      '    "name": ["chai", "assert", "equal"],\n' +
      '    "message": "Use \'strictEqual\' instead."\n' +
      '  },\n' +
      '  {"name": ["*", "forEach"], "message": "Use a regular for loop instead."},\n' +
      '  {"name": ["*", "_id", "toString"], "message": "Use \'toHexString\' instead."}\n' +
      ']'
  },
  {
    rule: 'ban-comma-operator',
    link: link + 'ban-comma-operator',
    description: 'Disallows the comma operator to be used.',
    example: '"ban-comma-operator": true'
  },
  {
    rule: 'ban-ts-ignore',
    link: link + 'ban-ts-ignore',
    description: 'Bans “// @ts-ignore” comments from being used.',
    example: '"ban-ts-ignore": true'
  },
  {
    rule: 'ban-types',
    link: link + 'ban-types',
    description: 'Bans specific types from being used. Does not ban the corresponding runtime objects from being used.',
    example: '"ban-types": [true, ["Object", "Use {} instead."], ["String"]]'
  },
  {
    rule: 'binary-expression-operand-order',
    link: link + 'binary-expression-operand-order',
    description: 'In a binary expression, a literal should always be on the right-hand side if possible. For example, prefer ‘x + 1’ over ‘1 + x’.',
    example: '"binary-expression-operand-order": true'
  },
  {
    rule: 'callable-types',
    link: link + 'callable-types',
    description: 'An interface or literal type with just a call signature can be written as a function type.',
    example: '"callable-types": true'
  },
  {
    rule: 'class-name',
    link: link + 'class-name',
    description: 'Enforces PascalCased class and interface names.',
    example: '"class-name": true'
  },
  {
    rule: 'comment-format',
    link: link + 'comment-format',
    description: 'Enforces formatting rules for single-line comments.',
    example: '"comment-format": [true, "check-lowercase", {"ignore-words": ["TODO", "HACK"]}]'
  },
  {
    rule: 'comment-type',
    link: link + 'comment-type',
    description: 'Allows a limited set of comment types',
    example: '"comment-type": [true, "doc", "singleline", "multiline"]'
  },
  {
    rule: 'completed-docs',
    link: link + 'completed-docs',
    description: 'Enforces JSDoc comments for important items be filled out.',
    example: '"completed-docs": [true, "enums", "functions", "methods"]'
  },
  {
    rule: 'curly',
    link: link + 'curly',
    description: 'Enforces braces for if/for/do/while statements.',
    example: '"curly": [true, "ignore-same-line"]'
  },
  {
    rule: 'cyclomatic-complexity',
    link: link + 'cyclomatic-complexity',
    description: 'Enforces a threshold of cyclomatic complexity.\n' +
      '\n' +
      'Cyclomatic complexity is assessed for each function of any type. A starting value of 0 is assigned and this value is then incremented for every statement which can branch the control flow within the function. The following statements and expressions contribute to cyclomatic complexity:\n' +
      '\n' +
      'catch\n' +
      'if and ? :\n' +
      '|| and && due to short-circuit evaluation\n' +
      'for, for in and for of loops\n' +
      'while and do while loops\n' +
      'case clauses that contain statements',
    example: '"cyclomatic-complexity": [true, 20]'
  },
  {
    rule: 'deprecation',
    link: link + 'deprecation',
    description: 'Warns when deprecated APIs are used.\n' +
      '\n' +
      'Any usage of an identifier with the @deprecated JSDoc annotation will trigger a warning. See http://usejsdoc.org/tags-deprecated.html',
    example: '"deprecation": true'
  },
  {
    rule: 'encoding',
    link: link + 'encoding',
    description: 'Enforces UTF-8 file encoding.',
    example: '"encoding": true'
  },
  {
    rule: 'eofline',
    link: link + 'eofline',
    description: 'Ensures the file ends with a newline. Fix for single-line files is not supported.',
    example: '"eofline": true'
  },
  {
    rule: 'file-header',
    link: link + 'file-header',
    description: 'Enforces a certain header comment for all files, matched by a regular expression.',
    example: '"file-header": [\n' +
      '  true,\n' +
      '  {\n' +
      '    "match": "Copyright \\\\d{4}",\n' +
      '    "allow-single-line-comments": true,\n' +
      '    "default": "Copyright 2018",\n' +
      '    "enforce-trailing-newline": true\n' +
      '  }\n' +
      ']'
  },
  {
    rule: 'file-name-casing',
    link: link + 'file-name-casing',
    description: '',
    example: '"file-name-casing": [true, {".*.ts": "kebab-case", ".tsx": "pascal-case", ".*": "camel-case"}]'
  },
  {
    rule: 'forin',
    link: link + 'forin',
    description: 'Requires a for ... in statement to be filtered with an if statement.',
    example: '"forin": true'
  },
  {
    rule: 'function-constructor',
    link: link + 'function-constructor',
    description: 'Prevents using the built-in Function constructor.',
    example: '"function-constructor": true'
  },
  {
    rule: 'import-blacklist',
    link: link + 'import-blacklist',
    description: 'Disallows importing the specified modules via import and require, or importing specific named exports of the specified modules, or using imports matching specified regular expression patterns.',
    example: '"import-blacklist": [true, "rxjs", "lodash"]'
  },
  {
    rule: 'import-spacing',
    link: link + 'import-spacing',
    description: 'Ensures proper spacing between import statement keywords',
    example: '"import-spacing": true'
  },
  {
    rule: 'increment-decrement',
    link: link + 'increment-decrement',
    description: 'Enforces using explicit += 1 or -= 1 operators.',
    example: '"increment-decrement": [true, "allow-post"]'
  },
  {
    rule: 'indent',
    link: link + 'indent',
    description: 'Enforces indentation with tabs or spaces.',
    example: '"indent": [true, "tabs", 2]'
  },
  {
    rule: 'interface-name',
    link: link + 'interface-name',
    description: 'Requires interface names to begin with a capital \'I\'',
    example: '"interface-name": [true, "always-prefix"]'
  },
  {
    rule: 'interface-over-type-literal',
    link: link + 'interface-over-type-literal',
    description: 'Prefer an interface declaration over a type literal (type T = { ... })',
    example: '"interface-over-type-literal": true'
  },
  {
    rule: 'invalid-void',
    link: link + 'invalid-void',
    description: 'Disallows usage of void type outside of generic or return types. If void is used as return type, it shouldn’t be a part of intersection/union type.',
    example: '"invalid-void": [true, {"allow-generics": ["Promise", "PromiseLike"]}]'
  },
  {
    rule: 'jsdoc-format',
    link: link + 'jsdoc-format',
    description: 'Enforces basic format rules for JSDoc comments.\n' +
      '\n' +
      'The following rules are enforced for JSDoc comments (comments starting with /**):\n' +
      '\n' +
      'each line contains an asterisk and asterisks must be aligned\n' +
      'each asterisk must be followed by either a space or a newline (except for the first and the last)\n' +
      'the only characters before the asterisk on each line must be whitespace characters\n' +
      'one line comments must start with /** and end with */\n' +
      'multiline comments don’t allow text after /** in the first line (with option "check-multiline-start")',
    example: '"jsdoc-format": [true, "check-multiline-start"]'
  },
  {
    rule: 'label-position',
    link: link + 'label-position',
    description: 'Only allows labels in sensible locations.\n' +
      'This rule only allows labels to be on do/for/while/switch statements.',
    example: '"label-position": true'
  },
  {
    rule: 'linebreak-style',
    link: link + 'linebreak-style',
    description: 'Enforces a consistent linebreak style. One of the following options must be provided:\n' +
      '\n' +
      '"LF" requires LF (\\n) linebreaks\n' +
      '"CRLF" requires CRLF (\\r\\n) linebreaks',
    example: '"linebreak-style": [true, "CRLF"]'
  },
  {
    rule: 'match-default-export-name',
    link: link + 'match-default-export-name',
    description: 'Requires that a default import have the same name as the declaration it imports. Does nothing for anonymous default exports.',
    example: '"match-default-export-name": true'
  },
  {
    rule: 'max-classes-per-file',
    link: link + 'max-classes-per-file',
    description: 'A file may not contain more than the specified number of classes',
    example: '"max-classes-per-file": [true, 5, "exclude-class-expressions"]'
  },
  {
    rule: 'max-file-line-count',
    link: link + 'max-file-line-count',
    description: 'Requires files to remain under a certain number of lines',
    example: '"max-file-line-count": [true, 300]'
  },
  {
    rule: 'max-line-length',
    link: link + 'max-line-length',
    description: 'Requires lines to be under a certain max length.',
    example: '"max-line-length": [true, {limit: 120,\n' +
      '    "ignore-pattern": "^import |^export {(.*?)}",\n' +
      '    "check-strings": true,\n' +
      '    "check-regex": true}]'
  },
  {
    rule: 'member-access',
    link: link + 'member-access',
    description: 'Requires explicit visibility declarations for class members.',
    example: '"member-access": [true, "check-accessor"]'
  },
  {
    rule: 'member-ordering',
    link: link + 'member-ordering',
    description: 'Enforces member ordering.',
    example: '"member-ordering": [true, {"order": "public-static-field", "public-instance-field", ...}]'
  },
  {
    rule: 'newline-before-return',
    link: link + 'newline-before-return',
    description: 'Enforces blank line before return when not the only line in the block.',
    example: '"newline-before-return": true'
  },
  {
    rule: 'new-parens',
    link: link + 'new-parens',
    description: 'Requires parentheses when invoking a constructor via the new keyword.',
    example: '"new-parens": true'
  },
  {
    rule: 'newline-per-chained-call',
    link: link + 'newline-per-chained-call',
    description: 'Requires that chained method calls be broken apart onto separate lines.',
    example: '"newline-per-chained-call": true'
  },
  {
    rule: 'no-angle-bracket-type-assertion',
    link: link + 'no-angle-bracket-type-assertion',
    description: 'Requires the use of as Type for type assertions instead of &lt;Type&gt;.',
    example: '"no-angle-bracket-type-assertion": true'
  },
  {
    rule: 'no-any',
    link: link + 'no-any',
    description: 'Disallows usages of any as a type declaration.',
    example: '"no-any": true'
  },
  {
    rule: 'no-arg',
    link: link + 'no-arg',
    description: 'Disallows use of arguments.callee.',
    example: '"no-arg": true'
  },
  {
    rule: 'no-async-without-await',
    link: link + 'no-async-without-await',
    description: 'Functions marked async must contain an await or return statement.',
    example: '"no-async-without-await": true'
  },
  {
    rule: 'no-bitwise',
    link: link + 'no-bitwise',
    description: 'Disallows bitwise operators. Specifically, the following bitwise operators are banned: &, &=, |, |=, ^, ^=, <<, <<=, >>, >>=, >>>, >>>=, and ~. This rule does not ban the use of & and | for intersection and union types.',
    example: '"no-bitwise": true'
  },
  {
    rule: 'no-boolean-literal-compare',
    link: link + 'no-boolean-literal-compare',
    description: 'Warns on comparison to a boolean literal, as in x === true.',
    example: '"no-boolean-literal-compare": true'
  },
  {
    rule: 'no-conditional-assignment',
    link: link + 'no-conditional-assignment',
    description: 'Disallows any type of assignment in conditionals. This applies to do-while, for, if, and while statements and conditional (ternary) expressions.',
    example: '"no-conditional-assignment": true'
  },
  {
    rule: 'no-consecutive-blank-lines',
    link: link + 'no-consecutive-blank-lines',
    description: 'Disallows one or more blank lines in a row.',
    example: '"no-consecutive-blank-lines": [true, 2]'
  },
  {
    rule: 'no-console',
    link: link + 'no-console',
    description: 'Bans the use of specified console methods.',
    example: '"no-console": [true, "log", "error"]'
  },
  {
    rule: 'no-construct',
    link: link + 'no-construct',
    description: 'Disallows access to the constructors of String, Number, and Boolean. Disallows constructor use such as new Number(foo) but does not disallow Number(foo).',
    example: '"no-construct": true'
  },
  {
    rule: 'no-debugger',
    link: link + 'no-debugger',
    description: 'Disallows debugger statements.',
    example: '"no-debugger": true'
  },
  {
    rule: 'no-default-export',
    link: link + 'no-default-export',
    description: 'Disallows default exports in ES6-style modules. Use named exports instead.',
    example: '"no-default-export": true'
  },
  {
    rule: 'no-default-import',
    link: link + 'no-default-import',
    description: 'Disallows importing default members from certain ES6-style modules.\n' +
      '\n' +
      'Import named members instead.',
    example: '"no-default-import": true'
  },
  {
    rule: 'no-duplicate-imports',
    link: link + 'no-duplicate-imports',
    description: 'Disallows multiple import statements from the same module.',
    example: '"no-duplicate-imports": [true, {"allow-namespace-imports": true}]'
  },
  {
    rule: 'no-duplicate-super',
    link: link + 'no-duplicate-super',
    description: 'Warns if ‘super()’ appears twice in a constructor.',
    example: '"no-duplicate-super": true'
  },
  {
    rule: 'no-duplicate-switch-case',
    link: link + 'no-duplicate-switch-case',
    description: 'Prevents duplicate cases in switch statements.',
    example: '"no-duplicate-switch-case": true'
  },
  {
    rule: 'no-duplicate-variable',
    link: link + 'no-duplicate-variable',
    description: 'Disallows duplicate variable declarations in the same block scope. This rule is only useful when using the var keyword - the compiler will detect redeclarations of let and const variables.',
    example: '"no-duplicate-variable": [true, "check-parameters"]'
  },
  {
    rule: 'no-dynamic-delete',
    link: link + 'no-dynamic-delete',
    description: 'Bans usage of the delete operator with computed key expressions.',
    example: '"no-dynamic-delete": true'
  },
  {
    rule: 'no-empty',
    link: link + 'no-empty',
    description: 'Disallows empty blocks. Blocks with a comment inside are not considered empty.',
    example: '"no-empty": [true, "allow-empty-catch", "allow-empty-functions"]'
  },
  {
    rule: 'no-empty-interface',
    link: link + 'no-empty-interface',
    description: 'Forbids empty interfaces.',
    example: '"rules": { "no-empty-interface": true }'
  },
  {
    rule: 'no-eval',
    link: link + 'no-eval',
    description: 'Disallows eval function invocations.',
    example: '"no-eval": true'
  },
  {
    rule: 'no-floating-promises',
    link: link + 'no-floating-promises',
    description: 'Promises returned by functions must be handled appropriately. Unhandled Promises can cause unexpected behavior, such as resolving at unexpected times.',
    example: '"no-floating-promises": true'
  },
  {
    rule: 'no-for-in',
    link: link + 'no-for-in',
    description: 'Ban the usage of for…in statements.',
    example: '"no-for-in": true'
  },
  {
    rule: 'no-for-in-array',
    link: link + 'no-for-in-array',
    description: 'Disallows iterating over an array with a for-in loop.\n' +
      '\n' +
      'A for-in loop (for (var k in o)) iterates over the properties of an Object.\n' +
      '\n' +
      'While it is legal to use for-in loops with array types, it is not common. for-in will iterate over the indices of the array as strings, omitting any “holes” in the array.\n' +
      '\n' +
      'More common is to use for-of, which iterates over the values of an array. If you want to iterate over the indices, alternatives include:\n' +
      '\n' +
      'array.forEach((value, index) => { … }); for (const [index, value] of array.entries()) { … } for (let i = 0; i < array.length; i++) { … }',
    example: '"no-for-in-array": true'
  },
  {
    rule: 'no-implicit-dependencies',
    link: link + 'no-implicit-dependencies',
    description: 'Disallows importing modules that are not listed as dependency in the project’s package.json\n' +
      '\n' +
      'Disallows importing transient dependencies and modules installed above your package’s root directory.',
    example: '"no-implicit-dependencies": [true, ["src", "app"]]'
  },
  {
    rule: 'no-import-side-effect',
    link: link + 'no-import-side-effect',
    description: 'Avoid import statements with side-effect.',
    example: '"no-import-side-effect": [true, {"ignore-module": "(\\\\.html|\\\\.css)$"}]'
  },
  {
    rule: 'no-inferred-empty-object-type',
    link: link + 'no-inferred-empty-object-type',
    description: 'Disallow type inference of {} (empty object type) at function and constructor call sites',
    example: '"no-inferred-empty-object-type": true'
  },
  {
    rule: 'no-internal-module',
    link: link + 'no-internal-module',
    description: 'Disallows internal module',
    example: '"no-internal-module": true'
  },
  {
    rule: 'no-invalid-template-strings',
    link: link + 'no-invalid-template-strings',
    description: 'Warns on use of ${ in non-template strings.',
    example: '"no-invalid-template-strings": true'
  },
  {
    rule: 'no-invalid-this',
    link: link + 'no-invalid-this',
    description: 'Disallows using the this keyword outside of classes.',
    example: '"no-invalid-this": true'
  },
  {
    rule: 'no-irregular-whitespace',
    link: link + 'no-irregular-whitespace',
    description: 'Disallow irregular whitespace within a file, including strings and comments.',
    example: '"no-irregular-whitespace": true'
  },
  {
    rule: 'no-magic-numbers',
    link: link + 'no-magic-numbers',
    description: 'Disallows the use constant number values outside of variable assignments. When no list of allowed values is specified, -1, 0 and 1 are allowed by default.',
    example: '"no-magic-numbers": [true, {"allowed-numbers": [1, 2, 3], "ignore-jsx": true}]'
  },
  {
    rule: 'no-mergeable-namespace',
    link: link + 'no-mergeable-namespace',
    description: 'Disallows mergeable namespaces in the same file.',
    example: '"no-mergeable-namespace": true'
  },
  {
    rule: 'no-misused-new',
    link: link + 'no-misused-new',
    description: 'Warns on apparent attempts to define constructors for interfaces or new for classes.',
    example: '"no-misused-new": true'
  },
  {
    rule: 'no-namespace',
    link: link + 'no-namespace',
    description: 'Disallows use of internal modules and namespaces. This rule still allows the use of declare module ... {}',
    example: '"no-namespace": [true, "allow-declarations"]'
  },
  {
    rule: 'no-non-null-assertion',
    link: link + 'no-non-null-assertion',
    description: 'Disallows non-null assertions using the ! postfix operator.',
    example: '"no-non-null-assertion": true'
  },
  {
    rule: 'no-null-keyword',
    link: link + 'no-null-keyword',
    description: 'Disallows use of the null keyword literal.',
    example: '"no-null-keyword": true'
  },
  {
    rule: 'no-null-undefined-union',
    link: link + 'no-null-undefined-union',
    description: 'Disallows explicitly declared or implicitly returned union types with both null and undefined as members.',
    example: '"no-null-undefined-union": true'
  },
  {
    rule: 'no-object-literal-type-assertion',
    link: link + 'no-object-literal-type-assertion',
    description: 'Forbids an object literal to appear in a type assertion expression. Casting to any or to unknown is still allowed.',
    example: '"no-object-literal-type-assertion": [true, {"allow-arguments": true}]'
  },
  {
    rule: 'no-parameter-properties',
    link: link + 'no-parameter-properties',
    description: 'Disallows parameter properties in class constructors.',
    example: '"no-parameter-properties": true'
  },
  {
    rule: 'no-parameter-reassignment',
    link: link + 'no-parameter-reassignment',
    description: 'Disallows reassigning parameters.',
    example: '"no-parameter-reassignment": true'
  },
  {
    rule: 'no-promise-as-boolean',
    link: link + 'no-promise-as-boolean',
    description: 'Warns for Promises that are used for boolean conditions.\n' +
      '\n' +
      'For the most accurate findings, set "strict": true in your tsconfig.json.\n' +
      '\n' +
      'It’s recommended to enable the following rules as well:\n' +
      '\n' +
      'strict-boolean-expressions\n' +
      'strict-type-predicates\n' +
      'no-floating-promises',
    example: '"no-promise-as-boolean": true'
  },
  {
    rule: 'no-redundant-jsdoc',
    link: link + 'no-redundant-jsdoc',
    description: 'Forbids JSDoc which duplicates TypeScript functionality.',
    example: '"no-redundant-jsdoc": true'
  },
  {
    rule: 'no-reference',
    link: link + 'no-reference',
    description: 'Disallows /// &lt;reference path=&quot;foo&quotgt; imports (use ES6-style imports instead).',
    example: '"no-reference": true'
  },
  {
    rule: 'no-reference-import',
    link: link + 'no-reference-import',
    description: 'Don’t &lt;reference types=&quot;foo&quot; /&gt; if you import foo anyway.',
    example: '"no-reference-import": true'
  },
  {
    rule: 'no-require-imports',
    link: link + 'no-require-imports',
    description: 'Disallows invocation of require().',
    example: '"no-require-imports": true'
  },
  {
    rule: 'no-restricted-globals',
    link: link + 'no-restricted-globals',
    description: 'Disallow specific global variables. Disallowing usage of specific global variables can be useful if you want to allow a set of global variables by enabling an environment, but still want to disallow some of those.',
    example: '"no-restricted-globals": [true, "name", "length", "event"]'
  },
  {
    rule: 'no-return-await',
    link: link + 'no-return-await',
    description: 'Disallows unnecessary return await.',
    example: '"no-return-await": true'
  },
  {
    rule: 'no-trailing-whitespace',
    link: link + 'no-trailing-whitespace',
    description: 'Disallows trailing whitespace at the end of a line.',
    example: '"no-trailing-whitespace": [true, "ignore-jsdoc"]'
  },
  {
    rule: 'no-unnecessary-callback-wrapper',
    link: link + 'no-unnecessary-callback-wrapper',
    description: 'Replaces x => f(x) with just f. To catch more cases, enable only-arrow-functions and arrow-return-shorthand too.',
    example: '"no-unnecessary-callback-wrapper": true'
  },
  {
    rule: 'no-unnecessary-initializer',
    link: link + 'no-unnecessary-initializer',
    description: 'Forbids a ‘var’/’let’ statement or destructuring initializer to be initialized to ‘undefined’.',
    example: '"no-unnecessary-initializer": true'
  },
  {
    rule: 'no-unnecessary-qualifier',
    link: link + 'no-unnecessary-qualifier',
    description: 'Warns when a namespace qualifier (A.x) is unnecessary.',
    example: '"no-unnecessary-qualifier": true'
  },
  {
    rule: 'no-unnecessary-type-assertion',
    link: link + 'no-unnecessary-type-assertion',
    description: 'Warns if a type assertion does not change the type of an expression.',
    example: '"no-unnecessary-type-assertion": true'
  },
  {
    rule: 'no-shadowed-variable',
    link: link + 'no-shadowed-variable',
    description: 'Disallows shadowing variable declarations.',
    example: '"no-shadowed-variable": [\n' +
      '  true,\n' +
      '  {\n' +
      '    "class": true,\n' +
      '    "enum": true,\n' +
      '    "function": true,\n' +
      '    "interface": false,\n' +
      '    "namespace": true,\n' +
      '    "typeAlias": false,\n' +
      '    "typeParameter": false,\n' +
      '    "underscore": false\n' +
      '  }\n' +
      ']'
  },
  {
    rule: 'no-sparse-arrays',
    link: link + 'no-sparse-arrays',
    description: 'Forbids array literals to contain missing elements.',
    example: '"no-sparse-arrays": true'
  },
  {
    rule: 'no-string-literal',
    link: link + 'no-string-literal',
    description: 'Forbids unnecessary string literal property access. Allows obj["prop-erty"] (can’t be a regular property access). Disallows obj["property"] (should be obj.property).',
    example: '"no-string-literal": true'
  },
  {
    rule: 'no-string-throw',
    link: link + 'no-string-throw',
    description: 'Flags throwing plain strings or concatenations of strings.',
    example: '"no-string-throw": true'
  },
  {
    rule: 'no-submodule-imports',
    link: link + 'no-submodule-imports',
    description: 'Disallows importing any submodule.',
    example: '"no-submodule-imports": [true, "rxjs", "@angular/platform-browser", "@angular/core/testing"]'
  },
  {
    rule: 'no-switch-case-fall-through',
    link: link + 'no-switch-case-fall-through',
    description: 'Disallows falling through case statements.',
    example: '"no-switch-case-fall-through": true'
  },
  {
    rule: 'no-tautology-expression',
    link: link + 'no-tautology-expression',
    description: 'Enforces that relational/equality binary operators does not take two equal variables/literals as operands. Expression like 3 === 3, someVar === someVar, “1” > “1” are either a tautology or contradiction, and will produce an error.',
    example: '"no-tautology-expression": true'
  },
  {
    rule: 'no-this-assignment',
    link: link + 'no-this-assignment',
    description: 'Disallows unnecessary references to this.',
    example: '"no-this-assignment": true'
  },
  {
    rule: 'no-unbound-method',
    link: link + 'no-unbound-method',
    description: 'Warns when a method is used outside of a method call.',
    example: '"no-unbound-method": [true, "ignore-static"]'
  },
  {
    rule: 'no-unnecessary-class',
    link: link + 'no-unnecessary-class',
    description: 'Disallows classes that are not strictly necessary.',
    example: '"no-unnecessary-class": ["allow-empty-class", "allow-constructor-only"]'
  },
  {
    rule: 'no-unsafe-any',
    link: link + 'no-unsafe-any',
    description: 'Warns when using an expression of type ‘any’ in a dynamic way. Uses are only allowed if they would work for {} | null | undefined. Downcasting to unknown is always safe. Type casts and tests are allowed. Expressions that work on all values (such as "" + x) are allowed',
    example: '"no-unsafe-any": true'
  },
  {
    rule: 'no-unsafe-finally',
    link: link + 'no-unsafe-finally',
    description: 'Disallows control flow statements, such as return, continue, break and throws in finally blocks.',
    example: '"no-unsafe-finally": true'
  },
  {
    rule: 'no-unused-expression',
    link: link + 'no-unused-expression',
    description: 'Disallows unused expression statements. Unused expressions are expression statements which are not assignments or function calls (and thus usually no-ops).',
    example: '"no-unused-expression": [true, "allow-fast-null-checks"]'
  },
  {
    rule: 'no-unused-variable',
    link: link + 'no-unused-variable',
    description: 'Disallows unused imports, variables, functions and private class members. Similar to tsc’s –noUnusedParameters and –noUnusedLocals options, but does not interrupt code compilation.\n' +
      '\n' +
      'In addition to avoiding compilation errors, this rule may still be useful if you wish to have tslint automatically remove unused imports, variables, functions, and private class members, when using TSLint’s --fix option.',
    example: '"no-unused-variable": [true, {"ignore-pattern": "^_"}]'
  },
  {
    rule: 'no-use-before-declare',
    link: link + 'no-use-before-declare',
    description: 'Disallows usage of variables before their declaration.\n' +
      '\n' +
      'This rule is primarily useful when using the var keyword since the compiler will automatically detect if a block-scoped let and const variable is used before declaration. Since most modern TypeScript doesn’t use var, this rule is generally discouraged and is kept around for legacy purposes. It is slow to compute, is not enabled in the built-in configuration presets, and should not be used to inform TSLint design decisions.',
    example: '"no-use-before-declare": true'
  },
  {
    rule: 'no-var-keyword',
    link: link + 'no-var-keyword',
    description: 'Disallows usage of the var keyword.\n' +
      '\n' +
      'Use let or const instead.',
    example: '"no-var-keyword": true'
  },
  {
    rule: 'no-var-requires',
    link: link + 'no-var-requires',
    description: 'Disallows the use of require statements except in import statements. In other words, the use of forms such as var module = require("module") are banned. Instead use ES2015-style imports or import foo = require(\'foo\') imports.',
    example: '"no-var-requires": true'
  },
  {
    rule: 'no-void-expression',
    link: link + 'no-void-expression',
    description: 'Requires expressions of type void to appear in statement position.',
    example: '"no-void-expression": true'
  },
  {
    rule: 'number-literal-format',
    link: link + 'number-literal-format',
    description: 'Checks that decimal literals should begin with ‘0.’ instead of just ‘.’, and should not end with a trailing ‘0’.',
    example: '"number-literal-format": true'
  },
  {
    rule: 'object-literal-key-quotes',
    link: link + 'object-literal-key-quotes',
    description: 'Enforces consistent object literal property quote style.\n' +
      '\n' +
      'Object literal property names can be defined in two ways: using literals or using strings. For example, these two objects are equivalent:\n' +
      '\n' +
      'var object1 = { property: true };\n' +
      '\n' +
      'var object2 = { “property”: true };\n' +
      '\n' +
      'In many cases, it doesn’t matter if you choose to use an identifier instead of a string or vice-versa. Even so, you might decide to enforce a consistent style in your code.\n' +
      '\n' +
      'This rules lets you enforce consistent quoting of property names. Either they should always be quoted (default behavior) or quoted only as needed (“as-needed”).',
    example: '"object-literal-key-quotes": [true, "as-needed"]'
  },
  {
    rule: 'object-literal-shorthand',
    link: link + 'object-literal-shorthand',
    description: 'Enforces/disallows use of ES6 object literal shorthand.',
    example: '"object-literal-shorthand": [true, "never"]'
  },
  {
    rule: 'object-literal-sort-keys',
    link: link + 'object-literal-sort-keys',
    description: 'Checks ordering of keys in object literals.\n' +
      '\n' +
      'When using the default alphabetical ordering, additional blank lines may be used to group object properties together while keeping the elements within each group in alphabetical order. To opt out of this use ignore-blank-lines option.',
    example: '"object-literal-sort-keys": [\n' +
      '  true,\n' +
      '  "ignore-blank-lines",\n' +
      '  "ignore-case",\n' +
      '  "locale-compare",\n' +
      '  "match-declaration-order",\n' +
      '  "shorthand-first"\n' +
      ']'
  },
  {
    rule: 'one-line',
    link: link + 'one-line',
    description: 'Requires the specified tokens to be on the same line as the expression preceding them.',
    example: '"one-line": [true, "check-catch", "check-finally", "check-else"]'
  },
  {
    rule: 'one-variable-per-declaration',
    link: link + 'one-variable-per-declaration',
    description: 'Disallows multiple variable definitions in the same declaration statement.',
    example: '"one-variable-per-declaration": [true, "ignore-for-loop"]'
  },
  {
    rule: 'only-arrow-functions',
    link: link + 'only-arrow-functions',
    description: 'Disallows traditional (non-arrow) function expressions. Note that non-arrow functions are allowed if ‘this’ appears somewhere in its body (as such functions cannot be converted to arrow functions).',
    example: '"only-arrow-functions": [true, "allow-declarations", "allow-named-functions"]'
  },
  {
    rule: 'ordered-imports',
    link: link + 'ordered-imports',
    description: 'Requires that import statements be alphabetized and grouped.\n' +
      '\n' +
      'Enforce a consistent ordering for ES6 imports:\n' +
      '\n' +
      'Named imports must be alphabetized (i.e. “import {A, B, C} from “foo”;”)\n' +
      'The exact ordering can be controlled by the named-imports-order option.\n' +
      '“longName as name” imports are ordered by “longName”.\n' +
      'Import sources must be alphabetized within groups, i.e.: import * as foo from “a”; import * as bar from “b”;\n' +
      'Groups of imports are delineated by blank lines. You can use this rule to group imports however you like, e.g. by first- vs. third-party or thematically or you can define groups based upon patterns in import path names.',
    example: '"ordered-imports": true'
  },
  {
    rule: 'prefer-conditional-expression',
    link: link + 'prefer-conditional-expression',
    description: 'Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.',
    example: '"prefer-conditional-expression": [true, "check-else-if"'
  },
  {
    rule: 'prefer-const',
    link: link + 'prefer-const',
    description: 'Requires that variable declarations use const instead of let and var if possible.\n' +
      '\n' +
      'If a variable is only assigned to once when it is declared, it should be declared using ‘const’',
    example: '"prefer-const": true'
  },
  {
    rule: 'prefer-for-of',
    link: link + 'prefer-for-of',
    description: 'Recommends a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.',
    example: '"prefer-for-of": true'
  },
  {
    rule: 'prefer-function-over-method',
    link: link + 'prefer-function-over-method',
    description: 'Warns for class methods that do not use ‘this’.',
    example: '"prefer-function-over-method": [true, "allow-public", "allow-protected"]'
  },
  {
    rule: 'prefer-method-signature',
    link: link + 'prefer-method-signature',
    description: 'Prefer foo(): void over foo: () => void in interfaces and types.',
    example: '"prefer-method-signature": true'
  },
  {
    rule: 'prefer-object-spread',
    link: link + 'prefer-object-spread',
    description: 'Enforces the use of the ES2018 object spread operator over Object.assign() where appropriate.',
    example: '"prefer-object-spread": true'
  },
  {
    rule: 'prefer-readonly',
    link: link + 'prefer-readonly',
    description: 'Requires that private variables are marked as readonly if they’re never modified outside of the constructor. If a private variable is only assigned to in the constructor, it should be declared as readonly.',
    example: '"prefer-readonly": true'
  },
  {
    rule: 'prefer-switch',
    link: link + 'prefer-switch',
    description: 'Prefer a switch statement to an if statement with simple === comparisons.',
    example: '"prefer-switch": [true, {"min-cases": 2}]'
  },
  {
    rule: 'prefer-template',
    link: link + 'prefer-template',
    description: 'Prefer a template expression over string literal concatenation.',
    example: '"prefer-template": [true, "allow-single-concat"]'
  },
  {
    rule: 'prefer-while',
    link: link + 'prefer-while',
    description: 'Prefer while loops instead of for loops without an initializer and incrementor.',
    example: '"prefer-while": true'
  },
  {
    rule: 'promise-function-async',
    link: link + 'promise-function-async',
    description: 'Requires any function or method that returns a promise to be marked async.',
    example: '"promise-function-async": [true, "check-function-declaration", "check-method-declaration"]'
  },
  {
    rule: 'quotemark',
    link: link + 'quotemark',
    description: 'Enforces quote character for string literals.',
    example: '"quotemark": [true, "single", "avoid-escape", "avoid-template"]'
  },
  {
    rule: 'radix',
    link: link + 'radix',
    description: 'Requires the radix parameter to be specified when calling parseInt.',
    example: '"radix": true'
  },
  {
    rule: 'return-undefined',
    link: link + 'return-undefined',
    description: 'Prefer return; in void functions and return undefined; in value-returning functions.',
    example: '"return-undefined": true'
  },
  {
    rule: 'restrict-plus-operands',
    link: link + 'restrict-plus-operands',
    description: 'When adding two variables, operands must both be of type number or of type string.',
    example: '"restrict-plus-operands": true'
  },
  {
    rule: 'semicolon',
    link: link + 'semicolon',
    description: 'Enforces consistent semicolon usage at the end of every statement.',
    example: '"semicolon": [true, "never"]'
  },
  {
    rule: 'space-before-function-paren',
    link: link + 'space-before-function-paren',
    description: 'Require or disallow a space before function parenthesis',
    example: '"space-before-function-paren": [true, {"anonymous": "always", "named": "never", "asyncArrow": "always"}]'
  },
  {
    rule: 'static-this',
    link: link + 'static-this',
    description: 'Ban the use of this in static methods.',
    example: '"static-this": true'
  },
  {
    rule: 'strict-boolean-expressions',
    link: link + 'strict-boolean-expressions',
    description: 'Restricts the types allowed in boolean expressions. By default only booleans are allowed.\n' +
      '\n' +
      'The following nodes are checked:\n' +
      '\n' +
      'Arguments to the !, &&, and || operators\n' +
      'The condition in a conditional expression (cond ? x : y)\n' +
      'Conditions for if, for, while, and do-while statements.',
    example: '"strict-boolean-expressions": [true, "allow-boolean-or-undefined"]'
  },
  {
    rule: 'strict-comparisons',
    link: link + 'strict-comparisons',
    description: 'Only allow comparisons between primitives.',
    example: '"strict-comparisons": true'
  },
  {
    rule: 'strict-string-expressions',
    link: link + 'strict-string-expressions',
    description: 'Disable implicit toString() calls\n' +
      '\n' +
      'Require explicit toString() call for variables used in strings. By default only strings are allowed.\n' +
      '\n' +
      'The following nodes are checked:\n' +
      '\n' +
      'String literals (“foo” + bar)\n' +
      'ES6 templates (foo ${bar})',
    example: '"strict-string-expressions": [true, {"allow-empty-types": true}]'
  },
  {
    rule: 'strict-type-predicates',
    link: link + 'strict-type-predicates',
    description: 'Warns for type predicates that are always true or always false. Works for ‘typeof’ comparisons to constants (e.g. ‘typeof foo === “string”’), and equality comparison to ‘null’/’undefined’. (TypeScript won’t let you compare ‘1 === 2’, but it has an exception for ‘1 === undefined’.) Does not yet work for ‘instanceof’. Does not warn for ‘if (x.y)’ where ‘x.y’ is always truthy. For that, see strict-boolean-expressions.\n' +
      '\n' +
      'This rule requires strictNullChecks to work properly.',
    example: '"strict-type-predicates": true'
  },
  {
    rule: 'switch-default',
    link: link + 'switch-default',
    description: 'Require a default case in all switch statements.',
    example: '"switch-default": true'
  },
  {
    rule: 'switch-final-break',
    link: link + 'switch-final-break',
    description: 'Checks whether the final clause of a switch statement ends in break;.',
    example: '"switch-final-break": [true, "always"]'
  },
  {
    rule: 'trailing-comma',
    link: link + 'trailing-comma',
    description: 'Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.',
    example: '"trailing-comma": [true, {"multiline": "always", "singleline": "never"}]'
  },
  {
    rule: 'triple-equals',
    link: link + 'triple-equals',
    description: 'Requires === and !== in place of == and !=.',
    example: '"triple-equals": [true, "allow-null-check", "allow-undefined-check"]'
  },
  {
    rule: 'typedef',
    link: link + 'typedef',
    description: '"call-signature" checks return type of functions.\n' +
      '"arrow-call-signature" checks return type of arrow functions.\n' +
      '"parameter" checks type specifier of function parameters for non-arrow functions.\n' +
      '"arrow-parameter" checks type specifier of function parameters for arrow functions.\n' +
      '"property-declaration" checks return types of interface properties.\n' +
      '"variable-declaration" checks non-binding variable declarations.\n' +
      '"variable-declaration-ignore-function" ignore variable declarations for non-arrow and arrow functions.\n' +
      '"member-variable-declaration" checks member variable declarations.\n' +
      '"object-destructuring" checks object destructuring declarations.\n' +
      '"array-destructuring" checks array destructuring declarations.',
    example: '"typedef": [true, "call-signature", "parameter", "member-variable-declaration"]'
  },
  {
    rule: 'typedef-whitespace',
    link: link + 'typedef-whitespace',
    description: 'Requires or disallows whitespace for type definitions. Determines if a space is required or not before the colon in a type specifier.',
    example: '"typedef-whitespace": [\n' +
      '  true,\n' +
      '  {\n' +
      '    "call-signature": "nospace",\n' +
      '    "index-signature": "nospace",\n' +
      '    "parameter": "nospace",\n' +
      '    "property-declaration": "nospace",\n' +
      '    "variable-declaration": "nospace"\n' +
      '  },\n' +
      '  {\n' +
      '    "call-signature": "onespace",\n' +
      '    "index-signature": "onespace",\n' +
      '    "parameter": "onespace",\n' +
      '    "property-declaration": "onespace",\n' +
      '    "variable-declaration": "onespace"\n' +
      '  }\n' +
      ']'
  },
  {
    rule: 'type-literal-delimiter',
    link: link + 'type-literal-delimiter',
    description: 'Checks that type literal members are separated by semicolons. Enforces a trailing semicolon for multiline type literals.',
    example: '"type-literal-delimiter": true'
  },
  {
    rule: 'typeof-compare',
    link: link + 'typeof-compare',
    description: 'Makes sure result of typeof is compared to correct string values',
    example: '"typeof-compare": true'
  },
  {
    rule: 'unified-signatures',
    link: link + 'unified-signatures',
    description: 'Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.',
    example: '"unified-signatures": true'
  },
  {
    rule: 'unnecessary-bind',
    link: link + 'unnecessary-bind',
    description: 'Prevents unnecessary and/or misleading scope bindings on functions.',
    example: '"unnecessary-bind": true'
  },
  {
    rule: 'unnecessary-constructor',
    link: link + 'unnecessary-constructor',
    description: 'Prevents blank constructors, as they are redundant.',
    example: '"unnecessary-constructor": [true, {"check-super-calls": true}]'
  },
  {
    rule: 'unnecessary-else',
    link: link + 'unnecessary-else',
    description: 'Disallows else blocks following if blocks ending with a break, continue, return, or throw statement.',
    example: '"unnecessary-else": true'
  },
  {
    rule: 'use-default-type-parameter',
    link: link + 'use-default-type-parameter',
    description: 'Warns if an explicitly specified type argument is the default for that type parameter.',
    example: '"use-default-type-parameter": true'
  },
  {
    rule: 'use-isnan',
    link: link + 'use-isnan',
    description: 'Enforces use of the isNaN() function to check for NaN references instead of a comparison to the NaN constant.',
    example: '"use-isnan": true'
  },
  {
    rule: 'variable-name',
    link: link + 'variable-name',
    description: 'Checks variable names for various errors.',
    example: '"variable-name": {\n' +
      '  "options": [\n' +
      '    "ban-keywords",\n' +
      '    "check-format",\n' +
      '    "allow-leading-underscore",\n' +
      '    "allow-pascal-case"\n' +
      '  ]\n' +
      '}'
  },
  {
    rule: 'whitespace',
    link: link + 'whitespace',
    description: 'Enforces whitespace style conventions.',
    example: '"whitespace": [true, "check-branch", "check-operator", "check-typecast"]'
  }
];
