import { Mail, MapPin, User } from 'lucide-react';
import type { Person } from '../types/Person';

interface UserDetailsCardProps {
  selectedUser: Person;
}

const UserDetails = ({ selectedUser }: UserDetailsCardProps) => {
  return (
    <div>
      <div className="text-center mb-6">
        <img
          src={selectedUser.picture.large}
          className="h-24 w-24 rounded-full mx-auto border-4 border-indigo-100 mb-4"
          alt={`${selectedUser.name.first} ${selectedUser.name.last}`}
        />
        <h3 className="text-xl font-semibold">
          {selectedUser.name.title} {selectedUser.name.first}{' '}
          {selectedUser.name.last}
        </h3>
      </div>

      <div className="space-y-4 text-sm text-gray-600">
        <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
          <Mail className="text-indigo-600" />
          <div>
            <p>Email</p>
            <p className="font-medium">{selectedUser.email}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
          <MapPin className="text-indigo-600" />
          <div>
            <p>Location</p>
            <p className="font-medium">
              {selectedUser.location.street.number}{' '}
              {selectedUser.location.street.name}, {selectedUser.location.city},{' '}
              {selectedUser.location.state}, {selectedUser.location.country},{' '}
              {selectedUser.location.postcode}
            </p>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
          <User className="text-indigo-600" />
          <div>
            <p>Phone</p>
            <p className="font-medium">{selectedUser.phone}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
          <User className="text-indigo-600" />
          <div>
            <p>Age</p>
            <p className="font-medium">{selectedUser.dob.age} years old</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
