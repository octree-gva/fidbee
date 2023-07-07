import { create } from "zustand";

interface FormState {
  comment: string;
  email: string;
  screenCapture: string;
  errors: string[];
}

interface FormSetters {
  set: (state: Partial<FormState>) => void;
  reset: () => void;
}

const initialState: FormState = {
  comment: "",
  email: "",
  screenCapture: "",
  errors: [],
};

const useFormStore = create<FormState & FormSetters>()(set => ({
  ...initialState,

  set,
  reset: () => set(initialState),
}));

export default useFormStore;
