import React from 'react';

type User = {
  name: { title: string; first: string; last: string };
  email: string;
  phone: string;
  picture: { large: string; thumbnail: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
  };
  dob: { age: number };
  login: { uuid: string };
};

type UserTableProps = {
  users: User[];
  onRowClick: (user: User) => void;
};

const UserTable: React.FC<UserTableProps> = ({ users, onRowClick }) => {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden text-sm">
        <thead className=" text-gray-700">
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
              className="border-t hover:bg-indigo-50 cursor-pointer"
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
