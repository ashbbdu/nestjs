import { Controller, Get } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';

@Controller('shipments')
export class ShipmentsController {
    constructor(private readonly shipmnetService: ShipmentsService) {}
        @Get()
        getShipments() : any {
            return this.shipmnetService.getShipments();
        }
}
