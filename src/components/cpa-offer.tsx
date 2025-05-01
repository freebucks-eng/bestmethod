"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Check, AlertTriangle } from "lucide-react";

interface CPAOfferProps {
  appName: string;
  onComplete: (completed: boolean) => void;
  cpaLink: string;
}

export function CPAOffer({ appName, onComplete, cpaLink }: CPAOfferProps) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState<"verifying" | "human_verification" | "last_step" | "error">("verifying");
  const [timeLeft, setTimeLeft] = useState(5);

  // Auto-open after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Progress bar animation
  useEffect(() => {
    if (!open || step !== "verifying") return;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setStep("human_verification");
          return 100;
        }
        return prevProgress + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [open, step]);

  // Timer for the last step
  useEffect(() => {
    if (step !== "last_step") return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [step]);

  // Reset when dialog is opened
  useEffect(() => {
    if (open) {
      setProgress(0);
      setStep("verifying");
      setTimeLeft(5);
    }
  }, [open]);

  const handleVerify = () => {
    setStep("last_step");
  };

  const handleLastStep = () => {
    // Open the CPA link in a new tab
    window.open(cpaLink, "_blank");

    // Close the dialog and notify parent
    setTimeout(() => {
      setOpen(false);
      onComplete(true);
    }, 500);
  };

  const handleSkip = () => {
    setOpen(false);
    onComplete(false);
  };

  const handleClose = (openState: boolean) => {
    // Don't allow closing unless they've completed the offer
    if (step !== "last_step" || timeLeft > 0) {
      return;
    }
    setOpen(openState);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {step === "verifying" && "Verifying Resources..."}
            {step === "human_verification" && "Human Verification Required"}
            {step === "last_step" && "Almost Done!"}
            {step === "error" && "Server Error"}
          </DialogTitle>

          <DialogDescription className="text-center pt-2">
            {step === "verifying" && `Please wait while we verify your ${appName} resources.`}
            {step === "human_verification" && "To prevent abuse, please verify you are human."}
            {step === "last_step" && `Your resources are being prepared. Please complete this final step in ${timeLeft}s.`}
            {step === "error" && "We've encountered an issue. Please try again."}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === "verifying" && (
            <div className="space-y-4">
              <Progress value={progress} className="h-2" />

              <div className="flex justify-between text-sm text-gray-500">
                <div>Checking server...</div>
                <div>{progress}%</div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>Connected to server</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span>User authenticated</span>
              </div>

              <div className="flex items-center gap-2 text-sm animate-pulse">
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white text-xs">...</span>
                </div>
                <span>Finalizing verification</span>
              </div>
            </div>
          )}

          {step === "human_verification" && (
            <div className="space-y-4">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-md p-4 flex items-start gap-3">
                <AlertTriangle className="text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-500">Verification Required</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Our system detected unusual activity. To ensure you're not a bot, please
                    complete a quick verification.
                  </p>
                </div>
              </div>

              <Button onClick={handleVerify} className="w-full bg-green-600 hover:bg-green-700">
                Verify Now
              </Button>

              <p className="text-xs text-center text-gray-500">
                This helps us prevent abuse and ensures resources are delivered to real users.
              </p>
            </div>
          )}

          {step === "last_step" && (
            <div className="space-y-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-md p-4">
                <h3 className="font-semibold text-green-500">Verification Successful!</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Your identity has been verified. Complete one final step to receive your resources.
                </p>
              </div>

              <Button
                onClick={handleLastStep}
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={timeLeft > 0}
              >
                {timeLeft > 0 ? `Complete Final Step (${timeLeft}s)` : "Complete Final Step"}
              </Button>

              <p className="text-xs text-center text-gray-500">
                This final verification helps us maintain our free service for everyone.
              </p>
            </div>
          )}

          {step === "error" && (
            <div className="space-y-4">
              <div className="bg-red-500/10 border border-red-500/30 rounded-md p-4">
                <h3 className="font-semibold text-red-500">Unable to Process Request</h3>
                <p className="text-sm text-gray-400 mt-1">
                  We encountered an error while processing your request. Please try again later.
                </p>
              </div>

              <Button onClick={handleSkip} className="w-full">
                Close
              </Button>
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-center">
          {step !== "error" && (
            <Button variant="ghost" onClick={handleSkip} className="text-sm">
              Skip Verification (Not Recommended)
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
