import { useEffect, useRef } from 'react';

export function useDocumentEventListener(
  eventName: string,
  handler: any,
  options?: Object
) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    const listener = (evt: any) => {
      const handle = handlerRef.current;
      handle(evt);
    };

    document.addEventListener(eventName, listener, options);
    return () => document.removeEventListener(eventName, listener);
  }, [eventName]);
}
