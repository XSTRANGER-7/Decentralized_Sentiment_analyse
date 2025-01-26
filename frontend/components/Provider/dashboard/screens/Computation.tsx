import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Poller from "./Polling";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

enum RequestStatus {
  Pending = "pending",
  Accepted = "accepted",
  Rejected = "rejected",
}

interface Request {
  _id: string;
  senderAddress: string;
  amount: number;
  datasetLink: string;
  modelLink: string;
  requirementsLink: string;
  status: RequestStatus;
  machineId: string;
  createdAt: string;
}

export default function Computation() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [acceptedTasks, setAcceptedTasks] = useState<Request[]>([]);
  const [startpoll, setStartPoll] = useState(false);
  const [pollingDialogOpen, setPollingDialogOpen] = useState(false);
  const [pollingLoading, setPollingLoading] = useState(false);
  const [pollingError, setPollingError] = useState<string | null>(null);
  const email = localStorage.getItem("user");
  const [dockerurl, setDockerUrl] = useState("");

  const API_BASE_URL = `http://localhost:4000/api/request/${email}`;

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setRequests(response.data);
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Failed to fetch requests. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (
    requestId: string,
    action: "accept" | "reject"
  ) => {
    setActionLoading(true);
    try {
      const res = await axios.post(`http://localhost:4000/generatedocker`, {
        requestId,
      });

      console.log(res.data.imageUrl);
      setActionLoading(false);
      setStartPoll(true);
      setDockerUrl(res.data?.imageUrl);
    } catch (err) {
      console.error(`Error ${action}ing request:`, err);
    } finally {
      setActionLoading(false);
    }
  };

  const getStatusClass = (status: RequestStatus) => {
    switch (status) {
      case RequestStatus.Accepted:
        return "bg-green-100 text-green-800";
      case RequestStatus.Rejected:
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-400 text-yellow-800";
    }
  };
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
          console.log("Polling successful, stopping...");
          // Handle successful polling response
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

  // Cancel polling
  const cancelPolling = () => {
    setPollingDialogOpen(false);
    setPollingLoading(false);
  };
  const getStatusClass_ = (status: RequestStatus) => {
    return status === RequestStatus.Accepted ? "bg-lime-300" : "bg-red-300";
  };
  
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Computation Requests</h2>
        {error && <p className="text-red-500">{error}</p>}
        {loading ? (
          <div className="flex justify-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {requests.map((request) => (
              <Card
                key={request._id}
                className={`p-4 ${
                  request.status.toUpperCase() === "COMPLETED" ? "bg-green-300" : "bg-red-300"
                }`}
              >
                {" "}
                <div className="flex flex-col gap-2 justify-center ">
                  <h3
                    className="text-[1 rem] text-wrap
                   flex items-center gap-4 "
                  >
                    Request From:
                    <span className="w-fit overflow-hidden text-ellipsis whitespace-nowrap inline-block max-w-[150px]">
                      {request.senderAddress}
                    </span>
                  </h3>{" "}
                  <p className="text-sm text-gray-500">
                    Amount: {request.amount} APT
                  </p>
                  <p
                    className={`text-sm px-2 py-1 rounded ${getStatusClass(
                      request.status
                    )}`}
                  >
                    {request.status.toUpperCase()}
                  </p>
                  {dockerurl && request.status.toLowerCase() == "completed" && (
                    <p>
                      docker pull hemil36/hemil-docker-image && docker run -p
                      5000:5000 hemil-docker-image
                    </p>
                  )}
                  {dockerurl &&
                    request.status.toLowerCase() == "completed" && (
                      <p>
                        docker pull hemil36/hemil-docker-image && docker run -p
                        5000:5000 hemil-docker-image
                      </p>
                    ) && (
                      <Button
                        onClick={() => {
                          setPollingDialogOpen(true);
                          startPolling();
                        }}
                        variant="outline"
                      >
                        Start Polling
                      </Button>
                    )}
                  <button
                    onClick={() => {
                      setSelectedRequest(request);
                      setIsDialogOpen(true);
                    }}
                    variant="outline"
                  >
                    View Details
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black text-white p-6 rounded-lg max-w-lg mx-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Request Details
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                Review the computation request details
              </DialogDescription>
            </DialogHeader>

            {selectedRequest && (
              <div className="p-4">
                <div className="space-y-6">
                  {/* Sender Address */}
                  <div>
                    <h4 className="font-semibold text-lg ">Sender Address</h4>
                    <div className="w-80 overflow-hidden">
  <p className="text-sm break-words">{selectedRequest.senderAddress}</p>
</div>
          
                  </div>

                  {/* Amount */}
                  <div>
                    <h4 className="font-semibold text-lg">Amount</h4>
                    <p className="text-sm">{selectedRequest.amount} APT</p>
                  </div>

                  {/* Files */}
                  <div>
                    <h4 className="font-semibold text-lg">Files</h4>
                    <div className="space-y-2">
                      <a
                        href={`https://ipfs.io/ipfs/${selectedRequest.requirementsLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 block hover:underline"
                      >
                        View Requirements
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-center">
                    {!actionLoading && (
                      <>
                        <button
                          onClick={() =>
                            handleAction(selectedRequest._id, "reject")
                          }
                          variant="destructive"
                          disabled={actionLoading}
                          className="px-4 py-2 rounded-md bg-red-600 border-2 border-white"
                        >
                          {actionLoading ? "Processing..." : "Reject"}
                        </button>
                        <button
                          onClick={() =>
                            handleAction(selectedRequest._id, "accept")
                          }
                          disabled={actionLoading}
                          className="px-4 py-2 rounded-md bg-green-600 border-2 border-white"
                        >
                          {actionLoading ? "Processing..." : "Accept"}
                        </button>
                      </>
                    )}
                    {actionLoading && (
                      <Loader2 className="animate-spin h-8 w-8 text-gray-300" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <Dialog open={pollingDialogOpen} onOpenChange={setPollingDialogOpen}>
          <DialogContent className="bg-gray-800 text-white p-6 rounded-lg max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Polling Data
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-400">
                The system is polling for updates every 10 seconds. You can
                cancel this at any time.
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
