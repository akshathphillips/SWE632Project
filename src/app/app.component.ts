import { Component, OnInit } from '@angular/core';
import { StorageService } from "./shared/storage.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'SWE632Project';


	constructor(private storageService: StorageService) {
	}

	onClickStore() {
		this.storageService.store();
	}

	onClickFetch() {
		this.storageService.fetch();
	}

	ngOnInit(): void {
	}
}
