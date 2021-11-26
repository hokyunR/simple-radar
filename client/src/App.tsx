import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Radar } from "./Radar";
import { OtherShip } from "./models/otherShip";

export default function App() {
  const [data, setData] = useState<OtherShip[]>([]);

  useEffect(() => {
    const socket = io(`http://localhost:5000/radar`, {
      transports: ["websocket"],
    });

    socket.on("data", (message) => {
      console.log(message);
    });

    return () => {
      socket.off();
      socket.disconnect();
    };
  });

  return (
    <div>
      <Radar />
    </div>
  );
}
