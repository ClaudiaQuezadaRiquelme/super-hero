const statistics = function(htmlId, hero) {

    var chart = new CanvasJS.Chart(htmlId, {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: `Estadísticas de poder para ${hero.biography['full-name']}`
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: returnNumberStatistic(hero.powerstats.power), label: "power" },
                { y: returnNumberStatistic(hero.powerstats.combat), label: "combat" },
                { y: returnNumberStatistic(hero.powerstats.intelligence), label: "intelligence" },
                { y: returnNumberStatistic(hero.powerstats.strength), label: "strength" },
                { y: returnNumberStatistic(hero.powerstats.speed), label: "speed" },
                { y: returnNumberStatistic(hero.powerstats.durability), label: "durability" }
            ]
        }]
    });
    chart.render();
    
}

const returnNumberStatistic = (stat) => { // se podrían añadir mejoras para rellenar estadísticas con valores nulos
    return (stat === "null") ? 0 : parseInt(stat);
}