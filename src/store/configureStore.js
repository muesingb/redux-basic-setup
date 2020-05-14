import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers/root";

export const store = configureStore({ reducer: reducer });