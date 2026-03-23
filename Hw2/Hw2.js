function validateForm() {
    let fname = document.getElementById("fname").value.trim();
    let midname = document.getElementById("midname").value.trim();

var FnamePattern = /^[a-zA-Z'-]+$/;
var MidnamePattern = /^[A-Z]+$/;

    if (fname == "") {
            alert ("Must enter a First Name");
            return false;
        } if (!fname.match(FnamePattern)) {
                alert ("Letters, apostrophes, and dashes ONLY")
                return false;
    
    } if (midname == "") {
        return true;
        } if (!midname.match(MidnamePattern)) {
            alert ("Letters ONLY");
            return false;

        } else {
            return true;
    }
        
}