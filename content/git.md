Title: Git
Subtitle: Distribuovaný systém správy verzí
Category: Programování
Tags: programování, Git, Céčko

[TOC]

[Git]: https://cs.wikipedia.org/wiki/Git
[GitHub]: https://cs.wikipedia.org/wiki/GitHub
[GitLab]: https://cs.wikipedia.org/wiki/GitLab
[SSH]: https://cs.wikipedia.org/wiki/SSH
[Pro Git]: https://knihy.nic.cz/#ProGit


Git najdete na <https://git-scm.com/>. Ovládá se z příkazové řádky. Pokud
toužíte po nějakém grafickém ovládání stačí si vybrat 
z [dlouhého seznamu](https://git-scm.com/downloads/guis/) ten,
co se vám bude zdát nejhezčí. GitHub má svou vlastní grafickou
[aplikaci](https://desktop.github.com).

Vynikajícím začátkem s Gitem je volně šiřitelná kniha [Pro Git][],
ve které najdete vše potřebné v češtině. Lze číst i na webu: 

  * [první vydání](https://git-scm.com/book/cs/v1) -- celé v češtině
  * [druhé vydání](https://git-scm.com/book/cs/v2) -- není přeloženo celé;
    můžete se tedy [zapojit do překladu](https://github.com/pepr/progit2-cs).

Pro efektivní používaní tohoto skvělého nástroje vám stačí přečíst si **první tři
kapitoly**. Nenechte se tedy odradit, stojí to jistě za to.

Zde je ještě malý rychlokurs (pokud někdo není spokojen s knihou):

* [Git](http://naucse.python.cz/lessons/git/basics/)
* [Instalace gitu](http://naucse.python.cz/lessons/git/install/)
* [Větvení v Gitu](http://naucse.python.cz/lessons/git/branching/)
* [Ignorování souborů](http://naucse.python.cz/lessons/git/ignoring/)
* [Spolupráce a Open source](http://naucse.python.cz/lessons/git/collaboration/)
* [Spolupráce a Git](http://naucse.python.cz/lessons/git/git-collaboration-2in1/)

----------------

* ... nebo jeden [stručný návod](https://gitlab.com/wykys/stm8-xikon/-/tree/main/git)

Zde referenční příručka: <https://git-scm.com/docs>

Videa
================

[![Základy systému Git]({static}images/git-zaklad_preview.jpg){data-frames="16"}](https://youtu.be/BzrRey7McSk){.video-preview}

[![Git a GitHub]({static}images/git-github-2_preview.jpg){data-frames="16"}](https://youtu.be/uk_5dGlWLnQ){.video-preview}



Instalace
======================

Ve Windows doporučuji použít [Chocolatey]({filename}/chocolatey.md)

    choco install git


Počáteční nastavení
======================

Než budete Git používat, je třeba nakonfigurovat vaše jméno a e-mail. Je to proto,
jméno a e-mail autora je součástí každého snímku -- commitu.

    :::bash
    git config --global user.name "John Doe"
    git config --global user.email john@doe.name

Parametr `--global` říká, že je to nastavení pro celý uživatelský účet. Pokud ho 
nepoužijete, bude se nastavení týkat jen toho repositáře, ve kterém příkaz 
spustíte.


SSH
======================

Pokud chcete (ano chcete) používat nějaké vzdálené úložiště (např. [GitHub][]
nebo [GitLab][]), je [SSH][] jeden se způsobů jak (pohodlně) přenášet data mezi
lokálním a vzdáleným repositářem. Nejprve je třeba si vygenerovat 
[key-pair](https://cs.wikipedia.org/wiki/Asymetrick%C3%A1_kryptografie).

    ssh-keygen

nebo

    ssh-keygen -t ed25519 

Během generování budete dotazování na passphrase. Pokud tuto doplňkovou ochranu
nechcete použít a stačí vám utajení klíče, který bude ležet na vašem disku,
dejte jen dvakrát Enter. Já passphrase zadávám a používám 
[SSH agenta](https://en.wikipedia.org/wiki/Ssh-agent).

Pozorně sledujte kam se klíče uloží. Třeba v Linuxu je to
`~/.ssh/id_ed25519` pro tajný/privátní klíč a `~/.ssh/id_ed25519.pub` pro veřejný
klíč.

Celá akce končí tím, že svůj veřejný klíč -- tedy obsah souboru s příponou `.pub`,
uložíte do svého profilu na GitHub/GitLab: `Settings -> SSH and GPG keys`.

Další detaily naleznete například v [tomto článku na AbcLinuxu](
https://www.abclinuxu.cz/clanky/bezpecnost/openssh-bezpecne-a-pohodlne).

HTTPS
======================


Druhým, alternativním způsobem přenosu dat je protokol HTTPS. Zde je třeba při
každém přenosu [zadávat](https://git-scm.com/docs/gitcredentials) jméno a
heslo. Pokud používáte nějakou klíčenku pro ukládání hesel můžete to Gitu říct
takto:

    git config --global credential.helper klicenka_cmd

Pokud klíčenku nepoužíváte nebo chcete, aby vaše přihlašovací údaje uchovával
přímo Git v [nešifrované podobě](https://git-scm.com/docs/git-credential-store), je
to tento příkaz:

    git config --global credential.helper store

Git se vás pak na vaše přihlašovací údaje zeptá jen jednou a uloží se je do souboru 
`~/.git-credentials`. Ten může vypadat třeba takto:

    :::text
    https://jmeno:personal_token@github.com
    https://jmeno:heslo_nebo_token@gitlab.com

Pokud si má Git přihlašovací údaje pamatovat jen dočasně 
[nastaví se](https://git-scm.com/docs/git-credential-cache) `.helper` na `cache`.

Je ještě dobré podotknout, že GitHub neumožňuje přihlášení pomocí hesla: je nutné si
vygenerovat [Personal access token](https://github.com/settings/tokens).
(Až ho budete generovat, tak v právech odfajfkujte `workflow`.)
Návod [zde](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).


Veřejná (webová) úložiště
============================

Nejznámější veřejná úložiště pro Git jsou asi tyto:

* <https://github.com>
* <https://gitlab.com>
* <https://bitbucket.org>

Kromě ukládaní repositářů zde naleznete i rozměr sociální sítě.
Asi se nedá říct, že jeden je lepší a druhý horší. Každý má svá pro a proti.


Pokusy a hračičky
============================

* <https://learngitbranching.js.org/>
* Oh my Git: <https://ohmygit.org/>

