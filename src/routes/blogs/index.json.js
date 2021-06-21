import fetch from "node-fetch";

export async function get(req, res, next) {
  console.log(process.env.DEV_API_KEY)
  const _res = await fetch('https://dev.to/api/articles?username=kalashin1&per_page=6')
  if (_res.ok) {
    let posts = await _res.json()
    console.log(_res.status)

    posts = posts.map((post) => ({
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

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(posts));
  } else {
    next()
  }

}