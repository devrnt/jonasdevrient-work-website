# Jonas De Vrient Werk Website
[GatsbyJS](https://www.gatsbyjs.org/) website voor Jonas De Vrient <br/>Live: [https://work.jonasdevrient.be](https://work.jonasdevrient.be)

## Beschrijving
Website die het werk van Jonas De Vrient weergeeft. De website heeft als doelpubliek bezoekers die een achtergrond hebben in IT.
De projecten worden in detail besproken en maken gebruik van een IT vakjargon.

## Features
* Projecten worden afgehaald van GitHub zodat de meest recente projecten beschikbaar zijn
* Voor elk project wordt er automatisch een details-pagina gegeneerd
* Toegankelijk zonder internettoegang
* [Progressive Web App](https://developers.google.com/web/progressive-web-apps/)
* 100% [Chrome Lighthouse Audit](https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url=https://work.jonasdevrient.be) score
* CI/CD Pipeline via [Buddy.works](https://buddy.works)

## Werking
Deze repository is onderdeel van een gehele CI/CD pipeline. De pipeline is opgebouwd via Buddy.works, een relatief nieuwe pion op vlak van CI/CD. 
### Buddy.works
![Automated by Buddy](https://assets.buddy.works/automated-blue.svg)

Telkens wanneer deze repository wordt bijgewerkt, wordt de `build` actie op Buddy opgestart. Deze actie zorgt ervoor dat de `public` folder wordt gegenereerd. Daarna wordt via `ftp` de inhoud van de public folder geplaatst op de hosting. <br/>
Als laatste is er nog `form.php` die het contact formulier afhandelt. Er wordt een email verzonden naar de bestemmeling en zo ook een kopie naar de afzender.

## Getting Started
Install the GatsbyJS Cli
```shell
npm install --global gatsby-cli
```
Clone this repository and run the following command to start
```shell
gatsby develop
```


## Status
[![buddy pipeline](https://app.buddy.works/jonasdevrient-websites/jonasdevrient-work/pipelines/pipeline/204145/badge.svg?token=48c9365418e1a25cbe18220ba69e611d2f3b163bf4aee4ec98b5159d36c49521 "buddy pipeline")](https://app.buddy.works/jonasdevrient-websites/jonasdevrient-work/pipelines/pipeline/204145)
[![Lighthouse score: 100/100](https://lighthouse-badge.appspot.com/?score=100)](https://github.com/ebidel/lighthouse-badge)
