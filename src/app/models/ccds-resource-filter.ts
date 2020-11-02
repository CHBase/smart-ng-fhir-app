export interface ResourceFilter {

    FilterNote?: string;

    Filter(singleResourceEntry: any): boolean;

}
