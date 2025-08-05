import { LayoutGrid, List } from 'lucide-react';

interface DirectoryHeaderProps {
  viewMode: 'grid' | 'table';
  setViewMode: (mode: 'grid' | 'table') => void;
}

const Header: React.FC<DirectoryHeaderProps> = ({ viewMode, setViewMode }) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Directory</h1>
            <p className="text-gray-600 mt-1">
              Discover and connect with people
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-md p-1 bg-white">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1 px-3 py-1.5 cursor-pointer rounded-md text-sm font-medium transition ${
                viewMode === 'grid'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
              Grid
            </button>

            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-1 px-3 py-1.5 cursor-pointer rounded-md text-sm font-medium transition ${
                viewMode === 'table'
                  ? 'bg-gray-100 text-black'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List className="h-4 w-4" />
              Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
