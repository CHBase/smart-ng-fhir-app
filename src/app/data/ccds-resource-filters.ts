import { _getOptionScrollPosition } from '@angular/material';
import { ResourceFilter } from '../models/ccds-resource-filter';

export class ProblemFilter implements ResourceFilter {
    static filterOptions = [
        {
            System: 'http://hl7.org/fhir/condition-category',
            Code: 'problem-list-item',
        },
    ];

    FilterNote = 'The result set has been filtered to show items relevant to the selected CCDS type.<br>'
        + 'Filter used: http://hl7.org/fhir/condition-category|problem-list-item';

    Filter(singleResourceEntry: any): boolean {
        let found = false;
        ProblemFilter.filterOptions.forEach(filter => {
            if (singleResourceEntry.resource.category.some((categoryEntry: any) => {
                return (
                    categoryEntry.coding[0].system.toLowerCase() === filter.System &&
                    categoryEntry.coding[0].code.toLowerCase() === filter.Code
                );
            })) {
                found = true;
                return true;
            }
        });
        return found;
    }
}

export class HealthConcernFilter implements ResourceFilter {
    static filterOptions = [
        {
            System: 'http://hl7.org/fhir/us/core/codesystem/condition-category',
            Code: 'health-concern',
        },
    ];

    FilterNote = 'The result set has been filtered to show items relevant to the selected CCDS type.<br>'
        + 'Filter used: http://hl7.org/fhir/us/core/codesystem/condition-category|health-concern';

    Filter(singleResourceEntry: any): boolean {
        let found = false;
        HealthConcernFilter.filterOptions.forEach(filter => {
            if (singleResourceEntry.resource.category.some((categoryEntry: any) => {
                return (
                    categoryEntry.coding[0].system.toLowerCase() === filter.System &&
                    categoryEntry.coding[0].code.toLowerCase() === filter.Code
                );
            })) {
                found = true;
                return true;
            }
        });
        return found;
    }
}

export class MedicationAllergyFilter implements ResourceFilter {
    static filterOptions = [
        {
            Url: 'allergentype',
            Value: 'med'
        },
    ];

    static urlAllergy = 'https://fhir.chbase.com/fhir/stu3/structureddefinition/allergy';

    FilterNote = 'The result set has been filtered to show items relevant to the selected CCDS type.<br>'
        + 'Filter used: allergentype = "med"';

    Filter(singleResourceEntry: any): boolean {
        let found = false;
        MedicationAllergyFilter.filterOptions.forEach(filter => {
            if (singleResourceEntry.resource.extension.some((extension: any) => {
                return (
                    extension.url.toLowerCase() === MedicationAllergyFilter.urlAllergy &&
                    extension.extension &&
                    extension.extension.some((ext: any) => {
                        return (
                            ext.url.toLowerCase() === filter.Url &&
                            ext.valueString.toLowerCase() === filter.Value
                        );
                    })
                );
            })) {
                found = true;
                return true;
            }
        });
        return found;
    }
}
