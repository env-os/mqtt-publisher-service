import 'reflect-metadata';
import { Container } from 'typedi';
import { createExpressServer, useContainer } from 'routing-controllers';
import { MqttPublisherController } from './controllers/mqtt-publisher.controller';


useContainer(Container);

const port = process.env.PORT || 3000;

const app = createExpressServer({
    controllers: [MqttPublisherController],
    classTransformer: true,
    validation: true
});

app.listen(port, () => {
    console.log("MQTT Publisher service listening on port " + port);
})