# Générateur de Code QR pour WireGuard

## Description

Ce projet est un script Node.js qui génère un code QR à partir d'un fichier de configuration WireGuard exporté depuis une Freebox. J'utilise un serveur DNS local AdGuard Home pour acceder aux adresses locales quand je suis connecte au VPN.

## Prérequis

- Node.js (version 22 ou supérieure)
- npm

## Installation

Clonez le dépôt ou téléchargez les fichiers, puis installez les dépendances :

```bash
npm ci
```

## Utilisation

1. Placez votre fichier de configuration WireGuard (par exemple `conf-sample.conf`) dans le repertoire racine du projet.
2. Executez le script de generation (chemin facultatif) :

```bash
npm run generate -- ./conf-sample.conf
```

Exemple avec un fichier situé dans un autre répertoire :

```bash
npm run generate -- /chemin/vers/mon.conf
```

3. Le code QR est généré dans le **répertoire courant** sous le même nom que le fichier de conf (ex: `file.conf` → `file.png`).
4. Scannez le code QR avec l'application WireGuard sur votre telephone pour importer la configuration.

## Fonctionnement

- Dans la section `[Interface]` du fichier de configuration WireGuard, modifiez la valeur `DNS = ...` pour qu'elle pointe vers votre DNS local (AdGuard Home dans mon cas). Ainsi vous pourrez acceder aux adresses locales (comme les appareils sur votre reseau domestique) lorsque vous etes connecte au VPN WireGuard.
- Le script lit le fichier de configuration WireGuard.
- Il genere ensuite un code QR contenant la configuration.
- Le code QR peut etre scanne pour configurer facilement WireGuard sur un appareil mobile.

## Remarques

- Assurez-vous que le fichier de configuration est au bon endroit ou passez le chemin en argument.

## Ressources complémentaires

- [Caddy Server](https://caddyserver.com/) : Un serveur web moderne et automatique avec HTTPS automatique.
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) : Un serveur DNS open-source pour bloquer les publicites et trackers sur votre reseau.
