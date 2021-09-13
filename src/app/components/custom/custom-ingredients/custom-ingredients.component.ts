import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
	selector: 'app-custom-ingredients',
	templateUrl: './custom-ingredients.component.html',
	styleUrls: ['./custom-ingredients.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIngredientsComponent implements OnInit, OnDestroy {

	readonly crusts: Crust[] = [
		{name: 'Classic', image: '/assets/classic-crust.jpeg', addedCount: 0},
		{name: 'Thin', image: '/assets/classic-crust.jpeg', addedCount: 0},
		{name: 'Thick', image: '/assets/classic-crust.jpeg', addedCount: 0},
		{name: 'Gluten Free', image: '/assets/classic-crust.jpeg', addedCount: 0},
		{name: 'Cauliflower', image: '/assets/classic-crust.jpeg', addedCount: 0},
	]

	readonly sauces: Sauce[] = [
		{name: 'Tomato', image: '/assets/classic-sauce.jpeg', addedCount: 0},
		{name: 'White', image: '/assets/classic-sauce.jpeg', addedCount: 0},
	]

	readonly toppings: Topping[] = [
		{name: 'Mushrooms', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Peppers', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Olives', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Pepperoni', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Chicken', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Sausage', image: '/assets/pepperoni.jpeg', addedCount: 0}
	]

	selectedCrust = new BehaviorSubject<Crust | any>(null);

	selectedSauce = new BehaviorSubject<Sauce | any>(null);

	selectedToppings = new BehaviorSubject<Topping[] | any>(null);

	crustSubscription: Subscription | undefined;
	sauceSubscription: Subscription | undefined;
	toppingsSubscription: Subscription | undefined;

	constructor(private customService: CustomService) {
	}

	ngOnInit(): void {
		this.crustSubscription = this.customService.crustChanged.subscribe((v) => {
			this.selectedCrust.next(v)
		});

		this.sauceSubscription = this.customService.sauceChanged.subscribe((v) => {
			this.selectedSauce.next(v)
		});

		this.toppingsSubscription = this.customService.toppingsChanged.subscribe((v) => {
			this.selectedToppings.next(v)
		});
	}

	ngOnDestroy(): void {
		this.crustSubscription?.unsubscribe();
		this.sauceSubscription?.unsubscribe();
		this.toppingsSubscription?.unsubscribe();
		this.customService.clear();
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

	onClickRemoveCrust() {
		this.customService.clearCrust();
	}

	onClickRemoveSauce() {
		this.customService.clearSauce();
	}

	onClickRemoveTopping(topping: Topping) {
		this.customService.deleteToppings(topping);
	}
}
