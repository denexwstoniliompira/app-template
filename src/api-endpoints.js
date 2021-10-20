// we keep all used api endpoints here . Reason is that maybe in the future we are going to write a mock server. We can import the endpoint from here. Or maybe we want to change
// an endpoint.
export const FETCH_REPOSITORIES =
    'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc'
