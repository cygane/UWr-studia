import random
import datetime

# Przykładowa lista adresów IP
ip_addresses = ['192.168.0.1', '192.168.0.2', '192.168.0.3', '192.168.0.4', '192.168.0.5']

# Przykładowa lista rodzajów żądań HTTP
http_methods = ['GET', 'POST', 'PUT', 'DELETE']

# Przykładowa lista nazw zasobów
resources = ['/TheApplication/Page1', '/TheApplication/Page2', '/TheApplication/Page3']

# Wygenerowanie pliku z przykładowymi danymi
with open('logs.txt', 'w') as file:
    for _ in range(1000):  # 1000 linii dla przykładu, możesz dostosować tę liczbę
        timestamp = datetime.datetime.now().strftime('%H:%M:%S')
        ip_address = random.choice(ip_addresses)
        http_method = random.choice(http_methods)
        resource = random.choice(resources)
        status_code = random.choice([200, 404, 500])

        log_line = f"{timestamp} {ip_address} {http_method} {resource} {status_code}\n"
        file.write(log_line)
