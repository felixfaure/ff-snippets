// https://news.google.com/covid19/map?hl=fr&gl=FR&ceid=FR%3Afr
var table = '<table>';
Array.prototype.slice.call(document.querySelectorAll('.pH8O4c tbody tr:not(:first-child)')).forEach(function(el, idx) {
  table += '<tr>';
    table += '<td>'+el.querySelector('th:first-child').textContent+'</td>';
    table += '<td>'+el.querySelector('td:nth-child(2)').textContent+'</td>';
    table += '<td>'+el.querySelector('td:nth-child(6)').textContent+'</td>';
  table += '</tr>';
});
table += '</table>';
document.querySelector('body').innerHTML = table;
