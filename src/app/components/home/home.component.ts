import {
	AfterViewInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { SpecialityMenu } from "../../constants";
import { CartService, Pizza, Topping } from "../../services";
import { Toast } from "bootstrap";
import { MediaMatcher } from "@angular/cdk/layout";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('homeToast', {static: true}) homeToastElement: ElementRef | any;
	@ViewChild('targetScroll', {static: true}) targetScrollElement: ElementRef | any;
	@ViewChild('mainScroll', {static: true}) mainScrollElement: ElementRef | any;

	toast: Toast | any;

	mobileQuery: MediaQueryList | any;
	readonly specialities: {
		name: string,
		image: string,
		description: string,
		pizza: Pizza
	} [] = SpecialityMenu
	showMe = false;
	activateRouteSubscription: Subscription | any;
	menuScrollSubscription: Subscription | any;
	private _mobileQueryListener: () => any;

	constructor(private cartService: CartService, private router: Router, private activatedRoute: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
		//
		this.menuScrollSubscription = this.cartService.scrollToMenu.subscribe((v) => {
			if (v)
				this.targetScrollElement.nativeElement.scrollIntoView({behavior: 'smooth'});
		});

		this.activateRouteSubscription = this.activatedRoute.url.subscribe((value) => {
			if (value[0].path.includes('home')) {
				window.scroll(0, 0);
			}
		});
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
		if (this.activateRouteSubscription)
			this.activateRouteSubscription.unsubscribe();
		if (this.menuScrollSubscription)
			this.menuScrollSubscription.unsubscribe();
	}

	isVegetarian(name: string): boolean {
		return ['Classic Cheese and Mushrooms', 'Mozzarella', 'Garden fresh veggie', 'Mushrooms and Peppers', 'Margherita'].includes(name);
	}

	onClickAddToCart(pizza: Pizza) {
		this.cartService.addPizza(pizza);
		this.toast.show();
	}

	ngAfterViewInit(): void {
		this.toast = new Toast(this.homeToastElement.nativeElement);
	}

	displayToppings(toppings: Topping[]): string[] {
		const toppingsNames: string[] = [];
		toppings.forEach((v) => {
			toppingsNames.push(' ' + v.name);
		})
		return toppingsNames;
	}

}
