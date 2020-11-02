import { CCDSResourceMapping } from '../models/ccds-resource';
import { EncounterDiagnosisFilter, HealthConcernFilter, MedicationAllergyFilter, ProblemFilter } from './ccds-resource-filters';

export const CCDS_RESOURCE_MAPPING: CCDSResourceMapping[] = [
    {
        CCDSType: 'Patient Name',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Sex',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    }, {
        CCDSType: 'Date of Birth',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Race',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Ethnicity',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Preferred language',
        FhirResource: 'Patient',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Smoking Status',
        FhirResource: 'Observation',
        SearchQueryParameters: { 'code': 'http://loinc.org|72166-2' },
    },
    {
        CCDSType: 'Problems',
        FhirResource: 'Condition',
        SearchQueryParameters: {},
        SearchSetFilter: new ProblemFilter()
    },
    {
        CCDSType: 'Medications',
        FhirResource: 'MedicationStatement',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Medication Allergies',
        FhirResource: 'AllergyIntolerance',
        SearchQueryParameters: {},
        SearchSetFilter: new MedicationAllergyFilter()
    },
    {
        CCDSType: 'Lab Tests',
        FhirResource: 'DiagnosticReport',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Lab Values/Results',
        FhirResource: 'DiagnosticReport',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Vital Signs',
        FhirResource: 'Observation',
        SearchQueryParameters: {
            'code': 'http://loinc.org|85353-1,http://loinc.org|8867-4,http://loinc.org|8302-2,http://loinc.org|8306-3,http://loinc.org|29463-7,http://loinc.org|85354-9,http://loinc.org|8480-6,http://loinc.org|8462-4,http://loinc.org|59408-5'
        },
    },
    {
        CCDSType: 'Procedures',
        FhirResource: 'Procedure',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Care team Members',
        FhirResource: 'CareTeam',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Immunizations',
        FhirResource: 'Immunization',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Unique Device Identifiers',
        FhirResource: 'Device',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Assessment and Plan of Treatment',
        FhirResource: 'CarePlan',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Goals',
        FhirResource: 'Goal',
        SearchQueryParameters: {},
    },
    {
        CCDSType: 'Health Concerns',
        FhirResource: 'Condition',
        SearchQueryParameters: {},
        SearchSetFilter: new HealthConcernFilter()
    },
    {
        CCDSType: 'Encounter Diagnosis',
        FhirResource: 'Condition',
        SearchQueryParameters: {},
        SearchSetFilter: new EncounterDiagnosisFilter()
    }
];
