import { useState, useRef, useEffect }  from 'react';

export function useExtendedState<T>(initialState: T) {
    const [state, setState] = useState(initialState);
    const ref = useRef(state);

    useEffect(() => {
        ref.current = state;
    }, [state])

    const getLatestState = () => {
        return ref.current;
    };

    return [state, setState, getLatestState];
}