"use client";

import Link from "next/link";
import { MiniProfileCard } from "@/components/MiniProfileCard";
import { TopNav } from "@/components/TopNavbar";
import { ShortcutsCard } from "@/components/shortcutCard";
import { ComposerCard } from "@/components/composerCard";

import type { Post } from "@/types/Post";
import { TrendingCard } from "@/components/TrendingCard";
import { SuggestionsCard } from "@/components/suggestionCard";
import { FooterLinks } from "@/components/footerLinks";
import PostCard from "@/components/postCard";




const MOCK_POSTS: Post[] = [
  {
    id: "1",
    authorName: "Aarushi Daksh",
    authorTitle: "Full-Stack Developer • Next.js | React Native",
    authorAvatar: "/avatar.png",
    content:
      "Just shipped a real-time chat with Socket.IO and MongoDB for SkillSlack! Open to feedback on the typing indicators and optimistic UI updates.",
    image: "",
    likes: 214,
    comments: 37,
    reposts: 12,
    time: "2h",
  },
  {
    id: "2",
    authorName: "Meta Careers",
    authorTitle: "Company • Hiring",
    authorAvatar: "",
    content:
      "We’re hiring internship roles in Frontend (React/Next.js) and Mobile (React Native). Apply now!",
    image: "",
    likes: 980,
    comments: 121,
    reposts: 66,
    time: "5h",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
      <TopNav />

      <main className="mx-auto w-full max-w-6xl flex-1 gap-6 px-3 py-6 md:grid md:grid-cols-12">
     {/* //left Sidebar */}
        <aside className="md:col-span-3 space-y-4">
          <MiniProfileCard />
          <ShortcutsCard />
        </aside>
{/* 
        // Main Content */}
        <section className="md:col-span-6 space-y-4">
          <ComposerCard />
          <div className="space-y-4">
            {MOCK_POSTS.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
{/* 
       // Right Sidebar */}
        <aside className="md:col-span-3 space-y-4">
          <TrendingCard />
          <SuggestionsCard />
          <FooterLinks />
        </aside>
      </main>
    </div>
  );
}
