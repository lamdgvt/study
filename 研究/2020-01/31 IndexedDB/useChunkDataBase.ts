import { ref } from 'vue';

const useChunkDataBase = () => {
	const request: any = window.indexedDB.open('chunk-upload-database');

	const db = ref();

	const objectStore = ref();

	request.onerror = () => {
		console.log('数据库打开报错');
	};

	request.onsuccess = (event: any) => {
		db.value = event.target.result;
	};

	request.onupgradeneeded = (event: any) => {
		db.value = event.target.result;

		if (!db.value.objectStoreNames.contains('file_menu')) {
			// keyPath 为 id 主键 autoIncrement 自增长
			objectStore.value = db.value.createObjectStore('file_menu', {
				keyPath: 'id',
				autoIncrement: true,
			});

			// 建立索引 可以让你搜索任意字段
		}

		if (!db.value.objectStoreNames.contains('base64_data')) {
			// keyPath 为 id 主键 autoIncrement 自增长
			objectStore.value = db.value.createObjectStore('base64_data', {
				keyPath: 'id',
				autoIncrement: true,
			});

			// 建立索引 可以让你搜索任意字段
			objectStore.value.createIndex('fileId', 'fileId', {
				unique: false,
			});
		}
	};

	// 增加 base 64 二进制流数据
	const addBase64Data = (fileId: number, baseData: any[]) => {
		const transaction = db.value.transaction(['base64_data'], 'readwrite');

		const objectStore = transaction.objectStore('base64_data');
		const promiseArr: Promise<void>[] = baseData.map(
			(item) =>
				new Promise<void>((resolve, reject) => {
					const params = {
						fileId,
						...item,
					};

					const request = objectStore.add(params);

					request.onsuccess = (event: any) => resolve();
				})
		);

		return Promise.all(promiseArr);
	};

	// 增加文件目录数据
	const addFileMenu = (chunkConfig: any) =>
		new Promise<number>((resolve, reject) => {
			// IDBTransaction 对象用来异步操作数据库事务, 所有的读写操作都要通过这个对象进行
			const transaction = db.value.transaction(
				['file_menu'],
				'readwrite'
			);

			// IDBObjectStore 对象对应一个对象仓库
			const objectStore = transaction.objectStore('file_menu');

			const params = {
				name: chunkConfig.name,
				uid: chunkConfig.uid,
				chunkSize: chunkConfig.chunkSize,
				chunkQuantity: chunkConfig.chunkQuantity,
				totalSize: chunkConfig.totalSize,
			};

			const request = objectStore.add(params);

			request.onsuccess = (event: any) => {
				const { result } = request;
				const { chunkArr } = chunkConfig;
				addBase64Data(result, chunkArr).then(() => resolve(result));
			};
		});


	// 获取文件目录数据
	const getFileMenu = async (primaryKey?: number) =>
		new Promise((resolve, reject) => {
			const transaction = db.value.transaction('file_menu');
			const objectStore = transaction.objectStore('file_menu');
			const request = objectStore.get(primaryKey);

			request.onerror = () => reject('error: 事务失败');
			request.onsuccess = () => resolve(request.result);
		});

	// 获取 文件目录对应的 base64 数据
	const getFileBase64 = (fileId?: number) => {
		const transaction = db.value.transaction(
			['base64_data'],
			'readonly'
		);
		return new Promise<any[]>((resolve, reject) => {
			// const transaction = db.value.transaction(
			// 	['base64_data'],
			// 	'readonly'
			// );
			const objectStore = transaction.objectStore('base64_data');
			const index = objectStore.index('fileId');
			const request = index.getAll(fileId);

			request.onsuccess = (event: any) => resolve(event.target.result);

			request.onerror = () => resolve([]);
		});
	}
	
		

	// 获取文件目录所有数据
	const getFileMenuAll = async () => {
		// const transaction = db.value.transaction('file_menu');
		// const objectStore = transaction.objectStore('file_menu');
		// objectStore.openCursor().onsuccess = function (event: any) {
		// 	const cursor = event.target.result;
		// 	if (cursor) {
		// 		console.log(cursor);
		// 		// 指针向前移动一个位置。它可以接受一个主键作为参数，这时会跳转到这个主键
		// 		cursor.continue();
		// 	} else console.log('没有更多数据了！');
		// };
	};

	return {
		request,
		db,
		objectStore,
		addFileMenu,
		getFileMenu,
		getFileBase64,
		getFileMenuAll,
	};
};

export default useChunkDataBase;
