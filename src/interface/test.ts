 interface ShipmentRecord {
    Month: string;
    Total_Shipments: number;
  }
  
  export interface ShipmentsResponse {
    success: boolean;
    data: ShipmentRecord[];
  }
  