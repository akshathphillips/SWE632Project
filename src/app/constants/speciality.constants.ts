import { Pizza } from "../services";

export const SpecialityMenu: { name: string, image: string, description: string, pizza: Pizza }[] = [
	{
		name: 'Classic Pepperoni',
		image: '/assets/pizza-pepperoni.jpg',
		description: '',
		pizza: {
			name: 'Classic Pepperoni',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Pepperoni',
					image: '',
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
			name: 'Margherita',
			time: 9,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 2
			},
			toppings: [
				{
					name: 'Cheese',
					image: '',
					addedCount: 2
				},
				{
					name: 'Basil',
					image: '',
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
			name: 'Classic Cheese and Mushrooms',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Mushrooms',
					image: '',
					addedCount: 1
				},
				{
					name: 'Cheese',
					image: '',
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
			name: 'Classic Chicken',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Chicken',
					image: '',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Mushrooms and Peppers',
		image: '/assets/pizza-mushrooms-and-peppers.jpeg',
		description: '',
		pizza: {
			name: 'Mushrooms and Peppers',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Mushrooms',
					image: '',
					addedCount: 1
				},
				{
					name: 'Peppers',
					image: '',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Garden fresh veggie',
		image: '/assets/pizza-garden-fresh.jpeg',
		description: '',
		pizza: {
			name: 'Garden fresh veggie',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Tomatoes',
					image: '',
					addedCount: 1
				},
				{
					name: 'Peppers',
					image: '',
					addedCount: 1
				},
				{
					name: 'Onions',
					image: '',
					addedCount: 1
				},
				{
					name: 'Olives',
					image: '',
					addedCount: 1
				}
			]
		}
	},
	{
		name: 'Mozzarella',
		image: '/assets/pizza-mozzarella.jpeg',
		description: '',
		pizza: {
			name: 'Mozzarella',
			time: 5,
			crust: {
				name: 'Classic',
				image: '',
				addedCount: 1
			},
			sauce: {
				name: 'Tomato',
				image: '',
				addedCount: 1
			},
			toppings: [
				{
					name: 'Mozzarella',
					image: '',
					addedCount: 3
				}
			]
		}
	}
];
