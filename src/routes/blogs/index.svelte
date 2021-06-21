<script context="module">
  export async function preload(page, session){
    const res = await this.fetch('/blogs.json')

    let posts = await res.json()

    return { posts }
  }
</script>

<script>
  import BlogPosts from '../../components/BlogPosts.svelte'
  export let posts
</script>


<BlogPosts { posts }/>