import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

export interface Crust {
	name: string;
	image: string;
	addedCount?: number
}

export interface Sauce {
	name: string;
	image: string;
	addedCount?: number
}

export interface Topping {
	name: string;
	image: string;
	addedCount?: number
}

@Injectable({
	providedIn: 'root'
})
export class CustomService {

	crustChanged = new Subject<Crust>();
	sauceChanged = new Subject<Sauce>();
	toppingsChanged = new Subject<Topping[]>();

	private crust: Crust | undefined;
	private sauce: Sauce | undefined;
	private toppings: Topping[] | undefined;

	constructor() {
	}

	addCrust(newCrust: Crust | undefined) {
		if (newCrust)
			newCrust.addedCount = 1;
		this.crust = newCrust;
		this.crustChanged.next(this.crust);
	}

	addSauce(newSauce: Sauce | undefined) {
		if (newSauce)
			newSauce.addedCount = 1;
		this.sauce = newSauce;
		this.sauceChanged.next(this.sauce);
	}

	addToppings(topping: Topping) {
		if (!this.toppings)
			this.toppings = [];

		// const i = this.toppings.indexOf(topping)
		// if (i >= 0) {
		// 	const count = this.toppings[i].addedCount;
		// 	this.toppings[i].addedCount = (count ? count : 0) + 1;
		// } else {
		// 	topping.addedCount = 1;
		// 	this.toppings.push(topping);
		// }

		if (!this.toppings.includes(topping))
			this.toppings.push(topping);
		this.toppingsChanged.next(this.toppings.slice());
	}

	clearToppings() {
		this.toppings = undefined;
		this.toppingsChanged.next(undefined);
	}

	deleteToppings(index: number) {
		if (this.toppings && this.toppings.length) {
			this.toppings.splice(index, 1);
			this.toppingsChanged.next(this.toppings.slice());
			console.log(this.toppings);
		}
	}
}
