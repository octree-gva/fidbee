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
declare const useFormStore: import("zustand").UseBoundStore<import("zustand").StoreApi<FormState & FormSetters>>;
export default useFormStore;
