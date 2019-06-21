import { CCDSResourceMapping } from "../models/ccds-resource";

export const CCDS_RESOURCE_MAPPING: CCDSResourceMapping[] = [
    {
        CCDSType : "Patient Name",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Sex",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },{
        CCDSType : "Date of Birth",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Race",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Ethnicity",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Preferred language",
        FhirResource : "Patient",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Smoking Status",
        FhirResource : "Observation",
        SearchQueryParameters : {"code" : "http://loinc.org|72166-2"},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Problems",
        FhirResource : "Condition",
        SearchQueryParameters : {},
        SearchSetFilter : problemFilter
    },
    {
        CCDSType : "Medications",
        FhirResource : "MedicationStatement",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Medication Allergies",
        FhirResource : "AllergyIntolerance",
        SearchQueryParameters : {},
        SearchSetFilter : medicationAllergyFilter
    },
    {
        CCDSType : "Lab Tests",
        FhirResource : "DiagnosticReport",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Lab Values/Results",
        FhirResource : "DiagnosticReport",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Vital Signs",
        FhirResource : "Observation",
        SearchQueryParameters : {
            "code" : "http://loinc.org|85353-1,http://loinc.org|8867-4,http://loinc.org|8302-2,http://loinc.org|8306-3,http://loinc.org|29463-7,http://loinc.org|85354-9,http://loinc.org|8480-6,http://loinc.org|8462-4"},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Procedures",
        FhirResource : "Procedure",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Care team Members",
        FhirResource : "CareTeam",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Immunizations",
        FhirResource : "Immunization",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Unique Device Identifiers",
        FhirResource : "Device",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Assessment and Plan of Treatment",
        FhirResource : "CarePlan",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Goals",
        FhirResource : "Goal",
        SearchQueryParameters : {},
        SearchSetFilter : defaultFilter
    },
    {
        CCDSType : "Health Concerns",
        FhirResource : "Condition",
        SearchQueryParameters : {},
        SearchSetFilter : healthConcernFilter
    }
]

function defaultFilter(singleResourceEntry: any): boolean {
     return true;
    }

function medicationAllergyFilter(singleResourceEntry: any): boolean {
    if (!singleResourceEntry.resource.extension.some((extension: any) => {
        return (extension.url.toLowerCase() === "https://fhir.chbase.com/fhir/stu3/structureddefinition/allergy" &&
            extension.extension[0].url.toLowerCase() === "allergentype" &&
            extension.extension[0].valueString.toLowerCase() === "med");
    }))
    {
        return false;
    }
    return true;
}

function problemFilter(singleResourceEntry: any): boolean {
    // "category": [
    //     {
    //       "coding": [
    //         {
    //           "system": "http://hl7.org/fhir/condition-clinical",
    //           "code": "problem",
    //           "display": "Problem"
    //         }
    //       ]
    //     }
    //   ],
    if (!singleResourceEntry.resource.category.some((categoryEntry: any) => {
        return (categoryEntry.coding[0].system.toLowerCase() === "http://hl7.org/fhir/condition-clinical" &&
        categoryEntry.coding[0].code.toLowerCase() === "problem" );
    }))
    {
        return false;
    }   
    return true;
}


function healthConcernFilter(singleResourceEntry: any): boolean {
    // "category": [
    //     {
    //       "coding": [
    //         {
    //           "system": "http://hl7.org/fhir/us/core/CodeSystem/condition-category",
    //           "code": "health-concern",
    //           "display": "Health Concern"
    //         }
    //       ]
    //     }
    //   ],
    if (!singleResourceEntry.resource.category.some((categoryEntry: any) => {
        return (categoryEntry.coding[0].system.toLowerCase() === "http://hl7.org/fhir/us/core/codesystem/condition-category" &&
        categoryEntry.coding[0].code.toLowerCase() === "health-concern" );
    }))
    {
        return false;
    }   
    return true;
}