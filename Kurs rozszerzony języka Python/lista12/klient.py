import argparse
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import sessionmaker, relationship,validates
from sqlalchemy.orm import Session,mapped_column,Mapped
from typing import List
import os
import requests

API_URL = 'http://localhost:5000/api/filmy'
class Base(DeclarativeBase):
    pass
class Film(Base):
    __tablename__ = 'filmy'

    id = mapped_column(Integer, primary_key=True)
    tytul = mapped_column(String, nullable=False)
    rok_powstania = mapped_column(Integer, nullable=False)

    rezyser_id = mapped_column(Integer, ForeignKey('rezyserzy.id'))
    operator_id = mapped_column(Integer, ForeignKey('operatorzy.id'))

    rezyser = relationship("Rezyser",back_populates="rezyseruje")
    operator = relationship("Operator",back_populates="jest_operatorem")

    @validates('rok_powstania')
    def validate_rok(self, key, rok_powstania):
        if rok_powstania < 1895:
            raise ValueError("Wtedy nie mogl powstac film")
        return rok_powstania


class Rezyser(Base):
    __tablename__ = 'rezyserzy'

    id = mapped_column(Integer, primary_key=True)
    nazwisko = mapped_column(String)
    rezyseruje: Mapped[List[Film]]=relationship("Film", back_populates="rezyser")

    @validates('nazwisko')
    def validate_nazwisko(self, key, nazwisko):
        if len(nazwisko) < 3:
            raise ValueError("Nazwisko za krotkie")
        return nazwisko

class Operator(Base):
    __tablename__ = 'operatorzy'

    id = mapped_column(Integer, primary_key=True)
    nazwisko = mapped_column(String)
    jest_operatorem: Mapped[List[Film]]=relationship("Film", back_populates="operator")

    @validates('nazwisko')
    def validate_nazwisko(self, key, nazwisko):
        if len(nazwisko) < 2:
            raise ValueError("Nazwisko za krotkie")
        return nazwisko

engine = create_engine("sqlite:///baza.db", echo=True)

if not os.path.exists('baza'):
    Base.metadata.create_all(engine)


def dodaj_film(args):
    if args.api:
        data = {
            'tytul': args.tytul,
            'rok_powstania': args.rok_powstania,
            'rezyser_nazwisko': args.rezyser_nazwisko,
            'operator_nazwisko': args.operator_nazwisko
        }
        response = requests.post(API_URL, json=data)
        if response.status_code == 200:
            print("Film został dodany.")
        else:
            print(f"Error: {response.status_code}")
    else:
        engine = create_engine('sqlite:///baza.db', echo=True)
        with Session(engine) as session:
            rezyser = Rezyser(nazwisko=args.rezyser_nazwisko)
            operator = Operator(nazwisko=args.operator_nazwisko)

            film = Film(tytul=args.tytul, rok_powstania=args.rok_powstania,
                        rezyser=rezyser, operator=operator)

            session.add(rezyser)
            session.add(operator)
            session.add(film)
            session.commit()
            print("Film został dodany.")

def wyszukaj_film(args):
    if args.api:
        params = {}
        if args.tytul:
            params['tytul'] = args.tytul
        if args.rok_powstania:
            params['rok_powstania'] = args.rok_powstania
        if args.rezyser_nazwisko:
            params['rezyser_nazwisko'] = args.rezyser_nazwisko
        if args.operator_nazwisko:
            params['operator_nazwisko'] = args.operator_nazwisko

        response = requests.get(API_URL, params=params)
        if response.status_code == 200:
            filmy = response.json()
            for film in filmy:
                print(f"Tytuł: {film['tytul']}, Rok powstania: {film['rok_powstania']}")
                print(f"Reżyser: {film['rezyser_nazwisko']}")
                print(f"Operator: {film['operator_nazwisko']}")
                print("\n")
        else:
            print(f"Error: {response.status_code}")
    else:
        engine = create_engine("sqlite:///baza.db", echo=True)
        with Session(bind=engine) as session:
            film = session.query(Film).filter_by(tytul=args.tytul).first()
            print(f"Tytuł: {film.tytul}, Rok powstania: {film.rok_powstania}")
            print(f"Reżyser: {film.rezyser.nazwisko}")
            print(f"Operator: {film.operator.nazwisko}")
            print("\n")


def aktualizuj(args):
    if args.api:
        data = {}
        if args.tytul is not None:
            data['tytul'] = args.tytul
        if args.rok_powstania is not None:
            data['rok_powstania'] = args.rok_powstania
        if args.rezyser_nazwisko is not None:
            data['rezyser_nazwisko'] = args.rezyser_nazwisko
        if args.operator_nazwisko is not None:
            data['operator_nazwisko'] = args.operator_nazwisko

        response = requests.put(f"{API_URL}/{args.id}", json=data)
        if response.status_code == 200:
            print(f"Film o ID {args.id} został zaktualizowany.")
        else:
            print(f"Error: {response.status_code}")
    else:
        engine = create_engine("sqlite:///baza.db", echo=True)
        with Session(bind=engine) as session:
            film = session.query(Film).filter_by(id=args.id).first()

            if film:
                if args.tytul is not None:
                    film.tytul = args.tytul
                if args.rok_powstania is not None:
                    film.rok_powstania = args.rok_powstania
                if args.rezyser_nazwisko is not None:
                    film.rezyser.nazwisko = args.rezyser_nazwisko
                if args.operator_nazwisko is not None:
                    film.operator.nazwisko = args.operator_nazwisko

                session.commit()
                print(f"Film o ID {args.id} został zaktualizowany.")
            else:
                print(f"Film o ID {args.id} nie istnieje.")

def main():
    parser = argparse.ArgumentParser(description="System przechowujący informacje o filmach")
    parser.add_argument("--api", action='store_true', help="Use API for data access")
    subparsers = parser.add_subparsers(title='commands', dest='command')

    parser_dodaj = subparsers.add_parser('dodaj', description="Dodaj nowy film do bazy danych")
    parser_dodaj.add_argument("--tytul", required=True, help="Tytuł filmu")
    parser_dodaj.add_argument("--rok_powstania", type=int, required=True, help="Rok powstania filmu")
    parser_dodaj.add_argument("--rezyser_nazwisko", required=True, help="Nazwisko reżysera")
    parser_dodaj.add_argument("--operator_nazwisko", required=True, help="Nazwisko operatora")
    parser_dodaj.set_defaults(func=dodaj_film)

    parser_wyszukaj = subparsers.add_parser('wyszukaj', description="Wyszukaj filmy w bazie danych")
    parser_wyszukaj.add_argument("--tytul", help="Tytuł filmu")
    parser_wyszukaj.add_argument("--rok_powstania", type=int, help="Rok powstania filmu")
    parser_wyszukaj.add_argument("--rezyser_nazwisko", help="Nazwisko reżysera")
    parser_wyszukaj.add_argument("--operator_nazwisko", help="Nazwisko operatora")
    parser_wyszukaj.set_defaults(func=wyszukaj_film)

    parser_aktualizuj = subparsers.add_parser('aktualizuj', description="Aktualizuj istniejący film w bazie danych")
    parser_aktualizuj.add_argument("--id", type=int, required=True, help="ID filmu do aktualizacji")
    parser_aktualizuj.add_argument("--tytul", help="Nowy tytuł filmu")
    parser_aktualizuj.add_argument("--rok_powstania", type=int, help="Nowy Rok powstania filmu")
    parser_aktualizuj.add_argument("--rezyser_nazwisko", help="Nowe nazwisko reżysera")
    parser_aktualizuj.add_argument("--operator_nazwisko", help="Nowe nazwisko operatora")
    parser_aktualizuj.set_defaults(func=aktualizuj)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()