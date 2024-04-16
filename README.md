# Why this repo?

Main question: Which technologies / architecture to develop a dashboard that displays various sensors data and also support controlling some actuators (pumps)?

Are there no-code / low-Code solutions?

Constraints:
- Web-based
- dynamic updates (the dashboard updates itself when new values arrive)

# Web-based

## Handwritten POC using NodeJS/HTML/CSS

[ExpressJSWebsocket](./ExpressJSWebsocket)

## FUXA

- FUXA https://frangoteam.org/
    - Open source SCADA
    - WYSIWYG
    - Web-based
- HA integration: https://github.com/SmartLiving-Rocks/FUXA
    - https://www.youtube.com/watch?v=2ugduv976nU

# Python-based GUI

- [WYSIWYG] QtDesigner/QTCreator
    - https://www.youtube.com/watch?app=desktop&v=QECs01n0aZE
    - https://www.youtube.com/watch?v=v6Oufgb_7NI
    - https://www.youtube.com/watch?v=adC48qZ8p5Y
    - https://www.youtube.com/watch?v=Bf660-_w5zU
- python binding: PyQt6 vs PySide6
    - https://www.pythonguis.com/faq/pyqt6-vs-pyside6/
- [Web] Streamlit Web-based Python
- TKinter https://docs.python.org/3/library/tkinter.html
    - https://github.com/ParthJadhav/Tkinter-Designer
- Dear PyGui https://github.com/hoffstadt/DearPyGui
- https://github.com/chriskiehl/Gooey
- https://kivy.org/


# OSC / music

- open source https://openstagecontrol.ammd.net/docs/user-interface/editor/
- https://hexler.net/touchosc (trop musique : graphes ?) Python + Tkinter
- apple only https://holon.ist/

# Others

- free plan for NC - CDP Studio https://cdpstudio.com/cdp-studio/design/
- non-free https://electricui.com/hello/arduino - web dashboard looks nice
- Virtuino https://virtuino.com/index.php/virtuino/video-tutorials

# Locally Redeployable Solutions

- Graphana https://grafana.com/grafana/plugins/scadavis-synoptic-panel/ - https://scadavis.io/

# Web-based SCADA solutions

Supervisory Control and Data Acquisition (SCADA) systems are used for controlling, monitoring, and analyzing industrial devices and processes.

- https://openautomationsoftware.com/what-is-oas/
    - HMI: https://openautomationsoftware.com/products/visualization-tools/


# Nodered-based Solutions

[TODO]

https://flowfuse.com/blog/2023/03/comparing-node-red-dashboards/

## Dashboard 2

https://dashboard.flowfuse.com/

## FlexDash

https://github.com/flexdash/flexdash (last commit is old)
https://flexdash.github.io/docs/

## UIBuilder

https://totallyinformation.github.io/node-red-contrib-uibuilder/#/

## WebComponents

https://github.com/cinhcet/node-red-contrib-component-dashboard

# Cloud-based Solutions

- https://cloud.arduino.cc
- https://io.adafruit.com/

# Other paying solutions

- https://www.kaaiot.com/iot-dashboards
- https://thingsboard.io/docs/getting-started-guides/helloworld/
- WebIQ https://www.smart-hmi.com/

