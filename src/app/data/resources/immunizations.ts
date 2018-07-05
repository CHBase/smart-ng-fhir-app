// tslint:disable:quotemark
export const IMMUNIZATIONS = [
    {
        id: 1,
        name: 'General Example',
        resource: {
            "resourceType": "Immunization",
            "vaccineCode": {
                "coding": [
                    {
                        "system": "urn:oid:1.2.36.1.2001.1005.17",
                        "code": "FLUVAX"
                    }
                ],
                "text": "Fluvax (Influenza)"
            },
            "date": "2013-01-10",
            "manufacturer": {
                "reference": "Organization/hl7"
            },
            "lotNumber": "AAJN11K",
            "expirationDate": "2015-02-15",
            "site": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v3/ActSite",
                        "code": "LA",
                        "display": "left arm"
                    }
                ]
            },
            "route": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/v3/RouteOfAdministration",
                        "code": "IM",
                        "display": "Injection, intramuscular"
                    }
                ]
            },
            "note": [
                {
                    "text": "Notes on adminstration of vaccine"
                }
            ]
        }
    }
];
