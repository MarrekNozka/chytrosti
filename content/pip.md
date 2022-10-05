Title: pip
Subtitle: Jak nainstalovat balíček pro Python
Date: 2021-11-17 15:35
Category: Programování 
Tags: Python, programování

[TOC]

[pip](https://pip.pypa.io) je instalátor balíčků pro Python. Kromě toho, že umí
nainstalovat balíček, tak umí nainstalovat i všechny jeho závislosti a umí tyto balíčky 
spravovat. To znamená, že kromě akce `install` existuje i akce `unistall` nebo 
`list`.

Někdy se stane, že při zadání příkazu `pip` obdržíte pouze hlášení, že příkaz
neexistuje. Buď jste při instalaci nezadali, že se má nainstalovat, nebo 
nejsou příslušné cesty obsaženy v proměnné `PATH`. V obou dvou případech doporučuji
znovu [spustit instalátor](https://github.com/spseol/PRG-No/blob/master/instalace.md)
a zaškrtnou příslušná políčka.

V Linuxu potom stačí něco jako: 

    apt install python3-pip python3-venv

!!! note "Malá poznámka k Linuxu"

    V Linuxových distribucích bývá Python
    většinou už nainstalován -- a to dokonce dvakrát. Příkazem `python`
    spustíte **Python2** a příkazem `python3` spustíte **Python3**. Obdobně
    to platí pro příkaz `pip` a `pip3`.

Také se může stát, že modul pip nainstalován je, ale příkaz `pip` ne.
Pro tyto případy a také pro vysvětlení některých nejasností: místo příkazu `pip`
můžete zadat delší příkaz

    python -m pip

případně...

    python3 -m pip

celý příkaz může tedy vypadat například takto:

    python3 -m pip install -U --user flask

namísto...

    pip install -U --user flask

-------------------------------------------------------------------


Ještě než se dáte do instalace zvažte zda instalovat pro celý systém, virtuální
prostředí nebo jen pro jednoho uživatele? 

Dále je dobré si všímat žlutých varovných hlášení a řídit se jejich radou:

!!! warning

    WARNING: You are using pip version 21.2.4; however, version 21.3.1 is available.
    You should consider upgrading via the '/usr/bin/python3.9 -m pip install 
    --upgrade pip' command.


Hodně zásadní je chybové hlášení, které může vypadat například takto:

!!! warning

    WARNING: The scripts pip, pip3 and pip3.9 are installed in
    '/home/marek/.local/bin' which is not on PATH. Consider adding this directory
    to PATH or, if you prefer to suppress this warning, use
    --no-warn-script-location.

Spustitelný skript se nainstaloval tam, kde ho váš shell nenajde. Je třeba toto místo
přidat do proměnné `PATH`. Ve Windows to musíte naklikat, v Linuxu je to soubor
`~/.profile` nebo `~/.zprofile` (podle toho, jaký používáte shell).

    PATH=~.local/bin:$PATH



Globální instalace
====================

Pokud budete balíček instalovat globálně pro celý systém potřebujete
administrátorská práva. Je třeba se ujistit, že si tím nepokazíte něco, co už
nainstalované máte. Mohlo by se stát, že máte nainstalovanou nějakou aplikaci,
která potřebuje knihovnu verze `x.y` a vy nyní nainstalujete tu stejnou
knihovnu verze `y.z`. Na Windows toto většinou (někdy tedy ano) řešit nemusíte,
na Linuxu typicky ano. (Na druhou stranu v Linuxu můžete spoustu knihoven
nainstalovat i bez `pip`u z&nbsp;repositářů vaší distribuce: `apt install
pytho3-flask`.)


Takže spustíte si příkazový řádek a jako superuživatel a zadáte něco jako:

    pip install flask
    pip install pyglet
    pip install jmeno_balicku


Uživatelská instalace
=======================

K uživatelské instalaci nepotřebujete administrátorská práva, protože balíčky se
instalují do vašeho domovského adresáře (profilu). Na Linuxu je to typicky adresář
`~/.local/lib/python3.X` pro balíčky a `~/.local/bin` pro spustitelné skripty.

    pip install --user flask 
    pip install --user pyglet

Pokud už je daný balíček nainstalován v systému a vy chcete novější verzi jen
do uživatelského profilu, je třeba to vynutit parametrem `-U`, který říká, že má
balíček povýšit/instalovat na nejnovější dostupnou verzi.

    pip install -U --user flask


Virtuální prostředí?
======================

[Virtuální prostředí](https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments)
umožňuje mít instalaci Pythonu (jakoby) oddělenou od instalace
v systému. Pro každý projekt si vytvoříte vlastní virtuální prostředí a do něj
instalujete potřebné balíčky v potřebné verzi. Ostatní systém a ostatní balíčky si
toho vůbec nevšimnou.

Vytvoření
---------------

Nejprve je třeba virtuální prostředí vytvořit. Např. do adresáře `.venv-projekt1`:

    python3 -m venv .venv-projekt1

Aktivace
---------------

Před začátkem práce je třeba vždy prostředí aktivovat.

V Linuxu:

    source .venv-projekt1/bin/activate

Ve Windows

    .venv-projekt1\Scripts\activate.bat


Práce
-------------

Prostředí je aktivováno a pokud tu pustíte Python bude vidět jen to, co je
zahrnuto v tomto virtuálním prostředí. Pokud pustíte `pip`, bude instalovat do
tohoto prostředí.

    pip install -U pip
    pip install flask

Deaktivace
--------------

    deactivate

Aktualizace Balíčků
==================

Aktualizace balíčků na nejnovější dostupnou verzi provedete parametrem `-U`.

    pip install -U pip
    pip install -U flask

nebo 

    pip install --user -U pip
    pip install --user -U pyglet



