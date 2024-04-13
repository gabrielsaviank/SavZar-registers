

export type AddressType = {
    id?: string;
    postCode?: string;
    number?: number;
    complement?: string;
    street?: string;
    city?: string;
    state?: string;
};

export type UserType = {
    email: string;
    password: string;
}

export type PersonType = {
    id?:string;
    name?: string;
    sex?: string;
    birthdate?: string;
    maritalStatus?: string;
    addresses?: AddressType[];
}
