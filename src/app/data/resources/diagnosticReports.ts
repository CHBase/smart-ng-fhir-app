// tslint:disable:quotemark
export const DIAGNOSTIC_REPORTS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "DiagnosticReport",
            "contained": [
                {
                    "resourceType": "Observation",
                    "id": "r1",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "718-7",
                                "display": "Hemoglobin [Mass/volume] in Blood"
                            }
                        ],
                        "text": "Haemoglobin"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 176,
                        "unit": "g/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "g/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 135,
                                "unit": "g/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/L"
                            },
                            "high": {
                                "value": 180,
                                "unit": "g/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "g/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r2",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "789-8",
                                "display": "Erythrocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Red Cell Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 5.9,
                        "unit": "x10*12/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*12/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 4.2,
                                "unit": "x10*12/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*12/L"
                            },
                            "high": {
                                "value": 6.0,
                                "unit": "x10*12/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*12/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r3",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "4544-3",
                                "display": "Hematocrit [Volume Fraction] of Blood by Automated count"
                            }
                        ],
                        "text": "Haematocrit"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 55,
                        "unit": "%"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 38,
                                "unit": "%"
                            },
                            "high": {
                                "value": 52,
                                "unit": "%"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r4",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "787-2",
                                "display": "Erythrocyte mean corpuscular volume [Entitic volume] by Automated count"
                            }
                        ],
                        "text": "Mean Cell Volume"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 99,
                        "unit": "fL",
                        "system": "http://unitsofmeasure.org",
                        "code": "fL"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 80,
                                "unit": "fL",
                                "system": "http://unitsofmeasure.org",
                                "code": "fL"
                            },
                            "high": {
                                "value": 98,
                                "unit": "fL",
                                "system": "http://unitsofmeasure.org",
                                "code": "fL"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r5",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "785-6",
                                "display": "Erythrocyte mean corpuscular hemoglobin [Entitic mass] by Automated count"
                            }
                        ],
                        "text": "Mean Cell Haemoglobin"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 36,
                        "unit": "pg",
                        "system": "http://unitsofmeasure.org",
                        "code": "pg"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 27,
                                "unit": "pg",
                                "system": "http://unitsofmeasure.org",
                                "code": "pg"
                            },
                            "high": {
                                "value": 35,
                                "unit": "pg",
                                "system": "http://unitsofmeasure.org",
                                "code": "pg"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r6",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "777-3",
                                "display": "Platelets [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Platelet Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 444,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 150,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 450,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r7",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "6690-2",
                                "display": "Leukocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "White Cell Count"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 4.6,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 4.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 11.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r8",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "770-8",
                                "display": "Neutrophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Neutrophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r9",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "751-8",
                                "display": "Neutrophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Neutrophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 2.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 7.5,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r10",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "736-9",
                                "display": "Lymphocytes/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Lymphocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r11",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "731-0",
                                "display": "Lymphocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Lymphocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "interpretation": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/v2/0078",
                                "code": "L"
                            }
                        ]
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 1.1,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 4.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r12",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "5905-5",
                                "display": "Monocytes/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Monocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r13",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "742-7",
                                "display": "Monocytes [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Monocytes"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.9,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.2,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 1.0,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r14",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "713-8",
                                "display": "Eosinophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Eosinophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r15",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "711-2",
                                "display": "Eosinophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Eosinophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.92,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "low": {
                                "value": 0.04,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            },
                            "high": {
                                "value": 0.40,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                },
                {
                    "resourceType": "Observation",
                    "id": "r16",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "706-2",
                                "display": "Basophils/100 leukocytes in Blood by Automated count"
                            }
                        ],
                        "text": "Basophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 20,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                },
                {
                    "resourceType": "Observation",
                    "id": "r17",
                    "status": "final",
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "704-7",
                                "display": "Basophils [#/volume] in Blood by Automated count"
                            }
                        ],
                        "text": "Basophils"
                    },
                    "performer": [
                        {
                            "display": "Acme Laboratory, Inc"
                        }
                    ],
                    "valueQuantity": {
                        "value": 0.92,
                        "unit": "x10*9/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "10*9/L"
                    },
                    "referenceRange": [
                        {
                            "high": {
                                "value": 0.21,
                                "unit": "x10*9/L",
                                "system": "http://unitsofmeasure.org",
                                "code": "10*9/L"
                            }
                        }
                    ]
                }
            ],
            "issued": "2011-03-04T11:45:33+11:00",
            "result": [
                {
                    "reference": "#r1"
                },
                {
                    "reference": "#r2"
                },
                {
                    "reference": "#r3"
                },
                {
                    "reference": "#r4"
                },
                {
                    "reference": "#r5"
                },
                {
                    "reference": "#r6"
                },
                {
                    "reference": "#r7"
                },
                {
                    "reference": "#r8"
                },
                {
                    "reference": "#r9"
                },
                {
                    "reference": "#r10"
                },
                {
                    "reference": "#r11"
                },
                {
                    "reference": "#r12"
                },
                {
                    "reference": "#r13"
                },
                {
                    "reference": "#r14"
                },
                {
                    "reference": "#r15"
                },
                {
                    "reference": "#r16"
                },
                {
                    "reference": "#r17"
                }
            ]
        }
    }
];
