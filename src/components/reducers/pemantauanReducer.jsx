const initialState = {
    data: [
      { id: 1, name: "Pemantauan Gunung Merapi" },
      { id: 2, name: "Pemantauan Banjir Jakarta" },
      { id: 3, name: "Pemantauan Longsor di Daerah Pegunungan" },
      { id: 4, name: "Pemantauan Tsunami" },
      { id: 5, name: "Pemantauan Banjir di Daerah Perkotaan" },
    ],
    loading: false,
    error: null,
  };
  
  const pemantauanReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default pemantauanReducer;