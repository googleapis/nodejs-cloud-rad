The `nodejs-deploy` directory contains a snapshot of the
[Cloud Deploy repository](https://github.com/googleapis/nodejs-deploy)'s
`release-v1.0.0` branch. The snapshot was captured with the following `git
subtree` command:

```sh
git subtree add --prefix test/fixtures/nodejs-deploy \
    https://github.com/googleapis/nodejs-deploy.git release-v1.0.0 --squash
```

To update this snapshot, run the following command, replacing `GIT_REF` with a
Git reference such as a branch name, tag name, or commit hash:

```sh
git subtree pull --prefix test/fixtures/nodejs-deploy \
    https://github.com/googleapis/nodejs-deploy.git GIT_REF --squash
```
