import { ClientApp } from '../models/client-app';
/**
 * List of SMART on FHIR Client Applications defined in the SAMPLE APPLICATION
 */
export const CLIENT_APPS: ClientApp[] = [
    {
        name: 'Local - Sample Standalone and EHR Launch App',
        uniqueName: 'chbaseppe1',
        clientId: '6faa0fe6-8eb2-4217-8c4f-0910f7fed0b5',
        redirectUri: 'http://localhost:4200/redirect/chbaseppe1',
        launchUrl: 'http://localhost:4200/launch/chbaseppe1',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: '5e24b756-9a70-4ea7-a602-150c639280a3'
    },
    {
        name: 'Adam - Logica',
        uniqueName: 'sampleappdocs',
        clientId: 'a0d4ebd4-f817-4eac-92cc-09574ca86ef9',
        redirectUri: 'https://apbeilchick.github.io/smart-ng-fhir-app/redirect/sampleappdocs',
        launchUrl: 'https://apbeilchick.github.io/smart-ng-fhir-app/launch/sampleappdocs',
        scopes: 'launch/patient,offline_access,openid,patient/*.*,profile,fhirUser',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'logica'
    }
];
