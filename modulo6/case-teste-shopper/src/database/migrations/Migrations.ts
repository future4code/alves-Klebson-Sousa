import { BaseDatabase } from "../BaseDatabase"
// import { UserDatabase } from "../UserDatabase"
import { listPurchases, products, stock_Purchases } from "./data"

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
        DROP TABLE IF EXISTS Stock_Purchases;
        DROP TABLE IF EXISTS List_Purchases;
        DROP TABLE IF EXISTS Products_Stock;
        
        CREATE TABLE IF NOT EXISTS Products_Stock (
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price decimal(4,2) NOT NULL,
            qty_stock INT NOT NULL           
          );

          CREATE TABLE IF NOT EXISTS List_Purchases (	
            id VARCHAR(255) PRIMARY KEY,
            client_name VARCHAR(255) NOT NULL,
            delivery_date DATE NOT NULL,
            product_name VARCHAR(255) NOT NULL,    
            quantity TINYINT      
        );

        CREATE TABLE IF NOT EXISTS Stock_Purchases (
            purchase_id VARCHAR(255) NOT NULL,
            product_id INT NOT NULL,
            FOREIGN KEY (purchase_id) REFERENCES List_Purchases (id),
            FOREIGN KEY (product_id) REFERENCES Products_Stock (id)
          );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection("Products_Stock")
            .insert(products)
        
        await BaseDatabase
            .connection("List_Purchases")
            .insert(listPurchases)
        
        await BaseDatabase
            .connection("Stock_Purchases")
            .insert(stock_Purchases)

    }
}

const migrations = new Migrations()
migrations.execute()