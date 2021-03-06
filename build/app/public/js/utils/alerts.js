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
            // remove these events;
            window.onkeydown = null;
            window.onfocus = null;
            if (inputValue === false) return false;
            inputValue = inputValue.replace(/[\W]/g, "").toLowerCase();
            getRequest("/smashbox/product_type/" + inputValue, function(v) {
                if (v == "[]" || v === undefined || v.length == 0) {
                    swal.showInputError("Invalid Input!");
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