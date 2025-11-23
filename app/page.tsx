export default function App() {
	if (typeof window !== 'undefined') console.log('Этот лог из браузера');
	else console.log('Этот лог с сервера Node.js');

	return (
		<main className={'container mx-auto w-full max-w-7xl flex-auto'}>
			<h1 className={'text-2xl font-medium text-blue-600'}>Hello World!</h1>
		</main>
	);
}
