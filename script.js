console.log("Hello, this is the console.");

var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.phone = document.getElementById('phone-number');
    fields.comments = document.getElementById('comments');
})

/* Checks if the user enters values */
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.length > 0);
}
