import Link from "next/link";
import { Facebook, Github, Instagram, InstagramIcon, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">YourName</h3>
            <p className="text-sm text-muted-foreground">
              Videographer • Photographer • Designer • Developer
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Sections
            </h4>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about" className="hover:text-foreground">
                  About
                </Link>
              </li>

              <li>
                <Link href="#WhatIDo" className="hover:text-foreground">
                  Expertise
                </Link>
              </li>

              <li>
                <Link href="#FeaturedWork" className="hover:text-foreground">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#ProcessSection" className="hover:text-foreground">
                  Workflow
                </Link>
              </li>

              <li>
                <Link href="#ToolsSection" className="hover:text-foreground">
                  Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">
              Follow
            </h4>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/jd.anyayahan"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.instagram.com/jyd.wrld/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/jose-dexter-anyayahan-3b6a00367/"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Link>

              <Link
                href="https://github.com/JoseDexterAnyayahan"
                target="_blank"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} YourName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
