input.onButtonPressed(Button.A, function () {
    music.ringTone(440)
    basic.pause(100)
    music.ringTone(392)
    basic.pause(100)
    music.ringTone(349)
    basic.pause(100)
    music.ringTone(440)
    basic.pause(100)
    music.ringTone(262)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
})
