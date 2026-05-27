1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";

export default function Home() {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const accessVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    [heroVideoRef.current, accessVideoRef.current].forEach((video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;

        if (video === accessVideoRef.current) {
          video.playbackRate = 0.65;
        }

        video.play().catch(() => {});
      }
    });


