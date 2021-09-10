import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { Crust, CustomService, Sauce, Topping } from "../../../services/custom.service";
import { Subject, Subscription } from "rxjs";

@Component({
	selector: 'app-custom-creator',
	templateUrl: './custom-creator.component.html',
	styleUrls: ['./custom-creator.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCreatorComponent implements OnInit, OnDestroy {

	selectedCrust = new Subject<Crust>();

	selectedSauce = new Subject<Sauce>();

	selectedToppings = new Subject<Topping[]>();

	crustSubscription: Subscription | undefined;
	sauceSubscription: Subscription | undefined;
	toppingsSubscription: Subscription | undefined;

	constructor(private customService: CustomService, private cd: ChangeDetectorRef) {
	}

	ngOnInit(): void {
		this.crustSubscription = this.customService.crustChanged.subscribe((v) => {
			this.selectedCrust.next(v)
		});

		this.sauceSubscription = this.customService.sauceChanged.subscribe((v) => {
			this.selectedSauce.next(v)
		});

		this.toppingsSubscription = this.customService.toppingsChanged.subscribe((v) => {
			console.log(v);
			this.selectedToppings.next(v)
			this.cd.detectChanges();
		});
	}

	ngOnDestroy(): void {
		this.crustSubscription?.unsubscribe();
		this.sauceSubscription?.unsubscribe();
		this.toppingsSubscription?.unsubscribe();
	}

}
