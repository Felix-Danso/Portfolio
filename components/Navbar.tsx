import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavItemProps {
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
}

const NavItem: React.FC<NavItemProps> = ({
                                             activeItem,
                                             name,
                                             route,
                                             setActiveItem,
                                         }) => {
    return activeItem !== name ? (
        <Link href={route}>
      <span
          onClick={() => setActiveItem(name)}
          className="cursor-pointer hover:text-green"
      >
        {name}
      </span>
        </Link>
    ) : null;
};

const Navbar: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const { pathname } = useRouter();

    useEffect(() => {
        if (pathname === '/') setActiveItem('About');
        if (pathname === '/projects') setActiveItem('Projects');
        if (pathname === '/resume') setActiveItem('Resume');
    }, [pathname]);

    return (
        <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold border-b-4 border-green text-green md:text-2xl">
        {activeItem}
      </span>
            <div className="flex space-x-5 text-lg">
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="About"
                    route="/"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Projects"
                    route="/projects"
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name="Resume"
                    route="/resume"
                />
            </div>
        </div>
    );
};

export default Navbar;
