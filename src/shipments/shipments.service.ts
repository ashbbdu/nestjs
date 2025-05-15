import { Injectable } from '@nestjs/common';
import { Shipment } from './shipment.model';

@Injectable()
export class ShipmentsService {
   async getShipments() : Promise<any> {
    const data = await Shipment.count({
        attributes : ["shipment_uid" , 'Mode' , "Company"],
    })
        return data;
    }
}
