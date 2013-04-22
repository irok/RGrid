/**
 * RGrid for IE 0.0.1
 * Licensed under the MIT license.
 * Copyright 2013 Takayuki Irokawa
 *
 * @require jQuery
 */
$(function(){
  $('.block').each(function(){
    var $this = $(this),
        newClass = '',
        gridClass = {keyCount:0};
    $.each($this.attr('class').split(/\s/), function(){
      if (this.match(/^(g[rmtp])[0-9]+(-[0-9]+)?$/)) {
        gridClass[RegExp.$1] = this.substring(2);
        gridClass.keyCount++;
      }
      else
        newClass += ' '+this;
    });
    $this.attr('class', newClass.substring(1));
    if (gridClass.keyCount > 0)
      $this.data('rgrid', gridClass);
  });

  var prevMedia = '',
  function adjustGrid(){
    var w = $(window).width(),
        m = w < 540 ? 'gm'
          : w < 960 ? 'gt'
          :           'gp';
    if (m !== prevMedia) {
      $('.block').each(function(){
        var $this = $(this),
            rgrid = $this.data('rgrid'),
            klass = $this.attr('class');
        if (typeof rgrid === 'object') {
          klass = klass.replace(/ ?gr[0-9]+(-[0-9]+)\b/, '');
          if (rgrid[m])
            klass += ' gr' + rgrid[m];
          else if (rgrid.gr)
            klass += ' gr' + rgrid.gr;
          $this.attr('class', klass);
        }
      });
      prevMedia = m;
    }
  };
  $(window).resize(adjustGrid);
  adjustGrid();
});
