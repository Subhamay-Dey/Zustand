import React from 'react';
import { Button } from './components/ui/button';
import {create} from "zustand"

const useStore = create<{
  count: number;
  inc: () => void;
  dec: () => void;
}>((set) => ({
  count: 0,
  inc: () => set((state) => ({count: state.count + 1})),
  dec: () => set((state) => ({count: state.count - 1})),
}))

function App() {
  const store = useStore();
  return (
  <>
    <Button onClick={store.inc}>Increment</Button>
    <h1>{store.count}</h1>
    <Button onClick={store.dec}>Decrement</Button>
  </>
  )
}

export default App