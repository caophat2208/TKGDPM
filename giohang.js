let cart = [];

// Load cart from localStorage
window.onload = function() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
};

function addToCart(productName, productPrice) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateQuantity(index, quantity) {
    cart[index].quantity = quantity;
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="product-name" colspan="3">${item.name}</td>
            <td class="product-price">${item.price}₫</td>
            <td class="product-quantity">
                <input type="number" class="quantity-input" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td class="product-subtotal">${item.price * item.quantity}₫</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartItems.appendChild(tr);
        total += item.price * item.quantity;
    });

    totalPriceElement.textContent = total + '₫';
    subtotalElement.textContent = total + '₫';
    totalElement.textContent = total + '₫';

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
