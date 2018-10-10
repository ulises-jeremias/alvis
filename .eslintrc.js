"use strict"

module.exports = {
  // When adding items to this file please check for effects on sub-directories.
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "webextensions": true,
  },
  "globals": {
    "chrome": false,
    "browser": true,
    "module": true,
  },
  "plugins": [
    "json", "promise"
  ],
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    "promise/always-return": 2,
    "promise/catch-or-return": 2,
    "promise/param-names": 2,

    "accessor-pairs": [
      2, {
        "setWithoutGet": true,
        "getWithoutSet": false
      }
    ],
    "array-bracket-spacing": [
      2, "never"
    ],
    "array-callback-return": 2,
    "arrow-body-style": [
      2, "as-needed"
    ],
    "arrow-parens": [
      2, "as-needed"
    ],
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "block-spacing": [
      2, "never"
    ],
    "brace-style": 0,
    "callback-return": 0,
    "camelcase": 0,
    "comma-spacing": 2,
    "comma-style": 2,
    "complexity": [
      2, {
        "max": 20
      }
    ],
    "computed-property-spacing": [
      2, "never"
    ],
    "consistent-return": 2,
    "consistent-this": [
      2, "use-bind"
    ],
    "constructor-super": 2,
    "curly": [
      2, "all"
    ],
    "default-case": 0,
    "dot-location": [
      2, "property"
    ],
    "dot-notation": 2,
    "eol-last": 2,
    "eqeqeq": 2,
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [
      2, {
        "before": false,
        "after": false
      }
    ],
    "global-require": 0,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [
      2,
      2, {
        "SwitchCase": 1
      }
    ],
    "init-declarations": 0,
    "jsx-quotes": [
      2, "prefer-double"
    ],
    "key-spacing": [
      2, {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": 2,
    "linebreak-style": [
      2, "unix"
    ],
    "lines-around-comment": [
      2, {
        "beforeBlockComment": true,
        "allowObjectStart": true
      }
    ],
    "max-depth": [
      2, 4
    ],
    "max-len": 0,
    "max-lines": 0,
    "max-nested-callbacks": [
      2, 4
    ],
    "max-params": [
      2, 6
    ],
    "max-statements": [
      2, 50
    ],
    "max-statements-per-line": [
      2, {
        "max": 2
      }
    ],
    "multiline-ternary": 0,
    "new-cap": [
      2, {
        "newIsCap": true,
        "capIsNew": false
      }
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 0,
    "newline-per-chained-call": [
      2, {
        "ignoreChainWithDepth": 3
      }
    ],
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 2,
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-confusing-arrow": 2,
    "no-console": 1,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-function": 0,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-label": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implicit-coercion": [
      2, {
        "allow": ["!!"]
      }
    ],
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 0,
    "no-mixed-operators": [
      2, {
        "allowSamePrecedence": true,
        "groups": [
          [
            "&",
            "|",
            "^",
            "~",
            "<<",
            ">>",
            ">>>"
          ],
          [
            "==",
            "!=",
            "===",
            "!==",
            ">",
            ">=",
            "<",
            "<="
          ],
          [
            "&&", "||"
          ],
          [
            "in", "instanceof"
          ]
        ]
      }
    ],
    "no-mixed-requires": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [
      2, {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-native-reassign": 2,
    "no-negated-condition": 0,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-prototype-builtins": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-globals": 2,
    "no-restricted-imports": 2,
    "no-restricted-modules": 2,
    "no-restricted-syntax": 2,
    "no-return-assign": [
      2, "except-parens"
    ],
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0, // TODO: Change to `1`?
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 2,
    "no-tabs": 2,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    /* "no-trailing-spaces": [
      2, {
        "skipBlankLines": false
      }
    ], */
    "no-undef": 0,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unmodified-loop-condition": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-unused-vars": [
      2, {
        "vars": "local",
        "args": "none"
      }
    ],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-concat": 2,
    "no-useless-constructor": 2,
    "no-useless-escape": 2,
    "no-useless-rename": 2,
    "no-var": 2,
    "no-void": 2,
    "no-warning-comments": 0, // TODO: Change to `1`?
    "no-whitespace-before-property": 2,
    "no-with": 2,
    "object-curly-spacing": [
      2, "never"
    ],
    "object-property-newline": [
      2, {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "object-shorthand": [
      2, "always"
    ],
    "one-var": [
      2, "never"
    ],
    "one-var-declaration-per-line": [
      2, "initializations"
    ],
    "operator-assignment": [
      2, "always"
    ],
    "operator-linebreak": [
      2, "after"
    ],
    "padded-blocks": [
      2, "never"
    ],
    "prefer-arrow-callback": [
      "error", {
        "allowNamedFunctions": true
      }
    ],
    "prefer-const": 1,
    "prefer-reflect": 0,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quote-props": [
      2, "consistent"
    ],
    "quotes": [
      2, "double", "avoid-escape"
    ],
    "radix": [
      2, "always"
    ],
    "require-jsdoc": 0,
    "require-yield": 2,
    "rest-spread-spacing": [
      2, "never"
    ],
    "semi": [
      2, "always"
    ],
    "semi-spacing": [
      2, {
        "before": false,
        "after": true
      }
    ],
    "sort-imports": 2,
    "sort-vars": 2,
    "space-before-blocks": [
      2, "always"
    ],
    "space-before-function-paren": [
      2, {
        "anonymous": "never",
        "named": "never"
      }
    ],
    "space-in-parens": [
      2, "never"
    ],
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": [
      2, "always"
    ],
    "strict": 0,
    "template-curly-spacing": [
      2, "never"
    ],
    "unicode-bom": [
      2, "never"
    ],
    "use-isnan": 2,
    "valid-jsdoc": [
      0, {
        "requireReturn": false,
        "requireParamDescription": false,
        "requireReturnDescription": false
      }
    ],
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [
      2, "inside"
    ],
    "wrap-regex": 0,
    "yield-star-spacing": [
      2, "after"
    ],
    "yoda": [2, "never"]
  }
}