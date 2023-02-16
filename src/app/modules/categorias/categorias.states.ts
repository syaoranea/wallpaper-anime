import { Ng2StateDeclaration } from "@uirouter/angular";
import { CategoriasComponent } from "./views/categorias.component";

export const CategoriasState: Ng2StateDeclaration = {
    name: 'categorias',
    url: '/categorias',
    component: CategoriasComponent
};

export const STATES = [CategoriasState]