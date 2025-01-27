window.onscroll = function() {scrollDown()};

function scrollDown() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("trending").style.opacity = "0";
  } else {
    document.getElementById("trending").style.opacity = "1";
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("watch-again").style.opacity = "0";
  } else {
    document.getElementById("watch-again").style.opacity = "1";
  }

  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.getElementById("new-releases").style.opacity = "0";
  } else {
    document.getElementById("new-releases").style.opacity = "1";
  }
} 