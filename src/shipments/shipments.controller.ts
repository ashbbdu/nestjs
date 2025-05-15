import { Controller, Get, Param, Query } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentGraphQueryDTO, ShipmentTeusChargeableDTO } from 'src/users/dto/create-users-dto';



@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmnetService: ShipmentsService) {}
  @Get()
  getShipments(): any {
    return this.shipmnetService.getShipments();
  }

  @Get("/shipmentgraph")
  getShipmentGraphData (@Query() query: ShipmentGraphQueryDTO ) : any {
    console.log(query, "query");
    
  } 

  @Get("/shipmentteeuschargabledata")
  shipmentTeusChargableData (@Query() shipmentTeusChargeableDto : ShipmentTeusChargeableDTO) : any  {
    return this.shipmnetService.shipmentTeusChargableData(shipmentTeusChargeableDto);
  }
  
}
