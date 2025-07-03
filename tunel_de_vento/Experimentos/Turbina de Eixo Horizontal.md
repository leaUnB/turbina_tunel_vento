# 1. Experimento da Turbina de Eixo Horizontal

Utiliza-se um modelo reduzido de uma turbina de eixo vertical para realizar experimentos relacionados ao torque estático do rotor.

## 1.2 Modelos Reduzidos

Desde quando começaram os experimentos no túnel de vento, houveram diferentes tipos de modelos reduzidos. 

As alterações entre cada modelo foram relacionadas ao tipo de rotor utilizado, o material e a geometria da estrutura de sustentação.

### 1.2.1 Modelo Reduzido Azul

### 1.2.2 Modelo Reduzido Impresso

Sua base é feita em alumínio e a estrutura que envolve a turbina foi feita de rezina impressa em impressora 3D.

O modelo impresso foi elaborado buscando 

## 1.3 Funcionamento do Protótipo (Modelo Reduzido)

O sistema que simula o gerador da turbina eólica necessita de alguns elementos, conforme podemos ver na figura a seguir:

![](../Imagens/modelo_reduzido_exp_turbina_eol.png)

Na imagem, temos cada número representando um elemento.

1. **Eixo do Gerador**;
2. **Suporte do Gerador**;
3. **Shell para a proteção do sistema**;
4. **Tampa de fixação**;
5. **Cilindro de torção**: Onde ocorre a deformação devido ao torque do gerador;
6. **Par de Extensômetros (Fixados em 45°)**;
7. **Sensor Óptico**: Usado para a medição de rotação;

Esse sistema é comum a todos os modelos reduzidos desenvolvidos no Laboratório de Energia e Ambiente.

## 1.4 Controle de rotação da turbina eólica 

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
| Coil status |    1     | calibracao  | bit                                            | 0 normal / 1 calibrando |

Para gravar os dados de calibração é necessário mandar os dados de granho e offset via modbus para a placa e depois ligar e desligar o coil calibração.
