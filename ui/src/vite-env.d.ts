/// <reference types="vite/client" />
 
declare module '*.svg' {
  const content: string;
  export default content;
} 

// Service Worker types
declare global {
  interface Window {
    __WB_MANIFEST: string[]
  }
}

// Service Worker registration
interface ServiceWorkerRegistration {
  scope: string
  updateViaCache: 'all' | 'imports' | 'none'
  updateFound: boolean
  installing: ServiceWorker | null
  waiting: ServiceWorker | null
  active: ServiceWorker | null
  navigationPreload: NavigationPreloadManager
  pushManager: PushManager
  sync: SyncManager
  periodicSync: PeriodicSyncManager
  update(): Promise<void>
  unregister(): Promise<boolean>
  showNotification(title: string, options?: NotificationOptions): Promise<void>
  getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>
}

interface ServiceWorker {
  scriptURL: string
  state: 'installing' | 'installed' | 'activating' | 'activated' | 'redundant'
  onstatechange: ((this: ServiceWorker, ev: Event) => void) | null
  onerror: ((this: ServiceWorker, ev: ErrorEvent) => void) | null
  postMessage(message: unknown, transfer?: Transferable[]): void
}

interface NavigationPreloadManager {
  enable(): Promise<void>
  disable(): Promise<void>
  setHeaderValue(value: string): Promise<void>
  getState(): Promise<NavigationPreloadState>
}

interface NavigationPreloadState {
  enabled: boolean
  headerValue: string
}

interface SyncManager {
  register(tag: string): Promise<void>
  getTags(): Promise<string[]>
  unregister(tag: string): Promise<void>
}

interface PeriodicSyncManager {
  register(tag: string, options: PeriodicSyncOptions): Promise<void>
  unregister(tag: string): Promise<void>
  getTags(): Promise<string[]>
}

interface PeriodicSyncOptions {
  minInterval: number
}

interface PushManager {
  subscribe(options?: PushSubscriptionOptions): Promise<PushSubscription>
  getSubscription(): Promise<PushSubscription | null>
  permissionState(options?: PushSubscriptionOptions): Promise<PermissionState>
}

interface PushSubscriptionOptions {
  userVisibleOnly?: boolean
  applicationServerKey?: BufferSource | string
}

interface PushSubscription {
  endpoint: string
  expirationTime: number | null
  options: PushSubscriptionOptions
  getKey(name: PushEncryptionKeyName): ArrayBuffer | null
  toJSON(): PushSubscriptionJSON
  unsubscribe(): Promise<boolean>
}

type PushEncryptionKeyName = 'p256dh' | 'auth'

interface PushSubscriptionJSON {
  endpoint: string
  expirationTime: number | null
  keys: {
    p256dh: string
    auth: string
  }
}

type PermissionState = 'granted' | 'denied' | 'prompt'

interface GetNotificationOptions {
  tag?: string
}

interface NotificationOptions {
  body?: string
  tag?: string
  icon?: string
  badge?: string
  data?: unknown
  actions?: NotificationAction[]
  requireInteraction?: boolean
  silent?: boolean
  vibrate?: number[]
  image?: string
  dir?: 'auto' | 'ltr' | 'rtl'
  lang?: string
  renotify?: boolean
  timestamp?: number
}

interface NotificationAction {
  action: string
  title: string
  icon?: string
}

interface Notification {
  title: string
  body: string
  tag: string
  icon: string
  badge: string
  data: unknown
  actions: NotificationAction[]
  requireInteraction: boolean
  silent: boolean
  vibrate: number[]
  image: string
  dir: 'auto' | 'ltr' | 'rtl'
  lang: string
  renotify: boolean
  timestamp: number
  onclick: ((this: Notification, ev: Event) => void) | null
  onshow: ((this: Notification, ev: Event) => void) | null
  onerror: ((this: Notification, ev: Event) => void) | null
  onclose: ((this: Notification, ev: Event) => void) | null
  close(): void
}

// Navigator with service worker
interface Navigator {
  serviceWorker: ServiceWorkerContainer
}

interface ServiceWorkerContainer {
  controller: ServiceWorker | null
  ready: Promise<ServiceWorkerRegistration>
  oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => void) | null
  onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => void) | null
  register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>
  getRegistration(scope?: string): Promise<ServiceWorkerRegistration | undefined>
  getRegistrations(): Promise<ServiceWorkerRegistration[]>
  startMessages(): void
}

interface RegistrationOptions {
  scope?: string
  updateViaCache?: 'all' | 'imports' | 'none'
} 