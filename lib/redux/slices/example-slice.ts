import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { checkResponse } from '../../check-response';
import { ICounter, ICounters } from '../../interfaces';

export const fetсhGetCounters = createAsyncThunk(
	'counter/fetсhGetCounters',
	async () => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_LINK}/api/number-counter`,
		);

		return checkResponse<ICounter[]>(response);
	},
);

export const fetсhGetCounter = createAsyncThunk(
	'counter/fetсhGetCounter',
	async (id: string) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_LINK}/api/number-counter/${id}`,
		);

		return checkResponse<ICounter>(response);
	},
);

export const fetсhSetCount = createAsyncThunk(
	'counter/fetсhSetCount',
	async ({ id, count }: ICounter) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_LINK}/api/number-counter/${id}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ count: count }),
			},
		);

		return checkResponse<ICounter>(response);
	},
);

export const fetсhAddNewCounter = createAsyncThunk(
	'counter/fetсhAddNewCounter',
	async ({ count }: ICounter) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_LINK}/api/number-counter`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify({ count: count }),
			},
		);

		return checkResponse<ICounter[]>(response);
	},
);

export const fetсhDeleteCounter = createAsyncThunk(
	'counter/fetсhDeleteCounter',
	async ({ id }: ICounter) => {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_LINK}/api/number-counter/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
			},
		);

		return checkResponse<ICounter[]>(response);
	},
);

const initialState: ICounters = {
	allApiCounters: [],
	apiCounter: null,
	localCounter: 0,
	isLoading: false,
	isChanged: false,
	error: undefined,
};

export const counterSlice = createSlice({
	name: 'counters',
	initialState,
	reducers: {
		incrementCountAction: (state) => {
			state.localCounter += 1;
		},
		decrementCountAction: (state) => {
			state.localCounter -= 1;
		},
		setCountAction: (state, action: PayloadAction<number>) => {
			state.localCounter = action.payload;
		},
	},
	selectors: {
		allApiCountersSelector: (state) => state.allApiCounters,
		apiCounterSelector: (state) => state.apiCounter,
		localCounterSelector: (state) => state.localCounter,
		isLoadingSelector: (state) => state.isLoading,
		isChangedSelector: (state) => state.isChanged,
		errorSelector: (state) => state.error,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetсhGetCounters.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetсhGetCounters.fulfilled,
				(state, action: PayloadAction<ICounter[]>) => {
					state.allApiCounters = action.payload;
					state.isLoading = false;
					state.error = initialState.error;
				},
			)
			.addCase(fetсhGetCounters.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(fetсhGetCounter.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				fetсhGetCounter.fulfilled,
				(state, action: PayloadAction<ICounter>) => {
					state.apiCounter = action.payload;
					state.isLoading = false;
					state.error = initialState.error;
				},
			)
			.addCase(fetсhGetCounter.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			})
			.addCase(fetсhSetCount.pending, (state) => {
				state.isLoading = true;
				state.isChanged = initialState.isChanged;
			})
			.addCase(
				fetсhSetCount.fulfilled,
				(state, action: PayloadAction<ICounter>) => {
					state.apiCounter = action.payload;
					state.isLoading = false;
					state.isChanged = true;
					state.error = initialState.error;
				},
			)
			.addCase(fetсhSetCount.rejected, (state, action) => {
				state.isLoading = false;
				state.isChanged = false;
				state.error = action.error.message;
			});
	},
});
