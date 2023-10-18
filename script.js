const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here

    function showCartPopup() {
        var cartPopup = document.getElementById("cartPopup");
        cartPopup.style.display = "block";
        setTimeout(closeCartPopup, 2000); // Close the popup after 2 seconds (adjust as needed)
    }

    function closeCartPopup() {
        var cartPopup = document.getElementById("cartPopup");
        cartPopup.style.display = "none";
    }

    // Attach an event listener to the "Add To Cart" button to show the popup
    var addToCartButton = document.querySelector(".btn.cart-btn");
    addToCartButton.addEventListener("click", showCartPopup);
});
