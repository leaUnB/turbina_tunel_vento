# Configuração do Computador com o Scada

## Configuração do Computador

- Sistema Operacional: *Debian 12*

Foi feita a instalação padrão do Debian 12 por meio de um pendrive bootável, seguindo o link [https://www.debian.org/download](https://www.debian.org/download).
Para eventuais dúvidas acerca da instalação, segue [vídeo do youtube explicando](https://www.youtube.com/watch?v=QOuspK8MARk).

Terminada a instalação, deve-se instalar o ScadaLTS e configurar as portas seriais do computador.

**OBS**: O ambiente de trabalho utilizada no computador e que esse passo-a-passo se baseia é o ***KDE plasma***, por isso, caso queira usar outro, talvez algum dos passos não funcione da 
forma que estamos explicando.
___

## Instalação e configuração do ScadaLTS

### Instalação

- Versão: *linux-installer_v1.3.3_ScadaLTS_v2.7.6.1_Setup*

O SCADA instalado foi o ScadaLTS, um software derivado do Scada BR, que é melhor explicado clicando [aqui](https://github.com/SCADA-LTS/Scada-LTS?tab=readme-ov-file). A versão do 
ScadaLTS utilizado foi a "[linux-installer_v1.3.3_ScadaLTS_v2.7.6.1_Setup.zip](https://github.com/SCADA-LTS/linux-installer/releases/download/v1.3.3/linux-installer_v1.3.3_ScadaLTS_v2.7.6.1_Setup.zip)."

O passo-a-passo de instalação se encontra no link "[https://github.com/SCADA-LTS/linux-installer](https://github.com/SCADA-LTS/linux-installer)".

### Rodando o Scada na máquina local

Além da instalação, para iniciar o scada, é necessário rodar os arquivos ".sh" seguindo um passo-a-passo:

1. Abrir o terminal na pasta contendo os arquivos "mysql_start.sh" e "tomcat_start.sh" (criada depois que extrai o arquivo zip);
2. Rodar o comando "sudo ./mysql_start.sh" e colocar a senha do "sudo" (O comando "sudo" é o comando do administrador, por isso vai pedir a senha).
	- Observação: Deve-se espera uns 10 segundos antes de rodar o **passo 3**.
3. Sem fechar o terminal anterior, abra outro terminal na mesma pasta e rode o comando "./tomcat_start.sh".
	- Após rodar o comando anterior, espere uns 15 segundos antes de ir para o **passo 4**.
4. Se a instalação foi feita de forma correta e os arquivos estão rodando no fundo, o scada estará rodando no link [localhost:8080/Scada-LTS](localhost:8080/Scada-LTS).

Com o Scada rodando, o acesso é dado por meio do login e senha padrões "admin".
___

## Configuração cabo ethernet

Para acessar as informações fornecidas no CLP, é necessário configurar o cabo de comunicação ethernet (o cabo azul, o mesmo que em redes domésticas é utilizado para internet cabeada)

### IPs fixos

No prédio, existem 2 IPs fixos, um usado no CLP e outro no computador com Scada. 
Para configurar o IP do computador, deve-se seguir o seguinte passo-a-passo:


