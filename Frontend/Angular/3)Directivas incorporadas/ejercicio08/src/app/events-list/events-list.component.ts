import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-events-list',
	templateUrl: './events-list.component.html',
	styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

	events = [
		{
			name: 'Angular Connect',
			date: '9/26/2036',
			time: '10am',
			location: {
				address: '1 London Rd',
				city: 'London',
				country: 'England'
			}
		},
		{
			name: 'ng-nl',
			date: '4/15/2037',
			time: '9am',
			location: {
				address: '127 DT ',
				city: 'Amsterdam',
				country: 'NL'
			}
		},
		{
			name: 'ng-conf 2037',
			date: '4/15/2037',
			time: '9am',
			location: {
				address: 'The Palatial America Hotel',
				city: 'Salt Lake City',
				country: 'USA'
			}
		},
		{
			name: 'UN Angular Summit',
			date: '6/10/2037',
			time: '8am',
			location: {
				address: 'The UN Angular Center',
				city: 'New York',
				country: 'USA'
			}
		},
		{
			name: 'null-conf',
			date: '0/00/0000',
			time: '0am',
			location: null
		},
	];
	constructor() { }

	ngOnInit() {
	}

}