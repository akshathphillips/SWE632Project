import { Injectable } from '@angular/core';
import { Crust, Sauce, Topping } from "./custom.service";
import { BehaviorSubject } from "rxjs";

export interface Pizza {
	crust: Crust;
	sauce: Sauce;
	toppings: Topping[];
	time: number;
	name: String;
	qty: number; // Added quantity attribute to reduce number of cards in the cart page.
}

@Injectable({
	providedIn: 'root'
})
export class CartService {

	pizzasChanged = new BehaviorSubject<Pizza[] | null>(null);

	scrollToMenu = new BehaviorSubject<boolean | any>(null);

	private pizzas: Pizza[] | null = null;

	constructor() {
	}

	getPizzas() {
		if (this.pizzas && this.pizzas.length) {
			return this.pizzas.slice();
		}
		return [];
	}

	addPizza(pizza: Pizza) {
		if (!this.pizzas)
			this.pizzas = [];

		var updatedQty = false;

		// Update qty if pizza exists in the array
		this.pizzas.forEach((p) => {
			if(JSON.stringify(p) === JSON.stringify(pizza)) {
				p.qty = p.qty+1;
				updatedQty = true;
			}
		});
		if(!updatedQty) {
			this.pizzas.push(pizza);
		}
		this.pizzasChanged.next(this.pizzas.slice());
	}


	deletePizza(index: number) {
		if (this.pizzas && this.pizzas.length) {
			//Decrement quantity if > 1, else remove from list if qty == 1
			if (this.pizzas[index].qty > 1)
				this.pizzas[index].qty = this.pizzas[index].qty - 1
			else this.pizzas.splice(index, 1);
			this.pizzasChanged.next(this.pizzas.slice());
		}
	}

	clear() {
		this.pizzas = [];
		this.pizzasChanged.next(this.pizzas.slice());
	}
}
