
const ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', function (event) {
    console.log('Connected to WebSocket server');
    ws.send('Hello from Dashboard!');
});

// curl -X POST http://localhost:3000/updatePump -H "Content-Type: application/json" -d '{"pumpId":1, "pumpStatus": true, "waterLevel": 40 }'
ws.addEventListener('message', function (event) {
    data = JSON.parse(event.data);
    console.log('Received data:');
    console.log(data);
    let currentPump = pumps[data.pumpId];
    currentPump.updateValueTo(data.waterLevel);
    currentPump.setPumpStatus(data.pumpStatus);
});

pumps = [];
class Pump {
    constructor(pumpId,domElement) {
        this.pumpId = pumpId;
        pumps[this.pumpId] = this; // global store
        this.domElement = domElement;
        this.dataFrame = google.visualization.arrayToDataTable([
            ['Label', 'Value'],
            ['Water Level', 80],
        ]);
        this.chartsOptions = {
            width: 400, height: 120,
            yellowFrom:75, yellowTo: 90,
            redFrom: 90, redTo: 100,
            minorTicks: 5
        };
        this.chartDomElement = this.domElement.querySelector(".pumpChart");
        this.chart = new google.visualization.Gauge(this.chartDomElement);
        this.updateValueTo(90);
        this.inputDomElement = this.domElement.querySelector(".pumpStatus");
        this.setPumpStatus(false);
    } // /constructor

    updateValueTo(v) {
        this.dataFrame.setValue(0, 1, v);
        this.chart.draw(this.dataFrame, this.chartsOptions);
    }

    setPumpStatus(b){
        this.inputDomElement.checked = b;
    }
}

function updateTime() {
    currentDateTime = new Date().toLocaleString();
    $('#time').html(currentDateTime);
}

$(document).ready(function(){
    updateTime();
    setInterval(updateTime, 1000); // every 1s

    google.charts.load('current', {'packages':['gauge']});
    google.charts.setOnLoadCallback(
        () => {
            $(".pump").each((i,e)=>{
                new Pump(i,e);
            });
        } );
});