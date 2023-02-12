from flask import Flask, request, jsonify, session, send_file
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
import os
from config import ApplicationConfig
from models import db, User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)
CORS(app, supports_credentials=True)

db.init_app(app)
bcrypt = Bcrypt(app)

with app.app_context():
    db.create_all()

UPLOAD_FOLDER = 'Uploads'



@app.route("/register", methods=["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]
    year = request.json["year"]
    age = request.json["age"]
    gender = request.json['gender']

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password, reg_year=year, age=age, gender=gender)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route("/login", methods=["POST"])
def login():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email
    })




@app.route('/mem',methods=['GET'])
def mem():
    return {'members':['a','b']}

@app.route("/logi", methods=["POST"])
def login_user():
    email = request.json["email"]
    print(email)
    return {'mem':'Done'}

@app.route('/up',methods=['POST'])
def up():
    target=os.path.join(UPLOAD_FOLDER,'.')
    if not os.path.isdir(target):
        os.mkdir(target)
    file = request.files['file']
    
    destination="/".join([target, file.filename])
    file.save(destination)
    
    print(file)
    return {"me":'Image Received'}

@app.route('/dow')
def dow():
    return send_file('./Uploads/C100P61ThinF_IMG_20150918_144104_cell_165.png',download_name='a.png',as_attachment=True)
    

if __name__ == "__main__":
    app.run(debug=True)