function longTime(req, res, next) {

    const now = new Date().toLocaleString();
    console.log('[${now}] Got a new request for url: ${req.url} - method $(req.method');
    next();
}