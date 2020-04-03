const { Client } = require("@elastic/elasticsearch");
const node = process.env.ELASTICSEARCH_DOMAIN_ENDPOINT;
const client = new Client({ node });

module.exports.handler = async (event, content, callback) => {
  console.log(event, node);
  try {
    const data = await client.indices.create({ index: "hello" });
    return callback(null, { success: true, data });
  } catch (error) {
    return callback(
      JSON.stringify({
        statusCode: 500
      })
    );
  }
};
