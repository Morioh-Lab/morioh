$(() => {


    $('#version').text('v1.1.0');

    const psSidebar = new PerfectScrollbar('.menubar-body', {
        suppressScrollX: true
    });



    // Showing sub menu in sidebar
    $('.menu-link[data-toggle="collapse"]').on('click', function (e) {
        // e.preventDefault();
        // $(this).parent().toggleClass('show');

        psSidebar.update();
    });


    if ($('.perfect-scrollbar').length) {
        new PerfectScrollbar('.perfect-scrollbar', {
            suppressScrollX: true
        });
    }


    // 

    $('#navbar-toggler').on('click', function () {

        $('body').toggleClass('menubar-collapsed');

        if ($('body').hasClass("menubar-collapsed")) {

            $('.menubar').on('mouseover').hover(function () {
                $('body').toggleClass('menubar-collapsed');
            });

        } else {
            $('.menubar').unbind();
        }


    });

    $('a[data-toggle=collapse]').on('click', function () {
        $(this).toggleClass('active');
    });


    // show source code 

    $('#modal-code').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        var content = $(button.data('content')).clone().html(); // Extract info from data-* attributes       

        // var code = $('<pre></pre>').text(content);
        $(this).find('.modal-body').html(content);

    });



    // Dashboard





});