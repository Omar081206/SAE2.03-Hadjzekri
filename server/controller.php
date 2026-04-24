<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController(){
    $movies = getAllMovies();
    return $movies;
}

function addMovieController(){

  $titre = $_REQUEST['titre'];
  $real = $_REQUEST['realisateur'];
  $annee = $_REQUEST['annee'];
  $duree = $_REQUEST['duree'];
  $desc = $_REQUEST['description'];
  $cate = $_REQUEST['categorie'];
  $img = $_REQUEST['affiche'];
  $trailer = $_REQUEST['trailer'];
  $age = $_REQUEST['age'];

  $ok = addMovie($titre, $real, $annee, $duree, $desc, $cate, $img, $trailer, $age);
  // $ok est le nombre de ligne affecté par l'opération de mise à jour dans la BDD (voir model.php)
  if ($ok!=0){
    return "Le film $titre est ajouté";
  }
  else{
    return false;
  }
}

function readMovieDetailController(){

    $id = $_REQUEST['id'];
    
    $movie = getMovieDetails($id); 

    if ($movie != false) {
        return $movie; 
    } else {
        return false;
    }
}