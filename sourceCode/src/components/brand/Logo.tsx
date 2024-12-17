import React from 'react';
import { BearIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <img
          src="src/images/WhiteTransparentLogo.png"
          alt="Bear Icon"
          className="h-10 w-10"
        />
        {/* <div className="absolute -bottom-1 -right-1 w-4 h-4">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-blue-500 w-full h-full rounded-full"></div>
          </div>
        </div> */}
      </div>
      <div className="font-prompt">
        <div className="text-xl font-bold leading-none text-gray-50">
          ดำน้ำกับหมี
        </div>
        <div className="text-sm text-blue-400 font-medium">Dive with Bear</div>
      </div>
    </div>
  );
}
