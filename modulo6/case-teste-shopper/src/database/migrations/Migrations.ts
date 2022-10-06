import { BaseDatabase } from "../BaseDatabase"
import { UserDatabase } from "../UserDatabase"
import { listPurchases, products, users } from "./data"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")

            console.log("Populating tables...")
            await this.insertData()
            console.log("Tables populated successfully.")

            console.log("Migrations completed.")
        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        DROP TABLE IF EXISTS ${ProductsDatabase.TABLE_PURCHASES};
        DROP TABLE IF EXISTS ${ProductstDatabase.TABLE_PRODUCTS};
        DROP TABLE IF EXISTS ${UserDatabase.TABLE_USERS};
        
        CREATE TABLE IF NOT EXISTS ${ProductstDatabase.TABLE_PRODUCTS} (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price decimal(4,2) NOT NULL,
            qty_stock INT NOT NULL           
          );
          

        CREATE TABLE IF NOT EXISTS ${UserDatabase.TABLE_USERS}(
            name VARCHAR(255) PRIMARY KEY,
            delivery_date DATE NOT NULL  
        );

        CREATE TABLE IF NOT EXISTS ${ProductsDatabase.TABLE_PURCHASES}(
            id VARCHAR(255) PRIMARY KEY,
            name_product VARCHAR(255) NOT NULL,
            quantity TINYINT,
            name_client VARCHAR(255) NOT NULL,
            FOREIGN KEY (name_product) REFERENCES ${ProductstDatabase.TABLE_PRODUCTS}(name),
            FOREIGN KEY (name_client) REFERENCES ${UserDatabase.TABLE_USERS}(name)
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection(ProductstDatabase.TABLE_PRODUCTS)
            .insert(products)

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(users)

        await BaseDatabase
            .connection(ProductsDatabase.TABLE_PURCHASES)
            .insert(listPurchases)
    }
}

const migrations = new Migrations()
migrations.execute()