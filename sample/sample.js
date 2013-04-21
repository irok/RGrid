$(function(){
  $('.box').each(function(){
    var $this = $(this),
        pcls = $this.parent().attr('class'),
        text = '';

    // box内にgridクラス名を表示する
    $.each(pcls.split(/\s/), function(){
      if (this.match(/^(g[rmtp])[0-9]+(-[0-9]+)?$/))
        text += '<p class="'+RegExp.$1+'">'+this+'<p>';
    });

    // 分かりやすくするため、消えることがあるboxの色を変える
    if (pcls.match(/\bg[rmtp]0\b/))
      $this.css('background-color', '#eec');

    // 分かりやすくするため、PCサイズでgridサイズ1のboxの色を変える
    if (pcls.match(/\bgp[0-9]+-1\b/) || pcls.match(/\bgr[0-9]+-1\b/) && !pcls.match(/\bgp[0-9]+/))
      $this.css('background-color', '#cce');
    $this.html(text);
  });
});
