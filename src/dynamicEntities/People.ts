export class People {
    private idPeople : number;
    private name : string
    private mail : string;

    constructor(idPeople: number, name: string, mail: string) {
        this.idPeople = idPeople;
        this.name = name;
        this.mail = mail;
    }

}