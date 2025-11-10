import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ScanBarcode, Camera, AlertCircle, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import type { Product } from '../App';

interface BarcodeScannerProps {
  onScanComplete: (barcode: string) => void;
  products: Product[];
}

export function BarcodeScanner({ onScanComplete, products }: BarcodeScannerProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanAnimation, setScanAnimation] = useState(false);
  const [scannedProduct, setScannedProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isScanning) {
      // Simulate scanning animation
      const interval = setInterval(() => {
        setScanAnimation(prev => !prev);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const handleStartScan = () => {
    setIsScanning(true);
    setScannedProduct(null);
    setError(false);
  };

  const handleSimulateScan = (product: Product) => {
    setIsScanning(false);
    setScannedProduct(product);
    setError(false);
    
    // Trigger the scan complete callback after a brief delay
    setTimeout(() => {
      onScanComplete(product.barcode);
    }, 1500);
  };

  const handleSimulateError = () => {
    setIsScanning(false);
    setError(true);
    setScannedProduct(null);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Scanner View */}
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden aspect-[3/4]">
        {!isScanning && !scannedProduct && !error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <Camera className="w-20 h-20 mb-4 text-gray-400" />
            <p className="text-center text-gray-300">
              Position barcode within the frame
            </p>
          </div>
        )}

        {isScanning && (
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
            
            {/* Scanning frame */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="relative w-full aspect-[4/3] border-2 border-green-400 rounded-xl">
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-green-400" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-green-400" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-green-400" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-green-400" />
                
                {/* Scanning line */}
                <div
                  className="absolute left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)] transition-all duration-1000"
                  style={{
                    top: scanAnimation ? '90%' : '10%',
                  }}
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white">Scanning for barcode...</p>
            </div>
          </div>
        )}

        {scannedProduct && (
          <div className="absolute inset-0 bg-green-600 flex flex-col items-center justify-center text-white p-6">
            <CheckCircle className="w-20 h-20 mb-4" />
            <p className="text-center">Barcode Detected!</p>
            <p className="text-green-100 mt-2">{scannedProduct.name}</p>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 bg-red-600 flex flex-col items-center justify-center text-white p-6">
            <AlertCircle className="w-20 h-20 mb-4" />
            <p className="text-center">Product not found</p>
            <p className="text-red-100 mt-2 text-sm">Try another barcode</p>
          </div>
        )}
      </div>

      {/* Scan Button */}
      {!isScanning && !scannedProduct && !error && (
        <Button
          onClick={handleStartScan}
          className="w-full bg-green-600 hover:bg-green-700 py-6"
        >
          <ScanBarcode className="w-5 h-5 mr-2" />
          Start Scanning
        </Button>
      )}

      {isScanning && (
        <Button
          onClick={() => setIsScanning(false)}
          variant="outline"
          className="w-full py-6"
        >
          Cancel
        </Button>
      )}

      {(scannedProduct || error) && (
        <Button
          onClick={handleStartScan}
          className="w-full bg-green-600 hover:bg-green-700 py-6"
        >
          <ScanBarcode className="w-5 h-5 mr-2" />
          Scan Again
        </Button>
      )}

      {/* Demo Section */}
      <div className="border-t pt-6">
        <p className="text-gray-600 mb-4 text-sm">Demo: Try scanning these products</p>
        <div className="grid grid-cols-2 gap-3">
          {products.slice(0, 4).map((product) => (
            <Card
              key={product.id}
              className="p-3 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => isScanning ? handleSimulateScan(product) : null}
            >
              <div className="aspect-square bg-gray-100 rounded-lg mb-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs truncate">{product.name}</p>
              <p className="text-xs text-gray-500">{product.barcode}</p>
            </Card>
          ))}
        </div>
        
        {isScanning && (
          <Button
            onClick={handleSimulateError}
            variant="outline"
            className="w-full mt-3"
            size="sm"
          >
            Simulate "Not Found"
          </Button>
        )}
      </div>
    </div>
  );
}
