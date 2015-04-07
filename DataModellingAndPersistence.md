# Data Modelling and Persistence

To write applications one need a way of storing and manipulating data, that is what databases are for. They make 
it easy to store, structure, retrieve and manage data.

## Database basics

Databases put data that belongs together in tables, each table have multiple entries with is called rows and 
each row have multiple fields.

One can link tables to each other using fields, one can create a field in one table and reference that field 
from another table. In effect one is creating relationships between tables, that's why it is called relational databases then.


## Data Modelling

The process of creating a set of tables for a problem domain is called Data Modelling. When creating a data model one looks at what different types of data needs to be stored and how they relate to each other.

Look at this scenario:

> As as Taxi Owner I would like to see who is driving my taxi's and on which routes.

Answer these questions:
  * For what entities do we need to store data?
  * What data do we need for each entity?
  * How do the entities relate to each other?

Once the above questions are answered one have the basic information to create a database. 

## SQL

SQL stands for Structured Query Language, it's a data manipulation language that allows one to easily find and create data. SQL have 4 basic operations insert, delete, update and select. The ```select``` operation being the one to fin existing datat in the database the other operations are self explenatory. One use the fields in the tables to link tables together.

## CRUD - create, read, update and delete

One can use SQL to create some CRUD screens to manipulates data.

## Learn it

Now that you have a basic high level understanding of database bases and SQL work your way through this tutorial:

http://sql.learncodethehardway.org/

## Aggregating data

Once your data is in a database you can use it to calculate aggregates like averages, max or min values.

Some more details:

* http://www.sqlclauses.com/sql+aggregate+functions/
* http://www.mysqltutorial.org/mysql-aggregate-functions.aspx
* http://www.techotopia.com/index.php/MySQL_Data_Aggregation_Functions

## MySQL

For our project we would like to use MySQL which is an open source database that is used widely.

Here is a basic tutorial to get going:

https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial

## Data model & CRUD for Nelisa

Now use your database knowledge to:

* create a data model for Nelisa's Spaza Shop
* create a MySQL database this datamodel
* import the CSV files you have from Nelisa into the database
* change your web application to use the database

> Aggregate functions will be very usefull.

Here is a basic CRUD overview:

https://github.com/codex-academy/codeX_BasicCRUDExample

## Node database packages:

https://www.npmjs.com/package/sqlite3
https://www.npmjs.com/package/mysql
