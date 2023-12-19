import button
import threading
from text_input import *
from TicTacToe import *
from board import *


class Game:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((WIDTH, HEIGHT))
        pygame.display.set_caption("TicTacToe")
        self.clock = pygame.time.Clock()
        self.f = "arialblack"
        self.size = 40
        self.MULTI = False
        self.GAME_MAIN = True
        self.GAME_DATA = False
        self.GAME_DRAW = False
        next_img = pygame.image.load('button_next.png').convert_alpha()
        multi_img = pygame.image.load('button_multiplayer.png').convert_alpha()
        single_img = pygame.image.load('button_singleplayer.png').convert_alpha()
        self.next_button = button.Button(550, 480, next_img, 1)
        self.single_button = button.Button(25, 350, single_img, 1)
        self.multi_button = button.Button(380, 350, multi_img, 1)
        self.manager = pygame_gui.UIManager((1600, 900))
        self.g = TTT()
        self.player_turn = self.g.player_turn

    def get_user_name(self):
        run1 = True
        while run1:
            UI_REFRESH_RATE = self.clock.tick(60) / 1000
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if (event.type == pygame_gui.UI_TEXT_ENTRY_FINISHED and
                        event.ui_object_id == self.t3.obj_id):
                    self.t3.save(event.text, 'player')

                self.manager.process_events(event)

            self.manager.update(UI_REFRESH_RATE)

            self.screen.fill((52, 78, 91))
            UIElement(120, 100, "Enter the player's name", self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(50, 200, "Player:", self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(120, 350, "Press ENTER to submit", self.f, TEXT_COL).draw(self.screen, self.size)
            if self.next_button.draw(self.screen):
                run1 = False

            self.manager.draw_ui(self.screen)

            pygame.display.update()

    def get_user_names(self):
        run1 = True
        while run1:
            UI_REFRESH_RATE = self.clock.tick(60) / 1000
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()
                if event.type == pygame_gui.UI_TEXT_ENTRY_FINISHED:
                    if event.ui_object_id == self.t1.obj_id:
                        self.t1.save(event.text, 'player1')
                    else:
                        self.t2.save(event.text, 'player2')

                self.manager.process_events(event)

            self.manager.update(UI_REFRESH_RATE)

            self.screen.fill((52, 78, 91))
            UIElement(120, 100, "Enter the players name", self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(50, 200, "Player 1:", self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(50, 300, "Player 2:", self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(120, 400, "Press ENTER to submit", self.f, TEXT_COL).draw(self.screen, self.size)
            if self.next_button.draw(self.screen):
                run1 = False

            self.manager.draw_ui(self.screen)

            pygame.display.update()

    def doWork(self):
        global LOADING_FINISH, LOADING_PROGRESS

        for i in range(WORK):
            math_equation = 523687 / 789456 * 89456
            LOADING_PROGRESS = i

        LOADING_FINISH = True

    def randomization(self):
        global LOADING_FINISH, LOADING_PROGRESS
        clock = pygame.time.Clock()
        tmp1 = pygame.image.load("Loading Bar Background.png")
        loading_bg = pygame.transform.scale(tmp1, (771 * SCALE, 165 * SCALE))
        loading_bg_rect = loading_bg.get_rect(center=(370, 300))
        tmp2 = pygame.image.load("Loading Bar.png")
        loading_bar = pygame.transform.scale(tmp2, (8 * SCALE, 166 * SCALE))
        loading_bar_rect = loading_bar.get_rect(midleft=(105, 300))
        loading_bar_width = 8 * SCALE

        run3 = True
        while run3:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()

            self.screen.fill((52, 78, 91))
            UIElement(250, 100, "LOADING...", self.f, TEXT_COL).draw(self.screen, self.size)

            if not LOADING_FINISH:
                loading_bar_width = LOADING_PROGRESS / WORK * 530

                loading_bar = pygame.transform.scale(loading_bar, (int(loading_bar_width), 150 * SCALE))
                loading_bar_rect = loading_bar.get_rect(midleft=(105, 300))

                self.screen.blit(loading_bg, loading_bg_rect)
                self.screen.blit(loading_bar, loading_bar_rect)
            else:
                run3 = False

            pygame.display.update()
            self.clock.tick(60)

    def who_start(self, name):
        run4 = True
        while run4:
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()

            self.screen.fill((52, 78, 91))

            UIElement(150, 250, name, self.f, TEXT_COL).draw(self.screen, self.size)
            UIElement(150, 295, 'starts the game', self.f, TEXT_COL).draw(self.screen, self.size)

            if self.next_button.draw(self.screen):
                run4 = False

            pygame.display.update()

    def run(self):
        run = True
        while run:

            self.screen.fill((52, 78, 91))

            if self.GAME_MAIN:
                UIElement(110, 200, "Choose the player mode", self.f, TEXT_COL).draw(self.screen, self.size)
                if self.single_button.draw(self.screen):
                    self.GAME_MAIN = False
                    self.GAME_DATA = True
                if self.multi_button.draw(self.screen):
                    self.GAME_MAIN = False
                    self.MULTI = True
                    self.GAME_DATA = True
            elif self.GAME_DATA is True and self.MULTI is True:
                self.t1 = Text_input(240, 215, 300, 40, self.manager, '#multi_player_one', self.MULTI)
                self.t2 = Text_input(240, 315, 300, 40, self.manager, '#multi_player_two', self.MULTI)
                self.t1.draw()
                self.t2.draw()
                self.get_user_names()
                self.GAME_DATA = False
                self.GAME_DRAW = True
            elif self.GAME_DATA is True and self.MULTI is False:
                self.t3 = Text_input(200, 215, 300, 40, self.manager, '#single_player', self.MULTI)
                self.t3.draw()
                self.get_user_name()
                self.GAME_DATA = False
                self.GAME_DRAW = True
            elif self.GAME_DRAW is True and self.MULTI is True:
                threading.Thread(target=self.doWork).start()
                self.randomization()
                to_print = self.t1.read_and_randomize()
                self.who_start(to_print)
                self.first = to_print
                f = open('player1', 'r')
                x = f.readline()
                if to_print != x:
                    self.second = x
                else:
                    f = open('player2', 'r')
                    self.second = f.readline()
                self.GAME_DRAW = False
                self.GAME_PLAY = True
            elif self.GAME_DRAW is True and self.MULTI is False:
                threading.Thread(target=self.doWork).start()
                self.randomization()
                to_print = self.t3.read_and_randomize()
                if to_print == 'AI':
                    self.player_turn = False
                    f = open('player', 'r')
                    self.second = f.readline()
                else:
                    self.second = 'AI'
                self.who_start(to_print)
                self.first = to_print
                self.GAME_DRAW = False
                self.GAME_PLAY = True
            elif self.GAME_PLAY is True and self.MULTI is True:
                while True:
                    self.g.run(self.player_turn,self.MULTI,self.first,self.second)
            elif self.GAME_PLAY is True and self.MULTI is False:
                while True:
                    self.g.run(self.player_turn,self.MULTI,self.first,self.second)

            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    run = False

            pygame.display.update()


if __name__ == "__main__":
    game = Game()
    game.run()
