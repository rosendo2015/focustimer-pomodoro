import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,  
    displayMinutes,
    displaySeconds
} from "./elements.js"

import { Events } from "./events.js"

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset,

})

const sound = Sound()

Events({controls,timer,sound})


