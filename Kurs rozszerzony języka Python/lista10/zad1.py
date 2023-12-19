import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random

width, height = 10, 10
board = [[0] * width for _ in range(height)]
snake = [(0, 0), (0, 1)]
num_obstacles = 10
obstacles = [(random.randint(0, width - 1), random.randint(0, height - 1)) for i in range(num_obstacles)]

for obstacle in obstacles:
    board[obstacle[1]][obstacle[0]] = 1

def draw_board():
    plt.clf()

    for obstacle in obstacles:
        plt.fill_between([obstacle[0], obstacle[0] + 1], obstacle[1], obstacle[1] + 1, color='black')

    for segment in snake:
        plt.fill_between([segment[0], segment[0] + 1], segment[1], segment[1] + 1, color='yellow')

    plt.xlim(0, width)
    plt.ylim(0, height)
    plt.gca().set_aspect('equal', adjustable='box')

def move_snake():
    head = snake[0]
    direction = random.choice([(1, 0), (-1, 0), (0, 1), (0, -1)])
    new_head = (head[0] + direction[0], head[1] + direction[1])

    while (new_head[0] < 0 or new_head[0] >= width or new_head[1] < 0 or new_head[1] >= height):
        direction = random.choice([(1, 0), (-1, 0), (0, 1), (0, -1)])
        new_head = (head[0] + direction[0], head[1] + direction[1])

    if new_head in snake or board[new_head[1]][new_head[0]] == 1:
        ani.event_source.stop()

    snake.insert(0, new_head)

    if board[new_head[1]][new_head[0]] == 1:
        obstacles.remove(new_head)
        board[new_head[1]][new_head[0]] = 0

    if len(snake) > 2:
        tail = snake.pop()

def update(frame):
    move_snake()
    draw_board()

fig, ax = plt.subplots()
ani = animation.FuncAnimation(fig, update, frames=100, interval=200, repeat=False)

plt.show()
