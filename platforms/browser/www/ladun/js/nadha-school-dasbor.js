var dasbor = new Vue({
    el : '#app',
    data : {

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
        }
    }
});