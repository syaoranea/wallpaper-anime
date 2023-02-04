import { Ng2StateDeclaration } from "@uirouter/angular";
import { GaleriaImgComponent } from "./views/galeria.component";

export const GaleriaImgState: Ng2StateDeclaration = {
    name: 'galeria-img',
    url: '/galeria',
    component: GaleriaImgComponent
};

export const STATES = [GaleriaImgState]