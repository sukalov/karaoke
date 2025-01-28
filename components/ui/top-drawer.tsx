"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const TopDrawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    direction="top"
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
TopDrawer.displayName = "TopDrawer";

const TopDrawerPortal = DrawerPrimitive.Portal;

const TopDrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
TopDrawerOverlay.displayName = "TopDrawerOverlay";

const TopDrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <TopDrawerPortal>
    <TopDrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-auto flex-col rounded-b-[10px] border bg-background",
        className
      )}
      {...props}
    >
      {children}
      <div className="mx-auto mb-4 mt-2 h-2 w-[100px] rounded-full bg-muted" />
    </DrawerPrimitive.Content>
  </TopDrawerPortal>
));
TopDrawerContent.displayName = "TopDrawerContent";

const TopDrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
TopDrawerHeader.displayName = "TopDrawerHeader";

const TopDrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col gap-2 p-4", className)} {...props} />
);
TopDrawerFooter.displayName = "TopDrawerFooter";

const TopDrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
TopDrawerTitle.displayName = "TopDrawerTitle";

const TopDrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
TopDrawerDescription.displayName = "TopDrawerDescription";

export { TopDrawer, TopDrawerContent };
