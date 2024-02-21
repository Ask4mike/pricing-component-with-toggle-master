//get the element with the ID to listen to the event to check when the toggle is clicked
document.getElementById("switch").addEventListener("change", (event) => {
  const basicPriceHeader = event.target.checked ? "$19.99" : "$199.99";
  const professionalPriceHeader = event.target.checked ? "$24.99" : "$249.99";
  const masterPriceHeader = event.target.checked ? "$39.99" : "$399.99";
  //update the price value text content
  document.getElementById("price-basic").textContent = basicPriceHeader;
  document.getElementById("price-professional").textContent =
    professionalPriceHeader;
  document.getElementById("price-master").textContent = masterPriceHeader;
});
