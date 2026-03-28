


// cart
const checkLocal = ()=>{
    const cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(cart);
    }
    return [];
}
const setLocal = (card)=>{
    const cart = checkLocal();
    cart.push(card);
    localStorage.setItem('cart', JSON.stringify(cart));
    
}




// wishlist
const checkWishlist = ()=>{
    const wish = localStorage.getItem('wish');
    if(wish){
        return JSON.parse(wish);
    }
    return [];
}
const setWishlist = (card)=>{
    const wish = checkWishlist();
    wish.push(card);
    localStorage.setItem('wish', JSON.stringify(wish));
}


// clean


export {checkLocal, setLocal, checkWishlist, setWishlist}
