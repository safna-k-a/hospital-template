/*author:SAFNA K A*/
function validate() {
    let e = document.getElementById("email_id").value;
    let eregx =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{2,4}$/;
    if (!eregx.test(e)) {
        alert("enter a valid email");
        return false;
    } else if (e == "") {
        alert("enter a valid email");
        return false;
    } else {
        return true;
    }
}
