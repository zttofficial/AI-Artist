interface CodeBlockProps {
  children: string
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="my-6 p-4 bg-gray-50 rounded-lg overflow-x-auto">
      <code className="text-sm font-mono">{children}</code>
    </pre>
  )
}

