"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = require("zustand");
const initialState = {
    comment: "",
    email: "",
    screenCapture: "",
    allowAnonymous: false,
    errors: [],
};
const useFormStore = (0, zustand_1.create)()(set => ({
    ...initialState,
    set,
    reset: () => set(initialState),
}));
exports.default = useFormStore;
