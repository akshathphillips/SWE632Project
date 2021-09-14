import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from "@angular/router";
import { CartService, CustomService } from "../../services";

@Component({
	selector: 'app-order-success',
	templateUrl: './order-success.component.html',
	styleUrls: ['./order-success.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderSuccessComponent implements OnInit {

	constructor(private router: Router, private customService: CustomService, private cartService: CartService) {
	}

	ngOnInit(): void {
		setTimeout(() => {
			this.customService.clear();
			this.cartService.clear();
			this.router.navigate(['/']);
		}, 3000)
	}

}
