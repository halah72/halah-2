// سقوط المطر 
basic.forever(function on_forever() {
    let rain = game.createSprite(0, 2)
    for (let i = 0; i < 4; i++) {
        rain.change(LedSpriteProperty.Y, 1)
        rain.delete()
    }
})
