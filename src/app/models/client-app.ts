export interface ClientApp {
    /**
     * Display name for the SMART on FHIR Client Application
     */
    name: string;

    /**
     * Unique identifier for the SMART on FHIR Client Application
     * We make use of this identifier to start the Patient Launch
     * Used in the routes defined "/connect/{uniqueName}", "/launch/{uniqueName}" and "redirect/{uniqueName}"
     */
    uniqueName: string;

    /**
     * Client_Id or ApplicationID of the SMART on FHIR Client Application
     * you get when the app is registered on the SMART on FHIR Server
     */
    clientId: string;

    /**
     * Redirect URL registered for the app on the SMART on FHIR Server
     * Should be [SampleAppHost]/redirect/{uniqueName}
     */
    redirectUri: string;

    /**
     * Launch URL registered for the app on the SMART on FHIR Server
     * Should be [SampleAppHost]/launch/{uniqueName}
     * It can be null, eg. an application of type on the Cerner SMART on FHIR server, does not have a launch url.
     */
    launchUrl?: string;

    /**
     * Scopes registered for the app on the SMARTR on FHIR Server
     */
    scopes: string;

    /**
     * Flag to denote whether the application can act as a Standalone Patient Facing application
     * On some SMART on FHIR server implementations, the same Client application can be used as
     * both patient facing and a provider facing(EHR launch) application.
     * eg. Cerner does not support the same client app to act as both Patient and Provider apps. Need to register as different applications.
     */
    standalonePatient: boolean;

    /**
     * Flag to denote whether the application can act as a Standalone Patient Facing application
     * On some SMART on FHIR server implementations, the same Client application can be used as
     * both patient facing and a provider facing(EHR launch) application.
     * eg. Cerner does not support the same client app to act as both Patient and Provider apps. Need to register as different applications.
     */
    ehrLaunch: boolean;

    /**
     * Unique name of the SMART on FHIR server, on which the client application is registered.
     */
    server: string;

    /**
     * Client Secret of the application provided by the SMART on FHIR server, when the application was registered.
     * Some SMART on FHIR servers only allows the applications to be confidential.
     * For Production applications, the secret needs to be securely stored and used on the App Server.
     * For this sample application we are storing it on the client side javascript variables itself.
     */
    secret?: string;
}
