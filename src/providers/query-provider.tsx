"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryProvider({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
    </QueryClientProvider>
  );
}
