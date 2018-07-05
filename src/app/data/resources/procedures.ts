// tslint:disable:quotemark
export const PROCEDURES = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "Procedure",
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "80146002",
                        "display": "Appendectomy (Procedure)"
                    }
                ],
                "text": "Appendectomy"
            },
            "performedDateTime": "2013-04-05",
            "performer": [
                {
                    "actor": {
                        "display": "Dr Cecil Surgeon"
                    }
                }
            ],
            "bodySite": [
                {
                    "coding": [
                        {
                            "system": "http://snomed.info/sct",
                            "code": "368225008",
                            "display": "Entire Left Forearm"
                        }
                    ],
                    "text": "Left forearm"
                }
            ],
        }
    }
];
