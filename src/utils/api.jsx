export const userData = JSON.parse(localStorage.getItem("user"));
export const url = import.meta.env.API_URL;
const request = async (
  route,
  method,
  body = null,
  isPrivate = false,
  headers = {}
) => {
  try {
    const options = {
      method,
      headers: { "Content-Type": "application/json", ...headers },
      ...(body && { body: JSON.stringify(body) }), // Include body only if it exists
    };

    // Add Authorization header for private requests
    if (isPrivate) {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authorization token found!");
      options.headers.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(`${API_URL}${route}`, options);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Generic HTTP methods that can handle both public and private requests
export const getRequest = (route, isPrivate = false, headers = {}) =>
  request(route, "GET", null, isPrivate, headers);

export const postRequest = (route, body, isPrivate = false, headers = {}) =>
  request(route, "POST", body, isPrivate, headers);

export const putRequest = (route, body, isPrivate = false, headers = {}) =>
  request(route, "PUT", body, isPrivate, headers);

export const patchRequest = (route, body, isPrivate = false, headers = {}) =>
  request(route, "PATCH", body, isPrivate, headers);

export const deleteRequest = (route, isPrivate = false, headers = {}) =>
  request(route, "DELETE", null, isPrivate, headers);
