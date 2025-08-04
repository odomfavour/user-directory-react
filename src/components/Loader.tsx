import { Loader2 } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-indigo-600" />
    </div>
  );
};

export default Loader;
