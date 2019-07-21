//install prompt on-hold
window.addEventListener("beforeinstallprompt", function(e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    //append the function the title/header icon on nav
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