"use strict";
window.onload = async () => {
    let { startHour, endHour } = await chrome.storage.local.get({ 'startHour': '6', 'endHour': '18' });
    let startOfDay = document.getElementById('startOfDay');
    let endOfDay = document.getElementById('endOfDay');
    startOfDay.value = startHour;
    endOfDay.value = endHour;
    startOfDay.onchange = async () => {
        if (endOfDay.value != '') {
            await chrome.storage.local.set({ 'startHour': startOfDay.value });
        }
    };
    endOfDay.onchange = async () => {
        if (endOfDay.value != '') {
            await chrome.storage.local.set({ 'endHour': endOfDay.value });
        }
    };
};
