
function showAllProducts() {
  const home = document.getElementById("homePage");
  const allProducts = document.getElementById("allProductsPage");

  home.classList.add("hidden");
  allProducts.classList.remove("hidden");
  document.getElementById("eachskin").style.display = "none";

  window.scrollTo(0, 0);
}

function goBackHome() {
  const home = document.getElementById("homePage");
  const allProducts = document.getElementById("allProductsPage");

  allProducts.classList.add("hidden");
  home.classList.remove("hidden"); 
  document.getElementById("eachskin").style.display = "block";

  window.scrollTo(0, 0);
}