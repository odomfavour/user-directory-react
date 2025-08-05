import type { Person } from '../types/Person';

interface UserTableProps {
  users: Person[];
  onRowClick: (user: Person) => void;
}

const UserTable = ({ users, onRowClick }: UserTableProps) => {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden text-sm">
        <thead className=" text-gray-700 bg-white">
          <tr>
            <th className="text-left p-4">Photo</th>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Location</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={`${user.email}-${index}`}
              onClick={() => onRowClick(user)}
              className="border-t border-[#eaecf0] hover:bg-indigo-50 cursor-pointer"
            >
              <td className="px-4 py-2">
                <img
                  src={user.picture.thumbnail}
                  alt={user.name.first}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-4 py-2">
                {user.name.first} {user.name.last}
              </td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">
                {user.location.city}, {user.location.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
