export default error => {
    const { status } = error;
    switch (status) {
        case 400:
        case 401:
        case 403:
        case 404:
        case 500:
            return console.log(`${status} error!`, error);
        default:
            return 'frontend error';
    }
};
