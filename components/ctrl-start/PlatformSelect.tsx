"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import { fetchData } from "@/lib/rawg";
import { useEffect, useState } from "react";
import { Platform } from "@/types/rawg-types";

const PlatformSelect = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);

  const { selectedPlatform, setSelectedPlatform } = useGlobalContext();

  // console.log(selectedPlatform, typeof selectedPlatform);

  useEffect(() => {
    const getPlatforms = async () => {
      try {
        const parentPlatforms = await fetchData<Platform>(
          "platforms/lists/parents"
        );
        setPlatforms(parentPlatforms);
      } catch (error) {
        console.error("Failed to fetch platforms:", error);
      }
    };

    getPlatforms();
  }, []);

  return (
    <select
      className="bg-ctrl-start-green-950 text-ctrl-start-green-50 text-xl p-2 rounded-lg text-left"
      onChange={(e) => setSelectedPlatform(Number(e.target.value))}
      value={selectedPlatform || ""}
    >
      <option value="">Platforms</option>
      {platforms.length > 0 ? (
        platforms.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))
      ) : (
        <option value="">No platforms available</option>
      )}
    </select>
  );
};

export default PlatformSelect;
