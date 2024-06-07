import React from 'react'

const Home = () => {
  return (
    <>
        <div className="flex h-screen bg-zinc-100 dark:bg-zinc-900">
          
          <div className="w-16 bg-black flex flex-col items-center py-4 space-y-4">
            <button className="w-10 h-10 bg-zinc-800 rounded-full"></button>
            <button className="w-10 h-10 bg-orange-500 rounded-full"></button>
            <button className="w-10 h-10 bg-zinc-800 rounded-full"></button>
            <button className="w-10 h-10 bg-zinc-800 rounded-full"></button>
          </div>
          
          <div className="flex-1 p-6 space-y-6">
            
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <button className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></button>
                <button className="w-6 h-6 bg-zinc-300 dark:bg-zinc-700 rounded-full"></button>
                <img src="https://placehold.co/32x32" alt="User Avatar" className="w-8 h-8 rounded-full"/>
              </div>
            </div>
        
        <div className="grid grid-cols-4 gap-6">
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">82</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">all open cases</p>
            <p className="text-sm text-red-500">23 overdue</p>
          </div>
        
          
          <div className="col-span-1 bg-black p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-orange-500">10</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">unassigned cases</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">12% of open</p>
          </div>
        
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">27</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Incoming case load</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">90% since last day</p>
          </div>
        
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">38</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Resolved cases by owner</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">10% since last day</p>
          </div>
        
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">65</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Open cases by customer</p>
            <div className="h-20 bg-zinc-300 dark:bg-zinc-700 mt-2"></div>
          </div>
        
          
          <div className="col-span-2 bg-orange-500 p-4 rounded-lg shadow flex items-center justify-center">
            <p className="text-2xl font-bold text-white">It will change the way you manage your business</p>
          </div>
        
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">20</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">The largest part of all cases in Prodsup class</p>
          </div>
        
          
          <div className="col-span-1 bg-white dark:bg-zinc-800 p-4 rounded-lg shadow">
            <p className="text-4xl font-bold text-zinc-900 dark:text-white">16</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">High priority cases</p>
            <div className="h-20 bg-zinc-300 dark:bg-zinc-700 mt-2"></div>
          </div>
        
          
          <div className="col-span-2 bg-black p-4 rounded-lg shadow flex items-center justify-center">
            <p className="text-2xl font-bold text-white">Create your custom dashboard</p>
          </div>
        </div>
          </div>
        </div>
    </>
  )
}

export default Home