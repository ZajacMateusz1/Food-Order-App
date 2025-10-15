# Food Order App 🍔

## Live demo: (https://zajacmateusz1.github.io/Food-Order-App/)

## Mój profil na GitHub: [ZajacMateusz1](https://github.com/ZajacMateusz1)

## Mój profil na LinkedIn [Mateusz Zajac](https://www.linkedin.com/in/mateusz-zaj%C4%85c-371971387/)

---

## Opis

Aplikacja do zamawiania jedzenia napisana w **React + TypeScript** z wykorzystaniem **Material UI**.  
Pozwala przeglądać menu, dodawać potrawy do koszyka oraz składać zamówienia.
Po ich złożeniu użytkownik ma możliwość przeglądania historii wszystkich zamówień.
Dane są pobierane z **MockAPI**, a stan koszyka przechowywany lokalnie w **localStorage**.

---

## Funkcje

- Przeglądanie menu pobieranego z MockAPI
- Dodawanie, usuwanie i zmiana ilości produktów w koszyku
- Zapisywanie koszyka w localStorage
- Formularz zamówienia z walidacją pól (imię, e-mail, adres, kod pocztowy)
- Wysyłanie zamówienia do API i wyświetlanie potwierdzenia
- Podgląd wszystkich złożonych zamówień w tabeli (DataGrid)
- Obsługa błędów i stanów ładowania
- Modal do przeglądania koszyka i składania zamówienia

---

## Technologie

- React 19 + TypeScript
- Material UI (MUI)
- Context API + useReducer
- Custom hooks: useFetch, useFetchPromiseAll, usePost, useInput
- localStorage – przechowywanie danych koszyka
- MockAPI – źródło danych i endpointy do zamówień
