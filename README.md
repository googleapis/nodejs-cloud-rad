# nodejs-cloud-rad
Helper tool to generate documentation for Nodejs client libraries and upload them to [https://cloud.google.com/nodejs/docs/reference](https://cloud.google.com/nodejs/docs/reference). 

## Run locally

Inside a client library, run:

```
npm install
npm install --no-save https://github.com/googleapis/nodejs-cloud-rad#main

npx @google-cloud/cloud-rad 
```

Set `NO_UPLOAD=1` to generate the docfx yaml without attempting to upload to Cloud RAD.

Ignore the warnings about `pip`. There should be a `_devsite` folder with yaml files. Install [`docfx`](https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html#2-use-docfx-as-a-command-line-tool). Clone https://github.com/googleapis/doc-templates outside of the client library. 

Create the following `docfx.json` file inside the client library: 

```
{
  "build": {
    "content": [
      {
        "files": ["**/*.yml"],
        "src": "_devsite/",
        "dest": "api"
      }
    ],
    "dest": "_site",
    "template": [
      "/absolute path to/doc-templates/third_party/docfx/templates/devsite"
    ]
  } 
}
```

Run `docfx --serve`. You should see docs without CSS styling on [localhost:8080/api](localhost:8080/api). 