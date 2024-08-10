export const createFormData = (data, files) => {
    const formData = new FormData();
  console.log('====================================');
  console.log(data);
  console.log('====================================');
    Object.keys(data).forEach(key => {
      if (typeof data[key] === 'object' && !Array.isArray(data[key])) {
        Object.keys(data[key]).forEach(subKey => {
          formData.append(`${key}[${subKey}]`, data[key][subKey]);
        });
      } else {
        formData.append(key, data[key]);
      }
    });
  
 
      formData.append('image', files);
 
  
    return formData;
  };
  