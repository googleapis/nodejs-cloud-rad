const fs = require('fs');
const path = require("path");
const snapshot = require('snap-shot-it')
const subProcess = require('child_process')

const nodejsDeployDir = path.join(__dirname, "nodejs-deploy")

const executeCmd = cmd => {
  subProcess.execSync(cmd, (err, stdout) => {
    console.log(stdout)
    if (err) { console.error(err) }
  })
}

before(function () {
  // Extend timeout for setup
  this.timeout(75000)

  // Clear existing nodejs-deploy clone
  if (fs.existsSync(nodejsDeployDir)) {
    fs.rmSync(nodejsDeployDir, { recursive: true }, (err) => {
      if (err) { console.error(err) }
    })
  }

  fs.mkdirSync(nodejsDeployDir, (err) => {
    if (err) { console.error(err) }
  });

  // Copy over nodejs-deploy library from Github
  executeCmd("git clone --branch release-v1.0.0 https://github.com/googleapis/nodejs-deploy.git " + nodejsDeployDir)
  // Install local version of cloud-rad command and generate yaml.
  executeCmd("cd " + nodejsDeployDir + "; npm i; npm i ../..; npx @google-cloud/cloud-rad")
})

describe('cloud-rad docfx generator', () => {
  it('generates a toc.yml file', () => {
    let tocYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "toc.yml"), 'utf8')
    snapshot(tocYml)
  })

  it('generates an index.md file', () => {
    let indexMd = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "index.md"), 'utf8')
    snapshot(indexMd)
  })

  it('generates an overview.yml file', () => {
    let overviewYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "overview.yml"), 'utf8')
    snapshot(overviewYml)
  })

  it ('handles example tags', () => {
    let contentYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "deploy", "v1.clouddeployclient.yml"), 'utf8')
    snapshot(contentYml)
  })

  it ('generates enum page', () => {
    let contentYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "deploy", "protos.google.cloud.deploy.v1.executionconfig.executionenvironmentusage.yml"), 'utf8')
    snapshot(contentYml)
  })

  it ('generates interface page', () => {
    let contentYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "deploy", "protos.google.cloud.deploy.v1.release.itargetrender.yml"), 'utf8')
    snapshot(contentYml)
  })

  it ('generates class page', () => {
    let contentYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "deploy", "protos.google.cloud.deploy.v1.approverolloutresponse.yml"), 'utf8')
    snapshot(contentYml)
  })  

  it ('generates dependency pages', () => {
    let contentYml = fs.readFileSync(path.join(nodejsDeployDir, "_devsite", "deploy", "protos.google.rpc.status.yml"), 'utf8')
    snapshot(contentYml)
  })
})
