export class Person {
    personId: number;
    registrationNumber: string;
    firstName: string;
    lastName: string;
    height: number;
    weight: number;
    eyeCollor: EyeCollor;
    phoneNumber: string;
    email: string;
    dateOfBirth: Date;
    address: string;
    note: string;
    placeId: number;
}

export enum EyeCollor{
    Other, 
    Black,
    Brown,
    Green,
    Blue,
    Gray
}
  