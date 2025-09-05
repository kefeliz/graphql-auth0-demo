import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/80 backdrop-blur-sm",
        "border border-gray-200/60 shadow-lg shadow-gray-900/10",
        "hover:shadow-xl hover:shadow-gray-900/15 hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative h-full">
        {/* Gradiente sutil de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 pointer-events-none" />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative px-6 py-5",
        "border-b border-gradient-to-r border-gray-100/80",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-bold tracking-tight",
        "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent",
        "leading-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mt-2 text-sm font-medium text-gray-600/90 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("px-6 py-5 text-gray-700", "leading-relaxed", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative px-6 py-4",
        "border-t border-gray-100/80",
        "bg-gray-50/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardGlass({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/10 backdrop-blur-lg",
        "border border-white/20 shadow-2xl shadow-black/10",
        "hover:bg-white/15 hover:border-white/30",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardGradient({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100",
        "border border-blue-200/60 shadow-lg shadow-blue-900/10",
        "hover:shadow-xl hover:shadow-blue-900/15 hover:-translate-y-1",
        "transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
