import requests
import random
import sqlite3

API_URL = "https://restcountries.com/v3.1/all"


DB_NAME = "countries.sql"

def create_table():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS countries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            capital TEXT,
            flag TEXT,
            subregion TEXT,
            population INTEGER
        )
    ''')
    conn.commit()
    conn.close()

def fetch_countries():
    response = requests.get(API_URL)
    response.raise_for_status()
    return response.json()

def insert_countries(countries):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    for country in countries:
        name = country.get('name', {}).get('common', '')
        capital = country.get('capital', [''])[0] if country.get('capital') else ''
        flag = country.get('flags', {}).get('png', '')
        subregion = country.get('subregion', '')
        population = country.get('population', 0)
        c.execute('''
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (?, ?, ?, ?, ?)
        ''', (name, capital, flag, subregion, population))
    conn.commit()
    conn.close()

def main():
    create_table()
    all_countries = fetch_countries()
    random_countries = random.sample(all_countries, 10)
    insert_countries(random_countries)
    print("10 random countries have been added to the database.")

if __name__ == "__main__":
    main()