document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    // Get the modal
    var modalJose = document.getElementById("final-jose");
    var modalRafa = document.getElementById("final-rafa");
    // Get the button that opens the modal
    var btnJose = document.getElementById("final-jose-button");
    var btnRafa = document.getElementById("final-rafa-button");
    // Get the <span> element that closes the modal
    var spanJose = document.getElementById("final-jose-close");
    var spanRafa = document.getElementById("final-rafa-close");

    // When the user clicks on the button, open the modal
    btnJose.onclick = function() {
      modalJose.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanJose.onclick = function() {
      modalJose.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalJose) {
        modalJose.style.display = "none";
      }
    }

    // Rafa

    // When the user clicks on the button, open the modal
    btnRafa.onclick = function() {
      modalRafa.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    spanRafa.onclick = function() {
      modalRafa.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalRafa) {
        modalRafa.style.display = "none";
      }
    }
  }
};