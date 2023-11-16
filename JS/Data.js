var eid = document.getElementById('empid');
var ename = document.getElementById('empname');
var esal = document.getElementById('empsal');
function add() {
    if (eid.value === "" || ename.value === "" || esal.value === "") {
        alert("enter some data")
        eid.focus();

    }
    else {
        var tab = document.getElementById('data');
        var nrow = tab.insertRow();
        var cel1 = nrow.insertCell(0);
        var cel2 = nrow.insertCell(1);
        var cel3 = nrow.insertCell(2);
        var cel4 = nrow.insertCell(3);
        cel1.innerHTML = eid.value;
        cel2.innerHTML = ename.value;
        cel3.innerHTML = esal.value;
        var but = document.createElement('button');
        // cel4.innerHTML='<button class="b1" >DEL</button>';

        but.addEventListener('click', function () {

            var row = cel4.parentNode;
            row.parentNode.removeChild(row);

        });

        but.innerHTML = 'clear';
        cel4.appendChild(but);
        but.classList.add('b1')

        eid.value = "";
        ename.value = "";
        esal.value = "";
    }
}
cel7.innerHTML = '<button onclick=rem(this);>DEL</button>';
function rem(button) {
    alert("rmeove")
    const r = button.parentNode.parentNode;
    console.log(r)
    r.parentNode.removeChild(r);

}
