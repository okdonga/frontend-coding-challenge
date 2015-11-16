$(document).ready(function() {
  console.log('here');

  // randomly generate the initial tab to be selected
  var randomNo = 2;
  // add active class tab
  var className = 'menu-' + randomNo;
  ($("." + className)).show()

  // on click, generate corresponding tab content
  $('nav>ul>li>a').click(function(event) {
    event.preventDefault();
    // move selected class tab
    // remove it from previous pos
    // .addClass('selected')
    $('section>div').css('display', 'none');
    var selectedContent = $(this).attr('href');
    ($("." + selectedContent)).show();
  });
})
