
import sqlite3
import hashlib


"""
    users = {
        "kizon": "5321",
        "morad": "5321@morad",
        "ahmad45": "hmadroksta7"
    }
"""

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()


conn = sqlite3.connect("testAuth.db")
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)
""")
conn.commit()

logged_in = None

while True:
    command = input("Type 'login', 'signup', or 'exit': ").strip().lower()

    if command == "exit":
        break

    elif command == "login":
        input_username = input("Enter your username: ")
        input_password = input("Enter your password: ")
        hashed = hash_password(input_password)

        cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (input_username, hashed))
        user = cursor.fetchone()

        if user:
            print("You are now logged in")
            logged_in = input_username
        else:
            print("Wrong username or password")

    elif command == "signup":
        while True:
            new_username = input("Enter your new username: ")
            cursor.execute("SELECT * FROM users WHERE username = ?", (new_username,))
            if cursor.fetchone():
                print("This username already exists, try again.")
            else:
                break

        new_password = input("Enter your new password: ")
        hashed_password = hash_password(new_password)

        cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (new_username, hashed_password))
        conn.commit()
        print("Signup successful! You can now login.")

    else:
        print("Invalid command.")

conn.close()
