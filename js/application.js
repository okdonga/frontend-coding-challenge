$(document).ready(function() {
  // randomly generate the initial tab to be selected
  // add active class tab
  var randomNo = Math.floor(Math.random() * (5) + 1);
  var contentName = 'menu-' + randomNo;
  var className = 'menu-' + randomNo + '-tab';

  $("." + className).parent().addClass("selected");
  ($("." + contentName)).show();

  // on click, generate corresponding tab content
  $('nav>ul>li>a').click(function(event) {
    event.preventDefault();
    $('section>div').css('display', 'none');
    $("." + className).parent().removeClass('selected');

    var selectedContent = $(this).attr('href');
    var selectedClassName = selectedContent + '-tab'
    $("." + selectedClassName).parent().addClass("selected");
    $("." + selectedContent).show();
  });
})
