// ================================
// GOOGLE ANALYTICS EVENT TRACKING
// ================================

function trackEvent(eventName, itemName) {
    if (typeof gtag === "function") {
        gtag("event", eventName, {
            item_name: itemName
        });
    }
}


// ================================
// SMOOTH INTERNAL NAVIGATION
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// ================================
// TRACK PDF DOWNLOADS
// ================================

document.querySelectorAll('a[download]').forEach(link => {

    link.addEventListener("click", function() {

        if (typeof gtag === "function") {

            gtag("event", "file_download", {
                file_name: this.getAttribute("href")
            });

        }

    });

});


// ================================
// TRACK EXTERNAL LINKS
// ================================

document.querySelectorAll('a[target="_blank"]').forEach(link => {

    link.addEventListener("click", function() {

        if (typeof gtag === "function") {

            gtag("event", "external_link_click", {
                link_url: this.href
            });

        }

    });

});
