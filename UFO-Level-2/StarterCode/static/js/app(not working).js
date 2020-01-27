var tableData = data;
var tbody=d3.select('tbody');

var cityFilter=d3.select('#city');
var stateFilter=d3.select('#state');
var shapeFilter=d3.select('#shape');

function displaytable(){
    // tbody.html('');
    // create empty list for html dropdown option
    var cities=[];
    var shapes=[];
    var states=[];
    tableData.forEach(ufoinfo=>{
        var row=tbody.append('tr');
        Object.entries(ufoinfo).forEach(([k,v])=>{
            row.append('td').text(v);
            if (k=='city'){
                cities.push(v);
            }
            if (k=='shape'){
                shapes.push(v);
            }
            if (k=='state'){
                states.push(v);
            }
        })
    })
    // create a function to get only unique values into an array
    function findUnique(value,index,self){
        return self.indexOf(value)===index;
    }
    var cityUnique=cities.filter(findUnique);
    var shapeUnique=shapes.filter(findUnique);
    var stateUnique=states.filter(findUnique);
    // create a function to append to the three dropdowns
    function addOn(filter,list){
        Object.entries(list).forEach(([i,v])=>{
            filter.append('option').text(v);
    })
    }
    addOn(cityFilter,cityUnique);
    addOn(stateFilter,stateUnique);
    addOn(shapeFilter,shapeUnique);
}
displaytable(tableData);


var filterbutton=d3.select('#filter-btn');
filterbutton.on('click',function(){
    var dateElement=d3.select('#datetime');
    var dateValue=dateElement.property('value');
    if (dateValue!=''){
        filteredData=tableData.filter(ufo=>ufo.datetime===dateValue);
    }
    var shapeElement=d3.select('#shape');
    var shapeValue=dateElement.property('value');
    if (shapeValue!=''){
        filteredData=tableData.filter(ufo=>ufo.shape===shapeValue);
    }
    var cityElement=d3.select('#city');
    var cityValue=dateElement.property('value');
    if (cityValue!=''){
        filteredData=tableData.filter(ufo=>ufo.city===cityValue);
    }
    var stateElement=d3.select('#state');
    var stateValue=dateElement.property('value');
    if (stateValue!=''){
        filteredData=tableData.filter(ufo=>ufo.state===stateValue);
    }
    var countryElement=d3.select('#country');
    var countryValue=dateElement.property('value');
    if (countryValue!=''){
        filteredData=tableData.filter(ufo=>ufo.country===countryValue);
    }
})

// var resetbutton=d3.select('#cancel-btn');