import { Download } from "lucide-react";
import { useState } from 'react';
import SectionHeader from './SectionHeader';

export default function QRGenerator() {
  const [qrUrl, setQrUrl] = useState('');
  const [qrSize, setQrSize] = useState(200);

  return (
    <div className="max-w-2xl mx-auto">
      <SectionHeader title="QR Code Generator" />
      
      <div className="border border-gray-200 rounded-xl p-8">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter URL to generate QR code
            </label>
            <input
              type="url"
              value={qrUrl}
              onChange={(e) => setQrUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 text-base"
            />
          </div>
          
          {qrUrl && (
            <>
              <div className="flex flex-col items-center gap-6">
                <div className="p-6 border-2 border-gray-200 rounded-xl">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrUrl)}`}
                    alt="QR Code"
                    className="rounded"
                  />
                </div>
                
                <div className="w-full space-y-6">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-3">
                      <span>QR Code Size</span>
                      <span className="text-gray-900">{qrSize}px</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="400"
                      step="50"
                      value={qrSize}
                      onChange={(e) => setQrSize(parseInt(e.target.value))}
                      className="w-full h-1 bg-gray-200 rounded appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-900 [&::-webkit-slider-thumb]:bg-white"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Small</span>
                      <span>Medium</span>
                      <span>Large</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrUrl)}`}
                      download="qrcode.png"
                      className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors"
                    >
                      <Download size={18} />
                      Download PNG
                    </a>
                    <button
                      onClick={() => {
                        setQrUrl('');
                        setQrSize(200);
                      }}
                      className="px-6 py-3 border border-gray-300 text-gray-700 hover:border-gray-400 rounded-xl font-medium transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}