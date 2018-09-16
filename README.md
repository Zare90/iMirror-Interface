# iMirror-Interface


## Installation
1. Im Terminal Ordner MagicMirror und den Ordner modules öffnen, dann folgenden Befehl und Link eingeben:
    ```
    git clone https://github.com/ItayXD/MMM-Admin-Interface.git
    ```
1. Modul installieren: 
    ```
    cd iMirror-Interface && npm install 
    ```
1. Modul hinzufügen in `config.js`:
    ```
        {
        	"module": "iMirror-Interface"
        },
    ```
1. IP-Adressen der Geräte in die Whitelist hinzufügen um diese zu erlauben:
   ``` 
        ipWhitelist: [""127.0.0.1", "::ffff:127.0.0.1", "::1", 192.168.X.1/24 , ::ffff:192.168.X.1/24"], 
   ```
  Um alle IP-Adressen zu erlauben alles leer lassen:
  ```
   ipWhitelist: [ ],
   ```

## Benutzung
1. Im Browser eingeben: `<HOST>:8080/iMirror-Interface/`
1. Bearbeiten!


### Quelle

Quelle von ItalyXD, einige Codes und verlinkungen wurden durch Zare90 geändert.
