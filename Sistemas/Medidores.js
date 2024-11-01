/* Livre para uso sob a licenÃ§a MIT  */

// DescriÃ§Ã£o do medidor
var descricao = "Temp (inativo)";
// FormataÃ§Ã£o do valor
var prefixo = "";
var sufixo = " °C";
var casas_decimais = 1;
// Tamanho do elemento
var tamanho = 200;
// Configurar a escala do medidorA AQUI 100
var maximo = 45;
var minimo = 25.4;
// Configurar cores (o fundo por padrÃ£o Ã© transparente)
var cor_do_fundo = "";
var cor_do_texto = "#000000";
// Defina a cor padrÃ£o da barra do medidor
var cor_padrao = "#12CE00";
// Habilitar cores extra para determinados valores
var usar_cores_extra = false;
// Configurar cores extra e seus respectivos valores
// Usar formato >> "cor:valor", <<
var cores_extra = [
	"#FFC200:70",
	"#FF6800:80",
	"#FF0000:90",
];

// NÃ�O ALTERE A PARTIR DAQUI

// ConversÃ£o de escala para radianos
var anguloArco = undefined;
if (value > maximo) {
	anguloArco = 2 * Math.PI;
} else if (value < minimo) {
	anguloArco = Math.PI;
} else {
	anguloArco = Math.PI + ((value - minimo) / (maximo - minimo)) * Math.PI
}

// DefiniÃ§Ã£o das cores do medidor
var cor = cor_padrao;
if (usar_cores_extra == true) {
	for (var i in cores_extra) {
		var index = Number(i);
		var valor_atual = Number(cores_extra[index].substring((cores_extra[index].lastIndexOf(":") + 1)));
		var proximo_valor = undefined;
		
		if (typeof cores_extra[(index + 1)] == "string") {
			proximo_valor = Number(cores_extra[(index + 1)].substring((cores_extra[(index + 1)].lastIndexOf(":") + 1)));
		}
		
		if ((value >= valor_atual) && ((value < proximo_valor) || (typeof proximo_valor == "undefined"))) {
			cor = cores_extra[index].substring(0, cores_extra[index].lastIndexOf(":"));
		}
	}
}

if (typeof cor_do_fundo != "string" || cor_do_fundo.length < 1) {
	cor_do_fundo = "rgb(255, 255, 255, 0)";
}


// CriaÃ§Ã£o de elementos HTML
var s = "";
s += "<div>";
s += "	<canvas id='medidor" + pointComponent.id + "' height='" + (0.75 * tamanho) + "' width='" + tamanho + "'>";
s += "			<center>";
s += "				<strong>Seu navegador Ã© antigo e nÃ£o suporta este recurso.<br>Por favor, atualize-o.</strong>";
s += "				<p>\" + descricao + \":\" + valorExibicao + \"</p>";
s += "			</center>";
s += "	</canvas>";
s += "</div>";
	
// CriaÃ§Ã£o de cÃ³digo JavaScript
s += "<script>";

s += "var descricao = " + "\"" + descricao + "\";";
s += "var valorExibicao = " + "\"" + prefixo + value.toFixed(casas_decimais) + sufixo + "\";";
s += "var corArco = " + "\"" + cor + "\";";
s += "var corFundo = " + "\"" + cor_do_fundo + "\";";
s += "var corTexto = " + "\"" + cor_do_texto + "\";";
s += "var anguloArco = " + anguloArco + ";";
s += "var largura = " + tamanho + ";";
s += "var altura = 0.75 * largura;";
s += "var centroX = 0.5 *largura;";
s += "var centroY = 0.625 * largura;";
s += "var raio = 0.40 * largura;";
s += "var larguraLinha = (0.10 * largura);";

// Captura o elemento canvas
s += "var canvas = document.getElementById(\"medidor" + pointComponent.id + "\");";
s += "var ctx = canvas.getContext(\"2d\");";
s += "ctx.lineWidth = larguraLinha;";

// Desenha o fundo do elemento
s += "ctx.fillStyle = corFundo;";
s += "ctx.fillRect(0, 0, largura, altura);";
// Desenha a cor de fundo da circunferÃªncia
var corFundoCirc = "#CCCCCC"; 
s += "ctx.beginPath();";
s += "ctx.strokeStyle = \"" + corFundoCirc + "\";";
s += "ctx.arc(centroX, centroY, raio, Math.PI, 0);";
s += "ctx.stroke();";
s += "ctx.closePath();";

// Desenha a porcentagem, na cor selecionada
s += "ctx.beginPath();";
s += "ctx.strokeStyle = corArco;";
s += "ctx.arc(centroX, centroY, raio, Math.PI, anguloArco);";
s += "ctx.stroke();";
s += "ctx.closePath();";

// Desenha os textos
s += "ctx.lineWidth = 1;";
s += "ctx.beginPath();";
s += "ctx.fillStyle = corTexto;";
s += "ctx.textAlign = \"center\";";
s += "ctx.font = (0.12 * altura) + \"px sans-serif\";";
s += "ctx.fillText(descricao, centroX, centroY - (raio * 1.25));";
s += "ctx.font = (0.16 * altura) + \"px sans-serif\";";
s += "ctx.fillText(valorExibicao, centroX, centroY);";

s += "</script>";
return s;