
  
    let cartItems = document.getElementById('cartItems');

    let cart = JSON.parse(localStorage.getItem('data')) || [];
  

    let updateCart = (x,y) => {
        x.innerHTML = y;
    }

  

    let generateCart = () => {

        if (cart.length !== 0) {
        return cartItems.innerHTML = cart.map(x => {
            const {id} = x;

            if (cart.length !== 0) {}

            let search = item.find(y => y.id === id);
          

            return `
                    <div>
                    <article>
                        <div class="itemImage">
                         <img src=${search.img} alt="">
                        </div>
                        <div class="itemDetails">
                            <div class="name-total">
                                <span>${search.name}</span>
                                <span>Total</span>
                             </div>
                            <div class="price-quantity">
                                <span>$ ${search.price}</span>
                                <div class="buttons">
                                <button id="add" onclick="increment(${search.id})">Add</button>
                                <span id=${search.id}>0</span>
                                <button id="remove" onclick="decrement(${search.id})">Remove</button>
                             </div>
                                <span>Remove from cart</span>
                            </div>
                        </div>
                    </article>
                    `
        } ).join('');} else {
            return cartItems.innerHTML = `<p>Cart is empty</p>`;
        }
    }

    generateCart();
    
    let cartItem = []

    const increment = (id) => {
        let selectedItem = id.id;

        let search = cartItem.find(x => x.id === selectedItem);

        if (!search) {
        cartItem.push({
            id: selectedItem,
            item: 1
        })} else {
            search.item +=1;
        }

        console.log(cartItem);
        updateCartItem(selectedItem);
        calculateItems();
    }

    const decrement = (id) => {
        let selectedItem = id.id;

        let search = cartItem.find(x => x.id === selectedItem);

        if (search.item === 0) return;
        else {
            search.item -= 1;
        }

        updateCartItem(selectedItem);
        
        calculateItems();
    }

    let updateCartItem = (id) => {
        let search = cartItem.find(x => x.id === id);
        console.log(search);
        document.getElementById(id).innerHTML = search.item
    }

    const calculateItems = () => {

        let totalAmount = cartItem.map(x=>x.item).reduce((x,y) => x+y, 0);

        updateCart(document.querySelector('.amount'), totalAmount);

    }

    console.log(cartItem);