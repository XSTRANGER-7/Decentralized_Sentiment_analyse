import { Button } from "@/components/ui/button";
import axios from "axios";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

type Machine = {
  name: string;
  // Add other properties here, e.g.:
  cpu :string ;
  

  ram: string;
  size: string;
  time: string;
};




export default function Machines() {
  const [machines, setMachines] = useState<Machine[]>([]);

  useEffect(() => {
      const fetchMachines = async () => {
          try {
              // Get email from localStorage
              const email = localStorage.getItem('user');
              if (email) {
                  const response = await axios.get(`http://localhost:4000/machines/${email}`);
                  setMachines(response.data);
              }
              console.log('Machines:');
          } catch (error) {
              console.error('Error fetching machines:', error);
          }
      }

      fetchMachines();
    }, []);
  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-8 md:px-8 lg:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <span className="text-sm font-medium text-neutral-500 tracking-wide">OVERVIEW</span>
            <h2 className="text-2xl font-semibold mt-1 text-neutral-900">Your Machines</h2>
            <p className="text-neutral-600 mt-1">Manage and monitor your machine resources</p>
          </div>
          
          <Button 
            className="mt-4 md:mt-0 bg-neutral-900 hover:bg-neutral-800 text-white transition-all duration-300 shadow-sm"
            onClick={() => window.location.href = "/provider/add-machine"}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Machine
          </Button>
        </div>

        <div className="grid gap-4">
          {machines?.map((machine, index) => (
            <motion.div
              key={machine.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <h3 className="text-lg font-semibold text-neutral-900">{machine.name}</h3>
                <span className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 md:mt-0">Active</span>
              </div>

              <div className="mt-4">
                <span className="text-xs font-medium text-neutral-500 tracking-wide">SPECIFICATIONS</span>
                <div className="mt-2 flex flex-wrap gap-3 items-center">
                  
                                <span className='text-xs text-gray-500'>SPECS</span>
                                <div className='flex gap-2 flex-wrap font-medium'>

                                    <div>Ram : {machine.ram} GB</div>
                                    <div>Cores :{machine.cpu}</div>
                                    <div>Storage Size :{machine.size} GB</div>
                                    <div>Available Time  :{machine.time} hrs</div>
                                </div>
                            </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

