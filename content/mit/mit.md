title: MIT
subtitle: Mikroprocesorová technika
menu: true
category: MITka
tags: Céčko, STM8

[TOC]

{! links.mdx !}

Pro výuku mikroprocesorové techniky používáme vývojovou desku 
[Nucleo-8S208RB](https://www.st.com/en/evaluation-tools/nucleo-8s208rb.html)
s mikroprocesorem 
[STM8S208RB](https://www.st.com/en/microcontrollers-microprocessors/stm8s208rb.html).

![Nucleo-8S208RB %%]({static}./Nucleo-S208RB.png)


Dokumentace
========================

Celá řada STM8S používá stejnou sadu periferií. Jejich popis najdete
v [reference manuálu](https://duckduckgo.com/?q=STM8S+reference+manual)
[zde](https://www.st.com/content/ccc/resource/technical/document/reference_manual/9a/1b/85/07/ca/eb/4f/dd/CD00190271.pdf/files/CD00190271.pdf/jcr:content/translations/en.CD00190271.pdf).

Různé čipy pak obsahují různou sadu těchto periferií. Co přesně se nachází na
kterém čipu (plus další specifické věci) lze najít v datasheetu:

* [STM8S208](https://duckduckgo.com/?q=STM8S208+datasheet) [zde](https://www.st.com/resource/en/datasheet/stm8s207mb.pdf)
* [STM8S103](https://duckduckgo.com/?q=STM8S103+datasheet) [zde](https://www.st.com/resource/en/datasheet/stm8s103f2.pdf)
* [STM8S105](https://duckduckgo.com/?q=STM8S105+datasheet) [zde](https://www.st.com/resource/en/datasheet/stm8s105c4.pdf)

Elektromyš
---------------

Michal Dudka píše skvělý web o programování mikrokontrokérů:
<http://elektromys.eu>. V sekci [STM8](http://elektromys.eu/stm8.php)
najdete spoustu pro nás zajímavých věcí:

* [Vstupy a výstupy 1 -- základy](http://elektromys.eu/clanky/stm8_3_gpio1/clanek.html)
* [Vstupy a výstupy 2 -- tlačítko](http://elektromys.eu/clanky/stm8_4_gpio2/clanek.html)
* [Vstupy a výstupy 3 -- logické úrovně](http://elektromys.eu/clanky/stm8_5_gpio3/clanek.html)
* [Vstupy a výstupy 4 -- PullUp rezistory](http://elektromys.eu/clanky/stm8_6_gpio4/clanek.html)
* [Vstupy a výstupy 5 -- Open-Drain](http://elektromys.eu/clanky/stm8_7_gpio5/clanek.html)
* [Ovládání displeje s MAX7219](http://elektromys.eu/clanky/stm8_8_max7219/clanek.html)
* [Clock](http://elektromys.eu/clanky/stm8_9_clock/clanek.html)
* [Alfanumerické LCD](http://elektromys.eu/clanky/stm8_10_lcd/clanek.html)
* [Knihovna milis -- "Multitasking"][milis]
* [Stavový automat](http://elektromys.eu/clanky/stm8_12_automat/clanek.html)

Další velice cenné informace nejdete v sekcích:

* [Elektro](http://elektromys.eu/elektro.php)
* [Různé krátké poznámky](http://elektromys.eu/kratke.php)

Ze stejné dílny pochází tyto pro nás zajímavé články:

* [IR senzor](http://elektromys.eu/clanky/avr1_adc2/clanek.html)
* [I2C – Relativně jednoduše](http://www.tajned.cz/2016/10/i2c-relativne-jednoduse/)


Periferie
---------------------

* [Generování zvuku -- základy]({filename}./zvuk-zaklad.md)
* [Základní použití časovače]({filename}./casovace.md)
* [Použití časovače jako generátoru PWM]({filename}./pwm.md)

Součástky
==============

Seznam součástek, které se můžou hodit pro naše projekty:
<https://www.tme.eu/cz/parking/b76826f5b8a05c725adc67a6c5509e9dcd24e9ff.html>
Na váš návrh rád seznam doplním.

Šablona pro založení projektu
=================================

* moje šablona pro vývoj SDCC a GNU Make
    * <https://github.com/spseol/start-stm8>
* vzorový projekt Michala Dudky
    * <http://www.elektromys.eu/stm8s208_vzor.rar> (případně zip)
    * <http://www.elektromys.eu/stm8s105_vzor.rar> (případně zip)

OpenSource nástroje nejen pro Linux
=====================================

* Kompilátor [SDCC](http://sdcc.sourceforge.net/)
* Jako vývojové prostředí doporučuji [VSCodium](https://vscodium.com/)
* Starší anglický návod s několika mouchama: <https://github.com/hbendalibraham/stm8_started>
* Kompletní a novější český návod: [připravuje se :)]({filename}./stm8oss.md)
* ... a moje STM8S šablona <https://github.com/spseol/start-stm8>



Nástroje pro Widle
--------------------------------

* Vše velmi hezky zpracoval 
  [Michal Dudka na Elektromyši](http://elektromys.eu/stm8.php).
* Jako vývojové prostředí používáme 
  [STVD](https://www.st.com/en/development-tools/stvd-stm8.html)
  s komipilátorem
  [Cosmic](https://www.cosmicsoftware.com/download_stm8_free.php).
* Oba nástroje je možné bezplatně používat, když se zaregistrujete. Bohužel
  nejsou ani jeden 
  [OpenSource](https://cs.wikipedia.org/wiki/Otevřený_software).


Pár odkazů souvisejících s jazykem C
============================================

* <http://www.fit.vutbr.cz/~martinek/clang/>
* <http://jaknaprojekty.davidm.cz/>
* <https://www.tutorialspoint.com/cprogramming/>
* Wikibook [Programuje v jazyce C](https://cs.wikipedia.org/wiki/C_(programovací_jazyk)).
