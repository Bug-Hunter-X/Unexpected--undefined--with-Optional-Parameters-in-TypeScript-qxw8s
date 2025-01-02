# Unexpected 'undefined' with Optional Parameters in TypeScript

This example demonstrates an unexpected behavior in TypeScript when dealing with optional parameters.  Explicitly passing `undefined` to an optional parameter results in `undefined` being printed, which might differ from the expected behavior.

## Bug Report

The `printName` function has an optional parameter `name`.  When called without any argument, it prints `undefined`, which is expected. However, when explicitly passing `undefined`, it also prints `undefined`.  One might expect the function to handle it differently, perhaps by providing a default value or throwing an error.

## Solution

The solution involves using a type guard to check for `undefined` and provide a different handling mechanism.