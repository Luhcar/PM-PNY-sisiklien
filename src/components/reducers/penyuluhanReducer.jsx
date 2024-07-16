const initialState = {
    data: [
      { id: 1, name: "Penyuluhan Bencana Alam" },
      { id: 2, name: "Penyuluhan Gempa Bumi" },
      { id: 3, name: "Penyuluhan Bencana Tanah Longsor di Wilayah Perbukitan" },
      { id: 4, name: "Penyuluhan Kesiapsiagaan Bencana Angin Topan di Wilayah Pesisir" },
      { id: 5, name: "Penyuluhan Gempa Bumi di Kawasan Pedesaan" },
    ],
    loading: false,
    error: null,
  };
  
  const penyuluhanReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default penyuluhanReducer;