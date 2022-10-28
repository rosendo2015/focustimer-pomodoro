import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonSoundOff,

} from "./elements.js"

export function Events({ controls, timer, sound }) {

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })
    buttonStop.addEventListener('click', function () {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })
    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOff.classList.remove('hide')
        buttonSoundOn.classList.add('hide')
        sound.bgAudio.play()
    })
    buttonSoundOff.addEventListener('click', function () {
        buttonSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sound.bgAudio.pause()
    })
    buttonSet.addEventListener('click', function () {
        let newMinutes = controls.getMinutes()
        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
}