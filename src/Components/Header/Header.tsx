import { useState, useEffect } from 'react'
import Button from '../Button/Button';

const Header = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    }

    useEffect(() => {
        const smoothScroll = () => {
            const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
            links.forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href')!.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        };

        smoothScroll();

        return () => {
            const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
            links.forEach(anchor => {
                anchor.removeEventListener('click', function () { });
            });
        };
    }, []);

    return (
        <header className='bg-c5'>
            <nav className='max-w-tela-desk flex justify-between items-center h-100 mx-auto'>
                <a href="/" className='text-c0 text-22 font-titulo'><span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e1'>&lt;/</span>Thiago<span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2'>&gt;</span></a>
                <button className="hamburger" onClick={handleHamburgerClick}></button>
                <ul className='flex gap-16 items-center text-lg'>
                    <li><a className='text-c0 text-18 font-titulo' href="#inicio">Inicio</a></li>
                    <li><a className='text-c0 text-18 font-titulo' href="#skills">Skills</a></li>
                    <li><a className='text-c0 text-18 font-titulo' href="#projetos">Projetos</a></li>
                    <Button />
                </ul>
            </nav>
        </header>
    )
}

export default Header