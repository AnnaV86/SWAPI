export interface IVehicle {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	pilots: [];
	films: string[];
	created: string;
	edited: string;
	url: string;
}
export interface IVehicles {
	count: number;
	next: string;
	previous: null;
	results: IVehicle[];
}
