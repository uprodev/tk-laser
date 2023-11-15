jQuery(document).ready(function ($) {

  //popup
  $(".sale-page .fancybox").fancybox({
    touch:false,
    autoFocus:false,
    beforeShow : function(e){
      $('body').addClass('is-popup')
    },
    afterClose: function(e){
      $('body').removeClass('is-popup')
    },
  });


  //marquee
  $('.marquee1').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //marquee
  $('.marquee2').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });

  //marquee
  $('.marquee3').marquee({
    duration: 30000,
    gap:0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    loop:true,
    startVisible: true,
  });



  //scroll to block
  $(document).on('click', '.sale-page .top-menu ul li a', function (e) {
    e.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

  //fix header
  $(".top-line").sticky({
    topSpacing:0
  });

  /* mob-menu*/
  $(document).on('click', '.open-menu a', function (e){
    e.preventDefault();


    $('body').toggleClass('is-menu');

    if($('body').hasClass('is-menu')){
      $.fancybox.open( $('#menu-responsive'), {
        touch:false,
        autoFocus:false,
        afterShow: function (e){
          $('.marquee4').marquee({
            duration: 50000,
            gap:0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            loop:true,
            startVisible: true,
          });
        }
      });
      setTimeout(function() {
        $('html').addClass('is-menu-open');
      }, 100);
    }else{
      $('html').removeClass('is-menu-open');
      setTimeout(function() {
        $.fancybox.close();
      }, 100);
    }
  });

});