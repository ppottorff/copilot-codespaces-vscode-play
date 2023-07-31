function skillsMember() {
  $('.skills__member').each(function () {
    var $this = $(this);
    var percent = $this.data('percent');
    var $progressBar = $this.find('.skills__member-progress');
    $progressBar.width(percent + '%');
  });
}