import { ServerInformation } from './server-information';

/**
 * Model representing a defined SMART on FHIR Server
 */
export interface FhirServer {
    /**
     * Unique name for the SMART on FHIR Server
     */
    uniqueName: string;

    /**
     * Display name for the SMART on FHIR Server
     */
    name: string;

    /**
     * FHIR Base URL
     */
    baseUrl: string;

    /**
     * Information on how to launch the application in both Patient Standalone launch and EHR launch sequence
     */
    information: ServerInformation;

    /**
     * Whether the SMART on FHIR server supports the access scopes online_access and offline_access
     * eg. Allscripts FHIR server did not accept these scopes.
     */
    supportsAccessTypes: boolean;
}
