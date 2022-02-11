import { ref, watch } from 'vue';
import request from '@/utils/request';

export default function useTaskStorage() {
	// 是否已经重新登录账号
	const isAlreadyLogin = ref<boolean>(false);

	// 缓存队列
	const storageList = ref<any[]>([]);

	// 加入队列
	const joinWaitList = (config: any) => {
		return new Promise((resolve, reject) => {
			storageList.value.push({
				resolve,
				reject,
				config,
			});
		});
	};

	watch(isAlreadyLogin, () => {
		if (isAlreadyLogin.value) {
			// 重新请求缓存列队的请求任务
			for (let team of storageList.value) {
				request(team.config)
					.then((res: AnyObject) => {
						team.resolve(res);
					})
					.catch((error: AnyObject) => {
						team.reject(error);
					});
			}
		} else storageList.value = []; // 清空队列任务
	});

	// 模拟重新登录后 把
	// setTimeout(() => {
	// 	isAlreadyLogin.value = true;
	// }, 5000);

	return {
		isAlreadyLogin,
		storageList,
		joinWaitList,
	};
}
