# Vue + shadcn type checking reproduction

## To reproduce the bug:

```shell
# Install dependencies
$ yarn

# Run the type checking
$ yarn type-check
```

Current output:

```shell

yarn run v1.22.22
$ vue-tsc --build
src/components/ui/sheet/SheetContent.vue:220:7 - error TS2742: The inferred type of '__VLS_component' cannot be named without a reference to '../../../../node_modules/radix-vue/dist/DismissableLayer'. This is likely not portable. A type annotation is necessary.

220 const __VLS_component = (await import('vue')).defineComponent({
          ~~~~~~~~~~~~~~~

src/components/ui/sheet/SheetContent.vue:220:7 - error TS2742: The inferred type of '__VLS_component' cannot be named without a reference to '../../../../node_modules/radix-vue/dist/DismissableLayer'. This is likely not portable. A type annotation is necessary.

220 const __VLS_component = (await import('vue')).defineComponent({
          ~~~~~~~~~~~~~~~


Found 2 errors.

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
