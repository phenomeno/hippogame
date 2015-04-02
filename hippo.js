$(function(){

  var fakehippo = "<img src='nonhippo.jpg' style='float:left'>";
  var realhippo = "<img src='jyp.jpg' width='560' height='336' id='2' style='float:left'/>";
  var fakeMsg = "This is not the hippo, choose again!"
  var realMsg = "You found the hippo! :3!!!"
  var flag = 0;
  var msg = $('#msg');

  $('#playAgain').hide();

  $("#block1").click( function() {

    //$(this).hide();
    randomContent($(this));
  });

  $('#block2').click( function() {
    //$(this).hide();
    randomContent($(this));
  });

  $('#playAgain').click(function() {
    location.reload();
  });

  function randomContent(_this) {
    var x = Math.random();
    if (flag == 0) {

      if (x<= 0.5) {
        _this.replaceWith(fakehippo);
        flag = 1;
        _this.hide();
        msg.html(fakeMsg);
      } else {
        _this.replaceWith(realhippo);
        flag = 2;
        _this.hide();
        msg.html(realMsg);
        $('#playAgain').show();
      }

    } else {

      if (flag == 1) {
        _this.replaceWith(realhippo);
        msg.html(realMsg);
        $('#playAgain').show();
      } else {
        msg.html("You've already found the real hippo.");
      }

    }
  };


});
