<script>
  import NewsLetter from "./NewsLetter.svelte";
  import Footer from "./Footer.svelte";
  import PostView from "./Post.svelte";

  export let posts;
</script>

<section>
  <div class="col-md-9">
    <div class="col-md-12 page-body">
      <div class="row">
        <div class="sub-title">
          <h2>My Blog</h2>
          <a href="contact.html"><i class="icon-envelope" /></a>
        </div>

        <div class="col-md-12 content-page">
          <!-- Blog Post Start -->
          {#each posts as post}
            <!-- Blog Post Start -->
            <div class="col-md-12 blog-post">
              <div class="post-image">
                <img src={post.coverImage} alt="" />
              </div>
              <div class="post-title">
                <a href="single.html"
                  ><h1>
                    {post.title}
                  </h1></a
                >
              </div>
              <div class="post-info">
                <span
                  >{ new Date(post.publishedAt).toDateString()} / by <a href="!#" target="_blank"
                    >{post.user.name}</a
                  ></span
                >
              </div>
              <p>
                { post.description }
              </p>
              <a
                href="single.html"
                class="button button-style button-anim"
                ><span>Read More</span></a
              >
            </div>
            <!-- Blog Post End -->
          {/each}
          <div class="col-md-12 text-center">
            <a href="!#" id="load-more-post" class="load-more-button">Load</a>
            <div id="post-end-message"></div>
          </div>
        </div>
      </div>

      <NewsLetter />
    </div>
    <Footer />
  </div>
</section>
