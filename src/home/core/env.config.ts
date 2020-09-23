const _is_Dev = window.location.port.indexOf('4200')>-1;
const getHost = () => {
    const protocol = window.location.protocol;
    const host = window.location.host;
    return '${protocol}//${host}';
}
const blogUrl =_is_Dev ? 'http://localhost:8080/blogapp/':'/blogapp/';

export const ENV = {
    BASE_URI: getHost(),
    BASE_API: blogUrl
  };