<script context="module">
export async function preload(page, session){
  const res = await this.fetch('/blogs.json')

  let posts = await res.json()

  return { posts }
}
</script>

<script>
  import BlogPost from '../components/BlogPosts.svelte'
  import PageHeader from '../components/PageHeader.svelte'
  export let posts;
  let page = 2;
  let title = "Welcome to DevKal"
  let subtitle = "A programmers solution"
  let handleOldPost =  async () => {
    const res = await fetch(`https://dev.to/api/articles?username=kalashin1&per_page=15&page=${page}`)
    let data = await res.json();
    data = data.map((post) => ({
      title: post.title,
      coverImage: post.cover_image,
      createdAt: post.created_at,
      publishedAt: post.published_at,
      id: post.id,
      tas: post.tags,
      tagList: post.tag_list,
      description: post.description,
      readingTime: post.reading_time_minutes,
      user: post.user,
      socialImage: post.social_image,
    }));
    posts = [...data]
    page = page + 1;
  }
</script>

<!-- Main Content-->
<PageHeader {title} {subtitle} />
<div class="container px-4 px-lg-5">
  <div class="row gx-4 gx-lg-5 justify-content-center">
    <div class="col-sm-12 col-md-10 col-xl-8">
      <BlogPost {posts} />
      <!-- Pager-->
      <div class="d-flex justify-content-end mb-4">
        <button class="btn btn-primary text-uppercase" on:click={(e) => handleOldPost(e)}>Older Posts →</button>
      </div>
    </div>
  </div>
</div>
