import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-order-confirmation',
	templateUrl: './order-confirmation.component.html',
	styleUrls: ['./order-confirmation.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderConfirmationComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

}
