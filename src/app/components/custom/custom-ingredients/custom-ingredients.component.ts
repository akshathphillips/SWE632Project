import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services/custom.service";

@Component({
	selector: 'app-custom-ingredients',
	templateUrl: './custom-ingredients.component.html',
	styleUrls: ['./custom-ingredients.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIngredientsComponent implements OnInit, OnDestroy {

	readonly crusts: Crust[] = [
		{name: 'Classic', image: ''},
		{name: 'Thin', image: ''},
		{name: 'Thick', image: ''},
		{name: 'Gluten Free', image: ''},
		{name: 'Cauliflower', image: ''}
	]

	readonly sauces: Sauce[] = [
		{name: 'Tomato', image: ''},
		{name: 'White', image: ''}
	]

	readonly toppings: Topping[] = [
		{name: 'Mushrooms', image: ''},
		{name: 'Peppers', image: ''},
		{name: 'Olives', image: ''},
		{name: 'Pepperoni', image: ''},
		{name: 'Chicken', image: ''},
		{name: 'Sausage', image: ''},
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
