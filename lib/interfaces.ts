export interface IFormStatus {
	isLoading: boolean;
	isSucces: boolean;
	error: string | null;
}

export interface ICounter {
	id?: string;
	count: number;
	error?: string | null;
}

export interface ICounters {
	allApiCounters: ICounter[];
	apiCounter: ICounter | null;
	localCounter: number;
	isLoading: boolean;
	isChanged: boolean;
	error: string | undefined;
}
