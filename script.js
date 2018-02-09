$(document).ready(function() {

  //Matrice[5,5] : herbe entouré d'eau
  var couche1 = new Array();

  couche1[0] = new Array();
  couche1[0][1] = "eau";
  couche1[0][2] = "eau";
  couche1[0][3] = "eau";
  couche1[0][4] = "eau";
  couche1[0][5] = "eau";

  couche1[1] = new Array();
  couche1[1][1] = "eau";
  couche1[1][2] = "herbe";
  couche1[1][3] = "herbe";
  couche1[1][4] = "herbe";
  couche1[1][5] = "eau";

  couche1[2] = new Array();
  couche1[2][1] = "eau";
  couche1[2][2] = "herbe";
  couche1[2][3] = "herbe";
  couche1[2][4] = "herbe";
  couche1[2][5] = "eau";

  couche1[3] = new Array();
  couche1[3][1] = "eau";
  couche1[3][2] = "herbe";
  couche1[3][3] = "herbe";
  couche1[3][4] = "herbe";
  couche1[3][5] = "eau";

  couche1[4] = new Array();
  couche1[4][1] = "eau";
  couche1[4][2] = "eau";
  couche1[4][3] = "eau";
  couche1[4][4] = "eau";
  couche1[4][5] = "eau";

  var couche2 = []

  //Créer le code html pour la couche1
  var htmlContent = "";
  for(var i = 0; i < 5; i++){
    htmlContent += "<div class='tile-row'>"
    for(var j = 1; j<=5; j++){
      htmlContent += "<div class='tile tile-" + couche1[i][j] + "'></div>";
    }
    htmlContent += "</div>"
  }
  $("#container").append(htmlContent);

});
