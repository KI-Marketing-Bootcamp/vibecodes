🎄 Vibecoding Adventskalender 2025
📖 Projektbeschreibung
Der Vibecoding Adventskalender ist ein interaktives Web-Experiment des KI Marketing Bootcamps. Das Projekt dient nicht nur als weihnachtliches Community-Tool, sondern ist selbst ein Proof-of-Concept für "Vibecoding": Das Prototyping von Software durch Marketing-Experten mithilfe von Generativer KI, ohne tiefgreifende Programmierkenntnisse.

In diesem Kalender findest du 24 Micro-Apps und interaktive Prototypen, die vollständig mit KI generiert wurden.

✨ Features
Interaktives Grid: 24 Türchen, die sich basierend auf dem aktuellen Datum öffnen oder gesperrt bleiben.

Visual Effects: Partikel-Schneefall-Effekt und "Glassmorphism"-Design (Milchglas-Optik).

Timeline: Eine detaillierte Zeitleiste "3 Jahre KI im Marketing" (2020–2026).

Datenschutz-konform: Verzicht auf externe Server-Aufrufe (Google Fonts/CDNs) für eine Cookie-Banner-freie Nutzung.

Responsive Design: Optimiert für Mobile und Desktop.

🛠️ Tech Stack & Setup
Das Projekt basiert auf einem Single-File-Ansatz (Vanilla HTML/JS) um die Komplexität gering zu halten.

HTML5 & JavaScript: Logik für Kalendertürchen, Modals und Schnee-Effekt.

CSS Framework: Tailwind CSS (lokal eingebunden als Script).

Schriftart: Outfit (lokal gehostet).

Hosting: GitHub Pages.

Ordnerstruktur
Um die DSGVO-Konformität zu gewährleisten (keine Anfragen an US-Server), werden alle Assets lokal gespeichert:

Plaintext

/root
  |-- index.html          # Hauptseite (Kalender)
  |-- timeline.html       # Die Timeline-Unterseite
  |-- logo.png            # Projektlogo
  |-- assets/             # Ordner für lokale Ressourcen
       |-- tailwind.js    # Lokales Tailwind-Script
       |-- fonts/         # Ordner für Schriftart-Dateien (.woff2)
             |-- outfit-v11-latin-300.woff2
             |-- outfit-v11-latin-regular.woff2
             |-- ...
🚀 Prozessdokumentation: "Vibecoding" Workflow
1. Konzept & Inhalt
Die Inhalte basieren auf dem Flyer "Happy Neural New Year 2025".




Ziel: AI Literacy demonstrieren ("Prompting wird zu Context Engineering").



Inhaltliche Meilensteine: Von GPT-3 (2020) über den ChatGPT-Launch (2022) bis hin zu zukünftigen Agenten-Systemen (2026) .

2. Technische Umsetzung (No-Code/Low-Code)
Code-Erstellung: Der Code wurde iterativ mit LLMs (Claude/Gemini) generiert.

Rechtliche Anpassung: Um ein Cookie-Banner zu vermeiden, wurden externe Abhängigkeiten (Google Fonts, Tailwind CDN) entfernt und durch lokale Dateien ersetzt.

Tool: Google Webfonts Helper für den Download der Fonts.

Tailwind: Download des Scripts via "Speichern unter".

Code-Cleaning: Zusammenführung mehrerer <style>-Blöcke zu einem sauberen Head-Bereich.

3. Deployment via GitHub Pages
Da keine Build-Pipeline existiert, erfolgt das Deployment manuell:

Upload des assets-Ordners per Drag & Drop im GitHub Web-Interface.

Commit der index.html und timeline.html.

Aktivierung von GitHub Pages in den Repository-Settings.

⚖️ Rechtliches & Datenschutz
Kein Tracking: Es werden keine Analysetools eingesetzt.

LocalStorage: Wird nur genutzt, um den Status des Newsletter-Popups ("geschlossen") zu speichern (Technisch notwendig, kein Consent nötig).

Impressum: Ist als Overlay direkt in die Seite integriert.

👥 Credits

Idee & Konzept: Vroni, Georg & das Team (Kathi, Jenny, Angie, Artur).


Organisation: uncanny minds GmbH.

Design & Code: Generiert durch KI (Vibecoding Experiment).

Nutzungshinweis für dieses Repo
Zum Bearbeiten:

Lade die Schriftarten oder Bilder in den assets Ordner.

Verlinke sie in der index.html relativ (src="assets/...").

Lade die Änderungen via "Add file" -> "Upload files" auf GitHub hoch.
