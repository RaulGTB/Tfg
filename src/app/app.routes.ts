import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './sections/login/login.component';
import { RegisterComponent } from './sections/register/register.component';
import { CategoriesComponent } from './sections/categories/categories.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { FavsComponent } from './sections/favs/favs.component';
import { AboutUSComponent } from './sections/about-us/about-us.component';
import { AccountComponent } from './sections/account/account.component';
import { PrivacyComponent } from './sections/privacy/privacy.component';
import { TermsComponent } from './sections/terms/terms.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "discover", component: DiscoverComponent },
  {
    path: 'favs',
    component: FavsComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "aboutus", component: AboutUSComponent },
  { path: 'account', component: AccountComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: "**", component: HomeComponent }
];
