type DiceRollType = {
  active: true;
  coin_balance: {
    value: `${number}`;
  };
  counter: `${number}`;
  defy_coins_exchange_rate: `${number}`;
  max_bet_amount: `${number}`;
  min_bet_amount: `${number}`;
};

export type FortuneWheelConfig = {
  active: boolean;
  coin_reward_tiers_amounts: `${number}`[];
  spin_fee: `${number}`;
};
