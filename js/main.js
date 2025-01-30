// Add to cart functionality
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.toLowerCase() === 'add to cart') {
            const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
            modal.show();
        }
    });
});

const images = [
    {
        src: "https://www.lg.com/ro/lg-experience/images/lg-lab/2023/what-is-a-smart-tv/lg-experience-lg-lab-what-is-a-smart-tv-key-visual.jpg",
        title: "Latest Smart TVs",
        text: "Experience crystal clear picture quality with our premium TV collection."
    },
    {
        src: "https://blog.service.works/wp-content/uploads/2023/07/Kitchen-Appliances.jpg",
        title: "Kitchen Appliances",
        text: "Upgrade your kitchen with our latest appliances."
    },
    {
        src: "https://i.pinimg.com/474x/66/23/c7/6623c7a1ecffd8971c3baf9dcb148ae3.jpg",
        title: "Smartphones",
        text: "Discover the latest smartphones with cutting-edge technology."
    }
];

let currentIndex = 0;
function updateSlider() {
    document.getElementById('sliderImage').src = images[currentIndex].src;
    document.getElementById('sliderTitle').textContent = images[currentIndex].title;
    document.getElementById('sliderText').textContent = images[currentIndex].text;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(updateSlider, 3000); // Change image every 5 seconds

// Function to add a product to the cart
function addToCart(product) {
// Get the current cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Check if the product is already in the cart
const existingProduct = cart.find(item => item.name === product.name);
if (existingProduct) {
    existingProduct.quantity += 1; // Increase quantity if already in cart
} else {
    product.quantity = 1; // Add quantity property
    cart.push(product); // Add new product to cart
}

// Save the updated cart back to localStorage
localStorage.setItem('cart', JSON.stringify(cart));

// Show the modal
const modal = new bootstrap.Modal(document.getElementById('addToCartModal'));
modal.show();

// Update the cart count in the navbar
updateCartCount();
}

// Function to update the cart count in the navbar
function updateCartCount() {
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
document.querySelector('.cart-count').textContent = cartCount;
}

// Attach event listeners to "Add to Cart" buttons
document.querySelectorAll('.btn-primary').forEach(button => {
button.addEventListener('click', function() {
    if (this.textContent.toLowerCase() === 'add to cart') {
        // Get product details from the card
        const card = this.closest('.product-card');
        const product = {
            name: card.querySelector('.card-title').textContent,
            price: card.querySelector('.text-primary').textContent,
            image: card.querySelector('img').src,
            description: card.querySelector('.card-text').textContent
        };

        // Add the product to the cart
        addToCart(product);
    }
});
});

// Update cart count on page load
updateCartCount();



// Function to load cart items from localStorage
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let subtotal = 0;

    // Clear the container
    cartItemsContainer.innerHTML = '';

    // Loop through cart items and create HTML for each
    cart.forEach((item, index) => {
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price * item.quantity;

        const itemHTML = `
            <div class="cart-item">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="col-md-6">
                        <h5>${item.name}</h5>
                        <p>${item.description}</p>
                        <div class="d-flex align-items-center">
                            <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, -1)">-</button>
                            <input type="text" class="form-control form-control-sm mx-2" value="${item.quantity}" style="width: 50px; text-align: center;" readonly>
                            <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-md-3 text-end">
                        <p class="text-primary fw-bold">$${(price * item.quantity).toFixed(2)}</p>
                        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += itemHTML;
    });

    // Update subtotal and total
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart
}

// Function to update the quantity of an item
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;

    // Remove the item if quantity is 0 or less
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload the cart
}

// Load the cart when the page loads
loadCart();