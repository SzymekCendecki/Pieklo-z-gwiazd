// utworzenie zmiennych surowców
//zasoby
materiały = 1;
energia = 1;
pracownicy = 1;

//armia
piechota = 1;
czołg = 1;
artyleria = 1;
samolot = 1;

//obrona
zasiekiokopy = 1;
bunkry = 1;
radar = 1;

//cywilne
miasto = 1;
fabryka = 1;
elektrownia = 1;

// zmienne wstępnych czasów interwałów
interwałpracownicy = 2000;
interwałmateriały = 1000;
interwałenergii = 1500;
	
		
// funkcja startująca licznie surowców oraz opisująca miejsce i nieco zawiązanie akcji
function startsurowców(){
	materiały = setInterval(liczeniemateriały, interwałmateriały);
	energia = setInterval(liczenieenergia, interwałenergii);
	pracownicy = setInterval(liczeniepracownicy, interwałpracownicy);
	document.getElementById('środek').innerHTML = " Galaktyka Podwójnego Orła. Układ słoneczny 2b-43C. Czwarta planeta od słońca. Miasto Igrd - stolica super państwa. 20 lat temu zmarł ostatni władca tej planety. Z jego śmiercią, nastał kryzys. Z powodu prawowitego następcy, planetą zrządziła Rada Regencyjna. Po dwudziestu latach kryzysu i zamieszek Rada postanowiła oddać władzę w ręce głowy najpotężniejszego rodu na planecie. W Twoje ręce....<br /><br /><button id = 'dalej' onclick='dalej()'>dalej</button>";	
}

// funkcja licząca surowce materiały
function liczeniemateriały(){
	materiały = materiały + fabryka;
	document.getElementById('licznikmateriałów').innerHTML =+ materiały;	
}

// funkcja licząca surowce energię
function liczenieenergia(){
	energia = energia + elektrownia;
	document.getElementById('licznikenergii').innerHTML =+ energia;	
}

// funkcja licząca surowce pracownicy
function liczeniepracownicy(){
	pracownicy = pracownicy + miasto;
	document.getElementById('licznikpracowników').innerHTML =+ pracownicy;	
}

//armia atak i obrona, przyrosty zasobów uzależnione od poziomu
//piechota: atak 10, obrona 10    czołg: atak 50, obrona 50     artyleria: atak 75, obrona 5     samolot: atak 75, obrona 75 
//zasieki\okopy: atak 0, obrona 25     bunkry: atak 25, obrona 75       radary: atak spec., obrona spec.
//miasto: +50 prac./poz.     fabryka: +100 mat./poz.       elektrownia: +75 ener./poz.

//wartości bojowe poszczególnych jednostek
wartbojpiechota = 20;
wartbojczołg = 100;
wartbojartyleria = 80;
wartbojsamolot = 150;

wartbojzasiekiokopy = 25;
wartbojbunkier = 100;

function help(e){	
	e = e || event;
		if (e.keyCode == 105){
	alert('Wartości bojowe jednostek oraz przyrosty fabryk, miast i elektrowni:\npiechota: atak 10, obrona 10\nczołg: atak 50, obrona 50\nartyleria: atak 75, obrona 5\nsamolot: atak 75, obrona 75\nzasieki\okopy: atak 0, obrona 25\nbunkry: atak 25, obrona 75\nradary: atak spec., obrona spec.\nkażdy poziom miasta, fabryki i elektrowni przyspiesza produkcję - przyrosty: czas przyrostu pozostaje bez zmian ilość surowców = poziomowi fabryki/miasta/elektrowni');
	}}

//funkcje zakupów
//funkcja zakupu piechoty
function buypiechota(){
	if (materiały >= 15 && energia >= 15  && pracownicy >= 15){
	materiały = materiały - 15;
	energia = energia - 15;
	pracownicy = pracownicy - 15;
	piechota = piechota + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikpiechoty').innerHTML = piechota;
	
	}
	if (materiały < 15 && energia < 15  && pracownicy < 15){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 15 && energia < 15  && pracownicy < 15){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 15 && energia >= 15  && pracownicy < 15){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu czołgów
function buyczołg(){
	if (materiały >= 100 && energia >= 100  && pracownicy >= 100){
	materiały = materiały - 100;
	energia = energia - 100;
	pracownicy = pracownicy - 100;
	czołg = czołg + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikczołgów').innerHTML = czołg;
	}
	if (materiały < 100 && energia < 100  && pracownicy < 100){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 100 && energia < 100  && pracownicy < 100){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 100 && energia >= 100  && pracownicy < 100){
		alert('Masz za mało pracowników.');
	}}

	//funkcja zakupu artylerii
function buyartyleria(){
	if (materiały >= 75 && energia >= 75  && pracownicy >= 50){
	materiały = materiały - 75;
	energia = energia - 75;
	pracownicy = pracownicy - 50;
	artyleria = artyleria + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikartylerii').innerHTML = artyleria;
	}
	if (materiały < 75 && energia < 75  && pracownicy < 50){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 75 && energia < 75  && pracownicy < 50){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 75 && energia >= 75  && pracownicy < 50){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu samolotów
function buysamolot(){
	if (materiały >= 120 && energia >= 100  && pracownicy >= 90){
	materiały = materiały - 120;
	energia = energia - 100;
	pracownicy = pracownicy - 90;
	samolot = samolot + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('liczniksamolotów').innerHTML = samolot;
	}
	if (materiały < 120 && energia < 100  && pracownicy < 90){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 120 && energia < 100  && pracownicy < 90){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 120 && energia >= 100  && pracownicy < 90){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu zasieków i okopów
function buyzasiekiokopy(){
	if (materiały >= 55 && energia >= 55  && pracownicy >= 50){
	materiały = materiały - 55;
	energia = energia - 55;
	pracownicy = pracownicy - 50;
	zasiekiokopy = zasiekiokopy + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikzasiekówokopów').innerHTML = zasiekiokopy;
	}
	if (materiały < 55 && energia < 55  && pracownicy < 50){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 55 && energia < 55  && pracownicy < 50){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 55 && energia >= 55  && pracownicy < 50){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu bunkrów
function buybunkry(){
	if (materiały >= 200 && energia >= 200  && pracownicy >= 200){
	materiały = materiały - 200;
	energia = energia - 200;
	pracownicy = pracownicy - 200;
	bunkry = bunkry + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikbunkrów').innerHTML = bunkry;
	}
	if (materiały < 200 && energia < 200  && pracownicy < 200){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 200 && energia < 200  && pracownicy < 200){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 200 && energia >= 200  && pracownicy < 200){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu radary
function buyradary(){
	if (materiały >= 125 && energia >= 125  && pracownicy >= 100){
	materiały = materiały - 125;
	energia = energia - 125;
	pracownicy = pracownicy - 100;
	radar = radar + 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikradarów').innerHTML = radar;
	}
	if (materiały < 125 && energia < 125 && pracownicy < 100){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 125 && energia < 125 && pracownicy < 100){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 125 && energia >= 125 && pracownicy < 100){
		alert('Masz za mało pracowników.');
	}}
		
	//funkcja zakupu miast
function buymiasto(){
	if (materiały >= 250 && energia >= 200 && pracownicy >= 150){
	materiały = materiały - 250;
	energia = energia - 200;
	pracownicy = pracownicy - 150;
	miasto = miasto + 1;
	
    document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikmiast').innerHTML = miasto;
	}
	if (materiały < 250 && energia < 200 && pracownicy < 150){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 250 && energia < 200 && pracownicy < 150){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 250 && energia >= 200 && pracownicy < 150){
		alert('Masz za mało pracowników.');
	}}
	
	//funkcja zakupu fabryk
function buyfabryka(){
	if (materiały >= 175 && energia >= 175 && pracownicy >= 125){
	materiały = materiały - 175;
	energia = energia - 175;
	pracownicy = pracownicy - 125;
	fabryka = fabryka + 1;
	
    document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikfabryk').innerHTML = fabryka;

	}
	if (materiały < 175 && energia < 175  && pracownicy < 125){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 175 && energia < 175  && pracownicy < 125){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 175 && energia >= 175  && pracownicy < 125){
		alert('Masz za mało pracowników.');
}}
	
	//funkcja zakupu elektrowni
function buyelektrownia(){
	if (materiały >= 150 && energia >= 200 && pracownicy >= 150){
	materiały = materiały - 150;
	energia = energia - 200;
	pracownicy = pracownicy - 150;
	elektrownia = elektrownia + 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikelektrowni').innerHTML = elektrownia;
	
		}
	if (materiały < 150 && energia < 200  && pracownicy < 150){
		alert('Masz za mało wszystkich surowców.');
	}
		if(materiały >= 150 && energia < 200  && pracownicy < 150){
		alert('Masz za mało energii i pracowników.');
	}
		if(materiały >= 150 && energia >= 200 && pracownicy < 150){
		alert('Masz za mało pracowników.');
	}}

//funkcje sprzedaży
//funkcja sprzedaży piechoty
function sellpiechota(){
	if (piechota >= 1){
	materiały = materiały + 15;
	energia = energia + 15;
	pracownicy = pracownicy + 15;
	piechota = piechota - 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikpiechoty').innerHTML = piechota;
		}
	else {
		alert('Nie masz piechoty do sprzedania.');
	}}
	
//funkcja sprzedaży czołgów
function sellczołg(){
	if (czołg >= 1){
	materiały = materiały + 100;
	energia = energia + 100;
	pracownicy = pracownicy + 100;
	czołg = czołg - 1;
	
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikczołgów').innerHTML = czołg;
	}
	else {
		alert('Nie masz czołgów do sprzedania.');
	}}

	//funkcja sprzedaży artylerii
function sellartyleria(){
	if (artyleria >= 1){
	materiały = materiały + 75;
	energia = energia + 75;
	pracownicy = pracownicy + 50;
	artyleria = artyleria - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikartylerii').innerHTML = artyleria;
	}
	else {
		alert('Nie masz artylerii do sprzedania.');
	}}
	
	//funkcja sprzedaży samolotów
function sellsamolot(){
	if (samolot >= 1){
	materiały = materiały + 120;
	energia = energia + 100;
	pracownicy = pracownicy + 90;
	samolot = samolot - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('liczniksamolotów').innerHTML = czołg;
	}
	else {
		alert('Nie masz samolotów do sprzedania.');
	}}
	
	//funkcja sprzedaży zasieków i okopów
function sellzasiekiokopy(){
	if (zasiekiokopy >= 1){
	materiały = materiały + 55;
	energia = energia + 55;
	pracownicy = pracownicy + 50;
	zasiekiokopy = zasiekiokopy - 1;
    document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikzasiekówokopów').innerHTML = zasiekiokopy;
	}
		else {
		alert('Nie masz zasieków i okopów do sprzedania.');
	}}
	
	//funkcja sprzedaży bunkrów
function sellbunkry(){
	if (bunkry >= 1){
	materiały = materiały + 200;
	energia = energia + 200;
	pracownicy = pracownicy + 200;
	bunkry = bunkry - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikbunkrów').innerHTML = bunkry;
	}
		else {
		alert('Nie masz bunkrów do sprzedania.');
	}}
		
	//funkcja sprzedaży radarów
function sellradary(){
	if (radar >= 1){
	materiały = materiały + 125;
	energia = energia + 125;
	pracownicy = pracownicy + 100;
	radar = radar - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikradarów').innerHTML = radar;
	}
			else {
		alert('Nie masz radarów do sprzedania.');
	}}
			
	//funkcja sprzedaży miast
function sellmiasto(){
	if (miasto >= 1){
	materiały = materiały + 250;
	energia = energia + 200;
	pracownicy = pracownicy + 150;
	miasto = miasto - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikmiast').innerHTML = miasto;
	}
			else {
		alert('Nie masz miast do sprzedania.');
	}}
		
	//funkcja sprzedaży fabryk
function sellfabryka(){
	if (fabryka >= 1){
	materiały = materiały + 175;
	energia = energia + 175;
	pracownicy = pracownicy + 125;
	fabryka = fabryka - 1;
	    document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikfabryk').innerHTML = fabryka;
	}
			else {
		alert('Nie masz fabryk do sprzedania.');
	}}
		
	//funkcja zakupu elektrowni
function sellelektrownia(){
	if (elektrownia >= 1){
	materiały = materiały + 150;
	energia = energia + 200;
	pracownicy = pracownicy + 150;
	elektrownia = elektrownia - 1;
	document.getElementById('licznikmateriałów').innerHTML = materiały;
	document.getElementById('licznikenergii').innerHTML = energia;
	document.getElementById('licznikpracowników').innerHTML = pracownicy;
	document.getElementById('licznikelektrowni').innerHTML = elektrownia;
			}
			else {
		alert('Nie masz elektrowni do sprzedania.');
	}}	
	
// funkcja dalej - pierwsza audiencja
function dalej(){
	document.getElementById('środek').innerHTML = " Pierwszy dzień roku 3421. To także Twój pierwszy dzień jako władcy planety. Siedzisz w swoim gabinecie, ozdobionym przepięknymi obrazami, meblami i egoztycznymi roślinami. Zacząłeś zapoznawać się z najważniejszymi sprawami. Do gabinetu wszedł Twój osobisty doradca, za nim wjechał robot protokolarno - komunikacyjny X300.<br /><br /><button id = 'dalej' onclick='dalej2()'>dalej</button>";
	}
	
// funkcja dalej2 - samouczek - wstęp
function dalej2(){
	document.getElementById('środek').innerHTML = "Witaj mój Panie!!!<br /><br /> Jestem Twoim osobistym doradcą. Wraz z tym oto robotem będziemy pomagali Waszej Wysokości w podejmowaniu decyzji. Czy Wasza Wyskokość potrzebuje informacji na temat obsługi interfejsu?<br /></br /><button id = 'tak' onclick='tak()'>tak</button> <button id = 'nie' onclick='nie()'>nie</button>";
}

// funkcja tak - samouczek
function tak(){
	document.getElementById('środek').innerHTML = "Jak Wasza wysokość sobie życzy.<br /><br /> Ekran podzielony jest na dwie części. Górną i dolną. Górna część podzielona jest na kilka części, które informują Waszą Wysokość o ilości zasobów, stanie liczebnym armii i ilości instalacji obronnych, o poziomie rozwoju miast, fabryk i elektrowni. Przy wielu z nich są przyciski, za pomocą których Wasza wysokość może zlecać zakup lub rozwój powyższych rzeczy. Drugą częścią górnego panelu jest część informacyjna. To taka ściągawka, z której można dowiedzieć się ile kosztuje zakup jednostki, rozwój instalacji obronnej lub rozwój miasta, fabryki lub elektrowni. Wasza Wysokość może dodatkowo korzystać z przycisku i. Po tym przyciskiem mozna dowiedzieć się o wartości bojowej jednostek oraz wpływie poziomu rozbudowy miast, elektrowni i fabryk na zasoby.<br /><br /> Natomiast druga, dolna część ekranu bedzie wyświetlała wydarzenia następujące w grze. Za jej pomocą Wasza Wysokość również będzie mogła podejmować decyzje, które bedą miały wpływ na przebieg rozgrywki.<br /><br /> Jak Wasza Wysokość się zorientowała, liczniki zasobów zaczęły pokazywać ilość zapasów. Natomiast inne stoją w miejscu i pokazują 1. W trakcie rozgrywki będą się zmieniały, jeżeli Wasza Wysokość uzna to za stosowne. Myślę, że infromacje te były przydatne. Przejdźmy zatem dalej.<br /><br /><button id='dalej' onclick='nie()'>dalej</button>";
}

// funkcja nie - przejście do gry
function nie(){
	document.getElementById('środek').innerHTML = "Wyśmienicie!!!<br /><br /> Zatem przejdźmy od razy rzeczy. Jak Wasza wysokość się orientuje planeta znajduje się w kryzysie. Fabryki, miasta i elektrownie są na niskim poziomie, przez co nie można wytwarzać dużych ilości produktów wysokiej jakości. Armia wcale lepiej też nie wygląda. Zdemoralizowana i źle opłacana. Na obecną chwilę nadaje się do wsparcia jednostek policyjnych w celu utzrymania względnego spokoju. Proponuję w pierwszej kolejności rozbudowę miast, fabryk i elektrowni do poziomu co najmniej 4. <br /><br /><button id='dalej' onclick='dalej3()'>dalej</button>";
	}

function dalej3(){
	if (elektrownia >= 4 && fabryka  >= 4 && miasto >= 4){
		document.getElementById('środek').innerHTML = "Wspaniale !!!<br /> Wasza wysokość zapewniła elementarne podstawy dla zapewnienia ludności państwa w najpotrzebniejsze rzeczy codziennego użytku. Część obywateli zasiliło Twoje szeregi piechoty. Było ich wielu. Dowództwu udało się utworzyć z nowych rekrutów 2 nowe jednostki piechoty.<br /><br /><button id='dalej' onclick='dalej4()'>dalej</button>";
	
	piechota = piechota + 2;
	document.getElementById('licznikpiechoty').innerHTML = piechota;
	}
	else{
		alert('Nie wykonałeś jeszcze zadania.');
	}
}

function dalej4(){
	document.getElementById('środek').innerHTML = "Wasza Wysokość.<br /><br /> Twoim następnym zadaniem będzie rozbudowa Twoich sił zbrojnych: piechoty do poziomu 10, czołgów do poziomu 7, artylerii do poziomu 5 i samolotów do poziomu 2. <br /><br /><button id='dalej' onclick='dalej5()'>dalej</button>";
	}
	
function dalej5(){
	if (piechota >= 10 && czołg >= 7 && artyleria >= 5 && samolot >= 2){
	    document.getElementById('środek').innerHTML = "Wspaniale Wasza Wysokość!!!<br /><br /> Twoi obywatele czują się wreszcie bezpieczni. Z wdzięczności postanowili odwdzięczyć się za przyzwoitą ochronę i rozbudowali okopy oraz zasieki o 4 poziomy.<br /><br /><button id='dalej' onclick='dalej6()'>dalej</button>";	
		
		zasiekiokopy = zasiekiokopy + 4;
		document.getElementById('licznikzasiekówokopów').innerHTML = zasiekiokopy;
	}
	else{
		alert('Nie wykonałeś jeszcze zadania.');
	}
}

// funkcja wyślij - część interaktywna do wysyłania patrolu przez gracza
function wyślij(){
piechota1 = document.getElementById('piechota3').value;
czołg1 = document.getElementById('czołgi3').value;
artyleria1 = document.getElementById('artyleria3').value;
samolot1 = document.getElementById('samoloty3').value;

// wszystkie jednostki wysyłane
if (piechota1 > piechota && czołg1 > czołg && artyleria1 > artyleria && samolot1 > samolot){
alert('nie masz tyle jednostek');
}
else
if (piechota1 > 0 && czołg1 > 0 && artyleria1 > 0 && samolot1 > 0){
piechota = piechota - piechota1;
document.getElementById('licznikpiechoty').innerHTML = piechota;

czołg = czołg - czołg1;
document.getElementById('licznikczołgów').innerHTML = czołg;

artyleria = artyleria - artyleria1;
document.getElementById('licznikartylerii').innerHTML = artyleria;

samolot = samolot - samolot1;
document.getElementById('liczniksamolotów').innerHTML = samolot;

document.getElementById('środek').innerHTML = "Wyśmienicie mój Panie!!!<br /><br />Na regularnych patrolach będą: piechota w ilości - " + piechota1 + ", czołgi w ilości - " + czołg1 + ", artyleria w ilości - " + artyleria1 + ", samoloty w ilości - " + samolot1 + ".<br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// wysyłana tylko piechota
if (piechota1 > piechota && czołg1 == 0 && artyleria1 == 0 && samolot1 == 0){
alert('Panie nie dysponujesz taką ilością jednostek piechoty.');
}
else
if (piechota1 > 0  && czołg1 == 0 && artyleria1 == 0 && samolot1 == 0){
document.getElementById('środek').innerHTML = "Dobrze mój Panie!!! <br /><br />Na regularne patrole wysłałeś piechotę w liczbie: " + piechota1 + ". <br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// wysyłane tyko czołgi
if (piechota1 == 0 && czołgi > czołg && artyleria1 == 0 && samolot1 == 0){
alert('Panie nie dysponujesz taką ilością jednostek czołgów.');
}
else
if (piechota1 == 0 && czołg1 > 0 && artyleria1 == 0 && samolot1 == 0){
document.getElementById('środek').innerHTML = "Dobrze mój Panie!!! <br /><br />Na regularne patrole wysłałeś czołgi w liczbie: " + czołg1 + ".<br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// wysyłana tylko artyleria
if (piechota == 1 && czołgi == 1 && artyleria1 > artyleria && samolot1 == 0){
alert('Panie nie dysponujesz taką ilością jednostek artylerii.');
}
else
if (piechota1 == 0 && czołg1 == 0 && artyleria1 > 0 && samolot1 == 0){
document.getElementById('środek').innerHTML = "Dobrze mój Panie!!! <br /><br />Na regularne patrole wysłałeś artylerię w liczbie: " + artyleria1 + ".<br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// wysyłane tylko samoloty
if (piechota1 == 0 && czołg1 == 0 && artyleria1 == 0 && samolot1 > samolot){
alert('Panie nie dysponujesz taką ilością samolotów.');
}

else
if (piechota1 == 0 && czołg1 == 0 && artyleria1 == 0 && samolot1 > 0){
document.getElementById('środek').innerHTML = "Dobrze mój Panie!!! <br /><br />Na regularne patrole wysłałeś samoloty w liczbie: " + samolot1 + ".<br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// gracz nic nie wysyła
if (piechota1 == 0 && czołg1 == 0 && artyleria1 == 0 && samolot1 == 0){
document.getElementById('środek').innerHTML = "Wielka szkoda mój Panie!!!<br /><br />Obywatele będą zawiedzeni, że Nasze wojsko nie będzie ich ochraniało.<br /><br /><button id = 'dalej' onclick = 'dalej7()'>dalej</button>";
}

// gracz wpisuje ujemne wartości
if (piechota1 < 0 || czołg1 < 0 || artyleria1 < 0 || samolot1 < 0) {
alert('Panie liczba wysyłanych jednostek nie może być ujemna.');
}
}
function dalej6(){
	document.getElementById('środek').innerHTML = "Świetnie mój Panie!!!<br /><br />Mamy już wystarczającą ilość jednostek aby pomyśleć o regularnym patrolowaniu kraju. Poniżej znajdują się 4 okienka, umożliwiające wysyłanie jednostek. Wystarczy wpisać odpowiednią ilość, w konkretne w okienko i wysłać.<br /><br /><div id = 'środek'><div id = 'wpisywanie'><div id='piechota4'>piechota<br /><input id='piechota3'></div><div id='czołgi4'>czołgi<br /><input id='czołgi3'></div><div id='artyleria4'>artyleria<br /><input id='artyleria3'></div><div id='samoloty4'>samoloty<br /><input id='samoloty3'><br /><br /></div></div><br /><br /><button id = 'tak' onclick='wyślij()'>wyślij</button></div>";
}

// funkcja, która informuje gracza o przybyciu pojazdu z ziemii 
function dalej7(){
	document.getElementById('środek').innerHTML = "Wielmożny Panie<br /><br />Bardzo przepraszam, że przeszkadzam. Nasi naukowcy z obserwatorium planetarnego niezidentyfikowany objekt, który pojawił się na orbicie naszej planety. Pojazd ten nie wykazuje wrogich zachowań. Moim skromnym zdaniem, zalecałbym ostrożność. <br /><br /><button id='dalej' onclick = 'dalej8()'>dalej</button>";;
}

// funkcja, w której gracz ma możliwość zadecydowania o ty czy zacząć handel lub czy przepędzić obcych
function dalej8(){
    document.getElementById('środek').innerHTML = "Panie!!!<br /><br />Odebraliśmy sygnał z tego dziwnego obiektu na orbicie. Nasi najlepsi naukowcy po kilku godzinach zdołali go odszyfrować. Komunikat brzmi: 'Jesteśmy nieuzbrojeni. Przybywamy w misji handlowej.' Czy Wasza Wysokość pozwoli na założenie placówki handlowej, przez obcych czy wyda rozkaz armii o ich przepędzeniu? <br /><br /><button id = 'tak' onclick='handel()'>handel</button> <button id = 'nie' onclick = 'armia()'>armia</button>";
}

function armia(){
	document.getElementById('środek').innerHTML = "Jak sobie życzysz Panie. Przekaże odpowiednie rozkazy.<br />Doradca odwrócił się do robota. Rozkazy zostały wysłane... Po kilku minutach kontrolki na robocie zaczęły błyskać w zawrotnym tempie. Doradca podszedł do niego. Sprawdził informacje. Łamiącym głosem powiedział: <br />'Panie zupełnie nie wiem jak to mogło do tego dojść. W rakietach które miały odstraszyć obcych doszlo do zwarcia i zniszczyły obcy pojazd. Po tym zdarzeniu, z hiperprzestrzeni zaczęły wychodzić okręty wojenne przybyszów. Mamy wojnę. <br /><br /><button id='dalej' onclick='dalej9()'>dalej</button>";
}

// funkcja zamieniająca materiały na pracowników
function zamień(){
materiałyinput = document.getElementById('wartość').value;

if (materiałyinput <= materiały && materiałyinput > 0){
materiały = materiały - materiałyinput;
pracownicy = pracownicy + (materiałyinput*0.5);
document.getElementById('licznikpracowników').innerHTML = pracownicy;
document.getElementById('licznikmateriałów').innerHTML = materiały;
}
if (materiałyinput > materiały){
alert('nie masz tyle materiałów');
}
else if (materiałyinput <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

// funkcja zamieniająca materiały na energię 
function zamień2(){
materiałyinput2 = document.getElementById('wartość2').value;
if (materiałyinput2 <= materiały && materiałyinput2 > 0){
materiały = materiały - materiałyinput2;
energia = energia + (materiałyinput2*0.75);
document.getElementById('licznikenergii').innerHTML = energia;
document.getElementById('licznikmateriałów').innerHTML = materiały;
}

if (materiałyinput2 > materiały){
alert('nie masz tyle materiałów');
}
else if (materiałyinput2 <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

// funkcja zamieniająca pracowników na materiały
function zamień3(){
pracownicyinput3 = document.getElementById('wartość3').value;
if (pracownicyinput3 <= pracownicy && pracownicyinput3 > 0){
pracownicy = pracownicy - pracownicyinput3;
materiały = materiały + (pracownicyinput3/0.5);
document.getElementById('licznikpracowników').innerHTML = pracownicy;
document.getElementById('licznikmateriałów').innerHTML = materiały;
}

if (pracownicyinput3 > pracownicy){
alert('nie masz tyle pracowników');
}
else if (pracownicyinput3 <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

// funkcja zamieniająca pracowników na energię 
function zamień4(){
pracownicyinput4 = document.getElementById('wartość4').value;
if (pracownicyinput4 <= pracownicy && pracownicyinput4 > 0){
pracownicy = pracownicy - pracownicyinput4;
energia = energia + (pracownicyinput4*1.25);
document.getElementById('licznikpracowników').innerHTML = pracownicy;
document.getElementById('licznikenergii').innerHTML = energia;
}

if (pracownicyinput4 > pracownicy){
alert('nie masz tyle pracowników');
}
else if (pracownicyinput4 <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

//funkcja zamieniająca energię na materiały
function zamień5(){
energiainput5 = document.getElementById('wartość5').value;
if (energiainput5 <= energia && energiainput5 > 0){
energia = energia - energiainput5;
materiały = materiały + (energiainput5*2);
document.getElementById('licznikmateriałów').innerHTML = materiały;
document.getElementById('licznikenergii').innerHTML = energia;
}

if (energiainput5 > energia){
alert('nie masz tyle energii');
}
else if (energiainput5 <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

// funkcja zamieniająca energię na pracowników
function zamień6(){
energiainput6 = document.getElementById('wartość6').value;

if (energiainput6 <= energia && energiainput6 > 0){
energia = energia - energiainput6;
pracownicy = pracownicy + (energiainput6*0.75);
document.getElementById('licznikpracowników').innerHTML = pracownicy;
document.getElementById('licznikenergii').innerHTML = energia;
}
if (energiainput6 > energia){
alert('nie masz tyle energii');
}
else if (energiainput6 <= 0){
alert('podana wartość nie może być zerem, ani liczbą ujemną');
}}

// funkcja umożliwiająca handel
function handel(){
	document.getElementById('środek').innerHTML = "Wspaniale!!! <br /><br />Poniżej znajduje się panel handlowy, z którego możesz skorzystać. Jeżeli nie chcesz lub uznasz, że już wystarczy, to możesz wcisnąć przycisk 'DALEJ'<br /><br /><div id = 'zamianamateriały'>materiały na pracowników<br /><input id = 'wartość'> <button id = 'dalej' onclick = 'zamień()'>zamień</button><br />materiały na energię<br /><input id = 'wartość2'> <button id = 'dalej' onclick = 'zamień2()'>zamień</button></div><div id = 'zamianapracowników'>pracownicy na materiały<br /><input id = 'wartość3'> <button id = 'dalej' onclick = 'zamień3()'>zamień</button><br />pracownicy na energię<br /><input id = 'wartość4'> <button id = 'dalej' onclick = 'zamień4()'>zamień</button></div><div id = 'z'>energia na materiały<br /><input id = 'wartość5'> <button id = 'dalej' onclick = 'zamień5()'>zamień</button><br />energia na pracowników<br /><input id = 'wartość6'> <button id = 'dalej' onclick = 'zamień6()'>zamień</button><br /><br /><button id = 'dalej' onclick = 'handel2()'>dalej</button>";
}

// funkcja, w której pomimo handlu obcy atakują i przygotowanie armii
function handel2(){
	document.getElementById('środek').innerHTML = "Panie dotarła do Ciebie pilna wiadomość.<br /><br />Mimo pokojowych zamiarów z obu stron, obcy pokazali swoje prawdziwe oblicze. Ich statki wojenne wyszły z hiperprzestrzeni. Jak donoszą raporty wahadłowe desantowe zaczęły lądować na planecie. To oznacza wojnę. Musimy się przygotować. Rozbuduj swoje swoją armię oraz obronę przed głónym starciem. Kiedy uznasz, że wojsko jest gotowe wciśnij 'DALEJ'<br /><br /><button id='dalej' onclick = 'dalej10()'>dalej</button>";
}

// funkcja, przygotowania armii
function dalej9(){
	document.getElementById('środek').innerHTML = "Panie!!!<br /><br />Nieoczekiwanie, przez przestarzały i awaryjny sprzęt doprowadziliśmy do nowej, niepotrzebnej wojny. Nie wiadomo jak obywatele zareagują na to. Na razie trzeb przygotować się do tej militarnej rozgrywki. Rozbuduj swoją armię oraz obronę. Kiedy uznasz, że Twoja armia jest już wystarczająco silna kliknij 'DALEJ'.<br /><br /><button id='dalej' onclick = 'dalej10()'>dalej</button>";
	}

// funkcja przywołania patrolu i wydania rozkazu ataku
function dalej10(){
	document.getElementById('środek').innerHTML = "Wasza Wysokość.<br /><br />Wojska zajęły swoje pozycje. Jeżeli wysłałeś jednostki na patrol, możesz je teraz wezwać aby dołączyły do walki. Jeżeli nie to wydaj rozkaz do ostatniej bitwy.<br /><br /><button id = 'dalej' onclik='wp()'>patrol</button> <button id='dalej' onclick='walka()'>walka</button>";
	}

// funkcja, w której patrol dołącza do armii - jeżeli został wcześniej wysłany
function wp(){
	if (piechota1 == 0 && czołg1 == 0 && artyleria1 == 0 && samolot1 == 0){
		alert('nie wysłałeś żadnych jednostek na patrol');
			}
	else if(piechota1 > 0 || czołg1 > 0 || artyleria1 > 0 || samolot1 > 0){
		piechota = piechota + piechota1;
		czołg = czołg + czołg1;
		artyleria = artyleria + artyleria1;
		samolot = samolot + samolot1;
		document.getElementById('licznikpiechoty').innerHTML = piechota;
		document.getElementById('licznikczołgów').innerHTML = czołg;
		document.getElementById('licznikartylerii').innerHTML = artyleria;
		document.getElementById('liczniksamolotów').innerHTML = samolot;
	}}	

// animacja walki
function walka(){
	document.getElementById('środek').innerHTML = "<video src='../animacja/walka.mp4' width='1250' height=350' autoplay loop></video>";
	setInterval("dalej11()", 3000);
}

// funkcja wyniku bitwy
function dalej11(){
	twojasiła = piechota + czołg + artyleria + samolot + zasiekiokopy + bunkry + radar;
	siłaobcych = Math.floor(Math.random()*150);
	
	if (twojasiła > siłaobcych){
		document.getElementById('środek').innerHTML = "Cesarzu Wygrałeś tę wojnę. Flota obcych wycofała się. Walka była długa i zażarta. Poległo wielu żołnierzy obu stron. Wielu odniosło rany. Nastały w końcu oczekiwane dni spokoju. Dzięki Twojemu geniuszowi Boski!!<br /><br /><button id='dalej' onclick='dalej12()'>dalej</button>";
		}
	if (twojasiła < siłaobcych){
		document.getElementById('środek').innerHTML = "Cesarzu!!<br /><br />Stało się nieszczęście. Twoje waleczne wojsko nie zdołało powstrzymać barbarzyńskich hord obcych. Po przełamanu wszelkich linii obrony, wtargnęli do Twojego pałacu i na oczach ocalałych, rozstrelali Cię. Tak zkończyła się historia planety.<br /><br /><button id='dalej' onclick='dalej12()'>dalej</button> ";
	}
	if (twojasiła == siłaobcych){
	document.getElementById('środek').innerHTML = "Wasza Wysokosć!!!Siły obu armii są wyrównane. Jednakże po kilku godzinach ciężkich walk i wykorzystaniu znajommosci terenu nasze wojska zdobyły przewagę i wyparły obcych z planety. Po wygrnej wojnie, obywatele mogą w końcu spać spokojnie... Dzięki Twojemu geniuszowi Panie...<br /><br /><button id='dalej' onclick='dalej12()'>dalej</button>";
	}}

// funkcja pokazująca koniec i kto stworzył grę
function dalej12(){
	document.getElementById('środek').innerHTML = "<b>KONIEC</b><br /><br />Grę stworzyło 'studio' - 'Niewierne Psy', w składzie:<br /><br />główny programista: Szymon 'Krupik' Cendecki<br />scenarzysta: Szymon 'Krupik' Cendecki<br />grafika: Szymon 'Krupik' Cendecki<br /><br /><b>kontakt:<br />mobile: 698 533 123<br />mail: krupik@autograf.pl";
}