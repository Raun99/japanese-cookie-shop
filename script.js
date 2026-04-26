let cart = [];
let total = 0;

function toggleCart() {
    document.getElementById('sideCart').classList.toggle('active');
}

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateUI();
    // Auto-open cart when adding first item
    if(cart.length === 1) toggleCart();
}

function updateUI() {
    const list = document.getElementById('cart-list');
    document.getElementById('total-price').innerText = total;
    document.getElementById('cart-count').innerText = cart.length;
    
    if(cart.length === 0) {
        list.innerHTML = '<p style="opacity:0.4; text-align:center; margin-top:50px;">Your basket is empty...</p>';
    } else {
        list.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #222; padding-bottom:10px;">
                <span style="font-weight:500;">${item.name}</span>
                <span style="color:#C5A059;">₹${item.price}</span>
            </div>
        `).join('');
    }
}

function filterCookies() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('cookie-card');
    
    for (let card of cards) {
        let name = card.getAttribute('data-name');
        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

function sendWhatsApp() {
    if (cart.length === 0) return alert("Your basket is empty!");
    
    // REPLACE WITH YOUR PHONE NUMBER
    const myNumber = "9980149361"; 
    
    let msg = "Hello CRAVE! I'd like to order:%0A%0A";
    cart.forEach((i, index) => msg += `${index+1}. ${i.name} (₹${i.price})%0A`);
    msg += `%0A*Total Amount: ₹${total}*`;
    
    window.open(`https://wa.me/${myNumber}?text=${msg}`, '_blank');
}