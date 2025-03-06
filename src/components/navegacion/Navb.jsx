import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { SIdebarApp } from "./SIdebarApp";
import { userNavigation } from "./SidebarItem";
import { FaBell, FaSignInAlt } from "react-icons/fa";
import { useUserStore } from "@/hooks/useUserStore";

export const Navb = ({ children }) => {

  const {startLogout} = useUserStore()

  return (
    <SidebarProvider>
      <SIdebarApp />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
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
                      <DropdownMenuItem>
                          <Link
                            to='/mi-perfil'
                            className=
                              "block px-4 py-2 text-sm "
                              >
                            Mi perfil 
                          </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                          <Link
                            to=''
                            className=
                              "block px-4 py-2 text-sm "
                              >
                                <button className="flex items-center gap-2" onClick={startLogout}>
                            <FaSignInAlt/>
                            Salir
                            
                                </button>
                          </Link>
                      </DropdownMenuItem>
  
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
        </header>
        <main className="flex-1">
          <div className="py-6">
            <div className=" mx-auto px-4 sm:px-6 md:px-3"></div>
            <div className=" mx-auto px-4 sm:px-6 md:px-3">{children}</div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};
