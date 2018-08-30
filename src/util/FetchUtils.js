export const fetchToJson = (response) => response.json();

export function fetchErrorThrower(response) {
  if(!response.ok) {
    throw response;
  }
  return response;
}

export function DropboxToAgaveFormat(response) {
  return response.entries.map((item) => {
    return {
      format: item['.tag'] === 'folder' ? 'folder' : 'raw',
      lastModified: item.server_modified,
      length: item.size,
      name: item.name,
      path: item.path_display,
      permissions: '',
      system: 'dropbox',
      type: item['.tag'] === 'folder' ? 'dir' : 'file',
      "_links": {
        self: "/dropbox/content/2/files/download" + item.path_display
      }
    }
  });
}
