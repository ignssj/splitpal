import api from "..";

const useAuthService = () => {
  const register = async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/register", { username, password });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { username, password });
      return response.data;
    } catch (err) {
      return err;
    }
  };

  return {
    register,
    login,
  };
};

export default useAuthService;
