import { Octokit } from '@octokit/rest'
import { unstable_noStore as noStore } from 'next/cache'
import { NextResponse } from 'next/server'

import site from '@/config/site'
import { env } from '@/env'

export const dynamic = 'force-dynamic'

export const GET = async () => {
  noStore()

  const octokit = new Octokit({
    auth: env.GITHUB_TOKEN
  })

  const { data: repos } = await octokit.request('GET /users/{username}/repos', {
    username: site.githubUsername
  })

  const {
    data: { followers }
  } = await octokit.request('GET /users/{username}', {
    username: site.githubUsername
  })

  const stars = repos
    .filter((repo) => {
      return !repo.fork
    })
    .reduce((acc, repo) => {
      return acc + (repo.stargazers_count ?? 0)
    }, 0)

  return NextResponse.json({
    stars,
    followers
  })
}