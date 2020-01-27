// from data.js
var tableData = data;
var tbody=d3.select('tbody');


function displaytable(tableData){
    tbody.html('');
    tableData.forEach(ufoinfo=>{
        var row=tbody.append('tr');
        Object.entries(ufoinfo).forEach(([k,v])=>{
            row.append('td').text(v);
        })
    })
}

var button=d3.select('#filter-btn');
var inputDate=d3.select('#datetime');

function applyFilter(){
    var value=inputDate.property('value');
    if (value !=''){
        var filtered=tableData.filter(ufo=>ufo.datetime===value);
        displaytable(filtered);
    }
    else {
        displaytable(tableData);
    }
}
button.on('click', function(){
    applyFilter();
})

