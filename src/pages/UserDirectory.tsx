import { useState } from 'react';
import { Search, User } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import Header from '../components/Header';
import UserGrid from '../components/UserGrid';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import UserDetails from '../components/UserDetails';
import type { Person } from '../types/Person';

const TOTAL_USERS = 45;

const fetchUsers = async ({ page, limit }: { page: number; limit: number }) => {
  const res = await fetch(
    `https://randomuser.me/api/?results=${limit}&page=${page}`
  );
  if (!res.ok) throw new Error('Failed to fetch users');
  const data = await res.json();
  return data.results;
};

const UserDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<Person | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(9);

  const start = (currentPage - 1) * usersPerPage + 1;
  const end = Math.min(currentPage * usersPerPage, TOTAL_USERS);
  const totalPages = Math.ceil(TOTAL_USERS / usersPerPage);

  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Person[]>({
    queryKey: ['users', currentPage, usersPerPage],
    queryFn: () => fetchUsers({ page: currentPage, limit: usersPerPage }),
  });

  const filteredUsers: Person[] = (users as Person[]).filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  const openModal = (user: Person) => setSelectedUser(user);
  const closeModal = () => setSelectedUser(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <ErrorView
        message={error?.message || 'Something went wrong'}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="min-h-screen bg-secondary">
      <Header viewMode={viewMode} setViewMode={setViewMode} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex md:flex-row flex-col-reverse gap-4 justify-between mb-5 items-center">
          <p className="text-gray-600">
            {filteredUsers.length === 0
              ? 'No users found'
              : `Showing ${start}–${end} of ${TOTAL_USERS} users`}
          </p>

          <div className="flex gap-4 items-center">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
          </div>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No users match your search</p>
          </div>
        ) : viewMode === 'grid' ? (
          <UserGrid filteredUsers={filteredUsers} openModal={openModal} />
        ) : (
          <UserTable users={filteredUsers} onRowClick={openModal} />
        )}

        <Pagination
          usersPerPage={usersPerPage}
          setUsersPerPage={setUsersPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>

      {selectedUser && (
        <Modal
          isOpen={!!selectedUser}
          onClose={closeModal}
          title="User Details"
        >
          <UserDetails selectedUser={selectedUser} />
        </Modal>
      )}
    </div>
  );
};

export default UserDirectory;
