import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";

export default function Deployments() {
  const [epochs, setEpochs] = useState<string | null>(null);
  const [pollingLoading, setPollingLoading] = useState(false);
  const [pollingDialogOpen, setPollingDialogOpen] = useState(false);
  const [pollingError, setPollingError] = useState<string | null>(null);
  const [startPoll, setStartPoll] = useState(false);

  const startPolling = async () => {
    setPollingError(null);
    setPollingLoading(true);
    console.log("Start polling");

    // Store the interval ID to clear later
    const intervalId = setInterval(async () => {
      try {
        console.log("Polling for data...");
        const response = await axios.get("http://127.0.0.1:5000/epochs");
        console.log("Polling Response:", response.data);

        // Assuming success is determined by response.data.success
        if (response.status === 200) {
          setEpochs(response.data.epochs); // Set the epochs data
          setPollingDialogOpen(false); // Close the dialog
          setPollingLoading(false); // Stop the loading state
          clearInterval(intervalId); // Stop the polling
        }
      } catch (err) {
        console.error("Polling error:", err);
        setPollingError("Failed to fetch data during polling.");
      }
    }, 1000); // Set a reasonable interval (e.g., 1000ms or 1 second)

    // Return a cleanup function that can be used when the component unmounts
    return () => clearInterval(intervalId);
  };

  const cancelPolling = () => {
    setPollingDialogOpen(false);
    setPollingLoading(false);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Deployments</h2>

        {pollingLoading ? (
          <div className="flex justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-gray-300" />
          </div>
        ) : (
          <>
            {epochs ? (
              <div className="bg-gray-800 text-white p-4 rounded-md">
                <h3 className="font-semibold text-lg">Epoch Data:</h3>
                <pre className="text-sm whitespace-pre-wrap">{epochs}</pre>
              </div>
            ) : (
              <p className="text-gray-500">No epoch data available.</p>
            )}

            <Button
              onClick={() => {
                setPollingDialogOpen(true);
                startPolling();
              }}
              variant="outline"
            >
              Start Polling
            </Button>
          </>
        )}

        <Dialog open={pollingDialogOpen} onOpenChange={setPollingDialogOpen}>
          <DialogContent className="bg-gray-800 text-white p-6 rounded-lg max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Polling Data</DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                The system is polling for updates every 1 second. You can cancel this at any time.
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4 mt-4">
              {pollingLoading ? (
                <div className="flex justify-center">
                  <Loader2 className="animate-spin h-8 w-8 text-gray-300" />
                </div>
              ) : (
                <p className="text-gray-300">Polling has been stopped.</p>
              )}

              <div className="flex justify-end gap-2">
                <Button onClick={cancelPolling} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
