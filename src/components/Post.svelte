<script>
  // import { onMount } from 'svelte'
  export let post;

  //  onMount(() => {
  //   console.log(post)
  // })
</script>

<!-- Post preview-->
<div class="post-preview shadow-sm p-2 rounded">
  <a href={`blogs/${post.id}`}><img src={post.coverImage} alt={post.title} class="img-fluid" /></a>
  <a href={`blogs/${post.id}`}>
    <h2 class="post-title">
      {post.title}
    </h2>
    <h3 class="post-subtitle">
      {post.description}
    </h3>
  </a>
  <p class="post-meta">
    Posted by
    <a href="#!">{post.user.name}</a>
    {new Date(post.createdAt).toDateString()}. {post.readingTime} mins Read
  </p>
</div>
<!-- Divider-->
<hr class="my-4" />