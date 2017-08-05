import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/App.service';


@Component({
	selector: 'ng-app',
	templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
	constructor(public AppService : AppService) {}
	ngOnInit() : void {

	}
}