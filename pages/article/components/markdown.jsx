import React, { useState, useEffect } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

function Markdown({ markdown }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    // 将 markdown 转化为 html
    const renderer = new marked.Renderer();
    renderer.code = (code, language) => {
      const validLang = hljs.getLanguage(language) ? language : 'plaintext';
      const highlighted = hljs.highlight(validLang, code).value;
      return `<pre><code class="hljs ${validLang}">${highlighted}</code></pre>`;
    };
    marked.setOptions({
      renderer,
      highlight: () => {},
    });
    const html = marked(markdown);

    setHtml(html);
  }, [markdown]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Markdown;
