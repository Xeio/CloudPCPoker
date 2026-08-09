"use strict";
async function fireKeyEvent() {
    let { startHour, endHour } = await chrome.storage.local.get({ 'startHour': '6', 'endHour': '18' });
    const currentHour = new Date().getHours();
    if (currentHour < startHour || currentHour > endHour)
        return;
    let input = document.querySelector('#client-main-container .globalcontainer input[type="password"]');
    if (input instanceof HTMLInputElement) {
        let keyData = {
            key: 'ScrollLock',
            code: 'ScrollLock',
            keyCode: 145,
            which: 145,
            bubbles: true,
            cancelable: true
        };
        let keyDownEvent = new KeyboardEvent('keydown', keyData);
        let keyUpEvent = new KeyboardEvent('keyup', keyData);
        input.dispatchEvent(keyDownEvent);
        await new Promise(i => setTimeout(i, 100));
        input.dispatchEvent(keyUpEvent);
        await new Promise(i => setTimeout(i, 200));
        input.dispatchEvent(keyDownEvent);
        await new Promise(i => setTimeout(i, 100));
        input.dispatchEvent(keyUpEvent);
    }
}
setInterval(fireKeyEvent, 5 * 60 * 1000);
