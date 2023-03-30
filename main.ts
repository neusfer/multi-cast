input.onButtonPressed(Button.A, function () {
    radio.sendString("hola")
    basic.showIcon(IconNames.EigthNote)
    basic.pause(200)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("hola")
    basic.showIcon(IconNames.EigthNote)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    radio.sendString("hola")
    basic.showIcon(IconNames.EigthNote)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(111)
