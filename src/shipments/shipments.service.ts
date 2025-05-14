import { Injectable } from '@nestjs/common';

@Injectable()
export class ShipmentsService {
    getShipments() : string {
        return "List of all the shipments !"
    }
}
