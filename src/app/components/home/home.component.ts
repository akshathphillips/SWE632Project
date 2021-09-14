import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpecialityMenu } from "../../constants";
import { CartService, Pizza } from "../../services";

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

	readonly specialities: {
		name: string,
		image: string,
		description: string,
		pizza: Pizza
	} [] = SpecialityMenu

	constructor(private cartService: CartService) {
	}

	ngOnInit(): void {
	}

	onClickAddToCart(pizza: Pizza) {
		this.cartService.addPizza(pizza);
		// TODO Add toast
	}
}
