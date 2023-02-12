import { Ng2StateDeclaration } from "@uirouter/angular";
import { ContatoComponent } from "./contato/contato.component";


export const ContatoState: Ng2StateDeclaration = {
    name: 'contato',
    url: '/contato',
    component: ContatoComponent
};

export const STATES = [ContatoState]