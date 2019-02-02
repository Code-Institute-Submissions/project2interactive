# Project2Interactive

<a href="https://github.com/DamianMcNulty/project2interactive/stargazers">
    <img src="https://img.shields.io/github/stars/DamianMcNulty/project2interactive.svg?style=social" alt="GitHub stars">
</a>
[![Netlify Status](https://api.netlify.com/api/v1/badges/5eb7f523-5395-4be6-8aed-a8f4e1827973/deploy-status)](https://app.netlify.com/sites/project2interactive/deploys)

## Goal

> Create a Data Dashboard visualising a dataset using D3.js and DC.js

## Table of Contents

-   [Description](#description)

-   [UX](#ux)

-   [Technologies Used](#technologies-used)

-   [Build](#build)

-   [Deploy](#deploy)

-   [Credits](#credits)

    -   [Content](#content)
    -   [Media](#media)
    -   [Acknowledgements](#acknowledgements)

-   [LICENSE](#license)

## Description

[(Back to top)](#table-of-contents)

1.  This project visualises an expense dataset for the year 2019. The data was generated using the website Mockaroo.com. There are 265 transactions with each having a date, id, account name and amount. 
2.  Daily, weekly, monthly, quarterly pie charts have been prepared using D3, DC and Crossfilter. Total amount by account and amount by day are also presented visually.

## UX

[(Back to top)](#table-of-contents)

### User Stories

1.  As a user, I want to view a dashboard, so that I can analyse an expense dataset.
2.  As a user, I want to interact with an expense dashboard, so that I can discover interesting trends in the data.
3.  As a user, I want to view an expense dataset using desktop devices.
4.  As a user, I want to load an expense dataset into the browser to create a new dashboard, so that the dashboard can be reused.
5.  As a user, I want to create a pdf of the dashboard, so that I can print the dashboard.
6.  As a user, I want to view descriptive statistics of the dataset, so that I can easily characterise my outgoing expenses. 

## Questions

1.  What is the average expense amount for each account?
2.  How many transactions are there for each account?
3.  How many transactions are there in total?
4.  What is the total expense amount for each account?
5.  How many accounts are there?

## Research

1.  <https://www.w3schools.com/bootstrap/bootstrap_tabs_pills.asp>
2.  <https://www.w3schools.com/bootstrap/bootstrap_collapse.asp>
3.  <https://codepen.io/DamianMcNulty/pen/BqyZQq>
4.  <https://github.com/dc-js/dc.js/issues/731#issuecomment-59599016>
5.  <https://www.cssmatic.com/box-shadow>

## Technologies Used

[(Back to top)](#table-of-contents)

1.  [HTML5](https://en.wikipedia.org/wiki/HTML5) 

2.  [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

3.  [Git](https://git-scm.com/)  

4.  [Github](https://github.com/) 

5.  [D3](https://d3js.org/) 

6.  [DC](https://dc-js.github.io/dc.js/)

## Build

[(Back to top)](#table-of-contents)

    npm i
    npm run build

## Deploy

[(Back to top)](#table-of-contents)

    git tag -a v1.0.0 -m "version 1.0.0"
    sh ./publish.sh 1.0.0

## Credits

[(Back to top)](#table-of-contents)

-   <https://fractures.space/> <a href="https://twitter.com/pyx">Krisztian Puska</a>
-   <https://www.linkedin.com/learning/dc-js-for-data-science-essential-training> <a href="http://vizdata.co.uk/">Emma Saunders</a>
-   [ToolBox](https://frontend.github.io/toolbox/)

## License

[(Back to top)](#table-of-contents)

See [LICENSE](LICENSE).
