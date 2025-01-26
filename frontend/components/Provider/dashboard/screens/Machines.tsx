import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface MachineProps {
    name_: string;
  }

  const Machines = ({ name_ }: MachineProps) => {
    const machines = [
      {
        name: name_ || "shubh naam", // Using the 'name' prop or fallback to default value
        specs: {
          ram: "4GB RAM",
          cores: "2 cores",
          remaining: "12hrs remaining"
        }
      }
    ];

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
          {machines.map((machine, index) => (
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
                <div className="mt-2 flex flex-wrap gap-3">
                  {Object.values(machine.specs).map((spec, i) => (
                    <span
                      key={i}
                      className="text-sm bg-neutral-100 text-neutral-700 px-3 py-1.5 rounded-lg font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Machines;