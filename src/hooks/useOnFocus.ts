import { useEffect } from 'react';

export function useOnFocusWindow(callback: () => void, dependencies : any[] = []){

    const func = {
        attatchEvent: () => window.addEventListener('focus', callback),
        detachEvent: () => window.removeEventListener('focus', callback)
    }

    useEffect(() => {
        func.attatchEvent();
        return () => func.detachEvent();
    }, dependencies)

    return func
}