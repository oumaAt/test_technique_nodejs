# Test technique NodeJS

Il s'agit d'un exercice pour tester votre expérience technique avec NodeJs et la conception de bases de données.

### Specification

##### Description

- une entreprise est composé de plusieurs utilisateurs ( des employés et a un CEO ).
- un utilisateur peut etre un CEO ou un employé.
- Un employé peut avoir plusieurs 'missions' et une 'mission' peut être attribuée à plusieurs employés. (les CEO n'ont pas de missions).


- chaque utilisateur a un :

  nom
  prénom
  email (unique et obligatoire)
  mot de passe (obligatoire)
  num de téléphone
  photo de profile
  role (CEO ou employé)


- Une entreprise a :
  un nom (obligatoire)


- Une mission a :

  titre (obligatoire)
  description
  date de création (remplissage automatique)

##### Validation

- Tous les id doivent être configurés pour être INTEGER AUTO INCREMENT pour le processus de validation.

##### APIs

- Implémenter une API qui permet d'ajouter un utilisateur avec la possibilité d'uploader une photo de profil ( vous pouvez sauvegarder les photos dans le dossier uploads).
  Elle retourne l'utilisateur ajouté en cas de succès ou une erreur dans le cas contraire.

- Implémenter une API qui permet d'afficher la liste des utilisateurs.
  Elle retourne la liste des utilisateurs en cas de succès ou une erreur dans le cas contraire.

##### Notes :

- Vous pouvez utiliser le type de base de données de votre choix.
