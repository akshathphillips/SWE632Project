import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService, Pizza } from "./services";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
	title = 'SWE632Project';

	selectedPizzas = new BehaviorSubject<Pizza[] | any>(null);

	pizzasSubscription: Subscription | undefined;

	constructor(private cartService: CartService) {
	}


	ngOnInit(): void {
		this.pizzasSubscription = this.cartService.pizzasChanged.subscribe((v) => {
			this.selectedPizzas.next(v)
		});
	}

	ngOnDestroy(): void {
		this.pizzasSubscription?.unsubscribe();
	}
}
