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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatSidenavModule } from "@angular/material/sidenav";

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
		AppRoutingModule,
		BrowserAnimationsModule,
		MatStepperModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		ScrollingModule,
		MatSidenavModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
