class Circle:

    def __init__(self, r:1.0):
        self.r = r

    def  perimeter(self):
        return 2 * 3.14 * self.r

    def  area(self):
         return 3.14 * self.r **2    

n = Circle(9)

print(f"result of parimeter = {n.perimeter()}")
print(f"result of area = {n.area()}")







