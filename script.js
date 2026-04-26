let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('sideCart').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateUI();
}

function updateUI() {
    const list = document.getElementById('cart-list');
    document.getElementById('total-price').innerText = total;
    document.getElementById('cart-count').innerText = cart.length;
    
    list.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #333; padding-bottom:5px;">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>
    `).join('');
}

function filterCookies() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('cookie-card');
    
    for (let card of cards) {
        let name = card.getAttribute('data-name');
        card.style.display = name.includes(input) ? "block" : "none";
    }
}

function sendWhatsApp() {
    if (cart.length === 0) return alert("Basket is empty!");
    const myNumber = "9980149361"; // SET YOUR NUMBER
    let msg = "CRAVE Order:%0A";
    cart.forEach(i => msg += `• ${i.name}%0A`);
    msg += `%0A*Total: ₹${total}*`;
    window.open(`https://wa.me/${myNumber}?text=${msg}`, '_blank');
}