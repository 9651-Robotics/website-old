//from stackoverflow question
$('.live-preview').change(function(){
  var $this = $(this);
  $('.' + $this.attr('id') + '').html($this.val());
  document.getElementById('alert-nest').innerHTML= 'id';
});
$('.live-preview').keyup(function(){
  var $this = $(this);
  $('.' + $this.attr('id') + '').html($this.val());
  document.getElementById('alert-nest').innerHTML= 'id';
});