"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True only after the client has mounted; false during SSR and first paint. */
export function useHasMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
