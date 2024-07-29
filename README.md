# Webpack mit EJS Projekt

Dieses Projekt verwendet Webpack zur Bündelung von JavaScript- und SCSS-Dateien sowie EJS als Template-Engine. Es wurde eingerichtet, um eine einfache Entwicklungsumgebung mit Hot Module Replacement (HMR) und Live Reloading zu bieten.

## Installierte Pakete

- **webpack**: Modul-Bündler
- **webpack-cli**: CLI für Webpack
- **webpack-dev-server**: Entwicklungsserver für Webpack mit HMR
- **mini-css-extract-plugin**: Extrahiert CSS in separate Dateien
- **html-webpack-plugin**: Erzeugt HTML-Dateien und integriert gebündelte Ressourcen
- **ejs-loader**: Lädt und kompiliert EJS-Vorlagen
- **css-loader**: Interpretiert @import und URL() wie import/require() und löst sie auf
- **sass-loader**: Lädt und kompiliert SCSS-Dateien
- **babel-loader**: Lädt und kompiliert JavaScript-Dateien mit Babel

## Projektstruktur

/project-root
/scss
index.scss
/src
index.js
/api
product.js
/templates
test.ejs
webpack.config.js
package.json


## Installation

1. **Repository klonen**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   
## Abhängigkeiten installieren:
npm install

## Starte den Entwicklungsserver mit Hot Module Replacement und Live Reloading:
npm run start:dev

Der Server läuft standardmäßig auf http://localhost:9000

## Erstelle einen Produktions-Build:
npm run build

Die gebündelten Dateien werden im dist-Verzeichnis gespeichert.

## Anpassungen
Webpack-Konfiguration (webpack.config.js)
Eingabedatei: ./src/index.js
Ausgabeverzeichnis: ./dist
Alias: @scss zeigt auf das scss-Verzeichnis
Loader:
babel-loader für JavaScript-Dateien
css-loader und sass-loader für SCSS-Dateien
ejs-loader für EJS-Vorlagen
Plugins:
MiniCssExtractPlugin zur Extraktion von CSS
HtmlWebpackPlugin zur Erzeugung der index.html
DevServer:
Bedient Dateien aus dem dist-Verzeichnis
Läuft auf Port 9000
Aktiviert HMR und Live Reloading

## Lizenz
Dieses Projekt ist lizenziert unter der MIT-Lizenz - siehe die LICENSE Datei für Details.
