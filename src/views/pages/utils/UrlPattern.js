export function useUrlPattern() {

  const defaultImage = (prefix, w = null, h = null) => require(`@/assets/img/default/${prefix}.jpg`);

  const image = (urlPattern = null, w = null, h = null, prefix = 'avatar') => {
    if (urlPattern !== null && urlPattern !== undefined) {
      let { width, height, url_pattern } = urlPattern

      const avatarPatterns = {
        endpoint: process.env.VUE_APP_STORAGE_URL,
        width: w ?? width,
        height: h ?? height,
      }

      for (const key in avatarPatterns) {
        if (Object.hasOwnProperty.call(avatarPatterns, key)) {
          const replace = avatarPatterns[key];
          url_pattern = url_pattern.replaceAll(`{${key}}`, replace)
        }
      }

      return url_pattern
    }

    return defaultImage(prefix, w, h)
  }

  const imageFromStorage = ({ url }, w = null, h = null, prefix = 'logo') => {
    // return `${process.env.VUE_APP_STORAGE_URL}${url}`;

    return url;
  }

  return {
    image,
    defaultImage,
    imageFromStorage,
  }
}
