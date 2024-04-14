import { XCircle } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="relative col-span-full h-80 bg-gray-50 p-12 flex flex-col items-center justify-centerc">
      <XCircle className="h-8 w-8 text-red-800" />
      <h3 className="font-semibold text-xl ">no products find</h3>
      <p className="text-zinc-500 text-sm">no search result were found</p>
    </div>
  );
};

export default EmptyState;
