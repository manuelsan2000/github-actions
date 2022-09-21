module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/manuelsan2000/github-actions",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {path: "build.zip", label: "Build"},
          {path: "coverage.zip", label: "Coverage"},
        ],
      },
    ],
  ],
};
