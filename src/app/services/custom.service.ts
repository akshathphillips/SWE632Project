import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { CartService, Pizza } from "./cart.service";

export interface Crust {
	name: string;
	image: string;
	addedCount: number;
}

export interface Sauce {
	name: string;
	image: string;
	addedCount: number;
}

export interface Topping {
	name: string;
	image: string;
	addedCount: number;
}

@Injectable({
	providedIn: 'root'
})
export class CustomService {

	crustChanged = new BehaviorSubject<Crust | null>(null);
	sauceChanged = new BehaviorSubject<Sauce | null>(null);
	toppingsChanged = new BehaviorSubject<Topping[] | null>(null);

	private crust: Crust | null = null;
	private sauce: Sauce | null = null;
	private toppings: Topping[] | null = null;
	private name: string = "Custom Creation";

	constructor(private cartService: CartService) {
	}

	addCrust(newCrust: Crust) {
		if (newCrust)
			newCrust.addedCount = 1;
		this.crust = newCrust;
		this.crustChanged.next(this.crust);
	}

	clearCrust() {
		this.crust = null;
		this.crustChanged.next(this.crust);
	}

	addSauce(newSauce: Sauce) {
		if (newSauce)
			newSauce.addedCount = 1;
		this.sauce = newSauce;
		this.sauceChanged.next(this.sauce);
	}

	clearSauce() {
		this.sauce = null;
		this.sauceChanged.next(this.sauce);
	}

	isToppingAdded(topping: Topping) {
		if (!this.toppings)
			this.toppings = [];
		return this.toppings.includes(topping);
	}

	addToppings(topping: Topping) {
		if (!this.toppings)
			this.toppings = [];

		if (!this.toppings.includes(topping)) {
			topping.addedCount = 1;
			this.toppings.push(topping);
		} else {
			const index = this.toppings.indexOf(topping);
			this.toppings[index].addedCount += 1;
		}
		this.toppingsChanged.next(this.toppings.slice());
	}

	deleteToppings(topping: Topping) {
		if (this.toppings && this.toppings.length) {
			const index = this.toppings.indexOf(topping);
			if (index >= 0) {
				if (topping.addedCount > 1) {
					topping.addedCount -= 1;
				} else {
					this.toppings.splice(index, 1);
				}
				this.toppingsChanged.next(this.toppings.slice());
			}
		}
	}

	clear() {
		this.crust = null;
		this.crustChanged.next(this.crust);

		this.sauce = null;
		this.sauceChanged.next(this.sauce);

		this.toppings = [];
		this.toppingsChanged.next(this.toppings.slice());
	}

	addToCart(name?: string) {
		if (this.crust && this.sauce && this.toppings && this.toppings.length) {
			let pizza: Pizza = {
				name: name ? name : this.name,
				time: 5,
				crust: this.crust,
				sauce: this.sauce,
				toppings: this.toppings,
				qty: 1
			};
			this.cartService.addPizza(pizza);
		}
	}
}
