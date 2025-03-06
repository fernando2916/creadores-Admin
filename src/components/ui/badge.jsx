import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        post:
          "border-transparent bg-purple-700 text-white capitalize",
        product:
          "border-transparent bg-cyan-700 text-white capitalize",
        curso:
          "border-transparent bg-fuchsia-700 text-white capitalize",
        recurso:
          "border-transparent bg-sky-700 text-white capitalize",
        presencial:
          "border-transparent bg-blue-700 text-white capitalize",
        hibrido:
          "border-transparent bg-teal-700 text-white capitalize",
        office:
          "border-transparent bg-green-700 text-white capitalize",
        verificado:
          "border-transparent bg-green-700 text-white capitalize",
        pendiente:
          "border-transparent bg-red-700 text-white capitalize",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  ...props
}) {
  return (<div className={cn(badgeVariants({ variant }), className)} {...props} />);
}

export { Badge, badgeVariants }
