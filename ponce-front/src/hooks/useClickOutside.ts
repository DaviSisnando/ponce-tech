import useEventListener from "@/hooks/useEventListener";
import { RefObject } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  cb: (event: MouseEvent) => void
) {
  useEventListener(
    "mousedown",
    (e: Event) => {
      if (ref.current == null || ref.current.contains(e.target as Node)) return;
      cb(e as MouseEvent);
    },
    document
  );
}