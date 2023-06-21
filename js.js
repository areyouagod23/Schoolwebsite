    // JavaScript functionality for the jersey website

// Example function to handle a click event on the "Buy Now" button
function handleBuyButtonClick(event) {
    event.preventDefault();
    var productName = event.target.dataset.productName;
    // You can perform any desired action here, such as adding the product to a cart or redirecting to a checkout page
    console.log("Buy button clicked for product: " + productName);
  }
  
  // Add event listeners to the "Buy Now" buttons
  var buyButtons = document.getElementsByClassName("buy-button");
  for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", handleBuyButtonClick);
  }