import { ClientApp } from '../models/client-app';
/**
 * List of SMART on FHIR Client Applications defined in the SAMPLE APPLICATION
 */
export const CLIENT_APPS: ClientApp[] = [
    {
        name: 'CHBase PPE - Sample Standalone and EHR Launch App',
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
        name: 'CHBase PPE - Sample App - Live Demo',
        uniqueName: 'sampleappdocs',
        clientId: '7be9756f-1cb2-4c7c-9b8c-b2acc2325994',
        redirectUri: 'https://chbase.github.io/smart-ng-fhir-app/redirect/sampleappdocs',
        launchUrl: 'https://chbase.github.io/smart-ng-fhir-app/launch/sampleappdocs',
        scopes: 'patient/*.*',
        standalonePatient: true,
        ehrLaunch: true,
        server: 'chbaseppe',
        secret: 'c55a4f55-c639-4995-8696-d8bbd9c43db7'
    }
];
