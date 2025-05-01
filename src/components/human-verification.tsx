"use client";

import { useState } from "react";

interface HumanVerificationProps {
  onComplete: (success: boolean) => void;
}

export function HumanVerification({ onComplete }: HumanVerificationProps) {
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  // Generate a 3x3 grid of items to select
  const items = [
    { id: 1, type: "car", isTarget: true },
    { id: 2, type: "building", isTarget: false },
    { id: 3, type: "car", isTarget: true },
    { id: 4, type: "tree", isTarget: false },
    { id: 5, type: "car", isTarget: true },
    { id: 6, type: "sign", isTarget: false },
    { id: 7, type: "bicycle", isTarget: false },
    { id: 8, type: "car", isTarget: true },
    { id: 9, type: "traffic light", isTarget: false },
  ];

  const handleBoxClick = (id: number, isTarget: boolean) => {
    // Toggle selection
    if (selectedBoxes.includes(id)) {
      setSelectedBoxes(selectedBoxes.filter(boxId => boxId !== id));
    } else {
      setSelectedBoxes([...selectedBoxes, id]);
    }

    setErrorMessage("");
  };

  const handleVerify = () => {
    const targetIds = items.filter(item => item.isTarget).map(item => item.id);
    const correctSelections = selectedBoxes.every(id => targetIds.includes(id)) &&
                             selectedBoxes.length === targetIds.length;

    if (correctSelections) {
      onComplete(true);
    } else {
      setErrorMessage("Verification failed. Please try again.");
      setSelectedBoxes([]);
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-3">Human Verification</h3>
      <p className="text-gray-400 mb-4">Please select all images containing a <span className="text-white font-semibold">car</span>.</p>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`aspect-square bg-[#1e2227] rounded-md cursor-pointer overflow-hidden relative ${
              selectedBoxes.includes(item.id) ? "ring-2 ring-[#44b893]" : ""
            }`}
            onClick={() => handleBoxClick(item.id, item.isTarget)}
          >
            <div className="flex items-center justify-center h-full text-4xl">
              {item.type === "car" && "🚗"}
              {item.type === "building" && "🏢"}
              {item.type === "tree" && "🌳"}
              {item.type === "sign" && "🚧"}
              {item.type === "bicycle" && "🚲"}
              {item.type === "traffic light" && "🚦"}
            </div>

            {selectedBoxes.includes(item.id) && (
              <div className="absolute inset-0 bg-[#44b893]/20" />
            )}
          </div>
        ))}
      </div>

      {errorMessage && (
        <div className="text-red-500 mb-4 text-sm">{errorMessage}</div>
      )}

      <button
        className="w-full bg-[#2d3943] hover:bg-[#3d4a57] text-white py-3 rounded-md transition-colors"
        onClick={handleVerify}
      >
        Verify
      </button>
    </div>
  );
}
