import random

class Game:
     get_user_item(self,  user_item):
        self.item = input("Select (r)ock, (p)aper,or (s)cissors: ")
        return self.item

     get_computer_item(self):
       computer_item = ["r","p","s"]
       return computer_item.random.choice()

     get_game_result(self, user_item, computer_item):
        self.user_item = user_item
        self.computer_item = computer_item
        
          