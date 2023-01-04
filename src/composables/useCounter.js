import { ref } from 'vue';

export const useCounter = (initValue = 1) => {
  const counter = ref(initValue);

  const increase = () => counter.value++;
  const decrease = () => counter.value--;

  return {
    counter,
    increase,
    decrease,
  };
};
