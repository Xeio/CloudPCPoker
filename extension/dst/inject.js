"use strict";
async function fireKeyEvent() {
    let { startHour, endHour } = await chrome.storage.local.get({ 'startHour': '6', 'endHour': '18' });
    const currentHour = new Date().getHours();
    if (currentHour < startHour || currentHour > endHour)
        return;
    let input = document.querySelector('#client-main-container #inputcontainer input[type=password]');
    if (input instanceof HTMLInputElement) {
        let keyEvent = new KeyboardEvent("keydown", {
            key: "ScrollLock",
            keyCode: 145
        });
        input.dispatchEvent(keyEvent);
        await new Promise(i => setTimeout(i, 100));
        input.dispatchEvent(keyEvent);
    }
}
setInterval(fireKeyEvent, 5 * 60 * 1000);
