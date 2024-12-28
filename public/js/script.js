

function addToCart(name, price, id) {
    // Retrieve existing cart from localStorage or initialize a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price, id });

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(`Added to cart: ${name}, Price: $${price}, ID: ${id}`);
}

// Generate receipt
function generateReceipt() {
    const receiptDetails = document.getElementById('receiptDetails');
    const receipt = document.getElementById('receipt');

    let receiptContent = `<strong>Date:</strong> ${new Date().toLocaleString()}<br>`;
    receiptContent += '<strong>Items:</strong><br>';

    cart.forEach((item, index) => {
        receiptContent += `${index + 1}. ${item.name} - $${item.price.toFixed(2)}<br>`;
    });

    receiptContent += `<br><strong>Total:</strong> $${total.toFixed(2)}<br>`;
    receiptContent += `<strong>Thank you for shopping at KAZ Handmade Shop!</strong>`;

    receiptDetails.innerHTML = receiptContent;
    receipt.style.display = 'block';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    generateReceipt();
    alert('Thank you for your purchase!');
    cart = [];
    total = 0;
    localStorage.removeItem('cart');
    updateCart();
}

// Initialize cart page
if (document.getElementById('cartItems')) {
    updateCart();
}
// Item details view
function showItemDetails(itemName, itemImage, itemDescription, itemPrice) {
    const detailsContainer = document.getElementById('itemDetails');
    if (!detailsContainer) {
        console.error('Details container not found.');
        return;
    }

    detailsContainer.innerHTML = `
        <h2>${itemName}</h2>
        <img src="${itemImage}" alt="${itemName}" style="width: 100%; border-radius: 10px;">
        <p>${itemDescription}</p>
        <p>Price: $${itemPrice}</p>
        <button onclick="closeItemDetails()">Back</button>
    `;
    detailsContainer.style.display = 'block';

    const itemList = document.getElementById('itemsContainer');
    if (itemList) itemList.style.display = 'none';
}

// Close item details view
function closeItemDetails() {
    const detailsContainer = document.getElementById('itemDetails');
    const itemList = document.getElementById('itemsContainer');
    if (detailsContainer) detailsContainer.style.display = 'none';
    if (itemList) itemList.style.display = 'block';
}
// Review submission functionality
function submitReview() {
    const reviewInput = document.getElementById('reviewInput');
    if (!reviewInput) {
        console.error('Review input element not found.');
        return;
    }

    const reviewText = reviewInput.value.trim();
    if (reviewText === '') {
        alert('Please write a review before submitting!');
        return;
    }

    const reviewsContainer = document.getElementById('reviewsContainer');
    if (!reviewsContainer) {
        console.error('Reviews container not found.');
        return;
    }

    const newReview = document.createElement('p');
    newReview.innerText = reviewText;
    newReview.classList.add('review');
    reviewsContainer.appendChild(newReview);

    reviewInput.value = ''; // Clear input
    alert('Thank you for your review!');
}
