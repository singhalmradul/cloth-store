import { createSelector } from 'reselect';

import { CategoriesState } from './categories.reducer';
import { CategoryInfo, CategoryMap } from './categories.types';

const selectCategoriesReducer = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
	[selectCategoriesReducer],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategory = createSelector([selectCategories], (categories) =>
	categories.reduce((acc, category) => {
		const { id, title, imageUrl } = category;
		acc[id - 1] = { id, title, imageUrl, route: `shop/${title}` };
		return acc;
	}, [] as CategoryInfo[])
);

export const selectCategoryMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title] = items;
			return acc;
		}, {} as CategoryMap)
);

export const selectIsCategoriesLoading = createSelector(
	[selectCategoriesReducer],
	(categories) => categories.isLoading
);
