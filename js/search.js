let contacten = [];
contacten.push({
    "Project": "Webdesign",
    "Landen": "Nederland"
})
contacten.push({
    "Project": "Portfoliowebsite",
    "Landen": "Duitsland"
})
contacten.push({
    "Project": "Webshop",
    "Landen": "Frankrijk"
})
contacten.push({
    "Project": "Ui design",
    "Landen": "Polen"
})
contacten.push({
    "Project": "PHP programmeren",
    "Landen": "Korea"
})
function zoekContacten(zoektekst) {
    zoektekst = zoektekst.toUpperCase();
    let myGrid =
        "<div class='cell'><b>Project</b></div><div class='cell'><b>Landen</b></div>";

    for (x = 0; x < contacten.length; x++) {
        if (contacten[x].Project.toUpperCase().includes(zoektekst)) {
            myGrid += '<div class="cell">' + contacten[x].Project + '</div>';
            myGrid += '<div class="cell">' + contacten[x].Landen + '</div>';
        }
    }
    document.getElementById('grid').innerHTML = myGrid;
}