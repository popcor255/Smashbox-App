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
            getRequest("http://localhost/smashbox/product_type/" + inputValue, function(v) {
                if (v == "[]" || v === undefined || v.length == 0) {
                    swal.showInputError("You need to write something!");
                    return false;
                } else {
                    window.location = "/catalog/" + inputValue;
                    return true;
                }
            });
            return false;
        }
    );
}