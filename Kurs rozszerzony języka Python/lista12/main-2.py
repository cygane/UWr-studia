from flask import Flask, request, jsonify
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from klient import Base, Film, Rezyser, Operator  # Importuj klasy z poprzedniego pliku

app = Flask(__name__)

# Konfiguracja bazy danych
engine = create_engine('sqlite:///baza.db')
Base.metadata.bind = engine
session = Session(bind=engine)

# API endpointy
@app.route('/api/filmy', methods=['GET'])
def get_filmy():
    filmy = session.query(Film).all()
    filmy_dict = [{'id': film.id, 'tytul': film.tytul, 'rok_powstania': film.rok_powstania,
                   'rezyser': film.rezyser.nazwisko, 'operator': film.operator.nazwisko} for film in filmy]
    return jsonify(filmy_dict)

@app.route('/api/filmy/<int:film_id>', methods=['GET'])
def get_film(film_id):
    film = session.query(Film).filter_by(id=film_id).first()
    if film:
        film_dict = {'id': film.id, 'tytul': film.tytul, 'rok_powstania': film.rok_powstania,
                     'rezyser': film.rezyser.nazwisko, 'operator': film.operator.nazwisko}
        return jsonify(film_dict)
    else:
        return jsonify({'message': 'Film not found'}), 404

@app.route('/api/filmy', methods=['POST'])
def add_film():
    data = request.json
    rezyser = Rezyser(nazwisko=data['rezyser_nazwisko'])
    operator = Operator(nazwisko=data['operator_nazwisko'])
    film = Film(tytul=data['tytul'], rok_powstania=data['rok_powstania'], rezyser=rezyser, operator=operator)

    session.add(rezyser)
    session.add(operator)
    session.add(film)
    session.commit()

    return jsonify({'message': 'Film added successfully'}), 201

@app.route('/api/filmy/<int:film_id>', methods=['PUT'])
def update_film(film_id):
    film = session.query(Film).filter_by(id=film_id).first()
    if film:
        data = request.json
        if 'tytul' in data:
            film.tytul = data['tytul']
        if 'rok_powstania' in data:
            film.rok_powstania = data['rok_powstania']
        if 'rezyser_nazwisko' in data:
            film.rezyser.nazwisko = data['rezyser_nazwisko']
        if 'operator_nazwisko' in data:
            film.operator.nazwisko = data['operator_nazwisko']

        session.commit()
        return jsonify({'message': f'Film {film_id} updated successfully'})
    else:
        return jsonify({'message': 'Film not found'}), 404

@app.route('/api/filmy/<int:film_id>', methods=['DELETE'])
def delete_film(film_id):
    film = session.query(Film).filter_by(id=film_id).first()
    if film:
        session.delete(film)
        session.commit()
        return jsonify({'message': f'Film {film_id} deleted successfully'})
    else:
        return jsonify({'message': 'Film not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
