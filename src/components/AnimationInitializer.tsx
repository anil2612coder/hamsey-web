"use client";
import { useEffect } from "react";

const isInViewport = (element: Element, offset = 150) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};

const handleScrollAnimations = () => {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add("visible");
    }
  });
};

export default function AnimationInitializer() {
  useEffect(() => {
    handleScrollAnimations();
    window.addEventListener("scroll", handleScrollAnimations, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", handleScrollAnimations);
    };
  }, []);
  return null;
}
