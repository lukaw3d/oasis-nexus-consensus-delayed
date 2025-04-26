const request_time = new Date().toISOString()
const response = await (await fetch("https://nexus.oasis.io/v1/")).json()
const latest_block_time_age_ms = new Date(request_time).getTime() - new Date(response.latest_block_time).getTime()
const latest_node_block_diff = response.latest_node_block - response.latest_block

let latest_sapphire_block_time_age_ms;
{
  const request_time = new Date().toISOString()
  const response = await (await fetch("https://nexus.oasis.io/v1/sapphire/status")).json()
  latest_sapphire_block_time_age_ms = new Date(request_time).getTime() - new Date(response.latest_block_time).getTime()
}

if (latest_block_time_age_ms > 20000 || latest_node_block_diff > 3 || latest_sapphire_block_time_age_ms > 20000) {
  console.log(JSON.stringify({
    ...response,
    request_time,
    latest_block_time_age_ms,
    latest_node_block_diff,
    latest_sapphire_block_time_age_ms,
  }))
}
