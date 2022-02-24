# Movies
Movies est une application qui permet d'afficher et de lister les films déjà vu. 
Le but de ce projet est de travailler avec NodeJS et de tester différentes approches.

# Pré-requis
- NodeJS: ^16.14.0
- MySQL: ^8.0.23

# Installation
1. Cloner le projet.
2. Lancer `cd movies`.
3. Lancer `npm install`.
4. Renommer `.env.example` en `.env` et le completer.
5. Renommer `config/config.example.json` en `config/config.json` et le completer.
6. Lancer les migrations `npx sequelize-cli db:migrate`.
7. Lancer les seeders `npx sequelize-cli db:seed:all`.
8. Lancer le programme avec `nodemon server.js` à la racine de `movies`.


