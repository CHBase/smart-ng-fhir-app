import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OBSERVATIONS } from '../data/resources/observations';
import { CONDITIONS } from '../data/resources/conditions';
import { DOCUMENT_REFERENCES } from '../data/resources/documentReferences';
import { PROCEDURES } from '../data/resources/procedures';
import { MEDICATION_STATEMENTS } from '../data/resources/medicationStatement';
import { ALLERGY_INTOLERANCES } from '../data/resources/allergyIntolerances';
import { IMMUNIZATIONS } from '../data/resources/immunizations';
import { DIAGNOSTIC_REPORTS } from '../data/resources/diagnosticReports';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(resourceType: string): Observable<any[]> {
    return Observable.create(observer => {
      switch (resourceType.toLocaleLowerCase()) {
        case 'observation':
          observer.next(OBSERVATIONS);
          break;
        case 'condition':
          observer.next(CONDITIONS);
          break;
        case 'documentreference':
          observer.next(DOCUMENT_REFERENCES);
          break;
        case 'procedure':
          observer.next(PROCEDURES);
          break;
        case 'medicationstatement':
          observer.next(MEDICATION_STATEMENTS);
          break;
        case 'allergyintolerance':
          observer.next(ALLERGY_INTOLERANCES);
          break;
        case 'immunization':
          observer.next(IMMUNIZATIONS);
          break;
        case 'diagnosticreport':
          observer.next(DIAGNOSTIC_REPORTS);
          break;
      }
      observer.complete();
    });
  }
}
