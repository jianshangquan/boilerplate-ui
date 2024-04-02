import { useRef, useEffect } from "react";


export function useComponentDidMount() {
  const ref = useRef<boolean>();
  useEffect(() => {
    ref.current = true;
  }, []);
  return ref.current;
};