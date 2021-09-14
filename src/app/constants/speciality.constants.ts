import { Pizza } from "../services";

export const SpecialityMenu: { name: string, image: string, description: string, pizza: Pizza }[] = [
	{
		name: 'Classic Pepperoni',
		image: '/assets/pizza-pepperoni.jpg',
		description: '',
		pizza: {
			time: 5,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Pepperoni',
					image: '/assets/pepperoni.jpeg',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Margherita',
		image: '/assets/pizza-margherita.jpg',
		description: '',
		pizza: {
			time: 9,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 2
			},
			toppings: [
				{
					name: 'Cheese',
					image: 'TODO',
					addedCount: 2
				},
				{
					name: 'Basil',
					image: 'TODO',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Classic Cheese and Mushrooms',
		image: '/assets/pizza-mushroom.jpg',
		description: '',
		pizza: {
			time: 5,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Mushrooms',
					image: '/assets/pepperoni.jpeg',
					addedCount: 1
				},
				{
					name: 'Cheese',
					image: 'TODO',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Classic Chicken',
		image: '/assets/pizza-chicken.jpeg',
		description: '',
		pizza: {
			time: 5,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Chicken',
					image: 'TODO',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Classic Spinach and Tomatoes',
		image: '/assets/Spinach and Tomatoes.jpg',
		description: '',
		pizza: {
			time: 5,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Spinach',
					image: 'TODO',
					addedCount: 1
				},
				{
					name: 'Tomatoes',
					image: 'TODO',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Garden fresh veggie',
		image: '/assets/Garden fresh veggie pizza.jpg',
		description: '',
		pizza: {
			time: 5,
			crust: {
				name: 'Classic',
				image: '/assets/classic-crust.jpeg',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '/assets/classic-sauce.jpeg',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Tomatoes',
					image: 'TODO',
					addedCount: 1
				},
				{
					name: 'Peppers',
					image: 'TODO',
					addedCount: 1
				},
				{
					name: 'Onions',
					image: 'TODO',
					addedCount: 1
				},
				{
					name: 'Olives',
					image: 'TODO',
					addedCount: 1
				}
			]
		}
	}
];
