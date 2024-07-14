type NumberString = `${number}`;
interface GameConfig {
  active: boolean;
}

export interface DiceRollConfig {
  active: true;
  coin_balance: {
    value: NumberString;
  };
  counter: NumberString;
  defy_coins_exchange_rate: NumberString;
  max_bet_amount: NumberString;
  min_bet_amount: NumberString;
}

export interface FortuneWheelConfig extends GameConfig {
  coin_reward_tiers_amounts: NumberString[];
  spin_fee: NumberString;
}
