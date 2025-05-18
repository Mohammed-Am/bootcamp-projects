from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from collections import OrderedDict

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)


class Drink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.String(120))

    def __repr__(self):
        return f"{self.name} - {self.description}"

    def to_dict(self):
        return OrderedDict([
            ("id", self.id),
            ("name", self.name),
            ("description", self.description)
        ])

@app.route('/')
def index():
    return 'Hello!'

@app.route('/drinks')
def get_drinks():
    drinks = Drink.query.all()
    return {"drinks": [drink.to_dict() for drink in drinks]}

@app.route('/drinks/<int:id>')
def get_drink(id):
    drink = Drink.query.get_or_404(id)
    return drink.to_dict()

@app.route('/drinks', methods=['POST'])
def add_drink():
    drink = Drink(name=request.json['name'], description=request.json['description'])
    db.session.add(drink)
    db.session.commit()
    return {'id': drink.id}, 201

@app.route('/drinks/<int:id>', methods=['DELETE'])
def delete_drink(id):
    drink = Drink.query.get(id)
    if drink is None:
        return {"error": "Not found"}
    db.session.delete(drink)
    db.session.commit()
    return {"message": "Drink deleted"}

@app.route('/drinks/<int:id>', methods=['PUT'])
def update_drink(id):
    drink = Drink.query.get_or_404(id)
    data = request.get_json()

    if 'name' in data:
        drink.name = data['name']
    if 'description' in data:
        drink.description = data['description']

    db.session.commit()

    return jsonify({
        'message': 'Drink updated',
        'id': drink.id,
        'name': drink.name,
        'description': drink.description
    })

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
