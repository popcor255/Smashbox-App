var deferredPrompt;

function init() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
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
  window.addEventListener("beforeinstallprompt", function(e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;
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
