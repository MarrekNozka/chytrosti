MAKEFLAGS += -j1
# Makefile
# Makefile: Obsah nalezen porůznu na webu a upraven. (říjen 2010)
# 	http://kvik.sh.cvut.cz/~fidlej/cecko/makefile/referat.html (Ivo Danihelka)
#   http://dce.felk.cvut.cz/por/cv1/#id2510407
#	http://www-kiv.zcu.cz/~herout/html_sbo/make/toc.htm (Jan Valášek)
#	http://www.fit.vutbr.cz/~martinek/clang/make.html (David Martinek)
#------------------------------------------------------------------------
# Datum: 04.04.2016 23:18
# Autor: Marek Nožka, nozka <@t> spseol <d.t> cz
# Úloha: 
#------------------------------------------------------------------------
#cíl: [závislost] [závislost]
#<tab>příkazy
#                          pro každý radek se spouští nový shell
#<tab>cd neco; ./neco
#
#Automatické proměnné
#$@		jméno cíle
#$<		jméno první závislosti
#$?		jména závislostí, které jsou novější než cíl
#$^		jména všech závislostí oddělená mezerami
#
# Příklad implicitního pravidla
# %.o: %.c
#	$(CC) $(CFLAGS) $(CPPFLAGS) -c -o $@ $<
#------------------------------------------------------------------------
#Funkce pro zpracování textu
#
#Volají se podobně jako proměnné
#$(funkce argumenty)
#
#$(subst from,to,text)	substituce
#$(patsubst pattern,replacement,text)
#	% v pattern představuje lib. posloupnost znaků
#	% v replacement odpovídá této množině
#	
#	př.: $(patsubst %.c,%.o,main.c bar.c)
#$(var:pattern=replacement)
#	je ekvivalentní
#$(patsubst pattern,replacement,$(var))
#        př.: CLASSES = $(SOURCES:.java=.class)
#
#$(wildcard pattern)
#	názvy souborů odpovídají pattern, jako v shellu
#        př.: SOURCES = $(wildcard *.java)
#------------------------------------------------------------------------
# Užitečné přepínače
#
#-f soubor
#	použije se `soubor` namísto Makefile
#-n 
#	nevykonává, jen vypisuje průběh
#-p 
#	současně vypíše kompletní nastavení proměnných,
#	implicitních pravidel, ...
#------------------------------------------------------------------------
# 

.PHONY: all clean pdf png
#SHELL=/bin/zsh

# všechna *.c zavisi na *.h
#OBJ=soubor1.o soubor2.o souborN.o
#HEAD=soubor1.h soubor2.h souborN.h
#${OBJ}: ${HEAD} # hromadné nastavení závislostí, žádná akce
#
#$(program): $(program).c
#	$(CC) $(CFLAGS) -o $(program) $(program).c
#hello:hello.c helo.h
#	gcc -Wall -o hello hello.c

###############################################

###############################################
SOURCES = $(wildcard *.svg)
PDFS = $(SOURCES:.svg=.pdf) 
all: 010-prikazy pdf png vse.pdf 

clean:
	rm -f ./*.png
	rm -f ./*.pdf

010-prikazy: 010-prikazy.pdf 010-prikazy.png

010-prikazy.pdf: 010-prikazy.odt
	lowriter --nologo --convert-to pdf $<
010-prikazy.png: 010-prikazy.pdf
	gm convert -resize 300x300 $< $@

subnet_cheat.pdf: subnet_cheat.ods
	localc --nologo --convert-to pdf $<
subnet_cheat.png: subnet_cheat.pdf
	gm convert -resize 300x300 $< $@


%.pdf: %.svg
	inkscape --export-pdf=$@ $<

pdf: $(SOURCES)
	for svg in $?; do make `basename $$svg .svg`.pdf; done

vse.pdf: 010-prikazy.pdf $(PDFS)
	pdftk [0-9][0-9][0-9]-*.pdf cat output vse.pdf

%.png: %.svg subnet_cheat.png
	inkscape -y 1 -w 200 --export-png=$@ $<

png: $(SOURCES)
	for svg in $?; do make `basename $$svg .svg`.png; done


