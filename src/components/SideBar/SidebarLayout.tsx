import React, { useState } from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { HomeIcon, UserIcon } from '@heroicons/react/24/outline'
interface MenuItems {
  name: string
  route: string
  icons: React.ReactNode
}

const SidebarLayout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems: MenuItems[] = [
    {
      name: 'Home',
      route: '/',
      icons: <HomeIcon className='h-8 w-8 stroke-gray-700 group-hover:stroke-emerald-500' />
    },
    {
      name: 'Profil',
      route: '/profile',
      icons: <UserIcon className='h-8 w-8 stroke-gray-700 group-hover:stroke-emerald-500' />
    }
  ]
  return (
    <div className="flex px-6 py-4 h-screen">
      <div className='bg-white max-w-20 rounded-md w-full flex item-center flex-col'>
        <div className='flex items-center justify-center px-3 py-4 mt-3 mb-4 text-center'>
          <label>
            <FireIcon className='h-12 w-12 fill-emerald-500' />
          </label>
        </div>
        {menuItems.map((data, index) => (
          <div className='group px-3 py-5 cursor-pointer hover:bg-emerald-50' key={`menu-items-${index}`}>
            <div className='flex flex-row items-center justify-center text-center'>
              <div className='cursor-pointer'>
                <label className='group-hover:color-yellow-200 cursor-pointer'>
                  {data.icons}
                </label>
              </div>
              <div className={`${isOpen ? '' : 'hidden'} ml-5`}>
                <label className='cursor-pointer'>
                  {data.name}
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarLayout;
