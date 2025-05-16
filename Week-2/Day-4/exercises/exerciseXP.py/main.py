"""
     import psycopg2
    connection =  psycopg2.connect(
        host="localhost",port="5432",database="",user="postgres",password="kizon"
    )
"""


#1
users = {
    "kizon": "5321",
    "morad": "5321@morad",
    "ahmad45": "hmadroksta7"
}
#2
logged_in = None 
    
 while True:   
    command = input("Type 'login' or 'exit ")

    if command == "exit":
       break

    elif(command == 'login'):
        input_userName = input('Entre your UserName')
        input_pasword = input('Entre your Password')
       
        if(input_userName == input_user1  and  input_pasword == input_user2  ):
            print('you are now logged in')
            logged_in = input_userName
        else:
            print('wrong username or password')          
    
    
    

