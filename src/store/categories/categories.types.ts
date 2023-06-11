export enum CATEGORIES_ACTION_TYPES {
	FETCH_CATEGORIES_START = 'categories/FETCH_CATEGORIES_START',
	FETCH_CATEGORIES_SUCCESS = 'categories/FETCH_CATEGORIES_SUCCESS',
	FETCH_CATEGORIES_FAILURE = 'categories/FETCH_CATEGORIES_FAILURE',
}

export type CategoryItem = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
};

export type Category = {
	id: number;
	title: string;
	items: CategoryItem[];
	imageUrl: string;
};

export type CategoryInfo = {
	id: number;
	title: string;
	imageUrl: string;
	route: string;
};

export type CategoryMap = { [key: string]: CategoryItem[] };
