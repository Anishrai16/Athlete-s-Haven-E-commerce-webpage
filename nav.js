const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="logo.png" class="brand-logo" alt="">
            <div class="logo"><a href="#">ATHLETE'S <span> HAVEN.</span></a></div>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="user.png" alt=""></a>
                <a href="#"><img src="cart.png" alt="" onclick="window.location.href='cart.html';"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">Home</a></li>
            <li class="link-item"><a href="#product-w" class="link">Women</a></li>
            <li class="link-item"><a href="#product-m" class="link">Men</a></li>
            <li class="link-item"><a href="#product-k" class="link">Kids</a></li>
            <li class="link-item"><a href="#product-a" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();
