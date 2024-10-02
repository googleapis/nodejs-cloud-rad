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
      - name: Classes
        items:
          - name: protos.google.cloud.deploy.v1
            items:
              - name: AbandonReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseRequest:class'
              - name: AbandonReleaseResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseResponse:class'
              - name: AdvanceChildRolloutJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJob:class'
              - name: AdvanceChildRolloutJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJobRun:class'
              - name: AdvanceRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutRequest:class'
              - name: AdvanceRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutResponse:class'
              - name: AnthosCluster
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AnthosCluster:class'
              - name: ApproveRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutRequest:class'
              - name: ApproveRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
              - name: BuildArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.BuildArtifact:class'
              - name: Canary
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Canary:class'
              - name: CanaryDeployment
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CanaryDeployment:class'
              - name: CancelRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutRequest:class'
              - name: CancelRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutResponse:class'
              - name: ChildRolloutJobs
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ChildRolloutJobs:class'
              - name: CloudDeploy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy:class'
              - name: CloudRunConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunConfig:class'
              - name: CloudRunLocation
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunLocation:class'
              - name: CloudRunMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunMetadata:class'
              - name: CloudRunRenderMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunRenderMetadata:class'
              - name: Config
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
              - name: CreateChildRolloutJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJob:class'
              - name: CreateChildRolloutJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJobRun:class'
              - name: CreateDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest:class'
              - name: CreateReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateReleaseRequest:class'
              - name: CreateRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateRolloutRequest:class'
              - name: CreateTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateTargetRequest:class'
              - name: CustomCanaryDeployment
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment:class'
              - name: DefaultPool
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DefaultPool:class'
              - name: DeleteDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest:class'
              - name: DeleteTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteTargetRequest:class'
              - name: DeliveryPipeline
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
              - name: DeliveryPipelineNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipelineNotificationEvent:class'
              - name: DeployArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployArtifact:class'
              - name: DeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJob:class'
              - name: DeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun:class'
              - name: DeployJobRunMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRunMetadata:class'
              - name: DeployParameters
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployParameters:class'
              - name: DeploymentJobs
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeploymentJobs:class'
              - name: ExecutionConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig:class'
              - name: GatewayServiceMesh
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.GatewayServiceMesh:class'
              - name: GetConfigRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetConfigRequest:class'
              - name: GetDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest:class'
              - name: GetJobRunRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetJobRunRequest:class'
              - name: GetReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetReleaseRequest:class'
              - name: GetRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetRolloutRequest:class'
              - name: GetTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetTargetRequest:class'
              - name: GkeCluster
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GkeCluster:class'
              - name: IgnoreJobRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobRequest:class'
              - name: IgnoreJobResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobResponse:class'
              - name: Job
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job:class'
              - name: JobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun:class'
              - name: JobRunNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRunNotificationEvent:class'
              - name: KubernetesConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig:class'
              - name: ListDeliveryPipelinesRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest:class'
              - name: ListDeliveryPipelinesResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
              - name: ListJobRunsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsRequest:class'
              - name: ListJobRunsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsResponse:class'
              - name: ListReleasesRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesRequest:class'
              - name: ListReleasesResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesResponse:class'
              - name: ListRolloutsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsRequest:class'
              - name: ListRolloutsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsResponse:class'
              - name: ListTargetsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsRequest:class'
              - name: ListTargetsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsResponse:class'
              - name: Metadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Metadata:class'
              - name: MultiTarget
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.MultiTarget:class'
              - name: OperationMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
              - name: Phase
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase:class'
              - name: PhaseArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.PhaseArtifact:class'
              - name: PhaseConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.PhaseConfig:class'
              - name: PipelineCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineCondition:class'
              - name: PipelineReadyCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineReadyCondition:class'
              - name: Postdeploy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Postdeploy:class'
              - name: PostdeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJob:class'
              - name: PostdeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun:class'
              - name: Predeploy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Predeploy:class'
              - name: PredeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJob:class'
              - name: PredeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun:class'
              - name: PrivatePool
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PrivatePool:class'
              - name: Release
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
              - name: ReleaseCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseCondition:class'
              - name: ReleaseNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseNotificationEvent:class'
              - name: ReleaseReadyCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseReadyCondition:class'
              - name: ReleaseRenderEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseRenderEvent:class'
              - name: RenderMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RenderMetadata:class'
              - name: RetryJobRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobRequest:class'
              - name: RetryJobResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobResponse:class'
              - name: Rollout
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
              - name: RolloutNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RolloutNotificationEvent:class'
              - name: RuntimeConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RuntimeConfig:class'
              - name: SerialPipeline
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SerialPipeline:class'
              - name: ServiceNetworking
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.ServiceNetworking:class'
              - name: SkaffoldSupportedCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.SkaffoldSupportedCondition:class'
              - name: SkaffoldVersion
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldVersion:class'
              - name: Stage
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Stage:class'
              - name: Standard
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Standard:class'
              - name: Strategy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Strategy:class'
              - name: Target
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
              - name: TargetArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact:class'
              - name: TargetNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetNotificationEvent:class'
              - name: TargetRender
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender:class'
              - name: TargetsPresentCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsPresentCondition:class'
              - name: TargetsTypeCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsTypeCondition:class'
              - name: TerminateJobRunRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunRequest:class'
              - name: TerminateJobRunResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunResponse:class'
              - name: UpdateDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest:class'
              - name: UpdateTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateTargetRequest:class'
              - name: VerifyJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJob:class'
              - name: VerifyJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun:class'
          - name: protos.google.api
            items:
              - name: ClientLibrarySettings
                uid: '@google-cloud/deploy!protos.google.api.ClientLibrarySettings:class'
              - name: CommonLanguageSettings
                uid: '@google-cloud/deploy!protos.google.api.CommonLanguageSettings:class'
              - name: CppSettings
                uid: '@google-cloud/deploy!protos.google.api.CppSettings:class'
              - name: CustomHttpPattern
                uid: '@google-cloud/deploy!protos.google.api.CustomHttpPattern:class'
              - name: DotnetSettings
                uid: '@google-cloud/deploy!protos.google.api.DotnetSettings:class'
              - name: GoSettings
                uid: '@google-cloud/deploy!protos.google.api.GoSettings:class'
              - name: Http
                uid: '@google-cloud/deploy!protos.google.api.Http:class'
              - name: HttpRule
                uid: '@google-cloud/deploy!protos.google.api.HttpRule:class'
              - name: JavaSettings
                uid: '@google-cloud/deploy!protos.google.api.JavaSettings:class'
              - name: LongRunning
                uid: '@google-cloud/deploy!protos.google.api.MethodSettings.LongRunning:class'
              - name: MethodSettings
                uid: '@google-cloud/deploy!protos.google.api.MethodSettings:class'
              - name: NodeSettings
                uid: '@google-cloud/deploy!protos.google.api.NodeSettings:class'
              - name: PhpSettings
                uid: '@google-cloud/deploy!protos.google.api.PhpSettings:class'
              - name: Publishing
                uid: '@google-cloud/deploy!protos.google.api.Publishing:class'
              - name: PythonSettings
                uid: '@google-cloud/deploy!protos.google.api.PythonSettings:class'
              - name: ResourceDescriptor
                uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor:class'
              - name: ResourceReference
                uid: '@google-cloud/deploy!protos.google.api.ResourceReference:class'
              - name: RubySettings
                uid: '@google-cloud/deploy!protos.google.api.RubySettings:class'
          - name: protos.google.longrunning
            items:
              - name: CancelOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
              - name: DeleteOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
              - name: GetOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
              - name: ListOperationsRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsRequest:class'
              - name: ListOperationsResponse
                uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsResponse:class'
              - name: Operation
                uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
              - name: OperationInfo
                uid: '@google-cloud/deploy!protos.google.longrunning.OperationInfo:class'
              - name: Operations
                uid: '@google-cloud/deploy!protos.google.longrunning.Operations:class'
              - name: WaitOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.WaitOperationRequest:class'
          - name: protos.google.protobuf
            items:
              - name: Annotation
                uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation:class'
              - name: Any
                uid: '@google-cloud/deploy!protos.google.protobuf.Any:class'
              - name: Declaration
                uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.Declaration:class'
              - name: DescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto:class'
              - name: Duration
                uid: '@google-cloud/deploy!protos.google.protobuf.Duration:class'
              - name: EditionDefault
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.EditionDefault:class'
              - name: Empty
                uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
              - name: EnumDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto:class'
              - name: EnumOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumOptions:class'
              - name: EnumReservedRange
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.EnumReservedRange:class'
              - name: EnumValueDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumValueDescriptorProto:class'
              - name: EnumValueOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumValueOptions:class'
              - name: ExtensionRange
                uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ExtensionRange:class'
              - name: ExtensionRangeOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions:class'
              - name: FeatureSet
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet:class'
              - name: FeatureSetDefaults
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults:class'
              - name: FeatureSetEditionDefault
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault:class'
              - name: FieldDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto:class'
              - name: FieldMask
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldMask:class'
              - name: FieldOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions:class'
              - name: FileDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.FileDescriptorProto:class'
              - name: FileDescriptorSet
                uid: '@google-cloud/deploy!protos.google.protobuf.FileDescriptorSet:class'
              - name: FileOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.FileOptions:class'
              - name: GeneratedCodeInfo
                uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo:class'
              - name: Location
                uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.Location:class'
              - name: MessageOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.MessageOptions:class'
              - name: MethodDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.MethodDescriptorProto:class'
              - name: MethodOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.MethodOptions:class'
              - name: NamePart
                uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.NamePart:class'
              - name: OneofDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.OneofDescriptorProto:class'
              - name: OneofOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.OneofOptions:class'
              - name: ReservedRange
                uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.ReservedRange:class'
              - name: ServiceDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.ServiceDescriptorProto:class'
              - name: ServiceOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.ServiceOptions:class'
              - name: SourceCodeInfo
                uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo:class'
              - name: Timestamp
                uid: '@google-cloud/deploy!protos.google.protobuf.Timestamp:class'
              - name: UninterpretedOption
                uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption:class'
          - name: protos.google.rpc
            items:
              - name: Status
                uid: '@google-cloud/deploy!protos.google.rpc.Status:class'
          - name: protos.google.type
            items:
              - name: Date
                uid: '@google-cloud/deploy!protos.google.type.Date:class'
      - name: Interfaces
        items:
          - name: protos.google.cloud.deploy.v1
            items:
              - name: IAbandonReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
              - name: IAbandonReleaseResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
              - name: IAdvanceChildRolloutJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJob:interface'
              - name: IAdvanceChildRolloutJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJobRun:interface'
              - name: IAdvanceRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
              - name: IAdvanceRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
              - name: IAnthosCluster
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAnthosCluster:interface'
              - name: IApproveRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
              - name: IApproveRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
              - name: IBuildArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IBuildArtifact:interface'
              - name: ICanary
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanary:interface'
              - name: ICanaryDeployment
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanaryDeployment:interface'
              - name: ICancelRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
              - name: ICancelRolloutResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
              - name: IChildRolloutJobs
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IChildRolloutJobs:interface'
              - name: ICloudRunConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunConfig:interface'
              - name: ICloudRunLocation
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunLocation:interface'
              - name: ICloudRunMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunMetadata:interface'
              - name: ICloudRunRenderMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunRenderMetadata:interface'
              - name: IConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
              - name: ICreateChildRolloutJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJob:interface'
              - name: ICreateChildRolloutJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJobRun:interface'
              - name: ICreateDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
              - name: ICreateReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
              - name: ICreateRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
              - name: ICreateTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
              - name: ICustomCanaryDeployment
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICustomCanaryDeployment:interface'
              - name: IDefaultPool
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDefaultPool:interface'
              - name: IDeleteDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
              - name: IDeleteTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
              - name: IDeliveryPipeline
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
              - name: IDeliveryPipelineNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipelineNotificationEvent:interface'
              - name: IDeployArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployArtifact:interface'
              - name: IDeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJob:interface'
              - name: IDeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRun:interface'
              - name: IDeployJobRunMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRunMetadata:interface'
              - name: IDeployParameters
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployParameters:interface'
              - name: IDeploymentJobs
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeploymentJobs:interface'
              - name: IExecutionConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IExecutionConfig:interface'
              - name: IGatewayServiceMesh
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IGatewayServiceMesh:interface'
              - name: IGetConfigRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
              - name: IGetDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
              - name: IGetJobRunRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
              - name: IGetReleaseRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
              - name: IGetRolloutRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
              - name: IGetTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
              - name: IGkeCluster
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGkeCluster:interface'
              - name: IIgnoreJobRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
              - name: IIgnoreJobResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
              - name: IJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJob:interface'
              - name: IJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
              - name: IJobRunNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRunNotificationEvent:interface'
              - name: IKubernetesConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IKubernetesConfig:interface'
              - name: IListDeliveryPipelinesRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
              - name: IListDeliveryPipelinesResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
              - name: IListJobRunsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
              - name: IListJobRunsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
              - name: IListReleasesRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
              - name: IListReleasesResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
              - name: IListRolloutsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
              - name: IListRolloutsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
              - name: IListTargetsRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
              - name: IListTargetsResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
              - name: IMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMetadata:interface'
              - name: IMultiTarget
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMultiTarget:interface'
              - name: IOperationMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
              - name: IPhase
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPhase:interface'
              - name: IPhaseArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.IPhaseArtifact:interface'
              - name: IPhaseConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.IPhaseConfig:interface'
              - name: IPipelineCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineCondition:interface'
              - name: IPipelineReadyCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineReadyCondition:interface'
              - name: IPostdeploy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeploy:interface'
              - name: IPostdeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJob:interface'
              - name: IPostdeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJobRun:interface'
              - name: IPredeploy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeploy:interface'
              - name: IPredeployJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJob:interface'
              - name: IPredeployJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJobRun:interface'
              - name: IPrivatePool
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPrivatePool:interface'
              - name: IRelease
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
              - name: IReleaseCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseCondition:interface'
              - name: IReleaseNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseNotificationEvent:interface'
              - name: IReleaseReadyCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseReadyCondition:interface'
              - name: IReleaseRenderEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseRenderEvent:interface'
              - name: IRenderMetadata
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRenderMetadata:interface'
              - name: IRetryJobRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
              - name: IRetryJobResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
              - name: IRollout
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
              - name: IRolloutNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRolloutNotificationEvent:interface'
              - name: IRuntimeConfig
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRuntimeConfig:interface'
              - name: ISerialPipeline
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISerialPipeline:interface'
              - name: IServiceNetworking
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IServiceNetworking:interface'
              - name: ISkaffoldSupportedCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ISkaffoldSupportedCondition:interface'
              - name: ISkaffoldVersion
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISkaffoldVersion:interface'
              - name: IStage
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStage:interface'
              - name: IStandard
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStandard:interface'
              - name: IStrategy
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStrategy:interface'
              - name: ITarget
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
              - name: ITargetArtifact
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetArtifact:interface'
              - name: ITargetNotificationEvent
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetNotificationEvent:interface'
              - name: ITargetRender
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
              - name: ITargetsPresentCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsPresentCondition:interface'
              - name: ITargetsTypeCondition
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsTypeCondition:interface'
              - name: ITerminateJobRunRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
              - name: ITerminateJobRunResponse
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
              - name: IUpdateDeliveryPipelineRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
              - name: IUpdateTargetRequest
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
              - name: IVerifyJob
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJob:interface'
              - name: IVerifyJobRun
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJobRun:interface'
          - name: protos.google.api
            items:
              - name: IClientLibrarySettings
                uid: '@google-cloud/deploy!protos.google.api.IClientLibrarySettings:interface'
              - name: ICommonLanguageSettings
                uid: '@google-cloud/deploy!protos.google.api.ICommonLanguageSettings:interface'
              - name: ICppSettings
                uid: '@google-cloud/deploy!protos.google.api.ICppSettings:interface'
              - name: ICustomHttpPattern
                uid: '@google-cloud/deploy!protos.google.api.ICustomHttpPattern:interface'
              - name: IDotnetSettings
                uid: '@google-cloud/deploy!protos.google.api.IDotnetSettings:interface'
              - name: IGoSettings
                uid: '@google-cloud/deploy!protos.google.api.IGoSettings:interface'
              - name: IHttp
                uid: '@google-cloud/deploy!protos.google.api.IHttp:interface'
              - name: IHttpRule
                uid: '@google-cloud/deploy!protos.google.api.IHttpRule:interface'
              - name: IJavaSettings
                uid: '@google-cloud/deploy!protos.google.api.IJavaSettings:interface'
              - name: ILongRunning
                uid: '@google-cloud/deploy!protos.google.api.MethodSettings.ILongRunning:interface'
              - name: IMethodSettings
                uid: '@google-cloud/deploy!protos.google.api.IMethodSettings:interface'
              - name: INodeSettings
                uid: '@google-cloud/deploy!protos.google.api.INodeSettings:interface'
              - name: IPhpSettings
                uid: '@google-cloud/deploy!protos.google.api.IPhpSettings:interface'
              - name: IPublishing
                uid: '@google-cloud/deploy!protos.google.api.IPublishing:interface'
              - name: IPythonSettings
                uid: '@google-cloud/deploy!protos.google.api.IPythonSettings:interface'
              - name: IResourceDescriptor
                uid: '@google-cloud/deploy!protos.google.api.IResourceDescriptor:interface'
              - name: IResourceReference
                uid: '@google-cloud/deploy!protos.google.api.IResourceReference:interface'
              - name: IRubySettings
                uid: '@google-cloud/deploy!protos.google.api.IRubySettings:interface'
          - name: protos.google.longrunning
            items:
              - name: ICancelOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.ICancelOperationRequest:interface'
              - name: IDeleteOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.IDeleteOperationRequest:interface'
              - name: IGetOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.IGetOperationRequest:interface'
              - name: IListOperationsRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.IListOperationsRequest:interface'
              - name: IListOperationsResponse
                uid: '@google-cloud/deploy!protos.google.longrunning.IListOperationsResponse:interface'
              - name: IOperation
                uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
              - name: IOperationInfo
                uid: '@google-cloud/deploy!protos.google.longrunning.IOperationInfo:interface'
              - name: IWaitOperationRequest
                uid: '@google-cloud/deploy!protos.google.longrunning.IWaitOperationRequest:interface'
          - name: protos.google.protobuf
            items:
              - name: IAnnotation
                uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.IAnnotation:interface'
              - name: IAny
                uid: '@google-cloud/deploy!protos.google.protobuf.IAny:interface'
              - name: IDeclaration
                uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.IDeclaration:interface'
              - name: IDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IDescriptorProto:interface'
              - name: IDuration
                uid: '@google-cloud/deploy!protos.google.protobuf.IDuration:interface'
              - name: IEditionDefault
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.IEditionDefault:interface'
              - name: IEmpty
                uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
              - name: IEnumDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IEnumDescriptorProto:interface'
              - name: IEnumOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IEnumOptions:interface'
              - name: IEnumReservedRange
                uid: '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.IEnumReservedRange:interface'
              - name: IEnumValueDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IEnumValueDescriptorProto:interface'
              - name: IEnumValueOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IEnumValueOptions:interface'
              - name: IExtensionRange
                uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IExtensionRange:interface'
              - name: IExtensionRangeOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IExtensionRangeOptions:interface'
              - name: IFeatureSet
                uid: '@google-cloud/deploy!protos.google.protobuf.IFeatureSet:interface'
              - name: IFeatureSetDefaults
                uid: '@google-cloud/deploy!protos.google.protobuf.IFeatureSetDefaults:interface'
              - name: IFeatureSetEditionDefault
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault:interface'
              - name: IFieldDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IFieldDescriptorProto:interface'
              - name: IFieldMask
                uid: '@google-cloud/deploy!protos.google.protobuf.IFieldMask:interface'
              - name: IFieldOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IFieldOptions:interface'
              - name: IFileDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorProto:interface'
              - name: IFileDescriptorSet
                uid: '@google-cloud/deploy!protos.google.protobuf.IFileDescriptorSet:interface'
              - name: IFileOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IFileOptions:interface'
              - name: IGeneratedCodeInfo
                uid: '@google-cloud/deploy!protos.google.protobuf.IGeneratedCodeInfo:interface'
              - name: ILocation
                uid: '@google-cloud/deploy!protos.google.protobuf.SourceCodeInfo.ILocation:interface'
              - name: IMessageOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IMessageOptions:interface'
              - name: IMethodDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IMethodDescriptorProto:interface'
              - name: IMethodOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IMethodOptions:interface'
              - name: INamePart
                uid: '@google-cloud/deploy!protos.google.protobuf.UninterpretedOption.INamePart:interface'
              - name: IOneofDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IOneofDescriptorProto:interface'
              - name: IOneofOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IOneofOptions:interface'
              - name: IReservedRange
                uid: '@google-cloud/deploy!protos.google.protobuf.DescriptorProto.IReservedRange:interface'
              - name: IServiceDescriptorProto
                uid: '@google-cloud/deploy!protos.google.protobuf.IServiceDescriptorProto:interface'
              - name: IServiceOptions
                uid: '@google-cloud/deploy!protos.google.protobuf.IServiceOptions:interface'
              - name: ISourceCodeInfo
                uid: '@google-cloud/deploy!protos.google.protobuf.ISourceCodeInfo:interface'
              - name: ITimestamp
                uid: '@google-cloud/deploy!protos.google.protobuf.ITimestamp:interface'
              - name: IUninterpretedOption
                uid: '@google-cloud/deploy!protos.google.protobuf.IUninterpretedOption:interface'
          - name: protos.google.rpc
            items:
              - name: IStatus
                uid: '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
          - name: protos.google.type
            items:
              - name: IDate
                uid: '@google-cloud/deploy!protos.google.type.IDate:interface'
      - name: Enums
        items:
          - name: protos.google.cloud.deploy.v1
            items:
              - name: ApprovalState
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.ApprovalState:enum'
              - name: ExecutionEnvironmentUsage
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun.FailureCause:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun.FailureCause:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun.FailureCause:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.FailureCause:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.FailureCause:enum'
              - name: FailureCause
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun.FailureCause:enum'
              - name: RenderState
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.RenderState:enum'
              - name: SkaffoldSupportState
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldSupportState:enum'
              - name: State
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job.State:enum'
              - name: State
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun.State:enum'
              - name: State
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase.State:enum'
              - name: State
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.State:enum'
              - name: TargetRenderState
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState:enum'
              - name: Type
                uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Type:enum'
          - name: protos.google.api
            items:
              - name: ClientLibraryDestination
                uid: '@google-cloud/deploy!protos.google.api.ClientLibraryDestination:enum'
              - name: ClientLibraryOrganization
                uid: '@google-cloud/deploy!protos.google.api.ClientLibraryOrganization:enum'
              - name: FieldBehavior
                uid: '@google-cloud/deploy!protos.google.api.FieldBehavior:enum'
              - name: History
                uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.History:enum'
              - name: LaunchStage
                uid: '@google-cloud/deploy!protos.google.api.LaunchStage:enum'
              - name: Style
                uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.Style:enum'
          - name: protos.google.protobuf
            items:
              - name: CType
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.CType:enum'
              - name: Edition
                uid: '@google-cloud/deploy!protos.google.protobuf.Edition:enum'
              - name: EnumType
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.EnumType:enum'
              - name: FieldPresence
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.FieldPresence:enum'
              - name: IdempotencyLevel
                uid: '@google-cloud/deploy!protos.google.protobuf.MethodOptions.IdempotencyLevel:enum'
              - name: JSType
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.JSType:enum'
              - name: JsonFormat
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.JsonFormat:enum'
              - name: Label
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Label:enum'
              - name: MessageEncoding
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.MessageEncoding:enum'
              - name: OptimizeMode
                uid: '@google-cloud/deploy!protos.google.protobuf.FileOptions.OptimizeMode:enum'
              - name: OptionRetention
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionRetention:enum'
              - name: OptionTargetType
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionTargetType:enum'
              - name: RepeatedFieldEncoding
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.RepeatedFieldEncoding:enum'
              - name: Semantic
                uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation.Semantic:enum'
              - name: Type
                uid: '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Type:enum'
              - name: Utf8Validation
                uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.Utf8Validation:enum'
              - name: VerificationState
                uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.VerificationState:enum'

`

exports['cloud-rad docfx generator generates an index.md file 1'] = `
[//]: # "This README.md file is auto-generated, all changes to this file will be lost."
[//]: # "To regenerate it, use \`python -m synthtool\`."
<img src="https://avatars2.githubusercontent.com/u/2810941?v=3&s=96" alt="Google Cloud Platform logo" title="Google Cloud Platform" align="right" height="96" width="96"/>

# [Google Cloud Deploy: Node.js Client](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy)

[![release level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)](https://cloud.google.com/terms/launch-stages)
[![npm version](https://img.shields.io/npm/v/@google-cloud/deploy.svg)](https://www.npmjs.org/package/@google-cloud/deploy)




clouddeploy client for Node.js


A comprehensive list of changes in each version may be found in
[the CHANGELOG](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy/CHANGELOG.md).

* [Google Cloud Deploy Node.js Client API Reference][client-docs]
* [Google Cloud Deploy Documentation][product-docs]
* [github.com/googleapis/google-cloud-node/packages/google-cloud-deploy](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy)

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

Samples are in the [\`samples/\`](https://github.com/googleapis/google-cloud-node/tree/main/packages/google-cloud-deploy/samples) directory. Each sample's \`README.md\` has instructions for running its sample.

| Sample                      | Source Code                       | Try it |
| --------------------------- | --------------------------------- | ------ |
| Cloud_deploy.abandon_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.abandon_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.abandon_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.advance_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.advance_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.advance_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.approve_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.approve_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.approve_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.cancel_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.cancel_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.create_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.create_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.delete_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.delete_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.delete_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_config | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_config.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_config.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_job_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_job_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_job_run.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_release | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_release.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_release.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_rollout | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_rollout.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_rollout.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.get_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.get_target.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.ignore_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.ignore_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.ignore_job.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_delivery_pipelines | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_delivery_pipelines.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_delivery_pipelines.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_job_runs | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_job_runs.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_job_runs.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_releases | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_releases.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_releases.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_rollouts | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_rollouts.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_rollouts.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.list_targets | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_targets.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.list_targets.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.retry_job | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.retry_job.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.retry_job.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.terminate_job_run | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.terminate_job_run.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.terminate_job_run.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.update_delivery_pipeline | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_delivery_pipeline.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_delivery_pipeline.js,packages/google-cloud-deploy/samples/README.md) |
| Cloud_deploy.update_target | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_target.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/generated/v1/cloud_deploy.update_target.js,packages/google-cloud-deploy/samples/README.md) |
| Quickstart | [source code](https://github.com/googleapis/google-cloud-node/blob/main/packages/google-cloud-deploy/samples/quickstart.js) | [![Open in Cloud Shell][shell_img]](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/googleapis/google-cloud-node&page=editor&open_in_editor=packages/google-cloud-deploy/samples/quickstart.js,packages/google-cloud-deploy/samples/README.md) |



The [Google Cloud Deploy Node.js Client API Reference][client-docs] documentation
also contains samples.

## Supported Node.js Versions

Our client libraries follow the [Node.js release schedule](https://github.com/nodejs/release#release-schedule).
Libraries are compatible with all current _active_ and _maintenance_ versions of
Node.js.
If you are using an end-of-life version of Node.js, we recommend that you update
as soon as possible to an actively supported LTS version.

Google's client libraries support legacy versions of Node.js runtimes on a
best-efforts basis with the following warnings:

* Legacy versions are not tested in continuous integration.
* Some security patches and features cannot be backported.
* Dependencies cannot be kept up-to-date.

Client libraries targeting some end-of-life versions of Node.js are available, and
can be installed through npm [dist-tags](https://docs.npmjs.com/cli/dist-tag).
The dist-tags follow the naming convention \`legacy-(version)\`.
For example, \`npm install @google-cloud/deploy@legacy-8\` installs client libraries
for versions compatible with Node.js 8.

## Versioning

This library follows [Semantic Versioning](http://semver.org/).



This library is considered to be **stable**. The code surface will not change in backwards-incompatible ways
unless absolutely necessary (e.g. because of critical security issues) or with
an extensive deprecation period. Issues and requests against **stable** libraries
are addressed with the highest priority.






More Information: [Google Cloud Platform Launch Stages][launch_stages]

[launch_stages]: https://cloud.google.com/terms/launch-stages

## Contributing

Contributions welcome! See the [Contributing Guide](https://github.com/googleapis/google-cloud-node/blob/main/CONTRIBUTING.md).

Please note that this \`README.md\`, the \`samples/README.md\`,
and a variety of configuration files in this repository (including \`.nycrc\` and \`tsconfig.json\`)
are generated from a central template. To edit one of these files, make an edit
to its templates in
[directory](https://github.com/googleapis/synthtool).

## License

Apache Version 2.0

See [LICENSE](https://github.com/googleapis/google-cloud-node/blob/main/LICENSE)

[client-docs]: https://cloud.google.com/nodejs/docs/reference/deploy/latest
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
      - '@google-cloud/deploy!protos.google.api.ClientLibraryDestination:enum'
      - '@google-cloud/deploy!protos.google.api.ClientLibraryOrganization:enum'
      - '@google-cloud/deploy!protos.google.api.ClientLibrarySettings:class'
      - '@google-cloud/deploy!protos.google.api.CommonLanguageSettings:class'
      - '@google-cloud/deploy!protos.google.api.CppSettings:class'
      - '@google-cloud/deploy!protos.google.api.CustomHttpPattern:class'
      - '@google-cloud/deploy!protos.google.api.DotnetSettings:class'
      - '@google-cloud/deploy!protos.google.api.FieldBehavior:enum'
      - '@google-cloud/deploy!protos.google.api.GoSettings:class'
      - '@google-cloud/deploy!protos.google.api.Http:class'
      - '@google-cloud/deploy!protos.google.api.HttpRule:class'
      - '@google-cloud/deploy!protos.google.api.IClientLibrarySettings:interface'
      - '@google-cloud/deploy!protos.google.api.ICommonLanguageSettings:interface'
      - '@google-cloud/deploy!protos.google.api.ICppSettings:interface'
      - '@google-cloud/deploy!protos.google.api.ICustomHttpPattern:interface'
      - '@google-cloud/deploy!protos.google.api.IDotnetSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IGoSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IHttp:interface'
      - '@google-cloud/deploy!protos.google.api.IHttpRule:interface'
      - '@google-cloud/deploy!protos.google.api.IJavaSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IMethodSettings:interface'
      - '@google-cloud/deploy!protos.google.api.INodeSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IPhpSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IPublishing:interface'
      - '@google-cloud/deploy!protos.google.api.IPythonSettings:interface'
      - '@google-cloud/deploy!protos.google.api.IResourceDescriptor:interface'
      - '@google-cloud/deploy!protos.google.api.IResourceReference:interface'
      - '@google-cloud/deploy!protos.google.api.IRubySettings:interface'
      - '@google-cloud/deploy!protos.google.api.JavaSettings:class'
      - '@google-cloud/deploy!protos.google.api.LaunchStage:enum'
      - '@google-cloud/deploy!protos.google.api.MethodSettings:class'
      - '@google-cloud/deploy!protos.google.api.MethodSettings.ILongRunning:interface'
      - '@google-cloud/deploy!protos.google.api.MethodSettings.LongRunning:class'
      - '@google-cloud/deploy!protos.google.api.NodeSettings:class'
      - '@google-cloud/deploy!protos.google.api.PhpSettings:class'
      - '@google-cloud/deploy!protos.google.api.Publishing:class'
      - '@google-cloud/deploy!protos.google.api.PythonSettings:class'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor:class'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor.History:enum'
      - '@google-cloud/deploy!protos.google.api.ResourceDescriptor.Style:enum'
      - '@google-cloud/deploy!protos.google.api.ResourceReference:class'
      - '@google-cloud/deploy!protos.google.api.RubySettings:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.AnthosCluster:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.BuildArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Canary:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CanaryDeployment:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ChildRolloutJobs:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback:type'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunLocation:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunRenderMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateReleaseRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.IPhaseConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.PhaseConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DefaultPool:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipelineNotificationEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun.FailureCause:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRunMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeploymentJobs:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployParameters:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetConfigRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetJobRunRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetReleaseRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetRolloutRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.GkeCluster:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAnthosCluster:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IBuildArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanary:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanaryDeployment:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IChildRolloutJobs:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunLocation:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunRenderMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICustomCanaryDeployment:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDefaultPool:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipelineNotificationEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRunMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeploymentJobs:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployParameters:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IExecutionConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGkeCluster:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRunNotificationEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IKubernetesConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMultiTarget:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPhase:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineReadyCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeploy:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeploy:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPrivatePool:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseNotificationEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseRenderEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRenderMetadata:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRolloutNotificationEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRuntimeConfig:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISerialPipeline:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISkaffoldVersion:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStage:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStandard:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStrategy:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetNotificationEvent:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsPresentCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsTypeCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJob:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJobRun:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job.State:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun.State:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRunNotificationEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.GatewayServiceMesh:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IGatewayServiceMesh:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IServiceNetworking:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.ServiceNetworking:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Metadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.MultiTarget:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase.State:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineReadyCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Postdeploy:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun.FailureCause:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Predeploy:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun.FailureCause:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.PrivatePool:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseReadyCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ISkaffoldSupportedCondition:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseReadyCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.RenderState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.SkaffoldSupportedCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.FailureCause:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseNotificationEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseRenderEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.RenderMetadata:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.ApprovalState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.FailureCause:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.State:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.RolloutNotificationEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.RuntimeConfig:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.SerialPipeline:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldSupportState:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldVersion:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Stage:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Standard:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Strategy:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.IPhaseArtifact:interface'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.PhaseArtifact:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetNotificationEvent:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsPresentCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsTypeCondition:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunResponse:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Type:enum'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateTargetRequest:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJob:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun:class'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun.FailureCause:enum'
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
      - '@google-cloud/deploy!protos.google.protobuf.Edition:enum'
      - '@google-cloud/deploy!protos.google.protobuf.Empty:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.EnumReservedRange:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumDescriptorProto.IEnumReservedRange:interface'
      - '@google-cloud/deploy!protos.google.protobuf.EnumOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumValueDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.EnumValueOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.Declaration:class'
      - '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.IDeclaration:interface'
      - '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.VerificationState:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet:class'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.EnumType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.FieldPresence:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.JsonFormat:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.MessageEncoding:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.RepeatedFieldEncoding:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSet.Utf8Validation:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults:class'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault:class'
      - '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault:interface'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Label:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldDescriptorProto.Type:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldMask:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.CType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.EditionDefault:class'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.IEditionDefault:interface'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.JSType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionRetention:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionTargetType:enum'
      - '@google-cloud/deploy!protos.google.protobuf.FileDescriptorProto:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileDescriptorSet:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileOptions:class'
      - '@google-cloud/deploy!protos.google.protobuf.FileOptions.OptimizeMode:enum'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo:class'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation:class'
      - '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation.Semantic:enum'
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
      - '@google-cloud/deploy!protos.google.protobuf.IFeatureSet:interface'
      - '@google-cloud/deploy!protos.google.protobuf.IFeatureSetDefaults:interface'
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
      content: type CloudDeployClient = v1.CloudDeployClient;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient_2:class'
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
          - '@google-cloud/deploy!CloudDeployClient~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type AbandonReleaseCallback = (error: (Error|null), response?: google.cloud.deploy.v1.AbandonReleaseResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type AdvanceRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.AdvanceRolloutResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback~0:complex'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type CancelRolloutCallback = (error: (Error|null), response?: google.cloud.deploy.v1.CancelRolloutResponse) =>
        void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback~0:complex'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type GetJobRunCallback = (error: (Error|null), response?: google.cloud.deploy.v1.JobRun) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback~0:complex'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type IgnoreJobCallback = (error: (Error|null), response?: google.cloud.deploy.v1.IgnoreJobResponse) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback~0:complex'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type ListJobRunsCallback = (error: (Error|null), response?: google.cloud.deploy.v1.ListJobRunsResponse) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback~0:complex'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: 'type RetryJobCallback = (error: (Error|null), response?: google.cloud.deploy.v1.RetryJobResponse) => void;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback:type'
    summary: Callback as used by .
    name: protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback
    fullName: protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback
    langs:
      - typeScript
    type: typealias
    syntax:
      content: >-
        type TerminateJobRunCallback = (error: (Error|null), response?: google.cloud.deploy.v1.TerminateJobRunResponse)
        => void;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback~0:complex'
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
          CloudDeployClient: typeof v1.CloudDeployClient_2;
      }
    spec.typeScript:
      - name: |-
          {
              v1: typeof 
        fullName: |-
          {
              v1: typeof 
      - uid: '@google-cloud/deploy!v1'
        name: v1
        fullName: v1
      - name: |-
          ;
              CloudDeployClient: typeof 
        fullName: |-
          ;
              CloudDeployClient: typeof 
      - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
        name: v1.CloudDeployClient
        fullName: v1.CloudDeployClient_2
      - name: |-
          ;
          }
        fullName: |-
          ;
          }
  - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
    name: v1.CloudDeployClient
  - uid: '@google-cloud/deploy!CloudDeployClient~0:complex'
    name: typeof v1.CloudDeployClient
    fullName: typeof v1.CloudDeployClient_2
    spec.typeScript:
      - name: 'typeof '
        fullName: 'typeof '
      - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
        name: v1.CloudDeployClient
        fullName: v1.CloudDeployClient_2
  - uid: '@google-cloud/deploy!protos.google.api.ClientLibraryDestination:enum'
    name: protos.google.api.ClientLibraryDestination
  - uid: '@google-cloud/deploy!protos.google.api.ClientLibraryOrganization:enum'
    name: protos.google.api.ClientLibraryOrganization
  - uid: '@google-cloud/deploy!protos.google.api.ClientLibrarySettings:class'
    name: protos.google.api.ClientLibrarySettings
  - uid: '@google-cloud/deploy!protos.google.api.CommonLanguageSettings:class'
    name: protos.google.api.CommonLanguageSettings
  - uid: '@google-cloud/deploy!protos.google.api.CppSettings:class'
    name: protos.google.api.CppSettings
  - uid: '@google-cloud/deploy!protos.google.api.CustomHttpPattern:class'
    name: protos.google.api.CustomHttpPattern
  - uid: '@google-cloud/deploy!protos.google.api.DotnetSettings:class'
    name: protos.google.api.DotnetSettings
  - uid: '@google-cloud/deploy!protos.google.api.FieldBehavior:enum'
    name: protos.google.api.FieldBehavior
  - uid: '@google-cloud/deploy!protos.google.api.GoSettings:class'
    name: protos.google.api.GoSettings
  - uid: '@google-cloud/deploy!protos.google.api.Http:class'
    name: protos.google.api.Http
  - uid: '@google-cloud/deploy!protos.google.api.HttpRule:class'
    name: protos.google.api.HttpRule
  - uid: '@google-cloud/deploy!protos.google.api.IClientLibrarySettings:interface'
    name: protos.google.api.IClientLibrarySettings
  - uid: '@google-cloud/deploy!protos.google.api.ICommonLanguageSettings:interface'
    name: protos.google.api.ICommonLanguageSettings
  - uid: '@google-cloud/deploy!protos.google.api.ICppSettings:interface'
    name: protos.google.api.ICppSettings
  - uid: '@google-cloud/deploy!protos.google.api.ICustomHttpPattern:interface'
    name: protos.google.api.ICustomHttpPattern
  - uid: '@google-cloud/deploy!protos.google.api.IDotnetSettings:interface'
    name: protos.google.api.IDotnetSettings
  - uid: '@google-cloud/deploy!protos.google.api.IGoSettings:interface'
    name: protos.google.api.IGoSettings
  - uid: '@google-cloud/deploy!protos.google.api.IHttp:interface'
    name: protos.google.api.IHttp
  - uid: '@google-cloud/deploy!protos.google.api.IHttpRule:interface'
    name: protos.google.api.IHttpRule
  - uid: '@google-cloud/deploy!protos.google.api.IJavaSettings:interface'
    name: protos.google.api.IJavaSettings
  - uid: '@google-cloud/deploy!protos.google.api.IMethodSettings:interface'
    name: protos.google.api.IMethodSettings
  - uid: '@google-cloud/deploy!protos.google.api.INodeSettings:interface'
    name: protos.google.api.INodeSettings
  - uid: '@google-cloud/deploy!protos.google.api.IPhpSettings:interface'
    name: protos.google.api.IPhpSettings
  - uid: '@google-cloud/deploy!protos.google.api.IPublishing:interface'
    name: protos.google.api.IPublishing
  - uid: '@google-cloud/deploy!protos.google.api.IPythonSettings:interface'
    name: protos.google.api.IPythonSettings
  - uid: '@google-cloud/deploy!protos.google.api.IResourceDescriptor:interface'
    name: protos.google.api.IResourceDescriptor
  - uid: '@google-cloud/deploy!protos.google.api.IResourceReference:interface'
    name: protos.google.api.IResourceReference
  - uid: '@google-cloud/deploy!protos.google.api.IRubySettings:interface'
    name: protos.google.api.IRubySettings
  - uid: '@google-cloud/deploy!protos.google.api.JavaSettings:class'
    name: protos.google.api.JavaSettings
  - uid: '@google-cloud/deploy!protos.google.api.LaunchStage:enum'
    name: protos.google.api.LaunchStage
  - uid: '@google-cloud/deploy!protos.google.api.MethodSettings:class'
    name: protos.google.api.MethodSettings
  - uid: '@google-cloud/deploy!protos.google.api.MethodSettings.ILongRunning:interface'
    name: protos.google.api.MethodSettings.ILongRunning
  - uid: '@google-cloud/deploy!protos.google.api.MethodSettings.LongRunning:class'
    name: protos.google.api.MethodSettings.LongRunning
  - uid: '@google-cloud/deploy!protos.google.api.NodeSettings:class'
    name: protos.google.api.NodeSettings
  - uid: '@google-cloud/deploy!protos.google.api.PhpSettings:class'
    name: protos.google.api.PhpSettings
  - uid: '@google-cloud/deploy!protos.google.api.Publishing:class'
    name: protos.google.api.Publishing
  - uid: '@google-cloud/deploy!protos.google.api.PythonSettings:class'
    name: protos.google.api.PythonSettings
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor:class'
    name: protos.google.api.ResourceDescriptor
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.History:enum'
    name: protos.google.api.ResourceDescriptor.History
  - uid: '@google-cloud/deploy!protos.google.api.ResourceDescriptor.Style:enum'
    name: protos.google.api.ResourceDescriptor.Style
  - uid: '@google-cloud/deploy!protos.google.api.ResourceReference:class'
    name: protos.google.api.ResourceReference
  - uid: '@google-cloud/deploy!protos.google.api.RubySettings:class'
    name: protos.google.api.RubySettings
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseRequest:class'
    name: protos.google.cloud.deploy.v1.AbandonReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseResponse:class'
    name: protos.google.cloud.deploy.v1.AbandonReleaseResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJob:class'
    name: protos.google.cloud.deploy.v1.AdvanceChildRolloutJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceChildRolloutJobRun:class'
    name: protos.google.cloud.deploy.v1.AdvanceChildRolloutJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.AdvanceRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutResponse:class'
    name: protos.google.cloud.deploy.v1.AdvanceRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AnthosCluster:class'
    name: protos.google.cloud.deploy.v1.AnthosCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.ApproveRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
    name: protos.google.cloud.deploy.v1.ApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.BuildArtifact:class'
    name: protos.google.cloud.deploy.v1.BuildArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Canary:class'
    name: protos.google.cloud.deploy.v1.Canary
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CanaryDeployment:class'
    name: protos.google.cloud.deploy.v1.CanaryDeployment
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.CancelRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutResponse:class'
    name: protos.google.cloud.deploy.v1.CancelRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ChildRolloutJobs:class'
    name: protos.google.cloud.deploy.v1.ChildRolloutJobs
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy:class'
    name: protos.google.cloud.deploy.v1.CloudDeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AbandonReleaseCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.AbandonReleaseResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.AbandonReleaseResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseResponse:class'
        name: google.cloud.deploy.v1.AbandonReleaseResponse
        fullName: protos.google.cloud.deploy.v1.AbandonReleaseResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.AdvanceRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.AdvanceRolloutResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.AdvanceRolloutResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutResponse:class'
        name: google.cloud.deploy.v1.AdvanceRolloutResponse
        fullName: protos.google.cloud.deploy.v1.AdvanceRolloutResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ApproveRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ApproveRolloutResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ApproveRolloutResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
        name: google.cloud.deploy.v1.ApproveRolloutResponse
        fullName: protos.google.cloud.deploy.v1.ApproveRolloutResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CancelRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.CancelRolloutResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.CancelRolloutResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutResponse:class'
        name: google.cloud.deploy.v1.CancelRolloutResponse
        fullName: protos.google.cloud.deploy.v1.CancelRolloutResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateReleaseCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.CreateTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.DeleteTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetConfigCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Config) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.Config) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
        name: google.cloud.deploy.v1.Config
        fullName: protos.google.cloud.deploy.v1.Config
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.DeliveryPipeline) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.DeliveryPipeline) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
        name: google.cloud.deploy.v1.DeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.DeliveryPipeline
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetJobRunCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.JobRun) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.JobRun) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun:class'
        name: google.cloud.deploy.v1.JobRun
        fullName: protos.google.cloud.deploy.v1.JobRun
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetReleaseCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Release) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.Release) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
        name: google.cloud.deploy.v1.Release
        fullName: protos.google.cloud.deploy.v1.Release
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetRolloutCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Rollout) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.Rollout) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
        name: google.cloud.deploy.v1.Rollout
        fullName: protos.google.cloud.deploy.v1.Rollout
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.GetTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.Target) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.Target) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
        name: google.cloud.deploy.v1.Target
        fullName: protos.google.cloud.deploy.v1.Target
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.IgnoreJobCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.IgnoreJobResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.IgnoreJobResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobResponse:class'
        name: google.cloud.deploy.v1.IgnoreJobResponse
        fullName: protos.google.cloud.deploy.v1.IgnoreJobResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListDeliveryPipelinesCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
        name: google.cloud.deploy.v1.ListDeliveryPipelinesResponse
        fullName: protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListJobRunsCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListJobRunsResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ListJobRunsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsResponse:class'
        name: google.cloud.deploy.v1.ListJobRunsResponse
        fullName: protos.google.cloud.deploy.v1.ListJobRunsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListReleasesCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListReleasesResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ListReleasesResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListReleasesResponse:class'
        name: google.cloud.deploy.v1.ListReleasesResponse
        fullName: protos.google.cloud.deploy.v1.ListReleasesResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListRolloutsCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListRolloutsResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ListRolloutsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListRolloutsResponse:class'
        name: google.cloud.deploy.v1.ListRolloutsResponse
        fullName: protos.google.cloud.deploy.v1.ListRolloutsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.ListTargetsCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.ListTargetsResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.ListTargetsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListTargetsResponse:class'
        name: google.cloud.deploy.v1.ListTargetsResponse
        fullName: protos.google.cloud.deploy.v1.ListTargetsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.RetryJobCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.RetryJobResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.RetryJobResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobResponse:class'
        name: google.cloud.deploy.v1.RetryJobResponse
        fullName: protos.google.cloud.deploy.v1.RetryJobResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.TerminateJobRunCallback~0:complex'
    name: '(error: (Error|null), response?: google.cloud.deploy.v1.TerminateJobRunResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.cloud.deploy.v1.TerminateJobRunResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunResponse:class'
        name: google.cloud.deploy.v1.TerminateJobRunResponse
        fullName: protos.google.cloud.deploy.v1.TerminateJobRunResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateDeliveryPipelineCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudDeploy.UpdateTargetCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunConfig:class'
    name: protos.google.cloud.deploy.v1.CloudRunConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunLocation:class'
    name: protos.google.cloud.deploy.v1.CloudRunLocation
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunMetadata:class'
    name: protos.google.cloud.deploy.v1.CloudRunMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CloudRunRenderMetadata:class'
    name: protos.google.cloud.deploy.v1.CloudRunRenderMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class'
    name: protos.google.cloud.deploy.v1.Config
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJob:class'
    name: protos.google.cloud.deploy.v1.CreateChildRolloutJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateChildRolloutJobRun:class'
    name: protos.google.cloud.deploy.v1.CreateChildRolloutJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.CreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateReleaseRequest:class'
    name: protos.google.cloud.deploy.v1.CreateReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.CreateRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CreateTargetRequest:class'
    name: protos.google.cloud.deploy.v1.CreateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment:class'
    name: protos.google.cloud.deploy.v1.CustomCanaryDeployment
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.IPhaseConfig:interface'
    name: protos.google.cloud.deploy.v1.CustomCanaryDeployment.IPhaseConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.CustomCanaryDeployment.PhaseConfig:class'
    name: protos.google.cloud.deploy.v1.CustomCanaryDeployment.PhaseConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DefaultPool:class'
    name: protos.google.cloud.deploy.v1.DefaultPool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.DeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeleteTargetRequest:class'
    name: protos.google.cloud.deploy.v1.DeleteTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
    name: protos.google.cloud.deploy.v1.DeliveryPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipelineNotificationEvent:class'
    name: protos.google.cloud.deploy.v1.DeliveryPipelineNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployArtifact:class'
    name: protos.google.cloud.deploy.v1.DeployArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJob:class'
    name: protos.google.cloud.deploy.v1.DeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun:class'
    name: protos.google.cloud.deploy.v1.DeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRun.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.DeployJobRun.FailureCause
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployJobRunMetadata:class'
    name: protos.google.cloud.deploy.v1.DeployJobRunMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeploymentJobs:class'
    name: protos.google.cloud.deploy.v1.DeploymentJobs
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeployParameters:class'
    name: protos.google.cloud.deploy.v1.DeployParameters
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig:class'
    name: protos.google.cloud.deploy.v1.ExecutionConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage:enum'
    name: protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetConfigRequest:class'
    name: protos.google.cloud.deploy.v1.GetConfigRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.GetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetJobRunRequest:class'
    name: protos.google.cloud.deploy.v1.GetJobRunRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetReleaseRequest:class'
    name: protos.google.cloud.deploy.v1.GetReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetRolloutRequest:class'
    name: protos.google.cloud.deploy.v1.GetRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GetTargetRequest:class'
    name: protos.google.cloud.deploy.v1.GetTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.GkeCluster:class'
    name: protos.google.cloud.deploy.v1.GkeCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
    name: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
    name: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJob:interface'
    name: protos.google.cloud.deploy.v1.IAdvanceChildRolloutJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceChildRolloutJobRun:interface'
    name: protos.google.cloud.deploy.v1.IAdvanceChildRolloutJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
    name: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAnthosCluster:interface'
    name: protos.google.cloud.deploy.v1.IAnthosCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    name: protos.google.cloud.deploy.v1.IApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IBuildArtifact:interface'
    name: protos.google.cloud.deploy.v1.IBuildArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanary:interface'
    name: protos.google.cloud.deploy.v1.ICanary
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICanaryDeployment:interface'
    name: protos.google.cloud.deploy.v1.ICanaryDeployment
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.ICancelRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
    name: protos.google.cloud.deploy.v1.ICancelRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IChildRolloutJobs:interface'
    name: protos.google.cloud.deploy.v1.IChildRolloutJobs
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunConfig:interface'
    name: protos.google.cloud.deploy.v1.ICloudRunConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunLocation:interface'
    name: protos.google.cloud.deploy.v1.ICloudRunLocation
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunMetadata:interface'
    name: protos.google.cloud.deploy.v1.ICloudRunMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICloudRunRenderMetadata:interface'
    name: protos.google.cloud.deploy.v1.ICloudRunRenderMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
    name: protos.google.cloud.deploy.v1.IConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJob:interface'
    name: protos.google.cloud.deploy.v1.ICreateChildRolloutJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateChildRolloutJobRun:interface'
    name: protos.google.cloud.deploy.v1.ICreateChildRolloutJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICustomCanaryDeployment:interface'
    name: protos.google.cloud.deploy.v1.ICustomCanaryDeployment
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDefaultPool:interface'
    name: protos.google.cloud.deploy.v1.IDefaultPool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
    name: protos.google.cloud.deploy.v1.IDeliveryPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipelineNotificationEvent:interface'
    name: protos.google.cloud.deploy.v1.IDeliveryPipelineNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployArtifact:interface'
    name: protos.google.cloud.deploy.v1.IDeployArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJob:interface'
    name: protos.google.cloud.deploy.v1.IDeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRun:interface'
    name: protos.google.cloud.deploy.v1.IDeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployJobRunMetadata:interface'
    name: protos.google.cloud.deploy.v1.IDeployJobRunMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeploymentJobs:interface'
    name: protos.google.cloud.deploy.v1.IDeploymentJobs
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeployParameters:interface'
    name: protos.google.cloud.deploy.v1.IDeployParameters
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IExecutionConfig:interface'
    name: protos.google.cloud.deploy.v1.IExecutionConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetJobRunRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGkeCluster:interface'
    name: protos.google.cloud.deploy.v1.IGkeCluster
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobRequest:class'
    name: protos.google.cloud.deploy.v1.IgnoreJobRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobResponse:class'
    name: protos.google.cloud.deploy.v1.IgnoreJobResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
    name: protos.google.cloud.deploy.v1.IIgnoreJobRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
    name: protos.google.cloud.deploy.v1.IIgnoreJobResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJob:interface'
    name: protos.google.cloud.deploy.v1.IJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
    name: protos.google.cloud.deploy.v1.IJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRunNotificationEvent:interface'
    name: protos.google.cloud.deploy.v1.IJobRunNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IKubernetesConfig:interface'
    name: protos.google.cloud.deploy.v1.IKubernetesConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
    name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
    name: protos.google.cloud.deploy.v1.IListJobRunsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
    name: protos.google.cloud.deploy.v1.IListJobRunsResponse
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMetadata:interface'
    name: protos.google.cloud.deploy.v1.IMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IMultiTarget:interface'
    name: protos.google.cloud.deploy.v1.IMultiTarget
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
    name: protos.google.cloud.deploy.v1.IOperationMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPhase:interface'
    name: protos.google.cloud.deploy.v1.IPhase
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineCondition:interface'
    name: protos.google.cloud.deploy.v1.IPipelineCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPipelineReadyCondition:interface'
    name: protos.google.cloud.deploy.v1.IPipelineReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeploy:interface'
    name: protos.google.cloud.deploy.v1.IPostdeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJob:interface'
    name: protos.google.cloud.deploy.v1.IPostdeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPostdeployJobRun:interface'
    name: protos.google.cloud.deploy.v1.IPostdeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeploy:interface'
    name: protos.google.cloud.deploy.v1.IPredeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJob:interface'
    name: protos.google.cloud.deploy.v1.IPredeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPredeployJobRun:interface'
    name: protos.google.cloud.deploy.v1.IPredeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IPrivatePool:interface'
    name: protos.google.cloud.deploy.v1.IPrivatePool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
    name: protos.google.cloud.deploy.v1.IRelease
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseNotificationEvent:interface'
    name: protos.google.cloud.deploy.v1.IReleaseNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IReleaseRenderEvent:interface'
    name: protos.google.cloud.deploy.v1.IReleaseRenderEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRenderMetadata:interface'
    name: protos.google.cloud.deploy.v1.IRenderMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
    name: protos.google.cloud.deploy.v1.IRetryJobRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
    name: protos.google.cloud.deploy.v1.IRetryJobResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
    name: protos.google.cloud.deploy.v1.IRollout
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRolloutNotificationEvent:interface'
    name: protos.google.cloud.deploy.v1.IRolloutNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRuntimeConfig:interface'
    name: protos.google.cloud.deploy.v1.IRuntimeConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISerialPipeline:interface'
    name: protos.google.cloud.deploy.v1.ISerialPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ISkaffoldVersion:interface'
    name: protos.google.cloud.deploy.v1.ISkaffoldVersion
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStage:interface'
    name: protos.google.cloud.deploy.v1.IStage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStandard:interface'
    name: protos.google.cloud.deploy.v1.IStandard
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IStrategy:interface'
    name: protos.google.cloud.deploy.v1.IStrategy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
    name: protos.google.cloud.deploy.v1.ITarget
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetArtifact:interface'
    name: protos.google.cloud.deploy.v1.ITargetArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetNotificationEvent:interface'
    name: protos.google.cloud.deploy.v1.ITargetNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsPresentCondition:interface'
    name: protos.google.cloud.deploy.v1.ITargetsPresentCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITargetsTypeCondition:interface'
    name: protos.google.cloud.deploy.v1.ITargetsTypeCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
    name: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
    name: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
    name: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
    name: protos.google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJob:interface'
    name: protos.google.cloud.deploy.v1.IVerifyJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IVerifyJobRun:interface'
    name: protos.google.cloud.deploy.v1.IVerifyJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job:class'
    name: protos.google.cloud.deploy.v1.Job
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Job.State:enum'
    name: protos.google.cloud.deploy.v1.Job.State
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun:class'
    name: protos.google.cloud.deploy.v1.JobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRun.State:enum'
    name: protos.google.cloud.deploy.v1.JobRun.State
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.JobRunNotificationEvent:class'
    name: protos.google.cloud.deploy.v1.JobRunNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig:class'
    name: protos.google.cloud.deploy.v1.KubernetesConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.GatewayServiceMesh:class'
    name: protos.google.cloud.deploy.v1.KubernetesConfig.GatewayServiceMesh
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IGatewayServiceMesh:interface'
    name: protos.google.cloud.deploy.v1.KubernetesConfig.IGatewayServiceMesh
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.IServiceNetworking:interface'
    name: protos.google.cloud.deploy.v1.KubernetesConfig.IServiceNetworking
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.KubernetesConfig.ServiceNetworking:class'
    name: protos.google.cloud.deploy.v1.KubernetesConfig.ServiceNetworking
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest:class'
    name: protos.google.cloud.deploy.v1.ListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse:class'
    name: protos.google.cloud.deploy.v1.ListDeliveryPipelinesResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsRequest:class'
    name: protos.google.cloud.deploy.v1.ListJobRunsRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ListJobRunsResponse:class'
    name: protos.google.cloud.deploy.v1.ListJobRunsResponse
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Metadata:class'
    name: protos.google.cloud.deploy.v1.Metadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.MultiTarget:class'
    name: protos.google.cloud.deploy.v1.MultiTarget
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
    name: protos.google.cloud.deploy.v1.OperationMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase:class'
    name: protos.google.cloud.deploy.v1.Phase
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Phase.State:enum'
    name: protos.google.cloud.deploy.v1.Phase.State
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineCondition:class'
    name: protos.google.cloud.deploy.v1.PipelineCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PipelineReadyCondition:class'
    name: protos.google.cloud.deploy.v1.PipelineReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Postdeploy:class'
    name: protos.google.cloud.deploy.v1.Postdeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJob:class'
    name: protos.google.cloud.deploy.v1.PostdeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun:class'
    name: protos.google.cloud.deploy.v1.PostdeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PostdeployJobRun.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.PostdeployJobRun.FailureCause
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Predeploy:class'
    name: protos.google.cloud.deploy.v1.Predeploy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJob:class'
    name: protos.google.cloud.deploy.v1.PredeployJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun:class'
    name: protos.google.cloud.deploy.v1.PredeployJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PredeployJobRun.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.PredeployJobRun.FailureCause
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.PrivatePool:class'
    name: protos.google.cloud.deploy.v1.PrivatePool
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
    name: protos.google.cloud.deploy.v1.Release
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseCondition:interface'
    name: protos.google.cloud.deploy.v1.Release.IReleaseCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.IReleaseReadyCondition:interface'
    name: protos.google.cloud.deploy.v1.Release.IReleaseReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ISkaffoldSupportedCondition:interface'
    name: protos.google.cloud.deploy.v1.Release.ISkaffoldSupportedCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender:interface'
    name: protos.google.cloud.deploy.v1.Release.ITargetRender
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseCondition:class'
    name: protos.google.cloud.deploy.v1.Release.ReleaseCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ReleaseReadyCondition:class'
    name: protos.google.cloud.deploy.v1.Release.ReleaseReadyCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.RenderState:enum'
    name: protos.google.cloud.deploy.v1.Release.RenderState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.SkaffoldSupportedCondition:class'
    name: protos.google.cloud.deploy.v1.Release.SkaffoldSupportedCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender:class'
    name: protos.google.cloud.deploy.v1.Release.TargetRender
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.Release.TargetRender.FailureCause
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState:enum'
    name: protos.google.cloud.deploy.v1.Release.TargetRender.TargetRenderState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseNotificationEvent:class'
    name: protos.google.cloud.deploy.v1.ReleaseNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ReleaseRenderEvent:class'
    name: protos.google.cloud.deploy.v1.ReleaseRenderEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RenderMetadata:class'
    name: protos.google.cloud.deploy.v1.RenderMetadata
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobRequest:class'
    name: protos.google.cloud.deploy.v1.RetryJobRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobResponse:class'
    name: protos.google.cloud.deploy.v1.RetryJobResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
    name: protos.google.cloud.deploy.v1.Rollout
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.ApprovalState:enum'
    name: protos.google.cloud.deploy.v1.Rollout.ApprovalState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.Rollout.FailureCause
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout.State:enum'
    name: protos.google.cloud.deploy.v1.Rollout.State
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RolloutNotificationEvent:class'
    name: protos.google.cloud.deploy.v1.RolloutNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.RuntimeConfig:class'
    name: protos.google.cloud.deploy.v1.RuntimeConfig
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SerialPipeline:class'
    name: protos.google.cloud.deploy.v1.SerialPipeline
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldSupportState:enum'
    name: protos.google.cloud.deploy.v1.SkaffoldSupportState
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.SkaffoldVersion:class'
    name: protos.google.cloud.deploy.v1.SkaffoldVersion
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Stage:class'
    name: protos.google.cloud.deploy.v1.Stage
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Standard:class'
    name: protos.google.cloud.deploy.v1.Standard
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Strategy:class'
    name: protos.google.cloud.deploy.v1.Strategy
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
    name: protos.google.cloud.deploy.v1.Target
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact:class'
    name: protos.google.cloud.deploy.v1.TargetArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.IPhaseArtifact:interface'
    name: protos.google.cloud.deploy.v1.TargetArtifact.IPhaseArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetArtifact.PhaseArtifact:class'
    name: protos.google.cloud.deploy.v1.TargetArtifact.PhaseArtifact
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetNotificationEvent:class'
    name: protos.google.cloud.deploy.v1.TargetNotificationEvent
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsPresentCondition:class'
    name: protos.google.cloud.deploy.v1.TargetsPresentCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TargetsTypeCondition:class'
    name: protos.google.cloud.deploy.v1.TargetsTypeCondition
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunRequest:class'
    name: protos.google.cloud.deploy.v1.TerminateJobRunRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunResponse:class'
    name: protos.google.cloud.deploy.v1.TerminateJobRunResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Type:enum'
    name: protos.google.cloud.deploy.v1.Type
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest:class'
    name: protos.google.cloud.deploy.v1.UpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.UpdateTargetRequest:class'
    name: protos.google.cloud.deploy.v1.UpdateTargetRequest
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJob:class'
    name: protos.google.cloud.deploy.v1.VerifyJob
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun:class'
    name: protos.google.cloud.deploy.v1.VerifyJobRun
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.VerifyJobRun.FailureCause:enum'
    name: protos.google.cloud.deploy.v1.VerifyJobRun.FailureCause
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
    fullName: '(error: (Error|null), response?: protos.google.protobuf.Empty) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.DeleteOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.protobuf.Empty) => void'
    fullName: '(error: (Error|null), response?: protos.google.protobuf.Empty) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.GetOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.ListOperationsCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.ListOperationsResponse) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsResponse:class'
        name: google.longrunning.ListOperationsResponse
        fullName: protos.google.longrunning.ListOperationsResponse
      - name: ) => void
        fullName: ) => void
  - uid: '@google-cloud/deploy!protos.google.longrunning.Operations.WaitOperationCallback~0:complex'
    name: '(error: (Error|null), response?: google.longrunning.Operation) => void'
    fullName: '(error: (Error|null), response?: protos.google.longrunning.Operation) => void'
    spec.typeScript:
      - name: '(error: ('
        fullName: '(error: ('
      - uid: '!Error:interface'
        name: Error
        fullName: Error
      - name: '|null), response?: '
        fullName: '|null), response?: '
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
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
  - uid: '@google-cloud/deploy!protos.google.protobuf.Edition:enum'
    name: protos.google.protobuf.Edition
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
  - uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.Declaration:class'
    name: protos.google.protobuf.ExtensionRangeOptions.Declaration
  - uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.IDeclaration:interface'
    name: protos.google.protobuf.ExtensionRangeOptions.IDeclaration
  - uid: '@google-cloud/deploy!protos.google.protobuf.ExtensionRangeOptions.VerificationState:enum'
    name: protos.google.protobuf.ExtensionRangeOptions.VerificationState
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet:class'
    name: protos.google.protobuf.FeatureSet
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.EnumType:enum'
    name: protos.google.protobuf.FeatureSet.EnumType
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.FieldPresence:enum'
    name: protos.google.protobuf.FeatureSet.FieldPresence
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.JsonFormat:enum'
    name: protos.google.protobuf.FeatureSet.JsonFormat
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.MessageEncoding:enum'
    name: protos.google.protobuf.FeatureSet.MessageEncoding
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.RepeatedFieldEncoding:enum'
    name: protos.google.protobuf.FeatureSet.RepeatedFieldEncoding
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSet.Utf8Validation:enum'
    name: protos.google.protobuf.FeatureSet.Utf8Validation
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults:class'
    name: protos.google.protobuf.FeatureSetDefaults
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault:class'
    name: protos.google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault
  - uid: '@google-cloud/deploy!protos.google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault:interface'
    name: protos.google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault
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
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.EditionDefault:class'
    name: protos.google.protobuf.FieldOptions.EditionDefault
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.IEditionDefault:interface'
    name: protos.google.protobuf.FieldOptions.IEditionDefault
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.JSType:enum'
    name: protos.google.protobuf.FieldOptions.JSType
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionRetention:enum'
    name: protos.google.protobuf.FieldOptions.OptionRetention
  - uid: '@google-cloud/deploy!protos.google.protobuf.FieldOptions.OptionTargetType:enum'
    name: protos.google.protobuf.FieldOptions.OptionTargetType
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
  - uid: '@google-cloud/deploy!protos.google.protobuf.GeneratedCodeInfo.Annotation.Semantic:enum'
    name: protos.google.protobuf.GeneratedCodeInfo.Annotation.Semantic
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
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFeatureSet:interface'
    name: protos.google.protobuf.IFeatureSet
  - uid: '@google-cloud/deploy!protos.google.protobuf.IFeatureSetDefaults:interface'
    name: protos.google.protobuf.IFeatureSetDefaults
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
      - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient.apiEndpoint:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#auth:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#buildPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(3)'
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
      - '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation:member(1)'
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
      - '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getLocation:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#getOperation:member(1)'
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
      - '@google-cloud/deploy!v1.CloudDeployClient#iamClient:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#initialize:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#innerApiCalls:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#jobRunPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsStream:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listLocationsAsync:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#listOperationsAsync:member(1)'
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
      - '@google-cloud/deploy!v1.CloudDeployClient#locationsClient:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchBuildFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchClusterFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchJobRunFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromConfigName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromLocationName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromMembershipName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromServiceName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchMembershipFromMembershipName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromBuildName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromClusterName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromConfigName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromDeliveryPipelineName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromLocationName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromMembershipName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromProjectName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromServiceName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromReleaseName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchRolloutFromJobRunName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchRolloutFromRolloutName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchServiceFromServiceName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchTargetFromTargetName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#matchWorkerPoolFromWorkerPoolName:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#membershipPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#operationsClient:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#pathTemplates:member'
      - '@google-cloud/deploy!v1.CloudDeployClient.port:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#projectPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#releasePath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#rolloutPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient.scopes:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#servicePath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient.servicePath:member'
      - '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#targetPath:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(1)'
      - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(2)'
      - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(3)'
      - '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions:member(1)'
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
    name: (constructor)(opts, gaxInstance)
    fullName: (constructor)(opts, gaxInstance)
    langs:
      - typeScript
    type: constructor
    syntax:
      content: 'constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback);'
      parameters:
        - id: opts
          description: ''
          type:
            - google-gax!ClientOptions:interface
        - id: gaxInstance
          description: >-
            : loaded instance of \`google-gax\`<!-- -->. Useful if you need to avoid loading the default gRPC version and
            want to use the fallback HTTP implementation. Load only fallback version and pass it to the constructor:
            \\\`\\\`\\\` const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC const
            client = new CloudDeployClient(<!-- -->{<!-- -->fallback: true<!-- -->}<!-- -->, gax); \\\`\\\`\\\`
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient~0:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(1)'
    summary: Abandons a Release in the Delivery Pipeline.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Release. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callAbandonRelease() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.abandonRelease(request);
            console.log(response);
          }

          callAbandonRelease();

        </pre></code>
    name: abandonRelease(request, options)
    fullName: abandonRelease(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        abandonRelease(request?: protos.google.cloud.deploy.v1.IAbandonReleaseRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
                protos.google.cloud.deploy.v1.IAbandonReleaseRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [AbandonReleaseResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.AbandonReleaseResponse:class)<!--
          -->. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(2)'
    name: abandonRelease(request, options, callback)
    fullName: abandonRelease(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        abandonRelease(request: protos.google.cloud.deploy.v1.IAbandonReleaseRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
        protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease:member(3)'
    name: abandonRelease(request, callback)
    fullName: abandonRelease(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        abandonRelease(request: protos.google.cloud.deploy.v1.IAbandonReleaseRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
        protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(1)'
    summary: Advances a Rollout in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Rollout. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}.
           */
          // const name = 'abc123'
          /**
           *  Required. The phase ID to advance the \`Rollout\` to.
           */
          // const phaseId = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callAdvanceRollout() {
            // Construct request
            const request = {
              name,
              phaseId,
            };

            // Run request
            const response = await deployClient.advanceRollout(request);
            console.log(response);
          }

          callAdvanceRollout();

        </pre></code>
    name: advanceRollout(request, options)
    fullName: advanceRollout(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        advanceRollout(request?: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
                protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [AdvanceRolloutResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.AdvanceRolloutResponse:class)<!--
          -->. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(2)'
    name: advanceRollout(request, options, callback)
    fullName: advanceRollout(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        advanceRollout(request: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
        protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout:member(3)'
    name: advanceRollout(request, callback)
    fullName: advanceRollout(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        advanceRollout(request: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
        protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.apiEndpoint:member'
    summary: The DNS address for this API service - same as servicePath(), exists for compatibility reasons.
    name: apiEndpoint
    fullName: apiEndpoint
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get apiEndpoint(): string;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(1)'
    summary: Approves a Rollout.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Rollout. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}.
           */
          // const name = 'abc123'
          /**
           *  Required. True = approve; false = reject
           */
          // const approved = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callApproveRollout() {
            // Construct request
            const request = {
              name,
              approved,
            };

            // Run request
            const response = await deployClient.approveRollout(request);
            console.log(response);
          }

          callApproveRollout();

        </pre></code>
    name: approveRollout(request, options)
    fullName: approveRollout(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [ApproveRolloutResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class)<!--
          -->. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(2)'
    name: approveRollout(request, options, callback)
    fullName: approveRollout(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout:member(3)'
    name: approveRollout(request, callback)
    fullName: approveRollout(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~2:complex'
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
    name: buildPath(project, location, build)
    fullName: buildPath(project, location, build)
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation:member(1)'
    summary: >-
      Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the
      operation, but success is not guaranteed. If the server doesn't support this method, it returns
      \`google.rpc.Code.UNIMPLEMENTED\`<!-- -->. Clients can use  or other methods to check whether the cancellation
      succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is
      not deleted; instead, it becomes an operation with an  value with a  of 1, corresponding to \`Code.CANCELLED\`<!--
      -->.
    example:
      - |-
        <pre class="prettyprint"><code>
        const client = longrunning.operationsClient();
        await client.cancelOperation({name: ''});
        </code></pre>
    name: cancelOperation(request, options, callback)
    fullName: cancelOperation(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        cancelOperation(request: protos.google.longrunning.CancelOperationRequest, options?: gax.CallOptions |
        Callback<protos.google.protobuf.Empty, protos.google.longrunning.CancelOperationRequest, {} | undefined | null>,
        callback?: Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} |
        undefined | null>): Promise<protos.google.protobuf.Empty>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~0:complex'
        description: ''
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/global.html#CallOptions) for
            the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~1:complex'
        - id: callback
          description: >-
            The function which will be called with the result of the API call.  {<!-- -->Promise<!-- -->} - The promise
            which resolves when API call finishes. The promise has a method named "cancel" which cancels the ongoing API
            call.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(1)'
    summary: Cancels a Rollout in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Rollout. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCancelRollout() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.cancelRollout(request);
            console.log(response);
          }

          callCancelRollout();

        </pre></code>
    name: cancelRollout(request, options)
    fullName: cancelRollout(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        cancelRollout(request?: protos.google.cloud.deploy.v1.ICancelRolloutRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.ICancelRolloutResponse,
                protos.google.cloud.deploy.v1.ICancelRolloutRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [CancelRolloutResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.CancelRolloutResponse:class)<!--
          -->. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(2)'
    name: cancelRollout(request, options, callback)
    fullName: cancelRollout(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        cancelRollout(request: protos.google.cloud.deploy.v1.ICancelRolloutRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse,
        protos.google.cloud.deploy.v1.ICancelRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout:member(3)'
    name: cancelRollout(request, callback)
    fullName: cancelRollout(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        cancelRollout(request: protos.google.cloud.deploy.v1.ICancelRolloutRequest, callback:
        Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse,
        protos.google.cloud.deploy.v1.ICancelRolloutRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createDeliveryPipeline()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`DeliveryPipeline\` should be
           *  created. Format should be projects/{project_id}/locations/{location_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`DeliveryPipeline\`.
           */
          // const deliveryPipelineId = 'abc123'
          /**
           *  Required. The \`DeliveryPipeline\` to create.
           */
          // const deliveryPipeline = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateDeliveryPipeline() {
            // Construct request
            const request = {
              parent,
              deliveryPipelineId,
              deliveryPipeline,
            };

            // Run request
            const [operation] = await deployClient.createDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateDeliveryPipeline();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createRelease()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Release\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Release\`.
           */
          // const releaseId = 'abc123'
          /**
           *  Required. The \`Release\` to create.
           */
          // const release = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateRelease() {
            // Construct request
            const request = {
              parent,
              releaseId,
              release,
            };

            // Run request
            const [operation] = await deployClient.createRelease(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateRelease();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createRollout()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Rollout\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Rollout\`.
           */
          // const rolloutId = 'abc123'
          /**
           *  Required. The \`Rollout\` to create.
           */
          // const rollout = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true
          /**
           *  Optional. The starting phase ID for the \`Rollout\`. If empty the \`Rollout\`
           *  will start at the first phase.
           */
          // const startingPhaseId = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateRollout() {
            // Construct request
            const request = {
              parent,
              rolloutId,
              rollout,
            };

            // Run request
            const [operation] = await deployClient.createRollout(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateRollout();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`createTarget()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Target\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Target\`.
           */
          // const targetId = 'abc123'
          /**
           *  Required. The \`Target\` to create.
           */
          // const target = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateTarget() {
            // Construct request
            const request = {
              parent,
              targetId,
              target,
            };

            // Run request
            const [operation] = await deployClient.createTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateTarget();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`deleteDeliveryPipeline()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The name of the \`DeliveryPipeline\` to delete. Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.
           */
          // const name = 'abc123'
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes after the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, then deleting an already deleted or non-existing
           *  \`DeliveryPipeline\` will succeed.
           */
          // const allowMissing = true
          /**
           *  Optional. If set, validate the request and preview the review, but do not
           *  actually post it.
           */
          // const validateOnly = true
          /**
           *  Optional. If set to true, all child resources under this pipeline will also
           *  be deleted. Otherwise, the request will only work if the pipeline has no
           *  child resources.
           */
          // const force = true
          /**
           *  Optional. This checksum is computed by the server based on the value of
           *  other fields, and may be sent on update and delete requests to ensure the
           *  client has an up-to-date value before proceeding.
           */
          // const etag = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callDeleteDeliveryPipeline() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const [operation] = await deployClient.deleteDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callDeleteDeliveryPipeline();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`deleteTarget()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The name of the \`Target\` to delete. Format should be
           *  projects/{project_id}/locations/{location_name}/targets/{target_name}.
           */
          // const name = 'abc123'
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes after the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, then deleting an already deleted or non-existing
           *  \`Target\` will succeed.
           */
          // const allowMissing = true
          /**
           *  Optional. If set, validate the request and preview the review, but do not
           *  actually post it.
           */
          // const validateOnly = true
          /**
           *  Optional. This checksum is computed by the server based on the value of
           *  other fields, and may be sent on update and delete requests to ensure the
           *  client has an up-to-date value before proceeding.
           */
          // const etag = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callDeleteTarget() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const [operation] = await deployClient.deleteTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callDeleteTarget();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateDeliveryPipelineProgress:member(1)'
    summary: Check the status of the long running operation returned by \`updateDeliveryPipeline()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Field mask is used to specify the fields to be overwritten in the
           *  \`DeliveryPipeline\` resource by the update.
           *  The fields specified in the update_mask are relative to the resource, not
           *  the full request. A field will be overwritten if it is in the mask. If the
           *  user does not provide a mask then all fields will be overwritten.
           */
          // const updateMask = {}
          /**
           *  Required. The \`DeliveryPipeline\` to update.
           */
          // const deliveryPipeline = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, updating a \`DeliveryPipeline\` that does not exist
           *  will result in the creation of a new \`DeliveryPipeline\`.
           */
          // const allowMissing = true
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callUpdateDeliveryPipeline() {
            // Construct request
            const request = {
              updateMask,
              deliveryPipeline,
            };

            // Run request
            const [operation] = await deployClient.updateDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callUpdateDeliveryPipeline();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: name
          description: The operation name that will be passed.
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress:member(1)'
    summary: Check the status of the long running operation returned by \`updateTarget()\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Field mask is used to specify the fields to be overwritten in the
           *  Target resource by the update.
           *  The fields specified in the update_mask are relative to the resource, not
           *  the full request. A field will be overwritten if it is in the mask. If the
           *  user does not provide a mask then all fields will be overwritten.
           */
          // const updateMask = {}
          /**
           *  Required. The \`Target\` to update.
           */
          // const target = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, updating a \`Target\` that does not exist will
           *  result in the creation of a new \`Target\`.
           */
          // const allowMissing = true
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callUpdateTarget() {
            // Construct request
            const request = {
              updateMask,
              target,
            };

            // Run request
            const [operation] = await deployClient.updateTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callUpdateTarget();

        </pre></code>
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
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
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
    name: clusterPath(project, location, cluster)
    fullName: clusterPath(project, location, cluster)
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
    name: configPath(project, location)
    fullName: configPath(project, location)
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
    summary: Creates a new DeliveryPipeline in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`DeliveryPipeline\` should be
           *  created. Format should be projects/{project_id}/locations/{location_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`DeliveryPipeline\`.
           */
          // const deliveryPipelineId = 'abc123'
          /**
           *  Required. The \`DeliveryPipeline\` to create.
           */
          // const deliveryPipeline = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateDeliveryPipeline() {
            // Construct request
            const request = {
              parent,
              deliveryPipelineId,
              deliveryPipeline,
            };

            // Run request
            const [operation] = await deployClient.createDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateDeliveryPipeline();

        </pre></code>
    name: createDeliveryPipeline(request, options)
    fullName: createDeliveryPipeline(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(2)'
    name: createDeliveryPipeline(request, options, callback)
    fullName: createDeliveryPipeline(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline:member(3)'
    name: createDeliveryPipeline(request, callback)
    fullName: createDeliveryPipeline(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(1)'
    summary: Creates a new Release in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Release\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Release\`.
           */
          // const releaseId = 'abc123'
          /**
           *  Required. The \`Release\` to create.
           */
          // const release = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateRelease() {
            // Construct request
            const request = {
              parent,
              releaseId,
              release,
            };

            // Run request
            const [operation] = await deployClient.createRelease(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateRelease();

        </pre></code>
    name: createRelease(request, options)
    fullName: createRelease(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(2)'
    name: createRelease(request, options, callback)
    fullName: createRelease(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease:member(3)'
    name: createRelease(request, callback)
    fullName: createRelease(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRelease~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(1)'
    summary: Creates a new Rollout in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Rollout\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Rollout\`.
           */
          // const rolloutId = 'abc123'
          /**
           *  Required. The \`Rollout\` to create.
           */
          // const rollout = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true
          /**
           *  Optional. The starting phase ID for the \`Rollout\`. If empty the \`Rollout\`
           *  will start at the first phase.
           */
          // const startingPhaseId = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateRollout() {
            // Construct request
            const request = {
              parent,
              rolloutId,
              rollout,
            };

            // Run request
            const [operation] = await deployClient.createRollout(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateRollout();

        </pre></code>
    name: createRollout(request, options)
    fullName: createRollout(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(2)'
    name: createRollout(request, options, callback)
    fullName: createRollout(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout:member(3)'
    name: createRollout(request, callback)
    fullName: createRollout(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createRollout~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(1)'
    summary: Creates a new Target in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent collection in which the \`Target\` should be created.
           *  Format should be
           *  projects/{project_id}/locations/{location_name}.
           */
          // const parent = 'abc123'
          /**
           *  Required. ID of the \`Target\`.
           */
          // const targetId = 'abc123'
          /**
           *  Required. The \`Target\` to create.
           */
          // const target = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callCreateTarget() {
            // Construct request
            const request = {
              parent,
              targetId,
              target,
            };

            // Run request
            const [operation] = await deployClient.createTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callCreateTarget();

        </pre></code>
    name: createTarget(request, options)
    fullName: createTarget(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(2)'
    name: createTarget(request, options, callback)
    fullName: createTarget(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget:member(3)'
    name: createTarget(request, callback)
    fullName: createTarget(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#createTarget~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(1)'
    summary: Deletes a single DeliveryPipeline.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The name of the \`DeliveryPipeline\` to delete. Format should be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.
           */
          // const name = 'abc123'
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes after the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, then deleting an already deleted or non-existing
           *  \`DeliveryPipeline\` will succeed.
           */
          // const allowMissing = true
          /**
           *  Optional. If set, validate the request and preview the review, but do not
           *  actually post it.
           */
          // const validateOnly = true
          /**
           *  Optional. If set to true, all child resources under this pipeline will also
           *  be deleted. Otherwise, the request will only work if the pipeline has no
           *  child resources.
           */
          // const force = true
          /**
           *  Optional. This checksum is computed by the server based on the value of
           *  other fields, and may be sent on update and delete requests to ensure the
           *  client has an up-to-date value before proceeding.
           */
          // const etag = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callDeleteDeliveryPipeline() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const [operation] = await deployClient.deleteDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callDeleteDeliveryPipeline();

        </pre></code>
    name: deleteDeliveryPipeline(request, options)
    fullName: deleteDeliveryPipeline(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(2)'
    name: deleteDeliveryPipeline(request, options, callback)
    fullName: deleteDeliveryPipeline(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline:member(3)'
    name: deleteDeliveryPipeline(request, callback)
    fullName: deleteDeliveryPipeline(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation:member(1)'
    summary: >-
      Deletes a long-running operation. This method indicates that the client is no longer interested in the operation
      result. It does not cancel the operation. If the server doesn't support this method, it returns
      \`google.rpc.Code.UNIMPLEMENTED\`<!-- -->.
    example:
      - |-
        <pre class="prettyprint"><code>
        const client = longrunning.operationsClient();
        await client.deleteOperation({name: ''});
        </code></pre>
    name: deleteOperation(request, options, callback)
    fullName: deleteOperation(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        deleteOperation(request: protos.google.longrunning.DeleteOperationRequest, options?: gax.CallOptions |
        Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>,
        callback?: Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null |
        undefined>): Promise<protos.google.protobuf.Empty>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~0:complex'
        description: ''
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/global.html#CallOptions) for
            the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~1:complex'
        - id: callback
          description: >-
            The function which will be called with the result of the API call.  {<!-- -->Promise<!-- -->} - The promise
            which resolves when API call finishes. The promise has a method named "cancel" which cancels the ongoing API
            call.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(1)'
    summary: Deletes a single Target.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The name of the \`Target\` to delete. Format should be
           *  projects/{project_id}/locations/{location_name}/targets/{target_name}.
           */
          // const name = 'abc123'
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes after the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, then deleting an already deleted or non-existing
           *  \`Target\` will succeed.
           */
          // const allowMissing = true
          /**
           *  Optional. If set, validate the request and preview the review, but do not
           *  actually post it.
           */
          // const validateOnly = true
          /**
           *  Optional. This checksum is computed by the server based on the value of
           *  other fields, and may be sent on update and delete requests to ensure the
           *  client has an up-to-date value before proceeding.
           */
          // const etag = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callDeleteTarget() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const [operation] = await deployClient.deleteTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callDeleteTarget();

        </pre></code>
    name: deleteTarget(request, options)
    fullName: deleteTarget(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(2)'
    name: deleteTarget(request, options, callback)
    fullName: deleteTarget(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget:member(3)'
    name: deleteTarget(request, callback)
    fullName: deleteTarget(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deliveryPipelinePath:member(1)'
    summary: Return a fully-qualified deliveryPipeline resource name string.
    name: deliveryPipelinePath(project, location, deliveryPipeline)
    fullName: deliveryPipelinePath(project, location, deliveryPipeline)
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
    summary: Gets the configuration for a location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of requested configuration.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetConfig() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getConfig(request);
            console.log(response);
          }

          callGetConfig();

        </pre></code>
    name: getConfig(request, options)
    fullName: getConfig(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing [Config](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.Config:class)<!-- -->.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(2)'
    name: getConfig(request, options, callback)
    fullName: getConfig(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig:member(3)'
    name: getConfig(request, callback)
    fullName: getConfig(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getConfig~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(1)'
    summary: Gets details of a single DeliveryPipeline.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`DeliveryPipeline\`. Format must be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetDeliveryPipeline() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getDeliveryPipeline(request);
            console.log(response);
          }

          callGetDeliveryPipeline();

        </pre></code>
    name: getDeliveryPipeline(request, options)
    fullName: getDeliveryPipeline(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [DeliveryPipeline](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class)<!-- -->.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(2)'
    name: getDeliveryPipeline(request, options, callback)
    fullName: getDeliveryPipeline(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline:member(3)'
    name: getDeliveryPipeline(request, callback)
    fullName: getDeliveryPipeline(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy:member(1)'
    summary: >-
      Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a
      policy set.
    name: getIamPolicy(request, options, callback)
    fullName: getIamPolicy(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getIamPolicy(request: IamProtos.google.iam.v1.GetIamPolicyRequest, options?: gax.CallOptions |
        Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.GetIamPolicyRequest | null | undefined, {} |
        null | undefined>, callback?: Callback<IamProtos.google.iam.v1.Policy,
        IamProtos.google.iam.v1.GetIamPolicyRequest | null | undefined, {} | null | undefined>):
        Promise<[IamProtos.google.iam.v1.Policy]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . The promise has a method named "cancel" which cancels the ongoing API call.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - google-gax!google.iam.v1.GetIamPolicyRequest:class
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html)
            for the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~1:complex'
        - id: callback
          description: |-
            The function which will be called with the result of the API call.

            The second parameter to the callback is an object representing .
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(1)'
    summary: Gets details of a single JobRun.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`JobRun\`. Format must be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}/jobRuns/{job_run_name}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetJobRun() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getJobRun(request);
            console.log(response);
          }

          callGetJobRun();

        </pre></code>
    name: getJobRun(request, options)
    fullName: getJobRun(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        getJobRun(request?: protos.google.cloud.deploy.v1.IGetJobRunRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IJobRun,
                protos.google.cloud.deploy.v1.IGetJobRunRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(2)'
    name: getJobRun(request, options, callback)
    fullName: getJobRun(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getJobRun(request: protos.google.cloud.deploy.v1.IGetJobRunRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun:member(3)'
    name: getJobRun(request, callback)
    fullName: getJobRun(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getJobRun(request: protos.google.cloud.deploy.v1.IGetJobRunRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
        undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getLocation:member(1)'
    summary: Gets information about a location.
    example:
      - |-
        <pre class="prettyprint"><code>
        const [response] = await client.getLocation(request);
        </code></pre>
    name: getLocation(request, options, callback)
    fullName: getLocation(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getLocation(request: LocationProtos.google.cloud.location.IGetLocationRequest, options?: gax.CallOptions |
        Callback<LocationProtos.google.cloud.location.ILocation,
        LocationProtos.google.cloud.location.IGetLocationRequest | null | undefined, {} | null | undefined>, callback?:
        Callback<LocationProtos.google.cloud.location.ILocation,
        LocationProtos.google.cloud.location.IGetLocationRequest | null | undefined, {} | null | undefined>):
        Promise<LocationProtos.google.cloud.location.ILocation>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getLocation~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - google-gax!google.cloud.location.IGetLocationRequest:interface
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getLocation~1:complex'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getLocation~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getOperation:member(1)'
    summary: >-
      Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at
      intervals as recommended by the API service.
    example:
      - |-
        <pre class="prettyprint"><code>
        const client = longrunning.operationsClient();
        const name = '';
        const [response] = await client.getOperation({name});
        // doThingsWith(response)
        </code></pre>
    name: getOperation(request, options, callback)
    fullName: getOperation(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        getOperation(request: protos.google.longrunning.GetOperationRequest, options?: gax.CallOptions |
        Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null |
        undefined>, callback?: Callback<protos.google.longrunning.Operation,
        protos.google.longrunning.GetOperationRequest, {} | null | undefined>):
        Promise<[protos.google.longrunning.Operation]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#getOperation~0:complex'
        description: ''
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/global.html#CallOptions) for
            the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getOperation~1:complex'
        - id: callback
          description: >-
            The function which will be called with the result of the API call.


            The second parameter to the callback is an object representing .  {<!-- -->Promise<!-- -->} - The promise
            which resolves to an array. The first element of the array is an object representing . The promise has a
            method named "cancel" which cancels the ongoing API call.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getOperation~2:complex'
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
    summary: Gets details of a single Release.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`Release\`. Format must be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetRelease() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getRelease(request);
            console.log(response);
          }

          callGetRelease();

        </pre></code>
    name: getRelease(request, options)
    fullName: getRelease(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(2)'
    name: getRelease(request, options, callback)
    fullName: getRelease(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease:member(3)'
    name: getRelease(request, callback)
    fullName: getRelease(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRelease~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(1)'
    summary: Gets details of a single Rollout.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`Rollout\`. Format must be
           *  projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetRollout() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getRollout(request);
            console.log(response);
          }

          callGetRollout();

        </pre></code>
    name: getRollout(request, options)
    fullName: getRollout(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(2)'
    name: getRollout(request, options, callback)
    fullName: getRollout(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout:member(3)'
    name: getRollout(request, callback)
    fullName: getRollout(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getRollout~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(1)'
    summary: Gets details of a single Target.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`Target\`. Format must be
           *  projects/{project_id}/locations/{location_name}/targets/{target_name}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callGetTarget() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.getTarget(request);
            console.log(response);
          }

          callGetTarget();

        </pre></code>
    name: getTarget(request, options)
    fullName: getTarget(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing [Target](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class)<!-- -->.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(2)'
    name: getTarget(request, options, callback)
    fullName: getTarget(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget:member(3)'
    name: getTarget(request, callback)
    fullName: getTarget(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#getTarget~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#iamClient:member'
    name: iamClient
    fullName: iamClient
    langs:
      - typeScript
    type: property
    syntax:
      content: 'iamClient: IamClient;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(1)'
    summary: Ignores the specified Job in a Rollout.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Rollout. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}.
           */
          // const rollout = 'abc123'
          /**
           *  Required. The phase ID the Job to ignore belongs to.
           */
          // const phaseId = 'abc123'
          /**
           *  Required. The job ID for the Job to ignore.
           */
          // const jobId = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callIgnoreJob() {
            // Construct request
            const request = {
              rollout,
              phaseId,
              jobId,
            };

            // Run request
            const response = await deployClient.ignoreJob(request);
            console.log(response);
          }

          callIgnoreJob();

        </pre></code>
    name: ignoreJob(request, options)
    fullName: ignoreJob(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        ignoreJob(request?: protos.google.cloud.deploy.v1.IIgnoreJobRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IIgnoreJobResponse,
                protos.google.cloud.deploy.v1.IIgnoreJobRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [IgnoreJobResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.IgnoreJobResponse:class)<!-- -->.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(2)'
    name: ignoreJob(request, options, callback)
    fullName: ignoreJob(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        ignoreJob(request: protos.google.cloud.deploy.v1.IIgnoreJobRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest |
        null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob:member(3)'
    name: ignoreJob(request, callback)
    fullName: ignoreJob(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        ignoreJob(request: protos.google.cloud.deploy.v1.IIgnoreJobRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest |
        null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~2:complex'
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#jobRunPath:member(1)'
    summary: Return a fully-qualified jobRun resource name string.
    name: jobRunPath(project, location, deliveryPipeline, release, rollout, jobRun)
    fullName: jobRunPath(project, location, deliveryPipeline, release, rollout, jobRun)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        jobRunPath(project: string, location: string, deliveryPipeline: string, release: string, rollout: string,
        jobRun: string): string;
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
        - id: jobRun
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(1)'
    summary: Lists DeliveryPipelines in a given project and location.
    name: listDeliveryPipelines(request, options)
    fullName: listDeliveryPipelines(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is Array of
          [DeliveryPipeline](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class)<!-- -->.
          The client library will perform auto-pagination by default: it will call the API as many times as needed and
          will merge results from all the pages into this array. Note that it can affect your quota. We recommend using
          \`listDeliveryPipelinesAsync()\` method described below for async iteration which you can stop as needed. Please
          see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(2)'
    name: listDeliveryPipelines(request, options, callback)
    fullName: listDeliveryPipelines(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines:member(3)'
    name: listDeliveryPipelines(request, callback)
    fullName: listDeliveryPipelines(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync:member(1)'
    summary: |-
      Equivalent to \`listDeliveryPipelines\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent, which owns this collection of pipelines. Format must
           *  be projects/{project_id}/locations/{location_name}.
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
           *  Filter pipelines to be returned. See https://google.aip.dev/160 for more
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

          async function callListDeliveryPipelines() {
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

          callListDeliveryPipelines();

        </pre></code>
    name: listDeliveryPipelinesAsync(request, options)
    fullName: listDeliveryPipelinesAsync(request, options)
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
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing
          [DeliveryPipeline](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class)<!-- -->.
          The API will be called under the hood as needed, once per the page, so you can stop the iteration when you
          don't need more results. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesStream:member(1)'
    summary: Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.
    name: listDeliveryPipelinesStream(request, options)
    fullName: listDeliveryPipelinesStream(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listDeliveryPipelinesStream(request?: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest, options?:
        CallOptions): Transform;
      return:
        type:
          - '!"\\"stream\\"".internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing
          [DeliveryPipeline](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class) on 'data'
          event. The client library will perform auto-pagination by default: it will call the API as many times as
          needed. Note that it can affect your quota. We recommend using \`listDeliveryPipelinesAsync()\` method described
          below for async iteration which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(1)'
    summary: Lists JobRuns in a given project and location.
    name: listJobRuns(request, options)
    fullName: listJobRuns(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        listJobRuns(request?: protos.google.cloud.deploy.v1.IListJobRunsRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IJobRun[],
                protos.google.cloud.deploy.v1.IListJobRunsRequest | null,
                protos.google.cloud.deploy.v1.IListJobRunsResponse
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is Array of
          . The client library will perform auto-pagination by default: it will call the API as many times as needed and
          will merge results from all the pages into this array. Note that it can affect your quota. We recommend using
          \`listJobRunsAsync()\` method described below for async iteration which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(2)'
    name: listJobRuns(request, options, callback)
    fullName: listJobRuns(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listJobRuns(request: protos.google.cloud.deploy.v1.IListJobRunsRequest, options: CallOptions, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
        protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>):
        void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns:member(3)'
    name: listJobRuns(request, callback)
    fullName: listJobRuns(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listJobRuns(request: protos.google.cloud.deploy.v1.IListJobRunsRequest, callback:
        PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
        protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>):
        void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsAsync:member(1)'
    summary: |-
      Equivalent to \`listJobRuns\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The \`Rollout\` which owns this collection of \`JobRun\` objects.
           */
          // const parent = 'abc123'
          /**
           *  Optional. The maximum number of \`JobRun\` objects to return. The service may
           *  return fewer than this value. If unspecified, at most 50 \`JobRun\` objects
           *  will be returned. The maximum value is 1000; values above 1000 will be set
           *  to 1000.
           */
          // const pageSize = 1234
          /**
           *  Optional. A page token, received from a previous \`ListJobRuns\` call.
           *  Provide this to retrieve the subsequent page.
           *  When paginating, all other provided parameters match the call that provided
           *  the page token.
           */
          // const pageToken = 'abc123'
          /**
           *  Optional. Filter results to be returned. See https://google.aip.dev/160 for
           *  more details.
           */
          // const filter = 'abc123'
          /**
           *  Optional. Field to sort by. See https://google.aip.dev/132#ordering for
           *  more details.
           */
          // const orderBy = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callListJobRuns() {
            // Construct request
            const request = {
              parent,
            };

            // Run request
            const iterable = await deployClient.listJobRunsAsync(request);
            for await (const response of iterable) {
                console.log(response);
            }
          }

          callListJobRuns();

        </pre></code>
    name: listJobRunsAsync(request, options)
    fullName: listJobRunsAsync(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listJobRunsAsync(request?: protos.google.cloud.deploy.v1.IListJobRunsRequest, options?: CallOptions):
        AsyncIterable<protos.google.cloud.deploy.v1.IJobRun>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing . The API will be called
          under the hood as needed, once per the page, so you can stop the iteration when you don't need more results.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsStream:member(1)'
    summary: Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.
    name: listJobRunsStream(request, options)
    fullName: listJobRunsStream(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listJobRunsStream(request?: protos.google.cloud.deploy.v1.IListJobRunsRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!"\\"stream\\"".internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing  on 'data' event. The client
          library will perform auto-pagination by default: it will call the API as many times as needed. Note that it
          can affect your quota. We recommend using \`listJobRunsAsync()\` method described below for async iteration
          which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listLocationsAsync:member(1)'
    summary: |-
      Lists information about the supported locations for this service. Returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
        const iterable = client.listLocationsAsync(request);
        for await (const response of iterable) {
          // process response
        }
        </code></pre>
    name: listLocationsAsync(request, options)
    fullName: listLocationsAsync(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listLocationsAsync(request: LocationProtos.google.cloud.location.IListLocationsRequest, options?: CallOptions):
        AsyncIterable<LocationProtos.google.cloud.location.ILocation>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listLocationsAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing . The API will be called
          under the hood as needed, once per the page, so you can stop the iteration when you don't need more results.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - google-gax!google.cloud.location.IListLocationsRequest:interface
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listOperationsAsync:member(1)'
    summary: >-
      Lists operations that match the specified filter in the request. If the server doesn't support this method, it
      returns \`UNIMPLEMENTED\`<!-- -->. Returns an iterable object.


      For-await-of syntax is used with the iterable to recursively get response element on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
        const client = longrunning.operationsClient();
        for await (const response of client.listOperationsAsync(request));
        // doThingsWith(response)
        </code></pre>
    name: listOperationsAsync(request, options)
    fullName: listOperationsAsync(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listOperationsAsync(request: protos.google.longrunning.ListOperationsRequest, options?: gax.CallOptions):
        AsyncIterable<protos.google.longrunning.ListOperationsResponse>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#listOperationsAsync~0:complex'
        description: >-
          {<!-- -->Object<!-- -->} An iterable Object that conforms to [iteration
          protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.longrunning.ListOperationsRequest:class'
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/global.html#CallOptions) for
            the details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(1)'
    summary: Lists Releases in a given project and location.
    name: listReleases(request, options)
    fullName: listReleases(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is Array of
          . The client library will perform auto-pagination by default: it will call the API as many times as needed and
          will merge results from all the pages into this array. Note that it can affect your quota. We recommend using
          \`listReleasesAsync()\` method described below for async iteration which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(2)'
    name: listReleases(request, options, callback)
    fullName: listReleases(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases:member(3)'
    name: listReleases(request, callback)
    fullName: listReleases(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listReleases~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync:member(1)'
    summary: |-
      Equivalent to \`listReleases\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The \`DeliveryPipeline\` which owns this collection of \`Release\`
           *  objects.
           */
          // const parent = 'abc123'
          /**
           *  Optional. The maximum number of \`Release\` objects to return. The service
           *  may return fewer than this value. If unspecified, at most 50 \`Release\`
           *  objects will be returned. The maximum value is 1000; values above 1000 will
           *  be set to 1000.
           */
          // const pageSize = 1234
          /**
           *  Optional. A page token, received from a previous \`ListReleases\` call.
           *  Provide this to retrieve the subsequent page.
           *  When paginating, all other provided parameters match
           *  the call that provided the page token.
           */
          // const pageToken = 'abc123'
          /**
           *  Optional. Filter releases to be returned. See https://google.aip.dev/160
           *  for more details.
           */
          // const filter = 'abc123'
          /**
           *  Optional. Field to sort by. See https://google.aip.dev/132#ordering for
           *  more details.
           */
          // const orderBy = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callListReleases() {
            // Construct request
            const request = {
              parent,
            };

            // Run request
            const iterable = await deployClient.listReleasesAsync(request);
            for await (const response of iterable) {
                console.log(response);
            }
          }

          callListReleases();

        </pre></code>
    name: listReleasesAsync(request, options)
    fullName: listReleasesAsync(request, options)
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
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing . The API will be called
          under the hood as needed, once per the page, so you can stop the iteration when you don't need more results.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesStream:member(1)'
    summary: Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.
    name: listReleasesStream(request, options)
    fullName: listReleasesStream(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listReleasesStream(request?: protos.google.cloud.deploy.v1.IListReleasesRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!"\\"stream\\"".internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing  on 'data' event. The client
          library will perform auto-pagination by default: it will call the API as many times as needed. Note that it
          can affect your quota. We recommend using \`listReleasesAsync()\` method described below for async iteration
          which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(1)'
    summary: Lists Rollouts in a given project and location.
    name: listRollouts(request, options)
    fullName: listRollouts(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is Array of
          . The client library will perform auto-pagination by default: it will call the API as many times as needed and
          will merge results from all the pages into this array. Note that it can affect your quota. We recommend using
          \`listRolloutsAsync()\` method described below for async iteration which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(2)'
    name: listRollouts(request, options, callback)
    fullName: listRollouts(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts:member(3)'
    name: listRollouts(request, callback)
    fullName: listRollouts(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync:member(1)'
    summary: |-
      Equivalent to \`listRollouts\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The \`Release\` which owns this collection of \`Rollout\` objects.
           */
          // const parent = 'abc123'
          /**
           *  Optional. The maximum number of \`Rollout\` objects to return. The service
           *  may return fewer than this value. If unspecified, at most 50 \`Rollout\`
           *  objects will be returned. The maximum value is 1000; values above 1000 will
           *  be set to 1000.
           */
          // const pageSize = 1234
          /**
           *  Optional. A page token, received from a previous \`ListRollouts\` call.
           *  Provide this to retrieve the subsequent page.
           *  When paginating, all other provided parameters match
           *  the call that provided the page token.
           */
          // const pageToken = 'abc123'
          /**
           *  Optional. Filter rollouts to be returned. See https://google.aip.dev/160
           *  for more details.
           */
          // const filter = 'abc123'
          /**
           *  Optional. Field to sort by. See https://google.aip.dev/132#ordering for
           *  more details.
           */
          // const orderBy = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callListRollouts() {
            // Construct request
            const request = {
              parent,
            };

            // Run request
            const iterable = await deployClient.listRolloutsAsync(request);
            for await (const response of iterable) {
                console.log(response);
            }
          }

          callListRollouts();

        </pre></code>
    name: listRolloutsAsync(request, options)
    fullName: listRolloutsAsync(request, options)
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
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing . The API will be called
          under the hood as needed, once per the page, so you can stop the iteration when you don't need more results.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsStream:member(1)'
    summary: Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.
    name: listRolloutsStream(request, options)
    fullName: listRolloutsStream(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listRolloutsStream(request?: protos.google.cloud.deploy.v1.IListRolloutsRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!"\\"stream\\"".internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing  on 'data' event. The client
          library will perform auto-pagination by default: it will call the API as many times as needed. Note that it
          can affect your quota. We recommend using \`listRolloutsAsync()\` method described below for async iteration
          which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(1)'
    summary: Lists Targets in a given project and location.
    name: listTargets(request, options)
    fullName: listTargets(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is Array of
          [Target](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class)<!-- -->. The client library
          will perform auto-pagination by default: it will call the API as many times as needed and will merge results
          from all the pages into this array. Note that it can affect your quota. We recommend using
          \`listTargetsAsync()\` method described below for async iteration which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(2)'
    name: listTargets(request, options, callback)
    fullName: listTargets(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets:member(3)'
    name: listTargets(request, callback)
    fullName: listTargets(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#listTargets~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync:member(1)'
    summary: |-
      Equivalent to \`listTargets\`<!-- -->, but returns an iterable object.

      \`for\`<!-- -->-\`await\`<!-- -->-\`of\` syntax is used with the iterable to get response elements on-demand.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. The parent, which owns this collection of targets. Format must be
           *  projects/{project_id}/locations/{location_name}.
           */
          // const parent = 'abc123'
          /**
           *  Optional. The maximum number of \`Target\` objects to return. The service may
           *  return fewer than this value. If unspecified, at most 50 \`Target\` objects
           *  will be returned. The maximum value is 1000; values above 1000 will be set
           *  to 1000.
           */
          // const pageSize = 1234
          /**
           *  Optional. A page token, received from a previous \`ListTargets\` call.
           *  Provide this to retrieve the subsequent page.
           *  When paginating, all other provided parameters match
           *  the call that provided the page token.
           */
          // const pageToken = 'abc123'
          /**
           *  Optional. Filter targets to be returned. See https://google.aip.dev/160 for
           *  more details.
           */
          // const filter = 'abc123'
          /**
           *  Optional. Field to sort by. See https://google.aip.dev/132#ordering for
           *  more details.
           */
          // const orderBy = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callListTargets() {
            // Construct request
            const request = {
              parent,
            };

            // Run request
            const iterable = await deployClient.listTargetsAsync(request);
            for await (const response of iterable) {
                console.log(response);
            }
          }

          callListTargets();

        </pre></code>
    name: listTargetsAsync(request, options)
    fullName: listTargetsAsync(request, options)
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
          {<!-- -->Object<!-- -->} An iterable Object that allows [async
          iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<!-- -->.
          When you iterate the returned iterable, each element will be an object representing
          [Target](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class)<!-- -->. The API will be called
          under the hood as needed, once per the page, so you can stop the iteration when you don't need more results.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsStream:member(1)'
    summary: Equivalent to \`method.name.toCamelCase()\`<!-- -->, but returns a NodeJS Stream object.
    name: listTargetsStream(request, options)
    fullName: listTargetsStream(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        listTargetsStream(request?: protos.google.cloud.deploy.v1.IListTargetsRequest, options?: CallOptions):
        Transform;
      return:
        type:
          - '!"\\"stream\\"".internal.Transform:class'
        description: >-
          {<!-- -->Stream<!-- -->} An object stream which emits an object representing
          [Target](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class) on 'data' event. The client
          library will perform auto-pagination by default: it will call the API as many times as needed. Note that it
          can affect your quota. We recommend using \`listTargetsAsync()\` method described below for async iteration
          which you can stop as needed. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#locationPath:member(1)'
    summary: Return a fully-qualified location resource name string.
    name: locationPath(project, location)
    fullName: locationPath(project, location)
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#locationsClient:member'
    name: locationsClient
    fullName: locationsClient
    langs:
      - typeScript
    type: property
    syntax:
      content: 'locationsClient: LocationsClient;'
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchDeliveryPipelineFromJobRunName:member(1)'
    summary: Parse the delivery\\_pipeline from JobRun resource.
    name: matchDeliveryPipelineFromJobRunName(jobRunName)
    fullName: matchDeliveryPipelineFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchDeliveryPipelineFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the delivery\\_pipeline.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchJobRunFromJobRunName:member(1)'
    summary: Parse the job\\_run from JobRun resource.
    name: matchJobRunFromJobRunName(jobRunName)
    fullName: matchJobRunFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchJobRunFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the job\\_run.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromJobRunName:member(1)'
    summary: Parse the location from JobRun resource.
    name: matchLocationFromJobRunName(jobRunName)
    fullName: matchLocationFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromMembershipName:member(1)'
    summary: Parse the location from Membership resource.
    name: matchLocationFromMembershipName(membershipName)
    fullName: matchLocationFromMembershipName(membershipName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromMembershipName(membershipName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: membershipName
          description: A fully-qualified path representing Membership resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchLocationFromServiceName:member(1)'
    summary: Parse the location from Service resource.
    name: matchLocationFromServiceName(serviceName)
    fullName: matchLocationFromServiceName(serviceName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchLocationFromServiceName(serviceName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the location.'
      parameters:
        - id: serviceName
          description: A fully-qualified path representing Service resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchMembershipFromMembershipName:member(1)'
    summary: Parse the membership from Membership resource.
    name: matchMembershipFromMembershipName(membershipName)
    fullName: matchMembershipFromMembershipName(membershipName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchMembershipFromMembershipName(membershipName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the membership.'
      parameters:
        - id: membershipName
          description: A fully-qualified path representing Membership resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromJobRunName:member(1)'
    summary: Parse the project from JobRun resource.
    name: matchProjectFromJobRunName(jobRunName)
    fullName: matchProjectFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromMembershipName:member(1)'
    summary: Parse the project from Membership resource.
    name: matchProjectFromMembershipName(membershipName)
    fullName: matchProjectFromMembershipName(membershipName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromMembershipName(membershipName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: membershipName
          description: A fully-qualified path representing Membership resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchProjectFromServiceName:member(1)'
    summary: Parse the project from Service resource.
    name: matchProjectFromServiceName(serviceName)
    fullName: matchProjectFromServiceName(serviceName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchProjectFromServiceName(serviceName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the project.'
      parameters:
        - id: serviceName
          description: A fully-qualified path representing Service resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchReleaseFromJobRunName:member(1)'
    summary: Parse the release from JobRun resource.
    name: matchReleaseFromJobRunName(jobRunName)
    fullName: matchReleaseFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchReleaseFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the release.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchRolloutFromJobRunName:member(1)'
    summary: Parse the rollout from JobRun resource.
    name: matchRolloutFromJobRunName(jobRunName)
    fullName: matchRolloutFromJobRunName(jobRunName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchRolloutFromJobRunName(jobRunName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the rollout.'
      parameters:
        - id: jobRunName
          description: A fully-qualified path representing JobRun resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#matchServiceFromServiceName:member(1)'
    summary: Parse the service from Service resource.
    name: matchServiceFromServiceName(serviceName)
    fullName: matchServiceFromServiceName(serviceName)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'matchServiceFromServiceName(serviceName: string): string | number;'
      return:
        type:
          - string | number
        description: '{<!-- -->string<!-- -->} A string representing the service.'
      parameters:
        - id: serviceName
          description: A fully-qualified path representing Service resource.
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#membershipPath:member(1)'
    summary: Return a fully-qualified membership resource name string.
    name: membershipPath(project, location, membership)
    fullName: membershipPath(project, location, membership)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'membershipPath(project: string, location: string, membership: string): string;'
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
        - id: membership
          description: ''
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
    name: releasePath(project, location, deliveryPipeline, release)
    fullName: releasePath(project, location, deliveryPipeline, release)
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(1)'
    summary: Retries the specified Job in a Rollout.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the Rollout. Format is
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}.
           */
          // const rollout = 'abc123'
          /**
           *  Required. The phase ID the Job to retry belongs to.
           */
          // const phaseId = 'abc123'
          /**
           *  Required. The job ID for the Job to retry.
           */
          // const jobId = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callRetryJob() {
            // Construct request
            const request = {
              rollout,
              phaseId,
              jobId,
            };

            // Run request
            const response = await deployClient.retryJob(request);
            console.log(response);
          }

          callRetryJob();

        </pre></code>
    name: retryJob(request, options)
    fullName: retryJob(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: |-
        retryJob(request?: protos.google.cloud.deploy.v1.IRetryJobRequest, options?: CallOptions): Promise<[
                protos.google.cloud.deploy.v1.IRetryJobResponse,
                protos.google.cloud.deploy.v1.IRetryJobRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#retryJob~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [RetryJobResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.RetryJobResponse:class)<!-- -->.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(2)'
    name: retryJob(request, options, callback)
    fullName: retryJob(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        retryJob(request: protos.google.cloud.deploy.v1.IRetryJobRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null
        | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#retryJob~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob:member(3)'
    name: retryJob(request, callback)
    fullName: retryJob(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        retryJob(request: protos.google.cloud.deploy.v1.IRetryJobRequest, callback:
        Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null
        | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#retryJob~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#rolloutPath:member(1)'
    summary: Return a fully-qualified rollout resource name string.
    name: rolloutPath(project, location, deliveryPipeline, release, rollout)
    fullName: rolloutPath(project, location, deliveryPipeline, release, rollout)
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#servicePath:member(1)'
    summary: Return a fully-qualified service resource name string.
    name: servicePath(project, location, service)
    fullName: servicePath(project, location, service)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'servicePath(project: string, location: string, service: string): string;'
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
        - id: service
          description: ''
          type:
            - string
  - uid: '@google-cloud/deploy!v1.CloudDeployClient.servicePath:member'
    summary: The DNS address for this API service.
    name: servicePath
    fullName: servicePath
    langs:
      - typeScript
    type: property
    syntax:
      content: 'static get servicePath(): string;'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy:member(1)'
    summary: >-
      Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return
      an empty set of permissions, not a NOT\\_FOUND error.


      Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for
      authorization checking. This operation may "fail open" without warning.
    name: setIamPolicy(request, options, callback)
    fullName: setIamPolicy(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        setIamPolicy(request: IamProtos.google.iam.v1.SetIamPolicyRequest, options?: gax.CallOptions |
        Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.SetIamPolicyRequest | null | undefined, {} |
        null | undefined>, callback?: Callback<IamProtos.google.iam.v1.Policy,
        IamProtos.google.iam.v1.SetIamPolicyRequest | null | undefined, {} | null | undefined>):
        Promise<[IamProtos.google.iam.v1.Policy]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . The promise has a method named "cancel" which cancels the ongoing API call.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - google-gax!google.iam.v1.SetIamPolicyRequest:class
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html)
            for the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~1:complex'
        - id: callback
          description: |-
            The function which will be called with the result of the API call.

            The second parameter to the callback is an object representing .
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#targetPath:member(1)'
    summary: Return a fully-qualified target resource name string.
    name: targetPath(project, location, target)
    fullName: targetPath(project, location, target)
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
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(1)'
    summary: Terminates a Job Run in a given project and location.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Name of the \`JobRun\`. Format must be
           *  projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/
           *  releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}.
           */
          // const name = 'abc123'

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callTerminateJobRun() {
            // Construct request
            const request = {
              name,
            };

            // Run request
            const response = await deployClient.terminateJobRun(request);
            console.log(response);
          }

          callTerminateJobRun();

        </pre></code>
    name: terminateJobRun(request, options)
    fullName: terminateJobRun(request, options)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        terminateJobRun(request?: protos.google.cloud.deploy.v1.ITerminateJobRunRequest, options?: CallOptions):
        Promise<[
                protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
                protos.google.cloud.deploy.v1.ITerminateJobRunRequest | undefined,
                {} | undefined
            ]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing
          [TerminateJobRunResponse](xref:@google-cloud/deploy!protos.google.cloud.deploy.v1.TerminateJobRunResponse:class)<!--
          -->. Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods) for
          more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(2)'
    name: terminateJobRun(request, options, callback)
    fullName: terminateJobRun(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        terminateJobRun(request: protos.google.cloud.deploy.v1.ITerminateJobRunRequest, options: CallOptions, callback:
        Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
        protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun:member(3)'
    name: terminateJobRun(request, callback)
    fullName: terminateJobRun(request, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        terminateJobRun(request: protos.google.cloud.deploy.v1.ITerminateJobRunRequest, callback:
        Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
        protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>): void;
      return:
        type:
          - void
        description: ''
      parameters:
        - id: request
          description: ''
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions:member(1)'
    summary: >-
      Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return
      an empty set of permissions, not a NOT\\_FOUND error.


      Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for
      authorization checking. This operation may "fail open" without warning.
    name: testIamPermissions(request, options, callback)
    fullName: testIamPermissions(request, options, callback)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        testIamPermissions(request: IamProtos.google.iam.v1.TestIamPermissionsRequest, options?: gax.CallOptions |
        Callback<IamProtos.google.iam.v1.TestIamPermissionsResponse, IamProtos.google.iam.v1.TestIamPermissionsRequest |
        null | undefined, {} | null | undefined>, callback?:
        Callback<IamProtos.google.iam.v1.TestIamPermissionsResponse, IamProtos.google.iam.v1.TestIamPermissionsRequest |
        null | undefined, {} | null | undefined>): Promise<[IamProtos.google.iam.v1.TestIamPermissionsResponse]>;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~0:complex'
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing . The promise has a method named "cancel" which cancels the ongoing API call.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - google-gax!google.iam.v1.TestIamPermissionsRequest:class
        - id: options
          description: >-
            Optional parameters. You can override the default settings for this call, e.g, timeout, retries,
            paginations, etc. See [gax.CallOptions](https://googleapis.github.io/gax-nodejs/interfaces/CallOptions.html)
            for the details.
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~1:complex'
        - id: callback
          description: |-
            The function which will be called with the result of the API call.

            The second parameter to the callback is an object representing .
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(1)'
    summary: Updates the parameters of a single DeliveryPipeline.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Field mask is used to specify the fields to be overwritten in the
           *  \`DeliveryPipeline\` resource by the update.
           *  The fields specified in the update_mask are relative to the resource, not
           *  the full request. A field will be overwritten if it is in the mask. If the
           *  user does not provide a mask then all fields will be overwritten.
           */
          // const updateMask = {}
          /**
           *  Required. The \`DeliveryPipeline\` to update.
           */
          // const deliveryPipeline = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, updating a \`DeliveryPipeline\` that does not exist
           *  will result in the creation of a new \`DeliveryPipeline\`.
           */
          // const allowMissing = true
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callUpdateDeliveryPipeline() {
            // Construct request
            const request = {
              updateMask,
              deliveryPipeline,
            };

            // Run request
            const [operation] = await deployClient.updateDeliveryPipeline(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callUpdateDeliveryPipeline();

        </pre></code>
    name: updateDeliveryPipeline(request, options)
    fullName: updateDeliveryPipeline(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(2)'
    name: updateDeliveryPipeline(request, options, callback)
    fullName: updateDeliveryPipeline(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline:member(3)'
    name: updateDeliveryPipeline(request, callback)
    fullName: updateDeliveryPipeline(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~2:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(1)'
    summary: Updates the parameters of a single Target.
    example:
      - |-
        <pre class="prettyprint"><code>
          /**
           * This snippet has been automatically generated and should be regarded as a code template only.
           * It will require modifications to work.
           * It may require correct/in-range values for request initialization.
           * TODO(developer): Uncomment these variables before running the sample.
           */
          /**
           *  Required. Field mask is used to specify the fields to be overwritten in the
           *  Target resource by the update.
           *  The fields specified in the update_mask are relative to the resource, not
           *  the full request. A field will be overwritten if it is in the mask. If the
           *  user does not provide a mask then all fields will be overwritten.
           */
          // const updateMask = {}
          /**
           *  Required. The \`Target\` to update.
           */
          // const target = {}
          /**
           *  Optional. A request ID to identify requests. Specify a unique request ID
           *  so that if you must retry your request, the server will know to ignore
           *  the request if it has already been completed. The server will guarantee
           *  that for at least 60 minutes since the first request.
           *  For example, consider a situation where you make an initial request and the
           *  request times out. If you make the request again with the same request ID,
           *  the server can check if original operation with the same request ID was
           *  received, and if so, will ignore the second request. This prevents clients
           *  from accidentally creating duplicate commitments.
           *  The request ID must be a valid UUID with the exception that zero UUID is
           *  not supported (00000000-0000-0000-0000-000000000000).
           */
          // const requestId = 'abc123'
          /**
           *  Optional. If set to true, updating a \`Target\` that does not exist will
           *  result in the creation of a new \`Target\`.
           */
          // const allowMissing = true
          /**
           *  Optional. If set to true, the request is validated and the user is provided
           *  with an expected result, but no actual change is made.
           */
          // const validateOnly = true

          // Imports the Deploy library
          const {CloudDeployClient} = require('@google-cloud/deploy').v1;

          // Instantiates a client
          const deployClient = new CloudDeployClient();

          async function callUpdateTarget() {
            // Construct request
            const request = {
              updateMask,
              target,
            };

            // Run request
            const [operation] = await deployClient.updateTarget(request);
            const [response] = await operation.promise();
            console.log(response);
          }

          callUpdateTarget();

        </pre></code>
    name: updateTarget(request, options)
    fullName: updateTarget(request, options)
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
        description: >-
          {<!-- -->Promise<!-- -->} - The promise which resolves to an array. The first element of the array is an
          object representing a long running operation. Its \`promise()\` method returns a promise you can \`await\` for.
          Please see the
          [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
          for more details and examples.
      parameters:
        - id: request
          description: The request object that will be sent.
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        - id: options
          description: >-
            Call options. See [CallOptions](https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html)
            for more details.
          type:
            - google-gax!CallOptions:interface
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(2)'
    name: updateTarget(request, options, callback)
    fullName: updateTarget(request, options, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        - id: options
          description: ''
          type:
            - google-gax!CallOptions:interface
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~1:complex'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget:member(3)'
    name: updateTarget(request, callback)
    fullName: updateTarget(request, callback)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
        - id: callback
          description: ''
          type:
            - '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~2:complex'
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
    name: workerPoolPath(project, location, workerPool)
    fullName: workerPoolPath(project, location, workerPool)
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
  - uid: google-gax!ClientOptions:interface
    name: ClientOptions
  - uid: '@google-cloud/deploy!v1.CloudDeployClient~0:complex'
    name: typeof gax | typeof gax.fallback
    fullName: typeof gax | typeof fallback
    spec.typeScript:
      - name: 'typeof '
        fullName: 'typeof '
      - uid: '@google-cloud/deploy!~gax'
        name: gax
        fullName: gax
      - name: ' | typeof '
        fullName: ' | typeof '
      - uid: google-gax!fallback
        name: gax.fallback
        fullName: fallback
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
              protos.google.cloud.deploy.v1.IAbandonReleaseRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
              protos.google.cloud.deploy.v1.IAbandonReleaseRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
    name: IAbandonReleaseRequest
    fullName: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
  - uid: google-gax!CallOptions:interface
    name: CallOptions
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
      protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
      protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#abandonRelease~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
      protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IAbandonReleaseResponse,
      protos.google.cloud.deploy.v1.IAbandonReleaseRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseResponse:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAbandonReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IAbandonReleaseRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
              protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
              protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
    name: IAdvanceRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
      protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
      protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#advanceRollout~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
      protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IAdvanceRolloutResponse,
      protos.google.cloud.deploy.v1.IAdvanceRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IAdvanceRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IAdvanceRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
    name: IApproveRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#approveRollout~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IApproveRolloutResponse,
      protos.google.cloud.deploy.v1.IApproveRolloutRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutResponse
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IApproveRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IApproveRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~0:complex'
    name: Promise<protos.google.protobuf.Empty>
    fullName: Promise<protos.google.protobuf.Empty>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
    name: CancelOperationRequest
    fullName: protos.google.longrunning.CancelOperationRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~1:complex'
    name: >-
      gax.CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.CancelOperationRequest, {} |
      undefined | null>
    fullName: >-
      CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.CancelOperationRequest, {} |
      undefined | null>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
        name: protos.google.longrunning.CancelOperationRequest
        fullName: protos.google.longrunning.CancelOperationRequest
      - name: ', {} | undefined | null>'
        fullName: ', {} | undefined | null>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelOperation~2:complex'
    name: Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} | undefined | null>
    fullName: Callback<protos.google.longrunning.CancelOperationRequest, protos.google.protobuf.Empty, {} | undefined | null>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.longrunning.CancelOperationRequest:class'
        name: protos.google.longrunning.CancelOperationRequest
        fullName: protos.google.longrunning.CancelOperationRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', {} | undefined | null>'
        fullName: ', {} | undefined | null>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.ICancelRolloutResponse,
              protos.google.cloud.deploy.v1.ICancelRolloutRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.ICancelRolloutResponse,
              protos.google.cloud.deploy.v1.ICancelRolloutRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutResponse
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutRequest
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
    name: ICancelRolloutRequest
    fullName: protos.google.cloud.deploy.v1.ICancelRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse, protos.google.cloud.deploy.v1.ICancelRolloutRequest
      | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse, protos.google.cloud.deploy.v1.ICancelRolloutRequest
      | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutResponse
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutRequest
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#cancelRollout~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse, protos.google.cloud.deploy.v1.ICancelRolloutRequest
      | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ICancelRolloutResponse, protos.google.cloud.deploy.v1.ICancelRolloutRequest
      | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutResponse:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutResponse
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICancelRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.ICancelRolloutRequest
        fullName: protos.google.cloud.deploy.v1.ICancelRolloutRequest
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
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
        name: protos.google.cloud.deploy.v1.DeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.DeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateReleaseProgress~0:complex'
    name: Promise<LROperation<protos.google.cloud.deploy.v1.Release, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.cloud.deploy.v1.Release, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release:class'
        name: protos.google.cloud.deploy.v1.Release
        fullName: protos.google.cloud.deploy.v1.Release
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateRolloutProgress~0:complex'
    name: Promise<LROperation<protos.google.cloud.deploy.v1.Rollout, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.cloud.deploy.v1.Rollout, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Rollout:class'
        name: protos.google.cloud.deploy.v1.Rollout
        fullName: protos.google.cloud.deploy.v1.Rollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkCreateTargetProgress~0:complex'
    name: Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
        name: protos.google.cloud.deploy.v1.Target
        fullName: protos.google.cloud.deploy.v1.Target
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteDeliveryPipelineProgress~0:complex'
    name: Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkDeleteTargetProgress~0:complex'
    name: Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.protobuf.Empty, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
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
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.DeliveryPipeline:class'
        name: protos.google.cloud.deploy.v1.DeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.DeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
      - name: '>>'
        fullName: '>>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#checkUpdateTargetProgress~0:complex'
    name: Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>
    fullName: Promise<LROperation<protos.google.cloud.deploy.v1.Target, protos.google.cloud.deploy.v1.OperationMetadata>>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Target:class'
        name: protos.google.cloud.deploy.v1.Target
        fullName: protos.google.cloud.deploy.v1.Target
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.OperationMetadata:class'
        name: protos.google.cloud.deploy.v1.OperationMetadata
        fullName: protos.google.cloud.deploy.v1.OperationMetadata
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest:interface'
    name: ICreateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.ICreateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createDeliveryPipeline~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateReleaseRequest:interface'
    name: ICreateReleaseRequest
    fullName: protos.google.cloud.deploy.v1.ICreateReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRelease~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateRolloutRequest:interface'
    name: ICreateRolloutRequest
    fullName: protos.google.cloud.deploy.v1.ICreateRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createRollout~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ICreateTargetRequest:interface'
    name: ICreateTargetRequest
    fullName: protos.google.cloud.deploy.v1.ICreateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#createTarget~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest:interface'
    name: IDeleteDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~1:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteDeliveryPipeline~2:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~0:complex'
    name: Promise<protos.google.protobuf.Empty>
    fullName: Promise<protos.google.protobuf.Empty>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
    name: DeleteOperationRequest
    fullName: protos.google.longrunning.DeleteOperationRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~1:complex'
    name: >-
      gax.CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} |
      null | undefined>
    fullName: >-
      CallOptions | Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null |
      undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
        name: protos.google.longrunning.DeleteOperationRequest
        fullName: protos.google.longrunning.DeleteOperationRequest
      - name: ', {} | null | undefined>'
        fullName: ', {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteOperation~2:complex'
    name: Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>
    fullName: Callback<protos.google.protobuf.Empty, protos.google.longrunning.DeleteOperationRequest, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.Empty:class'
        name: protos.google.protobuf.Empty
        fullName: protos.google.protobuf.Empty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.longrunning.DeleteOperationRequest:class'
        name: protos.google.longrunning.DeleteOperationRequest
        fullName: protos.google.longrunning.DeleteOperationRequest
      - name: ', {} | null | undefined>'
        fullName: ', {} | null | undefined>'
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeleteTargetRequest:interface'
    name: IDeleteTargetRequest
    fullName: protos.google.cloud.deploy.v1.IDeleteTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~1:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#deleteTarget~2:complex'
    name: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.protobuf.IEmpty, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.protobuf.IEmpty:interface'
        name: protos.google.protobuf.IEmpty
        fullName: protos.google.protobuf.IEmpty
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
        name: protos.google.cloud.deploy.v1.IConfig
        fullName: protos.google.cloud.deploy.v1.IConfig
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetConfigRequest
        fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
    name: IGetConfigRequest
    fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
        name: protos.google.cloud.deploy.v1.IConfig
        fullName: protos.google.cloud.deploy.v1.IConfig
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetConfigRequest
        fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getConfig~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IConfig, protos.google.cloud.deploy.v1.IGetConfigRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IConfig:interface'
        name: protos.google.cloud.deploy.v1.IConfig
        fullName: protos.google.cloud.deploy.v1.IConfig
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetConfigRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetConfigRequest
        fullName: protos.google.cloud.deploy.v1.IGetConfigRequest
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
    name: IGetDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getDeliveryPipeline~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
        fullName: protos.google.cloud.deploy.v1.IGetDeliveryPipelineRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~0:complex'
    name: Promise<[IamProtos.google.iam.v1.Policy]>
    fullName: Promise<[google.iam.v1.Policy]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <[
        fullName: <[
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ']>'
        fullName: ']>'
  - uid: google-gax!google.iam.v1.GetIamPolicyRequest:class
    name: IamProtos.google.iam.v1.GetIamPolicyRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~1:complex'
    name: >-
      gax.CallOptions | Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.GetIamPolicyRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      CallOptions | Callback<google.iam.v1.Policy, google.iam.v1.GetIamPolicyRequest | null | undefined, {} | null |
      undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.GetIamPolicyRequest:class
        name: IamProtos.google.iam.v1.GetIamPolicyRequest
        fullName: google.iam.v1.GetIamPolicyRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getIamPolicy~2:complex'
    name: >-
      Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.GetIamPolicyRequest | null | undefined, {} | null
      | undefined>
    fullName: Callback<google.iam.v1.Policy, google.iam.v1.GetIamPolicyRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.GetIamPolicyRequest:class
        name: IamProtos.google.iam.v1.GetIamPolicyRequest
        fullName: google.iam.v1.GetIamPolicyRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IJobRun,
              protos.google.cloud.deploy.v1.IGetJobRunRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IJobRun,
              protos.google.cloud.deploy.v1.IGetJobRunRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetJobRunRequest
        fullName: protos.google.cloud.deploy.v1.IGetJobRunRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
    name: IGetJobRunRequest
    fullName: protos.google.cloud.deploy.v1.IGetJobRunRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetJobRunRequest
        fullName: protos.google.cloud.deploy.v1.IGetJobRunRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getJobRun~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IJobRun, protos.google.cloud.deploy.v1.IGetJobRunRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetJobRunRequest
        fullName: protos.google.cloud.deploy.v1.IGetJobRunRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getLocation~0:complex'
    name: Promise<LocationProtos.google.cloud.location.ILocation>
    fullName: Promise<google.cloud.location.ILocation>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <
        fullName: <
      - uid: google-gax!google.cloud.location.ILocation:interface
        name: LocationProtos.google.cloud.location.ILocation
        fullName: google.cloud.location.ILocation
      - name: '>'
        fullName: '>'
  - uid: google-gax!google.cloud.location.IGetLocationRequest:interface
    name: LocationProtos.google.cloud.location.IGetLocationRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getLocation~1:complex'
    name: >-
      gax.CallOptions | Callback<LocationProtos.google.cloud.location.ILocation,
      LocationProtos.google.cloud.location.IGetLocationRequest | null | undefined, {} | null | undefined>
    fullName: >-
      CallOptions | Callback<google.cloud.location.ILocation, google.cloud.location.IGetLocationRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.cloud.location.ILocation:interface
        name: LocationProtos.google.cloud.location.ILocation
        fullName: google.cloud.location.ILocation
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.cloud.location.IGetLocationRequest:interface
        name: LocationProtos.google.cloud.location.IGetLocationRequest
        fullName: google.cloud.location.IGetLocationRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getLocation~2:complex'
    name: >-
      Callback<LocationProtos.google.cloud.location.ILocation, LocationProtos.google.cloud.location.IGetLocationRequest
      | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<google.cloud.location.ILocation, google.cloud.location.IGetLocationRequest | null | undefined, {} | null
      | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.cloud.location.ILocation:interface
        name: LocationProtos.google.cloud.location.ILocation
        fullName: google.cloud.location.ILocation
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.cloud.location.IGetLocationRequest:interface
        name: LocationProtos.google.cloud.location.IGetLocationRequest
        fullName: google.cloud.location.IGetLocationRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getOperation~0:complex'
    name: Promise<[protos.google.longrunning.Operation]>
    fullName: Promise<[protos.google.longrunning.Operation]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <[
        fullName: <[
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: protos.google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ']>'
        fullName: ']>'
  - uid: '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
    name: GetOperationRequest
    fullName: protos.google.longrunning.GetOperationRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getOperation~1:complex'
    name: >-
      gax.CallOptions | Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {}
      | null | undefined>
    fullName: >-
      CallOptions | Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} |
      null | undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: protos.google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
        name: protos.google.longrunning.GetOperationRequest
        fullName: protos.google.longrunning.GetOperationRequest
      - name: ', {} | null | undefined>'
        fullName: ', {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getOperation~2:complex'
    name: >-
      Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null |
      undefined>
    fullName: >-
      Callback<protos.google.longrunning.Operation, protos.google.longrunning.GetOperationRequest, {} | null |
      undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.longrunning.Operation:class'
        name: protos.google.longrunning.Operation
        fullName: protos.google.longrunning.Operation
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.longrunning.GetOperationRequest:class'
        name: protos.google.longrunning.GetOperationRequest
        fullName: protos.google.longrunning.GetOperationRequest
      - name: ', {} | null | undefined>'
        fullName: ', {} | null | undefined>'
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
    name: Callback<string, undefined, undefined>
    fullName: Callback<string, undefined, undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <string, undefined, undefined>
        fullName: <string, undefined, undefined>
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
    name: IGetReleaseRequest
    fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRelease~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRelease, protos.google.cloud.deploy.v1.IGetReleaseRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetReleaseRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetReleaseRequest
        fullName: protos.google.cloud.deploy.v1.IGetReleaseRequest
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
    name: IGetRolloutRequest
    fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getRollout~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRollout, protos.google.cloud.deploy.v1.IGetRolloutRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetRolloutRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetRolloutRequest
        fullName: protos.google.cloud.deploy.v1.IGetRolloutRequest
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetTargetRequest
        fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
    name: IGetTargetRequest
    fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetTargetRequest
        fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#getTarget~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IGetTargetRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IGetTargetRequest:interface'
        name: protos.google.cloud.deploy.v1.IGetTargetRequest
        fullName: protos.google.cloud.deploy.v1.IGetTargetRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IIgnoreJobResponse,
              protos.google.cloud.deploy.v1.IIgnoreJobRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IIgnoreJobResponse,
              protos.google.cloud.deploy.v1.IIgnoreJobRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobResponse
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobRequest
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
    name: IIgnoreJobRequest
    fullName: protos.google.cloud.deploy.v1.IIgnoreJobRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest | null
      | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest | null
      | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobResponse
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobRequest
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#ignoreJob~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest | null
      | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IIgnoreJobResponse, protos.google.cloud.deploy.v1.IIgnoreJobRequest | null
      | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobResponse
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IIgnoreJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IIgnoreJobRequest
        fullName: protos.google.cloud.deploy.v1.IIgnoreJobRequest
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: |-
          [],
                  
        fullName: |-
          [],
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: |2-
           | null,
                  
        fullName: |2-
           | null,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
    name: IListDeliveryPipelinesRequest
    fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~1:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelines~2:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest,
      protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse | null | undefined,
      protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
        fullName: protos.google.cloud.deploy.v1.IListDeliveryPipelinesResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listDeliveryPipelinesAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IDeliveryPipeline>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IDeliveryPipeline>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: '>'
        fullName: '>'
  - uid: '!"\\"stream\\"".internal.Transform:class'
    name: Transform
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IJobRun[],
              protos.google.cloud.deploy.v1.IListJobRunsRequest | null,
              protos.google.cloud.deploy.v1.IListJobRunsResponse
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IJobRun[],
              protos.google.cloud.deploy.v1.IListJobRunsRequest | null,
              protos.google.cloud.deploy.v1.IListJobRunsResponse
          ]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: |-
          <[
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: |-
          [],
                  
        fullName: |-
          [],
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsRequest
        fullName: protos.google.cloud.deploy.v1.IListJobRunsRequest
      - name: |2-
           | null,
                  
        fullName: |2-
           | null,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsResponse
        fullName: protos.google.cloud.deploy.v1.IListJobRunsResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
    name: IListJobRunsRequest
    fullName: protos.google.cloud.deploy.v1.IListJobRunsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~1:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
      protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
      protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsRequest
        fullName: protos.google.cloud.deploy.v1.IListJobRunsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsResponse
        fullName: protos.google.cloud.deploy.v1.IListJobRunsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRuns~2:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
      protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListJobRunsRequest,
      protos.google.cloud.deploy.v1.IListJobRunsResponse | null | undefined, protos.google.cloud.deploy.v1.IJobRun>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsRequest
        fullName: protos.google.cloud.deploy.v1.IListJobRunsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListJobRunsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListJobRunsResponse
        fullName: protos.google.cloud.deploy.v1.IListJobRunsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listJobRunsAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IJobRun>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IJobRun>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IJobRun:interface'
        name: protos.google.cloud.deploy.v1.IJobRun
        fullName: protos.google.cloud.deploy.v1.IJobRun
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listLocationsAsync~0:complex'
    name: AsyncIterable<LocationProtos.google.cloud.location.ILocation>
    fullName: AsyncIterable<google.cloud.location.ILocation>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: google-gax!google.cloud.location.ILocation:interface
        name: LocationProtos.google.cloud.location.ILocation
        fullName: google.cloud.location.ILocation
      - name: '>'
        fullName: '>'
  - uid: google-gax!google.cloud.location.IListLocationsRequest:interface
    name: LocationProtos.google.cloud.location.IListLocationsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listOperationsAsync~0:complex'
    name: AsyncIterable<protos.google.longrunning.ListOperationsResponse>
    fullName: AsyncIterable<protos.google.longrunning.ListOperationsResponse>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsResponse:class'
        name: protos.google.longrunning.ListOperationsResponse
        fullName: protos.google.longrunning.ListOperationsResponse
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!protos.google.longrunning.ListOperationsRequest:class'
    name: ListOperationsRequest
    fullName: protos.google.longrunning.ListOperationsRequest
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: |-
          [],
                  
        fullName: |-
          [],
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesRequest
        fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
      - name: |2-
           | null,
                  
        fullName: |2-
           | null,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesResponse
        fullName: protos.google.cloud.deploy.v1.IListReleasesResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
    name: IListReleasesRequest
    fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~1:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesRequest
        fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesResponse
        fullName: protos.google.cloud.deploy.v1.IListReleasesResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleases~2:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListReleasesRequest,
      protos.google.cloud.deploy.v1.IListReleasesResponse | null | undefined, protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesRequest:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesRequest
        fullName: protos.google.cloud.deploy.v1.IListReleasesRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListReleasesResponse:interface'
        name: protos.google.cloud.deploy.v1.IListReleasesResponse
        fullName: protos.google.cloud.deploy.v1.IListReleasesResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listReleasesAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IRelease>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IRelease>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRelease:interface'
        name: protos.google.cloud.deploy.v1.IRelease
        fullName: protos.google.cloud.deploy.v1.IRelease
      - name: '>'
        fullName: '>'
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: |-
          [],
                  
        fullName: |-
          [],
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsRequest
        fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
      - name: |2-
           | null,
                  
        fullName: |2-
           | null,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsResponse
        fullName: protos.google.cloud.deploy.v1.IListRolloutsResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
    name: IListRolloutsRequest
    fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~1:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsRequest
        fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsResponse
        fullName: protos.google.cloud.deploy.v1.IListRolloutsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRollouts~2:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListRolloutsRequest,
      protos.google.cloud.deploy.v1.IListRolloutsResponse | null | undefined, protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsRequest
        fullName: protos.google.cloud.deploy.v1.IListRolloutsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListRolloutsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListRolloutsResponse
        fullName: protos.google.cloud.deploy.v1.IListRolloutsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listRolloutsAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.IRollout>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.IRollout>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRollout:interface'
        name: protos.google.cloud.deploy.v1.IRollout
        fullName: protos.google.cloud.deploy.v1.IRollout
      - name: '>'
        fullName: '>'
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
                  
        fullName: |-
          <[
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: |-
          [],
                  
        fullName: |-
          [],
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsRequest
        fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
      - name: |2-
           | null,
                  
        fullName: |2-
           | null,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsResponse
        fullName: protos.google.cloud.deploy.v1.IListTargetsResponse
      - name: |2-

              ]>
        fullName: |2-

              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
    name: IListTargetsRequest
    fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~1:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsRequest
        fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsResponse
        fullName: protos.google.cloud.deploy.v1.IListTargetsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargets~2:complex'
    name: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    fullName: >-
      PaginationCallback<protos.google.cloud.deploy.v1.IListTargetsRequest,
      protos.google.cloud.deploy.v1.IListTargetsResponse | null | undefined, protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: google-gax!PaginationCallback:interface
        name: PaginationCallback
        fullName: PaginationCallback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsRequest:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsRequest
        fullName: protos.google.cloud.deploy.v1.IListTargetsRequest
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IListTargetsResponse:interface'
        name: protos.google.cloud.deploy.v1.IListTargetsResponse
        fullName: protos.google.cloud.deploy.v1.IListTargetsResponse
      - name: ' | null | undefined, '
        fullName: ' | null | undefined, '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#listTargetsAsync~0:complex'
    name: AsyncIterable<protos.google.cloud.deploy.v1.ITarget>
    fullName: AsyncIterable<protos.google.cloud.deploy.v1.ITarget>
    spec.typeScript:
      - uid: '!AsyncIterable:interface'
        name: AsyncIterable
        fullName: AsyncIterable
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: '>'
        fullName: '>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRetryJobResponse,
              protos.google.cloud.deploy.v1.IRetryJobRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.IRetryJobResponse,
              protos.google.cloud.deploy.v1.IRetryJobRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobResponse
        fullName: protos.google.cloud.deploy.v1.IRetryJobResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobRequest
        fullName: protos.google.cloud.deploy.v1.IRetryJobRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
    name: IRetryJobRequest
    fullName: protos.google.cloud.deploy.v1.IRetryJobRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobResponse
        fullName: protos.google.cloud.deploy.v1.IRetryJobResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobRequest
        fullName: protos.google.cloud.deploy.v1.IRetryJobRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#retryJob~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.IRetryJobResponse, protos.google.cloud.deploy.v1.IRetryJobRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobResponse:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobResponse
        fullName: protos.google.cloud.deploy.v1.IRetryJobResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IRetryJobRequest:interface'
        name: protos.google.cloud.deploy.v1.IRetryJobRequest
        fullName: protos.google.cloud.deploy.v1.IRetryJobRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~0:complex'
    name: Promise<[IamProtos.google.iam.v1.Policy]>
    fullName: Promise<[google.iam.v1.Policy]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <[
        fullName: <[
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ']>'
        fullName: ']>'
  - uid: google-gax!google.iam.v1.SetIamPolicyRequest:class
    name: IamProtos.google.iam.v1.SetIamPolicyRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~1:complex'
    name: >-
      gax.CallOptions | Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.SetIamPolicyRequest | null |
      undefined, {} | null | undefined>
    fullName: >-
      CallOptions | Callback<google.iam.v1.Policy, google.iam.v1.SetIamPolicyRequest | null | undefined, {} | null |
      undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.SetIamPolicyRequest:class
        name: IamProtos.google.iam.v1.SetIamPolicyRequest
        fullName: google.iam.v1.SetIamPolicyRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#setIamPolicy~2:complex'
    name: >-
      Callback<IamProtos.google.iam.v1.Policy, IamProtos.google.iam.v1.SetIamPolicyRequest | null | undefined, {} | null
      | undefined>
    fullName: Callback<google.iam.v1.Policy, google.iam.v1.SetIamPolicyRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.Policy:class
        name: IamProtos.google.iam.v1.Policy
        fullName: google.iam.v1.Policy
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.SetIamPolicyRequest:class
        name: IamProtos.google.iam.v1.SetIamPolicyRequest
        fullName: google.iam.v1.SetIamPolicyRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~0:complex'
    name: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
              protos.google.cloud.deploy.v1.ITerminateJobRunRequest | undefined,
              {} | undefined
          ]>
    fullName: |-
      Promise<[
              protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
              protos.google.cloud.deploy.v1.ITerminateJobRunRequest | undefined,
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
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
      - name: |-
          ,
                  
        fullName: |-
          ,
                  
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
    name: ITerminateJobRunRequest
    fullName: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~1:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
      protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
      protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#terminateJobRun~2:complex'
    name: >-
      Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
      protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<protos.google.cloud.deploy.v1.ITerminateJobRunResponse,
      protos.google.cloud.deploy.v1.ITerminateJobRunRequest | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunResponse:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunResponse
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITerminateJobRunRequest:interface'
        name: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
        fullName: protos.google.cloud.deploy.v1.ITerminateJobRunRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~0:complex'
    name: Promise<[IamProtos.google.iam.v1.TestIamPermissionsResponse]>
    fullName: Promise<[google.iam.v1.TestIamPermissionsResponse]>
    spec.typeScript:
      - uid: '!Promise:interface'
        name: Promise
        fullName: Promise
      - name: <[
        fullName: <[
      - uid: google-gax!google.iam.v1.TestIamPermissionsResponse:class
        name: IamProtos.google.iam.v1.TestIamPermissionsResponse
        fullName: google.iam.v1.TestIamPermissionsResponse
      - name: ']>'
        fullName: ']>'
  - uid: google-gax!google.iam.v1.TestIamPermissionsRequest:class
    name: IamProtos.google.iam.v1.TestIamPermissionsRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~1:complex'
    name: >-
      gax.CallOptions | Callback<IamProtos.google.iam.v1.TestIamPermissionsResponse,
      IamProtos.google.iam.v1.TestIamPermissionsRequest | null | undefined, {} | null | undefined>
    fullName: >-
      CallOptions | Callback<google.iam.v1.TestIamPermissionsResponse, google.iam.v1.TestIamPermissionsRequest | null |
      undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!CallOptions:interface
        name: gax.CallOptions
        fullName: CallOptions
      - name: ' | '
        fullName: ' | '
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.TestIamPermissionsResponse:class
        name: IamProtos.google.iam.v1.TestIamPermissionsResponse
        fullName: google.iam.v1.TestIamPermissionsResponse
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.TestIamPermissionsRequest:class
        name: IamProtos.google.iam.v1.TestIamPermissionsRequest
        fullName: google.iam.v1.TestIamPermissionsRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#testIamPermissions~2:complex'
    name: >-
      Callback<IamProtos.google.iam.v1.TestIamPermissionsResponse, IamProtos.google.iam.v1.TestIamPermissionsRequest |
      null | undefined, {} | null | undefined>
    fullName: >-
      Callback<google.iam.v1.TestIamPermissionsResponse, google.iam.v1.TestIamPermissionsRequest | null | undefined, {}
      | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!google.iam.v1.TestIamPermissionsResponse:class
        name: IamProtos.google.iam.v1.TestIamPermissionsResponse
        fullName: google.iam.v1.TestIamPermissionsResponse
      - name: ', '
        fullName: ', '
      - uid: google-gax!google.iam.v1.TestIamPermissionsRequest:class
        name: IamProtos.google.iam.v1.TestIamPermissionsRequest
        fullName: google.iam.v1.TestIamPermissionsRequest
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest:interface'
    name: IUpdateDeliveryPipelineRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateDeliveryPipelineRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateDeliveryPipeline~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.IDeliveryPipeline,
      protos.google.cloud.deploy.v1.IOperationMetadata>, protos.google.longrunning.IOperation | null | undefined, {} |
      null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IDeliveryPipeline:interface'
        name: protos.google.cloud.deploy.v1.IDeliveryPipeline
        fullName: protos.google.cloud.deploy.v1.IDeliveryPipeline
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
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
                  
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: |-
          >,
                  
        fullName: |-
          >,
                  
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: |2-
           | undefined,
                  {} | undefined
              ]>
        fullName: |2-
           | undefined,
                  {} | undefined
              ]>
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IUpdateTargetRequest:interface'
    name: IUpdateTargetRequest
    fullName: protos.google.cloud.deploy.v1.IUpdateTargetRequest
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~1:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'
  - uid: '@google-cloud/deploy!v1.CloudDeployClient#updateTarget~2:complex'
    name: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    fullName: >-
      Callback<LROperation<protos.google.cloud.deploy.v1.ITarget, protos.google.cloud.deploy.v1.IOperationMetadata>,
      protos.google.longrunning.IOperation | null | undefined, {} | null | undefined>
    spec.typeScript:
      - uid: google-gax!Callback:interface
        name: Callback
        fullName: Callback
      - name: <
        fullName: <
      - uid: google-gax!LROperation:interface
        name: LROperation
        fullName: LROperation
      - name: <
        fullName: <
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ITarget:interface'
        name: protos.google.cloud.deploy.v1.ITarget
        fullName: protos.google.cloud.deploy.v1.ITarget
      - name: ', '
        fullName: ', '
      - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IOperationMetadata:interface'
        name: protos.google.cloud.deploy.v1.IOperationMetadata
        fullName: protos.google.cloud.deploy.v1.IOperationMetadata
      - name: '>, '
        fullName: '>, '
      - uid: '@google-cloud/deploy!protos.google.longrunning.IOperation:interface'
        name: protos.google.longrunning.IOperation
        fullName: protos.google.longrunning.IOperation
      - name: ' | null | undefined, {} | null | undefined>'
        fullName: ' | null | undefined, {} | null | undefined>'

`

exports['cloud-rad docfx generator generates an enum page 1'] = `
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
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.POSTDEPLOY:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.PREDEPLOY:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.RENDER:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.VERIFY:member'
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.POSTDEPLOY:member'
    name: POSTDEPLOY
    fullName: POSTDEPLOY
    langs:
      - typeScript
    type: field
    numericValue: '5'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.PREDEPLOY:member'
    name: PREDEPLOY
    fullName: PREDEPLOY
    langs:
      - typeScript
    type: field
    numericValue: '4'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.RENDER:member'
    name: RENDER
    fullName: RENDER
    langs:
      - typeScript
    type: field
    numericValue: '1'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ExecutionConfig.ExecutionEnvironmentUsage.VERIFY:member'
    name: VERIFY
    fullName: VERIFY
    langs:
      - typeScript
    type: field
    numericValue: '3'

`

exports['cloud-rad docfx generator generates an interface page 1'] = `
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
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#failureCause:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#failureMessage:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#metadata:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingBuild:member'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#renderingState:member'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#failureCause:member'
    summary: TargetRender failureCause
    name: failureCause
    fullName: failureCause
    langs:
      - typeScript
    type: property
    syntax:
      content: >-
        failureCause?: (google.cloud.deploy.v1.Release.TargetRender.FailureCause|keyof typeof
        google.cloud.deploy.v1.Release.TargetRender.FailureCause|null);
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#failureMessage:member'
    summary: TargetRender failureMessage
    name: failureMessage
    fullName: failureMessage
    langs:
      - typeScript
    type: property
    syntax:
      content: 'failureMessage?: (string|null);'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.Release.ITargetRender#metadata:member'
    summary: TargetRender metadata
    name: metadata
    fullName: metadata
    langs:
      - typeScript
    type: property
    syntax:
      content: 'metadata?: (google.cloud.deploy.v1.IRenderMetadata|null);'
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

exports['cloud-rad docfx generator generates a class page 1'] = `
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
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    package: '@google-cloud/deploy!'
    children:
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:constructor(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.create:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.fromObject:member(1)'
      - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.getTypeUrl:member(1)'
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
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
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse instance
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode:member(1)'
    summary: Decodes an ApproveRolloutResponse message from the specified reader or buffer.
    name: decode(reader, length)
    fullName: decode(reader, length)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number):
        google.cloud.deploy.v1.ApproveRolloutResponse;
      return:
        type:
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
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
    summary: Decodes an ApproveRolloutResponse message from the specified reader or buffer, length delimited.
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
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse
      parameters:
        - id: reader
          description: Reader or buffer to decode from
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decodeDelimited~0:complex'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encode:member(1)'
    summary: Encodes the specified ApproveRolloutResponse message. Does not implicitly  messages.
    name: encode(message, writer)
    fullName: encode(message, writer)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static encode(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?: $protobuf.Writer):
        $protobuf.Writer;
      return:
        type:
          - protobufjs!Writer:class
        description: Writer
      parameters:
        - id: message
          description: ApproveRolloutResponse message or plain object to encode
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        - id: writer
          description: Writer to encode to
          type:
            - protobufjs!Writer:class
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.encodeDelimited:member(1)'
    summary: Encodes the specified ApproveRolloutResponse message, length delimited. Does not implicitly  messages.
    name: encodeDelimited(message, writer)
    fullName: encodeDelimited(message, writer)
    langs:
      - typeScript
    type: method
    syntax:
      content: >-
        public static encodeDelimited(message: google.cloud.deploy.v1.IApproveRolloutResponse, writer?:
        $protobuf.Writer): $protobuf.Writer;
      return:
        type:
          - protobufjs!Writer:class
        description: Writer
      parameters:
        - id: message
          description: ApproveRolloutResponse message or plain object to encode
          type:
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
        - id: writer
          description: Writer to encode to
          type:
            - protobufjs!Writer:class
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
          - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
        description: ApproveRolloutResponse
      parameters:
        - id: object
          description: Plain object
          type:
            - '{ [k: string]: any }'
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.getTypeUrl:member(1)'
    summary: Gets the default type url for ApproveRolloutResponse
    name: getTypeUrl(typeUrlPrefix)
    fullName: getTypeUrl(typeUrlPrefix)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static getTypeUrl(typeUrlPrefix?: string): string;'
      return:
        type:
          - string
        description: The default type url
      parameters:
        - id: typeUrlPrefix
          description: your custom typeUrlPrefix(default "type.googleapis.com")
          type:
            - string
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
    name: toObject(message, options)
    fullName: toObject(message, options)
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
            - '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
        - id: options
          description: Conversion options
          type:
            - protobufjs!IConversionOptions:interface
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
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.IApproveRolloutResponse:interface'
    name: IApproveRolloutResponse
    fullName: protos.google.cloud.deploy.v1.IApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse:class'
    name: ApproveRolloutResponse
    fullName: protos.google.cloud.deploy.v1.ApproveRolloutResponse
  - uid: '@google-cloud/deploy!protos.google.cloud.deploy.v1.ApproveRolloutResponse.decode~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: (Reader|Uint8Array)
    spec.typeScript:
      - name: (
        fullName: (
      - uid: protobufjs!Reader:class
        name: $protobuf.Reader
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
    fullName: (Reader|Uint8Array)
    spec.typeScript:
      - name: (
        fullName: (
      - uid: protobufjs!Reader:class
        name: $protobuf.Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: protobufjs!Writer:class
    name: $protobuf.Writer
  - uid: protobufjs!IConversionOptions:interface
    name: $protobuf.IConversionOptions

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
      - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
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
      - '@google-cloud/deploy!protos.google.rpc.Status.getTypeUrl:member(1)'
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
            - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
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
          - '@google-cloud/deploy!protos.google.rpc.Status:class'
        description: Status instance
      parameters:
        - id: properties
          description: Properties to set
          type:
            - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decode:member(1)'
    summary: Decodes a Status message from the specified reader or buffer.
    name: decode(reader, length)
    fullName: decode(reader, length)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.rpc.Status:class'
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
    summary: Decodes a Status message from the specified reader or buffer, length delimited.
    name: decodeDelimited(reader)
    fullName: decodeDelimited(reader)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;'
      return:
        type:
          - '@google-cloud/deploy!protos.google.rpc.Status:class'
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
    name: encode(message, writer)
    fullName: encode(message, writer)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;'
      return:
        type:
          - protobufjs!Writer:class
        description: Writer
      parameters:
        - id: message
          description: Status message or plain object to encode
          type:
            - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
        - id: writer
          description: Writer to encode to
          type:
            - protobufjs!Writer:class
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.encodeDelimited:member(1)'
    summary: Encodes the specified Status message, length delimited. Does not implicitly  messages.
    name: encodeDelimited(message, writer)
    fullName: encodeDelimited(message, writer)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;'
      return:
        type:
          - protobufjs!Writer:class
        description: Writer
      parameters:
        - id: message
          description: Status message or plain object to encode
          type:
            - '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
        - id: writer
          description: Writer to encode to
          type:
            - protobufjs!Writer:class
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
          - '@google-cloud/deploy!protos.google.rpc.Status:class'
        description: Status
      parameters:
        - id: object
          description: Plain object
          type:
            - '{ [k: string]: any }'
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.getTypeUrl:member(1)'
    summary: Gets the default type url for Status
    name: getTypeUrl(typeUrlPrefix)
    fullName: getTypeUrl(typeUrlPrefix)
    langs:
      - typeScript
    type: method
    syntax:
      content: 'public static getTypeUrl(typeUrlPrefix?: string): string;'
      return:
        type:
          - string
        description: The default type url
      parameters:
        - id: typeUrlPrefix
          description: your custom typeUrlPrefix(default "type.googleapis.com")
          type:
            - string
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
    name: toObject(message, options)
    fullName: toObject(message, options)
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
            - '@google-cloud/deploy!protos.google.rpc.Status:class'
        - id: options
          description: Conversion options
          type:
            - protobufjs!IConversionOptions:interface
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
  - uid: '@google-cloud/deploy!protos.google.rpc.IStatus:interface'
    name: IStatus
    fullName: protos.google.rpc.IStatus
  - uid: '@google-cloud/deploy!protos.google.rpc.Status:class'
    name: Status
    fullName: protos.google.rpc.Status
  - uid: '@google-cloud/deploy!protos.google.rpc.Status.decode~0:complex'
    name: ($protobuf.Reader|Uint8Array)
    fullName: (Reader|Uint8Array)
    spec.typeScript:
      - name: (
        fullName: (
      - uid: protobufjs!Reader:class
        name: $protobuf.Reader
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
    fullName: (Reader|Uint8Array)
    spec.typeScript:
      - name: (
        fullName: (
      - uid: protobufjs!Reader:class
        name: $protobuf.Reader
        fullName: Reader
      - name: '|'
        fullName: '|'
      - uid: '!Uint8Array:interface'
        name: Uint8Array
        fullName: Uint8Array
      - name: )
        fullName: )
  - uid: protobufjs!Writer:class
    name: $protobuf.Writer
  - uid: protobufjs!IConversionOptions:interface
    name: $protobuf.IConversionOptions

`

exports['cloud-rad supports CommonJS build for docs entry point generates an overview.yml file 1'] = `
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
      content: type CloudDeployClient = v1.CloudDeployClient;
      return:
        type:
          - '@google-cloud/deploy!v1.CloudDeployClient_2:class'
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
          - '@google-cloud/deploy!CloudDeployClient~0:complex'
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
          CloudDeployClient: typeof v1.CloudDeployClient_2;
      }
    spec.typeScript:
      - name: |-
          {
              v1: typeof 
        fullName: |-
          {
              v1: typeof 
      - uid: '@google-cloud/deploy!v1'
        name: v1
        fullName: v1
      - name: |-
          ;
              CloudDeployClient: typeof 
        fullName: |-
          ;
              CloudDeployClient: typeof 
      - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
        name: v1.CloudDeployClient
        fullName: v1.CloudDeployClient_2
      - name: |-
          ;
          }
        fullName: |-
          ;
          }
  - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
    name: v1.CloudDeployClient
  - uid: '@google-cloud/deploy!CloudDeployClient~0:complex'
    name: typeof v1.CloudDeployClient
    fullName: typeof v1.CloudDeployClient_2
    spec.typeScript:
      - name: 'typeof '
        fullName: 'typeof '
      - uid: '@google-cloud/deploy!v1.CloudDeployClient_2:class'
        name: v1.CloudDeployClient
        fullName: v1.CloudDeployClient_2
  - uid: '@google-cloud/deploy!v1.CloudDeployClient:class'
    name: v1.CloudDeployClient

`
