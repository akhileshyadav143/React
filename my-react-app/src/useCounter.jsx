import { useState } from 'react';

function useCounter(data = 0) {
  const [count, SetCount] = useState(data);

  const ince = () => SetCount(count + 1);
  const dec = () => SetCount(count - 1);
  const reset = () => SetCount(0);

  return { count, ince, dec, reset };
}

export default useCounter;