import { Post, JsonController, OnUndefined, Body, Req, BadRequestError } from 'routing-controllers';
import { Request } from 'express';
import { MqttPublisherService } from '../services/mqtt-publisher.service';
import { LogsUtil } from '../utils/logs.util';

@JsonController('/mqtt')
export class MqttPublisherController {
    constructor(
        private readonly mqttPublisherService: MqttPublisherService,
    ) {}

    @Post()
    @OnUndefined(201)
    public async publish(@Body() data: JSON, @Req() req: Request): Promise<void> {
        LogsUtil.logRequest(req);
        await this.mqttPublisherService.publish(data)
        .catch(() => {
            return new BadRequestError();
        })
    }
}