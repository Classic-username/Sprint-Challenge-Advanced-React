import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useBlindMode = () => {
    const [ blindMode, setBlindMode ] = useLocalStorage('blind')

    useEffect(() => {
        if(blindMode === true){
            document.body.classList.add('blind-mode');
        }else{
            document.body.classList.remove('blind-mode')
        }
    }, [blindMode])

    return [blindMode, setBlindMode]
}

export default useBlindMode;