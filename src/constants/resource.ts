import { use } from "react";

type ReturnType = `${string}::${string}::${string}`;

const resource = {
  coin_flip: {
    config: (module_address: string): ReturnType =>
      `${module_address}::coin_flip::GameManager<coinx, coiny>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::dice_roll::play_multiple`,
    user_rewards: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::wheel::UserCoinRewards<${coin_address}>`,
    claim: (module_address: string): ReturnType =>
      `${module_address}::coin_flip::claim`,
  },

  fortune_wheel: {
    config: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::wheel::GameConfig<${coin_address}>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::wheel::play_multiple`,
    user_rewards: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::wheel::UserCoinRewards<${coin_address}>`,
    claim: (module_address: string): ReturnType =>
      `${module_address}::wheel::claim`,
  },

  dice_roll: {
    config: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::dice_roll::GameManager<${coin_address}>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::dice_roll::play_multiple`,
    user_rewards: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::dice_roll::PlayerRewards<${coin_address}>`,
    claim: (module_address: string): ReturnType =>
      `${module_address}::dice_roll::claim`,
  },

  plinko: {
    config: (module_address: string): ReturnType =>
      `${module_address}::plinko::GameConfig`,
    play: (module_address: string): ReturnType =>
      `${module_address}::plinko::play`,
    user_rewards: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::plinko::PlayerRewards<${coin_address}>`,
    claim: (module_address: string): ReturnType =>
      `${module_address}::plinko::claim`,
  },
};

export default resource;
export type ResourceType = keyof typeof resource;
