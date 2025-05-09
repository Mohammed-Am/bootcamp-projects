from  wer9a_minas.game import Game, get_computer_item, get_user_item

def play():

   user = Game(get_user_item())
   computer_choice = get_computer_item()
   computer_game_instance = Game(computer_choice)

   result = get_game_result(user, computer_game_instance)
   print(f"You selected {user.item}. The computer selected {computer_game_instance.item}. {result.capitalize()}.")
   return result