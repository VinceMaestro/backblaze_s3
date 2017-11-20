const url = require('url');
const async_https_request = require('./async_https_request');
const async = require('async');

async function get_upload_part_url(data, fileId) {
  const host = url.parse(data.apiUrl).hostname;
  const postData = JSON.stringify({
    'fileId': fileId,
  });
  const options = {
    host: host,
    path: '/b2api/v1/b2_get_upload_part_url',
    method: 'POST',
    headers: {
      'Authorization': data.authorizationToken,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };
  return async_https_request(options, postData, true);
};

module.exports = get_upload_part_url;