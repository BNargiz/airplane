import { createSlice, current } from "@reduxjs/toolkit";

const status = ["manual", "autopilot", "controlled-remotely"];

const initialState = {
  engines: {
    left: false,
    left_center: false,
    right_center: false,
    right: false,
  },
  navigation: status[0],
  thrust: 0,
  totalPower: 0,
};

export const plane = createSlice({
  name: "plane",
  initialState,
  reducers: {
    toggleEngine: (state, action) => {
      state.engines[action.payload] = !state.engines[action.payload];
    },
    setNavigation: (state, action) => {
      state.navigation = status[action.payload];
    },
    changeThrust: (state, action) => {
      state.thrust = state.thrust + action.payload;
    },
  },
});

export const { toggleEngine, setNavigation, changeThrust } = plane.actions;

export default plane.reducer;
