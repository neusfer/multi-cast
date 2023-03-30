input.onButtonPressed(Button.A, function () {
    radio.sendString("que tal?")
    basic.showIcon(IconNames.EigthNote)
    basic.pause(200)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("bn y tu?")
    basic.showIcon(IconNames.EigthNote)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("E B G F E B G F ", 36)
})
radio.setGroup(155)
