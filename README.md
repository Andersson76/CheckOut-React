# CheckOut-React
School project in React and TypeScript

Uppgiftsbeskrivning:
Det ni ska skapa är en e-handel sida som presenterar ett antal olika produkter. Vilka typer av produkter som säljs är valfritt men det ska vara seriöst och välgjort. Det ska vara möjligt att klicka på en produkt för att kunna läsa mer om den. Från både startsidan och produktsidan ska det vara möjligt att lägga till produkter i en kundvagn och det ska tydlig framgå för användaren när produkten läggs till i kundvagnen.Utcheckningsflödet skall ligga på en egen sida och innehålla delarna Kundvagn, Dina uppgifter, Fraktsätt & Betalsätt.1


Hur projektet startas och körs:
Kör Vite
Npm install
npm run dev

https://github.com/Andersson76/CheckOut-React/

Utcheckningsflödet(G):
Kundvagn ska lista tillagda produkter (bild & titel), antal, pris och kundvagnens totalpris. Det ska vara möjligt att uppdatera kundvagnen - dvs ändra antalet av en produkt eller ta bort en produkt helt från kundvagnen. Totalpriset ska alltid uppdateras och vara korrekt.

Dina uppgifter: Ska vara ett formulär där man fyller i namn, mail, telefonnummer och adress.

Fraktsätt: Det ska gå att välja mellan minst tre olika fraktsätt där det tydligt framgår vem som är leverantören, kostnaden för frakten samt leveransdatumet. Leveransdatumet ska baseras på hur lång tid det tar för en leverantör att leverera din order från det aktuella datumet. (leverantör 1 tar 24h, leverantör 2 tar 48h osv).

Betalsätt: Det ska även här gå att välja mellan minst tre olika betalsätt (kort & Swish skall finnas). Varje betalsätt ska innehålla ett formulär för nödvändig information. Fälten i formuläret ska gå att automatisk fyllas i.När alla delarna i utcheckningsflödet har fyllts i ska det finns en ”Slutför köp” knapp tillsammans med totalpriset (inklusive frakt och moms). När man väljer att slutföra sitt köp skall detta endast gå om samtlig information är rätt ifylld. Vid genomfört köp skall en bekräftelse visas på köpet. Tänk på att det inte ska gå att placera ordern två gånger, även om man navigerar tillbaka på sidan!

Adminsidan(VG): Designen på denna sida är valfri men skall utgå ifrån designsystemet ni använder er av. Det skall finnas en knapp på startsidan som tar användaren till adminsidan. På adminsidan skall ni lista alla produkter samt ge användaren möjlighet att ta bort, lägga till eller ändra samtliga produkter (CRUD). Om ni väljer att ha en separat sida, modal eller accordion för ändring/tilläggning av en produkt är valfritt. Samtliga produkter skall vara sparade i localstorage, detta betyder att om localstorage är tomt vid inladdning av sidan behöver samtliga fördefinierade produkter sparas till localstorage. Använd en URL för bilder så det enkelt kan sparas i localstorage.2

Krav för godkänt:
1.Git & GitHub har använts
2.Projektmappen innehåller en README.md fil - (läs ovan för mer info)
3.Uppgiften lämnas in innan deadline!
4.Ett designsystem används
5.React Router skall användas som navigation. Exempelvis så skall produkten som visas på produktsidan ska baseras på en parameter i url’en.
6.React context skall användas för hantering av kundvagnen.
7.Samtliga fält ska ha valideringsregler (tips, se Material UI:s dokumentation)
8.Sidan ska vara fullt responsiv
9.Mockade produkter ska ligga i en egen fil och vara typade med ett TS interface
Krav för väl godkänt:
1.Alla punkter för godkänt är uppfyllda
2.Det finns en admin-sida där man kan ändra, lägga till eller ta bort produkter på sidan
3.Samtliga produkter skall vara sparade i localstorage (om localstorage är tom då sidan läses in behöver samtliga fördefinierade produkter sparas där)
