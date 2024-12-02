import { useState } from "react";
import { images } from "../constants/images";
import PropTypes from "prop-types";
import { IoChevronDown, IoChevronUp, IoClose, IoMenu } from "react-icons/io5";

const menuItems = [
  { label: "Home", type: "link", path: "#" },
  { label: "Articles", type: "link", path: "#" },
  {
    label: "Pages",
    type: "dropdown",
    items: [
      {
        label: "About us",
        href: "#",
      },
      {
        label: "Contact us",
        href: "#",
      },
    ],
  },
  { label: "Pricing", type: "link", path: "#" },
  { label: "Faq", type: "link", path: "#" },
];

/* Componente para un item de lista */
export const ListItem = ({ label }) => {
  return (
    <>
      <li className="relative group">
        <a href="/" className="px-4 py-2">
          {label}
        </a>
        <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 md:py-4">
          /
        </span>
      </li>
    </>
  );
};
// Proptype name
ListItem.propTypes = {
  label: PropTypes.string.isRequired,
};

/* Componente para items de menú desplegable */

export const DropdownItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="block lg:relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="px-4 py-2 w-full text-left lg:w-auto flex items-center justify-center lg:justify-start"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
        <span className="ml-2 transition-transform duration-500">
          {isOpen ? <IoChevronUp /> : <IoChevronDown />}
        </span>
      </button>
      <ul
        className={`overflow-hidden transition-max-height duration-500 ease-in-out lg:absolute lg:left-0 lg:top-full lg:w-32 bg-transparent lg:bg-white lg:shadow-lg ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ transition: "max-height 0.3s ease-in-out" }}
      >
        {items.map((subItem) => (
          <li key={subItem.label}>
            <a
              href={subItem.href}
              className="block px-4 py-2 hover:bg-dark-hard hover:text-white w-full lg:w-auto"
            >
              {subItem.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

/* Componente reutilizable para el menú */
export const MenuItem = ({ items, className }) => {
  return (
    <ul className={`flex font-semibold space-x-2  ${className}`}>
      {items.map((item) =>
        item.type === "link" ? (
          <ListItem
            key={item.label}
            label={item.label}
            href={item.href || "#"}
          />
        ) : (
          <DropdownItem
            key={item.label}
            label={item.label}
            items={item.items}
          />
        )
      )}
    </ul>
  );
};

MenuItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["link", "dropdown"]).isRequired,
      href: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
  className: PropTypes.string,
};

export const Header = () => {
  const { Logo } = images;
  const [navIsVisible, setNavIsVisible] = useState(false);

  const handleToggleNav = () => setNavIsVisible((prevState) => !prevState);

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between h-16 items-center sticky top-0">
        <div>
          <img className="w-16 lg:w-20" src={Logo} alt="logo" />
        </div>

        {/* Menú para pantallas grandes */}
        <nav className="hidden lg:flex lg:gap-x-9 lg:items-center">
          <MenuItem items={menuItems} className={"items-center"} />
          <button className="border-2 border-blue-500 text-blue-500 rounded-full h-10 w-24 hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </nav>

        {/* Menú hamburguesa para pantallas móviles */}

        <div className="lg:hidden">
          <button
            onClick={handleToggleNav}
            aria-label="Toggle navigation"
            className="text-3xl"
          >
            {navIsVisible ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </header>

      {/* Menú desplegable en dispositivos móviles */}
      <nav
        className={`lg:hidden z-20 bg-dark-hard text-white  shadow-md fixed left-0 bottom-0 right-0 top-[64px] transition-transform duration-500 ease-in-out flex flex-col justify-center items-center space-y-6 ${
          navIsVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MenuItem
          items={menuItems}
          className={"flex-col space-y-6 items-center"}
        />
        <button className="border-2 border-blue-500 text-blue-500 rounded-full h-10 w-24 hover:bg-blue-500 hover:text-white transition-all duration-300">
          Sign in
        </button>
      </nav>
    </section>
  );
};
