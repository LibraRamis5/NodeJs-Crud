#simple solution for crud in node
#how to make crud in node express
# orm in node


#to make composer.json file
npm init -y

#to install express
npm i express

#for auto-save files in project
npm i -D nodemon

#
npm i ejs

#we are using mysql2
npm i mysql2

#to make envirouments 
npm i dotenv

#for ORM sequelize commands

npm install sequelize-cli
npm install --save sequelize
sequelize init

#for migration and seeders
sequelize migration:generate --name post
sequelize init

#for create seeder, migration, controller with attributes with single command
sequelize model:generate --name Post --attributes title:string, content:text, imageUrl:string, categoryId:integer, userId:integer
sequelize db:migrate

#seeders command
sequelize seed:generate --name user-seeder
sequelize db:seed --seed 20220926105427-category-seeder
sequelize db:seed:undo:all 

#for use of import and required both in project
npm install --save-dev @babel/cli @babel/core @babel/preset-env
