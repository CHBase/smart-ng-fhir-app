import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OBSERVATIONS } from '../data/resources/observations';

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
      }
      observer.complete();
    });
  }
}
