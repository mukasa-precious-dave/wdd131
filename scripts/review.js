document.addEventListener("DOMContentLoaded", () => {
  // Retrieve current review count from localStorage or initialize to 0
  let numReviews = Number(window.localStorage.getItem("reviewCounter-ls")) || 0;

  // Increment the counter upon loading review.html successfully
  numReviews++;

  // Save the updated count back to localStorage
  window.localStorage.setItem("reviewCounter-ls", numReviews);

  // Display the counter value in the HTML span element
  const reviewCountElem = document.getElementById("reviewCount");
  if (reviewCountElem) {
    reviewCountElem.textContent = numReviews;
  }
});