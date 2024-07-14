import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

interface DieProps {
  position: [number, number, number];
  result: number;
  rolling: boolean;
}

const Die: React.FC<DieProps> = ({ position, result, rolling }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [rotation, setRotation] = useState<THREE.Euler>(new THREE.Euler(0, 0, 0));

  useFrame(() => {
    if (rolling && meshRef.current) {
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.05;
      meshRef.current.rotation.z += 0.05;
    }
  });

  useEffect(() => {
    if (!rolling) {
      // Define rotations for each face
      const faceRotations = [
        new THREE.Euler(0, 0, 0),              // 1
        new THREE.Euler(0, 0, Math.PI / 2),    // 2
        new THREE.Euler(-Math.PI / 2, 0, 0),   // 3
        new THREE.Euler(Math.PI / 2, 0, 0),    // 4
        new THREE.Euler(0, Math.PI / 2, 0),    // 5
        new THREE.Euler(0, -Math.PI / 2, 0),   // 6
      ];
      setRotation(faceRotations[result - 1]);
    }
  }, [rolling, result]);

  return (
    <motion.group
      position={new THREE.Vector3(...position)}
      animate={rolling ? { rotateX: 360, rotateY: 360, rotateZ: 360 } : { 
        rotateX: rotation.x * (180 / Math.PI),
        rotateY: rotation.y * (180 / Math.PI),
        rotateZ: rotation.z * (180 / Math.PI)
      }}
      transition={{ duration: rolling ? 2 : 0.5, ease: "easeInOut" }}
    >
      <Box args={[1, 1, 1]} ref={meshRef}>
        <meshStandardMaterial color="white" />
        {[...Array(6)].map((_, index) => (
          <Text
            key={index}
            position={[
              index === 0 || index === 1 ? (index === 0 ? 0.51 : -0.51) : 0,
              index === 2 || index === 3 ? (index === 2 ? 0.51 : -0.51) : 0,
              index === 4 || index === 5 ? (index === 4 ? 0.51 : -0.51) : 0,
            ]}
            rotation={[0, index === 0 || index === 1 ? Math.PI / 2 : 0, index === 2 || index === 3 ? Math.PI / 2 : 0]}
            fontSize={0.5}
            color="black"
          >
            {(index + 1).toString()}
          </Text>
        ))}
      </Box>
    </motion.group>
  );
};

interface DiceRollProps {
  onRollComplete: (results: [number, number]) => void;
}

const DiceRoll: React.FC<DiceRollProps> = ({ onRollComplete }) => {
  const [rolling, setRolling] = useState(false);
  const [results, setResults] = useState<[number, number]>([1, 1]);

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      const newResults: [number, number] = [
        Math.floor(Math.random() * 6) + 1,
        Math.floor(Math.random() * 6) + 1
      ];
      setResults(newResults);
      setRolling(false);
      onRollComplete(newResults);
    }, 2000);
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Die position={[-1.5, 0, 0]} result={results[0]} rolling={rolling} />
        <Die position={[1.5, 0, 0]} result={results[1]} rolling={rolling} />
      </Canvas>
      <button onClick={rollDice} disabled={rolling} style={{ marginTop: '20px' }}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
    </div>
  );
};

export default DiceRoll;