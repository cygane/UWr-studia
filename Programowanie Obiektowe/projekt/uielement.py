import pygame


class UIElement:
    def __init__(self, x, y, text,font,color):
        self.x, self.y = x, y
        self.text = text
        self.font = font
        self.color = color

    def draw(self, screen, font_size):
        font = pygame.font.SysFont(self.font, font_size)
        text = font.render(self.text, True, self.color)
        screen.blit(text, (self.x, self.y))
