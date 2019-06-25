export interface IStepInterface {
    stepNumberArray: IStepInterfaceArray[];
}

export interface IStepInterfaceArray {
 id: string;
 stepNumber: string;
 versionedContent: IVersionedContent[];
}

export interface IVersionedContent {
 titel: string;
 body: string;
 effectiveDate: string;
}