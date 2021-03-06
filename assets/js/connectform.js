// Disable form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Collects the form and then adds validation styles
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

// Name of the file being uploaded to appear on selection
$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

// Clear form fields after submission
function submitForm() {
  document.getElementById("subscription").reset();
  document.getElementById("from_name").value = null;
  document.getElementById("from_email").value = null;
  document.getElementById("image").reset();
  alert("Your recipe has been sent :)");
}
