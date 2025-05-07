user_input = input("type a word");

letter_indices = {}

for index, letter in enumerate(user_input):
    if letter not in letter_indices:
        letter_indices[letter] = []
    letter_indices[letter].append(index)

print(letter_indices)