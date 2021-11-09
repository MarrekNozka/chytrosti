Title: Chocolatey
Subtitle: The package manager for Windows
Date: 2021-11-09 17:28
Category: Programování
Tags: programování, Git, Python, STM8

[TOC]

Chocolatey je správce balíčků pro operační systém windows. Dá se říct, že se snaží
o co nejjednodušší instalaci software. Podobný způsob instalace je znám z linuxových
distribucí.

Já tento způsob instalace doporučuji a zatím se mi jen a jen osvědčil. Nemusíte SW nikde
dlouze hledat instalovat atd. 
Například instalaci VSCodia a Pythonu zajistí tyto dva příkazy:

    choco install vscodium
    choco install python 

Pokud vás zajímá co všechno v repositáři balíčků najdete koukněte se na 
<https://community.chocolatey.org/packages>.

Instalace chocolatey
=======================

Celý projekt na jdete na stránce <https://chocolatey.org>. Pokyny 
jak to celá nainstalovat potom na <https://chocolatey.org/install>.
Když to hodně zjednoduším:

Pomocí `Win+X` a spustíte PowerShell jako Administrátor
a zadáte příkaz:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Pokud chcete nějaké klikátko tak ho doinstalujete příkazem:

```
choco install chocolateygui
```

Python
============

Pokud pracujete s [Pythonem]({filename}/prg/prg.md) stačí nainstalovat VSCodium
[nebo]({filename}/codium.md) VScode... a Python a taky asi Git

    choco install vscodium
    choco install vscode

    choco install python
    choco install git


STM8
============

Pokud pracujete v [MIT]({filename}/mit/mit.md) s STM8 nainstalujete VSCodium
[nebo]({filename}/codium.md) VScode... a Git a GNU Make a OpenOCD. No a GCC a Python
se taky docela hodí.

    choco install vscodium
    choco install vscode

    choco install git
    choco install make
    choco install openocd
    choco install mingw
    choco install python
