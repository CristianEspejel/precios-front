import React, { useState, useEffect } from 'react';

const TimerView = () => {
  const initialPrice = 2;
  const pricePerHalfHour = 6;
  const pricePerHour = 10;

  const [time1, setTime1] = useState(() => Number(localStorage.getItem('time1')) || 0);
  const [time2, setTime2] = useState(() => Number(localStorage.getItem('time2')) || 0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  const [bnPrice, setBnPrice] = useState(0);
  const [bnQuantity, setBnQuantity] = useState(0);
  const [colorPrice, setColorPrice] = useState(0);
  const [colorQuantity, setColorQuantity] = useState(0);

  const bnDiscounts = [
    { quantity: 10, price: 1.5 },
    { quantity: 50, price: 1.2 },
    { quantity: 100, price: 1.0 },
  ];

  const colorDiscounts = [
    { quantity: 10, price: 2.5 },
    { quantity: 50, price: 2.2 },
    { quantity: 100, price: 2.0 },
  ];

  const calculatePrice = (time) => {
    if (time <= 60) {
      return initialPrice;
    } else if (time <= 30 * 60) {
      return (time / 60) * pricePerHalfHour / 30;
    } else {
      return (time / 60) * pricePerHour / 60;
    }
  };

  useEffect(() => {
    let timer1, timer2;
    if (active1) {
      timer1 = setInterval(() => {
        setTime1(prev => {
          const newTime = prev + 1;
          localStorage.setItem('time1', newTime);
          return newTime;
        });
      }, 1000);
    }
    if (active2) {
      timer2 = setInterval(() => {
        setTime2(prev => {
          const newTime = prev + 1;
          localStorage.setItem('time2', newTime);
          return newTime;
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [active1, active2]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    return `${hours}:${remainingMinutes < 10 ? '0' : ''}${remainingMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const calculateBnTotal = () => bnPrice * bnQuantity;
  const calculateColorTotal = () => colorPrice * colorQuantity;

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 sm:ml-26 mt-12">
      <div className="mx-auto px-4 lg:px-12">
        <h1 className="text-2xl font-bold mb-4">Internet Timer & Printing Calculator</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[time1, time2].map((time, index) => (
            <div key={index} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">Cronómetro {index + 1}</h2>
              <div className="my-4 text-3xl">{formatTime(time)}</div>
              <div className="mb-4">Costo: ${calculatePrice(time).toFixed(2)}</div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                onClick={() => index === 0 ? setActive1(!active1) : setActive2(!active2)}
              >
                {index === 0 ? (active1 ? 'Pausar' : 'Iniciar') : (active2 ? 'Pausar' : 'Iniciar')}
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={() => {
                  if (index === 0) {
                    setTime1(0);
                    localStorage.setItem('time1', 0);
                    setActive1(false);
                  } else {
                    setTime2(0);
                    localStorage.setItem('time2', 0);
                    setActive2(false);
                  }
                }}
              >
                Reiniciar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Calculadora de Impresiones</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="border rounded p-4 shadow">
              <h3 className="text-lg font-semibold">Impresiones B/N</h3>
              <div className="mb-4">
                <label className="block mb-2">Costo por impresión:</label>
                <input
                  type="number"
                  value={bnPrice}
                  onChange={(e) => setBnPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Cantidad:</label>
                <input
                  type="number"
                  value={bnQuantity}
                  onChange={(e) => setBnQuantity(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="text-lg font-semibold">Total: ${calculateBnTotal().toFixed(2)}</div>
              <div className="mt-4">
                <h4 className="text-md font-semibold">Descuentos por cantidad:</h4>
                <ul className="list-disc pl-5">
                  {bnDiscounts.map((discount, index) => (
                    <li key={index}>
                      A partir de {discount.quantity} impresiones: ${discount.price.toFixed(2)} c/u
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border rounded p-4 shadow">
              <h3 className="text-lg font-semibold">Impresiones Color</h3>
              <div className="mb-4">
                <label className="block mb-2">Costo por impresión:</label>
                <input
                  type="number"
                  value={colorPrice}
                  onChange={(e) => setColorPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Cantidad:</label>
                <input
                  type="number"
                  value={colorQuantity}
                  onChange={(e) => setColorQuantity(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                />
              </div>
              <div className="text-lg font-semibold">Total: ${calculateColorTotal().toFixed(2)}</div>
              <div className="mt-4">
                <h4 className="text-md font-semibold">Descuentos por cantidad:</h4>
                <ul className="list-disc pl-5">
                  {colorDiscounts.map((discount, index) => (
                    <li key={index}>
                      A partir de {discount.quantity} impresiones: ${discount.price.toFixed(2)} c/u
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimerView;
