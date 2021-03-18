import React from "react"

import { Link } from "gatsby"

export function BlogPostsList({ posts }) {
  return (
    <div className="grid grid-col-1 gap-4">
      {posts.map(post => {
        return (
          <div className="p-2 flex flex-col">
            <Link
              key={post.slug}
              to={post.slug}
              className="mb-1 text-xl hover:underline"
            >
              {post.title}
            </Link>
            <time dateTime={post.date.toISOString()} className="text-sm">
              {formatDate(post.date)}
            </time>
          </div>
        )
      })}
    </div>
  )
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date)
}