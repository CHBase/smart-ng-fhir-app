// tslint:disable:quotemark
export const MEDICATION_STATEMENTS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "MedicationStatement",
            "contained": [
                {
                    "resourceType": "Medication",
                    "id": "medc011e2c9-25ba-4319-9bf9-dc023c21e82c",
                    "extension": [
                        {
                            "url": "https://fhir.chbase.com/fhir/stu3/StructuredDefinition/medication",
                            "extension": [
                                {
                                    "url": "generic-name",
                                    "valueCodeableConcept": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/sid/ndc",
                                                "code": "50580-506-02",
                                                "display": "Tylenol PM"
                                            }
                                        ],
                                        "text": "Tylenol PM"
                                    }
                                },
                                {
                                    "url": "strength",
                                    "extension": [
                                        {
                                            "url": "display",
                                            "valueString": "600mg"
                                        },
                                        {
                                            "url": "quantity",
                                            "valueQuantity": {
                                                "value": 3,
                                                "unit": "tab",
                                                "system": "http://hl7.org/fhir/v3/orderableDrugForm",
                                                "code": "tab"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/sid/ndc",
                                "code": "50580-506-02",
                                "display": "Tylenol PM"
                            }
                        ],
                        "text": "Tylenol PM"
                    }
                }
            ],
            "medicationReference": {
                "reference": "#medc011e2c9-25ba-4319-9bf9-dc023c21e82c"
            },
            "dosage": [
                {
                    "text": "3 Tablets per day",
                    "timing": {
                        "repeat": {
                            "period": 3
                        }
                    },
                    "route": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "260548002",
                                "display": "Oral"
                            }
                        ],
                        "text": "By mouth"
                    },
                    "doseQuantity": {
                        "value": 3,
                        "unit": "tab",
                        "system": "http://hl7.org/fhir/v3/orderableDrugForm",
                        "code": "tab"
                    }
                }
            ]
        }
    }
];
