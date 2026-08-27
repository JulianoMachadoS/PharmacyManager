import { People } from "./People";
import { cargos } from "./enumPosition";


class Oficial extends People {
    private store  : string;
    private admnistrator : boolean;
    private position : string;
    private cargos : cargos;

    constructor(idPeople: number, name: string, mail: string, store: string, admnistrator: boolean, position: string, cargo: cargos) {
        super(idPeople, name, mail);
        this.store = store;
        this.admnistrator = admnistrator;
        this.position = position;
        this.cargos = cargo;
    }

}