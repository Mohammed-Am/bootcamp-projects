class MenuManager:
    def __init__(self,m):
        self.m = m

    def add_item(self, name, price, spice, gluten):    
        self.m.append([{self.name , self.price , self.spice, self.gluten}])
    def update_item(self, name, price, spice, gluten):
        pass
    def remove_item(name):
        pass

 menu = MenuManager([
            {"name": "Soup", "price": 10, "spice_level": "B", "gluten_index": False},
            {"name": "Hamburger", "price": 15, "spice_level": "A", "gluten_index": True},
            {"name": "Salad", "price": 18, "spice_level": "A", "gluten_index": False},
            {"name": "French Fries", "price": 5, "spice_level": "C", "gluten_index": False},
            {"name": "Beef bourguignon", "price": 25, "spice_level": "B", "gluten_index": True}
        ])

  print(menu.add_item([ {"name": "tagin dyal lhoot", "price": 75, "spice_level": "B", "gluten_index": False}]))     








