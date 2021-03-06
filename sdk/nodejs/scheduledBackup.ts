// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ScheduledBackup extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledBackup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledBackupState, opts?: pulumi.CustomResourceOptions): ScheduledBackup {
        return new ScheduledBackup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'eventstorecloud:index/scheduledBackup:ScheduledBackup';

    /**
     * Returns true if the given object is an instance of ScheduledBackup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScheduledBackup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScheduledBackup.__pulumiType;
    }

    /**
     * backup_description
     */
    public readonly backupDescription!: pulumi.Output<string>;
    /**
     * Human readable description of the job
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The maximum number of backups to keep for this job
     */
    public readonly maxBackupCount!: pulumi.Output<number>;
    /**
     * ID of the project in which the backup exists
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Schedule for the backup, defined using restricted subset of cron
     */
    public readonly schedule!: pulumi.Output<string>;
    /**
     * the ID of the cluster to back up
     */
    public readonly sourceClusterId!: pulumi.Output<string>;

    /**
     * Create a ScheduledBackup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledBackupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScheduledBackupArgs | ScheduledBackupState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScheduledBackupState | undefined;
            inputs["backupDescription"] = state ? state.backupDescription : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["maxBackupCount"] = state ? state.maxBackupCount : undefined;
            inputs["projectId"] = state ? state.projectId : undefined;
            inputs["schedule"] = state ? state.schedule : undefined;
            inputs["sourceClusterId"] = state ? state.sourceClusterId : undefined;
        } else {
            const args = argsOrState as ScheduledBackupArgs | undefined;
            if ((!args || args.backupDescription === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backupDescription'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.maxBackupCount === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxBackupCount'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.schedule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'schedule'");
            }
            if ((!args || args.sourceClusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceClusterId'");
            }
            inputs["backupDescription"] = args ? args.backupDescription : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["maxBackupCount"] = args ? args.maxBackupCount : undefined;
            inputs["projectId"] = args ? args.projectId : undefined;
            inputs["schedule"] = args ? args.schedule : undefined;
            inputs["sourceClusterId"] = args ? args.sourceClusterId : undefined;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(ScheduledBackup.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScheduledBackup resources.
 */
export interface ScheduledBackupState {
    /**
     * backup_description
     */
    backupDescription?: pulumi.Input<string>;
    /**
     * Human readable description of the job
     */
    description?: pulumi.Input<string>;
    /**
     * The maximum number of backups to keep for this job
     */
    maxBackupCount?: pulumi.Input<number>;
    /**
     * ID of the project in which the backup exists
     */
    projectId?: pulumi.Input<string>;
    /**
     * Schedule for the backup, defined using restricted subset of cron
     */
    schedule?: pulumi.Input<string>;
    /**
     * the ID of the cluster to back up
     */
    sourceClusterId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ScheduledBackup resource.
 */
export interface ScheduledBackupArgs {
    /**
     * backup_description
     */
    backupDescription: pulumi.Input<string>;
    /**
     * Human readable description of the job
     */
    description: pulumi.Input<string>;
    /**
     * The maximum number of backups to keep for this job
     */
    maxBackupCount: pulumi.Input<number>;
    /**
     * ID of the project in which the backup exists
     */
    projectId: pulumi.Input<string>;
    /**
     * Schedule for the backup, defined using restricted subset of cron
     */
    schedule: pulumi.Input<string>;
    /**
     * the ID of the cluster to back up
     */
    sourceClusterId: pulumi.Input<string>;
}
