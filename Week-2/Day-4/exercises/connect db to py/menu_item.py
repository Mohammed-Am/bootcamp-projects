class MenuItem:
    def __init__(self,name,price):
            self.name = name
            self.price = price

    def save(self,cursor, connection):
            query = "INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"
            values = (self.name, self.price)
            cursor.execute(query, values)
            connection.commit()

       
    def delete(self,cursor, connection):
            query = "DELETE FROM menu_items where item_name = %s and item_price = %s"
            values = (self.name, self.price)
            cursor.execute(query, values)
            connection.commit()
    def update(self, new_name, new_price, cursor, connection):
                query = "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s AND item_price = %s"
                values = (new_name, new_price, self.name, self.price)
                cursor.execute(query, values)
                connection.commit()
                self.name = new_name
                self.price = new_price


