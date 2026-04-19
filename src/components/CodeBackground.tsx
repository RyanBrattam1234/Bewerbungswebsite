import { motion } from "motion/react";
import { useEffect, useState } from "react";

const SNIPPETS = [
  "Citizen.CreateThread(function()",
  "TriggerServerEvent('ryan:updateData')",
  "ESX.GetPlayerData()",
  "RegisterNetEvent('fivem:client')",
  "local xPlayer = ESX.GetPlayerFromId(source)",
  "exports['my_script']:doAction()",
  "if IsControlJustPressed(0, 38) then",
  "Config.DrawDistance = 10.0",
  "SetEntityCoords(PlayerPedId(), x, y, z)",
  "ExecuteCommand('ensure ryan_system')",
];

export const CodeBackground = () => {
  const [elements, setElements] = useState<{ id: number; text: string; top: number; left: number; duration: number }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)],
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 10 + Math.random() * 20,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: "110%", x: el.left + "%" }}
          animate={{ y: "-10%" }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.id * -2,
          }}
          className="absolute font-mono text-xs text-cyan-400/40 whitespace-nowrap"
          style={{ left: `${el.left}%` }}
        >
          {el.text}
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />
    </div>
  );
};
