import random


class MyList:
    def __init__(self, l):
        self.l = l

    def reversed(self):
        return list(reversed(self.l))

    def sorted(self):
        return sorted(self.l)

    def random_number(self):
        return [random.randint(0, 100) for _ in range(len(self.l))]


my_list = MyList(["mohammed", "amouzoun" , "oop" , "poo"])
print(f"reversed List = {my_list.reversed()}")
print(f"sorted List = {my_list.sorted()}")
print(f"random List = {my_list.random_number()}")
