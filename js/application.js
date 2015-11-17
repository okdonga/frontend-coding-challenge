$(document).ready(function() {
  // randomly generate the initial tab to be selected
  // add active class tab
  var randomNo = Math.floor(Math.random() * (5) + 1);
  var contentName = 'menu-' + randomNo;
  var className = 'menu-' + randomNo + '-tab';
  displayThree();
  $("." + className).parent().addClass("selected");
  ($("." + contentName)).show();

  // change page layout
  $('.layout').click(function() {
    // replace first with fourth
    // function ab() {
      // console.log("running")
      var first = $('.first').clone();
      var second = $('.second').clone();
      var third = $('.third').clone();
      var fourth = $('.fourth').clone();

      //class change
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
      //class change
      // $('.second').removeClass('span-4-t').addClass('span-8-t');
    // }
    // ab().toggleClass
  })

  // on click, generate corresponding tab content
  $('nav>ul>li>a').click(function(event) {
    event.preventDefault();

    $('section>div').css('display', 'none');
    $('nav>ul>li').removeClass('selected');
    var selectedContent = $(this).attr('href');
    var selectedClassName = selectedContent + '-tab'
    $("." + selectedClassName).parent().addClass("selected");
    $("." + selectedContent).show();
  });


  // ** MENU 3 ** // make this into a function

  // hide everything

  //   // console.log(currentDeck)
  //   // console.log(threadTotal.indexOf(currentDeck));

  //   // if (threadOne.includes(currentDeck)) { alert('true')}
  //   // if currentImg is included in the thread, display the thread


  //   // var currentDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent();
  //   // var leftDeck = currentDeck.prev();
  //   // console.log(leftDeck);
  //   // var rightDeck = currentDeck.next();
  //   // $(currentDeck).show();
  //   // $(leftDeck).show();
  //   // $(rightDeck).show();



  // on click, display enlarged image
  $('.deck>ul>li').click(function() {

    // console.log(this);
    // $(this).children().addClass('current');
    var selectedImg = $(this).children().clone();
    $('.deck-top').children().replaceWith(selectedImg);
    $('.deck-top').children().removeClass("img-xxs").addClass("img-xxl");
    // $('.arrow-l').show();
    // if its the last item hide, else show
    var currentImg = $('.deck-top').children().prop('src');
    // console.log(currentImg);
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
  });

  // displayThree();

  $('.arrow-l').click(function() {

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
  });

  $('.arrow-r').click(arrowRightClick);

  // MENU 4 : form validation
  $('#submit').click(genderValidation);
    // agmtValidation;
})


var arrowRightClick = function(event) {

  // var target = event.target;
  // if target.parent().attr('class') ==
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

var checkForm = function(form) {
  if (form.password.value == " ") {
    alert('not ready');
  }
}

var displayThree = function() {
  var threadTotal = $('.deck>ul>li');
  threadTotal.css('display', 'none');
  var threadOne = threadTotal.slice(0,3);
  var threadTwo = threadTotal.slice(3,6);
  var threadThree = threadTotal.slice(5,8);
  var currentImg = $('.deck-top').children().prop('src');
  console.log(currentImg);
  var currentDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent();
  var id = (currentDeck.attr('id'));
  console.log(id);
  if (id == 'one' || id == "two" || id == "three") {
    threadOne.show();
  } else if (id == "four" || id == "five" || id == "six") {
    threadTwo.show();
  } else {
    threadThree.show();
  }
}

var genderValidation = function(event) {
  var isChecked = $("#gender>input[type=checkbox]:checked").length;
  if (!isChecked) {
    alert('Please select your gender.');
    return false
  }
}

var agmtValidation = function(event) {
  var isChecked = $("#agmt>input[type=checkbox]:checked").length;
  if (!isChecked) {
    alert('Please indicate that you accept the Terms and Conditions.');
    return false
  }
}