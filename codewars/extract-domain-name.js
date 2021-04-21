function domainName(url) {
  return url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split(".")[0];
}

console.log(domainName("https://www.abhayjain13.github.com."));
