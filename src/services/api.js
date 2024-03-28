import {
    get,
    post,
    put,
    patch,
    deleteApi,
    getfile,
} from "./Methods";


export const getArtist = async (payload) => {
	const res = await get(`api/moksha/v1/artists`, payload);
	return res;
};

export const getArtistDetails = async (payload) => {
	const res = await get(`api/moksha/v1/artist?pageName=`, payload);
	return res;
};

export const connectCustomer = async (payload) => {
	const res = await post(`api/moksha/v1/connect`, payload);
	return res;
};

export const getArtworkDetails = async (payload) => {
	const res = await get(`api/moksha/v1/artworks`, payload);
	return res;
};

export const getArtworkStoreDetails = async (payload) => {
	const res = await get(`api/moksha/v1/artwork?sku=`, payload);
	return res;
};

export const getFeatureArtwork = async (payload) => {
	const res = await get(`api/moksha/v1/artworks?is_featured=yes`, payload);
	return res;
};

export const getGalleryFilters = async (payload) => {
	const res = await get(`api/moksha/v1/filters`, payload);
	return res;
};

export const getApplyFiltersData = async (payload) => {
	const res = await get(`api/moksha/v1/artworks?`, payload);
	return res;
};