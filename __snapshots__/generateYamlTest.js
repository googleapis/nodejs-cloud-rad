exports['cloud-rad docfx generator generates a toc.yml file 1'] = `
items:
  - name: deploy
    uid: '@google-cloud/deploy!'
    items:
      - name: Quickstart
        homepage: index.md
      - name: Overview
        homepage: overview.html
      - name: CloudDeployClient
        uid: '@google-cloud/deploy!v1.CloudDeployClient:class'
`

exports['cloud-rad docfx generator generates an index.md file 1'] = `
[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use \`python -m synthtool\`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Deploy: Node.js Client](https://github.com/googleapis/nodejs-deploy)

[![release level](https://img.shields.io/badge/release%20level-beta-yellow.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/deploy.svg)](https://www.npmjs.org/package/@google-cloud/deploy)
[![codecov](https://img.shields.io/codecov/c/github/googleapis/nodejs-deploy/main.svg?style=flat)](https://codecov.io/gh/googleapis/nodejs-deploy)




clouddeploy client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/nodejs-deploy/blob/main/CHANGELOG.md).

* [Google Cloud Deploy Node.js Client API Reference][client-docs]
* [Google Cloud Deploy Documentation][product-docs]
* [github.com/googleapis/nodejs-deploy](https://github.com/googleapis/nodejs-deploy)

Read more about the client libraries for Cloud APIs, including the older
Google APIs Client Libraries, in [Client Libraries Explained][explained].

[explained]: https://cloud.google.com/apis/docs/client-libraries-explained

**Table of contents:**


* [Quickstart](#quickstart)
  * [Before you begin](#before-you-begin)
  * [Installing the client library](#installing-the-client-library)
  * [Using the client library](#using-the-client-library)
* [Samples](#samples)
* [Versioning](#versioning)
* [Contributing](#contributing)
* [License](#license)

## Quickstart

### Before you begin

1.  [Select or create a Cloud Platform project][projects].
1.  [Enable billing for your project][billing].
1.  [Enable the Google Cloud Deploy API][enable_api].
1.  [Set up authentication with a service account][auth] so you can access the
    API from your local workstation.

### Installing the client library

\`\`\`bash
npm install @google-cloud/deploy
\`\`\`


### Using the client library

\`\`\`javascript
/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
/**
 *  Required. The parent, which owns this collection of pipelines. Format must be
 *  projects/{project_id}/locations/{location_name}.
 */
// const parent = 'abc123'
/**
 *  The maximum number of pipelines to return. The service may return
 *  fewer than this value. If unspecified, at most 50 pipelines will
 *  be returned. The maximum value is 1000; values above 1000 will be set
 *  to 1000.
 */
// const pageSize = 1234
/**
 *  A page token, received from a previous \`ListDeliveryPipelines\` call.
 *  Provide this to retrieve the subsequent page.
 *  When paginating, all other provided parameters match
 *  the call that provided the page token.
 */
// const pageToken = 'abc123'
/**
 *  Filter builds to be returned. See https://google.aip.dev/160 for more
 *  details.
 */
// const filter = 'abc123'
/**
 *  Field to sort by. See https://google.aip.dev/132#ordering for more details.
 */
// const orderBy = 'abc123'

// Imports the Deploy library
const {CloudDeployClient} = require('@google-cloud/deploy').v1;

// Instantiates a client
const deployClient = new CloudDeployClient();

async function listDeliveryPipelines() {
  // Construct request
  const request = {
    parent,
  };

  // Run request
  const iterable = await deployClient.listDeliveryPipelinesAsync(request);
  for await (const response of iterable) {
    console.log(response);
  }
}

listDeliveryPipelines();

\`\`\`



## Samples

Samples are in the [\`samples/\`](https://github.com/googleapis/nodejs-deploy/tree/main/samples) directory. Each sample's \`README.md\` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Quickstart | [source code](https://github.com/googleapis/nodejs-deploy/blob/main/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/nodejs-deploy&page=editor&open_in_editor=samples/quickstart.js,samples/README.md) |



The [Google Cloud Deploy Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://nodejs.org/en/about/releases/).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed via npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention \`legacy-(version)\`.

_Legacy Node.js versions are supported as a best effort:_

* Legacy versions will not be tested in continuous integration.
* Some security patches may not be able to be backported.
* Dependencies will not be kept up-to-date, and features will not be backported.

#### Legacy tags available

* \`legacy-8\`: install client libraries from this dist-tag for versions
  compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be in **beta**. This means it is expected to be
mostly stable while we work toward a general availability release; however,
complete stability is not guaranteed. We will address issues and requests
against beta libraries with a high priority.




More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/nodejs-deploy/blob/main/CONTRIBUTING.md).

Please note that this \`README.md\`, the \`samples/README.md\`,
and a variety of configuration files in this repository (including \`.nycrc\` and \`tsconfig.json\`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/nodejs-deploy/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/clouddeploy/latest
[product-docs]: https://cloud.google.com/deploy/
[shell_img]: https://gstatic.com/cloudssh/images/open-btn.png
[projects]: https://console.cloud.google.com/project
[billing]: https://support.google.com/cloud/answer/6293499#enable-billing
[enable_api]: https://console.cloud.google.com/flows/enableapi?apiid=clouddeploy.googleapis.com
[auth]: https://cloud.google.com/docs/authentication/getting-started

`

exports['cloud-rad docfx generator generates an overview.yml file 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!'
    name: '@google-cloud/deploy'
    fullName: '@google-cloud/deploy'
    langs:
      - typeScript
    type: package
    children:
      - '@google-cloud/deploy!_default:var'
      - '@google-cloud/deploy!CloudDeployClient:type'
      - '@google-cloud/deploy!CloudDeployClient:var'
      - '@google-cloud/deploy!protos.google.api.CustomHttpPattern:class'
      - '@google-cloud/deploy!protos.google.api.FieldBehavior:enum'
      - '@google-cloud/deploy!protos.google.api.Http:class'
      - '@google-cloud/deploy!protos.google.api.HttpRule:class'
      - '@google-cloud/deploy!protos.google.api.ICustomHttpPattern:interface'
      - '@google-cloud/deploy!protos.google.api.IHttp:interface'
      - '@google-cloud/deploy!protos.google.api.IHttpRule:interface'
      - '@google-cloud/deploy!protos.google.api.IResourceDescriptor:interface'
      - '@google-cloud/deploy!protos.google.api.IResourceReference:interface'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor:class'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor.History:enum'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor.Style:enum'
      - '@google-cloud/deploy!protos.google.api.ResourceReference:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.BuildArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateReleaseRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DefaultPool:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetConfigRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetReleaseRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GkeCluster:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IBuildArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDefaultPool:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IExecutionConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGkeCluster:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineReadyCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPrivatePool:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISerialPipeline:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISkaffoldVersion:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStage:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsPresentCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineReadyCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PrivatePool:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.RenderState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.ApprovalState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.State:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.SerialPipeline:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldVersion:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Stage:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsPresentCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateTargetRequest:class'
      - '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
      - '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
      - '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
      - '@google-cloud/deploy!protos.google.longrunning.ICancelOperationRequest:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IDeleteOperationRequest:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IGetOperationRequest:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IListOperationsRequest:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IListOperationsResponse:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IOperationInfo:interface'
      - '@google-cloud/deploy!protos.google.longrunning.IWaitOperationRequest:interface'
      - '@google-cloud/deploy!protos.google.longrunning.ListOperationsRequest:class'
      - '@google-cloud/deploy!protos.google.longrunning.ListOperationsResponse:class'
      - '@google-cloud/deploy!protos.google.longrunning.Operation:class'
      - '@google-cloud/deploy!protos.google.longrunning.OperationInfo:class'
      - '@google-cloud/deploy!protos.google.longrunning.Operations:class'
      - '@google-cloud/deploy!protos.google.longrunning.Operations.CancelOperationCallback:type'
      - '@google-cloud/deploy!protos.google.longrunning.Operations.DeleteOperationCallback:type'
      - '@google-cloud/deploy!protos.google.longrunning.Operations.GetOperationCallback:type'
      - '@google-cloud/deploy!protos.google.longrunning.Operations.ListOperationsCallback:type'
      - '@google-cloud/deploy!protos.google.longrunning.Operations.WaitOperationCallback:type'
      - '@google-cloud/deploy!protos.google.longrunning.WaitOperationRequest:class'
      - '@google-cloud/deploy!protos.google.protobuf.Any:class'
      - '@google-cloud/deploy!protos.google.protobuf.DescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ExtensionRange:class'
      - '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IExtensionRange:interface'
      - '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IReservedRange:interface'
      - '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ReservedRange:class'
      - '@google-cloud/deploy!protos.google.protobuf.Duration:class'
      - '@google-cloud/deploy!protos.google.protobuf.Empty:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.EnumReservedRange:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.IEnumReservedRange:interface'
      - '@google-cloud/deploy!protos.google.protobuf.EnumOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumValueDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumValueOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Label:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Type:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldMask:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.CType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.JSType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FileDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileDescriptorSet:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileOptions.OptimizeMode:enum'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo:class'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation:class'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.IAnnotation:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IAny:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IDuration:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IEnumDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IEnumOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IEnumValueDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IEnumValueOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IExtensionRangeOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFieldDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFieldMask:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFieldOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorSet:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFileOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IGeneratedCodeInfo:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IMessageOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IMethodDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IMethodOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IOneofDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IOneofOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IServiceDescriptorProto:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IServiceOptions:interface'
      - '@google-cloud/deploy!protos.google.protobuf.ISourceCodeInfo:interface'
      - '@google-cloud/deploy!protos.google.protobuf.ITimestamp:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IUninterpretedOption:interface'
      - '@google-cloud/deploy!protos.google.protobuf.MessageOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.MethodDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.MethodOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.MethodOptions.IdempotencyLevel:enum'
      - '@google-cloud/deploy!protos.google.protobuf.OneofDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.OneofOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.ServiceDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.ServiceOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo:class'
      - '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.ILocation:interface'
      - '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.Location:class'
      - '@google-cloud/deploy!protos.google.protobuf.Timestamp:class'
      - '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption:class'
      - '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.INamePart:interface'
      - '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.NamePart:class'
      - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
      - '@google-cloud/deploy!protos.google.rpc.Status:class'
      - '@google-cloud/deploy!protos.google.type.Date:class'
      - '@google-cloud/deploy!protos.google.type.IDate:interface'
      - '@google-cloud/deploy!v1.CloudDeployClient:class'
  - uid: '@google-cloud/deploy!_default:var'
    name: _default
    fullName: _default
    langs:
      - typeScript
    type: variable
    syntax:
      content: |-
        _default: {
            v1: typeof v1;
            CloudDeployClient: typeof v1.CloudDeployClient;
        }
      return:
        type:
          - '@google-cloud/deploy!_default~0:complex'
  - uid: '@google-cloud/deploy!CloudDeployClient:type'
    name: CloudDeployClient
    fullName: CloudDeployClient
    langs:
      - typeScript
    type: typealias
    syntax:
      content: declare type CloudDeployClient = v1.CloudDeployClient;
      return:
        type:
          - '@google-cloud/deploy!CloudDeployClient~0:complex'
  - uid: '@google-cloud/deploy!CloudDeployClient:var'
    name: CloudDeployClient
    fullName: CloudDeployClient
    langs:
      - typeScript
    type: variable
    syntax:
      content: 'CloudDeployClient: typeof v1.CloudDeployClient'
      return:
        type:
          - '@google-cloud/deploy!CloudDeployClient~1:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type ApproveRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ApproveRolloutResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type CreateDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type CreateReleaseCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type CreateRolloutCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type CreateTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type DeleteDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type DeleteTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetConfigCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Config) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type GetDeliveryPipelineCallback = (error: (Error|null), response?: google.cloud.deploy.v1.DeliveryPipeline) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetReleaseCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Release) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Rollout) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetTargetCallback = (error: (Error|null), response?: google.cloud.deploy.v1.Target) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type ListDeliveryPipelinesCallback = (error: (Error|null), response?:
        google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type ListReleasesCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListReleasesResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type ListRolloutsCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListRolloutsResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type ListTargetsCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListTargetsResponse) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type UpdateDeliveryPipelineCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type UpdateTargetCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.CancelOperationCallback:type'
    summary: Callback as used by .
    name: protos.google.longrunning.Operations.CancelOperationCallback
    fullName: protos.google.longrunning.Operations.CancelOperationCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.longrunning.Operations.CancelOperationCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.DeleteOperationCallback:type'
    summary: Callback as used by .
    name: protos.google.longrunning.Operations.DeleteOperationCallback
    fullName: protos.google.longrunning.Operations.DeleteOperationCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.longrunning.Operations.DeleteOperationCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.GetOperationCallback:type'
    summary: Callback as used by .
    name: protos.google.longrunning.Operations.GetOperationCallback
    fullName: protos.google.longrunning.Operations.GetOperationCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.longrunning.Operations.GetOperationCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.ListOperationsCallback:type'
    summary: Callback as used by .
    name: protos.google.longrunning.Operations.ListOperationsCallback
    fullName: protos.google.longrunning.Operations.ListOperationsCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.longrunning.Operations.ListOperationsCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.WaitOperationCallback:type'
    summary: Callback as used by .
    name: protos.google.longrunning.Operations.WaitOperationCallback
    fullName: protos.google.longrunning.Operations.WaitOperationCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.longrunning.Operations.WaitOperationCallback~0:complex'
references:
  - uid: '@google-cloud/deploy!_default~0:complex'
    name: |-
      {
          v1: typeof v1;
          CloudDeployClient: typeof v1.CloudDeployClient;
      }
    fullName: |-
      {
          v1: typeof v1;
          CloudDeployClient: typeof v1.CloudDeployClient;
      }
    spec.typeScript:
      - name: |-
          {
              v1: typeof v1;
              CloudDeployClient: typeof v1.
        fullName: |-
          {
              v1: typeof v1;
              CloudDeployClient: typeof v1.
      - uid: '@google-cloud/deploy!CloudDeployClient:class'
        name: CloudDeployClient
        fullName: CloudDeployClient
      - name: |-
          ;
          }
        fullName: |-
          ;
          }
  - uid: '@google-cloud/deploy!CloudDeployClient~0:complex'
    name: v1.CloudDeployClient
    fullName: v1.CloudDeployClient
    spec.typeScript:
      - name: v1.
        fullName: v1.
      - uid: '@google-cloud/deploy!CloudDeployClient:class'
        name: CloudDeployClient
        fullName: CloudDeployClient
  - uid: '@google-cloud/deploy!CloudDeployClient~1:complex'
    name: typeof v1.CloudDeployClient
    fullName: typeof v1.CloudDeployClient
    spec.typeScript:
      - name: typeof v1.
        fullName: typeof v1.
      - uid: '@google-cloud/deploy!CloudDeployClient:class'
        name: CloudDeployClient
        fullName: CloudDeployClient
  - uid: '@google-cloud/deploy!protos.google.api.CustomHttpPattern:class'
    name: protos.google.api.CustomHttpPattern
  - uid: '@google-cloud/deploy!protos.google.api.FieldBehavior:enum'
    name: protos.google.api.FieldBehavior
  - uid: '@google-cloud/deploy!protos.google.api.Http:class'
    name: protos.google.api.Http
  - uid: '@google-cloud/deploy!protos.google.api.HttpRule:class'
    name: protos.google.api.HttpRule
  - uid: '@google-cloud/deploy!protos.google.api.ICustomHttpPattern:interface'
    name: protos.google.api.ICustomHttpPattern
  - uid: '@google-cloud/deploy!protos.google.api.IHttp:interface'
    name: protos.google.api.IHttp
  - uid: '@google-cloud/deploy!protos.google.api.IHttpRule:interface'
    name: protos.google.api.IHttpRule
  - uid: '@google-cloud/deploy!protos.google.api.IResourceDescriptor:interface'
    name: protos.google.api.IResourceDescriptor
  - uid: '@google-cloud/deploy!protos.google.api.IResourceReference:interface'
    name: protos.google.api.IResourceReference
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor:class'
    name: protos.google.api.ResourceDescriptor
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.History:enum'
    name: protos.google.api.ResourceDescriptor.History
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.Style:enum'
    name: protos.google.api.ResourceDescriptor.Style
  - uid: '@google-cloud/deploy!protos.google.api.ResourceReference:class'
    name: protos.google.api.ResourceReference
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.ApproveRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
    name: protos.google.cloud.deploy.v1.ApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.BuildArtifact:class'
    name: protos.google.cloud.deploy.v1.BuildArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy:class'
    name: protos.google.cloud.deploy.v1.CloudDeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ApproveRolloutResponse) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.ApproveRolloutResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        name: google.cloud.deploy.v1.ApproveRolloutResponse
        fullName: google.cloud.deploy.v1.ApproveRolloutResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Config) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.Config) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Config:class'
        name: google.cloud.deploy.v1.Config
        fullName: google.cloud.deploy.v1.Config
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.DeliveryPipeline) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.DeliveryPipeline) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.DeliveryPipeline:class'
        name: google.cloud.deploy.v1.DeliveryPipeline
        fullName: google.cloud.deploy.v1.DeliveryPipeline
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Release) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.Release) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Release:class'
        name: google.cloud.deploy.v1.Release
        fullName: google.cloud.deploy.v1.Release
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Rollout) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.Rollout) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Rollout:class'
        name: google.cloud.deploy.v1.Rollout
        fullName: google.cloud.deploy.v1.Rollout
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Target) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.Target) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Target:class'
        name: google.cloud.deploy.v1.Target
        fullName: google.cloud.deploy.v1.Target
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
        name: google.cloud.deploy.v1.ListDeliveryPipelinesResponse
        fullName: google.cloud.deploy.v1.ListDeliveryPipelinesResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListReleasesResponse) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.ListReleasesResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ListReleasesResponse:class'
        name: google.cloud.deploy.v1.ListReleasesResponse
        fullName: google.cloud.deploy.v1.ListReleasesResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListRolloutsResponse) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.ListRolloutsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ListRolloutsResponse:class'
        name: google.cloud.deploy.v1.ListRolloutsResponse
        fullName: google.cloud.deploy.v1.ListRolloutsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListTargetsResponse) => void'
    fullName: '(error: (Error|null), response?: google.cloud.deploy.v1.ListTargetsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ListTargetsResponse:class'
        name: google.cloud.deploy.v1.ListTargetsResponse
        fullName: google.cloud.deploy.v1.ListTargetsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
    name: protos.google.cloud.deploy.v1.Config
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateReleaseRequest:class'
    name: protos.google.cloud.deploy.v1.CreateReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.CreateRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateTargetRequest:class'
    name: protos.google.cloud.deploy.v1.CreateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DefaultPool:class'
    name: protos.google.cloud.deploy.v1.DefaultPool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteTargetRequest:class'
    name: protos.google.cloud.deploy.v1.DeleteTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
    name: protos.google.cloud.deploy.v1.DeliveryPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig:class'
    name: protos.google.cloud.deploy.v1.ExecutionConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
    name: protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetConfigRequest:class'
    name: protos.google.cloud.deploy.v1.GetConfigRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetReleaseRequest:class'
    name: protos.google.cloud.deploy.v1.GetReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.GetRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetTargetRequest:class'
    name: protos.google.cloud.deploy.v1.GetTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GkeCluster:class'
    name: protos.google.cloud.deploy.v1.GkeCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    name: protos.google.cloud.deploy.v1.IApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IBuildArtifact:interface'
    name: protos.google.cloud.deploy.v1.IBuildArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
    name: protos.google.cloud.deploy.v1.IConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDefaultPool:interface'
    name: protos.google.cloud.deploy.v1.IDefaultPool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
    name: protos.google.cloud.deploy.v1.IDeliveryPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IExecutionConfig:interface'
    name: protos.google.cloud.deploy.v1.IExecutionConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGkeCluster:interface'
    name: protos.google.cloud.deploy.v1.IGkeCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
    name: protos.google.cloud.deploy.v1.IListReleasesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
    name: protos.google.cloud.deploy.v1.IListRolloutsResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
    name: protos.google.cloud.deploy.v1.IListTargetsResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
    name: protos.google.cloud.deploy.v1.IOperationMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineCondition:interface'
    name: protos.google.cloud.deploy.v1.IPipelineCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineReadyCondition:interface'
    name: protos.google.cloud.deploy.v1.IPipelineReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPrivatePool:interface'
    name: protos.google.cloud.deploy.v1.IPrivatePool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
    name: protos.google.cloud.deploy.v1.IRelease
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
    name: protos.google.cloud.deploy.v1.IRollout
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISerialPipeline:interface'
    name: protos.google.cloud.deploy.v1.ISerialPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISkaffoldVersion:interface'
    name: protos.google.cloud.deploy.v1.ISkaffoldVersion
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStage:interface'
    name: protos.google.cloud.deploy.v1.IStage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
    name: protos.google.cloud.deploy.v1.ITarget
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetArtifact:interface'
    name: protos.google.cloud.deploy.v1.ITargetArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsPresentCondition:interface'
    name: protos.google.cloud.deploy.v1.ITargetsPresentCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest:class'
    name: protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
    name: protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesRequest:class'
    name: protos.google.cloud.deploy.v1.ListReleasesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesResponse:class'
    name: protos.google.cloud.deploy.v1.ListReleasesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsRequest:class'
    name: protos.google.cloud.deploy.v1.ListRolloutsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsResponse:class'
    name: protos.google.cloud.deploy.v1.ListRolloutsResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsRequest:class'
    name: protos.google.cloud.deploy.v1.ListTargetsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsResponse:class'
    name: protos.google.cloud.deploy.v1.ListTargetsResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
    name: protos.google.cloud.deploy.v1.OperationMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineCondition:class'
    name: protos.google.cloud.deploy.v1.PipelineCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineReadyCondition:class'
    name: protos.google.cloud.deploy.v1.PipelineReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PrivatePool:class'
    name: protos.google.cloud.deploy.v1.PrivatePool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
    name: protos.google.cloud.deploy.v1.Release
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
    name: protos.google.cloud.deploy.v1.Release.ITargetRender
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.RenderState:enum'
    name: protos.google.cloud.deploy.v1.Release.RenderState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender:class'
    name: protos.google.cloud.deploy.v1.Release.TargetRender
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState:enum'
    name: protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
    name: protos.google.cloud.deploy.v1.Rollout
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.ApprovalState:enum'
    name: protos.google.cloud.deploy.v1.Rollout.ApprovalState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.State:enum'
    name: protos.google.cloud.deploy.v1.Rollout.State
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SerialPipeline:class'
    name: protos.google.cloud.deploy.v1.SerialPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldVersion:class'
    name: protos.google.cloud.deploy.v1.SkaffoldVersion
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Stage:class'
    name: protos.google.cloud.deploy.v1.Stage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
    name: protos.google.cloud.deploy.v1.Target
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact:class'
    name: protos.google.cloud.deploy.v1.TargetArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsPresentCondition:class'
    name: protos.google.cloud.deploy.v1.TargetsPresentCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateTargetRequest:class'
    name: protos.google.cloud.deploy.v1.UpdateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
    name: protos.google.longrunning.CancelOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
    name: protos.google.longrunning.DeleteOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
    name: protos.google.longrunning.GetOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.ICancelOperationRequest:interface'
    name: protos.google.longrunning.ICancelOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.IDeleteOperationRequest:interface'
    name: protos.google.longrunning.IDeleteOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.IGetOperationRequest:interface'
    name: protos.google.longrunning.IGetOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.IListOperationsRequest:interface'
    name: protos.google.longrunning.IListOperationsRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.IListOperationsResponse:interface'
    name: protos.google.longrunning.IListOperationsResponse
  - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
    name: protos.google.longrunning.IOperation
  - uid: '@google-cloud/deploy!protos.google.longrunning.IOperationInfo:interface'
    name: protos.google.longrunning.IOperationInfo
  - uid: '@google-cloud/deploy!protos.google.longrunning.IWaitOperationRequest:interface'
    name: protos.google.longrunning.IWaitOperationRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsRequest:class'
    name: protos.google.longrunning.ListOperationsRequest
  - uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsResponse:class'
    name: protos.google.longrunning.ListOperationsResponse
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
    name: protos.google.longrunning.Operation
  - uid: '@google-cloud/deploy!protos.google.longrunning.OperationInfo:class'
    name: protos.google.longrunning.OperationInfo
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations:class'
    name: protos.google.longrunning.Operations
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.CancelOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.protobuf.Empty) => void'
    fullName: '(error: (Error|null), response?: google.protobuf.Empty) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: google.protobuf.Empty
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.DeleteOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.protobuf.Empty) => void'
    fullName: '(error: (Error|null), response?: google.protobuf.Empty) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: google.protobuf.Empty
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.GetOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.ListOperationsCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.ListOperationsResponse:class'
        name: google.longrunning.ListOperationsResponse
        fullName: google.longrunning.ListOperationsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.WaitOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.WaitOperationRequest:class'
    name: protos.google.longrunning.WaitOperationRequest
  - uid: '@google-cloud/deploy!protos.google.protobuf.Any:class'
    name: protos.google.protobuf.Any
  - uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto:class'
    name: protos.google.protobuf.DescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ExtensionRange:class'
    name: protos.google.protobuf.DescriptorProto.ExtensionRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IExtensionRange:interface'
    name: protos.google.protobuf.DescriptorProto.IExtensionRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IReservedRange:interface'
    name: protos.google.protobuf.DescriptorProto.IReservedRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ReservedRange:class'
    name: protos.google.protobuf.DescriptorProto.ReservedRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.Duration:class'
    name: protos.google.protobuf.Duration
  - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
    name: protos.google.protobuf.Empty
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto:class'
    name: protos.google.protobuf.EnumDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.EnumReservedRange:class'
    name: protos.google.protobuf.EnumDescriptorProto.EnumReservedRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.IEnumReservedRange:interface'
    name: protos.google.protobuf.EnumDescriptorProto.IEnumReservedRange
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumOptions:class'
    name: protos.google.protobuf.EnumOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumValueDescriptorProto:class'
    name: protos.google.protobuf.EnumValueDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.EnumValueOptions:class'
    name: protos.google.protobuf.EnumValueOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions:class'
    name: protos.google.protobuf.ExtensionRangeOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto:class'
    name: protos.google.protobuf.FieldDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Label:enum'
    name: protos.google.protobuf.FieldDescriptorProto.Label
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Type:enum'
    name: protos.google.protobuf.FieldDescriptorProto.Type
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldMask:class'
    name: protos.google.protobuf.FieldMask
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions:class'
    name: protos.google.protobuf.FieldOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.CType:enum'
    name: protos.google.protobuf.FieldOptions.CType
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.JSType:enum'
    name: protos.google.protobuf.FieldOptions.JSType
  - uid: '@google-cloud/deploy!protos.google.protobuf.FileDescriptorProto:class'
    name: protos.google.protobuf.FileDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.FileDescriptorSet:class'
    name: protos.google.protobuf.FileDescriptorSet
  - uid: '@google-cloud/deploy!protos.google.protobuf.FileOptions:class'
    name: protos.google.protobuf.FileOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.FileOptions.OptimizeMode:enum'
    name: protos.google.protobuf.FileOptions.OptimizeMode
  - uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo:class'
    name: protos.google.protobuf.GeneratedCodeInfo
  - uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation:class'
    name: protos.google.protobuf.GeneratedCodeInfo.Annotation
  - uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.IAnnotation:interface'
    name: protos.google.protobuf.GeneratedCodeInfo.IAnnotation
  - uid: '@google-cloud/deploy!protos.google.protobuf.IAny:interface'
    name: protos.google.protobuf.IAny
  - uid: '@google-cloud/deploy!protos.google.protobuf.IDescriptorProto:interface'
    name: protos.google.protobuf.IDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IDuration:interface'
    name: protos.google.protobuf.IDuration
  - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
    name: protos.google.protobuf.IEmpty
  - uid: '@google-cloud/deploy!protos.google.protobuf.IEnumDescriptorProto:interface'
    name: protos.google.protobuf.IEnumDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IEnumOptions:interface'
    name: protos.google.protobuf.IEnumOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IEnumValueDescriptorProto:interface'
    name: protos.google.protobuf.IEnumValueDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IEnumValueOptions:interface'
    name: protos.google.protobuf.IEnumValueOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IExtensionRangeOptions:interface'
    name: protos.google.protobuf.IExtensionRangeOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFieldDescriptorProto:interface'
    name: protos.google.protobuf.IFieldDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFieldMask:interface'
    name: protos.google.protobuf.IFieldMask
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFieldOptions:interface'
    name: protos.google.protobuf.IFieldOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorProto:interface'
    name: protos.google.protobuf.IFileDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorSet:interface'
    name: protos.google.protobuf.IFileDescriptorSet
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFileOptions:interface'
    name: protos.google.protobuf.IFileOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IGeneratedCodeInfo:interface'
    name: protos.google.protobuf.IGeneratedCodeInfo
  - uid: '@google-cloud/deploy!protos.google.protobuf.IMessageOptions:interface'
    name: protos.google.protobuf.IMessageOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IMethodDescriptorProto:interface'
    name: protos.google.protobuf.IMethodDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IMethodOptions:interface'
    name: protos.google.protobuf.IMethodOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IOneofDescriptorProto:interface'
    name: protos.google.protobuf.IOneofDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IOneofOptions:interface'
    name: protos.google.protobuf.IOneofOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.IServiceDescriptorProto:interface'
    name: protos.google.protobuf.IServiceDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.IServiceOptions:interface'
    name: protos.google.protobuf.IServiceOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.ISourceCodeInfo:interface'
    name: protos.google.protobuf.ISourceCodeInfo
  - uid: '@google-cloud/deploy!protos.google.protobuf.ITimestamp:interface'
    name: protos.google.protobuf.ITimestamp
  - uid: '@google-cloud/deploy!protos.google.protobuf.IUninterpretedOption:interface'
    name: protos.google.protobuf.IUninterpretedOption
  - uid: '@google-cloud/deploy!protos.google.protobuf.MessageOptions:class'
    name: protos.google.protobuf.MessageOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.MethodDescriptorProto:class'
    name: protos.google.protobuf.MethodDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.MethodOptions:class'
    name: protos.google.protobuf.MethodOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.MethodOptions.IdempotencyLevel:enum'
    name: protos.google.protobuf.MethodOptions.IdempotencyLevel
  - uid: '@google-cloud/deploy!protos.google.protobuf.OneofDescriptorProto:class'
    name: protos.google.protobuf.OneofDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.OneofOptions:class'
    name: protos.google.protobuf.OneofOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.ServiceDescriptorProto:class'
    name: protos.google.protobuf.ServiceDescriptorProto
  - uid: '@google-cloud/deploy!protos.google.protobuf.ServiceOptions:class'
    name: protos.google.protobuf.ServiceOptions
  - uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo:class'
    name: protos.google.protobuf.SourceCodeInfo
  - uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.ILocation:interface'
    name: protos.google.protobuf.SourceCodeInfo.ILocation
  - uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.Location:class'
    name: protos.google.protobuf.SourceCodeInfo.Location
  - uid: '@google-cloud/deploy!protos.google.protobuf.Timestamp:class'
    name: protos.google.protobuf.Timestamp
  - uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption:class'
    name: protos.google.protobuf.UninterpretedOption
  - uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.INamePart:interface'
    name: protos.google.protobuf.UninterpretedOption.INamePart
  - uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.NamePart:class'
    name: protos.google.protobuf.UninterpretedOption.NamePart
  - uid: '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
    name: protos.google.rpc.IStatus
  - uid: '@google-cloud/deploy!protos.google.rpc.Status:class'
    name: protos.google.rpc.Status
  - uid: '@google-cloud/deploy!protos.google.type.Date:class'
    name: protos.google.type.Date
  - uid: '@google-cloud/deploy!protos.google.type.IDate:interface'
    name: protos.google.type.IDate
  - uid: '@google-cloud/deploy!v1.CloudDeployClient:class'
    name: v1.CloudDeployClient
`

exports['cloud-rad docfx generator handles example tags 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!v1.CloudDeployClient:class'
    summary: >-
      CloudDeploy service creates and manages Continuous Delivery operations on Google Cloud Platform via Skaffold
      (https://skaffold.dev).   v1
    name: v1.CloudDeployClient
    fullName: v1.CloudDeployClient
    langs:
      - typeScript
    type: class
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!v1.CloudDeployClient:constructor(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient.apiEndpoint:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#auth:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#buildPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateDeliveryPipelineProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateDeliveryPipelineProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#close:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#cloudDeployStub:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#clusterPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#configPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#deliveryPipelinePath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#descriptors:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getProjectId:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getProjectId:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#initialize:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#innerApiCalls:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listReleasesStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listTargetsStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#locationPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchBuildFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchClusterFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromConfigName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromLocationName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromConfigName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromLocationName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromProjectName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchRolloutFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchTargetFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchWorkerPoolFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#operationsClient:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#pathTemplates:member'
      - '@google-cloud/deploy!v1.CloudDeployClient.port:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#projectPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#releasePath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#rolloutPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient.scopes:member'
      - '@google-cloud/deploy!v1.CloudDeployClient.servicePath:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#targetPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#warn:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#workerPoolPath:member(1)'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient:constructor(1)'
    summary: Construct an instance of CloudDeployClient.
    name: (constructor)(opts)
    fullName: (constructor)(opts)
    langs:
      - typeScript
    type: constructor
    syntax:
      content: 'constructor(opts?: ClientOptions);'
      parameters:
        - id: opts
          description: ''
          type:
            - 'google-gax!ClientOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.apiEndpoint:member'
    summary: 'The DNS address for this API service - same as servicePath(), exists for compatibility reasons.'
    name: apiEndpoint
    fullName: apiEndpoint
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get apiEndpoint(): string;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(1)'
    name: 'approveRollout(request, options)'
    fullName: 'approveRollout(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        approveRollout(request?: protos.google.cloud.deploy.v1.IApproveRolloutRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IApproveRolloutResponse,
                protos.google.cloud.deploy.v1.IApproveRolloutRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(2)'
    name: 'approveRollout(request, options, callback)'
    fullName: 'approveRollout(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        approveRollout(request: protos.google.cloud.deploy.v1.IApproveRolloutRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
        protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(3)'
    name: 'approveRollout(request, callback)'
    fullName: 'approveRollout(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        approveRollout(request: protos.google.cloud.deploy.v1.IApproveRolloutRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
        protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#auth:member'
    name: auth
    fullName: auth
    langs:
      - typeScript
    type: property
    syntax:
      content: 'auth: gax.GoogleAuth;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#buildPath:member(1)'
    summary: Return a fully-qualified build resource name string.
    name: 'buildPath(project, location, build)'
    fullName: 'buildPath(project, location, build)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'buildPath(project: string, location: string, build: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: build
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createDeliveryPipeline()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkCreateDeliveryPipelineProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkCreateDeliveryPipelineProgress(name)
    fullName: checkCreateDeliveryPipelineProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkCreateDeliveryPipelineProgress(name: string):
        Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateDeliveryPipelineProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createRelease()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkCreateReleaseProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkCreateReleaseProgress(name)
    fullName: checkCreateReleaseProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkCreateReleaseProgress(name: string): Promise<LROperation<protos.google.cloud.deploy.v1.Release,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createRollout()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkCreateRolloutProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkCreateRolloutProgress(name)
    fullName: checkCreateRolloutProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkCreateRolloutProgress(name: string): Promise<LROperation<protos.google.cloud.deploy.v1.Rollout,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createTarget()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkCreateTargetProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkCreateTargetProgress(name)
    fullName: checkCreateTargetProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkCreateTargetProgress(name: string): Promise<LROperation<protos.google.cloud.deploy.v1.Target,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`deleteDeliveryPipeline()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkDeleteDeliveryPipelineProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkDeleteDeliveryPipelineProgress(name)
    fullName: checkDeleteDeliveryPipelineProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkDeleteDeliveryPipelineProgress(name: string): Promise<LROperation<protos.google.protobuf.Empty,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`deleteTarget()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkDeleteTargetProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkDeleteTargetProgress(name)
    fullName: checkDeleteTargetProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkDeleteTargetProgress(name: string): Promise<LROperation<protos.google.protobuf.Empty,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`updateDeliveryPipeline()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkUpdateDeliveryPipelineProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkUpdateDeliveryPipelineProgress(name)
    fullName: checkUpdateDeliveryPipelineProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkUpdateDeliveryPipelineProgress(name: string):
        Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateDeliveryPipelineProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`updateTarget()\`<!-- -->.
    example:
      - >-
        const decodedOperation = await checkUpdateTargetProgress(name); console.log(decodedOperation.result);
        console.log(decodedOperation.done); console.log(decodedOperation.metadata);
    name: checkUpdateTargetProgress(name)
    fullName: checkUpdateTargetProgress(name)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        checkUpdateTargetProgress(name: string): Promise<LROperation<protos.google.cloud.deploy.v1.Target,
        protos.google.cloud.deploy.v1.OperationMetadata>>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an object. The decoded operation object has result
          and metadata field to get information from. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#close:member(1)'
    summary: |-
      Terminate the gRPC channel and close the client.

      The client will no longer be usable and all future behavior is undefined.
    name: close()
    fullName: close()
    langs:
      - typeScript
    type: method
    syntax:
      content: 'close(): Promise<void>;'
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#close~0:complex'
        description: '{<!-- -->Promise<!-- -->} A promise that resolves when the client is closed.'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cloudDeployStub:member'
    name: cloudDeployStub
    fullName: cloudDeployStub
    langs:
      - typeScript
    type: property
    syntax:
      content: |-
        cloudDeployStub?: Promise<{
                [name: string]: Function;
            }>;
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#clusterPath:member(1)'
    summary: Return a fully-qualified cluster resource name string.
    name: 'clusterPath(project, location, cluster)'
    fullName: 'clusterPath(project, location, cluster)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'clusterPath(project: string, location: string, cluster: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: cluster
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#configPath:member(1)'
    summary: Return a fully-qualified config resource name string.
    name: 'configPath(project, location)'
    fullName: 'configPath(project, location)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'configPath(project: string, location: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(1)'
    name: 'createDeliveryPipeline(request, options)'
    fullName: 'createDeliveryPipeline(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createDeliveryPipeline(request?: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, options?:
        CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(2)'
    name: 'createDeliveryPipeline(request, options, callback)'
    fullName: 'createDeliveryPipeline(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createDeliveryPipeline(request: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, options:
        CallOptions, callback: Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
        null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(3)'
    name: 'createDeliveryPipeline(request, callback)'
    fullName: 'createDeliveryPipeline(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createDeliveryPipeline(request: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
        null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(1)'
    name: 'createRelease(request, options)'
    fullName: 'createRelease(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        createRelease(request?: protos.google.cloud.deploy.v1.ICreateReleaseRequest, options?: CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(2)'
    name: 'createRelease(request, options, callback)'
    fullName: 'createRelease(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createRelease(request: protos.google.cloud.deploy.v1.ICreateReleaseRequest, options: CallOptions, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(3)'
    name: 'createRelease(request, callback)'
    fullName: 'createRelease(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createRelease(request: protos.google.cloud.deploy.v1.ICreateReleaseRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(1)'
    name: 'createRollout(request, options)'
    fullName: 'createRollout(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        createRollout(request?: protos.google.cloud.deploy.v1.ICreateRolloutRequest, options?: CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(2)'
    name: 'createRollout(request, options, callback)'
    fullName: 'createRollout(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createRollout(request: protos.google.cloud.deploy.v1.ICreateRolloutRequest, options: CallOptions, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(3)'
    name: 'createRollout(request, callback)'
    fullName: 'createRollout(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createRollout(request: protos.google.cloud.deploy.v1.ICreateRolloutRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(1)'
    name: 'createTarget(request, options)'
    fullName: 'createTarget(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        createTarget(request?: protos.google.cloud.deploy.v1.ICreateTargetRequest, options?: CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(2)'
    name: 'createTarget(request, options, callback)'
    fullName: 'createTarget(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createTarget(request: protos.google.cloud.deploy.v1.ICreateTargetRequest, options: CallOptions, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(3)'
    name: 'createTarget(request, callback)'
    fullName: 'createTarget(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        createTarget(request: protos.google.cloud.deploy.v1.ICreateTargetRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(1)'
    name: 'deleteDeliveryPipeline(request, options)'
    fullName: 'deleteDeliveryPipeline(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteDeliveryPipeline(request?: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, options?:
        CallOptions): Promise<[
                LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(2)'
    name: 'deleteDeliveryPipeline(request, options, callback)'
    fullName: 'deleteDeliveryPipeline(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteDeliveryPipeline(request: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, options:
        CallOptions, callback: Callback<LROperation<protos.google.protobuf.IEmpty,
        protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
        null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(3)'
    name: 'deleteDeliveryPipeline(request, callback)'
    fullName: 'deleteDeliveryPipeline(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteDeliveryPipeline(request: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest, callback:
        Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(1)'
    name: 'deleteTarget(request, options)'
    fullName: 'deleteTarget(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        deleteTarget(request?: protos.google.cloud.deploy.v1.IDeleteTargetRequest, options?: CallOptions): Promise<[
                LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(2)'
    name: 'deleteTarget(request, options, callback)'
    fullName: 'deleteTarget(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteTarget(request: protos.google.cloud.deploy.v1.IDeleteTargetRequest, options: CallOptions, callback:
        Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(3)'
    name: 'deleteTarget(request, callback)'
    fullName: 'deleteTarget(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteTarget(request: protos.google.cloud.deploy.v1.IDeleteTargetRequest, callback:
        Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deliveryPipelinePath:member(1)'
    summary: Return a fully-qualified deliveryPipeline resource name string.
    name: 'deliveryPipelinePath(project, location, deliveryPipeline)'
    fullName: 'deliveryPipelinePath(project, location, deliveryPipeline)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'deliveryPipelinePath(project: string, location: string, deliveryPipeline: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: deliveryPipeline
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#descriptors:member'
    name: descriptors
    fullName: descriptors
    langs:
      - typeScript
    type: property
    syntax:
      content: 'descriptors: Descriptors;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(1)'
    name: 'getConfig(request, options)'
    fullName: 'getConfig(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        getConfig(request?: protos.google.cloud.deploy.v1.IGetConfigRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IConfig,
                protos.google.cloud.deploy.v1.IGetConfigRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(2)'
    name: 'getConfig(request, options, callback)'
    fullName: 'getConfig(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getConfig(request: protos.google.cloud.deploy.v1.IGetConfigRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(3)'
    name: 'getConfig(request, callback)'
    fullName: 'getConfig(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getConfig(request: protos.google.cloud.deploy.v1.IGetConfigRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(1)'
    name: 'getDeliveryPipeline(request, options)'
    fullName: 'getDeliveryPipeline(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getDeliveryPipeline(request?: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest, options?: CallOptions):
        Promise<[
                protos.google.cloud.deploy.v1.IDeliveryPipeline,
                protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(2)'
    name: 'getDeliveryPipeline(request, options, callback)'
    fullName: 'getDeliveryPipeline(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getDeliveryPipeline(request: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest, options: CallOptions,
        callback: Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(3)'
    name: 'getDeliveryPipeline(request, callback)'
    fullName: 'getDeliveryPipeline(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getDeliveryPipeline(request: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getProjectId:member(1)'
    name: getProjectId()
    fullName: getProjectId()
    langs:
      - typeScript
    type: method
    syntax:
      content: 'getProjectId(): Promise<string>;'
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getProjectId~0:complex'
        description: ''
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getProjectId:member(2)'
    name: getProjectId(callback)
    fullName: getProjectId(callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'getProjectId(callback: Callback<string, undefined, undefined>): void;'
      return:
        type:
          - void
        description: ''
      parameters:
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getProjectId~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(1)'
    name: 'getRelease(request, options)'
    fullName: 'getRelease(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        getRelease(request?: protos.google.cloud.deploy.v1.IGetReleaseRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IRelease,
                protos.google.cloud.deploy.v1.IGetReleaseRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(2)'
    name: 'getRelease(request, options, callback)'
    fullName: 'getRelease(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getRelease(request: protos.google.cloud.deploy.v1.IGetReleaseRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(3)'
    name: 'getRelease(request, callback)'
    fullName: 'getRelease(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getRelease(request: protos.google.cloud.deploy.v1.IGetReleaseRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(1)'
    name: 'getRollout(request, options)'
    fullName: 'getRollout(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        getRollout(request?: protos.google.cloud.deploy.v1.IGetRolloutRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IRollout,
                protos.google.cloud.deploy.v1.IGetRolloutRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(2)'
    name: 'getRollout(request, options, callback)'
    fullName: 'getRollout(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getRollout(request: protos.google.cloud.deploy.v1.IGetRolloutRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(3)'
    name: 'getRollout(request, callback)'
    fullName: 'getRollout(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getRollout(request: protos.google.cloud.deploy.v1.IGetRolloutRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(1)'
    name: 'getTarget(request, options)'
    fullName: 'getTarget(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        getTarget(request?: protos.google.cloud.deploy.v1.IGetTargetRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.ITarget,
                protos.google.cloud.deploy.v1.IGetTargetRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(2)'
    name: 'getTarget(request, options, callback)'
    fullName: 'getTarget(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getTarget(request: protos.google.cloud.deploy.v1.IGetTargetRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(3)'
    name: 'getTarget(request, callback)'
    fullName: 'getTarget(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getTarget(request: protos.google.cloud.deploy.v1.IGetTargetRequest, callback:
        Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#initialize:member(1)'
    summary: >-
      Initialize the client. Performs asynchronous operations (such as authentication) and prepares the client. This
      function will be called automatically when any class method is called for the first time, but if you need to
      initialize it before calling an actual method, feel free to call initialize() directly.


      You can await on this method if you want to make sure the client is initialized.
    name: initialize()
    fullName: initialize()
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        initialize(): Promise<{
                [name: string]: Function;
            }>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#initialize~0:complex'
        description: '{<!-- -->Promise<!-- -->} A promise that resolves to an authenticated service stub.'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#innerApiCalls:member'
    name: innerApiCalls
    fullName: innerApiCalls
    langs:
      - typeScript
    type: property
    syntax:
      content: |-
        innerApiCalls: {
                [name: string]: Function;
            };
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(1)'
    name: 'listDeliveryPipelines(request, options)'
    fullName: 'listDeliveryPipelines(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelines(request?: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, options?:
        CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IDeliveryPipeline[],
                protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest | null,
                protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(2)'
    name: 'listDeliveryPipelines(request, options, callback)'
    fullName: 'listDeliveryPipelines(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelines(request: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, options:
        CallOptions, callback: PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
        protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
        protos.google.cloud.deploy.v1.IDeliveryPipeline>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(3)'
    name: 'listDeliveryPipelines(request, callback)'
    fullName: 'listDeliveryPipelines(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelines(request: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
        protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
        protos.google.cloud.deploy.v1.IDeliveryPipeline>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync:member(1)'
    summary: |-
      Equivalent to \`listDeliveryPipelines\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - >-
        const iterable = client.listDeliveryPipelinesAsync(request); for await (const response of iterable) { // process
        response }
    name: 'listDeliveryPipelinesAsync(request, options)'
    fullName: 'listDeliveryPipelinesAsync(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelinesAsync(request?: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, options?:
        CallOptions): AsyncIterable<protos.google.cloud.deploy.v1.IDeliveryPipeline>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows \\[async
          iteration\\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration\\_protocols). When you
          iterate the returned iterable, each element will be an object representing \\[DeliveryPipeline\\]<!-- -->. The
          API will be called under the hood as needed, once per the page, so you can stop the iteration when you don't
          need more results. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync~1:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream:member(1)'
    summary: 'Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.'
    name: 'listDeliveryPipelinesStream(request, options)'
    fullName: 'listDeliveryPipelinesStream(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelinesStream(request?: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, options?:
        CallOptions): Transform;
      return:
        type:
          - '!internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing \\[DeliveryPipeline\\] on 'data'
          event. The client library will perform auto-pagination by default: it will call the API as many times as
          needed. Note that it can affect your quota. We recommend using \`listDeliveryPipelinesAsync()\` method described
          below for async iteration which you can stop as needed. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream~0:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(1)'
    name: 'listReleases(request, options)'
    fullName: 'listReleases(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        listReleases(request?: protos.google.cloud.deploy.v1.IListReleasesRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IRelease[],
                protos.google.cloud.deploy.v1.IListReleasesRequest | null,
                protos.google.cloud.deploy.v1.IListReleasesResponse
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(2)'
    name: 'listReleases(request, options, callback)'
    fullName: 'listReleases(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listReleases(request: protos.google.cloud.deploy.v1.IListReleasesRequest, options: CallOptions, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
        protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined,
        protos.google.cloud.deploy.v1.IRelease>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(3)'
    name: 'listReleases(request, callback)'
    fullName: 'listReleases(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listReleases(request: protos.google.cloud.deploy.v1.IListReleasesRequest, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
        protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined,
        protos.google.cloud.deploy.v1.IRelease>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync:member(1)'
    summary: |-
      Equivalent to \`listReleases\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - >-
        const iterable = client.listReleasesAsync(request); for await (const response of iterable) { // process response
        }
    name: 'listReleasesAsync(request, options)'
    fullName: 'listReleasesAsync(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listReleasesAsync(request?: protos.google.cloud.deploy.v1.IListReleasesRequest, options?: CallOptions):
        AsyncIterable<protos.google.cloud.deploy.v1.IRelease>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows \\[async
          iteration\\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration\\_protocols). When you
          iterate the returned iterable, each element will be an object representing \\[Release\\]<!-- -->. The API will
          be called under the hood as needed, once per the page, so you can stop the iteration when you don't need more
          results. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync~1:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesStream:member(1)'
    summary: 'Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.'
    name: 'listReleasesStream(request, options)'
    fullName: 'listReleasesStream(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listReleasesStream(request?: protos.google.cloud.deploy.v1.IListReleasesRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing \\[Release\\] on 'data' event. The
          client library will perform auto-pagination by default: it will call the API as many times as needed. Note
          that it can affect your quota. We recommend using \`listReleasesAsync()\` method described below for async
          iteration which you can stop as needed. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleasesStream~0:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(1)'
    name: 'listRollouts(request, options)'
    fullName: 'listRollouts(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        listRollouts(request?: protos.google.cloud.deploy.v1.IListRolloutsRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IRollout[],
                protos.google.cloud.deploy.v1.IListRolloutsRequest | null,
                protos.google.cloud.deploy.v1.IListRolloutsResponse
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(2)'
    name: 'listRollouts(request, options, callback)'
    fullName: 'listRollouts(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listRollouts(request: protos.google.cloud.deploy.v1.IListRolloutsRequest, options: CallOptions, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
        protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined,
        protos.google.cloud.deploy.v1.IRollout>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(3)'
    name: 'listRollouts(request, callback)'
    fullName: 'listRollouts(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listRollouts(request: protos.google.cloud.deploy.v1.IListRolloutsRequest, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
        protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined,
        protos.google.cloud.deploy.v1.IRollout>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync:member(1)'
    summary: |-
      Equivalent to \`listRollouts\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - >-
        const iterable = client.listRolloutsAsync(request); for await (const response of iterable) { // process response
        }
    name: 'listRolloutsAsync(request, options)'
    fullName: 'listRolloutsAsync(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listRolloutsAsync(request?: protos.google.cloud.deploy.v1.IListRolloutsRequest, options?: CallOptions):
        AsyncIterable<protos.google.cloud.deploy.v1.IRollout>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows \\[async
          iteration\\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration\\_protocols). When you
          iterate the returned iterable, each element will be an object representing \\[Rollout\\]<!-- -->. The API will
          be called under the hood as needed, once per the page, so you can stop the iteration when you don't need more
          results. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync~1:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsStream:member(1)'
    summary: 'Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.'
    name: 'listRolloutsStream(request, options)'
    fullName: 'listRolloutsStream(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listRolloutsStream(request?: protos.google.cloud.deploy.v1.IListRolloutsRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing \\[Rollout\\] on 'data' event. The
          client library will perform auto-pagination by default: it will call the API as many times as needed. Note
          that it can affect your quota. We recommend using \`listRolloutsAsync()\` method described below for async
          iteration which you can stop as needed. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsStream~0:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(1)'
    name: 'listTargets(request, options)'
    fullName: 'listTargets(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        listTargets(request?: protos.google.cloud.deploy.v1.IListTargetsRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.ITarget[],
                protos.google.cloud.deploy.v1.IListTargetsRequest | null,
                protos.google.cloud.deploy.v1.IListTargetsResponse
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(2)'
    name: 'listTargets(request, options, callback)'
    fullName: 'listTargets(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listTargets(request: protos.google.cloud.deploy.v1.IListTargetsRequest, options: CallOptions, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
        protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>):
        void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(3)'
    name: 'listTargets(request, callback)'
    fullName: 'listTargets(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listTargets(request: protos.google.cloud.deploy.v1.IListTargetsRequest, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
        protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>):
        void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync:member(1)'
    summary: |-
      Equivalent to \`listTargets\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - >-
        const iterable = client.listTargetsAsync(request); for await (const response of iterable) { // process response
        }
    name: 'listTargetsAsync(request, options)'
    fullName: 'listTargetsAsync(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listTargetsAsync(request?: protos.google.cloud.deploy.v1.IListTargetsRequest, options?: CallOptions):
        AsyncIterable<protos.google.cloud.deploy.v1.ITarget>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows \\[async
          iteration\\](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration\\_protocols). When you
          iterate the returned iterable, each element will be an object representing \\[Target\\]<!-- -->. The API will be
          called under the hood as needed, once per the page, so you can stop the iteration when you don't need more
          results. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync~1:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsStream:member(1)'
    summary: 'Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.'
    name: 'listTargetsStream(request, options)'
    fullName: 'listTargetsStream(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listTargetsStream(request?: protos.google.cloud.deploy.v1.IListTargetsRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing \\[Target\\] on 'data' event. The
          client library will perform auto-pagination by default: it will call the API as many times as needed. Note
          that it can affect your quota. We recommend using \`listTargetsAsync()\` method described below for async
          iteration which you can stop as needed. Please see the
          \\[documentation\\](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md\\#auto-pagination)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargetsStream~0:complex'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#locationPath:member(1)'
    summary: Return a fully-qualified location resource name string.
    name: 'locationPath(project, location)'
    fullName: 'locationPath(project, location)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'locationPath(project: string, location: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchBuildFromBuildName:member(1)'
    summary: Parse the build from Build resource.
    name: matchBuildFromBuildName(buildName)
    fullName: matchBuildFromBuildName(buildName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchBuildFromBuildName(buildName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the build.'
      parameters:
        - id: buildName
          description: A fully-qualified path representing Build resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchClusterFromClusterName:member(1)'
    summary: Parse the cluster from Cluster resource.
    name: matchClusterFromClusterName(clusterName)
    fullName: matchClusterFromClusterName(clusterName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchClusterFromClusterName(clusterName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the cluster.'
      parameters:
        - id: clusterName
          description: A fully-qualified path representing Cluster resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromDeliveryPipelineName:member(1)'
    summary: Parse the delivery\\_pipeline from DeliveryPipeline resource.
    name: matchDeliveryPipelineFromDeliveryPipelineName(deliveryPipelineName)
    fullName: matchDeliveryPipelineFromDeliveryPipelineName(deliveryPipelineName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchDeliveryPipelineFromDeliveryPipelineName(deliveryPipelineName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the delivery\\_pipeline.'
      parameters:
        - id: deliveryPipelineName
          description: A fully-qualified path representing DeliveryPipeline resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromReleaseName:member(1)'
    summary: Parse the delivery\\_pipeline from Release resource.
    name: matchDeliveryPipelineFromReleaseName(releaseName)
    fullName: matchDeliveryPipelineFromReleaseName(releaseName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchDeliveryPipelineFromReleaseName(releaseName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the delivery\\_pipeline.'
      parameters:
        - id: releaseName
          description: A fully-qualified path representing Release resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromRolloutName:member(1)'
    summary: Parse the delivery\\_pipeline from Rollout resource.
    name: matchDeliveryPipelineFromRolloutName(rolloutName)
    fullName: matchDeliveryPipelineFromRolloutName(rolloutName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchDeliveryPipelineFromRolloutName(rolloutName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the delivery\\_pipeline.'
      parameters:
        - id: rolloutName
          description: A fully-qualified path representing Rollout resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromBuildName:member(1)'
    summary: Parse the location from Build resource.
    name: matchLocationFromBuildName(buildName)
    fullName: matchLocationFromBuildName(buildName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromBuildName(buildName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: buildName
          description: A fully-qualified path representing Build resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromClusterName:member(1)'
    summary: Parse the location from Cluster resource.
    name: matchLocationFromClusterName(clusterName)
    fullName: matchLocationFromClusterName(clusterName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromClusterName(clusterName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: clusterName
          description: A fully-qualified path representing Cluster resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromConfigName:member(1)'
    summary: Parse the location from Config resource.
    name: matchLocationFromConfigName(configName)
    fullName: matchLocationFromConfigName(configName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromConfigName(configName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: configName
          description: A fully-qualified path representing Config resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromDeliveryPipelineName:member(1)'
    summary: Parse the location from DeliveryPipeline resource.
    name: matchLocationFromDeliveryPipelineName(deliveryPipelineName)
    fullName: matchLocationFromDeliveryPipelineName(deliveryPipelineName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromDeliveryPipelineName(deliveryPipelineName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: deliveryPipelineName
          description: A fully-qualified path representing DeliveryPipeline resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromLocationName:member(1)'
    summary: Parse the location from Location resource.
    name: matchLocationFromLocationName(locationName)
    fullName: matchLocationFromLocationName(locationName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromLocationName(locationName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: locationName
          description: A fully-qualified path representing Location resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromReleaseName:member(1)'
    summary: Parse the location from Release resource.
    name: matchLocationFromReleaseName(releaseName)
    fullName: matchLocationFromReleaseName(releaseName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromReleaseName(releaseName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: releaseName
          description: A fully-qualified path representing Release resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromRolloutName:member(1)'
    summary: Parse the location from Rollout resource.
    name: matchLocationFromRolloutName(rolloutName)
    fullName: matchLocationFromRolloutName(rolloutName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromRolloutName(rolloutName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: rolloutName
          description: A fully-qualified path representing Rollout resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromTargetName:member(1)'
    summary: Parse the location from Target resource.
    name: matchLocationFromTargetName(targetName)
    fullName: matchLocationFromTargetName(targetName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromTargetName(targetName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: targetName
          description: A fully-qualified path representing Target resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromWorkerPoolName:member(1)'
    summary: Parse the location from WorkerPool resource.
    name: matchLocationFromWorkerPoolName(workerPoolName)
    fullName: matchLocationFromWorkerPoolName(workerPoolName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromWorkerPoolName(workerPoolName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: workerPoolName
          description: A fully-qualified path representing WorkerPool resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromBuildName:member(1)'
    summary: Parse the project from Build resource.
    name: matchProjectFromBuildName(buildName)
    fullName: matchProjectFromBuildName(buildName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromBuildName(buildName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: buildName
          description: A fully-qualified path representing Build resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromClusterName:member(1)'
    summary: Parse the project from Cluster resource.
    name: matchProjectFromClusterName(clusterName)
    fullName: matchProjectFromClusterName(clusterName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromClusterName(clusterName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: clusterName
          description: A fully-qualified path representing Cluster resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromConfigName:member(1)'
    summary: Parse the project from Config resource.
    name: matchProjectFromConfigName(configName)
    fullName: matchProjectFromConfigName(configName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromConfigName(configName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: configName
          description: A fully-qualified path representing Config resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromDeliveryPipelineName:member(1)'
    summary: Parse the project from DeliveryPipeline resource.
    name: matchProjectFromDeliveryPipelineName(deliveryPipelineName)
    fullName: matchProjectFromDeliveryPipelineName(deliveryPipelineName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromDeliveryPipelineName(deliveryPipelineName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: deliveryPipelineName
          description: A fully-qualified path representing DeliveryPipeline resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromLocationName:member(1)'
    summary: Parse the project from Location resource.
    name: matchProjectFromLocationName(locationName)
    fullName: matchProjectFromLocationName(locationName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromLocationName(locationName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: locationName
          description: A fully-qualified path representing Location resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromProjectName:member(1)'
    summary: Parse the project from Project resource.
    name: matchProjectFromProjectName(projectName)
    fullName: matchProjectFromProjectName(projectName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromProjectName(projectName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: projectName
          description: A fully-qualified path representing Project resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromReleaseName:member(1)'
    summary: Parse the project from Release resource.
    name: matchProjectFromReleaseName(releaseName)
    fullName: matchProjectFromReleaseName(releaseName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromReleaseName(releaseName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: releaseName
          description: A fully-qualified path representing Release resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromRolloutName:member(1)'
    summary: Parse the project from Rollout resource.
    name: matchProjectFromRolloutName(rolloutName)
    fullName: matchProjectFromRolloutName(rolloutName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromRolloutName(rolloutName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: rolloutName
          description: A fully-qualified path representing Rollout resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromTargetName:member(1)'
    summary: Parse the project from Target resource.
    name: matchProjectFromTargetName(targetName)
    fullName: matchProjectFromTargetName(targetName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromTargetName(targetName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: targetName
          description: A fully-qualified path representing Target resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromWorkerPoolName:member(1)'
    summary: Parse the project from WorkerPool resource.
    name: matchProjectFromWorkerPoolName(workerPoolName)
    fullName: matchProjectFromWorkerPoolName(workerPoolName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromWorkerPoolName(workerPoolName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: workerPoolName
          description: A fully-qualified path representing WorkerPool resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromReleaseName:member(1)'
    summary: Parse the release from Release resource.
    name: matchReleaseFromReleaseName(releaseName)
    fullName: matchReleaseFromReleaseName(releaseName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchReleaseFromReleaseName(releaseName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the release.'
      parameters:
        - id: releaseName
          description: A fully-qualified path representing Release resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromRolloutName:member(1)'
    summary: Parse the release from Rollout resource.
    name: matchReleaseFromRolloutName(rolloutName)
    fullName: matchReleaseFromRolloutName(rolloutName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchReleaseFromRolloutName(rolloutName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the release.'
      parameters:
        - id: rolloutName
          description: A fully-qualified path representing Rollout resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchRolloutFromRolloutName:member(1)'
    summary: Parse the rollout from Rollout resource.
    name: matchRolloutFromRolloutName(rolloutName)
    fullName: matchRolloutFromRolloutName(rolloutName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchRolloutFromRolloutName(rolloutName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the rollout.'
      parameters:
        - id: rolloutName
          description: A fully-qualified path representing Rollout resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchTargetFromTargetName:member(1)'
    summary: Parse the target from Target resource.
    name: matchTargetFromTargetName(targetName)
    fullName: matchTargetFromTargetName(targetName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchTargetFromTargetName(targetName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the target.'
      parameters:
        - id: targetName
          description: A fully-qualified path representing Target resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchWorkerPoolFromWorkerPoolName:member(1)'
    summary: Parse the worker\\_pool from WorkerPool resource.
    name: matchWorkerPoolFromWorkerPoolName(workerPoolName)
    fullName: matchWorkerPoolFromWorkerPoolName(workerPoolName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchWorkerPoolFromWorkerPoolName(workerPoolName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the worker\\_pool.'
      parameters:
        - id: workerPoolName
          description: A fully-qualified path representing WorkerPool resource.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#operationsClient:member'
    name: operationsClient
    fullName: operationsClient
    langs:
      - typeScript
    type: property
    syntax:
      content: 'operationsClient: gax.OperationsClient;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#pathTemplates:member'
    name: pathTemplates
    fullName: pathTemplates
    langs:
      - typeScript
    type: property
    syntax:
      content: |-
        pathTemplates: {
                [name: string]: gax.PathTemplate;
            };
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.port:member'
    summary: The port for this API service.
    name: port
    fullName: port
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get port(): number;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#projectPath:member(1)'
    summary: Return a fully-qualified project resource name string.
    name: projectPath(project)
    fullName: projectPath(project)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'projectPath(project: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#releasePath:member(1)'
    summary: Return a fully-qualified release resource name string.
    name: 'releasePath(project, location, deliveryPipeline, release)'
    fullName: 'releasePath(project, location, deliveryPipeline, release)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'releasePath(project: string, location: string, deliveryPipeline: string, release: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: deliveryPipeline
          description: ''
          type:
            - string
        - id: release
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#rolloutPath:member(1)'
    summary: Return a fully-qualified rollout resource name string.
    name: 'rolloutPath(project, location, deliveryPipeline, release, rollout)'
    fullName: 'rolloutPath(project, location, deliveryPipeline, release, rollout)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        rolloutPath(project: string, location: string, deliveryPipeline: string, release: string, rollout: string):
        string;
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: deliveryPipeline
          description: ''
          type:
            - string
        - id: release
          description: ''
          type:
            - string
        - id: rollout
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.scopes:member'
    summary: The scopes needed to make gRPC calls for every method defined in this service.
    name: scopes
    fullName: scopes
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get scopes(): string[];'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.servicePath:member'
    summary: The DNS address for this API service.
    name: servicePath
    fullName: servicePath
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get servicePath(): string;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#targetPath:member(1)'
    summary: Return a fully-qualified target resource name string.
    name: 'targetPath(project, location, target)'
    fullName: 'targetPath(project, location, target)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'targetPath(project: string, location: string, target: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: target
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(1)'
    name: 'updateDeliveryPipeline(request, options)'
    fullName: 'updateDeliveryPipeline(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        updateDeliveryPipeline(request?: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, options?:
        CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(2)'
    name: 'updateDeliveryPipeline(request, options, callback)'
    fullName: 'updateDeliveryPipeline(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        updateDeliveryPipeline(request: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, options:
        CallOptions, callback: Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
        null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(3)'
    name: 'updateDeliveryPipeline(request, callback)'
    fullName: 'updateDeliveryPipeline(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        updateDeliveryPipeline(request: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
        protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
        null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(1)'
    name: 'updateTarget(request, options)'
    fullName: 'updateTarget(request, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        updateTarget(request?: protos.google.cloud.deploy.v1.IUpdateTargetRequest, options?: CallOptions): Promise<[
                LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
                protos.google.longrunning.IOperation | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~0:complex'
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~1:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(2)'
    name: 'updateTarget(request, options, callback)'
    fullName: 'updateTarget(request, options, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        updateTarget(request: protos.google.cloud.deploy.v1.IUpdateTargetRequest, options: CallOptions, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~2:complex'
        - id: options
          description: ''
          type:
            - 'google-gax!CallOptions:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~3:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(3)'
    name: 'updateTarget(request, callback)'
    fullName: 'updateTarget(request, callback)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        updateTarget(request: protos.google.cloud.deploy.v1.IUpdateTargetRequest, callback:
        Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
        protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~4:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~5:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#warn:member'
    name: warn
    fullName: warn
    langs:
      - typeScript
    type: property
    syntax:
      content: 'warn: (code: string, message: string, warnType?: string) => void;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#workerPoolPath:member(1)'
    summary: Return a fully-qualified workerPool resource name string.
    name: 'workerPoolPath(project, location, workerPool)'
    fullName: 'workerPoolPath(project, location, workerPool)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'workerPoolPath(project: string, location: string, workerPool: string): string;'
      return:
        type:
          - string
        description: '{<!-- -->string<!-- -->} Resource name string.'
      parameters:
        - id: project
          description: ''
          type:
            - string
        - id: location
          description: ''
          type:
            - string
        - id: workerPool
          description: ''
          type:
            - string
references:
  - uid: 'google-gax!ClientOptions:interface'
    name: ClientOptions
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IApproveRolloutResponse,
              protos.google.cloud.deploy.v1.IApproveRolloutRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IApproveRolloutResponse,
              protos.google.cloud.deploy.v1.IApproveRolloutRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: google.cloud.deploy.v1.IApproveRolloutResponse
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~1:complex'
    name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: 'google-gax!CallOptions:interface'
    name: CallOptions
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~2:complex'
    name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: google.cloud.deploy.v1.IApproveRolloutResponse
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~4:complex'
    name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: google.cloud.deploy.v1.IApproveRolloutResponse
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: google.cloud.deploy.v1.IApproveRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateDeliveryPipelineProgress~0:complex'
    name: >-
      Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
      protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: >-
      Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
      protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.DeliveryPipeline:class'
        name: google.cloud.deploy.v1.DeliveryPipeline
        fullName: google.cloud.deploy.v1.DeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress~0:complex'
    name: 'Promise<LROperation<protos.google.cloud.deploy.v1.Release, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.cloud.deploy.v1.Release, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Release:class'
        name: google.cloud.deploy.v1.Release
        fullName: google.cloud.deploy.v1.Release
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress~0:complex'
    name: 'Promise<LROperation<protos.google.cloud.deploy.v1.Rollout, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.cloud.deploy.v1.Rollout, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Rollout:class'
        name: google.cloud.deploy.v1.Rollout
        fullName: google.cloud.deploy.v1.Rollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress~0:complex'
    name: 'Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Target:class'
        name: google.cloud.deploy.v1.Target
        fullName: google.cloud.deploy.v1.Target
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress~0:complex'
    name: 'Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: google.protobuf.Empty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress~0:complex'
    name: 'Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: google.protobuf.Empty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateDeliveryPipelineProgress~0:complex'
    name: >-
      Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
      protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: >-
      Promise<LROperation<protos.google.cloud.deploy.v1.DeliveryPipeline,
      protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.DeliveryPipeline:class'
        name: google.cloud.deploy.v1.DeliveryPipeline
        fullName: google.cloud.deploy.v1.DeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress~0:complex'
    name: 'Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>'
    fullName: 'Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>'
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.Target:class'
        name: google.cloud.deploy.v1.Target
        fullName: google.cloud.deploy.v1.Target
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.OperationMetadata:class'
        name: google.cloud.deploy.v1.OperationMetadata
        fullName: google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#close~0:complex'
    name: Promise<void>
    fullName: Promise<void>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <void>
        fullName: <void>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~1:complex'
    name: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~2:complex'
    name: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~4:complex'
    name: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~1:complex'
    name: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    fullName: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        name: google.cloud.deploy.v1.ICreateReleaseRequest
        fullName: google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~2:complex'
    name: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    fullName: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        name: google.cloud.deploy.v1.ICreateReleaseRequest
        fullName: google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~4:complex'
    name: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    fullName: protos.google.cloud.deploy.v1.ICreateReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        name: google.cloud.deploy.v1.ICreateReleaseRequest
        fullName: google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~1:complex'
    name: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    fullName: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        name: google.cloud.deploy.v1.ICreateRolloutRequest
        fullName: google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~2:complex'
    name: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    fullName: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        name: google.cloud.deploy.v1.ICreateRolloutRequest
        fullName: google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~4:complex'
    name: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    fullName: protos.google.cloud.deploy.v1.ICreateRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        name: google.cloud.deploy.v1.ICreateRolloutRequest
        fullName: google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~1:complex'
    name: protos.google.cloud.deploy.v1.ICreateTargetRequest
    fullName: protos.google.cloud.deploy.v1.ICreateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateTargetRequest:interface'
        name: google.cloud.deploy.v1.ICreateTargetRequest
        fullName: google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~2:complex'
    name: protos.google.cloud.deploy.v1.ICreateTargetRequest
    fullName: protos.google.cloud.deploy.v1.ICreateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateTargetRequest:interface'
        name: google.cloud.deploy.v1.ICreateTargetRequest
        fullName: google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~4:complex'
    name: protos.google.cloud.deploy.v1.ICreateTargetRequest
    fullName: protos.google.cloud.deploy.v1.ICreateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ICreateTargetRequest:interface'
        name: google.cloud.deploy.v1.ICreateTargetRequest
        fullName: google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~1:complex'
    name: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~2:complex'
    name: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~3:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~4:complex'
    name: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~5:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~1:complex'
    name: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        name: google.cloud.deploy.v1.IDeleteTargetRequest
        fullName: google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~2:complex'
    name: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        name: google.cloud.deploy.v1.IDeleteTargetRequest
        fullName: google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~3:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~4:complex'
    name: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        name: google.cloud.deploy.v1.IDeleteTargetRequest
        fullName: google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~5:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.protobuf.IEmpty:interface'
        name: google.protobuf.IEmpty
        fullName: google.protobuf.IEmpty
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IConfig,
              protos.google.cloud.deploy.v1.IGetConfigRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IConfig,
              protos.google.cloud.deploy.v1.IGetConfigRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IConfig:interface'
        name: google.cloud.deploy.v1.IConfig
        fullName: google.cloud.deploy.v1.IConfig
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~1:complex'
    name: protos.google.cloud.deploy.v1.IGetConfigRequest
    fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~2:complex'
    name: protos.google.cloud.deploy.v1.IGetConfigRequest
    fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IConfig:interface'
        name: google.cloud.deploy.v1.IConfig
        fullName: google.cloud.deploy.v1.IConfig
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~4:complex'
    name: protos.google.cloud.deploy.v1.IGetConfigRequest
    fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IConfig:interface'
        name: google.cloud.deploy.v1.IConfig
        fullName: google.cloud.deploy.v1.IConfig
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: google.cloud.deploy.v1.IGetConfigRequest
        fullName: google.cloud.deploy.v1.IGetConfigRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IDeliveryPipeline,
              protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IDeliveryPipeline,
              protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~1:complex'
    name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~2:complex'
    name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~4:complex'
    name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getProjectId~0:complex'
    name: Promise<string>
    fullName: Promise<string>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <string>
        fullName: <string>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getProjectId~1:complex'
    name: 'Callback<string, undefined, undefined>'
    fullName: 'Callback<string, undefined, undefined>'
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: '<string, undefined, undefined>'
        fullName: '<string, undefined, undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRelease,
              protos.google.cloud.deploy.v1.IGetReleaseRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRelease,
              protos.google.cloud.deploy.v1.IGetReleaseRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~1:complex'
    name: protos.google.cloud.deploy.v1.IGetReleaseRequest
    fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~2:complex'
    name: protos.google.cloud.deploy.v1.IGetReleaseRequest
    fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~4:complex'
    name: protos.google.cloud.deploy.v1.IGetReleaseRequest
    fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: google.cloud.deploy.v1.IGetReleaseRequest
        fullName: google.cloud.deploy.v1.IGetReleaseRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRollout,
              protos.google.cloud.deploy.v1.IGetRolloutRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRollout,
              protos.google.cloud.deploy.v1.IGetRolloutRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~1:complex'
    name: protos.google.cloud.deploy.v1.IGetRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~2:complex'
    name: protos.google.cloud.deploy.v1.IGetRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~4:complex'
    name: protos.google.cloud.deploy.v1.IGetRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: google.cloud.deploy.v1.IGetRolloutRequest
        fullName: google.cloud.deploy.v1.IGetRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITarget,
              protos.google.cloud.deploy.v1.IGetTargetRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITarget,
              protos.google.cloud.deploy.v1.IGetTargetRequest | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: |-
          ,
                  protos.
        fullName: |-
          ,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~1:complex'
    name: protos.google.cloud.deploy.v1.IGetTargetRequest
    fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~2:complex'
    name: protos.google.cloud.deploy.v1.IGetTargetRequest
    fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~3:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~4:complex'
    name: protos.google.cloud.deploy.v1.IGetTargetRequest
    fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~5:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: google.cloud.deploy.v1.IGetTargetRequest
        fullName: google.cloud.deploy.v1.IGetTargetRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#initialize~0:complex'
    name: |-
      Promise<{
              [name: string]: Function;
          }>
    fullName: |-
      Promise<{
              [name: string]: Function;
          }>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <{
                  [name: string]: 
        fullName: |-
          <{
                  [name: string]: 
      - uid: '!Function:interface'
        name: Function
        fullName: Function
      - name: |-
          ;
              }>
        fullName: |-
          ;
              }>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IDeliveryPipeline[],
              protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest | null,
              protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IDeliveryPipeline[],
              protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest | null,
              protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: |-
          [],
                  protos.
        fullName: |-
          [],
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: |2-
           | null,
                  protos.
        fullName: |2-
           | null,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~1:complex'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~2:complex'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~3:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~4:complex'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~5:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync~1:complex'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '!internal.Transform:class'
    name: Transform
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream~0:complex'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRelease[],
              protos.google.cloud.deploy.v1.IListReleasesRequest | null,
              protos.google.cloud.deploy.v1.IListReleasesResponse
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRelease[],
              protos.google.cloud.deploy.v1.IListReleasesRequest | null,
              protos.google.cloud.deploy.v1.IListReleasesResponse
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: |-
          [],
                  protos.
        fullName: |-
          [],
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
      - name: |2-
           | null,
                  protos.
        fullName: |2-
           | null,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: google.cloud.deploy.v1.IListReleasesResponse
        fullName: google.cloud.deploy.v1.IListReleasesResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~1:complex'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~2:complex'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~3:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: google.cloud.deploy.v1.IListReleasesResponse
        fullName: google.cloud.deploy.v1.IListReleasesResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~4:complex'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~5:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: google.cloud.deploy.v1.IListReleasesResponse
        fullName: google.cloud.deploy.v1.IListReleasesResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IRelease>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRelease:interface'
        name: google.cloud.deploy.v1.IRelease
        fullName: google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync~1:complex'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesStream~0:complex'
    name: protos.google.cloud.deploy.v1.IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: google.cloud.deploy.v1.IListReleasesRequest
        fullName: google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRollout[],
              protos.google.cloud.deploy.v1.IListRolloutsRequest | null,
              protos.google.cloud.deploy.v1.IListRolloutsResponse
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRollout[],
              protos.google.cloud.deploy.v1.IListRolloutsRequest | null,
              protos.google.cloud.deploy.v1.IListRolloutsResponse
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: |-
          [],
                  protos.
        fullName: |-
          [],
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
      - name: |2-
           | null,
                  protos.
        fullName: |2-
           | null,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: google.cloud.deploy.v1.IListRolloutsResponse
        fullName: google.cloud.deploy.v1.IListRolloutsResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~1:complex'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~2:complex'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~3:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: google.cloud.deploy.v1.IListRolloutsResponse
        fullName: google.cloud.deploy.v1.IListRolloutsResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~4:complex'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~5:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: google.cloud.deploy.v1.IListRolloutsResponse
        fullName: google.cloud.deploy.v1.IListRolloutsResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IRollout>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IRollout:interface'
        name: google.cloud.deploy.v1.IRollout
        fullName: google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync~1:complex'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsStream~0:complex'
    name: protos.google.cloud.deploy.v1.IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: google.cloud.deploy.v1.IListRolloutsRequest
        fullName: google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITarget[],
              protos.google.cloud.deploy.v1.IListTargetsRequest | null,
              protos.google.cloud.deploy.v1.IListTargetsResponse
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITarget[],
              protos.google.cloud.deploy.v1.IListTargetsRequest | null,
              protos.google.cloud.deploy.v1.IListTargetsResponse
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  protos.
        fullName: |-
          <[
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: |-
          [],
                  protos.
        fullName: |-
          [],
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
      - name: |2-
           | null,
                  protos.
        fullName: |2-
           | null,
                  protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: google.cloud.deploy.v1.IListTargetsResponse
        fullName: google.cloud.deploy.v1.IListTargetsResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~1:complex'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~2:complex'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~3:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: google.cloud.deploy.v1.IListTargetsResponse
        fullName: google.cloud.deploy.v1.IListTargetsResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~4:complex'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~5:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: 'google-gax!PaginationCallback:interface'
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: google.cloud.deploy.v1.IListTargetsResponse
        fullName: google.cloud.deploy.v1.IListTargetsResponse
      - name: ' | null | undefined, protos.'
        fullName: ' | null | undefined, protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.ITarget>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync~1:complex'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsStream~0:complex'
    name: protos.google.cloud.deploy.v1.IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: google.cloud.deploy.v1.IListTargetsRequest
        fullName: google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~1:complex'
    name: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~2:complex'
    name: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~4:complex'
    name: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        name: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
        fullName: google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: google.cloud.deploy.v1.IDeliveryPipeline
        fullName: google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~0:complex'
    name: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
              protos.google.longrunning.IOperation | undefined,
              {} | undefined
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  protos.
        fullName: |-
          >,
                  protos.
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~1:complex'
    name: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        name: google.cloud.deploy.v1.IUpdateTargetRequest
        fullName: google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~2:complex'
    name: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        name: google.cloud.deploy.v1.IUpdateTargetRequest
        fullName: google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~3:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~4:complex'
    name: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateTargetRequest
    spec.typeScript:
      - name: protos.
        fullName: protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        name: google.cloud.deploy.v1.IUpdateTargetRequest
        fullName: google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~5:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: 'google-gax!Callback:interface'
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: 'google-gax!LROperation:interface'
        name: LROperation
        fullName: LROperation
      - name: <protos.
        fullName: <protos.
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ITarget:interface'
        name: google.cloud.deploy.v1.ITarget
        fullName: google.cloud.deploy.v1.ITarget
      - name: ', protos.'
        fullName: ', protos.'
      - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IOperationMetadata:interface'
        name: google.cloud.deploy.v1.IOperationMetadata
        fullName: google.cloud.deploy.v1.IOperationMetadata
      - name: '>, protos.'
        fullName: '>, protos.'
      - uid: '@google-cloud/deploy!google.longrunning.IOperation:interface'
        name: google.longrunning.IOperation
        fullName: google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
`

exports['cloud-rad docfx generator generates enum page 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
    summary: ExecutionEnvironmentUsage enum.
    name: protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage
    fullName: protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage
    langs:
      - typeScript
    type: enum
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.DEPLOY:member'
      - >-
        @google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED:member
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.RENDER:member'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.DEPLOY:member'
    name: DEPLOY
    fullName: DEPLOY
    langs:
      - typeScript
    type: field
    numericValue: '2'
  - uid: >-
      @google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED:member
    name: EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED
    fullName: EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED
    langs:
      - typeScript
    type: field
    numericValue: '0'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.RENDER:member'
    name: RENDER
    fullName: RENDER
    langs:
      - typeScript
    type: field
    numericValue: '1'
`

exports['cloud-rad docfx generator generates interface page 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
    summary: Properties of a TargetRender.
    name: protos.google.cloud.deploy.v1.Release.ITargetRender
    fullName: protos.google.cloud.deploy.v1.Release.ITargetRender
    langs:
      - typeScript
    type: interface
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingBuild:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingState:member'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingBuild:member'
    summary: TargetRender renderingBuild
    name: renderingBuild
    fullName: renderingBuild
    langs:
      - typeScript
    type: property
    syntax:
      content: 'renderingBuild?: (string|null);'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingState:member'
    summary: TargetRender renderingState
    name: renderingState
    fullName: renderingState
    langs:
      - typeScript
    type: property
    syntax:
      content: >-
        renderingState?: (google.cloud.deploy.v1.Release.TargetRender.TargetRenderState|keyof typeof
        google.cloud.deploy.v1.Release.TargetRender.TargetRenderState|null);
`

exports['cloud-rad docfx generator generates class page 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
    summary: Represents an ApproveRolloutResponse.
    name: protos.google.cloud.deploy.v1.ApproveRolloutResponse
    fullName: protos.google.cloud.deploy.v1.ApproveRolloutResponse
    langs:
      - typeScript
    type: class
    implements:
      - '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:constructor(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.create:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.fromObject:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse#toJSON:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.toObject:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.verify:member(1)'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:constructor(1)'
    summary: Constructs a new ApproveRolloutResponse.
    name: (constructor)(properties)
    fullName: (constructor)(properties)
    langs:
      - typeScript
    type: constructor
    syntax:
      content: 'constructor(properties?: google.cloud.deploy.v1.IApproveRolloutResponse);'
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.create:member(1)'
    summary: Creates a new ApproveRolloutResponse instance using the specified properties.
    name: create(properties)
    fullName: create(properties)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static create(properties?: google.cloud.deploy.v1.IApproveRolloutResponse):
        google.cloud.deploy.v1.ApproveRolloutResponse;
      return:
        type:
          - '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse instance
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode:member(1)'
    summary: Decodes an ApproveRolloutResponse message from the specified reader or buffer.
    name: 'decode(reader, length)'
    fullName: 'decode(reader, length)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number):
        google.cloud.deploy.v1.ApproveRolloutResponse;
      return:
        type:
          - '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse
      parameters:
        - id: reader
          description: Reader or buffer to decode from
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode~0:complex'
        - id: length
          description: Message length if known beforehand
          type:
            - number
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited:member(1)'
    summary: 'Decodes an ApproveRolloutResponse message from the specified reader or buffer, length delimited.'
    name: decodeDelimited(reader)
    fullName: decodeDelimited(reader)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)):
        google.cloud.deploy.v1.ApproveRolloutResponse;
      return:
        type:
          - '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse
      parameters:
        - id: reader
          description: Reader or buffer to decode from
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode:member(1)'
    summary: Encodes the specified ApproveRolloutResponse message. Does not implicitly  messages.
    name: 'encode(message, writer)'
    fullName: 'encode(message, writer)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static encode(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?: $protobuf.Writer):
        $protobuf.Writer;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode~0:complex'
        description: Writer
      parameters:
        - id: message
          description: ApproveRolloutResponse message or plain object to encode
          type:
            - '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        - id: writer
          description: Writer to encode to
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode~1:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited:member(1)'
    summary: 'Encodes the specified ApproveRolloutResponse message, length delimited. Does not implicitly  messages.'
    name: 'encodeDelimited(message, writer)'
    fullName: 'encodeDelimited(message, writer)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static encodeDelimited(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?:
        $protobuf.Writer): $protobuf.Writer;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited~0:complex'
        description: Writer
      parameters:
        - id: message
          description: ApproveRolloutResponse message or plain object to encode
          type:
            - '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        - id: writer
          description: Writer to encode to
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited~1:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.fromObject:member(1)'
    summary: >-
      Creates an ApproveRolloutResponse message from a plain object. Also converts values to their respective internal
      types.
    name: fromObject(object)
    fullName: fromObject(object)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static fromObject(object: { [k: string]: any }): google.cloud.deploy.v1.ApproveRolloutResponse;'
      return:
        type:
          - '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse
      parameters:
        - id: object
          description: Plain object
          type:
            - '{ [k: string]: any }'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse#toJSON:member(1)'
    summary: Converts this ApproveRolloutResponse to JSON.
    name: toJSON()
    fullName: toJSON()
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public toJSON(): { [k: string]: any };'
      return:
        type:
          - '{ [k: string]: any }'
        description: JSON object
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.toObject:member(1)'
    summary: Creates a plain object from an ApproveRolloutResponse message. Also converts values to other types if specified.
    name: 'toObject(message, options)'
    fullName: 'toObject(message, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static toObject(message: google.cloud.deploy.v1.ApproveRolloutResponse, options?:
        $protobuf.IConversionOptions): { [k: string]: any };
      return:
        type:
          - '{ [k: string]: any }'
        description: Plain object
      parameters:
        - id: message
          description: ApproveRolloutResponse
          type:
            - '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
        - id: options
          description: Conversion options
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.toObject~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.verify:member(1)'
    summary: Verifies an ApproveRolloutResponse message.
    name: verify(message)
    fullName: verify(message)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static verify(message: { [k: string]: any }): (string|null);'
      return:
        type:
          - (string|null)
        description: '\`null\` if valid, otherwise the reason why it is not'
      parameters:
        - id: message
          description: Plain object to verify
          type:
            - '{ [k: string]: any }'
references:
  - uid: '@google-cloud/deploy!google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    name: IApproveRolloutResponse
  - uid: '@google-cloud/deploy!google.cloud.deploy.v1.ApproveRolloutResponse:class'
    name: google.cloud.deploy.v1.ApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: ($protobuf.Reader|Uint8Array)
    spec.typeScript:
      - name: ($protobuf.
        fullName: ($protobuf.
      - uid: 'protobufjs!Reader:class'
        name: Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: ($protobuf.Reader|Uint8Array)
    spec.typeScript:
      - name: ($protobuf.
        fullName: ($protobuf.
      - uid: 'protobufjs!Reader:class'
        name: Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode~0:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode~1:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited~0:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited~1:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.toObject~0:complex'
    name: $protobuf.IConversionOptions
    fullName: $protobuf.IConversionOptions
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!IConversionOptions:interface'
        name: IConversionOptions
        fullName: IConversionOptions
`

exports['cloud-rad docfx generator generates dependency pages 1'] = `
### YamlMime:UniversalReference
items:
  - uid: '@google-cloud/deploy!protos.google.rpc.Status:class'
    summary: Represents a Status.
    name: protos.google.rpc.Status
    fullName: protos.google.rpc.Status
    langs:
      - typeScript
    type: class
    implements:
      - '@google-cloud/deploy!google.rpc.IStatus:interface'
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!protos.google.rpc.Status:constructor(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status#code:member'
      - '@google-cloud/deploy!protos.google.rpc.Status.create:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.decode:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.decodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status#details:member'
      - '@google-cloud/deploy!protos.google.rpc.Status.encode:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.fromObject:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status#message:member'
      - '@google-cloud/deploy!protos.google.rpc.Status#toJSON:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.toObject:member(1)'
      - '@google-cloud/deploy!protos.google.rpc.Status.verify:member(1)'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status:constructor(1)'
    summary: Constructs a new Status.
    name: (constructor)(properties)
    fullName: (constructor)(properties)
    langs:
      - typeScript
    type: constructor
    syntax:
      content: 'constructor(properties?: google.rpc.IStatus);'
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!google.rpc.IStatus:interface'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status#code:member'
    summary: Status code.
    name: code
    fullName: code
    langs:
      - typeScript
    type: property
    syntax:
      content: 'public code: number;'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.create:member(1)'
    summary: Creates a new Status instance using the specified properties.
    name: create(properties)
    fullName: create(properties)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static create(properties?: google.rpc.IStatus): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!google.rpc.Status:class'
        description: Status instance
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!google.rpc.IStatus:interface'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decode:member(1)'
    summary: Decodes a Status message from the specified reader or buffer.
    name: 'decode(reader, length)'
    fullName: 'decode(reader, length)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!google.rpc.Status:class'
        description: Status
      parameters:
        - id: reader
          description: Reader or buffer to decode from
          type:
            - '@google-cloud/deploy!protos.google.rpc.Status.decode~0:complex'
        - id: length
          description: Message length if known beforehand
          type:
            - number
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decodeDelimited:member(1)'
    summary: 'Decodes a Status message from the specified reader or buffer, length delimited.'
    name: decodeDelimited(reader)
    fullName: decodeDelimited(reader)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!google.rpc.Status:class'
        description: Status
      parameters:
        - id: reader
          description: Reader or buffer to decode from
          type:
            - '@google-cloud/deploy!protos.google.rpc.Status.decodeDelimited~0:complex'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status#details:member'
    summary: Status details.
    name: details
    fullName: details
    langs:
      - typeScript
    type: property
    syntax:
      content: 'public details: google.protobuf.IAny[];'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encode:member(1)'
    summary: Encodes the specified Status message. Does not implicitly  messages.
    name: 'encode(message, writer)'
    fullName: 'encode(message, writer)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.rpc.Status.encode~0:complex'
        description: Writer
      parameters:
        - id: message
          description: Status message or plain object to encode
          type:
            - '@google-cloud/deploy!google.rpc.IStatus:interface'
        - id: writer
          description: Writer to encode to
          type:
            - '@google-cloud/deploy!protos.google.rpc.Status.encode~1:complex'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited:member(1)'
    summary: 'Encodes the specified Status message, length delimited. Does not implicitly  messages.'
    name: 'encodeDelimited(message, writer)'
    fullName: 'encodeDelimited(message, writer)'
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited~0:complex'
        description: Writer
      parameters:
        - id: message
          description: Status message or plain object to encode
          type:
            - '@google-cloud/deploy!google.rpc.IStatus:interface'
        - id: writer
          description: Writer to encode to
          type:
            - '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited~1:complex'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.fromObject:member(1)'
    summary: Creates a Status message from a plain object. Also converts values to their respective internal types.
    name: fromObject(object)
    fullName: fromObject(object)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static fromObject(object: { [k: string]: any }): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!google.rpc.Status:class'
        description: Status
      parameters:
        - id: object
          description: Plain object
          type:
            - '{ [k: string]: any }'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status#message:member'
    summary: Status message.
    name: message
    fullName: message
    langs:
      - typeScript
    type: property
    syntax:
      content: 'public message: string;'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status#toJSON:member(1)'
    summary: Converts this Status to JSON.
    name: toJSON()
    fullName: toJSON()
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public toJSON(): { [k: string]: any };'
      return:
        type:
          - '{ [k: string]: any }'
        description: JSON object
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.toObject:member(1)'
    summary: Creates a plain object from a Status message. Also converts values to other types if specified.
    name: 'toObject(message, options)'
    fullName: 'toObject(message, options)'
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any
        };
      return:
        type:
          - '{ [k: string]: any }'
        description: Plain object
      parameters:
        - id: message
          description: Status
          type:
            - '@google-cloud/deploy!google.rpc.Status:class'
        - id: options
          description: Conversion options
          type:
            - '@google-cloud/deploy!protos.google.rpc.Status.toObject~0:complex'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.verify:member(1)'
    summary: Verifies a Status message.
    name: verify(message)
    fullName: verify(message)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static verify(message: { [k: string]: any }): (string|null);'
      return:
        type:
          - (string|null)
        description: '\`null\` if valid, otherwise the reason why it is not'
      parameters:
        - id: message
          description: Plain object to verify
          type:
            - '{ [k: string]: any }'
references:
  - uid: '@google-cloud/deploy!google.rpc.IStatus:interface'
    name: IStatus
  - uid: '@google-cloud/deploy!google.rpc.Status:class'
    name: google.rpc.Status
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decode~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: ($protobuf.Reader|Uint8Array)
    spec.typeScript:
      - name: ($protobuf.
        fullName: ($protobuf.
      - uid: 'protobufjs!Reader:class'
        name: Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decodeDelimited~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: ($protobuf.Reader|Uint8Array)
    spec.typeScript:
      - name: ($protobuf.
        fullName: ($protobuf.
      - uid: 'protobufjs!Reader:class'
        name: Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encode~0:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encode~1:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited~0:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited~1:complex'
    name: $protobuf.Writer
    fullName: $protobuf.Writer
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!Writer:class'
        name: Writer
        fullName: Writer
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.toObject~0:complex'
    name: $protobuf.IConversionOptions
    fullName: $protobuf.IConversionOptions
    spec.typeScript:
      - name: $protobuf.
        fullName: $protobuf.
      - uid: 'protobufjs!IConversionOptions:interface'
        name: IConversionOptions
        fullName: IConversionOptions
`
