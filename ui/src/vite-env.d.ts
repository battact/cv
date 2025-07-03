/// <reference types="vite/client" />

declare module '*.svg' {
  const content: string;
  export default content;
}

// Basic Service Worker types for PWA functionality
declare global {
  interface Window {
    __WB_MANIFEST: string[];
  }
}

// Extend Navigator for Service Worker support
interface Navigator {
  serviceWorker?: ServiceWorkerContainer;
}

interface ServiceWorkerContainer {
  register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>;
  ready: Promise<ServiceWorkerRegistration>;
  controller: ServiceWorker | null;
}

interface ServiceWorkerRegistration {
  scope: string;
  update(): Promise<void>;
  unregister(): Promise<boolean>;
}

interface ServiceWorker {
  scriptURL: string;
  state: 'installing' | 'installed' | 'activating' | 'activated' | 'redundant';
}

interface RegistrationOptions {
  scope?: string;
} 
