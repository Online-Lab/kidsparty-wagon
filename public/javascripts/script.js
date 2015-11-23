$(document).ready(function(){

  // var block_main = $(".block-main");
  // var block_header = $(".header")

  // var init = function(){
  //   var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight|| e.clientHeight|| g.clientHeight;
  //   if (block_main.length > 0) {
  //     block_main.height(y - block_header.height() - 40);
  //   }
  // };

  // init();
  // $(window).resize(init);

  $(".menu .menu-item").click(function(){
    var $this = $(this);
    var $link = $this.find(".menu-item-link");
    var href = $link.attr("href");
    window.location.href = href;
  });

  $(".trigger-popup").each(function(i, e){
    $this = $(this);
    $target = $($this.attr("data-target"));
    $this.click(function(){
      $('html, body').css({'overflow': 'hidden', 'height': '100%'});
      $target.show();
    });
    $target.find(".close-action").click(function(){
      $('html, body').css({'overflow': 'auto', 'height': 'auto'});
      $target.hide();
    });
  });

});