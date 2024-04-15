export type AddressType = {
    id?: string;
    postCode?: string;
    neighbourhood?: string;
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
    birthDate?: string;
    maritalStatus?: string;
    addresses?: AddressType[] | undefined;
}

export type AddressCardType = {
    address: AddressType,
    onDelete?: () => void,
    onChange: (field: string, value: string | number) => void,
    action?: string,
    onUpdate?: () => void,
    onDeleteAddress?: () => void,
    key?: unknown
}
