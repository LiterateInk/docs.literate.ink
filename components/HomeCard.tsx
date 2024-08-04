'use client';

import Link from "next/link";

const HUES = {
  PAWNOTE: 140,
  TURBAWSELF: 21,
  PAWDIRECTE: 235,
  WEBRESTAW: 35,
  CROWOUS: 358,
  PAWNILIM: 351,
  EDUCAWTABLE: 190,
  PAWRD: 170,
  MEOWDLE: 28
} as const;

export const HomeCard: React.FC<{ name: string, description: string }> = ({ name, description }) => {
  const hue = HUES[name.toUpperCase() as keyof typeof HUES];

  const setHue = () => document.documentElement.style.setProperty('--hue', hue.toString());
  const resetHue = () => document.documentElement.style.removeProperty('--hue');

  return (
    <Link
      href={`/${name.toLowerCase()}`}
      onPointerEnter={() => setHue()}
      onPointerLeave={() => resetHue()}
      className='overflow-hidden relative z-10 flex justify-between border rounded-xl pl-5 pr-14 gap-3 py-4 max-w-[320px] w-full dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/50 backdrop-blur-xl hover:border-[hsl(var(--hue),60,70)]/50 hover:bg-[hsl(var(--hue),100,90)]/20 dark:hover:border-[hsl(var(--hue),30,50)]/50 dark:hover:bg-[hsl(var(--hue),30,9)] transition-colors'
      // style={{ borderColor: `hsl(${hue} 76 90 / .2)` }}
    >
      <div className="flex flex-col gap-1">
        <p className='font-semibold'>{name}</p>
        <p className="text-sm opacity-75">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-24 blur-[80px] rounded-full" style={{ backgroundColor: `hsl(${hue} 76 50 / .2)`}} />
      <div className="absolute bottom-0 right-0 h-16 w-24 blur-[80px] rounded-full" style={{ backgroundColor: `hsl(${hue} 38 45 / .9)`}} />
    </Link>
  )
}