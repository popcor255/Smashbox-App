function serachAlert() {
  swal(
    {
      title: "Search:",
      text: "",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: "Lets find what your looking for"
    },
    function(inputValue) {
      if (inputValue === false) return false;
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false;
      }
      window.location = "/payment.html";
    }
  );
}
