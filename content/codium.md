Title: VSCode/Codium
Subtitle: Pokročilý editor zdrojových kódů
Date: 2021-11-07 19:11
Category: Programování
Tags: programování, Git, Python, Céčko, STM8


[TOC]
[Codium]: https://vscodium.com/

V poslední době se mi jako editor nejvíc osvědčil VSCode/Codium. Já osobně
sice používáme [VIm](https://cs.wikipedia.org/wiki/Vim), ale ve výuce a se studenty
používáme VSCode/Codium.

[Visual Studio Code](https://code.visualstudio.com) je brilantní open-source editor 
z dílny firmy Microsoft s vestavěnou podporou pro systém
[Git]({filename}/git.md).

Pokud by vám (stejně jako mně) vadilo, že Microsoft do balíčku s VSCode zabalí
i telemetrii (dřív se tomu říkalo špehování), tak existuje projekt
[Codium][], který tímto neduhem netrpí.

Nejjednodušší způsob instalace je pomocí [chocolatey]({filename}/chocolatey.md).

    choco install vscodium
    choco install vscode

Oba projekty pochází ze stejných zdrojových kódů. Liší se pouze v tom, jak jsou
zabaleny. [Codium][] neobsahuje telemetrii a má marketplace nasměrovaný trošku
[jinam](https://open-vsx.org/extension/ms-python/python). Z toho vyplývá, že pokud 
u Codia mohou nastat problémy při instalaci některých doplňků, protože
na [open-vsx.org](https://open-vsx.org/) nejsou všechny doplňky, které najdete
na [oficiálním maktetplacu](https://marketplace.visualstudio.com/vscode).
Pokud se v této situaci ocitnete a opravdu moc toužíte po onom úžasném doplňku, který
na [open-vsx.org](https://open-vsx.org/) prostě není, stačí ho 
z  [oficiálním maktetplacu](https://marketplace.visualstudio.com/vscode) stáhnout
a v Codiu ručně nainstalovat.

![cliknu na download]({static}/images/vscode_marketplace.png)

![a potom na ...]({static}/images/install-VSIX.png)

Python
========
Pokud si doinstalujete doplněk 
`ms-python.python`
([zde](https://marketplace.visualstudio.com/items?itemName=ms-python.python) nebo
[zde]())
získáte vývojové prostředí, ve kterém vám s největší pravděpodobností nebude nic 
chybět.

![do vyhledávacího políčka zadám Python]({static}/images/ms-python.png)

Git
=======

Git je v Codiu již integrován v základní podobě. Vše další po čem byst mohli
v této oblasti toužit dostanete instalací doplňku 
[pinage404.git-extension-pack](https://open-vsx.org/extension/pinage404/git-extension-pack). 
Ten v instaluje sadu doplňků:

  * [eamodio.gitlens](https://open-vsx.org/extension/eamodio/gitlens)
  * [mhutchie.git-graph](https://open-vsx.org/extension/mhutchie/git-graph)
  * [felipecaputo.git-project-manager](https://open-vsx.org/extension/felipecaputo/git-project-manager)
  * [reduckted.vscode-gitweblinks](https://open-vsx.org/extension/reduckted/vscode-gitweblinks)


Céčko
=================

STM8
=======


