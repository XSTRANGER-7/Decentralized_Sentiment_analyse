"use client";
import { AptosClient, Types } from "aptos";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CREATOR_ADDRESS } from "@/constants/constants";
import { createComputeTask } from "@/utils/createRequest";
import { RocketIcon, UploadCloudIcon } from "lucide-react";

const NODE_URL = "https://fullnode.testnet.aptoslabs.com";
const client = new AptosClient(NODE_URL);

interface Task {
    id: string;
    title: string;
    cpu: string;
    ram: number;
    storage: number;
    address: string;
}

const ComputeCard = ({ id, title, cpu, ram, storage, address }: Task) => {
    const { account, signAndSubmitTransaction } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newCpu, setNewCpu] = useState(cpu);
    const [newRam, setNewRam] = useState(ram);
    const [newStorage, setNewStorage] = useState(storage);
    const [modelFile, setModelFile] = useState<File | null>(null);
    const [datasetFile, setDatasetFile] = useState<File | null>(null);
    const [requirementsFile, setRequirementsFile] = useState<File | null>(null);

    // Function to create or update a task on the blockchain
    async function createOrUpdateTask() {
        if (!account) {
            console.error("Wallet not connected");
            return;
        }

        setIsLoading(true);
        try {
            // Upload files to the backend
            const formData = new FormData();
            if (modelFile) formData.append("model", modelFile);
            if (datasetFile) formData.append("dataset", datasetFile);
            if (requirementsFile) formData.append("requirements", requirementsFile);

            // const uploadResponse = await fetch("https://tappin-api.onrender.com/upload", {
            //     method: "POST",
            //     body: formData,
            // });

            // if (!uploadResponse.ok) {
            //     throw new Error("Failed to upload files");
            // }

            // const uploadData = await uploadResponse.json();
            // console.log("Files uploaded successfully: ", uploadData);

            // Create or update the task on the blockchain
            // const address = account.address;
            // const title = newTitle;
            // const cpu = newCpu;
            // const ram = newRam;
            // const storage = newStorage;
            // const txnHash = await signAndSubmitTransaction(
            //     createComputeTask({ id, title, cpu, ram, storage, address })
            // );
            // console.log("Transaction successful: ", txnHash);
        } catch (err) {
            console.error("Transaction failed: ", err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="offsetstyle p-4 border gap-2 border-black rounded-md bg-orange-400">
            <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col ">
                    <span className="text-xs text-gray-600">Device name</span>
                    <h1 className="text-xl font-medium">{title}</h1>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Available CPU</span>
                    <h1 className="text-xl font-medium">{cpu}</h1>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Available RAM</span>
                    <h1 className="text-xl font-medium">{ram}GB</h1>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-gray-600">Available space</span>
                    <h1 className="text-xl font-medium">{storage}GB</h1>
                </div>
            </div>
            <div className="pt-2">
                <Dialog>
                    <DialogTrigger
                        className="generalBorder flex items-center gap-2 w-full offsetstyle bg-white justify-center"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? "Processing..." : <span asChild className="flex gap-2 ">Launch <RocketIcon /></span>}

                    </DialogTrigger>
                    <DialogContent className="bg-white offsetEffect generalBorder">
                        <DialogHeader>
                            <DialogTitle>Upload </DialogTitle>
                            <DialogDescription>
                                Update the details of this compute task.
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col ">
                                    <span className="text-xs text-gray-600">Device name</span>
                                    <Input
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-600">Available CPU</span>
                                    <Input
                                        value={newCpu}
                                        onChange={(e) => setNewCpu(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-600">Available RAM</span>
                                    <Input
                                        type="number"
                                        value={newRam}
                                        onChange={(e) => setNewRam(Number(e.target.value))}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-600">Available space</span>
                                    <Input
                                        type="number"
                                        value={newStorage}
                                        onChange={(e) => setNewStorage(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 py-4 text-sm">
                                <span>Upload the following files to get started</span>
                                <div>
                                    <span>Model file (model.py)</span>
                                    <Input
                                        type="file"
                                        onChange={(e) => setModelFile(e.target.files ? e.target.files[0] : null)}
                                    />
                                </div>
                                <div>
                                    <span>Dataset (dataset.csv)</span>
                                    <Input
                                        type="file"
                                        onChange={(e) => setDatasetFile(e.target.files ? e.target.files[0] : null)}
                                    />
                                </div>
                                <div>
                                    <span>Requirements (requirements.txt)</span>
                                    <Input
                                        type="file"
                                        onChange={(e) => setRequirementsFile(e.target.files ? e.target.files[0] : null)}
                                    />
                                </div>
                                <Button onClick={createOrUpdateTask} disabled={isLoading}>
                                    {isLoading ? "Updating..." : "Update Task"}
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
};

export default ComputeCard;