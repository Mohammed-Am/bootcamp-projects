

input_words = input("Enter a comma-separated sequence of words: ")
sorted_words = ",".join(sorted([word.strip() for word in input_words.split(",")]))
print(sorted_words)