import { atom } from "jotai"; //조타이 라이브러리 임포트

export const cntAtom1 = atom(0); //전역변수로 쓸 수 있는 atom 함수
export const cntAtom2 = atom((get) => get(cntAtom1) * 2) //전역변수 2 ; 이 함수로 atom 함수 관리