// tslint:disable:quotemark
export const ALLERGY_INTOLERANCES = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "AllergyIntolerance",
            "clinicalStatus": "active",
            "category": [
                "food"
            ],
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "227493005",
                        "display": "Cashew nuts"
                    }
                ]
            },
            "onsetDateTime": "2004",
            "asserter": {
                "reference": "#practitioner-00a3a874-74cd-4f1c-a5dc-cab976893ae7"
            },
            "reaction": [
                {
                    "manifestation": [
                        {
                            "coding": [
                                {
                                    "system": "http://snomed.info/sct",
                                    "code": "39579001",
                                    "display": "Anaphylactic reaction"
                                }
                            ]
                        }
                    ]
                }
            ],
            "contained": [
                {
                    "resourceType": "Practitioner",
                    "id": "#practitioner-00a3a874-74cd-4f1c-a5dc-cab976893ae7",
                    "extension": [
                        {
                            "url": "person-organisation",
                            "valueString": "Care Hospitals Inc"
                        }
                    ],
                    "identifier": [
                        {
                            "value": "00a3a874-74cd-4f1c-a5dc-cab976893ae7"
                        }
                    ],
                    "name": [
                        {
                            "text": "John Doe",
                            "family": "Doe",
                            "given": [
                                "John",
                                "T"
                            ]
                        }
                    ],
                    "address": [
                        {
                            "use": "work",
                            "text": "Care Hospitals Inc"
                        },
                        {
                            "text": "business address",
                            "line": [
                                "1 Back Lane"
                            ],
                            "city": "Holmfirth",
                            "district": "HUDDERSFIELD",
                            "postalCode": "HD7 1HQ",
                            "country": "UK"
                        }
                    ],
                    "qualification": [
                        {
                            "code": {
                                "text": "Certified Medical Assistant"
                            }
                        }
                    ]
                }
            ]
        }
    }
];
