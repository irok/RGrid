/**
 * RGrid for IE 0.0.2
 * Licensed under the MIT license.
 * Copyright 2013 Takayuki Irokawa
 *
 * @require jQuery
 */
$(function(){
  $('.block').each(function(){
    var $this = $(this), rgrid = {keyCount:0, baseClass:''};
    $.each($this.attr('class').split(/\s/), function(){
      if (this.match(/^(g[rmtp])[0-9]+(-[0-9]+)?$/)) {
        rgrid[RegExp.$1] = 'gr'+this.substring(2);
        rgrid.keyCount++;
      }
      else
        rgrid.baseClass += this+' ';
    });
    $this.attr('class', rgrid.baseClass);
    if (rgrid.keyCount > 0)
      $this.data('rgrid', rgrid);
  });

  var prevMedia = '';
  function adjustGrid(){
    var w = $(window).width(),
        m = w < 540 ? 'gm'
          : w < 960 ? 'gt'
          :           'gp';
    if (m !== prevMedia) {
      $('.block').each(function(){
        var $this = $(this), rgrid = $this.data('rgrid');
        if (typeof rgrid === 'object')
          $this.attr('class', rgrid.baseClass+(rgrid[m] || rgrid.gr || ''));
      });
      prevMedia = m;
    }
  };
  $(window).resize(adjustGrid);
  adjustGrid();
});
