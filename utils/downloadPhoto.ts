function forceDownload(blobUrl: string, filename: string): void {
  const a: HTMLAnchorElement = document.createElement('a');
  a.download = filename;
  a.href = blobUrl;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export default function downloadPhoto(url: string, filename?: string): void {
  if (!filename) {
    const urlParts: string[] = url.split(/[\\/]/);
    filename = urlParts.pop() || '';
  }

  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl: string = window.URL.createObjectURL(blob);
      forceDownload(blobUrl, filename || '');
    })
    .catch((e) => console.error(e));
}
