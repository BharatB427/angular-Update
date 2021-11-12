export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'CVD_Prod_Meas',
    price: 799,
    description: 'CVD Product Measurement Details',
  },
  {
    id: 2,
    name: 'CVD_Monitor',
    price: 699,
    description: 'CVD Monitor Details',
  },
  {
    id: 3,
    name: 'CVD_Defect',
    price: 299,
    description: 'CVD Defect Density Details',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
