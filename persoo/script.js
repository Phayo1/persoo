const addCart = document.querySelectorAll('.add-cart')
addCart.forEach(function(currentBtn){
  currentBtn.addEventListener('click', function(){
    document.querySelector(".dropdown-box").style.display = "none";
    document.querySelector(".cart-content").style.display = "block";
    document.querySelector(".number").style.display = "block";    
  })

  var addToCartButtons = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
        addItemToCart()
    } 

  function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName('title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
  }
  
  
  
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.querySelector('.product-preview')
    console.log(cartRow)
    var cartRowContents = 
        `<div class="product-preview-detail">
              <div class="image-preview">
                  <img src="${imageSrc}" alt="">
              </div>
              <div class="text-box">
                  <h4>${title}</h4>
                  <p>Size 11</p>
              </div>
          </div>
            <div class="product-preview-price">
              <h4 class="red">${price}</h4>
            </div>`
    cartRow.innerHTML = cartRowContents
  }
})




