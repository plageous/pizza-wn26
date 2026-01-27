// alert on pizza-form submission
document.getElementById("pizza-form").onsubmit = () => {
    let isValid = true;

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();


    if (!fname) {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }
    if (!lname) {
        document.getElementById("err-lname").style.display = "block";
        isValid = false;
    }
    if (!email) {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    return isValid;
}