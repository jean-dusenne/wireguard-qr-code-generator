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
2. Executez le script de generation :

```bash
# Fichier par défaut (conf-sample.conf)
npm run generate

# Fichier spécifique
npm run generate -- ./mon-fichier.conf

# Fichier situé dans un autre répertoire
npm run generate -- /chemin/vers/mon.conf
```

### Option `--dns`

L'option `--dns` permet d'écraser la valeur du champ `DNS` dans le fichier de configuration au moment de la génération, sans modifier le fichier source.

```bash
# Overrider le DNS avec une adresse personnalisée
npm run generate -- --dns=192.168.1.1

# Combiner fichier spécifique et override DNS
npm run generate -- ./mon-fichier.conf --dns=192.168.1.53
```

> 💡 Le `--` est nécessaire avec `npm run` pour que les arguments soient transmis au script Node.js et non interprétés par npm.

3. Le code QR est généré dans le **répertoire courant** sous le même nom que le fichier de conf (ex: `file.conf` → `file.png`).
4. Scannez le code QR avec l'application WireGuard sur votre telephone pour importer la configuration.

## Fonctionnement

- Le script lit le fichier de configuration WireGuard.
- Si l'option `--dns` est fournie, la valeur du champ `DNS = ...` dans la section `[Interface]` est remplacée à la volée (le fichier source n'est pas modifié).
- Il genere ensuite un code QR PNG contenant la configuration complète.
- Le code QR peut etre scanne pour configurer facilement WireGuard sur un appareil mobile.

## Dépendances

| Package | Rôle |
|---------|------|
| [`qrcode`](https://www.npmjs.com/package/qrcode) | Génération du QR code en PNG |
| [`minimist`](https://www.npmjs.com/package/minimist) | Parsing des arguments CLI (`--dns`, etc.) |

## Remarques

- Assurez-vous que le fichier de configuration est au bon endroit ou passez le chemin en argument.
- L'option `--dns` est utile si votre DNS local change ou si vous souhaitez générer plusieurs QR codes avec des DNS différents sans modifier vos fichiers `.conf`.

## Ressources complémentaires

- [Caddy Server](https://caddyserver.com/) : Un serveur web moderne et automatique avec HTTPS automatique.
- [AdGuard Home](https://adguard.com/en/adguard-home/overview.html) : Un serveur DNS open-source pour bloquer les publicites et trackers sur votre reseau.
