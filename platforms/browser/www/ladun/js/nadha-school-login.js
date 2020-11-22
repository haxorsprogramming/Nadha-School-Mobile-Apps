// ROUTE 

// VUE OBJECT
var loginHand = new Vue({
    el : '#app',
    data : {
        email : '',
        password : ''
    },
    methods : {
        loginAtc : function()
        {
            let email = document.querySelector('#txtEmail').value;
            let password = document.querySelector('#txtPassword').value;
            window.location.assign('mainApp/dasbor.html');
        }
    }
});

// INISIALISASI 
document.querySelector('#txtEmail').focus();