export const sections = [
  {
    label: 'Godot編', href: '/godot/', accent: 'mint',
    children: [
      { label: 'UI実装の仕方', href: '/godot/ui/' },
      { label: 'テストの仕方', href: '/godot/testing/' },
    ],
  },
  { label: 'インスペクタ編', href: '/inspector/', accent: 'violet', children: [] },
  { label: 'MCPサーバー操作編', href: '/mcp/', accent: 'blue', children: [] },
] as const;

export const docs = [
  { label: 'Docs概要', href: '/docs/' },
  { label: 'Godot main.gd', href: '/docs/godot-main-gd/' },
  { label: '.NETパッケージ', href: '/docs/dotnet-packages/' },
] as const;

export const sectionsEn = [
  {
    label: 'Godot', href: '/en/godot/', accent: 'mint',
    children: [
      { label: 'Implementing UI', href: '/en/godot/ui/' },
      { label: 'Testing UI', href: '/en/godot/testing/' },
    ],
  },
  { label: 'Inspector', href: '/en/inspector/', accent: 'violet', children: [] },
  { label: 'MCP Server', href: '/en/mcp/', accent: 'blue', children: [] },
] as const;

export const docsEn = [
  { label: 'Docs overview', href: '/en/docs/' },
  { label: 'Godot main.gd', href: '/en/docs/godot-main-gd/' },
  { label: '.NET packages', href: '/en/docs/dotnet-packages/' },
] as const;
