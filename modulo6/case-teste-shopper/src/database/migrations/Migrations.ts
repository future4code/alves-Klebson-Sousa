import { BaseDatabase } from "../BaseDatabase"
// import { UserDatabase } from "../UserDatabase"
import { productsStock, Client, order } from "./data"

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
        DROP TABLE IF EXISTS Order_Products;
        DROP TABLE IF EXISTS Stock_Purchases_Clients;
        DROP TABLE IF EXISTS Purchases_Clients;
        DROP TABLE IF EXISTS Products_Stock;
        
        CREATE TABLE IF NOT EXISTS Products_Stock (
            id INT NOT NULL,
            name VARCHAR(255) PRIMARY KEY,
            price decimal(4,2) NOT NULL,
            qty_stock INT NOT NULL           
          );

          CREATE TABLE IF NOT EXISTS Purchases_Clients (
            id VARCHAR(255) PRIMARY KEY,	
            name VARCHAR(255) NOT NULL,
            delivery_date DATE NOT NULL 
          );          

          CREATE TABLE IF NOT EXISTS Order_Products (	
            id VARCHAR(255) PRIMARY KEY,	
            product_name VARCHAR(255) NOT NULL,    
            quantity INT,
            client_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (product_name) REFERENCES Products_Stock (name),
            FOREIGN KEY (client_id) REFERENCES Purchases_Clients (id)
            
        );
        `)
    }

    insertData = async () => {
        await BaseDatabase
            .connection("Products_Stock")
            .insert(productsStock)
        
        await BaseDatabase
            .connection("Purchases_Clients")
            .insert(Client)        
       
        await BaseDatabase
            .connection("Order_Products")
            .insert(order)
    }
}

const migrations = new Migrations()
migrations.execute()