// tslint:disable:quotemark
export const OBSERVATIONS = [
    {
        id: 1,
        name: 'Blank',
        resource: {
            "resourceType": "Observation"
        }
    },
    {
        id: 2,
        name: 'Weight',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "29463-7",
                        "display": "Body Weight"
                    }
                ]
            },
            "effectiveDateTime": "2016-03-28",
            "valueQuantity": {
                "value": 185,
                "unit": "lbs",
                "system": "http://unitsofmeasure.org",
                "code": "[lb_av]"
            }
        }
    },
    {
        id: 3,
        name: 'Height',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8302-2",
                        "display": "Body height"
                    }
                ],
                "text": "Body height"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 66.899999999999991,
                "unit": "in",
                "system": "http://unitsofmeasure.org",
                "code": "[in_i]"
            }
        }
    },
    {
        id: 4,
        name: 'Length',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8306-3",
                        "display": "Body height --lying"
                    }
                ],
                "text": "Body Length"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 25,
                "unit": "cm",
                "system": "http://unitsofmeasure.org",
                "code": "cm"
            }
        }
    },
    {
        id: 5,
        name: 'Heart Rate',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "8867-4",
                        "display": "Heart rate"
                    }
                ],
                "text": "Heart rate"
            },
            "effectiveDateTime": "1999-07-02",
            "valueQuantity": {
                "value": 44,
                "unit": "beats/minute",
                "system": "http://unitsofmeasure.org",
                "code": "/min"
            }
        }
    },
    {
        id: 6,
        name: 'Blood Pressure',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ]
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "85354-9",
                        "display": "Bood pressure panel with all children optional"
                    }
                ],
                "text": "Blood pressure systolic & diastolic"
            },
            "effectiveDateTime": "2012-09-17",
            "component": [
                {
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8480-6",
                                "display": "Systolic blood pressure"
                            },
                            {
                                "system": "http://snomed.info/sct",
                                "code": "271649006",
                                "display": "Systolic blood pressure"
                            },
                            {
                                "system": "http://acme.org/devices/clinical-codes",
                                "code": "bp-s",
                                "display": "Systolic Blood pressure"
                            }
                        ]
                    },
                    "valueQuantity": {
                        "value": 107,
                        "unit": "mmHg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mm[Hg]"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8462-4",
                                "display": "Diastolic blood pressure"
                            }
                        ]
                    },
                    "valueQuantity": {
                        "value": 60,
                        "unit": "mmHg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mm[Hg]"
                    }
                }
            ]
        }
    },
    {
        id: 7,
        name: 'Blood Glucose',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "15074-8",
                        "display": "Glucose [Moles/volume] in Blood"
                    }
                ]
            },
            "effectivePeriod": {
                "start": "2013-04-02T09:30:10+01:00"
            },
            "valueQuantity": {
                "value": 6.3,
                "unit": "mmol/l",
                "system": "http://unitsofmeasure.org",
                "code": "mmol/L"
            }
        }
    },
    {
        id: 8,
        name: 'Vitals Panel',
        resource: {
            "resourceType": "Observation",
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://loinc.org",
                        "code": "85353-1",
                        "display": "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
                    }
                ],
                "text": "Vital signs Panel"
            },
            "effectiveDateTime": "1999-07-02",
            "contained": [
                {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "8867-4",
                                "display": "Heart rate"
                            }
                        ],
                        "text": "Heart rate"
                    },
                    "effectiveDateTime": "1999-07-02",
                    "valueQuantity": {
                        "value": 44,
                        "unit": "beats/minute",
                        "system": "http://unitsofmeasure.org",
                        "code": "/min"
                    }
                },
                {
                    "resourceType": "Observation",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://hl7.org/fhir/observation-category",
                                    "code": "vital-signs",
                                    "display": "Vital Signs"
                                }
                            ],
                            "text": "Vital Signs"
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "29463-7",
                                "display": "Body Weight"
                            }
                        ]
                    },
                    "effectiveDateTime": "2016-03-28",
                    "valueQuantity": {
                        "value": 185,
                        "unit": "lbs",
                        "system": "http://unitsofmeasure.org",
                        "code": "[lb_av]"
                    }
                }
            ]
        }
    },
    {
        id: 9,
        name: 'Exercise',
        resource: {
            "resourceType": "Observation",
            "text": {
                "div": "New Swim"
            },
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/thing-state",
                    "valueString": "Active"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                    "extension": [
                        {
                            "url": "name",
                            "valueString": "lap 1"
                        },
                        {
                            "url": "type",
                            "valueCoding": {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        },
                        {
                            "url": "value",
                            "valueQuantity": {
                                "value": 30,
                                "unit": "seconds",
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                "code": "s"
                            }
                        }
                    ]
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                    "extension": [
                        {
                            "url": "name",
                            "valueString": "lap 2"
                        },
                        {
                            "url": "type",
                            "valueCoding": {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        },
                        {
                            "url": "value",
                            "valueQuantity": {
                                "value": 28,
                                "unit": "seconds",
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                "code": "s"
                            }
                        }
                    ]
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-segment",
                    "extension": [
                        {
                            "url": "activity",
                            "valueCodeableConcept": {
                                "coding": [
                                    {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                ],
                                "text": "Swimming"
                            }
                        },
                        {
                            "url": "title",
                            "valueString": "Segment 1"
                        },
                        {
                            "url": "duration",
                            "valueDecimal": 180
                        },
                        {
                            "url": "distance",
                            "valueQuantity": {
                                "value": 31.5,
                                "unit": "m"
                            }
                        },
                        {
                            "url": "offset",
                            "valueDecimal": 43.3
                        },
                        {
                            "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                            "extension": [
                                {
                                    "url": "name",
                                    "valueString": "segment 1 - lap 1"
                                },
                                {
                                    "url": "type",
                                    "valueCoding": {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                },
                                {
                                    "url": "value",
                                    "valueQuantity": {
                                        "value": 46.2,
                                        "unit": "seconds",
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                        "code": "s"
                                    }
                                }
                            ]
                        },
                        {
                            "url": "https://developer.chbase.com/fhir/stu3/StructuredDefinition/exercise-detail",
                            "extension": [
                                {
                                    "url": "name",
                                    "valueString": "segment 1 - lap 2"
                                },
                                {
                                    "url": "type",
                                    "valueCoding": {
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                        "version": "1",
                                        "code": "swimming"
                                    }
                                },
                                {
                                    "url": "value",
                                    "valueQuantity": {
                                        "value": 21,
                                        "unit": "seconds",
                                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/duration-units",
                                        "code": "s"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNameexercise",
                        "display": "Exercise"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-25T16:05:54.081-07:00",
            "component": [
                {
                    "code": {
                        "text": "exercise-distance"
                    },
                    "valueQuantity": {
                        "value": 30,
                        "unit": "m",
                        "system": "http://unitsofmeasure.org",
                        "code": "m"
                    }
                },
                {
                    "code": {
                        "text": "exercise-duration"
                    },
                    "valueQuantity": {
                        "value": 10,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "exercise-activity"
                    },
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/exercise-activities",
                                "version": "1",
                                "code": "swimming"
                            }
                        ],
                        "text": "Swimming"
                    }
                }
            ]
        }
    },
    {
        id: 10,
        name: 'Sleep Journal',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamesleepjournal-am",
                        "display": "\tSleep session"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-29T16:24:44.25-07:00",
            "component": [
                {
                    "code": {
                        "text": "sleep-journal-bed-time"
                    },
                    "valueTime": "22:30:00.9"
                },
                {
                    "code": {
                        "text": "sleep-journal-wake-time"
                    },
                    "valueTime": "06:28:59.1823"
                },
                {
                    "code": {
                        "text": "sleep-journal-sleep-minutes"
                    },
                    "valueQuantity": {
                        "value": 100,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-settling-minutes"
                    },
                    "valueQuantity": {
                        "value": 110,
                        "unit": "min",
                        "system": "http://unitsofmeasure.org",
                        "code": "min"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-awakening"
                    },
                    "valuePeriod": {
                        "start": "2017-08-29T23:30:00-07:00",
                        "end": "2017-08-30T00:10:00-07:00"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-awakening"
                    },
                    "valuePeriod": {
                        "start": "2017-08-29T00:30:00-07:00",
                        "end": "2017-08-29T00:40:00-07:00"
                    }
                },
                {
                    "code": {
                        "text": "sleep-journal-wake-state"
                    },
                    "valueString": "Tired"
                },
                {
                    "code": {
                        "text": "sleep-journal-medication"
                    },
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/RxNorm/Mayo",
                                "version": "2",
                                "code": "ccabbac8-58f0-4e88-a1eb-538e21e7524d"
                            }
                        ],
                        "text": "Benzaclin"
                    }
                }
            ]
        }
    },
    {
        id: 11,
        name: 'Body Composition',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamebody-composition",
                        "display": "Body composition"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-03T08:30:01-07:00",
            "bodySite": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-sites",
                        "version": "1",
                        "code": "Trunk"
                    }
                ],
                "text": "Trunk"
            },
            "method": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-methods",
                        "version": "1",
                        "code": "DXA"
                    }
                ],
                "text": "DXA/DEXA"
            },
            "component": [
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    },
                    "valueQuantity": {
                        "value": 10,
                        "unit": "kg",
                        "system": "http://unitsofmeasure.org",
                        "code": "kg"
                    }
                },
                {
                    "code": {
                        "coding": [
                            {
                                "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-composition-measurement-names",
                                "version": "1",
                                "code": "fat-percent"
                            }
                        ],
                        "text": "Body fat percentage"
                    },
                    "valueQuantity": {
                        "value": 0.15,
                        "unit": "%",
                        "system": "http://unitsofmeasure.org",
                        "code": "%"
                    }
                }
            ]
        }
    },
    {
        id: 12,
        name: 'Body Dimension',
        resource: {
            "resourceType": "Observation",
            "extension": [
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-flags",
                    "valueString": "None"
                },
                {
                    "url": "https://developer.chbase.com/fhir/stu3/ValueSet/fhir-extensions/thing-state",
                    "valueString": "Active"
                }
            ],
            "status": "final",
            "category": [
                {
                    "coding": [
                        {
                            "system": "http://hl7.org/fhir/observation-category",
                            "code": "vital-signs",
                            "display": "Vital Signs"
                        }
                    ],
                    "text": "Vital Signs"
                }
            ],
            "code": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/thing-type-names",
                        "version": "1",
                        "code": "txtNamebody-dimension",
                        "display": "Body dimension"
                    }
                ]
            },
            "effectiveDateTime": "2017-08-02T11:13:14-07:00",
            "valueQuantity": {
                "value": 0.15,
                "unit": "m",
                "system": "http://unitsofmeasure.org",
                "code": "m"
            },
            "method": {
                "coding": [
                    {
                        "system": "https://developer.chbase.com/fhir/stu3/ValueSet/wc/body-dimension-measurement-names",
                        "version": "1",
                        "code": "BicepCircumferenceLeft"
                    }
                ],
                "text": "Left bicep size"
            }
        }
    }
];
