from flask import Flask, jsonify , request
from config import Config
from models import User, db

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)


@app.route('/users')
def users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.route('/users',methods=['POST'])
def create_users():
    data = request.get_json()
    new_user = User(username=data['username'],email=data['email'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201




if __name__ == '__main__':
    with app.app_context():
         db.create_all()
    app.run(debug = True, port = 5000)