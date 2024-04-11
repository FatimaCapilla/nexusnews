<<<<<<< HEAD

import 'dotenv/config'

export const DB_DEV_NAME =<string>process.env.DB_DEV_NAME;
export const DB_TEST_NAME = <string>process.env.DB_TEST_NAME;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV;
export const SECRET_KEY = <string>process.env.SECRET_KEY
=======
import dotenv from 'dotenv';
dotenv.config(); 

export const DB_DEV_NAME = process.env.DB_DEV_NAME;
export const DB_TEST_NAME = process.env.DB_TEST_NAME;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const PORT = process.env.PORT || 5000;
export const NODE_ENV = process.env.NODE_ENV;
>>>>>>> feature-front-login
