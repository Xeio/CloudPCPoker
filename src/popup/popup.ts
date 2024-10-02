/// <reference path="../lib/chrome/index.d.ts" />

window.onload = async () => {
    let {startHour, endHour} = await chrome.storage.local.get({'startHour': '6', 'endHour': '18'});
    
    let startOfDay = document.getElementById('startOfDay') as HTMLInputElement
    let endOfDay = document.getElementById('endOfDay') as HTMLInputElement

    startOfDay.value = startHour
    endOfDay.value = endHour

    startOfDay.onchange = async () => {
        if(endOfDay.value != ''){
            await chrome.storage.local.set({'startHour': startOfDay.value})
        }
    }

    endOfDay.onchange = async () => {
        if(endOfDay.value != ''){
            await chrome.storage.local.set({'endHour': endOfDay.value})
        }
    }
}