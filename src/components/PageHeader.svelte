<script type="text/javascript">
  import { onMount } from 'svelte';
  export let bgImg = 'images/christopher-gower-_aXa21cf7rY-unsplash.jpg';
  export let title
  export let subtitle
  let style = `background-image: url('${bgImg}')`
  // `assets/img/home-bg.jpg`
  
</script>



<!-- Page Header-->
<header
  class="masthead"
  style="{style}"
>
  <div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <div class="site-heading">
          <h1>{title}</h1>
          <span class="subheading">{subtitle}</span>
        </div>
      </div>
    </div>
  </div>
</header>
