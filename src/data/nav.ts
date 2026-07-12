export const sections = [
  {
    label: 'Godot編', href: '/godot/', accent: 'mint',
    children: [
      { label: 'UI実装の仕方', href: '/godot/ui/' },
      { label: 'テストの仕方', href: '/godot/testing/' },
    ],
  },
  {
    label: 'ImGui編', href: '/imgui/', accent: 'amber',
    children: [
      { label: 'UI実装の仕方', href: '/imgui/ui/' },
      { label: 'テストの仕方', href: '/imgui/testing/' },
    ],
  },
  { label: 'インスペクタ編', href: '/inspector/', accent: 'violet', children: [] },
  { label: 'MCPサーバー操作編', href: '/mcp/', accent: 'blue', children: [] },
] as const;
