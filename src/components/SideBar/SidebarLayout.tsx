import React from 'react';
import { FireIcon } from '@heroicons/react/24/solid'
import { HomeIcon } from '@heroicons/react/24/outline'
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { MenuItems } from './types/types';


const SidebarLayout: React.FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const menuItems: MenuItems[] = [
    {
      name: 'Home',
      route: '/',
      icons: <HomeIcon className='h-8 w-8 stroke-gray-700 group-hover:stroke-emerald-500' />
    },
  ]
  return (
    <div className="flex px-6 py-4 h-screen">
      <div className='bg-white max-w-20 rounded-md w-full flex item-center flex-col'>
        <div className='flex items-center justify-center px-3 py-4 mt-3 mb-4 text-center'>
          <label>
            <FireIcon className='h-12 w-12 fill-emerald-500' />
          </label>
        </div>
        {menuItems.map((data: MenuItems, index: number) => (
          <div onClick={() => navigate(data.route)} className='group px-3 py-5 cursor-pointer hover:bg-emerald-50' key={`menu-items-${index}`}>
            <div className='flex flex-row items-center justify-center text-center'>
              <div className='cursor-pointer'>
                <label className='group-hover:color-yellow-200 cursor-pointer'>
                  {data.icons}
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
