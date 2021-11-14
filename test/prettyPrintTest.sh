cp fixtures/index.d.ts build
node ../prettyPrint.js
diff fixtures/index.d.ts-pretty build/index.d.ts

if cmp -s "build/index.d.ts" "fixtures/index.d.ts-pretty"; then
    printf 'Test passed\n'
else
    printf 'Test failed\n'
fi