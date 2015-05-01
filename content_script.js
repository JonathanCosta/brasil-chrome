var clickedEl = null;

document.addEventListener('mousedown', function(event) {
    if(event.button == 2) {
        clickedEl = event.target;
    }
}, true);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    clickedEl.value = request;

    var changeEvent = new Event('change', {
        'bubbles': true,
        'cancelable': false
    });

    clickedEl.dispatchEvent(changeEvent);
});