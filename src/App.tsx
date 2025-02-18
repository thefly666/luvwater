import React from 'react';
import { ProductRotation } from './components/ProductRotation';
import { EmailSubscription } from './components/EmailSubscription';
import { LanguageToggle } from './components/LanguageToggle';
import { useLanguage } from './lib/LanguageContext';

function App() {
  const { t } = useLanguage();
  
  const productImages = [
    'https://pkwitoutwzonmjtidwnb.supabase.co/storage/v1/object/sign/site_images/luvwater-product-1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlX2ltYWdlcy9sdXZ3YXRlci1wcm9kdWN0LTEucG5nIiwiaWF0IjoxNzM5OTExNDEyLCJleHAiOjE3NzE0NDc0MTJ9.621RtFIAqPX4lxmP3zNCoGWmyyY3oE_GGtwOMIX9A5Y',
    'https://pkwitoutwzonmjtidwnb.supabase.co/storage/v1/object/sign/site_images/luvwater-product-2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlX2ltYWdlcy9sdXZ3YXRlci1wcm9kdWN0LTIucG5nIiwiaWF0IjoxNzM5OTExNDUzLCJleHAiOjE3NzE0NDc0NTN9.GGUK2YwxUAJQ7ydjhuA_I-Vs6gwygB4k6i2NmaHHWpc'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 overflow-hidden">
      <LanguageToggle />
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="pt-8 pb-12 text-center">
          {/* Logo */}
          <div className="w-48 sm:w-64 mx-auto mb-12">
            <img 
              src="https://pkwitoutwzonmjtidwnb.supabase.co/storage/v1/object/sign/site_images/LuvWater-Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzaXRlX2ltYWdlcy9MdXZXYXRlci1Mb2dvLnBuZyIsImlhdCI6MTczOTkxMTM2MSwiZXhwIjoxNzcxNDQ3MzYxfQ.chHBiLsdNvzo65UyDwudHV1D29vu3krVFzHTiKnQqO0"
              alt="LuvWater Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-5xl mx-auto px-4">
            {t('title')}
          </h1>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 pb-12">
          {/* Left side - Product Rotation */}
          <div className="w-full lg:w-1/2 max-w-3xl">
            <ProductRotation images={productImages} />
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <div className="text-center lg:text-left px-4 lg:pl-0 lg:pr-8">
              <p className="text-xl text-white/90 leading-relaxed font-light mb-12">
                {t('description')}
              </p>
              <EmailSubscription />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;