import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../lib/LanguageContext';

type ProductType = 'immunity' | 'vitamins';

export const EmailSubscription: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductType>('immunity');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ 
          email,
          product_preference: selectedProduct 
        }]);

      if (error) {
        if (error.code === '23505') {
          throw new Error(t('alreadySubscribed'));
        }
        throw error;
      }
      
      setStatus('success');
      setMessage(t('success'));
      setEmail('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : t('error'));
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4 text-center">{t('chooseSample')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedProduct('immunity')}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedProduct === 'immunity'
                ? 'border-white bg-white/10 text-white'
                : 'border-white/30 hover:border-white/50 text-white/70 hover:text-white'
              }`}
            >
              <div className="text-lg font-semibold mb-2">{t('immunitySupport')}</div>
              <div className="text-sm opacity-80">{t('immunityDescription')}</div>
            </button>
            <button
              type="button"
              onClick={() => setSelectedProduct('vitamins')}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedProduct === 'vitamins'
                ? 'border-white bg-white/10 text-white'
                : 'border-white/30 hover:border-white/50 text-white/70 hover:text-white'
              }`}
            >
              <div className="text-lg font-semibold mb-2">{t('essentialVitamins')}</div>
              <div className="text-sm opacity-80">{t('vitaminsDescription')}</div>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            className="w-full px-6 py-3 bg-transparent border border-white/30 rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            required
            autoComplete="email"
          />
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-black transition-colors
              ${status === 'loading' 
                ? 'bg-white/70 cursor-not-allowed' 
                : 'bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/50'
              }`}
          >
            {status === 'loading' ? t('processing') : t('getSample')}
          </button>
        </div>
      </form>

      {status !== 'idle' && (
        <div 
          className={`mt-4 text-sm p-3 rounded-full text-center ${
            status === 'success' 
              ? 'text-green-400' 
              : 'text-red-400'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}