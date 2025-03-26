# Turbina túnel de vento

# 1. Apresentação

O túnel de vento localizado no Laboratório de Energia e Ambiente (LEA) da Universidade de Brasília foi projetado para ser utilizado em testes de desempenho e análise de escoamentos e aerodinâmicos em turbinas hidrocinéticas e eólicas, asas de avião e aerofólios, etc. e usa instrumentação específica e um sistema de aquisição de dados e controle para disponibilizar e organizar os dados medidos.

![](Imagens/tunel_vento.jpg)
___
# 2. Diagrama do Túnel

O esquemático a seguir representa os sistemas do túnel de vento. Nele podemos perceber três principais sistemas. Na cor amarela, o sistema de controle e aquisição de dados do anemômetro de fio quente. Na cor azul, o sistema de controle do túnel de vento, e em vermelho, os sensores e o controlador da turbina que realiza-se os testes.

O sistema do tubo de pitot se encontra presente no túnel mas apenas pode ser utilizado de forma analógica, sem poder visualizar as informações coletadas no computador, apenas no medidor analógico localizado próximo ao Scada LTS.

![](Imagens/tunel_vento_diagrama.png)

# 3. Os Sistemas do Túnel

Atualmente no túnel de vento existem alguns sistemas para obter dados importantes para os estudos realizados nele. São eles:

## 3.1 Tubo de Pitot

Mecanismo para encontrar a velocidade de escoamento de um fluido que se baseia na diferença entre a pressão dinâmica do mesmo e a do ambiente. São bastante utilizados na aviação.

![](Imagens/tubo-pitot-capa.jpg)

Por meio da manipulação da equação de Bernoulli, chega-se à
$$v=\sqrt{\frac{2(p_e-p_d)}{\rho}}$$
onde $v$ é a velocidade do fluido, $\rho$ a densidade do ar, $p_e$ pressão de estagnação e $p_d$ pressão dinâmica. Esse valor de $v$ serve de parâmetro para os experimentos.

A explicação de como o tubo de pitot está instalado e a representação no diagrama de blocos se encontra dentro da pasta **Sistemas do Túnel de Vento** com o nome [Tubo de Pitot.md](Tubo%20de%20Pitot.md).

Atualmente, esse sistema não está conectado ao computador, permitindo apenas a utilização dos dados que são obtidos de forma analógica.

## 3.2 Controle do Túnel de Vento

O controle do túnel e realizado por meio de um motor síncrono, um inversor, um CLP e um sistema de SCADA (*Supervisory Control and Data Aquisition*, em inglês), além de um sensor de porta aberta e um botão de parada.

A explicação de cada um dos componentes do sistema de controle junto com a representação do sistema no diagrama de blocos se encontra na pasta **Sistemas do Túnel de Vento** com o nome [Controle do Túnel de Vento.md](Controle%20do%20Túnel%20de%20Vento.md).

## 3.3 Controle do Anemômetro de Fio Quente
___

# 4 Experimentos do Túnel de Vento

## 4.1 Turbina de Vento

Utiliza-se um protótipo de uma usina eólica (em tamanho reduzido) para realizar experimentos relacionados ao torque estático do rotor.

O material, o esquemático de funcionamento e como é feita a configuração dos componentes, assim como a calibração do mesmo, se encontram na pasta **Experimentos** com o nome [Turbina de Vento.md](./Experimentos/Turbina%20de%20Vento.md).



