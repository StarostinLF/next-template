export async function checkResponse<T extends object>(
	response: Response,
): Promise<T> {
	if (response.ok) {
		//const data = await response.text();

		//return JSON.parse(data) as T;
		return await response.json();
	}

	//return Promise.reject((await result.text()).toString());
	return Promise.reject(`Error: ${response.status} ${response.statusText}`);
}
