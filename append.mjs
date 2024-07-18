const request_time = new Date().toISOString()
const response = await (await fetch("https://nexus.oasis.io/v1/")).json()
console.log(JSON.stringify({
  ...response,
  request_time,
  latest_block_time_age_ms: new Date(request_time) - new Date(response.latest_block_time),
  latest_node_block_diff: response.latest_node_block - response.latest_block,
}))
