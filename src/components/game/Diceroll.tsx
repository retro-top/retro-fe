import React, { useState } from "react";
import MagneticSlider from "../MagnetSlider";
import Input from "../basic/Input";

interface DicerollProps {
  onChange: (chance: number) => void;
}

const Diceroll: React.FC<DicerollProps> = ({ onChange }) => {
  const [values, setValues] = useState([
    { val: 50.0, label: "Win Change" },
    { val: 50.0, label: "Roll Over" },
    { val: 2.0, label: "Multiplier" },
  ]);

  const handleChange = (index: number, newValue: number) => {
    let updatedValues: [number, number, number];
    switch (index) {
      case 0:
        updatedValues = [
          newValue,
          100 - newValue,
          Math.floor(100 / (100 - newValue)),
        ];
        break;
      case 1:
        updatedValues = [100 - newValue, newValue, 100 / newValue];
        break;
      case 2:
        updatedValues = [100 - 100 / newValue, 100 / newValue, newValue];
        break;
      default:
        return;
    }
    setValues(
      updatedValues.map((v, i) => ({
        val: Number(v.toFixed(2)),
        label: values[i].label,
      }))
    );
    onChange(values[0].val);
  };

  return (
    <div className="flex flex-col gap-8 dice-game">
      <MagneticSlider
        initialValue={50}
        step={1}
        min={0}
        max={100}
        onChange={(val) => handleChange(1, val)}
        value={values[1].val}
      />
      <div className="grid md:grid-cols-3 gap-2">
        {values.map((value, index) => (
          <Input
            type="number"
            label={value.label}
            value={value.val}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(index, Number(e.target.value))
            }
            className="ml-2 p-1 border rounded"
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Diceroll;