import Link from 'next/link';
import { FaForumbee } from 'react-icons/fa';

const HomePage = () => {
  return (
    <main className='flex flex-col text-center items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 to-slate-800'>
      <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent uppercase'>
        <FaForumbee className='text-blue-400 size-10 mb-2' />
        Welcome to Bee's Support
      </h1>
      <p className='text-xl text-gray-300 mb-12 max-w-lg'>
        Quick and easy support task management system
      </p>
      <div className='flex flex-col md:flex-row justify-center gap-4 animate-slide opacity-0'>
        <Link
          href='/tasks/new'
          className='bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium capitalize'
        >
          Submit a task
        </Link>
        <Link
          href='/view'
          className='bg-gray-800 text-gray-200 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl border border-gray-700 hover:bg-gray-700 transition-all font-medium capitalize'
        >
          View all tasks
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
