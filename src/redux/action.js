export const SAVE_USER = 'SAVE_USER'

export const saveUser = (userDetails) => ({
	type: SAVE_USER,
	payload: userDetails
})