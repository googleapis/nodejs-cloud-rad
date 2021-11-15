mkdir yaml
cp fixtures/bigquery.yml yaml
node ../prettyPrint.js
diff fixtures/bigquery.yml-pretty yaml/bigquery.yml

if cmp -s "yaml/bigquery.yml" "fixtures/bigquery.yml-pretty"; then
    printf 'Test passed\n'
else
    printf 'Test failed\n'
fi

