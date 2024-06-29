//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    //IMPLEMENT THIS FUNCTION
    let cart = [];
    return {
        addItem: function (goods, amount) {
            cart.push({ item: goods, price: amount });
        },
        removeItem: function (goods) {
            let itemIndex = cart.findIndex((list) => list.item === goods);
            if (itemIndex !== -1) {
                cart.splice(itemIndex, 1);
            }
        },
        getTotal: function () {
            return cart.reduce((sum, current) => sum + current.price, 0);
        }
    };
}
