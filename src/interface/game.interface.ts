type NumberString = `${number}`;
interface GameConfig {
  active: boolean;
}

export interface CoinFlipConfig {
  defy_coins_exchange_rate_heads: string;
  defy_coins_exchange_rate_tails: string;
  max_bet_amount_heads: string;
  max_bet_amount_tails: string;
  min_bet_amount_heads: string;
  min_bet_amount_tails: string;
  win_multiplier_denominator: string;
  win_multiplier_numerator: string;
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
