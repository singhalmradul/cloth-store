import { createSelector } from 'reselect';

const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
	[selectCategoriesReducer],
	(categoriesSlice) => categoriesSlice.categories
);
export const selectCategory = createSelector([selectCategories], (categories) =>
	categories.reduce((acc, category) => {
		const { id, title, imageUrl } = category;
		acc[id - 1] = { id, title, imageUrl, route: `shop/${title}` };
		return acc;
	}, [])
);

export const selectCategoryMap = createSelector(
	[selectCategories],
	(categories) =>
		categories.reduce((acc, category) => {
			const { title, items } = category;
			acc[title] = items;
			return acc;
		}, {})
);

export const selectIsCategoriesLoading = createSelector(
	[selectCategoriesReducer],
	(categories) => categories.isLoading
);
