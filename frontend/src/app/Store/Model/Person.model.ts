export interface Person{
    id: number;
    name: string;
    email: string;
    phone: string;
}

export interface PersonModel{
    list: Person[];
    personobj: Person;
    errormessage: string;

}