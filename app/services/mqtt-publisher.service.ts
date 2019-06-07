import { Service } from 'typedi';
import mqtt, { Client } from 'mqtt'

@Service()
export class MqttPublisherService {
    client: Client;
    constructor(){
        this.client = mqtt.connect(process.env.BROKER_URL)
    }
    public async publish(data: any): Promise<void> {
        await this.client.publish(data.topic, data.message);
    }
}