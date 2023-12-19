import matplotlib.pyplot as plt
import numpy as np

# Wielomian
def polynomial(arg, x_list):
    result = 1
    for x in x_list:
        result *= (arg - x)
    return result

# Węzły Czebyszewa w przedziale [-1, 1]
def chebyshev_nodes(n):
    return np.cos((2 * np.arange(1, n + 2) - 1) * np.pi / (2 * (n + 1)))

# Węzły równoodległe w przedziale [-1, 1]
def equidistant_nodes(n):
    return np.linspace(-1, 1, n + 1)

# Przygotowanie wykresów dla różnych wartości n
n=10
x_values = np.linspace(-1, 1, 1000)  # Dla płynniejszego wykresu

# Rysowanie wykresu dla węzłów Czebyszewa
y_chebyshev = [polynomial(arg, chebyshev_nodes(n)) for arg in x_values]
plt.plot(x_values, y_chebyshev, label=f'Czebyszew, n={n}', linestyle='--')

# Rysowanie wykresu dla węzłów równoodległych
y_equidistant = [polynomial(arg, equidistant_nodes(n)) for arg in x_values]
plt.plot(x_values, y_equidistant, label=f'Equidistant, n={n}')

# Dodanie etykiet i legendy
plt.xlabel('x')
plt.ylabel('p(x)')
plt.legend()
plt.title('Comparison of polynomials for Chebyshev and equidistant nodes')
plt.show()