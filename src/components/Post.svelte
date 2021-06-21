<script>
  // import { onMount } from 'svelte'
  export let post;

  //  onMount(() => {
  //   console.log(post)
  // })
</script>

<div class="col-md-12 content-page">
  <!-- Blog Post Start -->
  <div class="col-md-12 blog-post">
    <div class="post-title">
      <a href="single.html"
        ><h1>
          { post.title} goof
        </h1></a
      >
    </div>
    <div class="post-info">
      <span
        >{ new Date(post.publishedAt).toDateString() } / by <a href="!#" target="_blank">{post.user.name}</a
        ></span
      >
    </div>
    <p>
      {post.description}
    </p>
    <a href="single.html" class="button button-style button-anim">
      <i class="fas fa-long-arrow-alt-right" />
      <span>Read More</span>
    </a>
  </div>
  <!-- Blog Post End -->
</div>
