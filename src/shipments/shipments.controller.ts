import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ShipmentsService } from './shipments.service';
import { ShipmentGraphQueryDTO, ShipmentGraphQueryDTOFirst, ShipmentTeusChargeableDTO } from 'src/users/dto/create-users-dto';
import { ApiQuery } from '@nestjs/swagger';



@Controller('shipments')
export class ShipmentsController {
  constructor(private readonly shipmnetService: ShipmentsService) {}
  @Get()
  getShipments(): any {
    return this.shipmnetService.getShipments();
  }

  @Get("/shipmentgraph")
  @ApiQuery({ name : "endDate"} )
  @ApiQuery({ name : "starDate"} )
  getShipmentGraphData (@Query() query: ShipmentGraphQueryDTO ) : any {
    const {startDate , endDate} = query

    return {
      startDate,
      endDate,
      msg : "working fine"
    }
  } 


    @Get("/shipmentgraphfirst")
  getShipmentGraphDataFirst (@Query() query: ShipmentGraphQueryDTOFirst ) : any {
    console.log(query, "query");
    
  } 

  @Get("/shipmentteeuschargabledata")
  shipmentTeusChargableData (@Query() shipmentTeusChargeableDto : ShipmentTeusChargeableDTO) : any  {
    return this.shipmnetService.shipmentTeusChargableData(shipmentTeusChargeableDto);
  }
  
}
