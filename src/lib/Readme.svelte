<script>
    import SvelteMarkdown from 'svelte-markdown'
    import { marked } from 'marked'

  const source = `
# This is a header

This is a paragraph

% Hello
% Custom tokenizer
% Custom tokenizer

* Custom
* Hi
* The Third
`
</script>
  
<SvelteMarkdown {source} />