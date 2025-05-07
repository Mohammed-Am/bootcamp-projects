class Dog:
    def __init__(self,name , height):
        self.name = name
        self.height = height
    def bark(self):
        print("goes woof!")
    def jump(self):
        print(f"jumps {self.height * 2} cm hight!")


davids_dog = Dog('Ivy', 0.2)
sarahs_dog = Dog('Roxy', 0.5)

print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} meters tall.")
davids_dog.bark()
davids_dog.jump()

print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} meters tall.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger than {sarahs_dog.name}.")
elif davids_dog.height < sarahs_dog.height:
    print(f"{sarahs_dog.name} is bigger than {davids_dog.name}.")
else:
    print(f"{davids_dog.name} and {sarahs_dog.name} are the same size.")

 