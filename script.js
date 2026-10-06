function showCategory(category, button) {

    const categories = document.querySelectorAll(".category");

    categories.forEach(function(item) {
        item.classList.add("hidden");
    });

    document.getElementById(category).classList.remove("hidden");


    const buttons = document.querySelectorAll(".menu-btn");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");
}


function orderFood(foodName) {
    const phoneNumber = "919876543210";

    const message =
        `Hello Green Leaf Restaurant,

I would like to order: ${foodName}

Please share the order details.`;

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

