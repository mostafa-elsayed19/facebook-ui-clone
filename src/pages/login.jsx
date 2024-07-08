import React, { useState } from 'react';
import Input from '../components/reusable/Input'; 
import UnorderedList from '../components/reusable/UnorderedList'; 
import ListItem from '../components/reusable/ListItem';
import SignUp from './signUp';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col mt-20 ml-48'>
          <h2 className='text-blue-600 font-bold text-6xl'>facebook</h2>
          <p className='text-3xl  mt-5'>Facebook helps you connect and share with the people in your life.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md ml-20">
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email address or Phone number"
              value={email}
              setValue={setEmail}
              className="mb-4 h-[60px]"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              setValue={setPassword}
              className="mb-4 h-[60px]"
            />
            <button
              type="submit"
              className="w-full rounded-lg py-3 px-4 bg-blue-700 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              <p className='text-2xl font-medium'>Log In</p>
            </button>
          </form>
          <UnorderedList border>
            <ListItem item="Forgotten Password?" />
          </UnorderedList>
          <button
            type="button"
            onClick={openModal}
            className="ml-20 py-3 mt-4 px-4 bg-[#36a420] text-white rounded-md hover:bg-[#27a10e] focus:outline-none focus:bg-[#27a10e]"
          >
            <p className='text-2xl font-medium'>Create New Account</p> 
          </button>
        </div>
      </div>
      <SignUp isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default Login;
