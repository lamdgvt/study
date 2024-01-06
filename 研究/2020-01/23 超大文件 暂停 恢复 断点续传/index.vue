<template>
    <a-upload v-model:file-list="fileList" :customRequest="customRequest">
        <a-button>Click to Upload</a-button>
    </a-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { uploadAPI } from '@/api/common'
import { message } from 'ant-design-vue';

const fileList = ref([]);

// // 获取文件详细信息
// const getFileConfig = (file: File) => {
//     const chunkSize = 1024 * 1024; // 切片 每片大小
//     const totalSize = file.size; // 文件总大小
//     const chunkQuantity = Math.ceil(totalSize / chunkSize); // 切片总数

//     return { chunkSize, totalSize, chunkQuantity }
// }

// // 设置
// const setFileReader = (blob: Blob) => new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onload = (e: ProgressEvent) => resolve(e);

//     reader.readAsBinaryString(blob);
// })


// 上传切片
const uploadChunk = async (file: File, offset: number): Promise<any> => {
    const worker = new Worker('worker.js');

    worker.postMessage({
        file, offset
    });

    worker.addEventListener('message', async ({ e, chunkQuantity }: any) => {
        const { result } = e.target

        const { data } = await uploadAPI({ result })

        if (data.code === 0) {

            switch (true) {
                // 已上传完
                case offset >= chunkQuantity: return message.success('上传成功')

                default: return await uploadChunk(file, offset + 1)
            }
        }
    })
}



const customRequest = async ({ file }: { file: File }) => {

    uploadChunk(file, 0)
}

</script>

<style lang="less" scoped></style>