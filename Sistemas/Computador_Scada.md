# Configuração do Computador com o Scada

## Configuração do Computador

- Sistema Operacional: *Ubuntu 22.04 LTS*

Foi feita a instalação padrão do Ubuntu 22.04 LTS por meio de um pendrive bootável, seguindo o link [https://releases.ubuntu.com/jammy/](https://releases.ubuntu.com/jammy/).
Para eventuais dúvidas acerca da instalação, segue [vídeo do youtube explicando](https://www.youtube.com/watch?v=QOuspK8MARk).

Terminada a instalação, deve-se instalar o ScadaLTS e configurar as portas seriais do computador.

**OBS**: O ambiente de trabalho utilizada no computador e que esse passo-a-passo se baseia é o ***KDE plasma***, por isso, caso queira usar outro, talvez algum dos passos não funcione da forma que estamos explicando.
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

1. Clicar no ícone de "Redes" no canto inferior direito do monitor;
2. Clicar em "Conexão cabeada 1";
3. Clicar em "Configurar...";
	- Será aberto as "Configurações do sistema" na aba "Conexões".
4. Escolheremos a aba "IPv4" e selecionamos o método "Manual";
5. Com isso, podemos colocar a configuração de **Servidores DNS**: ***174.16.0.2***.
6. Na parte à direita de onde tem as colunas "Endereço Máscara de rede Gateway", clicamos em "**+ Adicionar**".
7. Com isso, podemos preencher os espaços das colunas como:
	- **Endereço**: ***140.80.0.1***;
	- **Máscara de rede**: ***255.255.255.0***;

Com essa parte configurada, podemos controlar e acessar, por meio do Scada, aos **controles do túnel de vento**.

Sobre a **configuração dos datapoints e datasets do scada**, encontram-se na pasta "**Datpoints e Datasets**". 

___

## Inicialização automática do Scada

Pra tornar o sistema mais *Friendly User* (Amigável ao usuário), foi criado um *script* bash (.sh) para a realização da 
inicialização do mesmo no instante em que o computador for ligado. O script, junto com o documento explicando a configuração do 
computador, se encontra na pasta [init_script].

___
