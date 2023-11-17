// check if dom is ready
function domReady(fn) {
    if (document.readyState == "complete" || document.readyState == "interactive") {
        setTimeout(fn, 1)

    } else {
        document.addEventListener("DOMContentLoaded", fn)
    }
}
domReady(function () {
    var myqr = document.getElementById('qr-result')
    //if qr code found
    function onScanSuccess(decodeText) {
        myqr.innerHTML = `<a href="${decodeText}">${decodeText}</a>`
    }
    //render your camera
    var htmlscanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 })
    htmlscanner.render(onScanSuccess)
})
