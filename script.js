let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-msg">Your basket is empty...</p>';
    } else {
        cartItemsDiv.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; font-size:0.9rem; margin-bottom:5px;">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `).join('');
    }
    
    totalPriceSpan.innerText = total;
}

function sendWhatsApp() {
    if (cart.length === 0) {
        alert("Your basket is empty!");
        return;
    }

    let phoneNumber = "9980149361"; // REPLACE WITH YOUR NUMBER (start with 91)
    let orderText = "Hello! I would like to place an order:%0A%0A";
    
    cart.forEach(item => {
        orderText += `- ${item.name} (₹${item.price})%0A`;
    });
    
    orderText += `%0A*Total: ₹${total}*`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${orderText}`;
    window.open(whatsappUrl, '_blank');
}