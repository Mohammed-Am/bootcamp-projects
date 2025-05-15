import psycopg2;

DB_NAME = "Hollywood"
USER = "postgres"
PASSWORD = "kizon"
HOST = "localhost"
PORT = "5432"

connection = psycopg2.connect(
    dbname=DB_NAME,
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT
)

cursor = connection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS new_table (
        id SERIAL PRIMARY KEY,
        num INTEGER NOT NULL
    );
""")
connection.commit()

cursor.execute("INSERT INTO new_table (num) VALUES (%s)", (12345,))
connection.commit()


cursor.execute("SELECT * FROM  movies;")
results = cursor.fetchall()

for row in results:
    print(row)


connection.close()
