"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typedi_1 = require("typedi");
var routing_controllers_1 = require("routing-controllers");
var mqtt_publisher_controller_1 = require("./controllers/mqtt-publisher.controller");
routing_controllers_1.useContainer(typedi_1.Container);
var port = process.env.PORT || 3000;
var app = routing_controllers_1.createExpressServer({
    controllers: [mqtt_publisher_controller_1.MqttPublisherController],
    classTransformer: true,
    validation: true
});
app.listen(port, function () {
    console.log("MQTT Publisher service listening on port " + port);
});
