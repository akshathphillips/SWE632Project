import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	OnInit,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';
import { SpecialityMenu } from "../../constants";
import { CartService, Pizza } from "../../services";
import { Toast } from "bootstrap";

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

	@ViewChild('homeToast', {static: true}) homeToastElement: ElementRef | any;

	toast: Toast | any;

	readonly specialities: {
		name: string,
		image: string,
		description: string,
		pizza: Pizza
	} [] = SpecialityMenu

	showMe = false;

	constructor(private cartService: CartService) {
	}

	ngOnInit(): void {
	}

	onClickAddToCart(pizza: Pizza) {
		this.cartService.addPizza(pizza);
		this.toast.show();
	}

	ngAfterViewInit(): void {
		this.toast = new Toast(this.homeToastElement.nativeElement);
	}

}
