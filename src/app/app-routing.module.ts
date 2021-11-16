import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	CartComponent,
	CustomComponent,
	HomeComponent,
	MenuComponent,
	OrderConfirmationComponent,
	OrderSuccessComponent,
	PageNotFoundComponent
} from "./components";
import { CartService, Pizza } from "../app/services";

const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'menu', component: MenuComponent},
	{path: 'custom', component: CustomComponent},
	{path: 'custom-edit/*', component: CustomComponent},
	{path: 'custom-edit', component: CustomComponent},
	{path: 'cart', component: CartComponent},
	{path: 'order-confirmation', component: OrderConfirmationComponent},
	{path: 'order-success', component: OrderSuccessComponent},
	{path: '', redirectTo: '/home', pathMatch: 'full'}, // redirect to `home`
	{path: '**', component: PageNotFoundComponent},  // Wildcard route for a 404 page
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
