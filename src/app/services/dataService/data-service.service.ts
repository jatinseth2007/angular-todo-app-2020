import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  /**
   * Function to fetch all countries list
   * Jatin Seth
   */
  fetchAllCountrie() {
    try {
      return of([{
        value: null,
        label: "<-- no country -->"
      }, {
        value: 1,
        label: "India"
      },
      {
        value: 2,
        label: "Italy"
      }, {
        value: 3,
        label: "Germany"
      }]);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Function to fetch all cities list
   * Jatin Seth
   */
  fetchAllCities(nationId = null) {
    try {
      return of([{
        value: null,
        label: "<-- no city -->",
        nationId: null
      }, {
        value: 1,
        label: "Amritsar",
        nationId: 1
      },
      {
        value: 2,
        label: "Rome",
        nationId: 2
      }, {
        value: 3,
        label: "Berlin",
        nationId: 3
      }].filter((entry) => {
        if (nationId)
          return (nationId === entry.nationId);
        return true;
      }));
    } catch (error) {
      throw error;
    }
  }
}
