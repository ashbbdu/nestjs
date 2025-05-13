 interface ShipmentRecord {
    Month: string;
    Total_Shipments: number;
  }
  
  export interface ShipmentsResponse {
    success: boolean;
    data: ShipmentRecord[];
  }
  

export interface CreateUser {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  updatedAt: string; 
  createdAt: string; 
  }

  interface CreateUserError {
    success: false;
    message: string;
  }

  type CreateUserSuccess = CreateUser;

  export type CreateUserResult = CreateUserError | CreateUserSuccess;