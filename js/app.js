// get total price
function getTotal() {
    const basePrice = document.getElementById("base_price").innerText;
    const memoryCost = document.getElementById("memory_cost").innerText;
    const storageCost = document.getElementById("storage_cost").innerText;
    const deliveryCost = document.getElementById("delivery_cost").innerText;
    const totalPrice = document.getElementById("total_cost");
  
    const total =
      parseInt(basePrice) +
      parseInt(memoryCost) +
      parseInt(storageCost) +
      parseInt(deliveryCost);
    totalPrice.innerText = total;
    document.getElementById("discount_price").innerText = total;
  }
  
  // get memory costs
  function getExtraCost(type) {
    const memoryCost = document.getElementById("memory_cost");
    const storageCost = document.getElementById("storage_cost");
    const deliveryCost = document.getElementById("delivery_cost");
    if (type.includes("8gb_memory")) {
      memoryCost.innerText = 0;
    } else if (type.includes("16gb_memory")) {
      memoryCost.innerText = 180;
    } else if (type.includes("256gb_ssd")) {
      storageCost.innerText = 0;
    } else if (type.includes("512gb_ssd")) {
      storageCost.innerText = 100;
    } else if (type.includes("1tb_ssd")) {
      storageCost.innerText = 180;
    } else if (type.includes("prime_delivery")) {
      deliveryCost.innerText = 0;
    } else if (type.includes("fast_delivery")) {
      deliveryCost.innerText = 20;
    }
    //updating total price
    getTotal();
  }
  
  //handling configurations updated event
  document.getElementById("8gb_memory").addEventListener("click", function (event) {
    getExtraCost("8gb_memory");
  });
  document.getElementById("16gb_memory").addEventListener("click", function () {
    getExtraCost("16gb_memory");
  });
  
  document.getElementById("256gb_ssd").addEventListener("click", function () {
    getExtraCost("256gb_ssd");
  });
  document.getElementById("512gb_ssd").addEventListener("click", function () {
    getExtraCost("512gb_ssd");
  });
  document.getElementById("1tb_ssd").addEventListener("click", function () {
    getExtraCost("1tb_ssd");
  });
  document.getElementById("prime_delivery").addEventListener("click", function () {
      getExtraCost("prime_delivery");
    });
  document.getElementById("fast_delivery").addEventListener("click", function () {
    getExtraCost("fast_delivery");
  });
  
  // handling promo code applying event
  document
    .getElementById("promo_code_btn")
    .addEventListener("click", function () {
      const codeInput = document.getElementById("code_input");
      const totalPrice = document.getElementById("total_cost").innerText;
      const discountTotal = document.getElementById("discount_price");
      if (codeInput.value == "stevekaku") {
        discountTotal.innerText =
          parseInt(totalPrice) - (20 / 100) * parseInt(totalPrice);
      } else {
        alert("promo code isn't correct !!!");
      }
      codeInput.value = "";
    });