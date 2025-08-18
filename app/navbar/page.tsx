import Link from 'next/link';
import React from 'react';

function NavBarPage() {
  return (
    <nav className=' border-b border-gray-200 px-6 py-4 flex justify-between items-center bg-gradient-to-br from-gray-900 to-slate-800'>
      <div>
        <Link href='/' className='text-xl font-bold text-white'>
          SupportBee
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          href={'/tasks/new'}
          className='hover:underline text-gray-100 transition'
        >
          New Task
        </Link>

        <Link href={'/view'}>
          <h1 className='hover:underline text-white transition'>My Tasks</h1>
        </Link>
        <Link href={'/view'}>
          <h1 className='hover:underline text-white transition'>Login</h1>
        </Link>
        <Link href={'/register'}>
          <h1 className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
            Register
          </h1>
        </Link>
        <form>
          <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'>
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBarPage;
