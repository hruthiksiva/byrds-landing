
import assets from '../data/assets.json';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };
    return (
        <>
            <div className="relative gap-2 justify-start">
                <button
                    onClick={handleLogoClick}
                    className="absolute top-[17px] left-[42px] hover:opacity-70 transition-opacity cursor-pointer z-50"
                    type="button"
                >
                    <img
                        src={assets.icons.logo}
                        alt="Logo"
                        className="w-[67px] h-[37px] pointer-events-none"
                    />
                </button>
            </div>
        </>
    );
}