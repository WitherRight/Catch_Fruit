def on_button_pressed_a():
    player.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    player.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

player: game.LedSprite = None
player = game.create_sprite(2, 2)
fruit = game.create_sprite(2, 2)

def on_forever():
    pass
basic.forever(on_forever)
