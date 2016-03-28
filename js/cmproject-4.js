
function toggleMenu() {
    $('#page-wrapper').toggleClass('shift');
    $('#nav-el').toggleClass('nav-color-change');
}

function run() {
    $(window).scroll(textChange);
}

function textChange() {
    var proj1Top = $('#proj1').offset().top;
    var proj1Bot = $('#proj1').offset().top + $('#proj1').height();

    var proj2Top = $('#proj2').offset().top;
    var proj2Bot = $('#proj2').offset().top + $('#proj2').height();

    var proj3Top = $('#proj3').offset().top;
    var proj3Bot = $('#proj3').offset().top + $('#proj3').height();

    var proj4Top = $('#proj4').offset().top;
    var proj4Bot = $('#proj4').offset().top + $('#proj4').height();

    var proj5Top = $('#proj5').offset().top;
    var proj5Bot = $('#proj5').offset().top + $('#proj5').height();

    var proj6Top = $('#proj6').offset().top;
    var proj6Bot = $('#proj6').offset().top + $('#proj6').height();

    var scrollPos = window.scrollY;

    if(scrollPos > proj1Top) {
        if(scrollPos < proj1Bot) {
        console.log('scroll is over project 1');
        $('#project-title').html($('#proj1').data('summary'));
        }
    }

    if(scrollPos > proj2Top) {
        if(scrollPos < proj2Bot) {
        console.log('scroll is over project 2');
        $('#project-title').html($('#proj2').data('summary'));
        }
    }

    if(scrollPos > proj3Top) {
        if(scrollPos < proj3Bot) {
        console.log('scroll is over project 3');
        $('#project-title').html($('#proj3').data('summary'));
        }
    }

    if(scrollPos > proj4Top) {
        if(scrollPos < proj4Bot) {
        console.log('scroll is over project 4');
        $('#project-title').html($('#proj4').data('summary'));
        }
    }

    if(scrollPos > proj5Top) {
        if(scrollPos < proj5Bot) {
        console.log('scroll is over project 5');
        $('#project-title').html($('#proj5').data('summary'));
        }
    }

    if(scrollPos > proj6Top) {
        if(scrollPos < proj6Bot) {
        console.log('scroll is over project 6');
        $('#project-title').html($('#proj6').data('summary'));
        }
    }
}

window.onload = run();
$('#burger-el').click(toggleMenu);

$("#cockpitslideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#cockpitslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#cockpitslideshow');
},  3000);

$("#clarksslideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#clarksslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#clarksslideshow');
},  3000);

$("#alamyslideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#alamyslideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#alamyslideshow');
},  3000);

$("#cockpit2slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#cockpit2slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#cockpit2slideshow');
},  3000);


// window.onload = getHeights();


// WORKED

// var proj1 = $('#proj1').offset().top;
// var proj2 = $('#proj2').offset().top;

// function textChange() {
//     var scrollPos = window.scrollY;

//     if(scrollPos < proj2) {
//         console.log('scroll is before project 2');
//     } else if (scrollPos > proj2) {
//         console.log('scroll is after project 2');
//         $('#project-title').html('test');
//     } 
// }



// THOUGHTS

// target project title element

// define top of proj section
// define bottom of proj section 

// event listener for scroll event
// on scroll run function for:

// if scroll position is more than top of section,
// but less than bottom of section 
//     display data summary in project title header 

// if scroll position is more than position of section title {
//     set section number
//     display section title
// else if scroll position is less than position of section title
//   set previous section number
//   display previous section title 
//   .position()  .offset()


//   something to do with selecting current section
//   var proj = $(section:first)
//   values between two project values 
//      $('#proj1').offset().top + $('#proj1').height()
//   538.46875
//   $(proj1).data('summary')

// }

