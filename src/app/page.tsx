"use client";
import Link from "next/link";

export default function Home() {
 
  return (
    <main className="main flex items-center justify-center px-24 py-14 h-fullPage">
      <div className="get-started p-50 bg-postMainBG rounded-10 mx-auto border border-post border-solid border-1 text-center">
          <h1 className="text-red text-center text-40 mb-12">POSTS APP</h1>
          <Link href="/posts" className="text-20 text-red bg-id py-3 px-8 font-bold rounded-5">Get Started</Link>
      </div>
    </main>
  );
}
