from pymongo import MongoClient

#agregacje przetwarzaja wiele dokumentow i zwracaja obliczone wyniki

client = MongoClient('localhost', 27017)

db = client['library']

books = db['books']
readers = db['readers']
borrowings = db['borrowings']



pipeline = [
    {
        '$group': {
            '_id': '$reader_id',
            'borrow_count': { '$count': {} }
        }
    },
    {
       #Łączy dwie kolekcje na zasadzie left join, tworząc nową tablicę w dokumencie wynikowym z dokumentami z kolekcji powiązanej
        '$lookup': {
            'from': 'readers',
            'localField': '_id',
            'foreignField': '_id',
            'as': 'reader_info'
        }
    },
    {
       #kazdy element tablicy staje sie osobnym dokumentem
        '$unwind': '$reader_info'
    },
    {
       #manipulacja wynikiem
        '$project': {
            'reader_name': '$reader_info.name',
            'reader_email': '$reader_info.email',
            'borrow_count': 1
        }
    }
]

result = list(borrowings.aggregate(pipeline))
for doc in result:
    print(doc)
