import { create } from "zustand";
const initialState = {
    comment: "",
    email: "",
    screenCapture: "",
    allowAnonymous: false,
    errors: [],
};
const useFormStore = create()(set => ({
    ...initialState,
    set,
    reset: () => set(initialState),
}));
export default useFormStore;
