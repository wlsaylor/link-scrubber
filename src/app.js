import './_custom.scss';
import 'bootstrap';
import Noty from 'noty';
import ClipboardJS from 'clipboard';
import '@fortawesome/fontawesome-free/js/all';

window.addEventListener('DOMContentLoaded', (event) => {
   new ClipboardJS('.btn');
});

window.scrub = () => {
    const urlScrubInput = document.getElementById("urlScrubInput");
    const scrubbedURLElement = document.getElementById("scrubbedURL");
    const copyClipboardButton = document.getElementById("copyClipboardButton");
    const url = urlScrubInput.value;
    const urlSansQuery = url.split('?')[0];
    if (!urlSansQuery) {
        displayError('Please enter a URL');
        return;
    }
    scrubbedURLElement.href = urlSansQuery;
    scrubbedURLElement.innerHTML = urlSansQuery;
    urlScrubInput.value = "";
    copyClipboardButton.classList.remove('d-none');
}

window.displayError = (message) => {
    new Noty({
        type: 'error',
        theme: 'bootstrap-v4',
        text: message,
        timeout: 3000,
    }).show();
}

window.displaySuccess = (message) => {
    new Noty({
        type: 'success',
        theme: 'bootstrap-v4',
        text: message,
        timeout: 1500,
    }).show();
}
