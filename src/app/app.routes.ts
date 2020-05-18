import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FaqComponent } from './components/faq/faq.component';
import { AllComponent } from './components/products/all/all.component';
import { DetailsComponent } from './components/products/details/details.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'faq', component: FaqComponent},
    {path: 'products', component: AllComponent},
    {path: 'detail-product/:id', component: DetailsComponent},
    { path: '**', pathMatch:'full', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(routes);