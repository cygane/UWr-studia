import pygame
from CONST import *


class Board:
    def __init__(self):
        self.board_list = [["" for i in range(BOARD_SIZE)] for i in range(BOARD_SIZE)]

    def draw_board(self, screen):
        for row in range(0, TILESIZE * 2, TILESIZE):
            pygame.draw.line(screen, WHITE, (MARGIN_X + row + TILESIZE, MARGIN_Y),
                             (MARGIN_X + row + TILESIZE, MARGIN_Y + BOARD_SIZE * TILESIZE), 4)

        for col in range(0, TILESIZE * 2, TILESIZE):
            pygame.draw.line(screen, WHITE, (MARGIN_X, MARGIN_Y + col + TILESIZE),
                             (MARGIN_X + BOARD_SIZE * TILESIZE, MARGIN_Y + col + TILESIZE), 4)

    def is_clicked(self, mouse_x, mouse_y):
        for row in range(len(self.board_list)):
            for col in range(len(self.board_list[row])):
                x, y = board_to_pixel(col, row)
                if x <= mouse_x <= x + TILESIZE and y <= mouse_y <= y + TILESIZE and self.board_list[row][col] == "":
                    return row, col

        return None, None

    def is_board_full(self):
        return not any("" in row for row in self.board_list)
