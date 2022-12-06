import React, { useEffect, useState } from 'react';

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
];

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): ReturnType<T> {
  const [state, setState] = useState<T | undefined>(() => {
    if (!initialValue) return;

    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      return err;
    }
  }, [state, key]);

  return [state, setState];
}

// export function useLocalStorage(key: string, initialValue: string) {
//   const [storageValue, setStorageValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   const setValue = (value: string) => {
//     try {
//       setStorageValue(value);
//       window.localStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.log('error', error);
//     }
//   };
//   return [storageValue, setValue];
// }
