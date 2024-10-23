title: Generování zvuku -- základy
tags: Céčko, STM8, zvuk
category: MITka

[TOC]

{! links.mdx !}

[Zvuk](https://cs.wikipedia.org/wiki/Zvuk) je jak známo mechanické vlnění.
Pro jeho vyloudění tedy potřebujeme nějaký "vlnič" -- tedy elektro-akustický
měnič. 

![>>]({static}./img/piezo_obr.png)

Nejjednodušší je asi použít piezo měnič. Ten má ovšem poněkud omezený
frekvenční rozsah. Jeho frekvenční charakteristika může vypadat například
takto:

![|=|]({static}./img/piezo_f_ch.png)

(Mimochodem prý existuje nějaký výzkum, podle kterého optimální frekvence pro
budík je 100 Hz; nebo to bylo 300 Hz? Prostě poměrně nízký kmitočet. Ale levné
bezporuchové piezo-měniče takto nízko prostě nejdou. Tak na nás ty budíky
pískají a pípají a my vstáváme potom naštvaní.)

Další možností je použít reproduktorek. V tomto případě je třeba posílit výstup
tranzistorem. Zapojení tedy může vypadat například takto: 

![micro-controller, piezo, repro]({static}./img/stm8-zvuk-1.png)

Tranzistor je ve spínacím režimu a membrána reproduktoru má pouze dvě polohy.
Tedy klidovou polohu (bez proudu) nebo výchylku odpovídající kladnému proudu.
Do výchylky odpovídající zápornému proudu se membrána nedostane, protože proud
protéká vždy jedním směrem. Dioda D1 vybíjí cívku reproduktoru, při sestupné
hraně.

Program, který nám vyloudí frekvenci $500\,\mathrm{Hz}$ může vypadat například takto. 
Perioda je $2\,\mathrm{ms}$. Půl periody tedy $1\,\mathrm{ms}$.



```c
void main(void)
{
    init();

    while (1) {
        PZ_UP;
        delay_ms(1);
        PZ_DOWN;
        delay_ms(1);
    }
}
```

![obdélníkový časový průběh %%]({static}./img/obdelnik.png)

Pokud chci jen pípnout a poté nechat chvilku ticho jednoduše nebudu cvičit s
membránou do nekonečna, ale pouze několikrát ($20 \cdot 2\,\mathrm{ms}$) a pak nechám chvilku
ticho.

```c
void main()
{
    init();

    uint16_t i;

    while (1) {
        for (i = 0; i < 20; ++i) {
            PZ_UP;
            delay_ms(1);
            PZ_DOWN;
            delay_ms(1);
        }
        delay_ms(60);
    }
}
```

![Pípání %%]({static}./img/pipani.png)

Tento způsob práce je ale blokující, protože se pořád jen čeká. Mikroprocesor
vlastně pořádně nemůže dělat nic jiného. Proto použijeme 
[multitasking][milis] [^1] a [stavový automat][Stavový automat].

[^1]: [knihovna milis](https://github.com/spseol/start-stm8/blob/main/src/milis.c)


```c
void main(void)
{
    uint32_t timeL = 0;
    uint32_t lastTime = 0;
    uint16_t count = 0;
    enum state_of {
        STATE_PAUSE,
        STATE_UP,
        STATE_DOWN
    } state = STATE_UP;
    uint32_t time = 0;

    init();

    while (1) {
        switch (state) {
        case STATE_PAUSE:
            PZ_DOWN;            // v pauze dám repráček do klodového stavu
            if (milis() - lastTime > 4321) {
                lastTime = milis();
                state = STATE_UP;
            }
            break;
        case STATE_UP:
            PZ_UP;
            if (milis() - lastTime >= 4) {
                lastTime = milis();
                state = STATE_DOWN;
            }
            break;
        case STATE_DOWN:
            PZ_DOWN;
            if (count >= 10) {
                count = 0;
                lastTime = milis();
                state = STATE_PAUSE;
                break;
            }
            if (milis() - lastTime >= 4) {
                lastTime = milis();
                count++;
                state = STATE_UP;
            }
            break;
        default:
            state = STATE_PAUSE;
        }

        if (milis() - timeL > 500) {
            timeL = milis();
            LED_REVERSE;
        }
    }
}

```

Zdrojové kódy
=====================

Kompletní zdrojové kódy naleznete v repositáři na GitHubu:   
<https://github.com/spseol/STM8-zvuk-zaklad>


Beeper
=======================

Také je dobré poznamenat, že dnešní mikroprocesory mají pro generování zvuků nízkých
kmitočtů vlastní periferii nazvanou Beeper. Její použití bude pro váš program jistě 
jednodušší než si zvuk generovat samy. Ne nedá se nastavit libovolný kmitočet a krok je 
poměrně hrubý; ale často to potřebám jednoduché zvukové signalizace plně postačí.

Více o této periferii nejdete 
v [Michalově článku](http://elektromys.eu/clanky/stm8_17_beeper/clanek.html).


<div markdown="1" class="dlazdice">

[
![alt]({static} ./dlazdice/beeper.png)
STM8 Beeper
](http://elektromys.eu/clanky/stm8_17_beeper/clanek.html)

</div>
