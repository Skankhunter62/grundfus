export const setSingleCategory = (newCategory, singleCategoryAddItem) => {
    singleCategoryAddItem(newCategory)
    localStorage.setItem('singleCategory', JSON.stringify(Array(newCategory)))
}