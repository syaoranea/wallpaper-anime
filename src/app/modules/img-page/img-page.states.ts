import { Ng2StateDeclaration } from "@uirouter/angular";
import { ImgPageComponent } from "./views/img-page.component";

export const ImgPageState: Ng2StateDeclaration = {
    name: 'img-page',
    url: '/imagem',
    component: ImgPageComponent
};

export const STATES = [ImgPageState]