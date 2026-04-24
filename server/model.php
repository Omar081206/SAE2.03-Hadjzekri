<?php

/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

define("HOST", "localhost");
define("DBNAME", "hadj-zekri1");
define("DBLOGIN", "hadj-zekri1");
define("DBPWD", "hadj-zekri1");


function getAllMovies(){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "select id, name, image from Movie";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; 
}

function addMovie($titre, $real, $annee, $duree, $desc, $cate, $img, $trailer, $age){
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD); 
    $sql = "INSERT INTO Movie (name, director, year, length, description, id_category, image, trailer, min_age) 
            VALUES (:titre, :real, :annee, :duree, :desc, :cate, :img, :trailer, :age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':titre', $titre);
    $stmt->bindParam(':real', $real);
    $stmt->bindParam(':annee', $annee);
    $stmt->bindParam(':duree', $duree);
    $stmt->bindParam(':desc', $desc);
    $stmt->bindParam(':cate', $cate);
    $stmt->bindParam(':img', $img);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':age', $age);
    $stmt->execute();
    
    $res = $stmt->rowCount(); 
    return $res; 
}

function getMovieDetails($id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD); 
    
    $sql = "SELECT Movie.*, Category.name AS category_name
        FROM Movie 
        INNER JOIN Category ON Movie.id_category = Category.id 
        WHERE Movie.id = :id";
        
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ); 
    return $res; 
}

function getMoviesByCategory(){
   $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT Movie.name, Movie.image, Category.name AS category_name 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            ORDER BY Category.name";
            
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    $movies = $stmt->fetchAll(PDO::FETCH_OBJ); 
    
}