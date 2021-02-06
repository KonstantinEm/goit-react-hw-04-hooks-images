const KEY = "18839530-4e500f23cd7e38f757fc7d3b1";
async function fetchImage(imageName, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${imageName}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error(`No images`));
}

export default fetchImage;
