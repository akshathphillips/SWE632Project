import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
	selector: 'app-custom-creator',
	templateUrl: './custom-creator.component.html',
	styleUrls: ['./custom-creator.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCreatorComponent implements OnInit, OnDestroy {

	selectedCrust = new BehaviorSubject<Crust | null>(null);

	selectedSauce = new BehaviorSubject<Sauce | null>(null);

	selectedToppings = new BehaviorSubject<Topping[] | null>(null);

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
	}

}
