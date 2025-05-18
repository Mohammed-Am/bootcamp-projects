cars = [ 'Volkswagen', 'Toyota', 'Ford Motor', 'Honda', 'Chevrolet']
print(f"the list has {len(cars)} manufacturers")

sorted_names = sorted(cars, reverse=True)
print(sorted_names)

for car in cars:
    if 'o' in car:
        print(car)

    elif 'i' not in car:
            print(car)
            print("letter 'i' not found")      


listCars = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]
print(set(listCars))    

unique_cars = []
for car in listCars:
    if car not in unique_cars:
        unique_cars.append(car)

cars_string = ", ".join(unique_cars)
print(cars_string)
print(f"There are {len(unique_cars)} unique car companies.")



list_cars = ["Honda", "Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]


unique_cars = list(set(list_cars))
unique_cars.sort()
reversed_names = [car[::-1] for car in unique_cars]
for name in reversed_names:
    print(name)



def get_full_name(first_name ,middle_name='',last_name=''):
    print(first_name,middle_name, last_name)



get_full_name(first_name='john',middle_name='hooker',last_name='lee')
get_full_name(first_name='bruce',last_name='lee')


#From English to Morse
morse_code = {
    'A': '.-',     'B': '-...',   'C': '-.-.', 
    'D': '-..',    'E': '.',      'F': '..-.',
    'G': '--.',    'H': '....',   'I': '..',
    'J': '.---',   'K': '-.-',    'L': '.-..',
    'M': '--',     'N': '-.',     'O': '---',
    'P': '.--.',   'Q': '--.-',   'R': '.-.',
    'S': '...',    'T': '-',      'U': '..-',
    'V': '...-',   'W': '.--',    'X': '-..-',
    'Y': '-.--',   'Z': '--..',
    '0': '-----',  '1': '.----',  '2': '..---',
    '3': '...--',  '4': '....-',  '5': '.....',
    '6': '-....',  '7': '--...',  '8': '---..',
    '9': '----.'
}


def converts():
    text = input("Enter text to convert to Morse code: ")
    morse = []
    for char in text.upper():
        if char == ' ':
            morse.append(' / ')
        elif char in morse_code:
            morse.append(morse_code[char])
        else:
            morse.append('?')
    print(' '.join(morse))

converts()