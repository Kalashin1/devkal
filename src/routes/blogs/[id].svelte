<script context="module">
//   import 'highlight.js/styles/Monokai'
  import hljs from'highlight.js'
  import marked from 'marked'

  const renderer = {
    code (code, language) {
      return `<pre><code class="hljs ${language}">${hljs.highlight(language, code).value}</code></pre>`
    }
  }

  marked.use({ renderer })
  export async function preload(page, session) {
    const { id } = page.params

    
    const res = await this.fetch(`blogs/${id}.json`)
    let article = await res.json()

    article.body_html = marked(article.body_markdown)

    return { article }
  }
</script>

<script>
import PageHeader from '../../components/PageHeader.svelte'
export let article
const title = article.title
const subtitle = `Written By ${article.user.name} ${article.tags}`
const bgImg = article.cover_image
</script>


<!-- Post Content-->
<PageHeader {bgImg} {title} {subtitle} />
<article class="mb-4">
  <!-- <img src={article.cover_image} alt="" class="img-fluid">
  <h5 class="m-4 text-center">{subtitle}</h5> -->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <p>{@html marked(article.body_markdown)}</p>
      </div>
    </div>
  </div>
</article>
