function init() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("sw.js")
        .then(registration => {
          console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

init();

window.onload = function main() {
  var master_container = document.getElementById("master-container");
  var swiper = new Swipe(master_container);

  swiper.onLeft(function() {
    window.history.back();
  });

  window.addEventListener("beforeinstallprompt", function(e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    title = document.getElementById("title");
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    (function() {
      var x = 1500; // 1500 miliseconds = 1.5 seconds
      var mousePressed = false;
      var timePressed = 0;
      var timeHolding = 0;

      function check() {
        timeHolding = new Date().getTime() - timePressed;
        if (timeHolding >= x) {
          promptInstall();
        }
      }

      title.addEventListener(
        "mousedown",
        function(ele) {
          console.log(ele);

          if (!mousePressed) {
            mousePressed = true;
            timePressed = new Date().getTime(); // or Date.now()
            setTimeout(function() {
              check();
            }, x);
          }
        },
        false
      );

      title.addEventListener(
        "mouseup",
        function() {
          mousePressed = false;
          timePressed = new Date().getTime();
        },
        false
      );
    })();
  });
};

function promptInstall() {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choiceResult => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
  });
}

function getLocation(ele) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    ele.innerHTML = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    ele.value = position.coords.latitude + "," + position.coords.longitude;
  }
}

function prompt() {
  swal(
    {
      title: "Search:",
      text: "",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      inputPlaceholder: "Lets find what your looking for"
    },
    function(inputValue) {
      if (inputValue === false) return false;
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false;
      }
      window.location = "/payment.html";
    }
  );
}

class Swipe {
  constructor(element) {
    this.xDown = null;
    this.yDown = null;
    this.element =
      typeof element === "string" ? document.querySelector(element) : element;

    this.element.addEventListener(
      "touchstart",
      function(evt) {
        this.xDown = evt.touches[0].clientX;
        this.yDown = evt.touches[0].clientY;
      }.bind(this),
      false
    );
  }

  onLeft(callback) {
    this.onLeft = callback;

    return this;
  }

  onRight(callback) {
    this.onRight = callback;

    return this;
  }

  onUp(callback) {
    this.onUp = callback;

    return this;
  }

  onDown(callback) {
    this.onDown = callback;

    return this;
  }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    this.xDiff = this.xDown - xUp;
    this.yDiff = this.yDown - yUp;

    if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
      // Most significant.
      if (this.xDiff > 0) {
        this.onLeft();
      } else {
        this.onRight();
      }
    } else {
      if (this.yDiff > 0) {
        this.onUp();
      } else {
        this.onDown();
      }
    }

    // Reset values.
    this.xDown = null;
    this.yDown = null;
  }

  run() {
    this.element.addEventListener(
      "touchmove",
      function(evt) {
        this.handleTouchMove(evt);
      }.bind(this),
      false
    );
  }
}
