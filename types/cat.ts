export type AddCatValues = {
    name: string;
    color: string;
    breed: string;
    birth_date: string;
    microchip: string;
};

export type CatPostBodyValues = AddCatValues & {
    photo_id: string;
}

export type CatResponseValues = CatPostBodyValues & {
    id: string
}