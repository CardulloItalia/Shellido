"use client";
import { useState, useEffect } from "react";

export default function useVisible(delay: number = 500, initialVisible: boolean = false) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const [render, setRender] = useState(initialVisible);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isVisible) {
      setRender(true);
    } else {
      timeoutId = setTimeout(() => setRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible, delay]);

  return {
    isVisible,
    render,
    toggle: () => setIsVisible((v) => !v),
  };
}
