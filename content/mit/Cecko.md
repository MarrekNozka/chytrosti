Title: Céčko --  pác věcí, kterých byste si fakt měli všimnout
Date: 2021-04-23 07:44
category: MITka
tags: Céčko, STM8

[TOC]

Je hodně věcí, o kterých se dá mluvit v souvislosti s jazykem C. Nechci sem
psát učebnici, protože je jich napsaných spousta. Mám ale dojem, že je potřeba
napsat malý přehled toho, co byste měli v souvislosti s programováním
mikroprocesorů vzít jistě v potaz. Zde tedy nabízím výcuc, který by každý náš
student měl během 3. ročníku zvládnout.

Nebo možná naopak: To, co je zde zmíněno (i to, na co se jen odkazuji) byste
fakt měli znát! Bez toho se nehnete.

Nejlepší [učebnice jazyka C je ta od Pavla Herouta](https://search.brave.com/search?q=+Pavel+Herout+U%C4%8Debnice+jazyka+C&source=web). 
Patří k ní i druhý díl, ale ten není pro embeded programování tolik důležitý.

![Nejlepší učebnice jazyka C je ta od Pavla Herouta %%]({static}./market1.jpg)

Pokud hledáte nějaký online návod nebo referenční příručku, můžete začít třeba
tu:

* <https://www.sallyx.org/sally/c/>
* <https://www.w3schools.com/c/>
* <https://www.tutorialspoint.com/cprogramming/index.htm>


Funkce `main` a ostatní funkce
=================================

Hlavní program se nachází v funkci `main`. Funkce main tedy musí být v každém
programu/projektu. V našem případě by funkce `main` měla obsahovat nekonečnou
smyčku hlavního programu. Procesor musí stále něco dělat, proto musí běžet v
nekonečné smyčce. Nekonečnou smyčku vytvoříme pomocí cyklu `while` nebo `for`.

```c
void main(void)
{

    while (1) {
        udelej_to();
        udelej_tohle();
    }
}
```

```c
void main(void)
{

    for (;;) {
        udelej_to();
        udelej_tohle();
    }
}

```
Obecně vypadá hlavička [funkce](https://www.w3schools.com/c/c_functions.php) takto:

`datový_typ_návratové_hodnoty název_funkce(datový_typ_parametru jméno_parametru)`

konkrétně pak takto:

```c
int16_t prevod(int8_t a,b)
{
    int c;

    c = 10 * a + b;
    return c
}
```

Funkce jménem `prevod` vrací 16-bitové číslo datového typu `int16_t`. Jako
parametry funkce přebírá dvě 8-bitová čísla `a` a `b` typu `int8_t`.
Funkci potom můžeme volat třeba takto:

```c
int16_t cislo;
cislo = prevod(7,5);
```

Pokud funkce nic nevrací, nebo nemá žádné parametry použijeme klíčové slovo
`void`.

```c
void delay_1ms(void)
{
    _delay_us(250);
    _delay_us(250);
    _delay_us(250);
    _delay_us(248);
}
```

Když funkci voláme, musíme vždy uvést závorky, i když nepřebírá žádné parametry:

```c
delay_1ms();
```


Jak je to vlastně s kompilací?
================================

Mějme tento zdrojový text:

```c

#include "stm8s.h"
#include "milis.h"

#define LED_PORT GPIOC
#define LED_PIN  GPIO_PIN_5
#define LED_HIGH   GPIO_WriteHigh(LED_PORT, LED_PIN)
#define LED_LOW  GPIO_WriteLow(LED_PORT, LED_PIN)
#define LED_REVERSE GPIO_WriteReverse(LED_PORT, LED_PIN)

void setup(void)
{
    CLK_HSIPrescalerConfig(CLK_PRESCALER_HSIDIV1);      // taktovani MCU na 16MHz
    GPIO_Init(LED_PORT, LED_PIN, GPIO_MODE_OUT_PP_LOW_SLOW);
    GPIO_Init(BTN_PORT, BTN_PIN, GPIO_MODE_IN_FL_NO_IT);

    init_milis();
}


int main(void)
{
    uint32_t time = 0;

    setup();

    while (1) {

        if (milis() - time > 333) {
            LED_REVERSE; 
            time = milis();
        }

    }
}
```

U jazyka C se převod zdrojového textu do strojové hexadecimální podoby děje v
několika fázích.

Nejprve se zdrojový text předzpracuje pomocí **preprocesoru** -- ten vloží do
zdrojového textu hlavičkové soubory a expanduje všechna *makra*. Všechny *direktivy*, 
kterým rozumí preprocesor začínají znakem `#`.

![překlad %%]({static}./compilation.png)

Následuje zpravování **kompilátorem**. Ten převede zdrojový text do podoby
**relativního objektového kódu** příslušného mikroprocesoru. To je již téměř
hotový program ve strojovém kódu, ale adresy použitých *proměnný* a *funkcí*
ještě nejsou známé a jsou tedy jen relativní. Výsledkem je objektový soubor s
příponou `.o` nebo `.obj`.

V našem příkladu je volána funkce `GPIO_Init`, jejíž tělo (definice) je ale
uvedena v jiném souboru, který se překládá samostatně. **Kompilátor** tedy v
tuto chvíli nezná konkrétní adresu, na které se funkce nachází -- proto/protože
neví na jaké konkrétní adrese v paměti mikropočítače bude funkce uložena.

V poslední fázi se relativní adresy proměnných a funkcí nahradí skutečnými
adresami na kterých budou tyto proměnné a funkce uloženy v paměti
mikropočítače. Tato fáze se označuje jako **linkování (linking time)** a
provádí je **linker**. Jsou k tomu potřeba všechny objektové soubory celého
projektu: tedy zdrojový text s funkcí `main` a všechny knihovny, které také
museli projít procesem kompilace. Teď už bude možné zavolat funkci `GPIO_Init`,
protože linker do strojového kódu vloží její skutečnou adresu.

Více je toto téma rozvedeno v postu
[Oddělená kompilace a vlastní knihovny]({filename}./kompilace_knihovny.md).

Základní datový typy
======================

Při embeded programování potřebuje v naprosté většině případů pracovat s celými
čísly nebo s reálnými čísly pomocí [pevné řádové
čárky](https://en.wikipedia.org/wiki/Fixed-point_arithmetic). Je tedy třeba si
vystačit s celočíselnými datovými typy. C sice nabízí datový typ `float`, ten
pro nás ale z důvodů omezené paměti není většinou vhodný.

Klasické C nabízí 
[datové typy](https://www.tutorialspoint.com/cprogramming/c_variables.htm)
`char`, `short int`, `int`, `long int`, `long long int`.
Specifikace ale neuvádí konkrétní počet bitů, který se pro daný datový typ má 
použít -- toto závisí na konkrétním kompilátoru a každý kompilátor to má jinak.
Jediná zaručená věc je toto:

```c
sizeof(char) <= sizeof(short int) <= sizeof(int) <= sizeof(long int) <= sizeof(long long int) <=
```

Operátor [`sizeof`](https://www.tutorialspoint.com/sizeof-operator-in-c)
vrací počet bytů, použitých v paměti pro danou proměnnou.

Například kompilátor SDCC to má takto:

|  type   | počet bit  | počet byte
| :----    | :----| :---          |
| char     |8 bits| 1 byte   |
| short    |16 bits| 2 bytes |
| int      |16 bits| 2 bytes |
| long     |32 bit| 4 bytes  |
| long long|64 bit| 8 bytes  |

Protože každý kompilátor je trošku jiný nikdy si nemůžete být jistí, kolik
paměti kompilátor proměnné přiřadil používají se v embeded programování
datové typy které to zaručují a kde je vše jasné hned na první pohled.
My je máme definovány v knihovně SPL a jsou dostupné jakmile zavoláme
`#include stm8s.h`.

Je pravidlem, že vlastní/uživatelské datové typy užívají posfix `_t`.
Písmeno `u` na začátku znamená `unsigned` -- tedy bez znaménka. Do takové
proměnné můžeme tedy ukládat pouze kladná čísla.

|  type   | znaménko  |počet bit  | číselný rozsah  |
| ----:   | :----:    | :---:      | :---:            |
| int8_t  | kladná i záporná| 8   | -128 až 127       |
| uint8_t  | nezáporná|       8   | 0 až 255          |
| int16_t  | kladná i záporná| 16   | -32.768 až 32.767  |
| uint16_t  | nezáporná|       16   | 0 až 65535       |
| int32_t  | kladná i záporná| 32   | -2.147.483.648 až 2.147.483.647  |
| uint32_t  | nezáporná|       32   | 0 až 4.294.967.295  |


Je myslím také dobré zmínit, že `int8_t` je ekvivalent k `char` a `uint8_t` je
ekvivalent k `unsigned char`. Rozdíl je ale v čitelnosti programu. Pokud
proměnnou deklaruji jako `char` bude její hodnota zřejmě představovat nějaký
znak, jehož číselná hodnota je v ní uložena.


Čísla a operace
==================

Čísla a
[konstanty](https://www.tutorialspoint.com/cprogramming/c_constants.htm) je
možné zapisovat v desítkové, osmičkové (prefix `0`), šestnáctkové (prefix `0x`)
nebo dvojkové (prefix `0b`)soustavě. Přičemž písmenko na konci čísla (`U`, `L`)
udává datový typ.

```c
85         /* decimal */
0213       /* octal */
0x4b       /* hexadecimal */
0b100101   /* binar */
30         /* int */
30U        /* unsigned int */
30L        /* long */
30UL       /* unsigned long */
```

**Znaková konstanta** je číselná hodnota zadaná pomocí znaku. Konkrétní číselná
hodnota konkrétního znaku je dána [Ascii
tabulkou](https://cs.wikipedia.org/wiki/ASCII). Zapisuje se do apostrofů.

Oba tyto zápisy jsou ekvivalentní:

```c

char znak;

znak = '@';
znak = 64;

```

[Operátory](https://www.tutorialspoint.com/cprogramming/c_operators.htm) zde
nebudu zevrubně popisovat ale jen zdůrazním následující:

Operátor `/` je dělení a jeho výsledek závisí na tom, s jakým datovým typem je
proveden. My používáme většinou celá čísla. Je to tedy **celočíselné** dělení.
Nedochází zde k zaokrouhlování, ale useknutí desetinné části, takže výraz
`40 / 21` bude `1`.

**Zaokrouhlování**

Operátor `%` je zbytek po celočíselném dělení takže `40 % 21` je `19`.

Dále je třeba si dát pozor a neplést si *bitové* a *logické* operátory.
Logické operátory `&&` AND, `||` OR a `!` NOT pracují s pravdivostní
hodnotou.

Například:

```c
if (a>12 && a<24) {
  printf("%d je cislo mezi 13 a 23", a);
}

```

Bitové operátory `&` AND, `|` OR, `^` EXOR a `~` NOT, `<<`, `>>` provádí bitové
s čísly.

Například:

```c
               // 1010
               // 0111
               //------ & --
10 & 7 == 2    // 0010
```
nebo

```c
               // 00000011
               //----------- << --
3<<2 == 12    //  00001100
```

Pravda a nepravda
---------------------


Návratová hodnota
---------------------


Řízení běhu programu
=======================




Větvení
------------
 
Pro
[větvení](https://www.tutorialspoint.com/cprogramming/c_decision_making.htm) se
používá výraz:

* `if` <https://www.tutorialspoint.com/cprogramming/if_statement_in_c.htm>
* `if .. else` <https://www.tutorialspoint.com/cprogramming/if_else_statement_in_c.htm>
* `switch` <https://www.tutorialspoint.com/cprogramming/switch_statement_in_c.htm>


Cykly
----------------

Pole
==============

Řetězce
------------

Ukazatele
===============


![Pavel Herout napsal i druhý díl učebnice, který ale pro mikroprocesory nevyužijeme %%]({static}./market2.jpg)
