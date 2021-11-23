import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { CartService, Pizza, Topping } from "../../services";
import { BehaviorSubject, Subscription } from "rxjs";
import { Toast } from "bootstrap";

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
	@ViewChild('orderRemoveToast', {static: true}) orderRemoveElement: ElementRef | any;

	@Input() usedInSidebar: boolean = false;

	collapsed: boolean[] = [];

	selectedPizzas = new BehaviorSubject<Pizza[] | any>(null);

	pizzasSubscription: Subscription | undefined;

	orderRemoveToast: Toast | any;

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
		this.orderRemoveToast.show();
	}

	ngAfterViewInit(): void {
		this.orderRemoveToast = new Toast(this.orderRemoveElement.nativeElement);
	}

	displayToppings(toppings: Topping[]): string[] {
		const toppingsNames: string[] = [];
		toppings.forEach((v) => {
			if (v.addedCount > 1) {
				toppingsNames.push(' <strong>extra</strong> ' + v.name);
			} else {
				toppingsNames.push(' ' + v.name);
			}
		})
		return toppingsNames;
	}
}
