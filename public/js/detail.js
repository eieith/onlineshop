function changeHref(productName) {
    const links = document.querySelectorAll('.product-link');
    links.forEach(link => {
        if (link.innerText.trim() === productName) {
            link.href = `/product-details/${productName}`;
        }
    });
}
