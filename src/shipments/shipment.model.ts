import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
  } from 'sequelize-typescript';
  
  @Table({
    tableName: 'shipment_profile',
    timestamps: false,
  })
  export class Shipment extends Model<Shipment> {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER })
    declare shipment_uid: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare company: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true, unique: true })
    declare shipment_id: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare old_ref_no: string;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare s_year: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare trans: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare customs_info: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare mode: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare origin: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare origin_country: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare destination: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare destination_country: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignor_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare consignor_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignee_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare consignee_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare house_ref: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare inco: string;
  
    @Column({ type: DataType.STRING(1000), allowNull: true })
    declare additional_terms: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare ppd_ccx: string;
  
    @Column({ type: DataType.STRING(1000), allowNull: true })
    declare goods_description: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare origin_etd: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare destination_eta: Date;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare weight: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare weight_uq: string;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare volume: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare volume_uq: string;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare loading_meters: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare chargeable: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare chargeable_unit_uq: string;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare inner_packets: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare inner_unit_uq: string;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare outer_packets: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare outers_unit_uq: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare added_date: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare controlling_customer_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare controlling_customer_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare controlling_agent_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare controlling_agent_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare transport_job: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare brokerage_job: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare is_master_lead: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare master_lead_ref: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare import_broker_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare import_broker_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare export_broker_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare export_broker_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_branch: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_dept: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare local_client_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare local_client_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_sales_rep: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_operator: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_status: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare job_opened: Date;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare recognized_revenue: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare recognized_wip: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_recognized_income_rev_wip: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare recognized_cost: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare recognized_accrual: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_recognized_expense_cst_acr: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare job_profit: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consol_id: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare first_load: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare last_discharge: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare etd_first_load: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare eta_last_discharge: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare master_bl: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare vessel: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare flight_voyage: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare load_port: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare discharge: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare etd_load: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare eta_discharge: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare sending_agent_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare sending_agent_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare receiving_agent: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare receiving_agent_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare co_loaded_with: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare co_loader_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare carrier_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare carrier_name: string;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare teu: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare container_count: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare other: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c20f: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c20r: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c20h: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c40f: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c40r: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c40h: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare c45f: number;
  
    @Column({ type: DataType.INTEGER, allowNull: true })
    declare gen: number;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare service_level_code: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare shippers_reference: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignor_city: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare consignor_state: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignor_postcode: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare consignee_city: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignee_state: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare consignee_postcode: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare consol_atd: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare consol_ata: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_revenue_recognition_date: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare direction: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare local_client_ar_settlement_group_code: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare local_client_ar_settlement_group_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare overseas_agent_code: string;
  
    @Column({ type: DataType.STRING(100), allowNull: true })
    declare overseas_agent_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_overseas_agent_ar_settlement_group_code: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare job_overseas_agent_ar_settlement_group_name: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare commodity: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare contract_no: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare actual_cartage_delivery_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare actual_cartage_delivery_date: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare delivery_cartage_advised_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare delivery_cartage_advised_date: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare cartage_deliver_by_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare cartage_deliver_by_date: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare cartage_drop_mode: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare est_cartage_delivery_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare est_cartage_delivery_date: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare house_bill_type: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare is_active: string;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_accrual_recognized_unrecognized: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_cost_recognized_unrecognized: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_expense_recognized_unrecognized_cst_acr: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_income_recognized_unrecognized_rev_wip: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_revenue_recognized_unrecognized: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_unrecognized_expense_cst_acr: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_unrecognized_income_rev_wip: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare total_wip_recognized_unrecognized: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare unrecognized_accrual: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare unrecognized_cost: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare unrecognized_revenue: number;
  
    @Column({ type: DataType.DOUBLE, allowNull: true })
    declare unrecognized_wip: number;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare actual_pickup_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare actual_pickup_date: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare pickup_cartage_advised_date_time: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare pickup_cartage_advised_date: Date;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare cartage_pickup_mode: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare interim_receipt: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare interim_receipt_no: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare pickup_by_date_time: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare pickup_by_date: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare pickup_from_date_time: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare pickup_from_date: string;
  
    @Column({ type: DataType.STRING(45), allowNull: true })
    declare controlling_rep: string;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare created_at: Date;
  
    @Column({ type: DataType.DATE, allowNull: true })
    declare updated_at: Date;
  }
  