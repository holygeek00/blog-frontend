import { marked } from 'marked'

import { computed, ref } from "vue"

import hljs from "highlight.js"


export default function MarkdownToHtml (content) {
  marked.setOptions({
    // 使用默认的渲染类
    renderer: new marked.Renderer,
    // GitHub Flavored Markdown, 生成 GitHub 格式。
    gfm: true,
    // 异步解析
    async: true,
    // 高亮函数，使用 highlight.js。本来还有第三个参数作为发生错误时的回调。
    highlight (code, language) {
      return hljs.highlight(code, { language, ignoreIllegals: true }).value
    },
  })
  const result = computed(() => {
    return marked(content)
  })
  console.log(result)
  return result
}

