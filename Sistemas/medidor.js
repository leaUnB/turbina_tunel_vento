// Livre para uso sob a licença MIT

// Valores máximos e mínimos para a escala de dados
var scale_min = 0;
var scale_max = 600;

// Personalização da barra
var bar_height = 20;
var bar_width = 600;
var background_color = "#FFFFFF";
var foreground_color = "#12CE00";
var border_color = "#555555";

// Valor de exemplo
var value = 350; // Você pode mudar esse valor para testar diferentes valores

// Conversão da escala de dados para porcentagem
var percentage = 0;
if (value > scale_max) {
    percentage = 100;
} else if (value < scale_min) {
    percentage = 0;
} else {
    percentage = ((value - scale_min) / (scale_max - scale_min)) * 100;
}

// Cria a barra de progresso
var s = "";
s += "<div style='";
s += "border: 1px solid " + border_color + "; ";
s += "position: relative; ";
s += "background-color: " + background_color + "; ";
s += "width: " + bar_width + "px; ";
s += "height: " + bar_height + "px; ";
s += "' >";
s += "<div style='";
s += "background-color: " + foreground_color + "; ";
s += "height: 100%; ";
s += "width: " + percentage + "%; ";
s += "position: absolute; top: 0px; left: 0px; ";
s += "' ></div>";
s += "</div>";
document.getElementById('barra-container').innerHTML = s;

// Cria a barra de controle deslizante (sem exibir o valor)
var comando = "atualizarBarra(this.value)";
s = "<input type='range' min='" + scale_min + "' max='" + scale_max + "' value='" + value + "' ";
s += "style='width: " + bar_width + "px; height: 24px;' ";
s += "oninput='" + comando + "' >";
document.getElementById('slider-container').innerHTML = s;

// Adiciona o campo de input ao lado dos gráficos
var altura = 50;
var largura = 105;
var cor_fundo = "";
var cor_texto = "#000000";
var restringir_valores = true;
var multiplos_de = 1;
var minimo = 0;
var maximo = 600;

altura -= 6;
var comando_normal = "atualizarBarra(this.value)";
var comando_restrito = "if (this.checkValidity()) atualizarBarra(this.value)";
comando = (restringir_valores == true) ? comando_restrito : comando_normal;

s = "<input type='number' id='degub' value='" + value + "' ";
s += "style='height: " + altura + "px; width: " + largura + "px; background-color:" + cor_fundo + "; color:" + cor_texto + "; padding: 3px; font-size:50px; ' ";
s += "onchange='" + comando + "' ";
if (restringir_valores == true) {
    s += "step='" + multiplos_de + "' min='" + minimo + "' max='" + maximo + "' ";
}
s += "> </input>";
document.getElementById('input-container').innerHTML = s;

function atualizarBarra(novoValor) {
    value = novoValor;
    percentage = (value > scale_max) ? 100 : (value < scale_min) ? 0 : ((value - scale_min) / (scale_max - scale_min)) * 100;
    document.querySelector('#barra-container div div').style.width = percentage + "%";
    document.getElementById('degub').value = value;
}
