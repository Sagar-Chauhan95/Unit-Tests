//This closure exercise involves a common real-world scenario.  

// This exercise uses closures to create a shopping cart. It encapsulates the cart array, allowing you to
//  add items, remove items, and calculate the total cost. The items and their prices are private and can only be 
//  accessed or modified through the provided methods, demonstrating the concept of closures in a different context.
// Exercise: Closure and a Shopping Cart

// Create a function that simulates a shopping cart. The cart should allow you to add items,
// remove items, and calculate the total cost. Items and their prices should be private
// and not directly accessible.

type Item = {
    item: string;
    price: number;
}

type Cart = {
    addItem: (item: string, price: number) => void;
    removeItem: (item: string) => void;
    getTotal: () => number;
}

export function createShoppingCart():  Cart {
 //IMPLEMENT THIS FUNCTION
 let cart:Item[]=[];

 return {
    addItem:function(goods:string, amount:number):void{
        cart.push({item:goods, price:amount});
    },

    removeItem:function(goods:string):void{
        let itemIndex = cart.findIndex((list)=>list.item===goods);
        if(itemIndex!== -1){
            cart.splice(itemIndex,1)
        }
    },
    getTotal : function():number{
        return cart.reduce((sum,current)=>sum+ current.price,0);
    }
 }
}

