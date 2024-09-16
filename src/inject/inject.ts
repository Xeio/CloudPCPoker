async function fireKeyEvent() {
    // let canvas = document.querySelector('#canvascontainer canvas')
    // if(canvas instanceof HTMLCanvasElement){
    //     canvas.focus()
    // }

    let input = document.querySelector('#client-main-container > div:nth-child(1) > input[type=password]')
    if (input instanceof HTMLInputElement) {
        // let keyEvent = new KeyboardEvent("keydown", {
        //     key: "Insert",
        //     keyCode: 45
        // })

        let keyEvent = new KeyboardEvent("keydown", {
            key: "ScrollLock",
            keyCode: 145
        })

        input.dispatchEvent(keyEvent);

        await new Promise(i => setTimeout(i, 100))

        input.dispatchEvent(keyEvent);
    }
}

setInterval(fireKeyEvent, 5 * 60 * 1000);