import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [penyuluhanData, setPenyuluhanData] = useState([
    { id: 1, name: "Penyuluhan Bencana Alam" },
    { id: 2, name: "Penyuluhan Gempa Bumi" },
    { id: 3, name: "Penyuluhan Mitigasi Bencana di Sekolah" },
    { id: 4, name: "Penyuluhan di Komunitas Terdampak Banjir" },
    { id: 5, name: "Penyuluhan Kebakaran Hutan di Daerah Pedesaan" }
  ]);

  const [pemantauanData, setPemantauanData] = useState([
    { id: 1, name: "Pemantauan Gunung Merapi" },
    { id: 2, name: "Pemantauan Banjir Jakarta" },
    { id: 3, name: "Pemantauan Gempa Bumi Jakarta" },
    { id: 4, name: "Pemantauan Gempa Bumi Semarang" },
    { id: 5, name: "Pemantauan Cuaca dan Iklim" }
  ]);

  return (
    <DataContext.Provider value={{ penyuluhanData, pemantauanData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };