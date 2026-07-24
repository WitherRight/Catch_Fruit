input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let player: game.LedSprite = null
player = game.createSprite(2, 4)
let fruit = game.createSprite(randint(0, 4), 0)
let speed = 500
game.setScore(0)
game.setLife(3)
basic.forever(function () {
    fruit.set(LedSpriteProperty.Brightness, 100)
    basic.pause(100)
    fruit.set(LedSpriteProperty.Brightness, 250)
    basic.pause(100)
})
basic.forever(function () {
    basic.pause(500)
    fruit.change(LedSpriteProperty.Y, 1)
    if (player.isTouching(fruit)) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        game.addScore(1)
        fruit.set(LedSpriteProperty.Y, 0)
        fruit.set(LedSpriteProperty.X, randint(0, 4))
    } else if (fruit.get(LedSpriteProperty.Y) == 4) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        game.removeLife(1)
        fruit.set(LedSpriteProperty.Y, 0)
        fruit.set(LedSpriteProperty.X, randint(0, 4))
    }
    if (game.score() == 30) {
        speed += -30
    }
    if (game.score() == 20) {
        speed += -30
    }
    if (game.score() == 10) {
        speed += -30
    }
})
