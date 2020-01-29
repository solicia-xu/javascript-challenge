// from data.js
var tableData = data;
var tbody=d3.select('tbody');

function displaytable(data){
    tbody.html('');
    data.forEach(ufoinfo=>{
        var row=tbody.append('tr');
        Object.entries(ufoinfo).forEach(([k,v])=>{
            row.append('td').text(v);
        })
    })
}
var cities=[];
var shapes=[];
var states=[];
tableData.forEach(function(ufo){
    cities.push(ufo.city);
    shapes.push(ufo.shape);
    states.push(ufo.state);
})
// Get only the distinct values
const cityUnique=[...new Set(cities)];
const shapeUnique=[...new Set(shapes)];
const stateUnique=[...new Set(states)];

// create a function to append to the three dropdowns
function addOn(filter,list){
    Object.entries(list).forEach(([i,v])=>{
        filter.append('option').text(v);
})
}
var cityFilter=d3.select('#city');
var stateFilter=d3.select('#state');
var shapeFilter=d3.select('#shape');
addOn(cityFilter,cityUnique);
addOn(stateFilter,stateUnique);
addOn(shapeFilter,shapeUnique);

var filterbutton=d3.select('#filter-btn');
filterbutton.on('click',function(){
    var dateElement=d3.select('#datetime');
    var dateValue=dateElement.property('value');
    var filtered=tableData;
    // if the filter is not empty, proceed
    if (dateValue!=''){
        filtered=filtered.filter(ufo=>ufo.datetime===dateValue);
        displaytable(filtered);
    }
    var cityElement=d3.select('#city');
    var cityValue=cityElement.property('value');
    if (cityValue!=''){
        filtered=filtered.filter(ufo=>ufo.city===cityValue);
        displaytable(filtered);
    }
    var stateElement=d3.select('#state');
    var stateValue=stateElement.property('value');
    if (stateValue!=''){
        filtered=filtered.filter(ufo=>ufo.state===stateValue);
        displaytable(filtered);
    }
    var shapeElement=d3.select('#shape');
    var shapeValue=shapeElement.property('value');
    if (shapeValue!=''){
        filtered=filtered.filter(ufo=>ufo.shape===shapeValue);
        displaytable(filtered);
    }
    var countryElement=d3.select('#country');
    var countryValue=countryElement.property('value');
    if (countryValue!=''){
        filtered=filtered.filter(ufo=>ufo.country===countryValue);
        displaytable(filtered);
    }
    // else {
    //     displaytable(tableData);
    // }
})

var resetbutton=d3.select('#cancel-btn');
resetbutton.on('click',function(){
    displaytable(tableData);
})

