var inputLabel = document.getElementById('Calc');

function pushBtn(obj) {
    var clicked = obj.innerHTML;

    if (clicked == '=') {
        //Calculate
        inputLabel.innerHTML = eval(Calc.innerHTML);
    } else if (clicked == 'AC') {
        //All Clear
        inputLabel.innerHTML = '0';
    } else {
        if (inputLabel.innerHTML == '0') {
            inputLabel.innerHTML = clicked;
        } else {
            inputLabel.innerHTML += clicked;
        }
    }
}