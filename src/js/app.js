$(() => {


    const psSidebar = new PerfectScrollbar('.menubar-body', {
        suppressScrollX: true
    });



    // Showing sub menu in sidebar
    $('.menu-link[data-toggle="collapse"]').on('click', function (e) {
        // e.preventDefault();
        // $(this).parent().toggleClass('show');

        psSidebar.update();
    });


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

        console.log('show');
    });



    $(".bar").peity("bar");


    // knob

    $(".knob").knob();


    // sparkline bar
    $('.sparkline-bar').sparkline('html', {
        type: 'bar',
        barWidth: 10,
        height: 65,
        barColor: '#3b73da',
        chartRangeMax: 12
    });

    $('.sparkline-line').sparkline('html', {
        width: 120,
        height: 65,
        lineColor: '#3b73da',
        fillColor: false
    });

    /************** AREA CHARTS ********************/


    $('.sparkline-area').sparkline('html', {
        width: 120,
        height: 65,
        lineColor: '#3b73da',
        fillColor: 'rgba(59, 115, 218,0.2)'
    });


    $('.sparkline').sparkline('html', {
        width: '100%',
        height: 80,
        lineColor: '#3b73da',
        fillColor: 'rgba(59, 115, 218,0.2)'
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