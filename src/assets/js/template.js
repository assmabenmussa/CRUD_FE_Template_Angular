function checkSidebar(){
    if($(window).width() < 768) {
        $('#sidebar, #content').toggleClass('active');

        $("#content").on('click', function() {
            if($(this).hasClass('active')){
                $('#sidebar, #content').toggleClass('active');
            }
        });

    }
}

$(document).ready( function() {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    const DateNow = new Date();
    $("#year").text(DateNow.getFullYear());
});

checkSidebar();