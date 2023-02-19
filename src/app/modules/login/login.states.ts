import { Ng2StateDeclaration } from "@uirouter/angular";
import { LogarComponent } from "./views/logar.component";


export const LoginState: Ng2StateDeclaration = {
    name: 'login',
    url: '/',
    component: LogarComponent
};

export const STATES = [LoginState]