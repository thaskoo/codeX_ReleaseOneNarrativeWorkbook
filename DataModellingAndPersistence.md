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

SQL stands for Structured Query Language, it's a data manipulation language that allows one to easily find and create data. SQL have 4 basic operations insert, delete, update and select. The ```select``` operation being the one to fin existing datat in the database the other operations are self explenatory. One use the fields in the tables to link various tables together.

Let's start of by creating some categories:

```
insert into category (name) values ('sweets');
insert into category (name) values ('food');
```

Let's find the categories:

```
select * from categories
```

Now let's insert some orders for the categories above:

```
insert into orders (date, product_name, quantity) values ('12-Feb-2015', 'Jelly Beans', 20, 1);
insert into orders (date, product_name, quantity) values ('12-Feb-2015', 'Simba chips 30g', 35, 1);
insert into orders (date, product_name, quantity) values ('12-Feb-2015', 'Bread', 27, 2);

```



## CRUD - create, read, update and delete

One can use SQL to create some CRUD screens to manipulates data.


