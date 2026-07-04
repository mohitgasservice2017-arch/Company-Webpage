import https from 'https';

const HOST = 'www.mohitgasservice.com';
const KEY = '283b81837e4b4e2fb906bbbbb65a7a7f';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const urlsToSubmit = [
  `https://${HOST}/`,
  `https://${HOST}/services`,
  `https://${HOST}/services/residential-pipeline`,
  `https://${HOST}/services/commercial-infrastructure`,
  `https://${HOST}/services/industrial-systems`,
  `https://${HOST}/services/png-piping-fitting`,
  `https://${HOST}/services/bhatti-services`,
  `https://${HOST}/services/safety-audits`,
  `https://${HOST}/terms-of-service`,
  `https://${HOST}/privacy-policy`
];

const data = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urlsToSubmit
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

console.log('Submitting URLs to IndexNow...');

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  // 200 OK or 202 Accepted are both success codes for IndexNow
  if (res.statusCode === 200 || res.statusCode === 202) {
    console.log('✅ URLs submitted successfully! (Search engines have accepted the request)');
  } else {
    console.error(`❌ Failed to submit URLs. Status Code: ${res.statusCode}`);
  }

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error('Error submitting URLs:', error);
});

req.write(data);
req.end();
