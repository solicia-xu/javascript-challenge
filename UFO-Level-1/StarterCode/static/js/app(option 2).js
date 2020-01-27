// from data.js
var tableData = data;
var tbody=d3.select('tbody');


tableData.forEach(ufoinfo=>{
    var row=tbody.append('tr');
    Object.entries(ufoinfo).forEach(([k,v])=>{
        row.append('td').text(v);
        })
})

var button=d3.select('#filter-btn');
function applyFilter(){
    var input=d3.select('#datetime');
    var value=input.property('value');
    if (value !=""){
        var filtered=tableData.filter(ufo=>ufo.datetime===value);
    }
    tbody.html('');
    filtered.forEach((ufo)=>{
        var row=tbody.append('tr');
        Object.entries(ufo).forEach(([k,v])=>{
            row.append('td').text(v);
        })
    })
}
button.on('click', applyFilter);
