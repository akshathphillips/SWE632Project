import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		MenuComponent,
		PageNotFoundComponent
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
