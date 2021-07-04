<script>
import Post from "./Post.svelte";

  import PostView from "./Post.svelte";
  export let posts;
</script>


{#each posts as post, index}
  <PostView {post} />
{/each}

