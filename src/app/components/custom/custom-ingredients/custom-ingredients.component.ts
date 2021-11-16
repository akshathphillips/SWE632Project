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
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
	selector: 'app-custom-ingredients',
	templateUrl: './custom-ingredients.component.html',
	styleUrls: ['./custom-ingredients.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIngredientsComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('manyToppingToast', {static: true}) manyToppingToastElement: ElementRef | any;
	@ViewChild('selectedSauceToast', {static: true}) selectedSauceToastElement: ElementRef | any;
	@ViewChild('selectedCrustToast', {static: true}) selectedCrustToastElement: ElementRef | any;
	@ViewChild('recentToppingToast', {static: true}) recentToppingToastElement: ElementRef | any;

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

	@ViewChild('errorToast', {static: true}) errorToastElement: ElementRef | any;
	@ViewChild('successToast', {static: true}) successToastElement: ElementRef | any;

	errorToast: Toast | any;
	successToast: Toast | any;

	manyToppingToast: Toast | any;
	selectedSauceToast: Toast | any;
	selectedCrustToast: Toast | any;
	recentToppingToast: Toast | any;

	selectedCrust = new BehaviorSubject<Crust | any>(null);

	selectedSauce = new BehaviorSubject<Sauce | any>(null);

	recentTopping = new BehaviorSubject<Topping | any>(null);

	selectedToppings = new BehaviorSubject<Topping[] | any>(null);

	crustSubscription: Subscription | undefined;
	sauceSubscription: Subscription | undefined;
	toppingsSubscription: Subscription | undefined;

	nameFormGroup: FormGroup | any;

	constructor(private customService: CustomService, private router: Router, private _formBuilder: FormBuilder) {
	}

	ngOnInit(): void {
		this.nameFormGroup = this._formBuilder.group({
			name: [''],
		});

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
		if (this.selectedCrustToast)
			this.selectedCrustToast.show();
	}

	onClickAddSauce(sauce: Sauce) {
		this.customService.addSauce(sauce);
		if (this.selectedSauceToast)
			this.selectedSauceToast.show();
	}

	isToppingAdded(topping: Topping) {
		this.customService.isToppingAdded(topping);
	}

	onClickAddTopping(topping: Topping) {
		const currentSize = topping.addedCount + 1;
		if (currentSize > 2) {
			this.manyToppingToast.show();
		} else {
			this.recentTopping.next(topping);
			this.customService.addToppings(topping);
			this.recentToppingToast.show();
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
		this.selectedSauceToast = new Toast(this.selectedSauceToastElement.nativeElement);
		this.selectedCrustToast = new Toast(this.selectedCrustToastElement.nativeElement);
		this.recentToppingToast = new Toast(this.recentToppingToastElement.nativeElement);
		this.errorToast = new Toast(this.errorToastElement.nativeElement);
		this.successToast = new Toast(this.successToastElement.nativeElement);
	}

	isVegetarian(topping: string): boolean {
		return ['Mushrooms', 'Peppers', 'Olives', 'Corns', 'Zucchini', 'Spinach', 'Pineapple', 'Black Olives', 'Jalapeño', 'Eggplant'].includes(topping);
	}

	isNonVegetarian(topping: string): boolean {
		return !['Mushrooms', 'Peppers', 'Olives', 'Corns', 'Zucchini', 'Spinach', 'Pineapple', 'Black Olives', 'Jalapeño', 'Eggplant'].includes(topping);
	}

	onClickAddToCart() {
		if (!this.selectedCrust.value || !this.selectedSauce.value || !this.selectedToppings.value?.length) {
			this.errorToast.show();
		} else {
			this.successToast.show();
			this.customService.addToCart(this.nameFormGroup?.get('name')?.value);
			setTimeout(() => {
				this.router.navigate(['/']);
			}, 1500)
		}
	}
}
