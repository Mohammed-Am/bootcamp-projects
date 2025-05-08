# Part I
class BankAccount:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        self.balance = 0
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            print("code correct")
            self.authenticated = True
        else:
            print("name or mode passe not correct")

