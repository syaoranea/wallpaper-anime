import { Ng2StateDeclaration } from "@uirouter/angular";
import { AdminComponent } from "./views/admin.component";

export const AdminState: Ng2StateDeclaration = {
    name: 'admin',
    url: '/admin',
    component: AdminComponent
};

export const STATES = [AdminState]