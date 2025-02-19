# Turbina túnel de vento

# 1. Apresentação

O túnel de vento localizado no Laboratório de Energia e Ambiente (LEA) da Universidade de Brasília foi projetado para ser utilizado em testes de desempenho e análise de escoamentos e aerodinâmicos em turbinas hidrocinéticas e eólicas, asas de avião e aerofólios, etc. e usa instrumentação específica e um sistema de aquisição de dados e controle para disponibilizar e organizar os dados medidos.

![[tunel_vento.jpg]]
___
# 2. Os Sistemas de Medição

Atualmente no túnel de vento existem alguns sistemas para obter dados importantes para os estudos realizados nele. São eles:

## 2.1 Tubo de Pitot

Mecanismo para encontrar a velocidade de escoamento de um fluido que se baseia na diferença entre a pressão dinâmica do mesmo e a do ambiente. São bastante utilizados na aviação.

![[tubo-pitot-capa.jpg]]

Por meio da manipulação da equação de Bernoulli, chega-se à
$$v=\sqrt{\frac{2(p_e-p_d)}{\rho}}$$
onde $v$ é a velocidade do fluido, $\rho$ a densidade do ar, $p_e$ pressão de estagnação e $p_d$ pressão dinâmica. Esse valor de $v$ serve de parâmetro para os experimentos.

### 2.1.1 Instalação *in loco*

No túnel, o tubo de pitot se localiza no canto superior esquerdo de quem abre a porta, próximo do acrílico transparente ao fundo.

![[local_pitot.png]]

A tubulação que sai do tubo passa pela parte superior do túnel, descendo pelas canaletas verticais.
![[cano_pitot_cima.png]]
![[cano_pitot_descendo.png]]

Com o tubo na parte inferior do túnel, o mesmo passa por de trás da caixa da caixa de conexão antes de chegar à um medidor analógico instalado paralelamente à um medidor eletrônico que envia informações coletadas para o sistema SCADA do túnel.

![[cano_pitot_caixa.png]]
![[cano_pitot_eletronico.png]]
![[pitot_analógico.png]]

Com esses medidores, quem realiza o ensaio pode ver em redundância a informação que chega, permitindo uma calibração mais precisa dos equipamentos e uma maior confiabilidade no que está sendo medido.
___
# 3. Controle de rotação da turbina eólica 
Programa para fazer o ensaio de uma turbina eolica num túnel de vento aplicando carga e medindo torque e rotação

O programa implementa o controle de velocidade da turbina por meio de um algoritmo PID tendo como entrada o setpoint de referência e acionando uma carga elétrica ligada na saída do gerador da turbina.

Os valores de velocidade, torque, erro e sinal de controle do PWM são disponibilizados pelo protocolo ModBus Serial, assim como o valor do referência (setpoint).

Protocolo ModBus Serial ASCII. 
Configuração da porta serial 9600 bps, 8N1.

Endereço da placa ModBus = 1 e os registradores são:

| Registrador  | Endereço | variável    | tipo                                           |          range          |
| ------------ | :------: | ----------- | ---------------------------------------------- | :---------------------: |
| Entrada      |    1     | velocidade  | inteiro 2 bytes sem sinal                      |         0-65535         |
| Entrada      |    2     | torque      | inteiro 2 bytes com sinal dividir por 100      |    -327,67 a +327,67    |
| Entrada      |    3     | erro        | inteiro 2 bytes com sinal dividir por 100      |    -327,67 a +327,67    |
| Entrada      |    4     | control_pwm | inteiro 2 bytes sem sinal                      |         0-65535         |
| Holding      |    10    | setpoint    | inteiro 2 bytes sem sinal                      |         0-65535         |
| Holding      |    11    | ganho       | inteiro 2 bytes sem sinal multiplicado por 100 |    -327,67 a +327,67    |
| Holding      |    12    | offset      | inteiro 2 bytes sem sinal multiplicado por 100 |    -327,67 a +327,67    |
| Coil stattus |    1     | calibracao  | bit                                            | 0 normal / 1 calibrando |

Para gravar os dados de calibração é necessário mandar os dados de granho e offset via modbus para a placa e depois ligar e desligar o coil calibração.


