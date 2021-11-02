import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services";
import { BehaviorSubject, Subscription } from "rxjs";
import { Toast } from "bootstrap";

@Component({
	selector: 'app-custom-ingredients',
	templateUrl: './custom-ingredients.component.html',
	styleUrls: ['./custom-ingredients.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIngredientsComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('manyToppingToast', {static: true}) manyToppingToastElement: ElementRef | any;

	readonly crusts: Crust[] = [
		{name: 'Classic', image: '/assets/classic-crust.jpeg', addedCount: 0},
		{name: 'Thin', image: '/assets/Thin crust.jpg', addedCount: 0},
		{name: 'Thick', image: '/assets/Thick Crust.jpg', addedCount: 0},
		{name: 'Gluten Free', image: '/assets/Gluten free.jpg', addedCount: 0},
		{name: 'Cauliflower', image: '/assets/Cauliflower crust.jpg', addedCount: 0},
	]

	readonly sauces: Sauce[] = [
		{name: 'Tomato', image: '/assets/classic-sauce.jpeg', addedCount: 0},
		{name: 'White', image: '/assets/White sauce.jpg', addedCount: 0},
	]

	readonly toppings: Topping[] = [
		{name: 'Mushrooms', image: '/assets/mushrooms.jpg', addedCount: 0},
		{name: 'Peppers', image: '/assets/peppers.jpeg', addedCount: 0},
		{name: 'Olives', image: '/assets/olives.jpeg', addedCount: 0},
		{name: 'Pepperoni', image: '/assets/pepperoni.jpeg', addedCount: 0},
		{name: 'Chicken', image: '/assets/chicken.jpeg', addedCount: 0},
		{name: 'Sausage', image: '/assets/sausage.jpeg', addedCount: 0},
		{name: 'Corns', image: '/assets/corns.jpg', addedCount: 0},
		{name: 'Zucchini', image: '/assets/zucchini.jpg', addedCount: 0},
		{name: 'Spinach', image: '/assets/Spinach.jpg', addedCount: 0},
		{name: 'Pineapple', image: '/assets/pineapple.jpg', addedCount: 0},
		{name: 'Bacon', image: '/assets/bacon.jpg', addedCount: 0},
		{name: 'Meatball', image: '/assets/meatball.jpg', addedCount: 0},
		{name: 'Black Olives', image: '/assets/BO.jpg', addedCount: 0},
		{name: 'Jalapeño', image: '/assets/Jalapeno.jpg', addedCount: 0},
		{name: 'Eggplant', image: '/assets/Eggplant.jpg', addedCount: 0},
		{name: 'Salami', image: '/assets/Salami.jpg', addedCount: 0},


	]
	manyToppingToast: Toast | any;

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

		// Set default crust to Classic and default sauce to tomato (The UI prevents the user from causing an error)
		this.onClickAddCrust(this.crusts[0]);
		this.onClickAddSauce(this.sauces[0]);
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

	isToppingAdded(topping: Topping) {
		this.customService.isToppingAdded(topping);
	}

	onClickAddTopping(topping: Topping) {
		const currentSize = topping.addedCount + 1;
		if (currentSize > 2) {
			this.manyToppingToast.show();
		} else {
			this.customService.addToppings(topping);
		}
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

	ngAfterViewInit(): void {
		this.manyToppingToast = new Toast(this.manyToppingToastElement.nativeElement);
	}

	isVegetarian(topping: string): boolean {
		if(['Mushrooms', 'Peppers','Olives','Corns','Zucchini','Spinach','Pineapple', 'Black Olives','Jalapeño', 'Eggplant'].includes(topping)) return true;
		else return false;
	}
	isNonVegetarian(topping: string): boolean {
		if(!['Mushrooms', 'Peppers','Olives','Corns','Zucchini','Spinach','Pineapple', 'Black Olives','Jalapeño', 'Eggplant'].includes(topping)) return true;
		else return false;
	}
}
