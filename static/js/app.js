console.log("This is app.js");

// Sample will hold the url for the json that we will use.
const sample = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function DrawBarChart(sampleId) {
    console.log("DrawBarChart(${sampleId})");

    d3.json(sample).then(data => {
        console.log(data);

        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let yticks = otu_ids.slice(0,10).map(otuId => `OTU ${otuId}`).reverse();

        // Create the data for the bar chart.
        let barData = {
            x: sample_values.slice(0, 10).reverse(),
            y: yticks,
            type: "bar",
            text: otu_labels.slice(0, 10).reverse(),
            orientation: "h"
        };

        // Create the layout and array for the bar chart.
        let barArray = [barData];
        let barLayout = {
            title: "Top 10 - Bactieria Cultures Found",
            margin: {t: 55, l: 150}
        };

        // Use the Plotly function.
        Plotly.newPlot("bar", barArray, barLayout);
    })
}

function DrawBubbleChart(sampleId){
    console.log("DrawBubbleChart(${sampleId})");

    d3.json(sample).then(data => {
        let samples = data.samples;
        let resultArray = samples.filter(s => s.id == sampleId);
        let result = resultArray[0];
        
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;
    
        // Create the data for the bubble chart.
        let bubbleData = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }
    
        // Create Array and Layout for bubble chart.
        let bubbleArray = [bubbleData];
        let bubbleLayout = {
            title: "Bacteria Cultures per Sample",
            margin: {t: 30},
            hobermode: "closest",
            xaxis: {title: "OTU ID"},
        };
    
        // Use Plotly funciton
        Plotly.newPlot("bubble", bubbleArray, bubbleLayout);
    })
  
}


function ShowMetaData(sampleId) {
    console.log("ShowMetaData)${sampleId})");

    console.log(`ShowMetadata(${sampleId})`);

    d3.json(sample).then((data) => {
        let metadata = data.metadata;
        console.log(metadata);

        // Filter data
        let result = metadata.filter(meta => meta.id == sampleId)[0];
        let demographicInfo = d3.select('#sample-metadata');

        // Clear existing data in demographicInfo
        demographicInfo.html('');

        // Add key and value pair to the demographicInfo panel
        Object.entries(result).forEach(([key, value]) => {
            demographicInfo.append('h6').text(`${key}: ${value}`);
        });
    });
}

function optionChanged(sampleId) {
    console.log("optionChanged, new value: ${sampleId}");

    DrawBarChart(sampleId);
    DrawBubbleChart(sampleId);
    DrawGaugeChart(sampleId);
    ShowMetaData(sampleId);
}

function InitDashboard() {
    console.log("InitDashboard");

    // Create the dropdown menu.
    let selector = d3.select('#selDataset');

    d3.json(sample).then(data => {
        console.log("Here is the data");

        let sampleNames = data.names;
        console.log("Here are the sample names:", sampleNames);

        for (let i = 0; i < sampleNames.length; i++) {
            let sampleId = sampleNames[i];
            selector.append('option').text(sampleId).property('value', sampleId);

        };

        let initialId = selector.property('value');
        console.log('initialId = ${initialId}');

        // Draw the bar chart for the specified sample id.
        DrawBarChart(initialId);

        // Draw the bubble chart for the specified sample id.
        DrawBubbleChart(initialId);

        // Show the metadata for the specified sample id.
        ShowMetaData(initialId);
    });

}

InitDashboard();
