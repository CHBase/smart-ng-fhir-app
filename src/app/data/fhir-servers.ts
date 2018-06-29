import { FhirServer } from '../models/fhir-server';
/**
 * List of SMART on FHIR Servers defined in the SAMPLE APPLICATION
 */
export const FHIR_SERVERS: FhirServer[] = [
    {
        uniqueName: 'chbaseppe',
        name: 'CHBase PPE',
        baseUrl: 'https://platform.ppe.chbase.com/api/fhir',
        information: {
            patientStandalone: [
                'Application Configuration Center: https://acc.ppe.chbase.com',
                'CHBase Shell: https://shell.ppe.chbase.com',
                'Developer Portal: https://developer.chbase.com/FHIR',
            ],
            ehrLaunch: [
                'Login to the CHBase Shell and visit the App directory page',
                'Click on Learn more about the app',
                'Click on Go to application (external link)'
            ]
        },
        supportsAccessTypes: true
    }
];
