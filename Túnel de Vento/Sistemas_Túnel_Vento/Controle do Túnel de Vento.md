# 1 Controle do Túnel de Vento

O controle do túnel e realizado por meio de um motor síncrono, um inversor, um CLP e um sistema de SCADA (*Supervisory Control and Data Aquisition*, em inglês), além de um sensor de porta aberta e um botão de parada.

![](../Imagens/controle_tunel.png)

## 1.1 Motor Síncrono



## 1.2 Inversor

O inversor utilizado é o [CFW 09](../Manuais/inversor.pdf) da empresa WEG.
 
## 1.3 CLP

O Controlador Lógico Programável (PLC na sigla em inglês) utilizado é o [S7 1200](../Manuais/s71200_system_manual_en-US_en-US.pdf) da marca Siemens.

## 1.4 SCADA

O Sistema Supervisório de Controle e Aquisição de Dados (SCADA, na sigla em inglês) utilizado é o [SCADA LTS](https://github.com/SCADA-LTS/Scada-LTS), um software de código aberto desenvolvido na base do [Scada BR](https://scadabr.org/) que é um software desenvovlido no Brasil.

Atualmente é o responsável por controlar da velocidade do vento e informar os valores de pressão e temperatura no interior do túnel.

## 1.5 Sensor de porta aberta

Um sensor de continuidade composto por dois fios, onde um fica conectado na parte móvel da porta do túnel e o outro na parte fixa da estrutura. Quando fechada a porta, fecha-se o circuito e assim o sistema supervisório sabe que pode ligar o túnel.

![](../Imagens/sensor_porta.jpg)

Ambos fios passam juntos por de baixo do túnel de vento até a caixa de conexão

![](../Imagens/sensor_fios.jpg)

Dentro da caixa de conexão, ambos fios seguem juntos até o CLP, antes de chegarem ao sistema SCADA.

## 1.6 Botão de parada
