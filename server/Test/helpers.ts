import moment from 'moment';


export const CreateUser = {
    "email": "admin@gmail.com",
    "password": "123456"
}
export const deleteUser = {
    "email": "admin@gmail.com",
    "password": "123456",
    "role": "admin"
}


export const testTry = {
    "title": "title",
    "body": "body",
    "date": moment().toISOString(), // Formatear la fecha con todos los detalles de tiempo
    "image": "http://www.google.com"
}



