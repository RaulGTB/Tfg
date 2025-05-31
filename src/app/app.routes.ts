import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';
import { CategoriesComponent } from './sections/categories/categories.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { FavsComponent } from './sections/favs/favs.component';

export const routes: Routes = [
    {path: "", redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomeComponent},
    {path: "categories", component: CategoriesComponent},
    {path: "discover", component: DiscoverComponent},
    {path: "favs", component: FavsComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "**", component: HomeComponent}
];
