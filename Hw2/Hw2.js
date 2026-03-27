// First Name Validation
function validateFname() {
    let fname = document.getElementById("fname").value.trim();
        var FnamePattern = /^[a-zA-Z'-]+$/;

        if (fname == "") {
            document.getElementById("fname-error").innerHTML = "Must enter a First Name";
            return false;
        }
    else
        if (fname != "") {
            if (!fname.match(FnamePattern)) {
                document.getElementById("fname-error").innerHTML = "First Name can have Letters, Apostrophes, and Dashes ONLY";
                return false;
            }
            else
                if (fname.length < 2) {
                    document.getElementById("fname-error").innerHTML = "First Name cannot be less than 2 characters";
                    return false;
                }
                else
                    if (fname.length > 30) {
                        document.getElementById("fname-error").innerHTML = "First Name cannnot be more than 30 characters";
                        return false;
                    }  
                    else {
                        document.getElementById("fname-error").innerHTML = ""
                        return true;
            }         
    }
}

// Middle Initial Validation
function validateMidname() {
    let midname = document.getElementById("midname").value();
        var MidnamePattern = /^[a-zA-Z]$/;
        
        if (midname = "") {
            if (!midname.match(MidnamePattern)) {
                document.getElementById("midname-error").innerHTML = "Enter a valid Middle Initial";
                return false;
            }
            else {
                document.getElementById("midname-error").innerHTML = "";
                return true;
            }
        }
}

//Last Name Validation
function validateLname() {
    let lname = document.getElementById("lname").value.trim();
        var LnamePattern = /^[a-zA-Z'-]+$/;

            if (lname = "" ) {
                document.getElementById("lname-error").innerHTML = "Must enter a Last Name";
                return false;
            }
            else
                if (lname != "") {
                    if (!lname.match(LnamePattern)) {
                        document.getElementById("lname-error").innerHTML = "Letters, Dashes, and Apostrophes ONLY":
                        return false;
                    }
                else
                    if (lname.length < 2) {
                        document.getElementById("lname-error").innerHTML = "Last Name cannot be less than 2 characters";
                        return false;
                    }
                    else
                        if (lname.length > 30) {
                            document.getElementById("lname-error").innerHTML = "Last Name cannot be more than 30 characters";
                            return false;
                        }
                    else {
                        document.getElementById("lname-error").innerHTML = "";
                        return true;
                    }
                }
            
}

// Birth Date Validation
function validateBdate() {
    let bdate = document.getElementById("bdate")
    let date = new Date(bdate.value)
    let maxdate = new Date().setFullYear(new Date().getFullYear() - 120);

        if(date > new Date()) {
            document.getElementById("bdate-error").innerHTML = "No Future Dates Allowed";
            bdate.value = "";
            return false;
        }
        else
            if(date < new Date(maxdate)) {
                document.getElementById("bdate-error").innerHTML = "Date must be within the past 120 years";
                bdate.value = "";
                return false;
            }
            else {
                document.getElementById("bdate-error").innerHTML = "";
                return true;
            }
}

//SSN Validation
function validateSSN() {
    const ss = document.getElementById("ss").value;
    const SSpattern = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

        if (!SSpattern.test(ss)) {
            document.getElementById("ss-error").innerHTML = "Enter a valid Social Security Number";
            return false;
        }
        else {
            document.getElementById("ss-error").innerHTML = "";
            return true;
        }
}

//Email Validation
function validateEmail() {
    let email = document.getElementById("email").value;
        var EmailPattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

            if (email == "") {
                document.getElementById("email-error").innerHTML = "Must enter an Email Address";
                return false;
            }
            else 
                if (!email.match(EmailPattern)) {
                    document.getElementById("email-error").innerHTML = "Enter a valid Email Address";
                    return false;
                }
            else {
                document.getElementById("email-error").innerHTML = "";
                return true;
            }
}

//Address Validation
function validateAddr1() {
    var address1 = document.getElementById("address1").value;
        
        console.log(address1);
        console.log(address1.length);

            if (address1.length < 2) {
                document.getElementById("address1-error").innerHTML = "Enter a valid Address";
                return false;
            }
            else {
                document.getElementById("address1-error").innerHTML = "";
                return true;
            }
}

//City Validation
function validateCity() {
    let city = document.getElementById("city").value.trim();

        if (!city) {
            document.getElementById("city-error").innerHTML = "Must enter a City";
            return false;
        }
        else {
            document.getElementById("city-error").innerHTML = "";
            return true;
        }
}

//Zip Code Validation
function validateZip() {
    const zipInput = document.getElementById("zip");
        let zip = zipInput.value.replace(/[^\d-]/g, "");

            if (!zip) {
                document.getElementById("zip-error").innerHTML = "Must enter a Zip Code";
                return false;
            }
                if (zip.length > 5) {
                    zip = zip.slice(0,5) + "-" + zip.slice(5,9);
                }
            else {
                zip = zip.slice(0,5);
            }
            zipInput.value = zip;
            document.getElementById("zip-error").innerHTML = "";
            return true;
}

//Username Validation
function validateUser() {
    let user = document.getElementById("user").value;
    let UserPattern = /^[a-zA-Z0-9_]+$/;
        user = user.toLowerCase();
            document.getElementById("user").value = user;
        
        if (user.length === 0) {
            document.getElementById("user-error").innerHTML = "Must enter a Username";
            return false; 
        }
            if (!isNaN(user.charAt(0))) {
                document.getElementById("error-error").innerHTML = "Username cannot begin with a number";
                return false;
            }
                if (!UserPattern.test(user)) {
                    document.getElementById("user-error").innerHTML = "Username can have Letters, Numbers, Underscores, or Dashes ONLY";
                    return false;
                }
            else
                if (user.length < 5) {
                    document.getElementById("user-error").innerHTML = "Username cannot be less than 5 characters";
                    return false;
                }
            else
                if (user.length > 30) {
                    document.getElementById("user-error").innerHTML = "Username cannot be more than 30 characters";
                    return false;
                }
            else {
                document.getElementById("user-error").innerHTML = "";
                return true;
            }
}

//Password Validation
function validatePass() {
    const pass = document.getElementById("pass").value;
    const user = document.getElementById("user").value;
    const errorMessage = [];
    
        if (!pass.match(/[a-z]/)) {
            errorMessage.push("Please have at least one lowercase letter");
        }
            if (!pass.match(/[A-Z]/)) {
                errorMessage.push("Please have at least one upercase letter");
            }
                if (!pass.match(/[0-9]/)) {
                    errorMessage.push("Please have at least one number");
                }
            if (pass.match(/[!@#$%&*-_\.+()]/)) {
                errorMessage.push("Please have at least one special character");
            }
        if ((pass == user) || pass.includes(user)) {
            errorMessage.push("Password cannot contain Username");
        }
        const errorContainer = document.querySleector(".Pass-errorMessage");
        errorContainer.innerHTML = errorMessage
        .map(msg => '<span>${msg}<span><br>')
        .join("");
}

//Confirm Password Validation
function confirmPass() {
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;

        if (pass !== pass2) {
            document.getElementById("pass2-error").innerHTML = "Passwords do not Match";
            return false;
        }
    else {
        document.getElementById("pass2-error").innerHTML = "Passwords Match";
        return true;
    }
}

//Range Slider
function rangeSlider(val)
{
    document.getElementById("mentalvalue").innerText = val;
}

//Review Button
function reveiwInfo() {
    var formContent = document.getElementById("medform")
    var forOutput = "<table class = 'output'><tr><th colspan = '2'> Review Information:</th></tr>";

        for (var i = 0; i < formContent.elements.length; i++) {
            var el = formContent.elements.length[i];
            var datatype = el.type;
            var name = el.name;
            var value = el.value;

        if (!name) continue;
            
            switch (datatype) {
                case "checkbox":
                    if (el.checked) {
                        formOutput += "<tr><td align='right'>" + name + "</td>";
                        formOutput += "<td class='outputdata'>&#x2713;</td></tr>";
                    }
                    break;
                
                case "range":
                    if (value !== "0") {
                        formOutput += "<tr><td align='right'>" + name + "</td>";
                        formOutput += "<td class='outputdata'>" + value + "</td></tr>";
                    }
                    break;

                case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;
                
                case "button":
                case "submit":
                case "reset":
                    
                    break;
                
                default:
                    if (value !== "") {
                        formOutput += "<tr><td align='right'>" + name + "</td>";
                        formOutput += "<td class='outputdata'>" + value + "</td></tr>";
                    }
            }
        }
        formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}