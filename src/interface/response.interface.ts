export interface FortuneWheelResponse {
  player: string;
  reward_amount: string | number;
  reward_tier: string;
  reward_type: string;
  timestamp: string;
}

export interface TransactionEvent<T> {
  data: T;
  guid: {
    creation_number: string;
    account_address: string;
  };
  sequence_number: string;
  type: string;
}

export interface Transaction {
  accumulator_root_hash: string;
  changes: object[];
  event_root_hash: string;
  events: TransactionEvent<any>[];
  expiration_timestamp_secs: string;
  gas_unit_price: string;
  gas_used: string;
  hash: string;
  max_gas_amount: string;
  payload: any;
  sender: string;
  sequence_number: string;
  signature: {
    public_key: string;
    signature: string;
    type: string;
  };
  state_change_hash: string;
  state_checkpoint_hash: null | string;
  success: boolean;
  timestamp: string;
  type: string;
  version: string;
  vm_status: string;
}
