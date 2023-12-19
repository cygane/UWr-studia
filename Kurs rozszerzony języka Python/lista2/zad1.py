#glosy jako tablica krotek, gdzie na pierwszym miejscu w krotce jest nazwa komitetu
def wybory(glosy, miejsca):
    new = sorted(glosy, key=lambda x: x[1], reverse=True)
    prog = sum(vote[1] for vote in new) * 0.05
    mandaty = {vote[0]: 0 for vote in new}

    while miejsca > 0:
        res = [(vote[0], vote[1] / (mandaty[vote[0]] + 1)) if vote[1] >= prog else (vote[0], 0) for vote in new]
        max_res = max(res, key=lambda x: x[1])
        mandaty[max_res[0]] += 1
        miejsca -= 1

    return mandaty


glosy = [("A", 720), ("B", 300), ("C", 480)]
miejsca = 8

print(wybory(glosy,miejsca))
