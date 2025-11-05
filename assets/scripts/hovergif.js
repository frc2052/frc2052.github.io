//sets the spider logo to the gif if element is hovered over. Sets it back if mouse goes off
$('#hovergif').mouseover(function() {
  $(this).attr("src", "/assets/images/logo/LogoAnimation.gif");
});
$('#hovergif').mouseout(function() {
  $(this).attr("src", "/assets/images/logo/logo-large.png");
});


//For button code


// Add button hover effects using jQuery
$(document).ready(function() {
    // Add custom button styles
  $('.linkbutton').css({
    'border-radius': '15px',  // Increased roundness
    'transition': 'all 0.3s ease',
    'border': '2px solid transparent'  // Prepare for hover effect
  });

  // Add hover effects
  $('.linkbutton').hover(
    function() {
      // Mouse enter
      $(this).css({
        'transform': 'scale(1.05)',  // Bigger scale effect
        'box-shadow': '0 8px 15px rgba(0, 0, 0, 0.2)',  // More pronounced shadow
        'cursor': 'pointer'
      });
    },
    function() {
      // Mouse leave
      $(this).css({
        'transform': 'scale(1)',
        'box-shadow': 'none'
      });
    }
  );
});
