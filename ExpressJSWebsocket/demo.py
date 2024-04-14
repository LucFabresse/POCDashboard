import requests
import json
import time

endpoint = 'http://localhost:3000/updatePump'

maxWaterLevel = 80
currentPumpWaterLevel = 80
# otherPumpWaterLevel = 0
variation = -10
currentPump = 0
otherPump = 1

def updatePump(pumpId,status,waterLevel):
    response = requests.post(endpoint, data=json.dumps({'pumpId':pumpId,'pumpStatus':status,'waterLevel':waterLevel}), headers={'Content-Type': 'application/json'})
    time.sleep(1)
    return response

# initialize
updatePump(0,False,80)
updatePump(1,False,0)
print(f'Pump switch: {currentPump} {otherPump}')

# loop
while(True):
    currentPumpWaterLevel += variation
    updatePump(currentPump,True,currentPumpWaterLevel)
    updatePump(otherPump,False,maxWaterLevel-currentPumpWaterLevel)
    print(f'water levels: {currentPumpWaterLevel} {maxWaterLevel-currentPumpWaterLevel}')


    if(currentPumpWaterLevel<=0 or currentPumpWaterLevel>=100):
        print(f'Pump switch: {currentPump} {otherPump}')
        updatePump(currentPump,False,currentPumpWaterLevel)
        temp = currentPump
        currentPump = otherPump
        otherPump = temp
        currentPumpWaterLevel = maxWaterLevel

# curl -X POST http://localhost:3000/updatePump -H "Content-Type: application/json" -d '{"pumpId":1, "pumpStatus": true, "waterLevel": 40 }'