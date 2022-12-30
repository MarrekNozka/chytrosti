Title: PRG
Subtitle: Programování v jazyce Python
Category: Programování
Tags: Python, programování
menu: true

[TOC]

[pip]: {filename}/pip.md
Tahák
============================

Vytvořil jsem tahák, kde je z Pythonu více-méně vše, co byste měli mít v pohotovostní
výbavě. Tyto texty lze číst buď na 
[Githubu](https://github.com/spseol/PRG-No/blob/master/README.md)
nebo 
[nbvieweru](http://nbviewer.jupyter.org/github/spseol/PRG-NO/blob/master/README.ipynb).


Instalace
==================

* návod [zde](https://nbviewer.org/github/spseol/PRG-NO/blob/master/instalace.ipynb).

Klíčové je nainstalovat i [pip]({filename}/pip.md) a přidat si Python do 
proměnné prostředí `PATH`: `Add Python to PATH`, `add Python to enviroment variables`.

Editor
================

Základní instalace Pythonu už sama v sobě obsahuje jednoduché vývojové
prostředí a jednoduchou interaktivní konzolu IDLE. Toto prostředí je poměrně
jednoduché, ale rozhodně se nedá říct, že by se v něm nedalo pracovat. Existuje
ale celá řada hezčích a propracovanějších 
[vývojových prostředí](https://wiki.python.org/moin/IntegratedDevelopmentEnvironments).
Já doporučuji [VSCode/Codium]({filename}/codium.md).

Git
==============

Pro sdílení práce a odevzdávání domácích úkolů používáme systém
[Git](https://git-scm.org) a server [GitHub](https://github.com).
Stojí také za to, zmínit se 
o [GitHub programu pro vzdělávání](https://education.github.com/).

Gitu se věnuji v [samostatném postu Git]({filename}/git.md).


Dokumentace
===============

Naprostou většinu všech vašich dotazů vyřeší vyhledávač
[prostým dotazem](https://search.brave.com/search?q=how+to+python). Nicméně považuji
za dobré zmínit, že Python má svou vlastní -- docela dobrou -- 
[dokumentaci](https://doc.python.org/).

Velmi užitečná je i best practices kniha 
[Stopařův průvodce Pythontem](https://docs.python-guide.org).


Knihovny
======================

Knihovny se nejlépe instalují pomocí [pip](https://pip.pypa.io). Tématu se věnuji
v [samostatném postu Pip]({filename}/pip.md).

Interaktivní interpret shell
===============================

Pro různé zkoušení a testování se se hodí Python v režimu interaktivním režimu
([REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)).
Nejjednodušší je napsat do příkazové řádky příkaz `python` nebo `python3`.
Tento shell je ale poměrně chudý a nepohodlný. Pokud chcete trochu více
pohodlíčka doporučuji jeden z následujících.

ptpython
-------------

[ptpython](https://github.com/prompt-toolkit/ptpython) se instaluje se přes
[pip]({filename}/pip.md):

    pip install ptpython

a spouští se příkazem `ptpython` případně (viz níže) `ptipython`.
Vše z příkazové řádky. (Ve Windows ❖Win+X, PowerShell)


IPython
---------------------

[IPython](http://ipython.org/) se instaluje také pomocí
[pip][] buď přímo nebo jako součást balíčku
[Jupyter](https://jupyter.org). V Linuxu můžete místo `pip` s výhodou použít
balíčkovací systém.

    pip install ptpython ipython

Interpret se spouští příkazem `ptipython` nebo `ipython`. Někdy (na Windows
člověk nikdy neví) si musíte dát práci a najít spustitelný soubor `ipython.exe`.

Jupyter (Qt)Console
----------------------------

V Linuxu můžete opět použít balíčkovací systém. Jinak opět [pip][].

Pokud vám stačí rozhraní příkazového řádku:

    pip install jupyter-console

Pokud požadujete myšovaté grafické rozhraní:

    pip install qtconsole pyqt5

Samotné spuštění se děje zavolání příkazu `jupyter-console` nebo
`jupyter-qtconsole`.




