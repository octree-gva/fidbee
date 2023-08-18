import { create } from "zustand";

interface FormState {
  comment: string;
  email: string;
  screenCapture: string;
  allowAnonymous: boolean;
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
  allowAnonymous: false,
  errors: [],
};

const useFormStore = create<FormState & FormSetters>()(set => ({
  ...initialState,

  set,
  reset: () => set(initialState),
}));

export default useFormStore;
