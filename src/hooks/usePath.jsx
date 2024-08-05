import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

function usePath() {
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveMenu('dashboard');
                break;
            case '/analytics':
                setActiveMenu('analytics');
                break;
            case '/page1':
                setActiveMenu('page1');
                break;
            case '/page2':
                setActiveMenu('page2');
                break;
            case '/page3':
                setActiveMenu('page3');
                break;
            default:
                break;
        }
    }, [location.pathname]);

    return [activeMenu];
}

export default usePath;