# Configuração dos datapoints e datasources do Scada do Túnel de Vento

## Informações Iniciais

Dentro do Scada, tem alguns datapoints e datasources que são primordiais para o bom funcionamento do túnel. Eles são:

- **Controle do Túnel de Vento** (*CLP_S7_1200*): Controla o túnel de vento e seus sensores;
- **Turbina de Vento**: Controla e armazena os dados do experimento da Turbina de Vento;
- **Controle do Braço Mecânico**: Controla o braço mecânico para ensaios de escoamento;

Com esses datasources, consegue-se fazer os experimentos de forma prática.

___

### Controle do Túnel de Vento

As configurações desse datasource ficaram as seguintes:

- **Nome**: ***CLP_S7_1200***;
- **Períodod de Atualização**: ***500 milisegundos***;
- **Timeout (ms)**: ***500***;
- **Retentativas**: ***2***;
- **Máxima contagem de leituras de bits**: ***2000***;
- **Máxima contagem de leitura de registradores**: ***125***;
- **Máxima contagem de escrita de registradores	**:***120***;
- **Tipo de transporte**: ***TCP com manter-vivo***;
- **Host**: ***140.80.0.2***;
- **Porta**: ***502***;

Seus datapoints são: 

| Nome                 | Tipo de dado | Escravo | Faixa               | Offset (baseado em 0) |
|----------------------|--------------|---------|---------------------|-----------------------|
| Botao_liga           | Numerico     | 50      | Registrador holding | 0                     |
| Emergencia           | Binario      | 50      | Registrador holding | 4/0                   |
| pressao_mmh20        | Numerico     | 50      | Registrador holding | 2                     |
| ref_vel              | Numerico     | 50      | Registrador holding | 1                     |
| sensor_porta_fechada | Binario      | 50      | Registrador holding | 5/0                   |
| status_motor         | Binario      | 50      | Status do coil      | 0                     |
| temperatura          | Numerico     | 1       | Registrador holding | 6                     |
| velocidade_ms        | Numerico     | 50      | Registrador holding | 3                     |

Com esses valores, consegue-se controlar o túnel de vento.
