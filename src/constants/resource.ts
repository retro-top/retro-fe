type ReturnType = `${string}::${string}::${string}`;

const resource = {
  coin_flip: {
    config: (module_address: string): ReturnType =>
      `${module_address}::coin_flip::GameManager<coinx, coiny>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::dice_roll::play_multiple`,
  },

  fortune_wheel: {
    config: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::wheel::GameConfig<${coin_address}>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::wheel::play_multiple`,
  },

  dice_roll: {
    config: (module_address: string, coin_address: string): ReturnType =>
      `${module_address}::dice_roll::GameManager<${coin_address}>`,
    play: (module_address: string): ReturnType =>
      `${module_address}::dice_roll::play_multiple`,
  },

  plinko: {
    config: (module_address: string): ReturnType =>
      `${module_address}::plinko::GameConfig`,
    play: (module_address: string): ReturnType =>
      `${module_address}::plinko::play`,
  },
};

export default resource;
export type ResourceType = keyof typeof resource;