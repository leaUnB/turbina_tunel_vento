# 1. Túnel de vento

Apresentação

O túnel de vento localizado no Laboratório de Energia e Ambiente (LEA) da Universidade de Brasília foi projetado para ser utilizado em testes de desempenho e análise de escoamentos e aerodinâmicos em turbinas hidrocinéticas e eólicas, asas de avião e aerofólios, etc. e usa instrumentação específica e um sistema de aquisição de dados e controle para disponibilizar e organizar os dados medidos.

![](./Imagens/tunel_vento.jpg)
Figura 1.1 Foto do túnel de vento
___


A Figura 1.2 representa o diagama de blocos do túnel de vento. Nele podemos perceber três principais sistemas. Na cor amarela, o sistema de controle e aquisição de dados do anemômetro de fio quente. Na cor azul, o sistema de controle do túnel de vento (que também controla o [Túnel de água](../tunel_de_agua/Readme.md)), e em vermelho, os sensores e o controlador da turbina que realizam-se os testes.

Sistema de acionamento e controle do túnel (azul/vermelho)

* Scada
* CLP
* Inversor

Sistema de instrumentação, controle e aquisição de dados dos ensaios (amarelo)

* Controlador de posição XYZ
* Transdutor anemômetro
* Dinamômetro turbina (rotação e torque)
* Tubo de pitot


![](./Imagens/tunel_vento_diagrama.png)
Figura 1.2. Diagrama de blocos do túnel de vento
___

Os dois sistemas permitem a realiazção de diversos experimentos. Cada experimento é montada conforma a sua necessidade. 
A seguir os tipos de experimentos mais usados são listados: 

* Ensaios de turbinas de eixo horizontal com dinamômetro
* Ensaios de avaliação de escoamento com anemômetro e posicionador XYZ
* Ensaios .....



## 1.1. Sistemas de acionamento e controle do túnel 


O controle de velocidade do vento no túnel e realizado por meio de um motor assíncrono, um inversor, um CLP e um sistema de SCADA (*Supervisory Control and Data Aquisition*, em inglês), além de um sensor de porta aberta e um botão de parada.

![](./Imagens/controle_tunel.png)
Figura 1.1.1. Diagrama blocos controle túnel

___


O motor de indução que aciona a hélice do túnel de vento tem capacidade de xx HP. Ele é acionado por meio de um inversor de WG modelo CFW 09 alojado num quadro de comando, junto com um controlador lógico programável CLP da Siemens modelo XXX. 

Todos os comandos para acionar o motor ou ler algumas varíaveis do motor passam pelo CLP. 
A comunicação entre o CLP e o Inversor CFW9 está documento neste [trabalho de conclusão de curso.]() que implementou a primeira versão do controlador. 


### 1.1.1. Inversor

O inversor utilizado é o [CFW 09](./Manuais/inversor.pdf) da empresa WEG.


***Parametrizações***


Por dividir o mesmo inversor com o túnel de água, antes de utilizar o túnel de vento, deve-se atentar para alguns parâmetros do inversor que precisam ser conferidos e possivelmente alterados. Os parâmetros que devem ser selecionados e os valores que devem estar aparecendo são os seguintes:

| Parâmetros | Valores motor túnel de vento | Unidades |
|------------|:---------:|---------------|
|    P401    |  21,8   | Corrente (A)  |
|    P402    |  1760   | Rotação  (RPM)|
|    P404    |  12,5   | Potência (cv) |

O procedimento para trocar os paramtros é descrito [neste tutorial.]() 
 
### 1.1.2. CLP

O Controlador Lógico Programável (PLC na sigla em inglês) utilizado é o S7 1200 da Siemens. O manual se encontra [neste link](./Manuais/s71200_system_manual_en-US_en-US.pdf).

O CLP está conectado por meio de um cabo ethernet par transado cruzado diretamente ao computador na bancada. O cabo cruzado é necessário pois a ligação é direta, sem passar por um hub ou roteador. 
A comunicação neste link ethernet é implementado por meio de TCP-IP, onde os endereços IP do computador e do CLP são fixos e configurados conforme tutorial neste [link]().

|Endereço IP CLP| Endereço IP Computador| 
|:----------:|:----------:| 
| 140.80.0.2 | 140.80.0.1 |

O CLP implementa o protocolo MODBUS-IP que permite que qualquer programa no computador supervisório possa ler registros do CLP ou mandar comandos. 

O principais registradores MODBUS que são programados no CLP para operação da turbina são :



| Nome                 | Tipo de dado | Escravo | Faixa               | Offset (baseado em 0) |
|----------------------|--------------|:-------:|---------------------|:---------------------:|
| Botao_liga           | Numerico     | 50      | Registrador holding | 0                     |
| Emergencia           | Binario      | 50      | Registrador holding | 4/0                   |
| pressao_mmh20        | Numerico     | 50      | Registrador holding | 2                     |
| ref_vel              | Numerico     | 50      | Registrador holding | 1                     |
| sensor\__porta\__fechada | Binario      | 50      | Registrador holding | 5/0                   |
| status_motor         | Binario      | 50      | Status do coil      | 0                     |
| temperatura          | Numerico     | 1       | Registrador holding | 6                     |
| velocidade_ms        | Numerico     | 50      | Registrador holding | 3                     |

Além disso o CLP monitora o sistema de emergência, composto por um [botão de parada emergencial]() e o [sensor de abertura de porta](./Imagens/sensor_porta.jpg) do túnel. 

O  sensor de continuidade composto por dois fios, onde um fica conectado na parte móvel da porta do túnel e o outro na parte fixa da estrutura. Quando fechada a porta, fecha-se o circuito e assim o sistema supervisório sabe que pode ligar o túnel.



### 1.1.3. Scada 

Toda interface oara operar a túnel é realizado por meio de um sistema de SCADA (*Supervisory Control and Data Aquisition*, em inglês).


O Sistema Supervisório de Controle e Aquisição de Dados (SCADA) utilizado é o [SCADA LTS](https://github.com/SCADA-LTS/Scada-LTS), um software de código aberto desenvolvido derivada do [ScadaBR](https://scadabr.org/) desenvolvido no Brasil.

[Tutorial para instalação e Configuração do Scada](Sistemas/Computador_Scada.md)

[Script para configurar o Scada ](Geral/init_script/Config.md)

[Script para iniciar o Scada](Geral/init_script/ScadaLTS.txt)



A tela inicial do Scada é mostrada na Figura 1.1.3. e foi criada com a intuição de poder dividir a tela em duas abas sem prejudicar a operação do túnel. 
As imagens têm as dimensões **1900x900**.

Foi projetado para que no lado esquerdo encontre-se o gráfico de velocidade e na parte direita:

- Indicador de porta aberta;
- Indicador de pressionamento do botão de parada;
- Botão de ligar e desligar o túnel;

além de espaço para visualização gráfica e escrita da temperatura, da velocidade e da pressão no interior do túnel, todos instantâneos.

*** Obs.: A visualização gráfica e escrita instantânea obtida são mostrados por meio da biblioteca [Fusca Br](https://github.com/celsou/fuscabr) que é utilizada nos softwares SCADA LTS e BR para elaboração de representações gráficas mais complexas ***


![](Geral/ScadaLTS/Interface_grafica/foto_final.png)
Figura 1.1.3
___



#### 1.1.3.1. Datapoints

Dentro do Scada, tem alguns datapoints e datasources que são primordiais para o bom funcionamento do túnel. Eles são:

- **Controle do Túnel de Vento** (*CLP_S7_1200*): Controla o túnel de vento e seus sensores;
- **Turbina de Vento**: Controla e armazena os dados do experimento da Turbina de Vento;
- **Controle do Braço Mecânico**: Controla o braço mecânico para ensaios de escoamento;

Com esses datasources, consegue-se fazer os experimentos de forma prática.

As configurações desse datasource ficaram as seguintes:

- **Nome**: ***CLP_S7_1200***;
- **Períodod de Atualização**: ***500 milisegundos***;
- **Timeout (ms)**: ***500***;
- **Retentativas**: ***2***;
- **Máxima contagem de leituras de bits**: ***2000***;
- **Máxima contagem de leitura de registradores**: ***125***;
- **Tipo de transporte**: ***TCP com manter-vivo***;
- **Host**: ***140.80.0.2***;
- **Porta**: ***502***;


[Data points e sources ](./Geral/ScadaLTS/Datapoints_e_Datasets/Datapoints%20e%20Datasources.md)

## 1.2. Sistema de instrumentação, controle e aquisição de dados dos ensaios

Descrição do hardware e funcionamento. 

* Controlador de posição XYZ
* Transdutor anemômetro
* Dinamômetro turbina (rotação e torque)
* Tubo de pitot


### 1.2.1. Controlador de posição XYZ

### 1.2.2. Transdutor anemômetro

### 1.2.3. Dinamômetro turbina (rotação e torque)

### 1.2.4. Tubo de Pitot

O sistema do tubo de pitot se encontra presente no túnel mas apenas pode ser utilizado de forma analógica, sem poder visualizar as informações coletadas no computador, apenas no medidor analógico localizado próximo ao Scada LTS.

Mecanismo para encontrar a velocidade de escoamento de um fluido que se baseia na diferença entre a pressão dinâmica do mesmo e a do ambiente. São bastante utilizados na aviação.


![](./Imagens/local_pitot.png)
Figura 1.2.4.1. Local de instalação do turbo de pitot 
___



A explicação de como o tubo de pitot está instalado e a representação no diagrama de blocos se encontra dentro da pasta **Sistemas do Túnel de Vento** com o nome [Tubo de Pitot.md](./Sistemas/Tubo%20de%20Pitot.md).


![](./Imagens/pitot_analógico.png)
Figura 1.2.4.x. Medidor analógico
___
Atualmente, esse sistema não está conectado ao computador, permitindo apenas a utilização dos dados que são obtidos de forma analógica.




## 1.3. Experimentos no Túnel de Vento

Descrição dos experimentos.

* Ensaios de turbinas de eixo horizontal com dinamômetro
* Ensaios de avaliação de escoamento com anemômetro e posicionador XYZ
* Ensaios .....

### 1.3.1 Experimento da Turbina de Eixo Horizontal

Utiliza-se um modelo reduzido de uma turbina de eixo vertical para realizar experimentos relacionados ao torque estático do rotor.

O material, o esquemático de funcionamento e como é feita a configuração dos componentes, assim como a calibração do mesmo, se encontram na pasta **Experimentos** com o nome [Turbina de Eixo Horizontal.md](./Experimentos/Turbina%20de%20Eixo%20Horizontal.md)



### 1.3.2 Ensaio com Anemômetro de Fio Quente
___