import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SpecialityMenu } from "../../constants/speciality.constants";

@Component({
	selector: 'app-home-component',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

	readonly specialities: { name: string, image: string, description: string, time: string } [] = SpecialityMenu

	constructor() {
	}

	ngOnInit(): void {
	}

}
