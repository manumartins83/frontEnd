function testerRadio() {
    var radio = document.getElementsByName("btnRadChoix");
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            console.log(radio[i].value);
            document.getElementById("txtBox1").value = radio[i].value;
        }
    }
}

if (document.forms[0].elements[1].checked) {
    document.forms[0].elements[1].checked = false;
}
else {
    document.forms[0].elements[1].checked = true;
}

document.getElementById('txtBox1').value = 53; 