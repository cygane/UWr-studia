#window
WIDTH = 750
HEIGHT = 750

#text
TEXT_COL = (255, 255, 255)
WHITE = (255, 255, 255)
DARKGREY = (40, 40, 40)
LIGHTGREY = (100, 100, 100)
GREEN = (0, 128, 0)


#variables to changing window
MULTI = False
GAME_MAIN = True
GAME_DATA = False
GAME_DRAW = False
GAME_PLAY = False

#loading bar
LOADING_FINISH = False
LOADING_PROGRESS = 0
WORK = 50000000

#transform images
SCALE = 0.75

#game settings
TILESIZE = 200
BOARD_SIZE = 3

MARGIN_X = int((WIDTH - (BOARD_SIZE * TILESIZE)) / 2)
MARGIN_Y = int((HEIGHT - (BOARD_SIZE * TILESIZE)) / 2)


def board_to_pixel(x, y):
    return MARGIN_X + TILESIZE * x, MARGIN_Y + TILESIZE * y




