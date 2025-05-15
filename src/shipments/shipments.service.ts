import { Injectable } from '@nestjs/common';
import { Shipment } from './shipment.model';

@Injectable()
export class ShipmentsService {
   async getShipments() : Promise<any> {
    const data = await Shipment.findAll({
        attributes : ["shipment_uid" , 'Mode' , "Company"],
        limit : 10
    })
        return data;
    }
}
