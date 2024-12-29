 // Search bar functionality
 document.getElementById('search').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase().trim();
    const items = document.querySelectorAll('.product-item');

    items.forEach(item => {
        const itemName = item.querySelector('h3').innerText.toLowerCase();
        item.style.display = itemName.includes(searchValue) ? '' : 'none';
    });
});


// Show Item Details in a Modal
function showItemDetails(name, description, price, imgUrl) {
    document.getElementById('itemName').innerText = name;
    document.getElementById('itemDescription').innerText = description;
    document.getElementById('itemPrice').innerText = price;
    document.getElementById('itemImage').src = imgUrl;
    document.getElementById('itemDetailsModal').style.display = 'block';
}

// Close Item Modal
function closeModal() {
    document.getElementById('itemDetailsModal').style.display = 'none';
}

// Close modal when clicked outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('itemDetailsModal')) {
        closeModal();
    }
    if (event.target == document.getElementById('cartModal')) {
        closeCart();
    }
}
function addToCart(name, price, id) {
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart.push({ name, price, id });
localStorage.setItem('cart', JSON.stringify(cart));
alert(`${name} has been added to your cart!`);
}