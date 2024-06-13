import { StateCreator } from "zustand";

export type UserState = {
    username: string,
    fullname: string,
    age: number,
    address: string,
}

type UserActions = {
    setAddress: (address: string) => void;
};

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (set) => ({
    address: '',
    age: 0,
    fullname: '',
    username: '',
    setAddress: (address) => set((state) => ({address})),
})