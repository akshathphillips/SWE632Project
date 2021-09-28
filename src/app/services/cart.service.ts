import { Injectable } from '@angular/core';
import { Crust, Sauce, Topping } from "./custom.service";
import { BehaviorSubject } from "rxjs";

export interface Pizza {
	crust: Crust;
	sauce: Sauce;
	toppings: Topping[];
	time: number;
	name : String;
}

@Injectable({
	providedIn: 'root'
})
export class CartService {

	pizzasChanged = new BehaviorSubject<Pizza[] | null>(null);

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

		this.pizzas.push(pizza);
		this.pizzasChanged.next(this.pizzas.slice());
	}

	deletePizza(index: number) {
		if (this.pizzas && this.pizzas.length) {
			this.pizzas.splice(index, 1);
			this.pizzasChanged.next(this.pizzas.slice());
		}
	}

	clear() {
		this.pizzas = [];
		this.pizzasChanged.next(this.pizzas.slice());
	}
}
