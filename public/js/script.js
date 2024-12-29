

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display cart items
function displayCart() {
    const cartItemsList = document.getElementById('cartItemsList');
    const totalPriceElement = document.getElementById('totalPrice');

    // Clear existing items
    cartItemsList.innerHTML = '';
    let total = 0;

    // Populate items
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
        total += parseFloat(item.price);
    });

    totalPriceElement.innerText = total.toFixed(2);
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty! Add some items before checkout.');
        return;
    }

    // Generate receipt
    const receiptItemsList = document.getElementById('receiptItemsList');
    const receiptTotalPrice = document.getElementById('receiptTotalPrice');

    receiptItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - $${item.price}`;
        receiptItemsList.appendChild(listItem);
        total += parseFloat(item.price);
    });

    receiptTotalPrice.innerText = total.toFixed(2);

    // Show receipt modal
    document.getElementById('receiptModal').style.display = 'block';

    // Clear cart
    clearCart();
}

// Clear cart function
function clearCart() {
    localStorage.removeItem('cart'); // Remove from localStorage
    cart = []; // Clear array
    displayCart(); // Update the UI
}

// Close receipt modal
function closeReceipt() {
    document.getElementById('receiptModal').style.display = 'none';
}

// Attach event listeners
document.getElementById('checkoutBtn').addEventListener('click', checkout);
document.getElementById('clearCartBtn').addEventListener('click', clearCart);

// Display the cart on page load
displayCart();
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
