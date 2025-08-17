import Link from 'next/link';
import React from 'react';

function NavBarPage() {
  return (
    <nav className='bg-white border-b border-gray-200 px-6 py-4 flex justify-center items-center'>
      <div>
        <Link href={'/'}>
          <h1 className='text-xl font-bold text-blue-600 mb-8'>Home</h1>
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <Link
          href={'/tasks/new'}
          className='hover:underline text-gray-700 transition'
        >
          New Task
        </Link>
        <Link href={'/tasks'} className=''>
          hi
        </Link>
        <Link href={'/view'}>
          <h1 className='text-3xl font-bold text-blue-600 mb-8 text-center'>
            My Tasks
          </h1>
        </Link>
        <Link href={'/register'}>
          <h1 className='text-3xl font-bold text-blue-600 mb-8 text-center'>
            Register
          </h1>
        </Link>
        <form>
          <button>Logout</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBarPage;
