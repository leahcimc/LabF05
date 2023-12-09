export interface Welcome {
    results: Result[];
}

export interface Result {
    park_Id: string;
    name: string;
    address?: Address;
    displayAddress: string;
    district?: string;
    latitude: number;
    longitude: number;
    renditionUrls?: RenditionUrls;
    privateCar?: PrivateCar;
    LGV?: Lgv;
    HGV?: Hgv;
    coach?: Coach;
    motorCycle?: MotorCycle;
}

export interface Address {
    buildingName?: string;
    streetName: string;
    buildingNo?: string;
    floor?: string;
    subDistrict: string;
    dcDistrict: string;
    region: string;
}

export interface RenditionUrls {
    square?: string;
    carpark_photo?: string;
}

export interface PrivateCar {
    space: number;
}

export interface Lgv {
    space: number;
}

export interface Hgv {
    space: number;
}

export interface Coach {
    space: number;
}

export interface MotorCycle {
    space: number;
}