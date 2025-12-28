# Générateur de Code QR pour WireGuard

## Description

Ce projet est un script Node.js qui génère un code QR à partir d'un fichier de configuration WireGuard exporté depuis une Freebox.

## Prérequis

- Node.js (version 22 ou supérieure)
- npm

## Installation

Clonez le dépôt ou téléchargez les fichiers, puis installez les dépendances :

```bash
npm ci
```

## Utilisation

1. Placez votre fichier de configuration WireGuard (par exemple `conf-sample.conf`) dans le répertoire racine du projet.
2. Exécutez le script de génération :

```bash
npm run generate
```

3. Le code QR sera généré et sauvegardé sous le nom `wireguard_qr.png`.
4. Scannez le code QR avec l'application WireGuard sur votre téléphone pour importer la configuration modifiée.

## Fonctionnement

- Dans la section `[Interface]` du fichier de configuration WireGuard, modifiez la ligne `DNS = ...` pour qu'elle pointe vers le DNS local de la Freebox. Ainsi vous pourrez accéder aux adresses locales (comme les appareils sur votre réseau domestique) lorsque vous êtes connecté au VPN WireGuard.
- Le script lit le fichier de configuration WireGuard.
- Il génère ensuite un code QR contenant la configuration modifiée.
- Le code QR peut être scanné pour configurer facilement WireGuard sur un appareil mobile.

## Remarques

- Assurez-vous que le fichier de configuration est au bon endroit et que le nom correspond à celui dans le script (`conf-sample.conf`).

## Ressources complémentaires

- [Caddy Server](https://caddyserver.com/) : Un serveur web moderne et automatique avec HTTPS automatique.
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) : Un serveur DNS open-source pour bloquer les publicités et trackers sur votre réseau.
