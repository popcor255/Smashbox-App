function serachAlert() {
    swal({
            title: "Search:",
            text: "",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            inputPlaceholder: "Lets find what your looking for"
        },
        function(inputValue) {
            if (inputValue === false) return false;
            inputValue = inputValue.replace(/[\W]/g, "");
            if (inputValue === "" || getRequest("http://localhost/smashbox/product_type/" + inputValue, isEmpty)) {
                swal.showInputError("You need to write something!");
                return false;
            }
            window.location = "/catalog/" + inputValue;
        }
    );
}