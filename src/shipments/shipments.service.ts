import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Shipment } from './shipment.model';
import { ShipmentTeusChargeableDTO } from 'src/users/dto/create-users-dto';
import { col, fn } from 'sequelize';
import { Op } from 'sequelize';
import { messages } from 'src/constants/returnMessages';
import { InterfaceShipmentChargeableTeus } from 'src/interface/test';

@Injectable()
export class ShipmentsService {
  private readonly logger = new Logger(ShipmentsService.name , {timestamp : true});
  async getShipments(): Promise<any> {
    const data = await Shipment.count({
      attributes: ['shipment_uid', 'Mode', 'Company'],
    });
    return data;
  }

  async shipmentTeusChargableData(
    shipmentTeusChargeableDto: ShipmentTeusChargeableDTO,
  ): Promise<any> {
    this.logger.log('Doing something...');
    // tomorrow check out how to will do the type thing
    const { startDate, endDate, mode, company } = shipmentTeusChargeableDto;
    try {
      const data = await Shipment.findAll({
        attributes:
          mode === 'FCL'
            ? ['carrier_name', [fn('SUM', col('TEU')), 'TEUs']]
            : ['carrier_name', [fn('SUM', col('Chargeable')), 'Chargeable']],
        where: {
          job_opened: { [Op.between]: [startDate, endDate] },
          mode: mode,
          company: company,
        },
        group: ['carrier_name'],
        order: mode === 'FCL' ? [['TEUs', 'desc']] : [['Chargeable', 'desc']],
        raw: true,
      });
      return {
        statusCode: HttpStatus.OK,
        message: messages.SHIPMENT_MESSAGE_SUCCESS,
        data,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: messages.SHIPMENT_MESSAGE_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
