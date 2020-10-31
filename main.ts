input.onButtonPressed(Button.A, function () {
    doleft()
})
function doright () {
    AlphaBot2.RunDelay(Dir.turnRight, predkosc, czas)
}
input.onButtonPressed(Button.AB, function () {
    doforward()
})
input.onButtonPressed(Button.B, function () {
    doright()
})
function doforward () {
    AlphaBot2.RunDelay(Dir.forward, predkosc, czas)
}
function doleft () {
    AlphaBot2.RunDelay(Dir.turnLeft, predkosc, czas)
}
let a5 = 0
let a4 = 0
let a3 = 0
let a2 = 0
let a1 = 0
let item: number[] = []
let predkosc = 0
let czas = 0
AlphaBot2.SensorCalibrated()
let max = AlphaBot2.ReadSensorMin()
let max_linia = 200
czas = 0.1
predkosc = 50
basic.forever(function () {
    item = AlphaBot2.readCalibrated()
    if (Math.round(item[0]) < max_linia) {
        a1 = 1
        led.plot(0, 0)
    } else {
        a1 = 0
        led.unplot(0, 0)
    }
    if (Math.round(item[1]) < max_linia) {
        a2 = 1
        led.plot(1, 0)
    } else {
        a2 = 0
        led.unplot(1, 0)
    }
    if (Math.round(item[2]) < max_linia) {
        a3 = 1
        led.plot(2, 0)
    } else {
        a3 = 0
        led.unplot(2, 0)
    }
    if (Math.round(item[3]) < max_linia) {
        a4 = 1
        led.plot(3, 0)
    } else {
        a4 = 0
        led.unplot(3, 0)
    }
    if (Math.round(item[4]) < max_linia) {
        a5 = 1
        led.plot(4, 0)
    } else {
        a5 = 0
        led.unplot(4, 0)
    }
    basic.pause(500)
    if (a1 == 0 && a2 == 0 && a3 == 1 && a4 == 0 && a5 == 0 || a1 == 0 && a2 == 1 && a3 == 1 && a4 == 1 && a5 == 0 ) {
        doforward()
    }
    if (a1 == 0 && a2 == 1 && a3 == 0 && a4 == 0 && a5 == 0 || a1 == 0 && a2 == 1 && a3 == 1 && a4 == 0 && a5 == 0 || a1 == 1 && a2 == 1 && a3 == 1 && a4 == 0 && a5 == 0 || a1 == 1 && a2 == 0 && a3 == 0 && a4 == 0 && a5 == 0 || a1 == 1 && a2 == 1 && a3 == 0 && a4 == 0 && a5 == 0) {
        doleft()
    }
})
