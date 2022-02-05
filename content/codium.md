Title: VSCode/Codium
Subtitle: Pokročilý editor zdrojových kódů
Category: Programování
Tags: programování, Git, Python, Céčko, STM8


[TOC]
[Codium]: https://vscodium.com/

V poslední době se mi jako editor nejvíc osvědčil VSCode/Codium. Já osobně sice
používáme [VIm](https://cs.wikipedia.org/wiki/Vim), ale ve výuce a se studenty
používáme VSCode/Codium. 

[Visual Studio Code](https://code.visualstudio.com) je brilantní open-source
editor z dílny firmy Microsoft s vestavěnou podporou pro systém
[Git]({filename}/git.md). Editor je multiplatformní, takže je jedno jestli
používáte MacOS, Linux nebo (nechápu proč by to někdo nělal...) Windows.

Pokud by vám (stejně jako mně) vadilo, že Microsoft do balíčku s VSCode zabalí
i telemetrii (dřív se tomu říkalo špehování), tak existuje projekt
[Codium][], který tímto neduhem netrpí.

Oba projekty pochází ze stejných zdrojových kódů. Liší se pouze v tom, jak jsou
zabaleny. [Codium][] neobsahuje telemetrii a má marketplace nasměrovaný trošku
[jinam](https://open-vsx.org/extension/ms-python/python). Z toho vyplývá, že 
mohou nastat problémy při instalaci některých doplňků, protože
na [open-vsx.org](https://open-vsx.org/) nejsou všechny doplňky, které najdete
na [oficiálním maktetplacu](https://marketplace.visualstudio.com/vscode) a naopak.
Pokud se v této situaci ocitnete a opravdu moc toužíte po onom úžasném doplňku, který
na [open-vsx.org](https://open-vsx.org/) prostě není, stačí ho 
z  [oficiálním maktetplacu](https://marketplace.visualstudio.com/vscode) stáhnout
a v Codiu ručně nainstalovat.

![cliknu na download]({static}/images/vscode_marketplace.png)

![a potom na ...]({static}/images/install-VSIX.png)

Instalace
===========

**V Linuxu** závisí instalace hodně na konkrétní distribuci. Například na Ubuntu
se to prý dělá takto:
    
    sudo apt install snapd
    sudo snap install codium --classic

Nebo můžete použít například 
[vscodium-deb-rpm-repo](https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo).

... a nebo všechno udělat [růčo](https://github.com/VSCodium/vscodium/releases).

Nejjednodušší způsob instalace **ve Windows** je pomocí
[Chocolatey]({filename}/chocolatey.md).

    choco install vscodium
    choco install vscode

Python
========
Pokud si doinstalujete doplněk 
`ms-python.python`
([zde](https://marketplace.visualstudio.com/items?itemName=ms-python.python) nebo
[zde](https://open-vsx.org/extension/ms-python/python))
získáte vývojové prostředí, ve kterém vám s největší pravděpodobností nebude nic 
chybět.

![do vyhledávacího políčka zadám Python]({static}/images/ms-python.png)

Flask/Jinaja2
------------------

Dalším užitečným doplňkem je Better Jinja (
  [samuelcolvin.jinjahtml](https://marketplace.visualstudio.com/items?itemName=samuelcolvin.jinjahtml) respektive 
  [samuelcolvin.jinjahtml](https://open-vsx.org/extension/samuelcolvin/jinjahtml)
).


Zde je dobré ještě říct, že když používáte šablony Jinja pro web, chcete většinou, aby 
vám fungovalo napovídání jak HTML, tak Jinja. Toho docílíte tak, že v nastavení si
přidáte do `Include Languages`: `"jinja-html": "html"`

![Include Languages %%]({static}/images/inc_lan.png)


Git
=======

Git je v Codiu již integrován v základní podobě. Vše další po čem byste mohli
v této oblasti toužit dostanete instalací doplňku 
Git Extension Pack [pinage404.git-extension-pack](https://open-vsx.org/extension/pinage404/git-extension-pack). 
Ten v instaluje sadu doplňků:

  * GitLens [eamodio.gitlens](https://open-vsx.org/extension/eamodio/gitlens)
  * Git Graph [mhutchie.git-graph](https://open-vsx.org/extension/mhutchie/git-graph)
  * Git Project Manager [felipecaputo.git-project-manager](https://open-vsx.org/extension/felipecaputo/git-project-manager)
  * Git Web Links [reduckted.vscode-gitweblinks](https://open-vsx.org/extension/reduckted/vscode-gitweblinks)


Céčko
=================

V souvislosti s jazykem C stojí za zmínku alespoň tyto dva doplňky:

* C/C++ for Visual Studio Code 
  [ms-vscode.cpptools](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools)
* clangd [llvm-vs-code-extensions.vscode-clangd](https://marketplace.visualstudio.com/items?itemName=llvm-vs-code-extensions.vscode-clangd) respektive 
  [llvm-vs-code-extensions.vscode-clangd](https://open-vsx.org/extension/llvm-vs-code-extensions/vscode-clangd)

Já používám ten druhý, ale možná si budete chtít vyzkoušet a nastavit ten první...

STM8
=======

Opět stojí za zmínku dva doplňky. Já mám zkušenost s tímto:

* STM8 Debugger [CL.stm8-debug](https://marketplace.visualstudio.com/items?itemName=CL.stm8-debug)

... ale jistě stojí za zmínku i toto:

* [Embedded IDE](https://docs.em-ide.com/#/en-us/)
  [CL.eide](https://open-vsx.org/extension/CL/eide)
  respektive [CL.eide](https://marketplace.visualstudio.com/items?itemName=CL.eide)
