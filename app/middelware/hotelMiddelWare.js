export const avgFloatToInt = (req, res, next) => {
    // Sauvegarde la méthode originale res.json()
    const originalJson = res.json;
  
    // Redéfinit res.json() pour effectuer ton traitement sur le JSON
    res.json = function (data) {
      // Fais ton traitement sur data (le JSON) ici
      // Par exemple, tu peux ajouter une propriété personnalisée au JSON avant de l'envoyer
      data.forEach(element => {
        element["total_rate"] = Number(element["total_rate"]);
      });
  
      // Appelle la méthode originale res.json() avec le JSON modifié
      originalJson.call(res, data);
    };
  
    // Appelle la fonction next() pour passer au middleware suivant ou à la route finale
    next();
  };