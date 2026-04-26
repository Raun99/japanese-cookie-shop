let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateUI();
}

function updateUI() {
    const list = document.getElementById('cart-list');
    const totalEl = document.getElementById('total-price');
    
    if (cart.length === 0) {
        list.innerHTML = '<p class="hint">Your treats will appear here...</p>';
    } else {
        list.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-size:0.95rem;">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `).join('');
    }
    totalEl.innerText = total;
}

function sendWhatsApp() {
    if (cart.length === 0) {
        alert("Select some cookies first!");
        return;
    }

    const myNumber = "9980149361"; // SET YOUR NUMBER HERE
    let message = "Hi! I want to order from CRAVE.%0A%0A";
    
    cart.forEach(item => {
        message += `• ${item.name} (₹${item.price})%0A`;
    });
    
    message += `%0A*Total: ₹${total}*`;
    
    window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
}