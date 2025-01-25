import * as React from "react"
import { LayoutDashboardIcon, Minus, Plus, SquareTerminal } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import Link from "next/link"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Product Management",
      url: "#",
      items: [
        {
          title: "All Products",
          url: "/dashboard/allproduct",
        },
        {
          title: "Add new Product",
          url: "/dashboard/addproduct",
        },
        {
          title: "Update Product data",
          url: "/dashboard/updateproduct",
        },
        {
          title: "Remove Product",
          url: "/dashboard/deleteproduct",
        },
      ],
    },
  ],
}





const data2 = {
  user: {
    name: "UserName",
    email: "user@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Client List",
      url: "/app",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Add new client",
          url: "/app/add",
        },
        {
          title: "Edit Client data",
          url: "/app/edit",
        },
        {
          title: "Export Client Data",
          url: "/app/export",
        },
      ],
    },
  ],
};


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutDashboardIcon/>
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold text-xl">GMS Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item,) => (
              <Collapsible
                key={item.title}
                defaultOpen={false}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                            >
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
      <NavUser user={data2.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
