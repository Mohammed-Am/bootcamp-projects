import psycopg2
from menu_item import MenuItem

connection = psycopg2.connect(dbname="Restaurant", user="postgres", password="kizon", host="localhost", port="5432")
cursor = connection.cursor()


class MenuManager:

    @staticmethod
    def get_by_name(name):
        cursor.execute("select * from menu_items where item_name = %s", (name,))
        row = cursor.fetchone()
        if row:
            return MenuItem(row[1], row[2])

    @staticmethod
    def all_items():
       cursor.execute("SELECT * FROM menu_items")
       rows = cursor.fetchall()
       items = []
       for row in rows:
           items.append(MenuItem(row[1], row[2])) 
       return items  


item = MenuItem('Burger', 35)
item.save(cursor, connection)
item.delete(cursor, connection)
item.update('Veggie Burger', 37, cursor, connection)


item2 = MenuManager.get_by_name('Beef Stew')
items = MenuManager.all_items() 

for i in items:
    print(i.name, i.price)
