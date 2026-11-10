// Array of product objects provided in the assignment description
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("product-select");

  // Dynamically populate the select options using the products array
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // As specified in JavaScript requirements step 1
    option.textContent = capitalizeWords(product.name);
    selectElement.appendChild(option);
  });

  // Footer Dynamic Dates
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});

// Helper function to capitalize product names nicely
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}