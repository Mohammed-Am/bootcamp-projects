import random

 class Game:
     get_user_item(self,  user_item):
        self.user_item = input("Select (r)ock, (p)aper,or (s)cissors: ")
        return self.user_item

     get_computer_item(self):
        computer_item = ["r","p","s"]
        return random.choice(computer_item)

     get_game_result(self, user_item, computer_item):
        self.user_item = user_item
        self.computer_item = computer_item

        if user_item == computer_item:
            return "You chose: {user_item}. The computer chose: {computer_item}. Result: draw!".format(user_item, computer_item)

        if (user_item == 'r' and computer_item == 's') or (user_item == 'p' and computer_item == 'r') or (user_item == 's' and computer_item == 'p') :
            return "You have chosen {user_item} and the computer has chosen {computer_item}. Result: Win!".format(user_item, computer_item)

        else:
            return "You have chosen {user_item} and the computer has chosen {computer_item}. Result: Lose!".format(user_item, computer_item)



          