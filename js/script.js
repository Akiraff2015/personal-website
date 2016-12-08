$(() => {
  var cssSelector = {
    display: (selector) => {
      return $(selector).css({'display':'none'});
    },
    progressBarFill: (selector, value) => {
      return $(selector).css({'width': value*4 <= 400 ? value * 4 + "px" : "400px"});
    }
  };

  var cssAnimate = {
    progressBarAnimate: (selector, value) => {
      return $(selector).stop().animate({'width': value*4 <= 400 ? value * 4 + "px" : "400px"}, 1500);
    }
  };

  var menuBar = {
    about: '#aboutme',
    resume: '#resume',
    portfolio: '#portfolio',
    contact: '#contactme'
  };

  var skills = {
    html: { value: 90, text: '#html' },
    css: { value: 80, text: '#css' },
    javascript: { value: 70, text: '#javascript' },
    python: { value: 60, text: '#python' },
    java: { value: 50, text: '#java' },
    ruby: { value: 40, text: '#ruby' },
    photoshop: { value: 30, text: '#photoshop'},
    premierepro: { value: 25, text: '#premierepro'},
    illustrator: { value: 20, text: '#illustrator'},
    flash: {value: 15, text: '#flash'}
  };

  // Progress Bar Animation
  _.each(skills, (obj) => cssAnimate.progressBarAnimate(obj.text, obj.value));

  // Displays the skill graph at about.html
  _.each(skills, (obj) => cssSelector.progressBarFill(obj.text, obj.value));

  // Don't display on index.html
  _.each(menuBar, (value) => cssSelector.display(value));

  // Displays the circle, when user mouse over in the grey box.
  $('#shade-grey').on('mouseover', () => {
    _.each(menuBar, (value) => $(value).fadeIn(400));
  });
});

