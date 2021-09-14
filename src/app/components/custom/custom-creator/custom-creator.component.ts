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

@Component({
	selector: 'app-custom-creator',
	templateUrl: './custom-creator.component.html',
	styleUrls: ['./custom-creator.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCreatorComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('errorToast', {static: true}) errorToastElement: ElementRef | any;
	@ViewChild('successToast', {static: true}) successToastElement: ElementRef | any;

	errorToast: Toast | any;
	successToast: Toast | any;

	selectedCrust = new BehaviorSubject<Crust | any>(null);

	selectedSauce = new BehaviorSubject<Sauce | any>(null);

	selectedToppings = new BehaviorSubject<Topping[] | any>(null);

	crustSubscription: Subscription | undefined;
	sauceSubscription: Subscription | undefined;
	toppingsSubscription: Subscription | undefined;

	constructor(private customService: CustomService, private router: Router) {
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

	onClickAddToCart() {
		if (!this.selectedCrust.value || !this.selectedSauce.value || !this.selectedToppings.value?.length) {
			this.errorToast.show();
		} else {
			this.successToast.show();
			this.customService.addToCart();
			setTimeout(() => {
				this.router.navigate(['/']);
			}, 1500)
		}
	}

	ngOnDestroy(): void {
		this.crustSubscription?.unsubscribe();
		this.sauceSubscription?.unsubscribe();
		this.toppingsSubscription?.unsubscribe();
	}

	ngAfterViewInit(): void {
		this.errorToast = new Toast(this.errorToastElement.nativeElement);
		this.successToast = new Toast(this.successToastElement.nativeElement);
	}

}
