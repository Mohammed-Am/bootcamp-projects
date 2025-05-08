import random

class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        names = [dog for dog in args]
        print(f"{self.name}, {', '.join(names)} kayl3bo m3a b3diyat-hom")

    def do_a_trick(self):
        if self.trained:
            tricks = ["dar barrel roll", "w9ef 3la rajlou", "ssalama m3ak", "tmed"]
            print(f"{self.name} {random.choice(tricks)}")
        else:
            print(f"{self.name} mazal ma trained")


my_dog = PetDog("Fluffy", 2, 8)
my_dog.train()
my_dog.play("Boby", "Simo", "Rocky")
my_dog.do_a_trick()
