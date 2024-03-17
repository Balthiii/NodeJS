// Importe le module de base de données
import db from "../util/database.js";

export default class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    // Méthode pour enregistrer un nouveau produit dans la base de données
    save() {
        return db.execute('INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.imageUrl]);
    }
    // Méthode pour mettre à jour les informations d'un produit dans la base de données
    update() {
        return db.execute('UPDATE products SET title = ?, price = ?, description = ?, imageUrl = ? WHERE id = ?', [this.title, this.price, this.description, this.imageUrl, this.id]);
    }

    // Méthode pour récupérer un produit spécifique de la base de données en fonction de son identifiant
    static fetch(productId) {
        return db.execute('SELECT * FROM products WHERE id = ?', [productId]);
    }
    // Méthode pour récupérer tous les produits de la base de données
    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }
    // Méthode pour supprimer un produit de la base de données en fonction de son identifiant
    static delete(productId) {
        return db.execute('DELETE FROM products WHERE id = ?', [productId]);
    }
}

