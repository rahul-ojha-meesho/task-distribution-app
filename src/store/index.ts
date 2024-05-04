import { create } from "zustand";

const useStore: any = create((set: any) => ({
	flatmates: [],
	tasks: [],
	setFlatmates: (flatmates: any) => set({ flatmates }),
	setTasks: (tasks: any) => set({ tasks }),
}));

export default useStore;
