export const dice_roll_values = {
  BET_TYPE: 0,
  SIDE: true,
  BET_AMOUNT_EVEN_ODD: 10000000,
  ARR: [
    "0", // bet for sum 2
    "0", // bet for sum 3
    "0", // bet for sum 4
    "0", // bet for sum 5
    "", // bet for sum 6
    "0", // bet for sum 7
    "0", // bet for sum 8
    "0", // bet for sum 9
    "0", // bet for sum 10
    "0", // bet for sum 11
    "10000000", // bet for sum 12
  ],

  NUMBER_OF_TIME_USER_WANT_TO_PLAY: 1,
};

export const dice_roll_arguments = [
  dice_roll_values.BET_TYPE,
  dice_roll_values.ARR,
  dice_roll_values.SIDE,
  dice_roll_values.BET_AMOUNT_EVEN_ODD,
  dice_roll_values.NUMBER_OF_TIME_USER_WANT_TO_PLAY,
];
