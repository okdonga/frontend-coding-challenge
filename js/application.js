$(document).ready(function() {

  /*
   *  Randomly generate the initial tab to be selected
   *  and add active class tab
   */
  var randomNo = Math.floor(Math.random() * (5) + 1);
  var contentName = 'menu-' + randomNo;
  var className = 'menu-' + randomNo + '-tab';
  displayThree();
  $("." + className).parent().addClass("selected");
  ($("." + contentName)).show();

  /*
   *  1. Toggle Feature : On toggle, change page layout
   */
  $('.layout').click(changeLayout);

  /*
   *  2. Tab : Generate corresponding tab content
   */
  $('nav>ul>li>a').click(displayTabContent);

  /*
   *  3. MENU 2 : On click, display enlarged image
   */
  $('.deck>ul>li').click(displayEnlarged);

  /*
   *  4. MENU 2 : On left arrow click, display next up image
   */
  $('.arrow-l').click(arrowLeftClick);


  /*
   *  5. MENU 2 : On right arrow click, display prev image
   */
  $('.arrow-r').click(arrowRightClick);

  /*
   *  6. MENU 4 : On submit, alert a message when at least one gender checkbox is not ticked
   */
  $('#submit').click(genderValidation);

})


  /*
   *  1. Toggle Feature : On toggle, change page layout
   */
  var changeLayout = function(event) {

    var first = $('.first').clone();
    var second = $('.second').clone();
    var third = $('.third').clone();
    var fourth = $('.fourth').clone();

    //class change : replace first with fourth
    $('.first').replaceWith(fourth);
    var revertClassName = $('.fourth').first().attr('class').replace('fourth', 'first');
    $('.fourth').first().attr('class', revertClassName);

    // class change
    $('.second').replaceWith(third);
    var revertClassName = $('.third').first().attr('class').replace('third', 'second');
    $('.third').first().attr('class', revertClassName);

    //class change
    $('.third').replaceWith(second);
    var revertClassName = $('.second').last().attr('class').replace('second', 'third');
    $('.second').last().attr('class', revertClassName);

    //class change
    $('.fourth').replaceWith(first);
    var revertClassName = $('.first').last().attr('class').replace('first', 'fourth');
    $('.first').last().attr('class', revertClassName);
  }


  /*
   *  2. Tab : Generate corresponding tab content
   */
  var displayTabContent = function(event) {
    event.preventDefault();

    $('section>div').css('display', 'none');
    $('nav>ul>li').removeClass('selected');

    var selectedContent = $(this).attr('href');

    var selectedClassName = selectedContent + '-tab'
    $("." + selectedClassName).parent().addClass("selected");
    $("." + selectedContent).show();
  }


  /*
   *  MENU 2 : Always display three deck images
   */
  var displayThree = function() {
    var threadTotal = $('.deck>ul>li');
    threadTotal.css('display', 'none');

    var threadOne = threadTotal.slice(0,3);
    var threadTwo = threadTotal.slice(3,6);
    var threadThree = threadTotal.slice(5,8);

    var currentImg = $('.deck-top').children().prop('src');
    var currentDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent();
    var id = (currentDeck.attr('id'));

    if (id == 'one' || id == "two" || id == "three") {
      threadOne.show();
    } else if (id == "four" || id == "five" || id == "six") {
      threadTwo.show();
    } else {
      threadThree.show();
    }
  }

  /*
   *  3. MENU 2 : On click, display enlarged image
   */
   var displayEnlarged = function() {
    var selectedImg = $(this).children().clone();
    $('.deck-top').children().replaceWith(selectedImg);
    $('.deck-top').children().removeClass("img-xxs").addClass("img-xxl");

    var currentImg = $('.deck-top').children().prop('src');

    if (currentImg == $('.deck>ul>li:nth-child(1)').children().prop('src')) {
      $('.arrow-l').css('visibility', 'hidden');
    } else {
      $('.arrow-l').css('visibility', 'visible');
    }

    if (currentImg == $('.deck>ul>li:nth-child(8)').children().prop('src')) {
      $('.arrow-r').css('visibility', 'hidden');
    } else {
      $('.arrow-r').css('visibility', 'visible');
    }

    displayThree();
   }

  /*
   *  4. MENU 2 : On left arrow click, display next up image
   */
   var arrowLeftClick = function() {
    $('.arrow-r').css('visibility', 'visible');

    var currentImg = $('.deck-top').children().prop('src');
    var prevDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent().prev();
    var prevImg = prevDeck.children().clone();

    $('.deck-top').children().replaceWith(prevImg);
    $('.deck-top').children().removeClass("img-xxs").addClass("img-xxl");

    if (currentImg == $('.deck>ul>li:nth-child(2)').children().prop('src')) {
      $('.arrow-l').css('visibility', 'hidden');
    }

    displayThree();
   }

   /*
    *  5. MENU 2 : On right arrow click, display prev image
    */
    var arrowRightClick = function(event) {
      $('.arrow-l').css('visibility', 'visible');

      var currentImg = $('.deck-top').children().prop('src');
      var prevDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent().next();
      var prevImg = prevDeck.children().clone();

      $('.deck-top').children().replaceWith(prevImg);
      $('.deck-top').children().removeClass("img-xxs").addClass("img-xxl");

      if (currentImg == $('.deck>ul>li:nth-child(7)').children().prop('src')) {
        $('.arrow-r').css('visibility', 'hidden');
      }

      displayThree();
    }

   /*
    *  6. MENU 4 : On submit, alert a message when at least one gender checkbox is not ticked
    */
    var genderValidation = function(event) {
      var isChecked = $("#gender>input[type=checkbox]:checked").length;

      if (!isChecked) {
        alert('Please select your gender.');
     }
    }


    var checkForm = function(form) {
      if (form.password.value == " ") {
        alert('not ready');
      }
    }

    var agmtValidation = function(event) {
      var isChecked = $("#agmt>input[type=checkbox]:checked").length;
      if (!isChecked) {
        alert('Please indicate that you accept the Terms and Conditions.');
        return false
      }
    }