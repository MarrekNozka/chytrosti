title: Vývoj STM8 s OpenSource nástroji
tags:  STM8, programování, Céčko
category: MITka

[TOC]

[Chocolatye]: {filename}/chocolatey.md

Vývojové nástroje jsou asi největší slabinou celého ekosystému STM8. Výrobce
dodává vývojové prostředí STVD 
([návod zde](http://elektromys.eu/clanky/stm8_2_stvd/clanek.html)),
které je sice dostačující, ale staré a již nevyvíjené. Navíc se občas stane, že
na nějakém PC je problém to rozjet. Kompilátor Cosmic sice funguje, ale ta neustálá
kontrola licence, je fakt opruz; ... a jeho chybová hlášení mi taky
nepřišly úplně srozumitelná.    
A to jsem ještě nezmínil to hlavní: **Na Linuxu to
nejede!**

Takže, co s tím? Použijeme
[OpenSource](https://cs.wikipedia.org/wiki/Otev%C5%99en%C3%BD_software)
nástroje! Co je potřeba?

1. Vývojové prostředí
2. Kompilátor
3. Programátor/Flasher -- software, kterým program do čipu nahraju
4. Debuger

Když jsem to celé tvořil hodně mi pomohla tato stránka, tak se tam můžete
mrknout: <https://github.com/hbendalibraham/stm8_started>.

Předpřipravená instalace
==========================

Připravil jsem pro vás výukovou image systému [Devuan Linux](https://devuan.org/),
kde je vše již nastaveno a nainstalováno. Nemusíte tedy vše ručně instalovat, stačí 
nainstalovat [VirtualBox](https://www.virtualbox.org/) -- včetně 
[Extension Pack](https://www.virtualbox.org/wiki/Downloads)
a stáhnout si image:
[Devuan-X-MIT.ova](https://mamut.spseol.cz/nozka/public/site+VirtuaBox/000-obrazy-OVA/Devuan-X-MIT.ova).
I tak si ale přečtěte následující text ať víte, jak to máte použít.


<https://mamut.spseol.cz/nozka/public/site+VirtuaBox/000-obrazy-OVA/Devuan-X-MIT.ova>
{: .center }


Rychlá instalace
=====================

Dále v textu jsou popsány detaily. Zde je na jednom místě sepsána rychlá instalace
nástrojů, které budete potřebovat.

Windows
--------

Nejprve nainstalujte [Chocolatye][]. Tedy:

Pomocí `Win+X` a spustíte PowerShell jako Administrátor
a zadáte příkaz:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Potom doinstalujte další potřebné nástroje:

    choco install vscodium git make mingw openocd

Pokud ještě nemáte Python, můžete i Python:

    choco install python

Instalace SDCC se musí naklikat. Instalátor stáhnete zde:
<https://sourceforge.net/projects/sdcc/files/sdcc-win64/>

Linux
--------

    sudo apt install sdcc sdcc-libraries git make openocd


Startovací toolset
====================

Připravil jsem startovací *strom zdrojových kódů* a 
[Makefile](https://cs.wikipedia.org/wiki/Make).

<https://github.com/spseol/start-stm8>
{: .center }

Tento toolset se dá použít jak v Linuxu tak ve Windows. Stačí nainstalovat 
[Make](https://cs.wikipedia.org/wiki/Make),
[Bash](https://cs.wikipedia.org/wiki/Bash) a také se docela dobře hodí 
[Git]({filename}/git.md).

V Linuxu zavoláte něco jako:

    apt install make git

Ve Windows je nejsnadnější instalovat pomocí [Chocolatye][]:

    choco install make
    choco install git 

(Bash je součásti balíčku Git.)

Aby vše, co je zde popsáno fungovalo k vaší spokojenosti, je třeba dodržet
následující schéma:


```
MIT
├── Projekt-1
│   ├── inc
│   ├── lib
│   └── src
├── Projekt-2
│   ├── inc
│   ├── lib
│   └── src
├── SPL-STM8S103
│   ├── inc
│   └── src
├── SPL-STM8S105
│   ├── inc
│   └── src
└── SPL-STM8S208
    ├── inc
    └── src
```

Udělejte si adresář, kde budou všechny vaše projekty. V tom stejném adresáři
budou i adresáře nazvané `SPL`. V `SPL` adresářích je 
*Standard peripheral library* od firmy [ST](https://st.com/). Tato knihovna má
dost divnou licenci a proto vám ji nemůžu jen tak dát. Měli byste si ji 
[najít](https://duckduckgo.com/?q=stm8S+Standard+peripheral+library&t=vivaldi&ia=software)
a [stáhnout](https://www.st.com/en/embedded-software/stsw-stm8069.html). Pak je třeba 
ještě aplikovat [patch](https://github.com/gicking/STM8-SPL_SDCC_patch), který knihovnu
předělá tak, aby se dala použít s naším *SDCC* kompilátorem. No prostě:  

ve svém prvním projektu zadáte příkaz: `make spl`
{: .center }




Vývojové prostředí
====================

Jako editor a vývojové prostředí doporučuji 
[VScodium/VScode]({filename}/codium.md).

Instalace je popsána [zde]({filename}/codium.md#instalace)

Kompilace
=============

Popíšu tu celkem tři různá, mezi sebou se prolínající řešení. Špatná zpráva je,
že ani jedno z nich není 100%. Dobrá zpráva je, že při troše snahy se těm 100%
můžeme hodně přiblížit. Mezi jednotlivými řešeními se můžete snadno přepnout:

    make switch-sdcc
respektive

    make switch-sdccrm
respektive

    make switch-sdcc-gas


Řešení 1: sdcc
--------------------

[SDCC - Small Device C Compiler](http://sdcc.sourceforge.net/) je kompilátor
pro různé více či méně známé 8-bitové architektury. Z&nbsp;hlediska STM8 má jednu
zásadní nevýhodu: **nedokáže odstranit nepoužívaný kód**. Co to znamená? No...
pokud si všechno píšete sami, tak to prakticky neznamená nic. Pokud ovšem
použijete nějakou knihovnu (jako například SPL), tak už vám to začne hodně
vadit, protože výsledný strojový kód obsahuje spoustu funkcí, které jste
kompilovali jen proto, že byli součástí knihovny a ne proto, že jste je chtěli
použít. Ve výsledku program, který by mohl mít cca 2-3&nbsp;kB má 30&nbsp;kB.

To se dá částečně vyřešit tím, že budete kompilovat jen ty části SPL, které
právě v tomto projektu potřebujete. Velikost výsledného binárního souboru se
tak rapidně zmenší, ale pokud budete pracovat s čipem, který má jen 8&nbsp;kB 
paměti programu, obávám se, že to nemusí stačit....


V *Makefile* někde kolem řádku 77 najdete toto:

    :::make
    SPL_SOURCE  = stm8s_gpio.c stm8s_clk.c stm8s_tim4.c stm8s_itc.c 
    #SPL_SOURCE += stm8s_uart1.c
    SPL_SOURCE += stm8s_adc2.c
    #SPL_SOURCE += stm8s_flash.c
    #SPL_SOURCE += stm8s_tim1.c
    #SPL_SOURCE += stm8s_tim2.c
    #SPL_SOURCE += stm8s_tim3.c

... měli byste zapoznámkovat to, co nepotřebujete a odpoznámkovat to, co potřebujete.

**Instalace v Linuxu** je poměrně snadná, protože SDCC je součásti většiny
Linuxových distribucí; takže zavoláte něco jako:

    apt install sdcc sdcc-libraries

**Ve Windows** si [stáhnete
instalátor](https://sourceforge.net/projects/sdcc/files/) a pokračujte, ve
Windows oblíbeným, klikáním.


Řešení 2: sdccrm
--------------------

sdccrm je nástroj pro optimalizaci mrtvého kódu pro port stm8 sdcc, který
odstraňuje nepoužívané funkce.

<https://github.com/XaviDCR92/sdccrm>
{: .center }

Je to řešení tak nějak na půl cesty: Funguje, kód je opravdu menší, ale tato
možnost **[vylučuje použití
debugeru](https://github.com/XaviDCR92/sdccrm#known-issues)**. To někdy, někomu
vadit může, jindy jinému to vadit nemusí.

Dále je nutné ručně zadat funkce, které nechcete "optimalizovat" -- vyhodit.
Proto je třeba sledovat chybová hlášení a název chybějící funkce zadat do
souboru `.make/exclude_reference ` uvnitř projektového adresáře.


`sdccrm` si musíte buildnout ze zdrojových kódů. Pomocí
[Chocolatye][] nainstalujete `gcc` a v adresáři se zdrojovými 
soubory zavoláte `make`. Už jsem to udělal za vás a binárka je 
součástí [startovacího toolsetu](#startovaci-toolset) a je v souboru
`.make/sdccrm.exe`.
    
    :::powershell
    choco install mingw

a pak
      
    :::bash
    cd sdccrm
    make



Řešení 3: sdcc-gas
--------------------

<https://github.com/XaviDCR92/sdcc-gas>
{: .center }

Toto je asi nejlepší řešení. Vzniklo přidáním podpory [GNU
Assembleru](https://cs.wikipedia.org/wiki/GNU_Assembler) tedy -gas do SDCC
3.9.0; gas je výhodou i nevýhodou tohoto řešení. Na jednu stranu to znamená, že
můžeme používat klasické nástroje z [GNU
binutils](https://cs.wikipedia.org/wiki/GNU_binutils), na druhou stranu to
znamená, že nelze použít ty části `sdcc-libraries`, které jsou napsané v
STM8 assembleru a je nutné použít méně optimální kód napsaný v C. ...no a zřídka se
stane, že nějaká vnitřní funkcionalita (například násobení 32-bitových
integerů) je napsaná jen v STM8 assembleru a vám nezbude, než to nějak obejít nebo
danou funkci přepsat do GNU assembleru.

Pokud vás to zajímá více můžete si počíst
[zde](https://github.com/XaviDCR92/stm8-dce-example/issues/4#issuecomment-785013397)
a 
[zde](https://github.com/XaviDCR92/stm8-dce-example/issues/2#issuecomment-700907460)


Toto je důvod proč v *Makefile* sdcc-gas jsou tyto řádky:

```makefile
SDCC_LIB_SRC_DIR = /usr/local/stow/sdcc-gas/share/sdcc/lib/src/
SDCC_LIB_SOURCE = _mullong.c _divulong.c _mulint.c _modsint.c
#SDCC_LIB_SOURCE  = $(notdir $(wildcard /usr/local/stow/sdcc-gas/share/sdcc/lib/src/_*.c))
SDCC_LIB_OBJECTS := $(addprefix $(OUTPUT_DIR)/, $(SDCC_LIB_SOURCE:.c=.o))
```

Případné problémy chybějících funkcí lze tedy vyřešit doplněním jména souboru
do proměnné `SDCC_LIB_SOURCE`.

Aby vše fungovalo musíte si [stáhnout](https://github.com/XaviDCR92/sdcc-gas)
výše zmíněné zdrojové kódy a buildnout je. Já to dělám takto (používám
[stow](https://packages.debian.org/stable/stow)):

    #!bash
    sudo apt install stow
    sudo apt build-dep sdcc

    cd sdcc-gas
    ./configure --prefix=/usr/local/stow/sdcc-gas
    make
    sudo make install

    cd /usr/local/stow
    sudo stow sdcc-gas


Podobný postup použijete pro 
[STM8 port](https://stm8-binutils-gdb.sourceforge.io/) GNU binutils, který 
je potřeba pro [linkování](https://cs.wikipedia.org/wiki/Linker) a 
[debug](https://cs.wikipedia.org/wiki/GNU_Debugger).:


    #!bash
    tar xzf stm8-binutils-gdb-sources-2021-07-18.tar.gz
    cd stm8-binutils-gdb-sources
    export PREFIX=/usr/local/stow/stm8-binutils-gdb
    ./patch_binutils.sh
    cd binutils-2.30
    make
    sudo make install

    cd /usr/local/stow
    sudo stow  stm8-binutils-gdb

Tato výše popsaná kompilace ze zdrojových je teoreticky možná i na Windows,
pomocí projektu [Cygwin](https://www.cygwin.com/). Prakticky jsem to nikdy
nezkoušel. Osobně bych šel (tedy pokud by mě někdo donutil používat Widows)
spíše cestou
[Windows Subsystem for 
Linux](https://cs.wikipedia.org/wiki/Windows_Subsystem_for_Linux).
Instalace WSL 2 je 
[velice jednoduchá](https://docs.microsoft.com/en-us/windows/wsl/install).
Bohužel do WSL se nativně nedá připojit USB -- ale dá se to
[řešit](https://devblogs.microsoft.com/commandline/connecting-usb-devices-to-wsl/).



Flashing
================

OpenOCD
------------

[Open On-Chip Debugger](https://openocd.org) je nástroj pro debug a krokování
programu přímo na čipu. `openocd` umí i nahrát program do paměti zařízení.

Instalaci zajistí na Linuxu jednoduchý příkaz:

    sudo apt install openocd

na Windows je to díky [Chocolatye][] podobně jednoduché.

    choco install openodc

... jen je škoda, že Chocolatye nabízí jen verzi 0.10 (V Linuxu je většinou
dostupná verze 0.11).

Aby `openodc` umělo i pouhé flashování 
[je třeba přidat](https://gist.github.com/fabiovila/cbcf073928c0eb8036d2d2da023629d0)
na konec konfiguračního souboru `stm8s.cfg` tyto řádky:

    proc program_device {filename flashstart} {
      halt
      wait_halt
      load_image $filename $flashstart
      sleep 10
      reset halt
      resume
      sleep 10
      shutdown
    };

V Linuxu by celá cesta mohla vypadat takto: `/usr/share/openocd/scripts/target/stm8s.cfg`. 
Pokud jste do Windows instalovali pomocí Chocolatye, bude to nejspíš tato cesta:
`C:\ProgramData\chocolatey\lib\openocd\tools\OpenOCD-20190828-0.10.0\share\openocd\scripts\target\stm8s.cfg`.

stm8flash
-----------

Druhá možnost je program `stm8flash`. Ve většině linuxových distribucí je třeba
ho ručně buildnout.

<https://github.com/vdudouyt/stm8flash>
{: .center }

Debug
===========

stm8-gdb
-----------



STM8 Debugger for vsCode/Codium
----------


