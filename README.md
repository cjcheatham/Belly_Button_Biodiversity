# Microbial Interactive Webpage

## Overview

This project uses an html file to store an interactive database that explores a small handful of  microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. The database catalogs the microbes that colonize human navels. 

The files included in this repostiory include the following:

* index.html

* samples.json

* the stacic folder which includes the java script file app.js in the js folder.\

**Note:** Information on the json will be located on the json section.

These files are meant to be ran using vs code and the live server extention. A link for where to download vs code will be located in the links section and once downloaded, the live server can be installed in the extensions section of vs code.

## Index

The index file contains all the html code for the for the webpage data base. The json and app files are used to fill in this file.


## Json

The samples.json file includes the data that is used and visualized in the index.html file. However, while this file can be used locally, a link was used to access this json. This link can be found in the links secion.

## App

The app.js file is a javascript file used to code the data into the index file.

### Instructions

* Use the D3 library to read in samples.json

* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    * Use sample_values as the values for the bar chart.

    * Use otu_ids as the labels for the bar chart.

    * Use otu_labels as the hovertext for the chart.

* Create a bubble chart that displays each sample.

    * Use otu_ids for the x values.

    * Use sample_values for the y values.

    * Use sample_values for the marker size.

    * Use otu_ids for the marker colors.

    * Use otu_labels for the text values.

* Display the sample metadata, i.e., an individual's demographic information.

* Display each key-value pair from the metadata JSON object somewhere on the page.

* Update all the plots when a new sample is selected. 

The dropdown menu in the interactive webpage will help you select each different sample, each chart and the demographic info will update for each new sample selected.

## Links

https://code.visualstudio.com/download

https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

