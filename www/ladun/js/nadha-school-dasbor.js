var dasbor = new Vue({
    el : '#app',
    data : {
        berita : [
            { judul : 'Pelaksanaan Ukm' },
            { judul : 'Dampak corona' },
            { judul : 'Kursi itu' }
        ]
    },
    methods : {
        homeAtc : function ()
        {
            $('.tab-link').removeClass('tab-link-active');
            $('#btbHome').addClass('tab-link-active');
        },
        shopAtc : function ()
        {
            $('.tab-link').removeClass('tab-link-active');
            $('#btbShop').addClass('tab-link-active');
            
        },
        matkulAtc : function ()
        {
            console.log(Notification.permission);
            if (Notification.permission === "granted") {
                showNotification();
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(permission => {
                    console.log(permission);
                });
            }
        },
        logOutAtc : function ()
        {
            logOut();
        }
    }
});

function pesanUmumApp(icon, title, text){
    Swal.fire({icon : icon, title : title, text : text});
}

function showNotification() {
    const notification = new Notification("New message incoming", {
       body: "Hi there. How are you doing?",
       icon: "yourimageurl.png"
    })
 }

function logOut()
{
    Swal.fire({
        title: "Logout?",
        text: "Yakin keluar dari aplikasi ?...",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya",
        cancelButtonText: "Tidak",
    }).then((result) => {
        window.location.assign('../index.html');
    });
}