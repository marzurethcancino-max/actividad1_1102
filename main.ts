let TEMP = 0
input.onButtonPressed(Button.A, function () {
    TEMP = input.temperature()
    if (TEMP > 30) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showString("Ventiladores encendidos")
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showString("Ventiladores apagados ")
    }
})
