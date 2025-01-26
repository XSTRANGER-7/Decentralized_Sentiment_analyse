import { InputTransactionData } from "@aptos-labs/wallet-adapter-react";
// Internal utils
import { MODULE_ADDRESS } from "@/constants/constants";

export type CreateComputeTaskArguments = {
  id: string; // Unique identifier for the compute task
  title: string; // Title of the compute task
  cpu: string; // CPU requirements for the task
  ram: number; // RAM requirements for the task (in GB)
  storage: number; // Storage requirements for the task (in GB)
  address: string; // Address of the user creating the task
};

export const createComputeTask = (args: CreateComputeTaskArguments): InputTransactionData => {
  const { id, title, cpu, ram, storage, address } = args;

  return {
    data: {
      function: `${MODULE_ADDRESS}::compute_tasks::create_or_update_task`, // Replace with your module address and function
      typeArguments: [], // Add type arguments if needed
      functionArguments: [
        id, // Unique identifier for the task
        title, // Title of the task
        cpu, // CPU requirements
        ram, // RAM requirements
        storage, // Storage requirements
        address, // Address of the user
      ],
    },
  };
};