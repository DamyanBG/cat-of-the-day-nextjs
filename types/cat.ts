export type AddCatValues = {
    name: string;
    color: string;
    breed: string;
    birth_date: string;
    microchip: string;
};

export type CatPostBodyValues = AddCatValues & {
    photo_pk: number;
}

export type CatResponseValues = CatPostBodyValues & {
    id: string
}