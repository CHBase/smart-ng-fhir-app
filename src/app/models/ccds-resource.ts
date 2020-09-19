/**
 * Object to hold mapping between a CCDS datatype and the equivalent FHIR resource
 */
export interface CCDSResourceMapping {
    /**
     * Name of the CCDS datatype.
     */
    CCDSType: string;
    
    /**
     * FHIR Resource this CCDSType maps to.
     */
    FhirResource: string;

    /**
     * Additional query parameters needed to filter this resource with.
     */
    SearchQueryParameters: {};

    /**
     * If query parameters are not possbile, add filters that need to be applied to resource responses.
     */
    SearchSetFilter(singleResourceEntry: any): boolean;

}