#سقوط المطر 
def on_forever():
 rain = game.create_sprite(0, 2)
 for i in range (4):
  rain.change (LedSpriteProperty.Y, 1)
  rain. delete()
basic. forever(on_forever)
