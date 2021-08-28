import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: 'root' // Comment - AP - No need to provider this in the module, since its root
})
export class StorageServiceService {

	constructor(private httpClient: HttpClient) {
	}

	store() {

	}

	fetch() {

	}
}
