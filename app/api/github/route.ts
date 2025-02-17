import { NextResponse } from "next/server";

const GITHUB_API_URL = "https://api.github.com/users/MoDev40/repos";

export async function GET() {
  try {
    const response = await fetch(GITHUB_API_URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repositories");
    }

    const repos = await response.json();

    // Transform and filter the repositories
    const transformedRepos = repos
      .filter((repo: any) => !repo.fork) // Exclude forked repositories
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description available",
        stars: repo.stargazers_count,
        language: repo.language,
        demoLink: repo.homepage || "",
        sourceCodeLink: repo.html_url,
        topics: repo.topics || [],
        updatedAt: repo.updated_at,
        image: `https://opengraph.githubassets.com/1/${repo.full_name}`,
      }))
      .sort(
        (a: any, b: any) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );

    return NextResponse.json(transformedRepos);
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
