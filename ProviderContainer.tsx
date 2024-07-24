"use client";
import AntdProvider from './lib/AntdProvider';
import QueryProvider from './lib/ReactQueryProvider';
import ToastifyProvider from './lib/ToastifyProvider';

function ProviderContainer({ children }: { children: React.ReactNode }) {
  return (
      <QueryProvider>
          <AntdProvider>
            <ToastifyProvider>{children}</ToastifyProvider>
          </AntdProvider>
      </QueryProvider>
  );
}

export default ProviderContainer;
