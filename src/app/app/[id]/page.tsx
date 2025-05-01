"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { apps } from "@/data/apps";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DeviceDetection } from "@/components/device-detection";
import { HumanVerification } from "@/components/human-verification";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CPAOffer } from "@/components/cpa-offer";

// The CPA link - You can replace this with your actual CPA offer link
const CPA_LINK = "https://locked2.com/cl/i/42lp91";

export default function AppPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const app = apps.find((app) => app.id === id);

  const [step, setStep] = useState(1);
  const [substep, setSubstep] = useState<"deviceCheck" | "humanVerify" | "input" | null>(null);
  const [userId, setUserId] = useState("");
  const [deviceInfo, setDeviceInfo] = useState<{ device: string; os: string; browser: string } | null>(null);
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [error, setError] = useState("");
  const [showCPAOffer, setShowCPAOffer] = useState(false);
  const [resourcesAdded, setResourcesAdded] = useState(false);

  const today = new Date();
  const formattedDate = `${today.toLocaleString('default', { month: 'short' })} ${today.getDate()} ${today.getFullYear()}`;

  // Random online users between 100-200
  const onlineUsers = Math.floor(Math.random() * 100) + 100;

  // Initialize the first substep when component mounts
  useEffect(() => {
    if (step === 1 && !substep) {
      setSubstep("deviceCheck");
    }
  }, [step, substep]);

  // Show CPA offer in step 3
  useEffect(() => {
    if (step === 3 && !showCPAOffer && !resourcesAdded) {
      // Wait a bit before showing the CPA offer
      const timer = setTimeout(() => {
        setShowCPAOffer(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [step, showCPAOffer, resourcesAdded]);

  // Handle when app is not found (404)
  if (!app) {
    return (
      <div className="flex min-h-screen flex-col items-center">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">App not found</h2>
            <p className="text-gray-400 mb-4">
              The requested app could not be found. The ID may be invalid or the app may have been removed.
            </p>
            <Link href="/" className="text-blue-500 hover:underline">
              Return to home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Handle CPA offer completion
  const handleCPAOfferComplete = (completed: boolean) => {
    setShowCPAOffer(false);
    setResourcesAdded(true);

    // After the CPA offer is completed or skipped, show that resources were added
    // You can customize this behavior based on whether they completed the offer or skipped
  };

  // Handle device detection completion
  const handleDeviceDetectionComplete = (detected: boolean, info?: { device: string; os: string; browser: string }) => {
    if (detected && info) {
      setDeviceInfo(info);
      setSubstep("humanVerify");
    } else {
      setError("Device detection failed. Please try again on a different device or browser.");
    }
  };

  // Handle human verification completion
  const handleHumanVerificationComplete = (success: boolean) => {
    if (success) {
      setVerificationComplete(true);
      setSubstep("input");
    } else {
      setError("Verification failed. Please try again.");
    }
  };

  // Handle continue button click
  const handleContinue = () => {
    if (step === 1) {
      if (!verificationComplete) {
        setError("Please complete the verification process.");
        return;
      }

      if (userId.trim() === "") {
        setError("Please enter a valid User ID");
        return;
      }

      setError("");
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />

      {/* CPA Offer Component - will show automatically at the right time */}
      {showCPAOffer && (
        <CPAOffer
          appName={app.name}
          onComplete={handleCPAOfferComplete}
          cpaLink={CPA_LINK}
        />
      )}

      <div className="flex-1 w-full flex flex-col items-center py-8 px-4 relative overflow-hidden">
        {/* Green gradient background effect */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#215b0c]/40 to-transparent -z-10" />

        <div className="relative w-28 h-28 mb-4 rounded-lg overflow-hidden">
          <Image
            src={app.imageUrl}
            alt={`${app.name} Logo`}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">{app.name}</h1>

        <p className="text-center text-white/80 mb-8 max-w-xl">
          Latest updated online tool for {app.name} Free Coins & Diamonds,
          tested and working on 30 April, 2025.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-[#282d32] rounded px-6 py-3 text-center">
            <div className="uppercase text-sm font-semibold mb-1 text-gray-400">STATUS:</div>
            <div className="text-[#44b893] font-bold">ONLINE</div>
          </div>

          <div className="bg-[#282d32] rounded px-6 py-3 text-center">
            <div className="uppercase text-sm font-semibold mb-1 text-gray-400">LAST UPDATE:</div>
            <div className="text-white font-bold">APR 30 2025</div>
          </div>

          <div className="bg-[#282d32] rounded px-6 py-3 text-center">
            <div className="uppercase text-sm font-semibold mb-1 text-gray-400">ONLINE USERS:</div>
            <div className="text-white font-bold">{onlineUsers}</div>
          </div>

          {deviceInfo && (
            <div className="bg-[#282d32] rounded px-6 py-3 text-center">
              <div className="uppercase text-sm font-semibold mb-1 text-gray-400">DEVICE:</div>
              <div className="text-white font-bold">{deviceInfo.device}</div>
            </div>
          )}
        </div>

        <div className="bg-[#282d32] rounded-lg p-6 w-full max-w-xl">
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl font-bold">
              {step}
            </div>
          </div>

          {step === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6">
                Enter {app.name} User ID
              </h2>

              {error && (
                <Alert variant="destructive" className="mb-4 bg-red-900/20 border-red-800">
                  <AlertDescription className="text-red-400">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {substep === "deviceCheck" && (
                <DeviceDetection onComplete={handleDeviceDetectionComplete} />
              )}

              {substep === "humanVerify" && (
                <HumanVerification onComplete={handleHumanVerificationComplete} />
              )}

              {substep === "input" && (
                <>
                  <Alert className="mb-4 bg-[#1e2227] border-[#2c3138]">
                    <AlertTitle>Verification Complete</AlertTitle>
                    <AlertDescription className="text-gray-400">
                      Your device has been verified. You can now enter your User ID.
                    </AlertDescription>
                  </Alert>

                  <div className="flex justify-center mb-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="link"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          How to find it?
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>How to find {app.name} User ID?</DialogTitle>
                          <DialogDescription className="pt-4">
                            <p className="mb-2"><b>First step:</b> From your {app.name} home screen, click on Settings, on left top corner.</p>
                            <p className="mb-2"><b>Second step:</b> On right down corner, click on "Advanced" button.</p>
                            <p className="mb-2"><b>Third step:</b> Click on "System Info" icon.</p>
                            <p className="mb-2"><b>Fourth step:</b> Copy your {app.name} Info and enter in tool, it will detect your User ID.</p>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="mb-6">
                    <Input
                      type="text"
                      placeholder="Enter/paste your User ID"
                      className="bg-[#1e2227] border-gray-700 text-white h-12 rounded-full pl-12"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                </>
              )}

              <Button
                className={`w-full ${substep === "input" ? "bg-[#2d3943] hover:bg-[#3d4a57]" : "bg-gray-700 cursor-not-allowed"} text-white py-6 rounded-md flex justify-center items-center transition-all duration-200`}
                onClick={handleContinue}
                disabled={substep !== "input"}
              >
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-4">
                Select Amount
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#1e2227] p-4 rounded-lg text-center cursor-pointer hover:bg-[#252b31] transition">
                  <div className="text-2xl font-bold mb-1">1,000</div>
                  <div className="text-sm text-gray-400">Coins</div>
                </div>

                <div className="bg-[#1e2227] p-4 rounded-lg text-center cursor-pointer hover:bg-[#252b31] transition">
                  <div className="text-2xl font-bold mb-1">2,500</div>
                  <div className="text-sm text-gray-400">Coins</div>
                </div>

                <div className="bg-[#1e2227] p-4 rounded-lg text-center cursor-pointer hover:bg-[#252b31] transition">
                  <div className="text-2xl font-bold mb-1">5,000</div>
                  <div className="text-sm text-gray-400">Coins</div>
                </div>

                <div className="bg-[#1e2227] p-4 rounded-lg text-center cursor-pointer hover:bg-[#252b31] transition">
                  <div className="text-2xl font-bold mb-1">10,000</div>
                  <div className="text-sm text-gray-400">Coins</div>
                </div>
              </div>

              {deviceInfo && (
                <Alert className="mb-4 bg-[#1e2227] border-[#2c3138]">
                  <AlertDescription className="text-gray-400">
                    Generating resources for <b>{deviceInfo.os}</b> on <b>{deviceInfo.browser}</b>.
                    Please do not switch devices during this process.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                className="w-full bg-[#2d3943] hover:bg-[#3d4a57] text-white py-6 rounded-md flex justify-center items-center"
                onClick={handleContinue}
              >
                Generate Resources
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold text-center mb-6">
                Generating Resources...
              </h2>

              <div className="space-y-6 mb-6">
                <div className="bg-[#1e2227] p-3 rounded-lg flex items-center">
                  <div className="w-6 h-6 bg-[#44b893] rounded-full flex items-center justify-center mr-3">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Step 1</div>
                    <div className="font-medium">Connecting to server</div>
                  </div>
                </div>

                <div className="bg-[#1e2227] p-3 rounded-lg flex items-center">
                  <div className="w-6 h-6 bg-[#44b893] rounded-full flex items-center justify-center mr-3">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Step 2</div>
                    <div className="font-medium">Preparing resources</div>
                  </div>
                </div>

                <div className="bg-[#1e2227] p-3 rounded-lg flex items-center">
                  <div className={`w-6 h-6 ${resourcesAdded ? 'bg-[#44b893]' : 'border-2 border-gray-500'} rounded-full flex items-center justify-center mr-3`}>
                    {resourcesAdded ? '✓' : '...'}
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Step 3</div>
                    <div className="font-medium">{resourcesAdded ? 'Resources added successfully' : 'Finalizing (This may take a minute)'}</div>
                  </div>
                </div>
              </div>

              {deviceInfo && (
                <Alert className="mb-4 bg-[#1e2227] border-[#2c3138]">
                  <AlertDescription className="text-gray-400">
                    {resourcesAdded ? (
                      <>
                        <span className="text-green-500 font-semibold">Success!</span> Resources have been added to your account.
                        You can now open {app.name} to see your new resources.
                      </>
                    ) : (
                      <>
                        Connected to {app.name} servers.
                        Account <span className="text-white font-semibold">{userId}</span> has been identified.
                        Resources will be added to your account shortly.
                      </>
                    )}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                className={`w-full ${resourcesAdded ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-500 opacity-50 cursor-not-allowed'} text-white py-6 rounded-md flex justify-center items-center`}
                disabled={!resourcesAdded}
                onClick={() => router.push('/')}
              >
                {resourcesAdded ? 'Return to Home' : 'Processing...'}
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
