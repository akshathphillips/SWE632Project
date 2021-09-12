import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services";

@Component({
	selector: 'app-custom-ingredients',
	templateUrl: './custom-ingredients.component.html',
	styleUrls: ['./custom-ingredients.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIngredientsComponent implements OnInit, OnDestroy {

	readonly crusts: Crust[] = [
		{name: 'Classic', image: '/assets/classic-crust.jpeg',},
		{name: 'Thin', image: '/assets/classic-crust.jpeg',},
		{name: 'Thick', image: '/assets/classic-crust.jpeg',},
		{name: 'Gluten Free', image: '/assets/classic-crust.jpeg',},
		{name: 'Cauliflower', image: '/assets/classic-crust.jpeg',}
	]

	readonly sauces: Sauce[] = [
		{name: 'Tomato', image: '/assets/classic-sauce.jpeg',},
		{name: 'White', image: '/assets/classic-sauce.jpeg',}
	]

	readonly toppings: Topping[] = [
		{name: 'Mushrooms', image: '/assets/pepperoni.jpeg',},
		{name: 'Peppers', image: '/assets/pepperoni.jpeg',},
		{name: 'Olives', image: '/assets/pepperoni.jpeg',},
		{name: 'Pepperoni', image: '/assets/pepperoni.jpeg',},
		{name: 'Chicken', image: '/assets/pepperoni.jpeg',},
		{name: 'Sausage', image: '/assets/pepperoni.jpeg',},
	]

	constructor(private customService: CustomService) {
	}

	ngOnInit(): void {
	}

	onClickAddCrust(crust: Crust) {
		this.customService.addCrust(crust);
	}

	onClickAddSauce(sauce: Sauce) {
		this.customService.addSauce(sauce);
	}

	onClickAddTopping(topping: Topping) {
		this.customService.addToppings(topping);
	}

	ngOnDestroy(): void {
		this.customService.addCrust(undefined);
		this.customService.addSauce(undefined);
		this.customService.clearToppings();
	}

	onClickRemoveCrust() {
		this.customService.addCrust(undefined);
	}

	onClickRemoveSauce() {
		this.customService.addSauce(undefined);
	}

	onClickRemoveTopping(index: number) {
		this.customService.deleteToppings(index);
	}
}
