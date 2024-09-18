import React from 'react'
import { Link } from 'react-router-dom'

const LinkFooter = () => {
    const footerNavs = [
        {
          label: "Main Menu",
          items: [
            {
              href: "/",
              name: "Home",
            },
            {
              href: "/ProductFilter",
              name: "Product Filter",
            },
            {
              href: "/contact",
              name: "Contact",
            },
          ],
        },
        {
          label: "Categories",
          items: [
            {
              href: "/Technology",
              name: "Technology",
            },
            {
              href: "/Fashion",
              name: "Fashion",
            },
            {
              href: "/Grocery",
              name: "Grocery",
            },
          ],
        },
        {
          label: "Useful Links",
          items: [
            {
              href: "/Cart",
              name: "Shopping Cart",
            },
            {
              href: "/login",
              name: "Login",
            },
            {
              href: "/RegAccount",
              name: "Signup",
            },
          ],
        },
      ];

    return (
        <div className="flex-1 mt-10 space-y-2 items-center text-center md:text-left justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
                <ul className="space-y-3" key={idx}>
                    <h4 className="text-white text-xl font-medium hover:scale-105 duration-300">{item.label}</h4>
                    {item.items.map((el, idx) => (
                        <li key={idx} className='hover:scale-105 duration-300'>
                            <Link
                                to={el.href}
                                className="text-gray-400 text-base hover:text-white "
                            >
                                {el.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    )
}

export default LinkFooter