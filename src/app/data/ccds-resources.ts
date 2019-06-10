import { CCDSResourceMapping } from "../models/ccds-resource";

export const CCDS_RESOURCE_MAPPING: CCDSResourceMapping[] = [
    {
        CCDSType : "Patient Name",
        FhirResource : "Patient",
        QueryParameters : {}
    },
    {
        CCDSType : "Date of Birth",
        FhirResource : "Patient",
        QueryParameters : {}
    },
    {
        CCDSType : "Race",
        FhirResource : "Patient",
        QueryParameters : {}
    },
    {
        CCDSType : "Ethnicity",
        FhirResource : "Patient",
        QueryParameters : {}
    },
    {
        CCDSType : "Preferred language",
        FhirResource : "Patient",
        QueryParameters : {}
    },
    {
        CCDSType : "Smoking Status",
        FhirResource : "Condition",
        QueryParameters : {}
    },
    {
        CCDSType : "Problems",
        FhirResource : "Condition",
        QueryParameters : {}
    },
    {
        CCDSType : "Medications",
        FhirResource : "MedicationStatement",
        QueryParameters : {}
    },
    {
        CCDSType : "Medication Allergies",
        FhirResource : "AllergyIntolerance",
        QueryParameters : {}
    },
    {
        CCDSType : "Lab Tests",
        FhirResource : "DiagnosticReport",
        QueryParameters : {}
    },
    {
        CCDSType : "Lab Values/Results",
        FhirResource : "DiagnosticReport",
        QueryParameters : {}
    },
    {
        CCDSType : "Vital Signs",
        FhirResource : "Observation",
        QueryParameters : {}
    },
    {
        CCDSType : "Procedures",
        FhirResource : "Procedure",
        QueryParameters : {}
    },
    {
        CCDSType : "Care team Members",
        FhirResource : "CareTeam",
        QueryParameters : {}
    },
    {
        CCDSType : "Unique Device Identifiers",
        FhirResource : "Device",
        QueryParameters : {}
    },
    {
        CCDSType : "Assessment and Plan of Treatment",
        FhirResource : "CarePlan",
        QueryParameters : {}
    },
    {
        CCDSType : "Goals",
        FhirResource : "Goal",
        QueryParameters : {}
    },
    {
        CCDSType : "Health Concerns",
        FhirResource : "Condition",
        QueryParameters : {}
    }
]
