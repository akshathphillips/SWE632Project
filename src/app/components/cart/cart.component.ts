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
import { Router} from '@angular/router';
import { CartService, Pizza } from "../../services";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
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

	collapsed: boolean[] = [];

	selectedPizzas = new BehaviorSubject<Pizza[] | any>(null);
	public static clickedModify : BehaviorSubject<Pizza> = new BehaviorSubject<Pizza | any>(null);

	pizzasSubscription: Subscription | undefined;

	orderRemoveToast: Toast | any;

	constructor(private cartService: CartService, private router: Router) {}

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

	onClickModifyPizza(pizza: Pizza, index: number) {
		this.router.navigate(['/custom-edit', pizza]);
		CartComponent.clickedModify.next(pizza);
		this.cartService.deletePizza(index);
	}

	ngAfterViewInit(): void {
		this.orderRemoveToast = new Toast(this.orderRemoveElement.nativeElement);
	}
}
