import { Fragment, useState } from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";

import { FaBars, FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { navigation, userNavigation } from "./SidebarItem";
import { cn } from "@/lib/utils";
import { Link, useLocation, useParams } from "react-router-dom";

import Icono from '../../assets/icono emprende.png'
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


export const Navbar = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation()

  return (
    <div>
      <Transition as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 md:hidden bg-transparent"
          onClose={setSidebarOpen}
        >
          <TransitionChild
            enter="transition-opacity ease-linear duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-nav-950  opacity-40" />
          </TransitionChild>
          <TransitionChild
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-150 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full  pb-4 bg-nav-900">

                <div className="absolute top-0 right-0 -mr-14 pt-2">
                  <button
                    type="button"
                    className="ml-2 flex items-center justify-center h-10 w-10 rounded-md bg-btn-400 hover:bg-btn-600 transition-colors duration-150"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FaTimes
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

              <div className="flex-shrink-0 flex items-center gap-2 p-5 bg-nav-800">
                <img
                  className="h-10 w-auto"
                  src={Icono}

                  alt="Workflow"
                />
                <div className="  gap-2">
                <h2>Nombre </h2>
                <h2>Rol </h2>

                </div>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        item.href == location.pathname 
                          ? "bg-nav-700"
                          : "hover:bg-nav-700 ",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={cn(
                          item.href == location.pathname

                            ? "text-link-100"
                            : "text-link-500 ",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </TransitionChild>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
           </div> 
        </Dialog>
       </Transition> 

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow pt-5 bg-nav-900 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src={Icono}
              alt="Workflow"
            />
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    item.href == location.pathname

                      ? "bg-nav-700 "
                      : " hover:bg-nav-700",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <item.icon
                    className={cn(
                      item.href == location.pathname

                        ? "text-link-100"
                        : "text-link-500",
                      "mr-3 flex-shrink-0 h-6 w-6"
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="md:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex-shrink-0 p-3 flex h-18 bg-nav-900">
          <button
            type="button"
            className=" p-3 bg-btn-400 rounded-md md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FaBars className="" aria-hidden="true" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <FaSearch className=" ml-2" aria-hidden="true" />
                  </div>
                  <input
                    id="search-field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-2 rounded-md border-link-100 bg-transparent sm:text-sm outline-none"
                    placeholder="Search"
                    type="search"
                    name="search"
                  />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6 gap-3">
              <button type="button" className="bg-btn-200 p-1 rounded-full">
                <span className="sr-only">View notifications</span>
                <FaBell className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel> 
                    Mi perfil - Admin 
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator/>
                  {userNavigation.map((item) => (
                      <DropdownMenuItem key={item.name}>
                          <Link
                            to={item.href}
                            className=
                              "block px-4 py-2 text-sm "
                            
                          >
                            {item.name}
                          </Link>
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <main className="flex-1">
          <div className="py-6">
            <div className=" mx-auto px-4 sm:px-6 md:px-3">
            </div>
            <div className=" mx-auto px-4 sm:px-6 md:px-3">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
