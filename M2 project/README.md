Ting som mangler: 

ongoing- baseTurnering
1. spesifiser score i rundene.: kun én spiller har 10, og én spiller MÅ ha 10.
2. lage funksjon for å pushe ferdig turnering inn i modellen under data.tournaments
3. 


Filtrere User's matches

Alle matches etter X dato 7dager = idag - 7


idag - 7 = new Date()

const last 7 = allMatches.filter(match => match.datePlayed > idag - 7)

const winsLast7 = last7.filter(match => if user win)