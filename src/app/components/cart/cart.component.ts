import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService, Pizza } from "../../services";
import { BehaviorSubject, Subscription } from "rxjs";

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {

	selectedPizzas = new BehaviorSubject<Pizza[] | any>(null);

	pizzasSubscription: Subscription | undefined;

	constructor(private cartService: CartService) {
	}

	ngOnInit(): void {
		this.pizzasSubscription = this.cartService.pizzasChanged.subscribe((v) => {
			this.selectedPizzas.next(v)
		});
	}

	ngOnDestroy(): void {
		this.pizzasSubscription?.unsubscribe();
	}

	onClickRemovePizza(index: number) {
		this.cartService.deletePizza(index);
	}
}
