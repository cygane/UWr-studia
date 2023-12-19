import pygame
import pygame_gui
import random


class Text_input:
    def __init__(self, w, h, ww, hh, manager, object_id, multi):
        self.multi = multi
        self.w = w
        self.h = h
        self.ww = ww
        self.hh = hh
        self.manager = manager
        self.obj_id = object_id
        if multi:
            self.files = ['player1', 'player2']
        else:
            self.file = 'player'

    def draw(self):
        pygame_gui.elements.UITextEntryLine(
            relative_rect=pygame.Rect((self.w, self.h), (self.ww, self.hh)),
            manager=self.manager,
            object_id=self.obj_id)

    def save(self, user_name, file):
        f = open(file, 'w')
        f.write(user_name)
        f.close()

    def read_and_randomize(self):
        lottery = random.randint(0, 1)
        if self.multi:
            fil = self.files[lottery]
            f = open(fil, 'r')
            to_write = f.readline()
        else:
            fil = self.file
            if lottery == 1:
                to_write = 'AI'
            else:
                f = open(fil, 'r')
                to_write = f.readline()

        return to_write
