import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import {
	CartComponent,
	CustomComponent,
	CustomCreatorComponent,
	CustomIngredientsComponent,
	HomeComponent,
	MenuComponent,
	OrderConfirmationComponent,
	OrderSuccessComponent,
	PageNotFoundComponent
} from './components';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuComponent,
		PageNotFoundComponent,
		CustomComponent,
		CustomIngredientsComponent,
		CustomCreatorComponent,
		CartComponent,
		OrderSuccessComponent,
		OrderConfirmationComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
