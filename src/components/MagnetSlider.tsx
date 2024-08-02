import React, { useState, useEffect, useRef } from "react";
interface MagneticSliderProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  value?: number;
}

const MagneticSlider: React.FC<MagneticSliderProps> = ({
  initialValue = 50,
  step = 5,
  min = 0,
  max = 100,
  onChange,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const updateValue = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = (clientX - rect.left) / rect.width;
      let newValue = Math.round((percentage * (max - min) + min) / step) * step;
      newValue = Math.max(min, Math.min(max, newValue));
      setValue(newValue);
      onChange(newValue)
    }
  };
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateValue(e.clientX);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateValue(e.clientX);
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);
  useEffect(() => {
    if (thumbRef.current && sliderRef.current) {
      const percentage = (value - min) / (max - min);
      const thumbPosition = percentage * sliderRef.current.offsetWidth;
      thumbRef.current.style.left = `${thumbPosition}px`;
    }
  }, [value, min, max]);
  return (
    <div className="w-full max-w-md min-w-[260px] md:min-w-[600px] mx-auto p-4">
      <div
        ref={sliderRef}
        className="relative h-2 bg-green-500 rounded-full cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
        <div
          ref={thumbRef}
          className="absolute top-1/2 -translate-y-1/2 -ml-3 w-6 h-6 bg-white rounded-full shadow-md border-2 border-gray-300"
        />
      </div>
      <div className="mt-6 flex justify-between text-xs text-gray-500">
        {[min, 25, 50, 75, max].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
};
export default MagneticSlider;
