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
    "title": "titleeeeee",
    "body": "bodyyyyyy",
    "date": moment().toISOString(), // Formatear la fecha con todos los detalles de tiempo
    "image": "http://www.google.com"
}



// Datos de prueba para el inicio de sesión
export const UserLogin = {
    email: 'adminuser@gmail.com',
    password: '123456'
};


export const wrongUser = {
    email: 'adminuser@gmail.com',
    password: '654321'
}
// Datos de prueba para la obtención de usuarios
export const userAdmin = {
    email: 'adminuser@gmail.com',
    password: '123456',
    role: 'admin'
};




