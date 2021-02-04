//sets the spider logo to the gif if element is hovered over. Sets it back if mouse goes off
$('#hovergif').mouseover(function() {
  $(this).attr("src", "/assets/images/LogoAnimation.gif");
});
$('#hovergif').mouseout(function() {
  $(this).attr("src", "/assets/images/logo-large.png");
});
