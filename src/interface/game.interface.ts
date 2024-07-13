type NumberString = `${number}`;
interface GameConfig {
  active: boolean;
}

type DiceRollType = {
  active: true;
  coin_balance: {
    value: `${number}`;
  };
  counter: `${number}`;
  defy_coins_exchange_rate: `${number}`;
  max_bet_amount: NumberString;
  min_bet_amount: `${number}`;
};

export interface FortuneWheelConfig extends GameConfig {
  coin_reward_tiers_amounts: NumberString[];
  spin_fee: NumberString;
}
