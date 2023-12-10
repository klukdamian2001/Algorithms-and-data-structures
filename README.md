# Algorithms-and-data-structures

# Projekt: Obliczanie wartości w ciągu Fibonacciego

## Opis
Projekt zawiera pliki index.js i test.js, które implementują funkcję obliczającą wartość n-tego elementu w ciągu Fibonacciego. Ciąg Fibonacciego to sekwencja liczb, w której każda liczba jest sumą dwóch poprzednich liczb (pierwsze dwa elementy to 0 i 1).

## Struktura plików
- **index.js:** Plik zawierający funkcję `fib(n)`, która oblicza n-ty element ciągu Fibonacciego.
- **test.js:** Plik zawierający testy jednostkowe funkcji `fib(n)`.

## Opis funkcji `fib(n)`
Funkcja `fib(n)` przyjmuje jako argument liczbę całkowitą `n` i zwraca wartość n-tego elementu w ciągu Fibonacciego. Jeśli `n` jest mniejsze lub równe 0, funkcja zwraca 0. Dla `n` równego 1, zwracana jest wartość 1. W przeciwnym przypadku funkcja wykorzystuje pętlę for do obliczenia n-tego elementu w ciągu Fibonacciego.

## Instrukcje
1. Sklonuj lub pobierz projekt na swój lokalny komputer.
2. Aby uruchomić testy, użyj odpowiedniego narzędzia lub środowiska, takiego jak Jest, czy innego środowiska do testowania kodu JavaScript.
3. Możesz edytować pliki index.js i test.js, aby zobaczyć, jak zmiany wpływają na działanie funkcji `fib(n)`.

## Przykłady użycia
Przykłady użycia funkcji `fib(n)` w pliku test.js demonstrują, jak sprawdzać poprawność działania funkcji dla różnych wartości `n`.
---

# Projekt: Tworzenie spiralnych macierzy NxN

## Opis
Projekt zawiera pliki index.js i test.js, które implementują funkcję `matrix(n)` do generowania spiralnych macierzy o wymiarach NxN. Funkcja ta przyjmuje liczbę całkowitą `n` i zwraca macierz spiralną o rozmiarze `n` na `n`.

## Struktura plików
- **index.js:** Plik zawierający funkcję `matrix(n)`, która generuje spiralną macierz NxN.
- **test.js:** Plik zawierający testy jednostkowe funkcji `matrix(n)`.

## Opis funkcji `matrix(n)`
Funkcja `matrix(n)` przyjmuje jako argument liczbę całkowitą `n` i generuje macierz spiralną o wymiarach `n` na `n`. Macierz ta jest wypełniana liczbami rosnącymi od 1 do `n*n` w sposób spiralny.

## Instrukcje
1. Sklonuj lub pobierz projekt na swój lokalny komputer.
2. Aby uruchomić testy, wykorzystaj narzędzie do testowania kodu JavaScript, takie jak Jest lub inne środowisko do testowania.
3. Możesz eksperymentować z funkcją `matrix(n)` zmieniając wartości `n` i sprawdzając wygenerowane macierze.

## Przykłady użycia
Pliki test.js zawierają testy jednostkowe sprawdzające poprawność działania funkcji `matrix(n)` dla różnych wartości `n`. Przykładowe wywołania pokazują oczekiwane macierze spiralne dla różnych rozmiarów.
---

# Projekt: Struktura danych - Kolejka (Queue)

## Opis
Projekt zawiera pliki index.js i test.js, które definiują klasę `Queue` reprezentującą strukturę danych kolejki. Kolejka to struktura, w której elementy są przechowywane w kolejności dodania, a usuwane są zgodnie z zasadą FIFO (First In, First Out).

## Struktura plików
- **index.js:** Plik zawierający klasę `Queue` z metodami `add(element)` i `remove()` do zarządzania elementami w kolejce.
- **test.js:** Plik zawierający testy jednostkowe dla klasy `Queue`.

## Opis klasy `Queue`
Klasa `Queue` posiada:
- Konstruktor inicjujący kolejkę jako pustą tablicę.
- Metodę `add(element)`, która dodaje element do końca kolejki.
- Metodę `remove()`, która usuwa i zwraca pierwszy element z kolejki.

## Instrukcje
1. Sklonuj lub pobierz projekt na swój lokalny komputer.
2. Aby uruchomić testy, użyj narzędzia do testowania kodu JavaScript, takiego jak Jest lub inne środowisko testowe.

## Przykłady użycia
Przykłady testów jednostkowych w pliku test.js pokazują, jak dodawać elementy do kolejki za pomocą `q.add()` oraz jak usuwać elementy z kolejki za pomocą `q.remove()`. Testy również sprawdzają zachowanie kolejki zgodnie z zasadą FIFO.
---

# Projekt: Struktura danych - Stos (Stack)

## Opis
Projekt zawiera pliki index.js i test.js, które definiują klasę `Stack` reprezentującą strukturę danych stosu. Stos to struktura, w której elementy są dodawane i usuwane zgodnie z zasadą LIFO (Last In, First Out).

## Struktura plików
- **index.js:** Plik zawierający klasę `Stack` z metodami `push(element)`, `pop()`, `peek()` i `isEmpty()` do zarządzania elementami w stosie.
- **test.js:** Plik zawierający testy jednostkowe dla klasy `Stack`.

## Opis klasy `Stack`
Klasa `Stack` posiada:
- Konstruktor inicjujący stos jako pustą tablicę.
- Metodę `push(element)`, która dodaje element na wierzch stosu.
- Metodę `pop()`, która usuwa i zwraca element z wierzchu stosu.
- Metodę `peek()`, która zwraca element z wierzchu stosu bez usuwania.
- Metodę `isEmpty()`, która sprawdza, czy stos jest pusty.

## Instrukcje
1. Sklonuj lub pobierz projekt na swój lokalny komputer.
2. Aby uruchomić testy, wykorzystaj narzędzie do testowania kodu JavaScript, takie jak Jest lub inne środowisko testowe.

## Przykłady użycia
Pliki test.js zawierają testy jednostkowe pokazujące, jak dodawać elementy na stos za pomocą `s.push()`, usuwać elementy z wierzchu stosu używając `s.pop()` oraz korzystać z `s.peek()` do odczytu elementu na wierzchu stosu bez jego usuwania. Testy sprawdzają również zachowanie stosu zgodnie z zasadą LIFO.
---

# Projekt: Zliczanie samogłosek w ciągu znaków (Vowels Counter)

## Opis
Projekt zawiera pliki index.js i test.js, które definiują funkcję `vowels(str)` służącą do zliczania ilości samogłosek w podanym ciągu znaków. Samogłoski to litery 'a', 'e', 'i', 'o' oraz 'u'.

## Struktura plików
- **index.js:** Plik zawierający funkcję `vowels(str)` do zliczania samogłosek w podanym ciągu znaków.
- **test.js:** Plik zawierający testy jednostkowe dla funkcji `vowels(str)`.

## Opis funkcji `vowels(str)`
Funkcja `vowels(str)` przyjmuje jako argument ciąg znaków `str` i zwraca liczbę samogłosek występujących w tym ciągu. Funkcja używa wyrażenia regularnego, aby dopasować samogłoski i zliczyć ich ilość.

## Instrukcje
1. Sklonuj lub pobierz projekt na swój lokalny komputer.
2. Aby uruchomić testy, użyj narzędzia do testowania kodu JavaScript, takiego jak Jest lub inne środowisko testowe.

## Przykłady użycia
Pliki test.js zawierają testy jednostkowe, które sprawdzają poprawność działania funkcji `vowels(str)` dla różnych ciągów znaków, w tym również dla samogłosek zapisanych z wielkich liter.
---
