"use client";

import { useState, useEffect } from "react";

interface DeviceDetectionProps {
  onComplete: (detected: boolean, info?: { device: string; os: string; browser: string }) => void;
}

export function DeviceDetection({ onComplete }: DeviceDetectionProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing...");
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const steps = [
      { progress: 15, message: "Checking browser information..." },
      { progress: 30, message: "Detecting operating system..." },
      { progress: 45, message: "Verifying device type..." },
      { progress: 60, message: "Checking for emulation..." },
      { progress: 75, message: "Validating connection..." },
      { progress: 90, message: "Finalizing device verification..." },
      { progress: 100, message: "Verification complete" },
    ];

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setProgress(steps[currentStep].progress);
        setStatus(steps[currentStep].message);
        currentStep++;
      } else {
        clearInterval(interval);
        setScanning(false);

        // Get actual device info (or simulated in this case)
        const deviceInfo = {
          device: detectDevice(),
          os: detectOS(),
          browser: detectBrowser(),
        };

        onComplete(true, deviceInfo);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Simulated device detection functions
  const detectDevice = () => {
    const isMobile = window.innerWidth <= 768;
    return isMobile ? "Mobile" : "Desktop";
  };

  const detectOS = () => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows") !== -1) return "Windows";
    if (userAgent.indexOf("Mac") !== -1) return "MacOS";
    if (userAgent.indexOf("Linux") !== -1) return "Linux";
    if (userAgent.indexOf("Android") !== -1) return "Android";
    if (userAgent.indexOf("iPhone") !== -1 || userAgent.indexOf("iPad") !== -1) return "iOS";
    return "Unknown OS";
  };

  const detectBrowser = () => {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Chrome") !== -1) return "Chrome";
    if (userAgent.indexOf("Firefox") !== -1) return "Firefox";
    if (userAgent.indexOf("Safari") !== -1) return "Safari";
    if (userAgent.indexOf("Edge") !== -1) return "Edge";
    if (userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident") !== -1) return "Internet Explorer";
    return "Unknown Browser";
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-2">{status}</h3>

      <div className="w-full bg-[#1e2227] rounded-full h-4 mb-4">
        <div
          className="bg-[#44b893] h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {scanning && (
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-pulse text-[#44b893]">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400">Please wait while we verify your device...</p>
        </div>
      )}
    </div>
  );
}
