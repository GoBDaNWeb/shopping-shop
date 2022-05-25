import products from './product.data'

const getProducts = (categorySlug) => {
    if(categorySlug === 'all') return products
    return products.filter(p => p.category === categorySlug)
}

export const getOne = (productSlug) => {
    return products.find(p => p.slug === productSlug)
}

export const getSorted = (sortType, slug = 'all') => {
    //sortType: 'default', 'price_asc', 'price_desc'
    const productsArray = getProducts(slug)

    // console.log(sortType, slug);

    if(sortType === 'default') return productsArray.sort((a, b) => a.id - b.id)

    if(sortType === 'price_asc') return productsArray.sort((a, b) => a.price - b.price)
    
    if(sortType === 'price_desc') return productsArray.sort((a, b) => b.price - a.price)

}