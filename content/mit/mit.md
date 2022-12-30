title: MIT
subtitle: Mikroprocesorová technika
menu: true
category: MITka
tags: Céčko, STM8, programování

[TOC]

{! links.mdx !}


Pro výuku mikroprocesorové techniky používáme v současné době mikroprocesory řady 
[STM8S](https://www.st.com/en/microcontrollers-microprocessors/stm8s-series.html).


Návody
==============================

Michal Dudka píše skvělý web o programování mikrokontrokérů:
<http://elektromys.eu>. V sekci [STM8](http://elektromys.eu/stm8.php)
najdete spoustu pro nás zajímavých věcí:

* [STM8 Programátory a Debuggery](http://elektromys.eu/clanky/stm8_0_stvp/clanek.html)
* [Instalace a vytvoření projektu ve Windows](http://elektromys.eu/clanky/stm8_2_stvd/clanek.html)
* [STM8S208 Nucleo](http://elektromys.eu/clanky/stm8_1_nucleo/clanek.html)

&nbsp;

* [Vstupy a výstupy 1 -- základy](http://elektromys.eu/clanky/stm8_3_gpio1/clanek.html)
* [Vstupy a výstupy 2 -- tlačítko](http://elektromys.eu/clanky/stm8_4_gpio2/clanek.html)
* [Vstupy a výstupy 3 -- logické úrovně](http://elektromys.eu/clanky/stm8_5_gpio3/clanek.html)
* [Vstupy a výstupy 4 -- PullUp rezistory](http://elektromys.eu/clanky/stm8_6_gpio4/clanek.html)
* [Vstupy a výstupy 5 -- Open-Drain](http://elektromys.eu/clanky/stm8_7_gpio5/clanek.html)

&nbsp;

* [Ovládání displeje s MAX7219](http://elektromys.eu/clanky/stm8_8_max7219/clanek.html)
* [Clock](http://elektromys.eu/clanky/stm8_9_clock/clanek.html)
* [Alfanumerické LCD](http://elektromys.eu/clanky/stm8_10_lcd/clanek.html)
* [Knihovna milis -- "Multitasking"][milis]
* [Stavový automat](http://elektromys.eu/clanky/stm8_12_automat/clanek.html)
* [Nábojová pumpa](http://elektromys.eu/clanky/stm8_13_chargepump/clanek.html)
* [Buzení 7segmentového displeje](Buzení 7segmentového displeje)
* [AD převodník](http://elektromys.eu/clanky/stm8_15_adc1/clanek.html)

Honza Vykydal pak napsal:

* [Externí přerušení - EXTI](https://gitlab.com/wykys/stm8-xikon/-/tree/main/exti)
* [Čítače / Časovače](https://gitlab.com/wykys/stm8-xikon/-/tree/main/tim)

Pro potřeby svojí výuky jsem sestavil následující:

* [Generování zvuku -- základy]({filename}./zvuk-zaklad.md)
* [Základní použití časovače]({filename}./casovace.md)
* [Použití časovače jako generátoru PWM]({filename}./pwm.md)
* [Ultrazvukový měřič vzdálenosti pomocí timeru TIM2]({filename}./tim2_ultrasonic.md)

Ze dílny Michala Dudky pochází tyto pro nás zajímavé články:

* [IR senzor](http://elektromys.eu/clanky/avr1_adc2/clanek.html)
* [I2C – Relativně jednoduše](http://www.tajned.cz/2016/10/i2c-relativne-jednoduse/)

Další velice cenné informace nejdete v sekcích:

* [Elektro](http://elektromys.eu/elektro.php)
* [Různé krátké poznámky](http://elektromys.eu/kratke.php)

Dokumentace
========================

Celá řada STM8S používá stejnou sadu periferií. Jejich popis najdete
v [reference manuálu](https://duckduckgo.com/?q=STM8S+reference+manual)
[zde](https://www.st.com/content/ccc/resource/technical/document/reference_manual/9a/1b/85/07/ca/eb/4f/dd/CD00190271.pdf/files/CD00190271.pdf/jcr:content/translations/en.CD00190271.pdf).

Různé čipy pak obsahují různou sadu těchto periferií. Co přesně se nachází na
kterém čipu (plus další specifické věci) lze najít v datasheetu:

* [STM8S103](https://search.brave.com/search?q=STM8S103+datasheet)
  [zde](https://www.st.com/resource/en/datasheet/stm8s103f2.pdf)
* [STM8S105](https://search.brave.com/search?q=STM8S105+datasheet)
  [zde](https://www.st.com/resource/en/datasheet/stm8s105c4.pdf)
* [STM8S208](https://search.brave.com/search?q=STM8S208+datasheet)
  [zde](https://www.st.com/resource/en/datasheet/stm8s207mb.pdf)

![103/105 line](https://www.st.com/content/ccc/fragment/product_related/line_information/line_level_diagram/group0/b0/7b/7c/ec/41/2e/4a/8e/obn-stm8s103105-line-ln754/files/obn-stm8s103105-line-ln754.jpg/jcr:content/translations/en.obn-stm8s103105-line-ln754.jpg)

Přehled jednotlivých čipů jednotlivých řad
[rodiny STM8S](https://www.st.com/en/microcontrollers-microprocessors/stm8s-series.html)
pak najdete zde:

* [ Application Specific Line](https://www.st.com/en/microcontrollers-microprocessors/stm8s-application-specific-line.html)
* [STM8S Value line](https://www.st.com/en/microcontrollers-microprocessors/stm8s-value-line.html)
* [STM8S103/105](https://www.st.com/en/microcontrollers-microprocessors/stm8s103-105.html)
* [STM8S207/208](https://www.st.com/en/microcontrollers-microprocessors/stm8s207-208.html)

Hardware 
============

Nucleo-8S208RB
-----------------

Ve výuce používáme vývojovou desku
[Nucleo-8S208RB](https://www.st.com/en/evaluation-tools/nucleo-8s208rb.html)
s&nbsp;mikroprocesorem
[STM8S208RB](https://www.st.com/en/microcontrollers-microprocessors/stm8s208rb.html).

![Nucleo-8S208RB pinout %%]({static}./img/Nucleo-S208RB.png)

Tato deska je (ale nemusí být) napájena z&nbsp;USB. Obsahuje programátor s HW
debugerem a USB2UART bridge. Můžete si zvolit pinout, který je
Arduino-kompatibilní nebo plnohodnotný pinout, který sedí na univerzální PCB.
Je tu tedy vše, co pro&nbsp;začátek potřebujete. Vyčerpávající popis najdete v
článku [STM8S208 Nucleo](http://elektromys.eu/clanky/stm8_1_nucleo/clanek.html)
nebo v [uživatelském manuálu](https://www.st.com/resource/en/user_manual/dm00477617-stm8s208rbt6-nucleo64-board-stmicroelectronics.pdf).


STM8S Discovery
-----------------

Dalším zajímavým vývojovým kitem je
[STM8S DISCOVERY](https://www.st.com/en/evaluation-tools/stm8s-discovery.html)
s procesorem 
[STM8S105C6](https://www.st.com/en/microcontrollers-microprocessors/stm8s105c6.html).
Kit obsahuje i maličkou bastl desku a programátor lze použít k programování
libovolného procesoru STM8S. Více opět 
v [uživatelském manuálu](https://www.st.com/resource/en/user_manual/cd00250600-stm8s-discovery-stmicroelectronics.pdf).

![STM8S Discovery kit %%]({static}./img/STM8S-Discovery-kit.jpg)

Standalone programátor
-------------------------------

Při řešení samostatných projektů budeme postupně přecházíme k vlastnímu
hardware, který by už neměl být na nepájivém poli, ale spíše na desce plošných
spojů. V těchto případech budeme potřebovat μprocesor, který bude přímo v
aplikaci a standalone programátor-debuger, pomocí kterého bude možné program
ladit a nahrát. Možností je vícero -- moc hezky to má [popsáno
Michal](http://elektromys.eu/clanky/stm8_0_stvp/clanek.html). Doporučuji
přečíst!

(Jen bych doplním, že existuje ještě jeden klon ST-Linku, který se mně osobně
osvědčil: [mini ST-LINK/V2 STM8 STM32 emulator download super protection](https://www.aliexpress.com/wholesale?SearchText=ST-LINK+V2+STM8+emulator+download+super+procection))

DeroBoard
---------------

![DeroBoard photo %%]({static}./img/deroboard-photo.jpg)

V rámci dílenské praxe si ubastlíte vývojovou desku [STM8S Dero
Board](https://gitlab.com/wykys/stm8s-dero-board). Tuto desku můžete použít i
pro svoje samostatné projekty. Je osazena procesorem STM8S103F3. K dispozici
máte všechny [zdrojové soubory pro
KiCad](https://gitlab.com/wykys/stm8s-dero-board/-/tree/main/design) a 
hezkou [rozpisku součástek](https://wykys.gitlab.io/stm8s-dero-board/ibom.html).

### Nebo...

Něco podobného, se stejným procesorem lze zakoupit i od čínských výrobců:
[STM8S103F3P6 development
board](https://www.aliexpress.com/wholesale?SearchText=STM8S103F3P6+development+board).

![STM8S103F3P6 photo %%]({static}./img/STM8S103F3P6.jpeg)

Pokud poptáváte vybavenější procesor existuje podobná vývojová deska:
[STM8S105K4T6 Developmen
Board](https://www.aliexpress.com/wholesale?SearchText=STM8S105K4T6+Developmen+Board).
Ta vám může posloužit podobně jako oficiální [STM8
Discovery](https://www.st.com/en/evaluation-tools/stm8s-discovery.html).

![STM8S105K4T6 photo %%]({static}./img/STM8S105K4T6.jpg)


USB to UART Bridge
--------------------

Pokud plánujete projekt, kde μprocesor komunikuje s PCčkem, bude se vám hodit
[převodník USB TTL
UART](https://www.aliexpress.com/wholesale?SearchText=USB+TTL+UART+convertor).
Dá se běžně zakoupit i na českých e-shopech. Ještě je dobré upozornit, že ne
každý operační systém automaticky komunikuje s každým čipem, proto je dobré
věnovat pozornost tomu, jakým čipem, je osazen převodník, který hodláte
zakoupit a zda se váš OS s tímto čipem kamarádí.

![USB to TTL UART photo %%]({static}./img/USB2UART.jpg)

Univerzální PCB
------------------

Na projektové prototypování můžete s výhodou využít [univerzální (prototypovou)
desku](https://electronics.stackexchange.com/questions/55236/how-to-make-traces-on-an-universal-pcb).
Existuje celá řada variant a vzorů (třeba 
[tu](https://www.tme.eu/cz/katalog/univerzalni-plosne-spoje_100110/?s_field=1000014&s_order=asc&limit=40&currency=CZK&page=1)
nebo [tam](https://www.aliexpress.com/wholesale?SearchText=universal+prototipe+PCB+board))
universálních bastl-desek; zde bych rád upozornil na některé -- pro nás zajímavé:

* řady po třech: 
  [1](https://www.tme.eu/cz/details/rad-790-1/univerzalni-plosne-spoje/rademacher/790-1/)
  [2](https://www.aliexpress.com/item/1005002838248764.html)
* jen body:
  [1](https://www.tme.eu/cz/details/rad-811-6/univerzalni-plosne-spoje/rademacher/811-6/)
  [2](https://www.aliexpress.com/item/1005002838214518.html)
* s rozvodem napájení:
  [1](https://www.tme.eu/cz/details/pc-12/univerzalni-plosne-spoje/sci/)
  [2](https://www.aliexpress.com/item/32947164794.html)
* s roztečí Arduino shield:
  [1](https://www.tme.eu/cz/details/a000080/reseni-arduino/arduino/shield-mega-proto-pcb-rev3/)
  [2](https://www.aliexpress.com/wholesale?SearchText=arduino+prototipe+PCB+board)
  [3](https://www.aliexpress.com/item/32841354009.html)
  [4](https://www.aliexpress.com/item/32814326060.html?).
  Tuto desku můžete použít s Nucleo-kitem Nucleo-8S208RB.

!!! tip "Dutinkové a kolíkové lišty"

    K univerzálním deskám se vám budou hodit [dutinkové
    lišty](https://www.tme.eu/cz/katalog/?search=ZL262&s_field=1000011&s_order=desc)
    a [pinové
    řady](https://www.tme.eu/cz/katalog/?search=ZL201&s_field=1000011&s_order=desc),
    ([také zde](https://www.tme.eu/cz/katalog/?search=ZL211&s_field=1000011&s_order=desc))
    s jejichž pomocí můžete svou univerzální desku posadit na
    [Nucleo-8S208RB](#nucleo-8s208rb) nebo [STM8S Discovery](#stm8s-discovery).


Další součástky a hotové moduly
--------------------------------------

Je ještě spousta dalších udělátek, které stojí za to zmínit. Omezím se jen na nákupní
seznamy. Je asi jasné, že mi nejde o konkrétní obchod, ale spíše o zboží, které
se jistě dá zakoupit i někde jinde.

* [seznam na TME](https://www.tme.eu/cz/parking/c9f279be1feb850079cc8bdf88943222467af88d.html)
* [seznam na LaskKit](https://www.laskakit.cz/oblibene/89af72c11f9e5e738f3074e7aa8a0bba4200e647)
* [seznam na AliExpressu](https://www.aliexpress.com/p/wishlist/shareReflux.html?groupId=dGW2uj4YNVGDbjN2VCLzOJhU39eDkEz4y9Z4CGz2UIM%3D)



Nástroje
=====================================

Vývojové nástroje jsou IMHO největší slabina platformy STM8,
ale při troše snahy se to dá `:)`. Co se ale ST povedlo, to je nástrtoj
[STM8CubeMX](https://www.st.com/en/development-tools/stm8cubemx.html).
Doporučuji si ho nainstalovat. Není nijak klíčový, ale hodí se.


OpenSource nástroje nejen pro Linux
-------------------------------------

Celou problematiku jsem zpracoval v samostatném návodu: 
**[Vývoj STM8 s OpenSource nástroji]({filename}/mit/stm8oss.md)**. 
Ve zkratce to vypadá takto: 

* Kompilátor [SDCC](http://sdcc.sourceforge.net/)
* Jako vývojové prostředí doporučuji [VSCodium](https://vscodium.com/)
* Moje šablona pro vývoj SDCC a GNU Make <https://github.com/spseol/start-stm8>
* Starší anglický návod s několika mouchama: <https://github.com/hbendalibraham/stm8_started>

Cosmic STM8+Eclipse balíček pro Linux
-----------------------------------------

Zatím je vše ve fázi testování. Zveřejněno v lednu 2022:
<https://www.cosmicsoftware.com/download_stm8_eclipse.php>
Projekt vypadá velmi slibně.

Nástroje pro M$ Windows
--------------------------------

* Vše velmi hezky zpracoval 
  [Michal Dudka na Elektromyši](http://elektromys.eu/clanky/stm8_2_stvd/clanek.html).
  Součástí je i vzorový projekt s knihovnami pro STM8S103, STM8S105 a STM8S208.
* Jako vývojové prostředí leze použít
  [STVD](https://www.st.com/en/development-tools/stvd-stm8.html)
  s komipilátorem
  [Cosmic](https://www.cosmicsoftware.com/download_stm8_free.php).
* Oba nástroje je možné bezplatně používat, když se zaregistrujete. Bohužel
  nejsou ani jeden 
  [OpenSource](https://cs.wikipedia.org/wiki/Otevřený_software).



Odkazy
============================================

* <http://www.fit.vutbr.cz/~martinek/clang/>
* <http://jaknaprojekty.davidm.cz/>
* <https://www.tutorialspoint.com/cprogramming/>
* Wikibook [Programuje v jazyce C](https://cs.wikipedia.org/wiki/C_(programovací_jazyk)).

