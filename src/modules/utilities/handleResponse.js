export default function handleResponse(value, imgRef, ignore) {
    if (value === 'error') {
        console.error('An error occurred while fetching your gif!');
    }

    if (!ignore) {
        imgRef.current.src = value;
    }
}
