$(document).ready(function() {
  // randomly generate the initial tab to be selected
  // add active class tab
  var randomNo = Math.floor(Math.random() * (5) + 1);
  var contentName = 'menu-' + randomNo;
  var className = 'menu-' + randomNo + '-tab';

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
    // displayThree();
    $('section>div').css('display', 'none');
    $('nav>ul>li').removeClass('selected');
    var selectedContent = $(this).attr('href');
    var selectedClassName = selectedContent + '-tab'
    $("." + selectedClassName).parent().addClass("selected");
    $("." + selectedContent).show();
  });


  // ** MENU 3 ** // make this into a function

  // hide everything
  // function displayThree() {
  //   var threadTotal = $('.deck>ul>li');
  //   threadTotal.css('display', 'none');
  //   console.log(threadTotal);
  //   var threadOne = threadTotal.slice(0,3);
  //   var threadTwo = threadTotal.slice(3,6);
  //   var threadThree = threadTotal.slice(5,8);
  //   // show always only three by default

  //   var currentImg = $('.deck-top').children().prop('src');
  //   var currentDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent();
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
  // }


  // on click, display enlarged image
  $('.deck>ul>li').click(function() {
    // displayThree();
    // console.log(this);
    // $(this).children().addClass('current');
    var selectedImg = $(this).children().clone();
    $('.deck-top').children().replaceWith(selectedImg);
    $('.deck-top').children().removeClass("img-s").addClass("img-l");
    // $('.arrow-l').show();
    // if its the last item hide, else show
    var currentImg = $('.deck-top').children().prop('src');
    // console.log(currentImg);
    if (currentImg == $('.deck>ul>li:nth-child(1)').children().prop('src')) {
      $('.arrow-l').hide();
    } else {
      $('.arrow-l').show();
    }
    if (currentImg == $('.deck>ul>li:nth-child(8)').children().prop('src')) {
      $('.arrow-r').hide();
    } else {
      $('.arrow-r').show();
    }
  });

  $('.arrow-l').click(function() {
    // displayThree();
    $('.arrow-r').show();
    var currentImg = $('.deck-top').children().prop('src');
    var prevDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent().prev();
    var prevImg = prevDeck.children().clone();
    $('.deck-top').children().replaceWith(prevImg);
    $('.deck-top').children().removeClass("img-s").addClass("img-l");
    if (currentImg == $('.deck>ul>li:nth-child(2)').children().prop('src')) {
      $('.arrow-l').hide();
    }
  });

  $('.arrow-r').click(arrowRightClick);
})

var arrowRightClick = function(event) {
    // displayThree();
    // var target = event.target;
    // if target.parent().attr('class') ==
    $('.arrow-l').show();
    var currentImg = $('.deck-top').children().prop('src');
    var prevDeck = $('.deck').find('img[src$="' + currentImg + '"]').parent().next();
    var prevImg = prevDeck.children().clone();
    $('.deck-top').children().replaceWith(prevImg);
    $('.deck-top').children().removeClass("img-s").addClass("img-l");
    if (currentImg == $('.deck>ul>li:nth-child(7)').children().prop('src')) {
      $('.arrow-r').hide();
    }
}

var checkForm = function(form) {
  if (form.password.value == " ") {
    alert('not ready');
  }
}