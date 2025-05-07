##Ex3

brand = {
    "name": " Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", " H&M", "Benetton"],
    "number_stores": 7000,
    "major_colo": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"],
    }
}

brand["number_stores"] = 2

print(brand["number_stores"])

namesClient = brand["type_of_clothes"]

print("Zaras clients :")
for names in namesClient:
    print(names)

brand.update({"country_creation":"Spain"})


##Q5 in progress


c = brand.pop("creation_date", None)
print(c)
