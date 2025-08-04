import React from 'react';
import { Mail, MapPin } from 'lucide-react';

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

type Props = {
  filteredUsers: User[];
  openModal: (user: User) => void;
};

const UserGrid: React.FC<Props> = ({ filteredUsers, openModal }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {filteredUsers.map((user, index) => (
        <div
          key={`${user.email}-${index}`}
          onClick={() => openModal(user)}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
        >
          <div className="p-6">
            <div className="flex md:flex-row flex-col md:items-center items-start space-x-4 mb-4">
              <img
                src={user.picture.large}
                alt={user.name.first}
                className="h-16 w-16 rounded-full object-cover border-4 border-indigo-100"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {user.name.first} {user.name.last}
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-1 text-wrap">
                  <Mail className="h-4 w-4 mr-1" />
                  {user.email}
                </div>
              </div>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              {user.location.city}, {user.location.country}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserGrid;
