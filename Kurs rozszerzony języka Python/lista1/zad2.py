def is_palindrom(text):
    znaki = [",",".",":",";","!","?", " "]
    text_low = text.lower()
    text_check = ""
    for i in text_low:
        if i not in znaki:
            text_check += i
    
    if text_check == text_check[::-1]:
        return True

print(is_palindrom("Eine güldne, gute Tugend: Lüge nie!"))
print(is_palindrom("Míč omočím."))


        

    
