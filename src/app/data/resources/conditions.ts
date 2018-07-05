// tslint:disable:quotemark
export const CONDITIONS = [
    {
        id: 1,
        name: 'General Condition Example',
        resource: {
            "resourceType": "Condition",
            "clinicalStatus": "active",
            "code": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "39065001",
                        "display": "Burn of ear"
                    }
                ],
                "text": "Burnt Ear"
            },
            "onsetDateTime": "2012-05-24",
            "abatementDateTime": "2012-05-26",
            "note": {
                "text": "Condition Note"
            }
        }
    }
];
