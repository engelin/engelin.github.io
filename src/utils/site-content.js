export const tagTones = {
  AWS: 'tag-amber',
  Architecture: 'tag-purple',
  Automation: 'tag-green',
  Backend: 'tag-green',
  CI: 'tag-cyan',
  'CI/CD': 'tag-cyan',
  Career: 'tag-gray',
  CSS: 'tag-purple',
  DDD: 'tag-purple',
  Design: 'tag-purple',
  Docker: 'tag-amber',
  Flutter: 'tag-cyan',
  Frontend: 'tag-cyan',
  'GitHub API': 'tag-green',
  'GitHub Actions': 'tag-green',
  GraphQL: 'tag-green',
  iOS: 'tag-purple',
  Jira: 'tag-green',
  Laravel: 'tag-amber',
  React: 'tag-cyan',
  Release: 'tag-amber',
  Testing: 'tag-purple',
  TypeScript: 'tag-cyan',
  Versioning: 'tag-gray',
  Vite: 'tag-cyan',
  Vitest: 'tag-purple',
}

export const homeTechStack = [
  'TypeScript',
  'React',
  'Flutter',
  'Node.js',
  'PostgreSQL',
  'Figma',
  'Python',
  'AWS',
  'Docker',
  'GraphQL',
  'Laravel',
  'Rust',
]

export const getTagClass = tag => tagTones[tag] || 'tag-gray'

export const getPageFromHash = () => {
  if (typeof window === 'undefined') {
    return 'home'
  }

  const value = window.location.hash.replace('#', '')
  return value || 'home'
}

export const slugifyTag = value =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
