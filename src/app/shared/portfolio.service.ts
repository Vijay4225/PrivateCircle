import { Injectable } from '@angular/core';

@Injectable() 
export class AppService {

    portfolioData = [
        {
          date:'**',
          name: 'Competitive Intelligence',
          entities: 0,
          id: 0,
          description: 'Date is unknown ; name is Competitve Intelligence ; No entites found'
        },
        {
          date:'**',
          name: 'My Vendors',
          entities: 0,
          id: 1,
          description: 'Date is unknown ; name is My Vendors  ; No entites found'
        },
        {
          date:'***',
          name: 'My Customers',
          entities: 0,
          id: 2,
          description: 'Date is unknown ; name is My Customets ; No entites found'
        },
        {
          date:'Jul 23',
          name: 'Test_30_Results',
          entities: 28,
          id: 3,
          description: 'Date is July 23 ; name is Test_30_Results ; Number of entities is 28 '
        },
        {
          date:'Jun 28',
          name: 'To_Index',
          entities: 100,
          id: 4,
          description: 'Date is Jun 28 ; name is To_Index ; Number of entities is 100 '
        },
        {
          date:'Apr 10',
          name: 'KPMG Requested Companies - Listed Set_Prasada Kumar',
          entities: 34,
          id: 5,
          description: 'Date is apr 10 ; name is KPMG Requested Companies - Listed Set_Prasada Kumar ; Number of entities is 34 '
        },
        {
          date:'Mar 12',
          name: 'Error Case- LTB to EBITDA Blank_Prasada Kumar',
          entities: 24,
          id: 6,
          description: 'Date is Mar 12 ; name is Error Case- LTB to EBITDA Blank_Prasada Kumar ; Number of entities is 24'
        },
        {
          date:'Dec 14',
          name: 'Two Companies',
          entities: 2,
          id: 7,
          description: 'Date is Dec 14 ; name is Two Companies ; Number of entities is 8 '        },
        {
          date:'Nov 01',
          name: 'Custom',
          entities: 30,
          id: 8,
          description: 'Date is Nov 01 ; name is Custom ; Number of entities is 9 '
        },
        {
          date:'Oct 29',
          name: 'Mumbai',
          entities: 3,
          id: 9,
          description: 'Date is Oct 29 ; name is Mumbai ; Number of entities is 3 '
        }
      ];

    getPortfolioData() {
        return this.portfolioData;
    }
}