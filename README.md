# Turbina tunel de vento
Programa para fazer o ensaio de uma turbina eolica num túnel de vento aplicando carga e medindo torque e rotação

O programa implementa o controle de velocidade da turbina por meio de um algoritmo PID tendo como entrada o setpoint de referência e acionando uma carga elétrica ligada na saída do gerador da turbina.

Os valores de velocidade, torque, erro e sinal de controle do PWM são disponibilizados pelo protocolo ModBus Serial, assim como o valor do referência (setpoint).

Protocolo ModBus Serial ASCII. 
Configuração da porta serial 9600 bps, 8N1.

Endereço da placa ModBus = 1 e os registradores são:

| Registrador | Endereço | variável| tipo | range |
|---|:---:|---|---|:---:|
| Entrada | 1 | velocidade | inteiro 2 bytes sem sinal | 0-65535 |
| Entrada | 2 | torque | inteiro 2 bytes com sinal dividir por 100 | -327,67 a +327,67 |
| Entrada | 3 | erro   | inteiro 2 bytes com sinal dividir por 100 | -327,67 a +327,67 |
| Entrada | 4 | control_pwm | inteiro 2 bytes sem sinal |0-65535 |
| Holding | 10 | setpoint   | inteiro 2 bytes sem sinal |0-65535 |
| Holding | 11 | ganho      | inteiro 2 bytes sem sinal multiplicado por 100 |-327,67 a +327,67 |
| Holding | 12 | offset     | inteiro 2 bytes sem sinal multiplicado por 100|-327,67 a +327,67 |
| Coil stattus | 1 | calibracao | bit | 0 normal / 1 calibrando |

Para gravar os dados de calibração é necessário mandar os dados de granho e offset via modbus para a placa e depois ligar e desligar o coil calibração.


