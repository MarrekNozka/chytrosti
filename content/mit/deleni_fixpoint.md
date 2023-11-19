Title: Dělení v pevné řadové čárce
Date: 2023-10-24 19:00
category: MITka
tags: Céčko, STM8


[Pevná řádová čárka](https://en.wikipedia.org/wiki/Fixed-point_arithmetic) je 
způsob jak v paměti reprezentovat reálné číslo. To je v paměti uloženo jako celé číslo
(int) ale při jeho reprezentaci se uvažuje, že je někde pomyslná desetinná čárka.

!!! hint "Proč bych něco takového chtěl? V Céčku přece můžu použít `flat` a nemusím se dál o nic starat... Nebo je to jinak?"

    Použití datového tipu `float` není vždy možné nebo vás stojí příliš mnoho
    paměti. Obzvlášť pokud programujete mikrokontrolery nemůžete s paměti
    příliš plýtvat. A pokud byste chtěli použít `%f` v funkci `printf`
    zjistíte, že váš program má najednou o 20kB víc. Tohle si nemůžete často
    dovolit.


Například číslo $31.4160$ je v paměti uloženo jako celé číslo $314160$.
Programátor ale ví, že číslo má dvě celá místa a čtyři desetinná místa.
S&nbsp;číslem se pracuje jakoby šlo o celé číslo. Jen je třeba dát si pozor,
aby se nám při výpočtech a matematických operacích desetinná čárka nepatřičně
neposunula. Nejlépe je ukázat si vše na malém příkladu, kde bude vše snad
pochopitelné.


Dejme tomu, že chci vydělit čísla 54321 a 1024.

$$\frac{54321}{1024} = 53.0478 $$

Dejme tomu, že chci pracovat s přesností na 2 desetinná místa.

$$\frac{54321}{1024} \cong 53.05 $$

Použijeme pevnou řádová čárku, takže čitatele vynásobíme číslem 100. 
Pozor, pracujeme s celým číslem, takže i dělení je celočíselné -- bezezbytku.
To znamená, že se nám výsledek zaokrouhlí **vždy dolů**.

$$\frac{100 \cdot 54321}{1024} = 5304 $$

Aby byl výsledek správně zaokrouhlen použijeme malý fígl a k čitateli
připočteme ještě polovinu jmenovatele:

$$\frac{100 \cdot 54321 + \frac{1024}{2}}{1024} = 5305 $$

Jak funguje tento fígl? No ...

$$\frac{\frac{x}{2}}{x} = \frac{1}{2} = 0.5$$

To znamená, že k výsledku ještě před useknutím desetinné části (k tomu dochází
při celočíselném dělení) připočteme $0.5$. Tak dojde ke zaokrouhlení.

$$5304.7 + 0.5 = 5305.3 \approx 5305$$
$$75.3 + 0.5 = 75.8 \approx 75$$


Teď už je výsledek správně a stačí jej pouze správně interpretovat. Nejprve
vytiskneme celou část -- tedy výsledek podělený číslem 100 a poté desetinnou
část -- ta je dána zbytkem po dělení číslem 100.

```c
int result = 5305;

printf("%d.%02d", result / 100, result % 100 );
```

Celý příklad: 
[GitLab](https://gitlab.com/spseol/mit-no/priklad-deleni_fixedpoint/-/blob/main/main.c?ref_type=heads),
[Repl.it](https://replit.com/@MarrekNozka/deleni-fixedpoint#main.c)

Pozor desetinnou část je třeba tisknout jako `"%02d"`: to znamená a dvě místa
včetně nul na začátku.     
Pokud bychom použili `"%d"` vytisklo by se `53.5`.   
Pokud bychom použili `"%2d"` vytisklo by se `53. 5`.    
Až při použili `"%02d"` se výsledek tiskne jako `53.05`.
