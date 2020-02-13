import { Injectable } from '@angular/core';

@Injectable() 
export class AppService {

    portfolioData = [
        {
          date:'**',
          name: 'Competitive Intelligence',
          entities: 0,
          id: 0,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ],
          dateAvailable: false
        },
        {
          date:'**',
          name: 'My Vendors',
          entities: 0,
          id: 1,
          description: [
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ],
          dateAvailable: false
        },
        {
          date:'***',
          name: 'My Customers',
          entities: 0,
          id: 2,
          description:[
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110}
          ],
          dateAvailable: false
        },
        {
          date:'Jul 23',
          name: 'Test_30_Results',
          entities: 28,
          id: 3,
          description: [
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ],
          dateAvailable: true
        },
        {
          date:'Jun 28',
          name: 'To_Index',
          entities: 100,
          id: 4,
          description: [
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105}
          ], 
          dateAvailable: true
        },
        {
          date:'Apr 10',
          name: 'KPMG Requested Companies - Listed Set_Prasada Kumar',
          entities: 34,
          id: 5,
          description: [
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117},
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108}
          ], 
          dateAvailable: true
        },
        {
          date:'Mar 12',
          name: 'Error Case- LTB to EBITDA Blank_Prasada Kumar',
          entities: 24,
          id: 6,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
          ], 
          dateAvailable: true
        },
        {
          date:'Dec 14',
          name: 'Two Companies',
          entities: 2,
          id: 7,
          description: [
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
          ], 
          dateAvailable: true
        },
        {
          date:'Nov 01',
          name: 'Custom',
          entities: 30,
          id: 8,
          description: [
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ],
          dateAvailable: true
        },
        {
          date:'Oct 29',
          name: 'Mumbai',
          entities: 3,
          id: 9,
          description: [
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113} 
          ],
          dateAvailable: true
        },
        {
          date:'Feb 13',
          name: 'Competitive_Intelligence_1',
          entities: 0,
          id: 10,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ], 
          dateAvailable: true
        },
        {
          date:'Sep 21',
          name: 'My_Vendors_1',
          entities: 0,
          id: 11,
          description: [
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},            
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114}
          ], 
          dateAvailable: true
        },
        {
          date:'Jan 12',
          name: 'My_Customers_1',
          entities: 0,
          id: 12,
          description: [
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113}
          ],
          dateAvailable: true
        },
        {
          date:'Jul 23',
          name: 'Test_30_Results_1',
          entities: 28,
          id: 13,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},            
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},           
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ], 
          dateAvailable: true
        },
        {
          date:'Jun 28',
          name: 'To_Index_1',
          entities: 100,
          id: 14,
          description: [
            {company: 'Vakrange Ltd',id:117}
          ], 
          dateAvailable: true
        },
        {
          date:'Apr 10',
          name: 'KPMG_Requested_Companies-Listed_Set_Prasada_Kumar_1',
          entities: 34,
          id: 15,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
          ], 
          dateAvailable: true
        },
        {
          date:'Mar 12',
          name: 'Error_Case-LTB_to_EBITDA_Blank_Prasada_Kumar_1',
          entities: 24,
          id: 16,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117},
            {company: 'Puma Sports India Private Limited', id: 103},
            {company: 'Dewan Housing Finance Corporation Ltd', id: 104},
            {company: 'Infosys Limited', id: 105},
            {company: 'Think and Learn Private Limited', id: 106},
            {company: 'Delhivert Private Limited', id: 107},
            {company: 'Wow Momo Foods Private Limited', id: 108},
            {company: 'Rebel Foods Private Limited', id: 109},
            {company: 'LendingKart Technologies Private Limited', id: 110},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114}
          ], 
          dateAvailable: true
        },
        {
          date:'Dec 14',
          name: 'Two_Companies_1',
          entities: 2,
          id: 17,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ], 
          dateAvailable: true
        },
        {
          date:'Nov 01',
          name: 'Custom_1',
          entities: 30,
          id: 18,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ],
          dateAvailable: true
        },
        {
          date:'Oct 29',
          name: 'Mumbai_1',
          entities: 3,
          id: 19,
          description: [
            {company: 'Bundl Technologies Pvt Ltd', id: 101},
            {company: 'Hector Beverages Private Limited', id: 102},
            {company: 'ID Fresh Food (India) Private Limited', id: 111},
            {company: 'PrivateCircle', id: 112},
            {company: 'Gala Precision India Private Limited', id: 113},
            {company: 'Balaji Wafers Private Limited', id: 114},
            {company: 'Sangeetha Mobiles Private Limited', id: 115},
            {company: 'Vodafone Idea Limited', id: 116},
            {company: 'Vakrange Ltd',id:117}
          ], 
          dateAvailable: true
        }
      ];

    getPortfolioData() {
        return this.portfolioData;
    }
}