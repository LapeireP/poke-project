# Pokémon Explorer

## Introductie:
Ik heb gekozen om voor het vak Web Advanced een interactieve single-page webapplicatie uit te werken rond de eerste Pokémon-generatie.

## Projectbeschrijving:
De applicatie zorgt ervoor dat gebruikers de volgende zaken kunnen doen:
- weergeven van de Pokémon van de eerste generatie in een lijst met een aantal kenmerken (normal sprite, shiny sprite, ID, naam, type1, type2, base stats en ability).
- opzoeken van Pokémon via een zoekbalk. De Pokémon worden gefilterd terwijl je in de zoekbalk typt.
- filteren van Pokémon op type via een uitklapmenu. Bij het aanduiden van een type wordt zowel type1 als type2 bekeken.
- filteren van Pokémon op base stats via een uitklapmenu. Er wordt gewerkt met een bereik van 100 stat points.
- sorteren van Pokémon op naam via een uitklapmenu, namelijk alfabetisch of omgekeerd alfabetisch.
- sorteren van Pokémon op base stats via een uitklapmenu, namelijk oplopend of aflopend.
- toevoegen van een Pokémon aan een lijst met favorieten. Dit kan op twee manieren: door op het favorieten-icoon te klikken bij de gewenste Pokémon in de lijst of door een geldige Pokémon-ID in te geven in het daarvoor voorziene veld in de lijst met favorieten. Indien een ongeldige ID wordt ingegeven, verschijnt een foutmelding.
- veranderen van 'licht'-thema naar 'donker'-thema en omgekeerd. De knop hiervoor, bevindt zich rechtsbovenaan de applicatie. Wanneer een verandering aan het thema plaatsvindt, wordt dit in de console gezet door middel van een MutationObserver.
- de applicatie zowel op een groot scherm als op een klein scherm kunnen gebruiken door middel van media queries. Het geheel is responsief en heeft een gebruiksvriendelijke en visueel aantrekkelijke interface.

## Info gebruikte frameworks:
Het project is gebouwd met Vite en gebruikt HTML5, CSS3 en JavaScript. Daarnaast wordt de info over Pokémon opgehaald van de volgende API: pokeapi.co.

## Implementatie technische vereisten bij JavaScript:
- Elementen selecteren: lijn 42, 76, 102, 108, 134, 141-145 en 223-225
- Elementen manipulieren: lijn 18, 24, 78-99, 117-132, 234-235, 239 en 242.
- Events aan elementen koppelen: lijn 42, 102-103, 134-135, 212-216 en 228-243.

- Gebruik van constanten: lijn 17, 22-23, 29, 31-32, 51, 60, 63, 76-77, 108-110, 140-145, 148-150, 168-176, 183, 223-225 en 231.
- Template literals: lijn 78, 99, 113, 117 en 132.
- Iteratie over arrays: lijn 32, 52, 78, 102, 110, 117, 134, 148, 158, 174 en 183.
- Array methodes: lijn 52, 61, 78, 82, 110, 117, 122, 148, 158, 174, 175 en 183.
- Arrow functions: lijn 31, 78, 102-103, 110, 117, 134-135, 148, 158, 174, 193, 195, 199, 202 en 222.
- Conditional (ternary) operator (moderne if..else): lijn 23, 52, 82, 122 en 156-157.
- Callback functions: lijn 31-37, 102-104, 134-136, 148-161, 174-189, 212-216, 228-243.
- Promises: lijn 140, 148-150, 164.
- Async & await: lijn 139-140 en 148-150 en 164.
- Observer API: lijn 29-39.

- Fetch om data op te halen: lijn 140 en 149.
- JSON manipuleren en weergeven: lijn 50-57, 78-99, 117-132 en 149-161.

- Formulier validatie: lijn 223-245.
- Gebruik van LocalStorage: lijn 17, 25, 51 en 56.

## Implementatie technische vereisten bij HTML/CSS:
- Basis HTML layout (flexbox): lijn 159-164 en 275-279.
- Basis CSS: Dit is terug te vinden in het hele CSS-bestand. Ik heb een Google Font gebruikt als lettertype en het flexbox-principe toegepast op verschillende plaatsen. Daarnaast werden media queries ingesteld om de applicatie zowel op een groot scherm als op een kleiner scherm correct weer te geven.
- Gebruiksvriendelijke elementen: De favorietenknop, wijzig-themaknop en uitklapmenu's om te sorteren en filteren.

## Handleiding om lokaal te draaien:
1. Zet het project in een map op uw computer.
2. Navigeer met Terminal naar de map via: cd "locate_van_de_map".
3. Installeer de dependencies met: npm install.
4. Om het lokaal te draaien in de dev server, geef je het volgende in in Terminal: npm run dev.
5. Kopieer daarna de url in de browser.

OF

1. Zet het project in een map op uw computer.
2. Navigeer met Terminal naar de map via: cd "locate_van_de_map".
3. Installeer de dependencies met: npm install.
4. Om de build lokaal te draaien, geef je het volgende in in Terminal: npm run preview.
5. Kopieer daarna de url in de browser.

## Screenshots:
- Hoofdscherm van de applicatie
![Hoofdscherm van de applicatie](/docs/screenshots/Screenshot1.png)
- Hoofdscherm in donkere modus
![Hoofdscherm in donkere modus](/docs/screenshots/Screenshot2.png)
- Weergave van de eigenschappen van de Pokémon via flexbox-principe en legende wordt sticky weergegeven als je naar beneden scrolt
![Weergave van de eigenschappen van de Pokémon](/docs/screenshots/Screenshot3.png)
- Pokémon in favorietenlijst
![Pokémon in favorietenlijst](/docs/screenshots/Screenshot4.png)
- Opzoeken van Pokémon
![Opzoeking van Pokémon](/docs/screenshots/Screenshot5.png)
- Weergave op klein scherm
![Weergave op kleine schermen](/docs/screenshots/Screenshot6.png)
- Fout bij opgeven van foutieve Pokémon ID
![Ingeven van foutieve Pokémon ID en formulier validatie](/docs/screenshots/Screenshot7.png)
- Alfabetisch sorteren in donkere modus op een klein scherm
![Alfabetisch sorteren in donkere modus op klein scherm](/docs/screenshots/Screenshot8.png)

## Bronvermelding:
- Cursus Web Essentials (Erasmushogeschool)
- Cursus Programming Essentials I (Erasmushogeschool)
- Cursus Web Advanced (Erasmushogeschool)
- Bron Poké Ball afbeelding: https://pokemon-fano.fandom.com/wiki/Poke_Ball?file=Poke_Ball.png
- Bron voor het ophalen van de Pokémon gegevens (API): https://pokeapi.co/
- Info over async functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- Info over eventlisteners: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
- Info over includes methode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
- Info over filter methode: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Stappenplan maken van een filterlijst: https://www.w3schools.com/howto/howto_js_filter_lists.asp
- Youtube filmpje over favorieten functionaliteit en localstorage: https://www.youtube.com/watch?v=DQ5VjITsmfg
- Info over custom CSS properties: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- Youtube filmpje over het maken van een thema switch: https://www.youtube.com/watch?v=EORgld8vLrY
- Info over localeCompare: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
- Info over sort: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
- Info over MutationObserver: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
- Info over JavaScript form validatie: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- Info over DOMContentLoaded event: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
- Info over array iteratie: https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
- ChatGPT chatlog: https://chatgpt.com/share/68ab1662-0454-8005-9ffe-6752310d59af