import NextLink from "next/link";
import { Link } from "react-scroll";
import { type NavbarPropList } from "~/types";

export const Navbar = ({ navbarItems }: NavbarPropList) => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto p-4" id="navbar-default">
        <ul className="mt-4 flex w-full flex-col justify-center gap-10 rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
          <li>
            <NextLink
              href="#homeSection"
              passHref
              className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
              aria-current="page"
            >
              <Link
                    to={"homeSection"}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    Home
                  </Link>
            </NextLink>
          </li>
          {Array.isArray(navbarItems) &&
            navbarItems.map((prop) => (
              <li key={prop.id}>
                <NextLink
                  href={`#${prop.id}`}
                  passHref
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  <Link
                    to={prop.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                  >
                    {prop.name}
                  </Link>
                </NextLink>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};
