import axiosInstance from './axiosInstance';

export const fetchData = async (url: string) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error; 
  }
};

export const postData = async (url: string, data: any, formData: boolean = false) => {
  try {
    const response = await axiosInstance.post(url, data, 
      {
        headers: {
          'Content-Type': `${formData ? 'multipart/form-data' : 'application/json'}`,
        },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateData = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteData = async (url: string) => {
  try {
    const response = await axiosInstance.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
