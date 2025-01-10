import { useNavigate } from "react-router-dom";

const useApiRequest = () => {
  const navigate = useNavigate();

  const apiRequest = async (url, method = "GET", data = null, headers = {}) => {
    try {
      const token = localStorage.getItem("token");
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...headers,
        },
      };

      if (data && ["POST", "PUT", "PATCH"].includes(method.toUpperCase())) {
        options.body = JSON.stringify(data);
      }

      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const completeUrl = `${baseUrl}auth/${url}`;
      const response = await fetch(completeUrl, options);

      if (!response.ok) {
        const res = await response.json();

        if (response.status === 401) {
          localStorage.clear();
          navigate("/login");
        }

        return {
          status: response.status,
          statusText: response.statusText,
          message: res.message,
        };
      } else {
        return await response.json();
      }
    } catch (error) {
      return { error };
    }
  };

  return apiRequest;
};

export default useApiRequest;
