#Three lines to make our compiler able to draw:
import sys
import matplotlib
# matplotlib.use('Agg')

import matplotlib.pyplot as plt
import numpy as np

# ypoints = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
# xpoints = [1, 1.0625, 1.125, 1.1875, 1.25, 1.3125, 1.375, 1.4375, 1.5, 1.5625, 1.625, 1.6875, 1.75, 1.8125, 1.875, 1.9375]
ypoints = []
xpoints = []

for i in range(16):
    ypoints.append(1)
    xpoints.append(-1.0 * (1.0 + i/16.0))

for i in range(16):
    ypoints.append(1)
    xpoints.append(-1.0 * (1.0/2.0 + i/32.0))

for i in range(16):
    ypoints.append(1)
    xpoints.append(-1.0 * (1.0/4.0 + i/64.0))

for i in range(16):
    ypoints.append(1)
    xpoints.append(1.0/4.0 + i/64.0)

for i in range(16):
    ypoints.append(1)
    xpoints.append(1.0/2.0 + i/32.0)

for i in range(16):
    ypoints.append(1)
    xpoints.append(1.0 + i/16.0)

plt.plot(xpoints, ypoints, marker="o")
plt.show()

#Two  lines to make our compiler able to draw:
# plt.savefig(sys.stdout.buffer)
# sys.stdout.flush()