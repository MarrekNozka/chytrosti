title: MIT
subtitle: Mikroprocesorová technika
menu: true
category: MITka
tags: Céčko, STM8, programování

[TOC]

{! links.mdx !}


Pro výuku mikroprocesorové techniky používáme v současné době mikroprocesory řady 
[STM8S](https://www.st.com/en/microcontrollers-microprocessors/stm8s-series.html).


<div markdown="1" class="dlazdice flex-center">

[
![alt]({static} ./dlazdice/projekty.png)
Projektové úlohy
]({filename}./projekty.md)

</div>

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
================================================

* viz sekce [Projektové úlohy]({filename}./projekty.md).


Návody
==============================

Zde je malý rozcestník návodů: některé jsem vytvořil já, některé 
[Michal Dudka](http://elektromys.eu/stm8.php), některé 
[Honza Vykydal](https://gitlab.com/wykys/).


<div markdown="1" class="dlazdice">

[
 ![ ]({static} ./dlazdice/cecko2.png)
 Céčko --  pác věcí, kterých byste si fakt měli všimnout
]({filename}./cecko.md)


[
 ![ ]({static} ./dlazdice/clib.png)
 Oddělená kompilace a vlastní knihovny
]({filename}./kompilace_knihovny.md)

[  ![ ]({static} ./dlazdice/deleni.png)
   Dělení v pevné řadové čárce
]({filename}./deleni_fixpoint.md)

[ 
![ ]({static} ./dlazdice/zvuk.png)
Generování zvuku -- základy]({filename}./zvuk-zaklad.md)

[
![ ]({static} ./dlazdice/casovac.png)
Základní použití časovače]({filename}./casovace.md)

[
![ ]({static} ./dlazdice/pwm.png)
Použití časovače jako generátoru PWM]({filename}./pwm.md)

[
![ ]({static} ./dlazdice/ultrasonic.png)
Ultrazvukový měřič vzdálenosti pomocí timeru TIM2]({filename}./tim2_ultrasonic.md)

</div>

------------------------------------------------

<div markdown="1" class="dlazdice">

[
![ ]({static} ./dlazdice/progdebug.png)
STM8 Programátory a Debuggery](http://elektromys.eu/clanky/stm8_0_stvp/clanek.html)

[
![ ]({static} ./dlazdice/install.png)
Instalace a vytvoření projektu ve Windows](http://elektromys.eu/clanky/stm8_2_stvd/clanek.html)

[
![ ]({static} ./dlazdice/nucleo.png)
STM8S208 Nucleo](http://elektromys.eu/clanky/stm8_1_nucleo/clanek.html)

</div>


------------------------------------------------

<div markdown="1" class="dlazdice">

[
![ ]({static} ./dlazdice/i-o.png)
Vstupy a výstupy 1 -- základy](http://elektromys.eu/clanky/stm8_3_gpio1/clanek.html)

[
![ ]({static} ./dlazdice/button.png)
Vstupy a výstupy 2 -- tlačítko](http://elektromys.eu/clanky/stm8_4_gpio2/clanek.html)

[
![ ]({static} ./dlazdice/urovne.png)
Vstupy a výstupy 3 -- logické úrovně](http://elektromys.eu/clanky/stm8_5_gpio3/clanek.html)

[
![ ]({static} ./dlazdice/pullup.png)
Vstupy a výstupy 4 -- PullUp rezistory](http://elektromys.eu/clanky/stm8_6_gpio4/clanek.html)

[
![ ]({static} ./dlazdice/opendrain.png)
Vstupy a výstupy 5 -- Open-Drain](http://elektromys.eu/clanky/stm8_7_gpio5/clanek.html)

</div>

------------------------------------------------

<div markdown="1" class="dlazdice">


[
![ ]({static} ./dlazdice/max7219.png)
Ovládání displeje s MAX7219](http://elektromys.eu/clanky/stm8_8_max7219/clanek.html)

[
![ ]({static} ./dlazdice/clock-signal.png)
Clock](http://elektromys.eu/clanky/stm8_9_clock/clanek.html)

[
![ ]({static} ./dlazdice/lcd-2x16.png)
Alfanumerické LCD](http://elektromys.eu/clanky/stm8_10_lcd/clanek.html)

[
![ ]({static} ./dlazdice/multitasking.png)
Knihovna milis -- "Multitasking"][milis]

[
![ ]({static} ./dlazdice/stavovy_automat.png)
Stavový automat](http://elektromys.eu/clanky/stm8_12_automat/clanek.html)

[
![ ]({static} ./dlazdice/nabojova_pumpa.png)
Nábojová pumpa](http://elektromys.eu/clanky/stm8_13_chargepump/clanek.html)

[
![ ]({static} ./dlazdice/7segment.png)
Buzení 7segmentového displeje](http://elektromys.eu/clanky/stm8_14_7seg/clanek.html)

[
![ ]({static} ./dlazdice/adc.png)
AD převodník](http://elektromys.eu/clanky/stm8_15_adc1/clanek.html)

</div>

------------------------------------------------

<div markdown="1" class="dlazdice">

[
![ ]({static} ./dlazdice/ext-irq.png)
Externí přerušení - EXTI](https://gitlab.com/wykys/stm8-xikon/-/tree/main/exti)

[
![ ]({static} ./dlazdice/counter.png)
Čítače / Časovače](https://gitlab.com/wykys/stm8-xikon/-/tree/main/tim)

</div>

------------------------------------------------

<div markdown="1" class="dlazdice">

[
![ ]({static} ./dlazdice/ir-sensor.png)
IR senzor](http://elektromys.eu/clanky/avr1_adc2/clanek.html)

[
![ ]({static} ./dlazdice/i2c.png)
I2C – Relativně jednoduše](http://elektromys.eu/clanky/ele_i2c/clanek.html)

</div>


Další velice cenné informace 
------------------------------------------------
... najdete u Michala v sekcích:

* [Elektro](http://elektromys.eu/elektro.php)
* [Různé krátké poznámky](http://elektromys.eu/kratke.php)


Vývojové nástroje
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
* Toolchain pro kompilátor SDCC a GNU Make: <https://gitlab.com/spseol/mit-no/STM8S-toolchain>
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


Další užitečné nástroje
===============================

The Dot Factory
: Generátor obrázků a fontů pro maticové displaye
: <http://www.eran.io/the-dot-factory-an-lcd-font-and-image-generator/>

Odkazy
============================================

* <http://www.fit.vutbr.cz/~martinek/clang/>
* <http://jaknaprojekty.davidm.cz/>
* <https://www.tutorialspoint.com/cprogramming/>
* Wikibook [Programuje v jazyce C](https://cs.wikipedia.org/wiki/C_(programovací_jazyk)).

