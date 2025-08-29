
$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    let email = $("#floatingInput").val().trim();
    let password = $("#floatingPassword").val().trim();

    // remove old alerts
    $(".alert").remove();

    if (!email || !password) {
      showAlert("Please fill in both email and password.", "danger");
      return;
    }

    if (!email.includes("@")) {
      showAlert("Enter a valid email address.", "warning");
      return;
    }

    if (password.length < 6) {
      showAlert("Password must be at least 6 characters long.", "warning");
      return;
    }

    // success
    showAlert("Sign up successful! Redirecting…", "success");
    setTimeout(function () {
      window.location.href = "index.html"; // change to your page
    }, 2000);
  });

  // simple demo behaviour for social buttons
  $(".btn-outline-secondary, .btn-outline-primary").on("click", function (e) {
    e.preventDefault();
    $(".alert").remove();
    let platform = $(this).text().trim();
    showAlert("Redirecting to " + platform + " sign-up...", "info");
  });

  function showAlert(message, type) {
    let alertBox = `<div class="alert alert-${type} mt-3">${message}</div>`;
    $("form").prepend(alertBox);
  }
});


