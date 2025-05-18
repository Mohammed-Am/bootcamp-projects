# 3 <= 3 < 9   -> true
print( 3 <= 3 < 9) 

# 3 == 3 == 3  -> true
print(3 == 3 == 3)


#bool(0) -> false
print(bool(0))

# bool(5 == "5") --> false
print(5 == "5")

# bool(4 == 4) == bool("4" == "4") -> true
print(bool(4 == 4) == bool("4" == "4"))

#bool(bool(None)) -> false
print(bool(bool(None)))

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x) #x is true
print("y is", y) # y is false
print("a:", a) # a: 5
print("b:", b)# b: 10


#ex2
longest_sentence = ""
print("try to enter the longest sentence without typing letter 'A'")

while True:
    sentence = input("Enter your sentence:  ")

    if 'a' in sentence.lower():
        print("you type Letter 'A' , try again!")
        continue

    if len(sentence) > len(longest_sentence):
        longest_sentence = sentence
        print('🎉congratulation, you typed a longth sentense without "A"')
        print(f'length : {len(sentence)}')   
    else:
        print("valid sentense , but not the best")   


   #EX 3 

   text = input("enter the text: ")

   length = len(text) 
   print(f"The text has {length} characters.")   


import re
   sentence = re.split(r'[.!?], text')
   print(f"The text contains {len(sentences)} sentence(s).")


   word_count = len(text.split())
   print(word_count)




import string
text = text.translate(str.maketrans('', '', string.punctuation))

text = text.lower()

words = text.split()

unique_words = set(words)

print(f"The text contains {len(unique_words)} unique word(s).")





non_whitespace_chars = re.sub(r'\s+', '', text)
print(f"The text contains {len(non_whitespace_chars)} non-whitespace character(s).")





sentences = re.split(r'[.!?]', text)
sentences = [s.strip() for s in sentences if s.strip()]

word_counts = [len(sentence.split()) for sentence in sentences]

if word_counts:
    average = sum(word_counts) / len(word_counts)
    print(f"Average words per sentence: {average:.2f}")
else:
    print("No sentences found.")



from collections import Counter


text = text.translate(str.maketrans('', '', string.punctuation)).lower()

words = text.split()

word_counts = Counter(words)

non_unique_words = [word for word, count in word_counts.items() if count > 1]

print(f"Number of non-unique words: {len(non_unique_words)}")
print("Non-unique words:", non_unique_words)
