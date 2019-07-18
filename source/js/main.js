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
  var containerElement = document.body;
  var activeRegion = ZingTouch.Region(containerElement);
  var ele = document.getElementById("master-container");
  activeRegion.bind(ele, "swipe", function(e) {
    //Perform Operations
    console.log(e.detail);
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

function getOffsetLeft(elem) {
  var offsetLeft = 0;
  do {
    if (!isNaN(elem.offsetLeft)) {
      offsetLeft += elem.offsetLeft;
    }
  } while ((elem = elem.offsetParent));
  return offsetLeft;
}
