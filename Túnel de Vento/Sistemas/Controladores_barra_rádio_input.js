// Largura, em pixels
var largura = 627;
// Configuração dos valores
var minimo = 0;
var maximo = 1760;
// Exibir o valor ao lado da barra
var mostrar_valor = true;

// NÃO ALTERE A PARTIR DAQUI

var s = "";
var comando = "mango.view.setPoint(" + point.id + ", " + pointComponent.id + ", value)" ;

// Fundo verde escuro
var fundo_verde_escuro = "background-color: #289428; color: #FFFFFF; padding: 2px; font-size: 20px; margin-left: 10px;"

// Contêiner para as barras e o input
s += "<div style='display: flex; align-items: center; background-color: #289428; padding: 10px; border-radius: 15px;'>";

// Contêiner interno para alinhar verticalmente as barras
s += "<div style='flex-grow: 1;'>";

// Medidor rádio
s += "<div style='margin-bottom: 10px;'>";
s += "<input type='range' min='0' max='600' value='" + value + "' ";
s += "style='width: " + largura + "px; height: 24px; border-radius: 15px;' ";
s += "onchange='" + comando + "' >";
s += "</div>"

// Medidor barra
/* @license MIT */

// The maximum and minimum for data point scale
var scale_min = 0;
var scale_max = 600;

// Customize bar
var bar_height = 20;
var bar_width = 627;

var background_color = "#FFFFFF";
var foreground_color = "#12CE00";
var border_color = "#555555";

// Conversion of data point scale to percentage
var percentage = 0;
if (value > scale_max) {
    percentage = 100;
} else if (value < scale_min) {
    percentage = 0;
} else {
    percentage = ((value - scale_min) / (scale_max - scale_min)) * 100;
}

// Medidor barra HTML
s += "<div style='margin-bottom: 10px;'>";
s += "<div style='border: 1px solid " + border_color + "; position: relative; background-color: " + background_color + "; width: " + bar_width + "px; height: " + bar_height + "px; border-radius: 15px;'>";
s += "<div style='background-color: " + foreground_color + "; height: 100%; width: " + percentage + "%; position: absolute; top: 0px; left: 0px; border-radius: 15px;'></div>";
s += "</div>";
s += "</div>";

s += "</div>"; // Fecha o contêiner interno

// Input numérico ao lado dos medidores
s += "<div style='margin-left: 10px;'>";
s += "<input type='number' id='degub' value='" + value + "' ";
s += "style='height: 44px; width: 120px; background-color: #FFFFFF; color: #000000; padding: 2px; font-size: 20px; border-radius: 15px;' ";
s += "onchange='" + comando + "' step='1' min='0' max='600'>";
s += "</div>";

s += "</div>"; // Fecha o contêiner externo

return s;
