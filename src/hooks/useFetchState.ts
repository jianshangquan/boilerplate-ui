import { useState, useRef, useEffect } from 'react'

export const FetchState = Object.freeze({
    LOADING: 'loading',
    COMPLETED: 'completed',
    ERROR: 'error',
    NOT_INITIALIZE: 'not-initialized'
})



type FetchStateTypes = typeof FetchState[keyof typeof FetchState];
export interface FetchStateObject<T>{
    status: FetchStateTypes,
    data: T | null | undefined,
    error: any,
    message: string | null,
    progress: number
}

export interface useFetchStateReturnProps<T>{
    status: FetchStateObject<T>
    notInitialize: () => void,
    completed: (prop: { data?: T | null | undefined, message?: string | null, autoSetNotInitializedTimeout?: boolean | null }) => void,
    error: (prop: { error?: any, message?: string | null }) => void,
    pending: (prop: { progress: number, message?: string | null }) => void,
    loading: (progress: number, message: string | null) => void
}

export function useFetchState<T>(initialState: FetchStateObject<T> | null = null) : useFetchStateReturnProps<T>{
    const timer = useRef<any>();
    const [state, setState] = useState<FetchStateObject<T>>(initialState || {
        status: FetchState.NOT_INITIALIZE,
        data: null,
        message: null,
        error: null,
        progress: 0,
    });



    useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        }
    }, [])

    const func :useFetchStateReturnProps<T>  = {
        status: state,
        notInitialize: () => setState({ status: FetchState.NOT_INITIALIZE, data: null, error: null, progress: 0, message: '' }),
        completed: ({data, message = null, autoSetNotInitializedTimeout = null} = {}) => {
            setState({ status: FetchState.COMPLETED, data, error: null, progress: 100, message })
            if(autoSetNotInitializedTimeout != null){
                clearTimeout(timer.current);
                timer.current = setTimeout(() => {
                    func.notInitialize();
                }, Number(autoSetNotInitializedTimeout));
            }
        },
        error: ({error, message} = {}) => setState({ status: FetchState.ERROR, data: null, error, progress: 0, message: message || error.message }),
        pending: ({ progress = 0, message = null }) => func.loading(progress, message),
        loading: (progress = 0, message = null) => setState({ status: FetchState.LOADING, data: null, error: null, progress, message }),
    }
    return func;
}


