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














