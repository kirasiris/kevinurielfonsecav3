import { toast } from "react-toastify";
import api from "@/helpers/api";
import axios from "axios";
import { API_URL, GITHUB_TOKEN } from "@/config";

// @desc    Get all parking lots
// @route   GET /api/v1/extras/parkinglots
// @access  Private
// @status  DONE
export const getWordPressPosts = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/posts${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @desc    Get single parking lot
// @route   GET /api/v1/extras/parkinglots/:id
// @access  Private
// @status  DONE
export const getWordPressPost = (id) => async (dispatch) => {
	try {
		const res = await api.get(`/posts/${id}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @desc    Get all parking lots
// @route   GET /api/v1/extras/parkinglots
// @access  Private
// @status  DONE
export const getWordPressThemes = (params) => async (dispatch) => {
	try {
		const res = await axios.get(`${API_URL}/edd-api/v2${params}`, {
			headers: {
				"Content-Type": `application/json`,
			},
		});

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

// @desc    Get all parking lots
// @route   GET /api/v1/extras/parkinglots
// @access  Private
// @status  DONE
export const getWordPressTheme = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`${API_URL}/edd-api/v2${id}`, {
			headers: {
				"Content-Type": `application/json`,
			},
		});
		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const getWordPressComments = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/comments${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const getWordPressPages = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/pages${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const getWordPressCategories = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/categories${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const getWordPressTags = (params) => async (dispatch) => {
	try {
		const res = await api.get(`/tags${params}`);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};

export const getWordPressThemeReadMe = (repoName) => async () => {
	try {
		const res = await axios.get(
			`https://api.github.com/repos/kirasiris/${repoName}/readme`,
			{
				accept: "application/vnd.github.v3+json",
				headers: {
					Authorization: { GITHUB_TOKEN },
				},
			}
		);

		return res.data;
	} catch (err) {
		// const error = err.response.data.message;
		const error = err?.response?.data?.error?.errors;
		const errors = err?.response?.data?.errors;

		if (error) {
			// dispatch(setAlert(error, 'danger'));
			error &&
				Object.entries(error).map(([, value]) => toast.error(value.message));
		}

		if (errors) {
			errors.forEach((error) => toast.error(error.msg));
		}

		toast.error(err?.response?.statusText);
		return { msg: err?.response?.statusText, status: err?.response?.status };
	}
};
