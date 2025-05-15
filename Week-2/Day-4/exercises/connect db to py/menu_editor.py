import psycopg2
from menu_item import MenuItem
from menu_manager import MenuManager

# Database connection
connection = psycopg2.connect(dbname="Restaurant", user="postgres", password="kizon", host="localhost", port="5432")
cursor = connection.cursor()


def show_user_menu():
    while True:
        print("\n===== Restaurant Menu Editor =====")
        print("(V) View an Item")
        print("(A) Add an Item")
        print("(D) Delete an Item")
        print("(U) Update an Item")
        print("(S) Show the Menu")
        print("(Q) Quit")

        choice = input("Enter your choice: ").strip().upper()

        if choice == 'V':
            name = input("Enter item name to view: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"Item found: {item.name}, Price: {item.price}")
            else:
                print("Item not found.")

        elif choice == 'A':
            add_item_to_menu()

        elif choice == 'D':
            remove_item_from_menu()

        elif choice == 'U':
            update_item_from_menu()

        elif choice == 'S':
            show_restaurant_menu()

        elif choice == 'Q':
            print("Exiting program. Here's the final menu:")
            show_restaurant_menu()
            break

        else:
            print("Invalid choice. Please select a valid option.")


def add_item_to_menu():
    name = input("Enter item name: ")
    price = float(input("Enter item price: "))
    item = MenuItem(name, price)
    try:
        item.save(cursor, connection)
        print("Item was added successfully.")
    except Exception as e:
        print("Failed to add item:", e)


def remove_item_from_menu():
    name = input("Enter item name to remove: ")
    item = MenuManager.get_by_name(name)
    if item:
        try:
            item.delete(cursor, connection)
            print("Item was deleted successfully.")
        except Exception as e:
            print("Error deleting item:", e)
    else:
        print("Item not found.")


def update_item_from_menu():
    current_name = input("Enter current item name: ")
    item = MenuManager.get_by_name(current_name)
    if item:
        new_name = input("Enter new name: ")
        new_price = float(input("Enter new price: "))
        try:
            item.update(new_name, new_price, cursor, connection)
            print("Item was updated successfully.")
        except Exception as e:
            print("Error updating item:", e)
    else:
        print("Item not found.")


def show_restaurant_menu():
    items = MenuManager.all_items(cursor)
    print("\n--- Restaurant Menu ---")
    for item in items:
        print(f"{item.name}: ${item.price:.2f}")


# Run the program
if __name__ == '__main__':
    show_user_menu()
    cursor.close()
    connection.close()
