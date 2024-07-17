document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    document.querySelectorAll('.purchase-button').forEach(button => {
        button.addEventListener('click', (e) => {
            cartCount++;
            cartCountElement.textContent = cartCount;
        });
    });

    const moreButton = document.getElementById('more-button');
    moreButton.addEventListener('click', () => {
        document.querySelectorAll('.book.hidden').forEach(book => {
            book.classList.remove('hidden');
        });
        moreButton.style.display = 'none'; // Hide the "More" button after clicking
    });
});
