Praca Inżynierska

Tytuł: Opracowanie i implementacja aplikacji internetowej do zarządzania budżetem osobistym

Promotor: Roman Simiński


Warstwa Frontend to Angular 5 + TypeScript
Warstwa Backend to NestJS (Express.js + TypeScript + modules [angular way])
Baza danych jakiej będę używał to MongoDB


______________________________________________________________________________________________________________

Aby poprawnie uruchomić aplikację należy najpier zainstalować *Docker* (https://www.docker.com/)  
Po czym w głównym folderze w którym jest plik `docker-compose.yml` należy uruchomić polecenie `docker-compose build` 
by najpierw zbudować obraz dockera zawięrający `backend` i `frontend` a także `mongodb`.  

Po czym należy uruchomić polecenie `docker-compose up` by wystartować całą aplikację.
Polecenie to uruchomi zdefiniowane zadania po stronie `frontendowej` i `backendowej` w izolowanym środowisku `Dockera`  

Po uruchomieniu wystarczy wejść pod adres `localhost:3000`  

Z kolei sam `backend` będzie dostępny pod adresem `localhost:8080`.  
