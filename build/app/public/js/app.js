"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function init() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").then(function (registration) {
        console.log("SW registered: ", registration);
      })["catch"](function (registrationError) {
        console.log("SW registration failed: ", registrationError);
      });
    });
  }
}

init();

window.onload = function main() {
  var master_container = document.getElementById("master-container");
  var swiper = new Swipe(master_container);
  swiper.onLeft(function () {
    window.history.back();
  });
  window.addEventListener("beforeinstallprompt", function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    title = document.getElementById("title"); // Stash the event so it can be triggered later.

    deferredPrompt = e;

    (function () {
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

      title.addEventListener("mousedown", function (ele) {
        console.log(ele);

        if (!mousePressed) {
          mousePressed = true;
          timePressed = new Date().getTime(); // or Date.now()

          setTimeout(function () {
            check();
          }, x);
        }
      }, false);
      title.addEventListener("mouseup", function () {
        mousePressed = false;
        timePressed = new Date().getTime();
      }, false);
    })();
  });
};

function promptInstall() {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(function (choiceResult) {
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
  swal({
    title: "Search:",
    text: "",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    inputPlaceholder: "Lets find what your looking for"
  }, function (inputValue) {
    if (inputValue === false) return false;

    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false;
    }

    window.location = "/payment.html";
  });
}

var Swipe =
/*#__PURE__*/
function () {
  function Swipe(element) {
    _classCallCheck(this, Swipe);

    this.xDown = null;
    this.yDown = null;
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    this.element.addEventListener("touchstart", function (evt) {
      this.xDown = evt.touches[0].clientX;
      this.yDown = evt.touches[0].clientY;
    }.bind(this), false);
  }

  _createClass(Swipe, [{
    key: "onLeft",
    value: function onLeft(callback) {
      this.onLeft = callback;
      return this;
    }
  }, {
    key: "onRight",
    value: function onRight(callback) {
      this.onRight = callback;
      return this;
    }
  }, {
    key: "onUp",
    value: function onUp(callback) {
      this.onUp = callback;
      return this;
    }
  }, {
    key: "onDown",
    value: function onDown(callback) {
      this.onDown = callback;
      return this;
    }
  }, {
    key: "handleTouchMove",
    value: function handleTouchMove(evt) {
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
      } // Reset values.


      this.xDown = null;
      this.yDown = null;
    }
  }, {
    key: "run",
    value: function run() {
      this.element.addEventListener("touchmove", function (evt) {
        this.handleTouchMove(evt);
      }.bind(this), false);
    }
  }]);

  return Swipe;
}();