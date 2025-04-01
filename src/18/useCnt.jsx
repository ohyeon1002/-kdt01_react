import { create } from "zustand";

//Hook을 새로 만들어버리는 라이브러리
export const useCnt = create((set) => ({
    cnt : 0,
    increase : () => set((state) => ({cnt : state.cnt + 1})),
    decrease : () => set((state) => ({cnt : state.cnt - 1})),
    reset : () => set({cnt : 0})
}));