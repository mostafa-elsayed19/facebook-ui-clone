import React, { useState } from 'react';
import Modal from 'react-modal';
import Input from '../components/reusable/Input';
import UnorderedList from '../components/reusable/UnorderedList'; 


const SignUp = ({ isOpen, onRequestClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // معالجة منطق التسجيل
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Birth Date:', `${birthDay}/${birthMonth}/${birthYear}`);
    console.log('Gender:', gender);
  };

  const modalStyles = {
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%',
      padding: '20px',
      overflow: 'auto',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Sign Up Modal"
      style={modalStyles}
    >
      <div className="p-4">
        <h2 className="text-4xl font-medium mb-1">Sign Up</h2>
        <p className="text-xl ">It's quick and easy.</p>
        <UnorderedList border/>
          
        <form onSubmit={handleSignUp}>
          <div className="flex mb-4">
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              setValue={setFirstName}
              className="mr-2 w-full"
            />
            <Input
              type="text"
              placeholder="Surname"
              value={lastName}
              setValue={setLastName}
              className="ml-2 w-full"
            />
          </div>
          <Input
            type="email"
            placeholder="Mobile number or email address"
            value={email}
            setValue={setEmail}
            className="mb-4 w-full"
          />
          <Input
            type="password"
            placeholder="New Password"
            value={password}
            setValue={setPassword}
            className="mb-4 w-full"
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
            <div className="flex">
              <select
                className="mr-2 w-full border border-gray-400 rounded py-2 px-3"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
              >
                <option value="" disabled>Day</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select
                className="mr-2 w-full border border-gray-400 rounded py-2 px-3"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
              >
                <option value="" disabled>Month</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1}>{month}</option>
                ))}
              </select>
              <select
                className="w-full border border-gray-400 rounded py-2 px-3"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              >
                <option value="" disabled>Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
            <div className="flex">
              <label className="mr-4 flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                  checked={gender === 'female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label className="mr-4 flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                  checked={gender === 'male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="custom"
                  className="mr-2"
                  checked={gender === 'custom'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Custom
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ml-32 w-40 py-3 mt-4 px-4 bg-[#36a420] text-white rounded-md hover:bg-[#27a10e] focus:outline-none focus:bg-[#27a10e]">
              <p className='text-xl font-medium'>Sign Up </p>
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
