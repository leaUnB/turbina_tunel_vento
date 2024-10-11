# Inicializando o Scada quando o computador ligar

Com o Scada já instalado no computador, é necessário que, para a sua inicialização, o **mysql** e o **tomcat** estejam rodando. 
Como o computador usado tem a finalidade, por enquanto, de apenas rodar o scada, optou-se por, na hora da inicialização, o rodar 
de forma automática, sem a necessidade de comandos no terminal pelo usuário.
___

## Criação de pastas

No computador, criamos duas pastas: Uma chamada "bin" e outra chamada "scadalts". Na ***scadalts***, instalamos o ScadaLTS, no 
***bin***, colcamos o código bash "ScadaLTS" (o código que inicializa o **mysql** e o **tomcat**). Como o ScadaLTS instalado no 
linux não vem com uma inicialização automática, criamos esse código.

## O Código

Com o código .sh presente nessa pasta do Github, baixamos ela para o nosso computador e colocamos ela na pasta ***bin***.

## A inicialização

Abrindo o terminal, coloca-se o comando 'sudo contrab -e'. Com esse comando, a senha de admin será pedida e, depois de colcada, 
abrirá uma nota no 'nano' (editor de texto do terminal) que, no final dela, apertamos a tecla "Enter" e, nessa linha, colocamos 
o comando:

'@reboot /bin/bash /home/tunel/bin/ScadaLTS'

Esse comando no arquivo contrab faz com que, na hora em que o sistema é inicalizado, o ScadaLTS rode ao fundo de forma 
automática sem abrir o terminal.

Terminado de escrever esse comando, clicamos no **Ctrl+x**, no **S** e damos enter duas vezes. Feito isso, basta reiniciar o computador e 
acessar o Scada pelo navegador.

___

## Problemas que podem ser encontrados

1. Os caminhos usados nesse passo-a-passo são referentes à forma com eu fiz a instalação do Debian e do Scada. **É NECESSÁRIO 
MUDAR O CAMINHO PARA CADA COMPUTADOR**;
2. Pode ser que o código .sh não tenha permissão de ser executada. Isso se resolve por 
meio do comando 'chmod +r /home/tunel/bin/ScadaLTS';
