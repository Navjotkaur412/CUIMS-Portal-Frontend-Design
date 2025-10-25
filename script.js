  const form = document.querySelector(".contact-form");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name && email && message) {
      popup.style.display = "flex"; // Show popup
      form.reset(); // Clear form
    } else {
      alert("⚠️ Please fill all fields before submitting.");
    }
  });

  function closePopup() {
    popup.style.display = "none";
  }

