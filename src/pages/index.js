import React from "react"
import { FullPageLayout } from "../components/full-page-layout"
import { PopLink } from "../components/pop-link"
import { Link } from "gatsby"
import { GithubIcon, MailIcon, TwitterIcon } from "../components/icons"

export default function HomePage() {
  return (
    <FullPageLayout>
      <div className="flex justify-center mx-2">
        <div className="mt-12 inline-grid grid-cols-1 sm:grid-cols-2 gap-8">
          <img
            className="rounded-full p-1 border-8 border-solid border-blue-800 w-48 sm:w-56 justify-self-center sm:justify-self-end"
            alt="Profile picture"
            src="/images/profile-picture.jpg"
          />

          <div className="max-w-xs">
            <div className="text-sm">Hi, I'm</div>
            <div className="text-2xl font-bold">Ondrej Sevcik</div>
            <p className="mt-2 mr-2">
              Frontend Developer with a special focus on simplicity and
              well-designed apps. Currently building Cafe app at{" "}
              <a className="link" href="https://cropster.com">
                Cropster
              </a>{" "}
              and occasionally writing on my{" "}
              <Link className="link" to="/blog">
                /blog
              </Link>
              .
            </p>
            <div className="inline-grid grid-cols-3 gap-8 mt-6">
              <span className="w-6 h-6">
                <PopLink href="mailto:hi@ondrejsevcik.com" aria-label="Email">
                  <MailIcon />
                </PopLink>
              </span>
              <span className="w-6 h-6">
                <PopLink
                  href="https://twitter.com/ondrejsevcik"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </PopLink>
              </span>
              <span className="w-6 h-6">
                <PopLink
                  href="https://github.com/ondrejsevcik"
                  aria-label="Github"
                >
                  <GithubIcon />
                </PopLink>
              </span>
            </div>
          </div>
        </div>
      </div>
    </FullPageLayout>
  )
}
