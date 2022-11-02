# Zadanie rekrutacyjne GravityGlobal na frontend developera

## Informacje wstępne
Zadanie jest przeznaczone na każdy poziom umiejętności developera, dzieli się na poszczególne zadania,
które są stopniowo coraz trudniejsze. Każdy powinien zrobić test na tyle ile aktualnie potrafi, gdyż
poszukujemy bardzo często osób z różnym poziomem wiedzy.

Daj z siebie wszystko i zrób jak najwięcej potrafisz, lecz pamiętaj głównie liczy się jakość nie ilość, tak że prosimy
o niespieszenie się z zadaniem, bo przede wszystkim zależy nam na jakości wykonanych zadań
i kodu.

**Paczka projektu jest prawie pusta, dlatego wszystko zależy od Ciebie,
w jakiej formie to trafi do nas**

### Jak zacząć pracę
Aktualny projekt gita należy **sforkować** do swojego prywatnego gita jako nowe repozytorium,
które będzie dostępne publicznie. Na plus będzie wysyłanie konkretnych commitów,
a nie wszystko w jednym commicie o nazwie np. 'all changes'.

Dopuszczalne jest wysłanie rozwiązania w spakowanym archiwum, jednak robienie wszystkiego
na gitcie jest rozwiązaniem milej widzianym.

**Funkcjonalność powinny być pisane w czystym JSie (tzw. Vanilla JS), najlepiej ze standardami ES6**

#### Dla osób które chcą pisać w SCSS
1. Zainstaluj wszystkie zależności potrzebne do rekompilowania styli przy pomocy webpacka -
polecenie: 'npm install'
2. Polecenie `npm run dev` - rekompliluje automatycznie style i skrypty z folderów: `src/js/main.js` oraz `src/scss/mian.scss`, jest tutaj też odpalony tak zwany `watcher`, dzieki któremu każda zmiana zostanie przerekompilowana do plików wyjściowych, które znajduja się w folderze `dist`
3. Jest też polecenie `npm run prod`, które rekompliuje style i skrypty jednorazowo, pliki wejściowe i wyjściowe sa identyczne jak w kroku 2 - te polecenie najlepiej zastosować na koniec pracy

#### Dla osób które chca pisać w czystym CSS

Jeżeli ktoś nie potrafi pisać w SCSS bądź nie korzystał z tego wcześniej, to w folderze scr został przygotowany
plik o rozszerzeniu css. **Tutaj warto dodać, że milej widziane są style pisane w SCSS**

### Zadania
1. Zmienić tytuł strony
2. Stworzyć moduł/sekcję strony z podanego:
    - moduł powinien być wedle designu [design](https://www.figma.com/file/dqY9uYrUYPyr5yjeECoy6X/Recruitment-Task). Aby móc czytać własności elementów, należy stworzyć sobie konto na figmie
    - na designe są przedstawione 2 identyczne moduły, drugi jest związany z ostatnim poleceniem jakie będzie do zrobienia
    - wymagane zdjęcia został już wyeksportowane, przeskalowane do kilku rozmiarów i znajdują się w folderze images, od Ciebie zależy jak i do czego zostaną użyte
    - moduł powinien spełniać wszelkie możliwe aspekty WCAG
    - moduł powinien być responsywny, tutaj zostawiamy inwencję twórczą, robimy bez designu z zachowaniem `best practices`
    - moduł powinien być w kontenerze o szerokości 1440px 

3. Dodać funkcjonalność po kliknięciu buttona
    - po kliknięciu ma się otwierać popup
    - kliknięcie poza popupa, automatycznie go zamyka
    - każde kliknięcie przycisku musi być zliczane
    - w popupie wyświetlamy ile razy użytkownik klikną w buttona
    - ilość kliknięć w button ma być stale zapisana pod użytkownika,
    tak aby po odświeżeniu strony wartość nie powinna być zerowana
    - jeżeli ilość kliknięć przekroczy 5, w popupie powinien pokazać się przycisk do zresetowania licznika (inwencja twórcza)
    
4. Powielić stworzony moduł/sekcję
   - na designie moduł został powilony tylko raz, aby pokazać o co dokładnie będzie chodziło w zadaniu, jednak trzeba uwzględnić możliwość większej ilości modułów na stronie
   - wszystkie funkcjonalność które zostały wcześniej stworzone mają działać `per moduł`, czyli każdy z nich jakby żył swoim życiem i nie był zależny od nikogo innego
   - jeżeli powielenie modułu będzie wymagało jakiś zmian w html, żeby działał on poprawnie, należy zawrzeć tą informacje w readme.


### Co będziemy sprawdzać
- Każde zadanie będzie przechodzić przez tak zwany `test Pani Grażynki` - opis znajdziemy poniżej. **Jeżeli nie zostanie spełniony, zadanie jest odrzucane z automatu** Proponujemy wykonać ten test samemu przed wysłaniem Nam rozwiazania
- Czy repozytorium, na krótym jest rozwiązanie jest publiczne. **Jeżeli nie zostanie spełniony, zadanie jest odrzucane z automatu**
- Czy został wysłany folder `node_modules`.  **Wysłanie tego folderu z automatu odrzuca zadanie**
- Czy punkty w konkretnym zadaniu zostały spełnione
- Responsywność
- Inwencja twórcza
- Jakość kodu
- Poprawność semantyczna HTML
- WCAG
- Czy moduł jest napisany w taki sposób żeby był gotowy do ponownego użycia na stronie
- Logikę rozwiązań funkcjonalnych

### Test Pani Grażynki
Pani Grażynka nie jest osobą techniczną i działa według konkretnych schematów/instrukcji, które Jej przekazujemy. Decyduje czy zadanie rekrutacyjne zostanie przesłane do developerów w celu dokładnego sprawdzenia czy też rozwiązanie zostaje odrzucone.

Pani Grażynce zostały przekazane następujące instrukcje:
1. Jeżeli na gicie jest przygotowane środowisko i projekt ma stworzoną stronę, to przechodzimy automatycznie do kroku 5. Jeżeli nie idziemy do kroku 2.
2. Pobrać zadanie z gita
3. Rozpakować zadanie
4. Otworzyć index.html
5. jeżeli strona nie wygląda prawie identyczne jak ta co na designie (jeden moduł wystarczy), to zadanie jest odrzucane