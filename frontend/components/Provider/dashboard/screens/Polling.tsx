// pages/index.js
import { useState, useEffect } from 'react';
import {  Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'; // Import the spinner from Lucide
import axios from 'axios';

export default function Poller() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPolling, setIsPolling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  // Function to hit the API every 10 seconds
  const hitApi = async () => {
    setIsLoading(true); // Show the spinner while loading
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
      console.log('Data received:', response.data);
      setData(response.data);
    //   makeTransaction(response.data);
    } catch (error) {
      console.error('API error:', error);
    } finally {
      setIsLoading(false); // Hide the spinner after the API call
    }
  };

  // Function to simulate a transaction
  const makeTransaction = (data) => {
    console.log('Transaction made with data:', data);
    // Here, you can call another API or perform your transaction logic
  };

  // Start polling the API every 10 seconds
  const startPolling = () => {
    setIsPolling(true);
    hitApi(); // Call the API immediately when the polling starts
    const id = setInterval(() => {
      hitApi();
    }, 10000); // Poll every 10 seconds
    setIntervalId(id);
  };

  // Stop polling and close the dialog
  const stopPolling = () => {
    if (intervalId) {
      clearInterval(intervalId); // Clear the interval
      setIntervalId(null);
    }
    setIsPolling(false);
    setIsDialogOpen(false);
  };

  // Effect to start polling when dialog is opened
  useEffect(() => {
    if (isDialogOpen) {
      startPolling();
    } else {
      stopPolling();
    }

    // Clean up on component unmount
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isDialogOpen]);

  return (
    <div className="container mx-auto p-6">
      {/* Start Polling button */}
      <button onClick={() => setIsDialogOpen(true)}>Start API Polling</button>

      {/* Dialog for displaying the loading state */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg mx-auto">
          <h2 className="text-lg font-semibold mb-2">Fetching Data...</h2>
          <p className="text-gray-600 mb-4">
            {isPolling ? 'Polling API every 10 seconds.' : 'API polling stopped.'}
          </p>

          {/* Spinner for loading */}
          {isLoading && (
            <div className="flex items-center justify-center mb-4">
              <Loader2 className="animate-spin h-6 w-6 text-blue-500" />
            </div>
          )}

          {/* Display data if available */}
          {data && (
            <div className="p-4 bg-gray-100 rounded-lg mb-4">
              <h3 className="text-md font-medium mb-2">Data Received:</h3>
              <pre className="text-sm text-gray-800 bg-gray-200 p-2 rounded">{JSON.stringify(data, null, 2)}</pre>
            </div>
          )}

          <Button variant="destructive" onClick={stopPolling}>
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
