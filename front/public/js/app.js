$(document).ready(function() {

    $('#audience').on('change', function(){
        admSelectCheck(this);
    });

    function admSelectCheck(nameSelect) {
        console.log('nameSelect', nameSelect.value);
        if (nameSelect) {
           admOptionValue = document.getElementById("admOption").value;
           //console.log('admOptionValue', admOptionValue);
           
            if (nameSelect.value !== ' ') {
                console.log('mostrar');
                document.getElementById("admDivCheck").style.display = "block";
            } else {
                console.log('ocultar1');
                document.getElementById("admDivCheck").style.display = "none";
           }

        } else {
            console.log('ocultar2');
            document.getElementById("admDivCheck").style.display = "none";
        }
    }
    
});
