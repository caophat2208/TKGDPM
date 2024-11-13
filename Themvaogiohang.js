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
    cart[index].quantity = Number(quantity);
    if (cart[index].quantity === 0) {
        removeFromCart(index);
    } else {
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.price} 
            <input type="number" class="quantity-input" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
            <span class="glyphicon glyphicon-remove"<button onclick="removeFromCart(${index})"></button></span>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    totalPriceElement.textContent = total.toLocaleString() ;

    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.querySelector('.nav-cart-box a');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Ngăn dropdown đóng khi bấm vào bên trong
    dropdownMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Thêm hoặc loại bỏ class 'show' khi bấm vào nút giỏ hàng
    cartButton.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Bấm bên ngoài để đóng dropdown
    document.addEventListener('click', function (event) {
        if (dropdownMenu.classList.contains('show')) {
            dropdownMenu.classList.remove('show');
        }
    });
});
console.log("Script loaded successfully");

function addToCart(productName, productPrice) {
    console.log("addToCart called with:", productName, productPrice);
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}