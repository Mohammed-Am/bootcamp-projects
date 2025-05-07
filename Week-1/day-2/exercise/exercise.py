#Ex1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

c = zip(keys, values)

print(tuple(c))


##Ex2

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is ${total_cost}")

family = {}
while True:
    name = input("Enter the family member's name  ")
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

total_cost = 0
for name, age in family.items():
    if age < 3:
        cost = 0
    elif 3 <= age <= 12:
        cost = 10
    else:
        cost = 15
    print(f"{name} has to pay ${cost}")
    total_cost += cost

print(f"The family's total cost for the movies is ${total_cost}")



##Ex3

brand = {
    "name": " Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", " H&M", "Benetton"],
    "number_stores": 7000,
    "major_colo": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"],
    }
}

brand["number_stores"] = 2

print(brand["number_stores"])

namesClient = brand["type_of_clothes"]

print("Zaras clients :")
for names in namesClient:
    print(names)

brand.update({"country_creation":"Spain"})


##Q5 in progress


c = brand.pop("creation_date", None)
print(c)









#Ex 4 
def describe_city(city="Rabat" ,country='Morocco'):
    print(city + " is in " +  country)


describe_city("Kenitra", "Morooco")



#Ex 5 


from random import randint

def randomly():
    random_num = (randint(1, 100))
    num =  input("Enter a random number")
    if random_num == num :
        print('success message')
    else:
        print ('🙄try again , Rndom Number :' , random_num , 'your number' , num)


randomly()


##6 Ex:6


def make_shirt(size,text:'I love Python'):
    print('the size of the shirt is ' ,size ,'and the text is ','text')


make_shirt('L')
make_shirt('M')
make_shirt('XL', "Think twice and code once")

make_shirt(size="L" , text = "be happy")


#EX 7


def get_random_temp():
  from random import randint
  random_dagress =(randint(-10,40))
  print(random_dagress)

get_random_temp()



def main():
    random_temp = get_random_temp()
    print(f"The temperature right now is {random_temp} dagress calsius")
 if random_temp < 0 :
    print("Brr,that's freezing! Wear some extra layers today")
 elif random_temp >= 0 and random_temp <=16 :
    print("Quite chilly! Dont't forget your coat") 
 elif random_temp >=16 and random_temp <=23 :
    print("normal")
 elif  random_temp >=24 and random_temp <= 32
    print("sunny")
 elif random_temp >= 32 and random_temp <=40
    print("☀️very sunny ")


 get_random_temp(season):
  from random import randint
  random = (randint(-10,60))
  if season == 'winter' and random >= -10 and random <= 16 :
        print(f"the se")
.
.
.
.






## Ex 8

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions(data):
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []

    for item in data:
        user_answer = input(item["question"] + " ")
        if user_answer.strip().lower() == item["answer"].strip().lower():
            correct_answers += 1
        else:
            incorrect_answers += 1
            wrong_answers.append({
                "question": item["question"],
                "your_answer": user_answer,
                "correct_answer": item["answer"]
            })

    return correct_answers, incorrect_answers, wrong_answers


def display_results(correct, incorrect, wrong_answers):
    print(f"\nYou got {correct} correct answers and {incorrect} incorrect answers.")
    if wrong_answers:
        print("\nHere are the questions you answered incorrectly:")
        for item in wrong_answers:
            print(f"Question: {item['question']}")
            print(f"Your answer: {item['your_answer']}")
            print(f"Correct answer: {item['correct_answer']}\n")

    if incorrect > 3:
        print("You had more than 3 wrong answers. Would you like to play again?")
        play_again = input("Type 'yes' to play again or anything else to quit: ").strip().lower()
        if play_again == 'yes':
            main()


def main():
    correct, incorrect, wrong_answers = ask_questions(data)
    display_results(correct, incorrect, wrong_answers)


main()
