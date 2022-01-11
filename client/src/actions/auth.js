

export const signup = (formData,navigate) => async (dispatch) => {
  try {
      console.log("Signing in up")
        navigate("/app");
  } catch (error) {
    console.log('Signup', error);
  }
};

export const signin = (formData) => async (dispatch) => {
    try {
        console.log("Signing in ")
        
    } catch (error) {
      console.log('Signin', error);
    }
  };
