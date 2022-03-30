<template>
    123
    <a-upload v-model:file-list="fileList" :customRequest="customRequest">
        <a-button>Click to Upload</a-button>
    </a-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import useChunkDataBase from '@/hooks/useChunkDataBase'
import { uploadAPI } from '@/api/common'

const { addFileMenu, getFileMenu } = useChunkDataBase();

const fileList = ref([]);

// 切片处理
const chunkDispose = async (file: File) => {
    const { chunkSize, totalSize, chunkQuantity } = getFileConfig(file)
    const chunkArr: any[] = [];

    const dispose = async (offset: number): Promise<any> => {
        const isLastChunk = (offset + 1) * chunkSize > totalSize ? true : false

        const blob = file.slice(
            offset * chunkSize,
            isLastChunk ? totalSize : (offset + 1) * chunkSize
        )

        const e: any = await setFileReader(blob)

        chunkArr.push({ blob: e.target.result, offset })

        if (!isLastChunk) return dispose(offset + 1)
    }

    // 切片 offset
    await dispose(0)

    return {
        chunkSize,
        totalSize,
        chunkQuantity,
        chunkArr
    }
}

// 获取文件详细信息
const getFileConfig = (file: File) => {
    const chunkSize = 1024 * 1024; // 切片 每片大小
    const totalSize = file.size; // 文件总大小
    const chunkQuantity = Math.ceil(totalSize / chunkSize); // 切片总数

    return { chunkSize, totalSize, chunkQuantity }
}

// 设置
const setFileReader = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent) => resolve(e);

    reader.readAsBinaryString(blob);
})


// 上传切片
const uploadChunk = async (file: File, offset: number): Promise<any> => {
    const { chunkSize, totalSize, chunkQuantity } = getFileConfig(file);

    const blob = file.slice(
        offset * chunkSize,
        (offset + 1) * chunkSize > totalSize ? totalSize : (offset + 1) * chunkSize
    )

    const e: any = await setFileReader(blob)

    const { result } = e.target

    // const { data } = await uploadAPI({ result })

    // if (data.code === 0) {

    //     switch (true) {
    //         // 已上传完
    //         case offset >= chunkQuantity: return message.success('上传成功')

    //         default: return await uploadChunk(file, offset + 1)
    //     }
    // }
}

// 切片存储
const sliceStore = async (file: File | any) => {
    const chunkConfig = await chunkDispose(file)

    const primaryKey: number = await addFileMenu({
        uid: file.uid,
        name: file.name,
        ...chunkConfig,
    })

    getFileMenu({ primaryKey })
}

const customRequest = async ({ file }: { file: File }) => {
    await sliceStore(file)

    // uploadChunk(file, 0)
}

</script>

<style lang="less" scoped>
</style>