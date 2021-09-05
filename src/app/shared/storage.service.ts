import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root' // Comment - AP - No need to provider this in the module, since its root
})
export class StorageService {

	constructor(private httpClient: HttpClient) {
	}

	store() {
		this.httpClient.put(
			'https://swe632project-7fc10-default-rtdb.firebaseio.com/data.json',
			[{'name': 'Akshath', 'text': 'Hello world!'}]
		).subscribe(response => {
			console.log(response);
		})
	}

	fetch() {
		this.httpClient.get(
			'https://swe632project-7fc10-default-rtdb.firebaseio.com/data.json'
		).subscribe(response => {
				console.log(response);
		})
	}
}
