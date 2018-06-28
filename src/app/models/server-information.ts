/**
 * Model to represent the Information shown in the application for Patient launch and EHR launch sequences about the SMART on FHIR Servers
 */
export interface ServerInformation {
    /**
     * Information to be shown for the Patient facing Standalone applications.
     */
    patientStandalone: string[];

    /**
     * Information to be shown to launch the application using the EHR Launch sequence.
     */
    ehrLaunch: string[];
}
