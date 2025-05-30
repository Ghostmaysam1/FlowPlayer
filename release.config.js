export default {
    branches: ["main"],
    tagFormat: "v${version}",
  
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/changelog",
        {
          changelogFile: "CHANGELOG.md",
        },
      ],
      [
        "@semantic-release/npm",
        {
          "pkgRoot": ".",
          "npmPublish": false
        }
      ],
      [
        "@semantic-release/git",
        {
          assets: ["CHANGELOG.md", "package.json"],
          message: "release: v${nextRelease.version}",
        },
      ],
      "@semantic-release/github",
    ],
  };
  