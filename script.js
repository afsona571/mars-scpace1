const searchInput = document.getElementById('searchInput')
const searchButton = document.getElementById('searchButton')
const productlist = Array.from(document.querySelectorAll('.product'))
const noResultMessage = document.getElementById('noResultMesseg')

function searchProcuct(){
    const searchValue = searchInput.value.toLowerCase().trim();
    const filtteredProducts = productlist.filter(product=>{
        const productName = product.getAttribute('data-name').toLowerCase();
        return productName.includes(searchValue)
    })
    productlist.map(product=>product.style.display='none')
    filtteredProducts.map(product=>product.style.display='block')
};
searchButton.addEventListener('click', searchProcuct)