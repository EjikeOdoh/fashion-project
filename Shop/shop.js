
    let shop = document.querySelector('.item');

    shop.innerHTML = item.map(x => {
        const {id, name, desc, price, img} = x;
        return `
            <article id=${id}>
                <img src=${img} alt="">
                <h3>${name}</h3>
                <p>${desc}</p>
                <h5>$ ${price}</h5>
                <div class="buttons">
                <button onclick="addToCart(${id})">Add to Cart</button>
                <button onclick="removeFromCart(${id})">Remove from Cart</button>
                </div>
                <span id=dot-${id}></span>
            </article>
        `
    }).join('')

    let cart = JSON.parse(localStorage.getItem('data')) || [];

    const addToCart = (id) => {
       let selectedItem = id.id;

        let search = cart.find(x => x.id === selectedItem);

        if (search) return;
        else {
            cart.push({id: selectedItem});
        } 
        
        let dot = document.getElementById('dot-'+selectedItem);
        dot.classList.add('dot');
       
        localStorage.setItem('data', JSON.stringify(cart));

        updateCart(document.querySelector('.amount'), cart.length)

    }


    const removeFromCart = (id) => {
        let selectedItem = id.id;

        let search = cart.find(x => x.id === selectedItem);

        if (!search) return;
        else {
            cart = cart.filter(x => x.id !== selectedItem);
        }
        
        let dot = document.getElementById('dot-'+selectedItem);
        dot.classList.remove('dot');

        localStorage.setItem('data', JSON.stringify(cart));

        updateCart(document.querySelector('.amount'), cart.length);

    } 

    let updateCart = (x,y) => {
        x.innerHTML = y;
    }

    updateCart(document.querySelector('.amount'), cart.length);