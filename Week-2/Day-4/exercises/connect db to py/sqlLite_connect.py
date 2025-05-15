import mysql.connector
mydb = mysql.connector.connect(
  host="localhost",
  user="postgres",
  passwd="kizon"
)

print(mydb)