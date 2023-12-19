import pygame
from CONST import *

class Icon:
    def __init__(self, x, y, text):
        self.x, self.y = x, y
        self.text = text

    def draw(self, screen):
        font = pygame.font.SysFont("Consolas", 70)
        text = font.render(self.text, True, WHITE)
        font_size = font.size(self.text)
        draw_x = self.x + (TILESIZE/2) - font_size[0] / 2
        draw_y = self.y + (TILESIZE/2) - font_size[1] / 2
        screen.blit(text, (draw_x, draw_y))
