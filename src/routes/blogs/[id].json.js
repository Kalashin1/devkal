import fetch from "node-fetch";

export async function get(req, res){
	const { id } = req.params

	const _res = await fetch(`https://dev.to/api/articles/${id}`)

	const article = await _res.json()

	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(article))
}